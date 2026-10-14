import { useEffect, useReducer, useState, type Dispatch, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Circle,
  Diamond,
  HandHeart,
  HeartPulse,
  Library,
  RotateCcw,
  ShieldAlert,
  Square,
  Timer,
  Triangle,
  Trophy,
  X,
} from "lucide-react";
import {
  CATEGORIES,
  type CategoryId,
  type PlayQuestion,
  QUESTIONS,
  buildRound,
  categoryLabel,
  toPlay,
} from "@/data/trivia";

const DURATION = 20_000;
const BEST_KEY = "trivia-salud-best-v1";
const NAME_KEY = "trivia-salud-name-v1";

const ICONS = {
  tipos: Library,
  riesgo: ShieldAlert,
  sintomas: HeartPulse,
  cuidados: HandHeart,
} as const;

const TILES = [
  { letter: "A", Icon: Triangle, face: "bg-teal text-paper" },
  { letter: "B", Icon: Diamond, face: "bg-clay text-paper" },
  { letter: "C", Icon: Circle, face: "bg-night text-paper" },
  { letter: "D", Icon: Square, face: "border-2 border-ink bg-card text-ink" },
] as const;

type Mode = "juego" | "estudio";
type Scope = CategoryId | "all";

type AnswerRec = PlayQuestion & {
  picked: number | null;
  points: number;
  bonus: number;
};

type BestRecord = {
  name: string;
  score: number;
  correct: number;
  total: number;
};

type State = {
  phase: "home" | "bank" | "question" | "reveal" | "results";
  mode: Mode;
  name: string;
  scope: Scope;
  questions: PlayQuestion[];
  index: number;
  score: number;
  streak: number;
  bestStreak: number;
  remaining: number;
  startedAt: number;
  answers: AnswerRec[];
  isRecord: boolean;
  confirmExit: boolean;
};

type Action =
  | { type: "mode"; mode: Mode }
  | { type: "name"; name: string }
  | { type: "start"; scope: Scope; questions: PlayQuestion[] }
  | { type: "tick"; now: number }
  | { type: "answer"; picked: number | null }
  | { type: "next" }
  | { type: "home" }
  | { type: "bank" }
  | { type: "ask-exit" }
  | { type: "cancel-exit" }
  | { type: "retry"; questions: PlayQuestion[] }
  | { type: "record" };

function freshPlay(
  prev: State,
  scope: Scope,
  questions: PlayQuestion[],
): State {
  return {
    ...prev,
    phase: "question",
    scope,
    questions,
    index: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    remaining: DURATION,
    startedAt: Date.now(),
    answers: [],
    isRecord: false,
    confirmExit: false,
  };
}

function applyAnswer(state: State, picked: number | null): State {
  if (state.phase !== "question") return state;
  const question = state.questions[state.index];
  if (!question) return state;
  const ok = picked !== null && picked === question.correct;
  const ratio = state.mode === "estudio" ? 0.5 : Math.max(0, state.remaining) / DURATION;
  const points = ok ? Math.max(state.mode === "estudio" ? 500 : 80, Math.round(1000 * ratio)) : 0;
  const streak = ok ? state.streak + 1 : 0;
  const bonus = ok && streak >= 3 ? Math.min(200, (streak - 2) * 50) : 0;
  const answer: AnswerRec = { ...question, picked, points, bonus };
  return {
    ...state,
    phase: "reveal",
    score: state.score + points + bonus,
    streak,
    bestStreak: Math.max(state.bestStreak, streak),
    answers: [...state.answers, answer],
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "mode":
      return { ...state, mode: action.mode };
    case "name":
      return { ...state, name: action.name.slice(0, 24) };
    case "start":
      return freshPlay(state, action.scope, action.questions);
    case "retry":
      return freshPlay(state, state.scope, action.questions);
    case "tick": {
      if (state.phase !== "question" || state.mode !== "juego") return state;
      const remaining = Math.max(0, state.startedAt + DURATION - action.now);
      if (remaining <= 0) return applyAnswer({ ...state, remaining: 0 }, null);
      return { ...state, remaining };
    }
    case "answer":
      return applyAnswer(state, action.picked);
    case "next": {
      if (state.phase !== "reveal") return state;
      const nextIndex = state.index + 1;
      if (nextIndex >= state.questions.length) {
        return { ...state, phase: "results", confirmExit: false };
      }
      return {
        ...state,
        phase: "question",
        index: nextIndex,
        remaining: DURATION,
        startedAt: Date.now(),
      };
    }
    case "home":
      return { ...state, phase: "home", confirmExit: false, answers: [], questions: [] };
    case "bank":
      return { ...state, phase: "bank", confirmExit: false };
    case "ask-exit":
      return { ...state, confirmExit: true };
    case "cancel-exit":
      return { ...state, confirmExit: false };
    case "record":
      return { ...state, isRecord: true };
    default:
      return state;
  }
}

const initialState: State = {
  phase: "home",
  mode: "juego",
  name: "",
  scope: "all",
  questions: [],
  index: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  remaining: DURATION,
  startedAt: 0,
  answers: [],
  isRecord: false,
  confirmExit: false,
};

function readBest(): BestRecord | null {
  try {
    const raw = localStorage.getItem(BEST_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BestRecord;
    if (typeof parsed.score !== "number" || typeof parsed.correct !== "number") return null;
    return parsed;
  } catch {
    return null;
  }
}

function scopeTitle(scope: Scope): string {
  return scope === "all" ? "Trivia completa" : categoryLabel(scope);
}

export function TriviaApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [best, setBest] = useState<BestRecord | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(NAME_KEY);
    if (savedName) dispatch({ type: "name", name: savedName });
    setBest(readBest());
  }, []);

  useEffect(() => {
    if (state.phase !== "question" || state.mode !== "juego") return;
    const id = window.setInterval(() => {
      dispatch({ type: "tick", now: Date.now() });
    }, 100);
    return () => window.clearInterval(id);
  }, [state.phase, state.index, state.mode, state.startedAt]);

  useEffect(() => {
    if (state.phase !== "question" && state.phase !== "reveal") return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (state.phase === "question") {
        const map: Record<string, number> = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
        const picked = map[event.key.toLowerCase()];
        if (picked === undefined) return;
        event.preventDefault();
        dispatch({ type: "answer", picked });
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        dispatch({ type: "next" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.phase, state.index]);

  useEffect(() => {
    if (state.phase !== "results") return;
    if (state.mode !== "juego" || state.scope !== "all") return;
    const correct = state.answers.filter((answer) => answer.picked === answer.correct).length;
    const current = readBest();
    if (current && current.score >= state.score) return;
    const record: BestRecord = {
      name: state.name.trim() || "Jugador",
      score: state.score,
      correct,
      total: state.answers.length,
    };
    localStorage.setItem(BEST_KEY, JSON.stringify(record));
    setBest(record);
    if (!state.isRecord) dispatch({ type: "record" });
  }, [state.phase, state.mode, state.scope, state.score, state.answers, state.name, state.isRecord]);

  function begin(scope: Scope) {
    const trimmed = state.name.trim();
    if (trimmed) localStorage.setItem(NAME_KEY, trimmed);
    else localStorage.removeItem(NAME_KEY);
    dispatch({ type: "start", scope, questions: buildRound(scope) });
  }

  if (state.phase === "home") {
    return <HomeScreen state={state} best={best} dispatch={dispatch} onBegin={begin} />;
  }
  if (state.phase === "bank") {
    return <BankScreen onHome={() => dispatch({ type: "home" })} />;
  }
  if (state.phase === "results") {
    return (
      <ResultsScreen
        state={state}
        onHome={() => dispatch({ type: "home" })}
        onRetry={() => dispatch({ type: "retry", questions: buildRound(state.scope) })}
        onMissed={() => {
          const missed = state.answers.filter((answer) => answer.picked !== answer.correct);
          const questions = missed
            .map((answer) => QUESTIONS.find((question) => question.id === answer.id))
            .filter((question): question is (typeof QUESTIONS)[number] => Boolean(question))
            .map(toPlay);
          dispatch({ type: "retry", questions });
        }}
      />
    );
  }

  return <PlayScreen state={state} dispatch={dispatch} />;
}

function Shell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-paper text-ink">{children}</div>;
}

function TopBar({
  action,
}: {
  action?: ReactNode;
}) {
  return (
    <header className="bg-night text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal text-paper">
          <HeartPulse className="size-4" aria-hidden="true" />
        </span>
          <p className="truncate text-sm font-semibold tracking-wide">Trivia de la Salud</p>
        </div>
        {action}
      </div>
    </header>
  );
}

function HomeScreen({
  state,
  best,
  dispatch,
  onBegin,
}: {
  state: State;
  best: BestRecord | null;
  dispatch: Dispatch<Action>;
  onBegin: (scope: Scope) => void;
}) {
  return (
    <Shell>
      <TopBar
        action={
          <button
            type="button"
            onClick={() => dispatch({ type: "bank" })}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-paper"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            Banco docente
          </button>
        }
      />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-sm font-semibold tracking-widest text-teal uppercase">Enfermedades crónicas</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold text-ink sm:text-6xl">
          Trivia de la salud
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Veinte preguntas para reconocer los tipos, los factores de riesgo, los síntomas y los cuidados
          que se trabajan en clase. Se juega en el navegador, sin instalar nada.
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex rounded-full border border-line bg-card p-1" role="group" aria-label="Modo de juego">
              <button
                type="button"
                aria-pressed={state.mode === "juego"}
                onClick={() => dispatch({ type: "mode", mode: "juego" })}
                className={
                  "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold " +
                  (state.mode === "juego" ? "bg-night text-paper" : "text-muted")
                }
              >
                <Timer className="size-4" aria-hidden="true" />
                Con tiempo
              </button>
              <button
                type="button"
                aria-pressed={state.mode === "estudio"}
                onClick={() => dispatch({ type: "mode", mode: "estudio" })}
                className={
                  "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold " +
                  (state.mode === "estudio" ? "bg-night text-paper" : "text-muted")
                }
              >
                <BookOpen className="size-4" aria-hidden="true" />
                Modo clase
              </button>
            </div>
            <label className="block">
              <span className="sr-only">Nombre</span>
              <input
                value={state.name}
                onChange={(event) => dispatch({ type: "name", name: event.target.value })}
                placeholder="Tu nombre (opcional)"
                maxLength={24}
                className="min-h-12 w-full rounded-full border border-line bg-card px-4 text-base text-ink placeholder:text-muted sm:w-64"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={() => onBegin("all")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 text-base font-semibold text-paper hover:bg-teal-deep"
          >
            Jugar las 20
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-sm text-muted">
          {state.mode === "juego"
            ? "20 segundos por pregunta. Acertar rápido suma más. Una racha de 3 o más da bono."
            : "Sin cronómetro: sirve para proyectar en clase y leer la explicación con calma."}
          {best ? (
            <span className="mt-1 block text-ink">
              Mejor trivia completa: {best.name} · {best.score.toLocaleString("es-MX")} pts · {best.correct}/
              {best.total}
            </span>
          ) : null}
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold">O practica por categoría</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((category) => {
            const Icon = ICONS[category.id];
            return (
              <article key={category.id} className="flex flex-col rounded-card border border-line bg-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-3xl font-semibold text-teal">{category.index}</span>
                  <Icon className="size-5 text-teal" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-2xl leading-snug font-semibold">{category.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{category.blurb}</p>
                <button
                  type="button"
                  onClick={() => onBegin(category.id)}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-ink px-4 text-sm font-semibold text-ink"
                >
                  5 preguntas
                </button>
              </article>
            );
          })}
        </div>
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-sm leading-relaxed text-muted sm:px-6">
        Material educativo para el aula. No sustituye la valoración ni el tratamiento de un profesional de la
        salud. El enlace de esta trivia es el acceso al juego.
      </footer>
    </Shell>
  );
}

function PlayScreen({ state, dispatch }: { state: State; dispatch: Dispatch<Action> }) {
  const question = state.questions[state.index];
  if (!question) return null;
  const last = state.answers[state.answers.length - 1];
  const revealing = state.phase === "reveal" && last?.id === question.id;
  const seconds = Math.ceil(state.remaining / 1000);
  const ratio = state.mode === "juego" ? state.remaining / DURATION : 1;
  const low = state.mode === "juego" && seconds <= 5 && state.phase === "question";

  return (
    <Shell>
      <TopBar
        action={
          state.confirmExit ? (
            <div className="flex items-center gap-2 text-sm">
              <span>¿Salir?</span>
              <button
                type="button"
                onClick={() => dispatch({ type: "home" })}
                className="min-h-11 rounded-full bg-clay px-3 font-semibold text-paper"
              >
                Sí, salir
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "cancel-exit" })}
                className="min-h-11 rounded-full px-3 font-semibold text-paper"
              >
                Seguir
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => dispatch({ type: "ask-exit" })}
              className="min-h-11 rounded-full px-3 text-sm font-semibold text-paper"
            >
              Salir
            </button>
          )
        }
      />
      <div className="h-1.5 bg-line" aria-hidden="true">
        <div
          className={"h-full w-full origin-left " + (low ? "bg-clay" : "bg-teal")}
          style={{
            transform: `scaleX(${
              state.mode === "juego"
                ? ratio
                : (state.index + (revealing ? 1 : 0)) / state.questions.length
            })`,
          }}
        />
      </div>
      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-12 lg:py-10">
        <section className="lg:col-span-5">
          <p className="text-sm font-semibold text-teal">{categoryLabel(question.category)}</p>
          <p className="mt-2 text-sm text-muted tabular">
            Pregunta {state.index + 1} de {state.questions.length}
            <span className="mx-2 text-line">/</span>
            {scopeTitle(state.scope)}
          </p>
          <h1
            tabIndex={-1}
            className="mt-4 font-display text-3xl leading-tight font-semibold sm:text-4xl"
          >
            {question.prompt}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-card px-3 py-2 font-semibold tabular ring-1 ring-line">
              {state.score.toLocaleString("es-MX")} pts
            </span>
            {state.mode === "juego" ? (
              <span className={"rounded-full px-3 py-2 font-semibold tabular " + (low ? "bg-clay text-paper" : "bg-night text-paper")}>
                {state.phase === "question" ? `${seconds} s` : "Tiempo"}
              </span>
            ) : (
              <span className="rounded-full bg-night px-3 py-2 font-semibold text-paper">Modo clase</span>
            )}
            {state.streak >= 2 ? (
              <span className="rounded-full bg-card px-3 py-2 font-semibold ring-1 ring-line">Racha {state.streak}</span>
            ) : null}
          </div>
          <p className="mt-6 hidden text-sm text-muted lg:block">Teclas 1 a 4, o A B C D. Enter para continuar.</p>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 lg:col-span-7" aria-label="Opciones">
          {question.choices.map((choice, index) => {
            const tile = TILES[index] ?? TILES[0];
            const Icon = tile.Icon;
            const isCorrect = revealing && index === question.correct;
            const isWrongPick = revealing && last?.picked === index && index !== question.correct;
            const dim = revealing && !isCorrect && !isWrongPick;
            return (
              <button
                key={choice}
                type="button"
                disabled={state.phase !== "question"}
                onClick={() => dispatch({ type: "answer", picked: index })}
                className={
                  "flex min-h-16 items-center gap-3 rounded-card px-4 py-4 text-left text-base leading-snug font-semibold transition disabled:cursor-default " +
                  tile.face +
                  (dim ? " opacity-45" : "") +
                  (isCorrect ? " ring-4 ring-teal ring-offset-2 ring-offset-paper" : "") +
                  (isWrongPick ? " ring-4 ring-clay ring-offset-2 ring-offset-paper" : "")
                }
              >
                <Icon className="size-5 shrink-0" aria-hidden="true" />
                <span className="sr-only">Opción {tile.letter}. </span>
                <span>{choice}</span>
                {isCorrect ? <Check className="ml-auto size-5 shrink-0" aria-hidden="true" /> : null}
                {isWrongPick ? <X className="ml-auto size-5 shrink-0" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </section>

        {revealing && last ? (
          <section className="rounded-card border border-line bg-card p-5 lg:col-span-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className={"font-display text-2xl font-semibold " + (last.picked === last.correct ? "text-teal" : "text-clay")}>
                  {last.picked === null
                    ? "Se acabó el tiempo"
                    : last.picked === last.correct
                      ? "Correcto"
                      : "No es esa"}
                </p>
                <p className="mt-1 text-sm text-muted tabular">
                  +{last.points.toLocaleString("es-MX")}
                  {last.bonus > 0 ? ` · racha +${last.bonus}` : ""}
                </p>
                <p className="mt-3 max-w-3xl leading-relaxed text-ink">{question.explain}</p>
              </div>
              <button
                type="button"
                onClick={() => dispatch({ type: "next" })}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-teal px-5 font-semibold text-paper hover:bg-teal-deep"
              >
                {state.index + 1 >= state.questions.length ? "Ver resultado" : "Siguiente"}
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </section>
        ) : null}
      </main>
    </Shell>
  );
}

function ResultsScreen({
  state,
  onHome,
  onRetry,
  onMissed,
}: {
  state: State;
  onHome: () => void;
  onRetry: () => void;
  onMissed: () => void;
}) {
  const correct = state.answers.filter((answer) => answer.picked === answer.correct).length;
  const total = state.answers.length || 1;
  const percent = Math.round((correct / total) * 100);
  const missed = state.answers.length - correct;
  const player = state.name.trim() || "Jugador";

  return (
    <Shell>
      <TopBar />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-sm font-semibold tracking-widest text-teal uppercase">{scopeTitle(state.scope)}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Resultado de {player}</h1>
        {state.isRecord ? (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-night px-3 py-1 text-sm font-semibold text-paper">
            <Trophy className="size-4" aria-hidden="true" />
            Nuevo récord de la trivia completa
          </p>
        ) : null}
        <p className="mt-6 font-display text-6xl font-semibold tabular text-teal">{percent}%</p>
        <p className="mt-2 text-lg text-ink">
          {correct} de {state.answers.length} correctas
          {state.mode === "juego" ? ` · ${state.score.toLocaleString("es-MX")} pts` : " · modo clase"}
        </p>
        {state.bestStreak >= 2 ? (
          <p className="mt-1 text-sm text-muted">Mejor racha: {state.bestStreak} seguidas</p>
        ) : null}

        <h2 className="mt-10 font-display text-2xl font-semibold">Por categoría</h2>
        <ul className="mt-4 space-y-4">
          {CATEGORIES.map((category) => {
            const rows = state.answers.filter((answer) => answer.category === category.id);
            if (rows.length === 0) return null;
            const hits = rows.filter((answer) => answer.picked === answer.correct).length;
            const width = Math.round((hits / rows.length) * 100);
            return (
              <li key={category.id}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-semibold">{category.label}</span>
                  <span className="tabular text-muted">
                    {hits}/{rows.length}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-teal" style={{ width: `${width}%` }} />
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-5 font-semibold text-paper hover:bg-teal-deep"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Jugar de nuevo
          </button>
          <button
            type="button"
            onClick={onMissed}
            disabled={missed === 0}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-5 font-semibold text-ink disabled:opacity-40"
          >
            Solo las que fallé
          </button>
          <button
            type="button"
            onClick={onHome}
            className="inline-flex min-h-12 items-center justify-center rounded-full px-5 font-semibold text-muted"
          >
            Inicio
          </button>
        </div>

        <h2 className="mt-12 font-display text-2xl font-semibold">Repaso</h2>
        <ol className="mt-4 space-y-3">
          {state.answers.map((answer, index) => {
            const ok = answer.picked === answer.correct;
            return (
              <li key={answer.id} className="rounded-card border border-line bg-card p-4">
                <p className="text-sm font-semibold text-muted">
                  {index + 1}. {categoryLabel(answer.category)}
                </p>
                <p className="mt-1 font-semibold">{answer.prompt}</p>
                <p className={"mt-2 text-sm " + (ok ? "text-teal" : "text-clay")}>
                  {ok ? "Correcta: " : "Respuesta: "}
                  {answer.choices[answer.correct]}
                </p>
                {!ok && answer.picked !== null ? (
                  <p className="mt-1 text-sm text-muted">Elegiste: {answer.choices[answer.picked]}</p>
                ) : null}
                {!ok && answer.picked === null ? <p className="mt-1 text-sm text-muted">Sin respuesta a tiempo.</p> : null}
              </li>
            );
          })}
        </ol>
      </main>
    </Shell>
  );
}

function BankScreen({ onHome }: { onHome: () => void }) {
  return (
    <Shell>
      <TopBar
        action={
          <button type="button" onClick={onHome} className="min-h-11 rounded-full px-3 text-sm font-semibold text-paper">
            Volver al juego
          </button>
        }
      />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-sm font-semibold tracking-widest text-teal uppercase">Para revisar la tarea</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Banco de preguntas</h1>
        <p className="mt-3 leading-relaxed text-muted">
          {QUESTIONS.length} reactivos en cuatro categorías. En el juego, el orden de las opciones cambia en
          cada partida. Aquí se muestra la respuesta correcta para la revisión docente.
        </p>
        <div className="mt-10 space-y-10">
          {CATEGORIES.map((category) => (
            <section key={category.id}>
              <h2 className="font-display text-2xl font-semibold">{category.label}</h2>
              <ol className="mt-4 space-y-4">
                {QUESTIONS.filter((question) => question.category === category.id).map((question, index) => (
                  <li key={question.id} className="rounded-card border border-line bg-card p-4">
                    <p className="font-semibold">
                      {index + 1}. {question.prompt}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm">
                      {question.choices.map((choice, choiceIndex) => {
                        const correct = choiceIndex === question.correct;
                        return (
                          <li key={choice} className={correct ? "font-semibold text-teal" : "text-muted"}>
                            {correct ? "Respuesta: " : "· "}
                            {choice}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-3 text-sm leading-relaxed text-ink">{question.explain}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </main>
    </Shell>
  );
}
