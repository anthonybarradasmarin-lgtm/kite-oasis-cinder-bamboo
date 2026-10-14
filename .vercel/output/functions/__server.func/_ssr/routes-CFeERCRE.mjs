import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Timer, c as RotateCcw, d as HandHeart, f as Diamond, g as ArrowRight, h as BookOpen, l as Library, m as Check, n as Trophy, o as Square, p as Circle, r as Triangle, s as ShieldAlert, t as X, u as HeartPulse } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CFeERCRE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "tipos",
		index: "01",
		label: "Tipos de enfermedades crónicas",
		blurb: "Qué son, cuánto duran y cuáles se estudian en clase: diabetes, hipertensión, corazón, pulmones."
	},
	{
		id: "riesgo",
		index: "02",
		label: "Factores de riesgo",
		blurb: "Lo que se puede cambiar y lo que no: tabaco, sal, sedentarismo, alcohol, edad y herencia."
	},
	{
		id: "sintomas",
		index: "03",
		label: "Síntomas y prevención",
		blurb: "Señales de alerta, la hipertensión silenciosa y cómo prevenir antes de que aparezca la enfermedad."
	},
	{
		id: "cuidados",
		index: "04",
		label: "Tratamientos y cuidados",
		blurb: "Medicamentos, adherencia, glucosa, presión, inhaladores y cuidados de todos los días."
	}
];
var QUESTIONS = [
	{
		id: "t1",
		category: "tipos",
		prompt: "Una enfermedad crónica no transmisible se reconoce sobre todo porque…",
		choices: [
			"Suele durar mucho tiempo y progresar de forma lenta",
			"Siempre se contagia de persona a persona",
			"Se cura sola en dos o tres días de reposo",
			"Solo la transmiten los mosquitos"
		],
		correct: 0,
		explain: "Diabetes, hipertensión, EPOC, cáncer y las enfermedades cardiovasculares son de larga duración. No se contagian como una infección aguda."
	},
	{
		id: "t2",
		category: "tipos",
		prompt: "Según la OMS, los grandes grupos de enfermedades crónicas no transmisibles son…",
		choices: [
			"Cardiovasculares, cáncer, respiratorias crónicas y diabetes",
			"Solo gripe, otitis y gastroenteritis",
			"Únicamente accidentes de tránsito",
			"Enfermedades que duran menos de una semana"
		],
		correct: 0,
		explain: "Esos cuatro grupos causan la mayor parte de las muertes por enfermedades crónicas en el mundo. Por eso suelen ser el eje de la clase."
	},
	{
		id: "t3",
		category: "tipos",
		prompt: "¿Qué diferencia, en general, a la diabetes tipo 1 de la tipo 2?",
		choices: [
			"La tipo 1 suele deberse a falta de insulina y requiere insulina; la tipo 2 se relaciona más con resistencia a la insulina",
			"La tipo 2 es contagiosa y la tipo 1 no",
			"La tipo 1 solo afecta a personas mayores y la tipo 2 solo a niños",
			"Ninguna de las dos es una enfermedad crónica"
		],
		correct: 0,
		explain: "En la tipo 1 el cuerpo deja de producir insulina y el tratamiento habitual es la insulina. La tipo 2, más frecuente en adultos, se asocia a resistencia a la insulina, peso y actividad, aunque también puede necesitar medicamentos. Hay excepciones: el equipo de salud individualiza el caso."
	},
	{
		id: "t4",
		category: "tipos",
		prompt: "La hipertensión arterial es…",
		choices: [
			"Una elevación persistente de la presión de la sangre sobre las arterias",
			"Una infección de las arterias",
			"Lo mismo que un infarto",
			"Un dolor de cabeza que, por sí solo, confirma el diagnóstico"
		],
		correct: 0,
		explain: "Es presión alta de forma sostenida, no un episodio aislado. En adultos, muchas guías usan 140/90 mmHg o más en mediciones repetidas. El diagnóstico lo confirma el personal de salud."
	},
	{
		id: "t5",
		category: "tipos",
		prompt: "La EPOC (enfermedad pulmonar obstructiva crónica) afecta principalmente…",
		choices: [
			"Las vías respiratorias y los pulmones",
			"El hígado y la vesícula",
			"Los huesos y las articulaciones",
			"La tiroides"
		],
		correct: 0,
		explain: "La EPOC limita el flujo de aire. Sus piezas clave en clase son la tos crónica, la falta de aire y el antecedente de tabaco o de humo de leña."
	},
	{
		id: "r1",
		category: "riesgo",
		prompt: "¿Cuál de estos es un factor de riesgo modificable?",
		choices: [
			"El tabaquismo",
			"La edad",
			"Los antecedentes familiares",
			"El sexo biológico"
		],
		correct: 0,
		explain: "Modificables: tabaco, alimentación, inactividad, alcohol y sobrepeso. No modificables: edad, herencia y sexo. La prevención actúa sobre los primeros."
	},
	{
		id: "r2",
		category: "riesgo",
		prompt: "Una alimentación rica en sal (sodio) se asocia sobre todo con mayor riesgo de…",
		choices: [
			"Hipertensión arterial",
			"Miopía",
			"Daltonismo",
			"Alergia al polen"
		],
		correct: 0,
		explain: "El exceso de sodio favorece que suba la presión. Reducir sal de mesa, embutidos y caldos concentrados es una medida habitual del cuidado."
	},
	{
		id: "r3",
		category: "riesgo",
		prompt: "La inactividad física y el sobrepeso aumentan especialmente el riesgo de…",
		choices: [
			"Diabetes tipo 2 y enfermedad cardiovascular",
			"Solo de gripe estacional",
			"Únicamente de caries dental",
			"Cambiar el color de los ojos"
		],
		correct: 0,
		explain: "Moverse poco y acumular grasa, sobre todo abdominal, empujan la resistencia a la insulina, la presión y el colesterol. Por eso entran en el plan de prevención."
	},
	{
		id: "r4",
		category: "riesgo",
		prompt: "El principal factor de riesgo evitable de la EPOC es…",
		choices: [
			"El consumo de tabaco",
			"Beber agua potable",
			"Dormir alrededor de ocho horas",
			"Usar lentes graduados"
		],
		correct: 0,
		explain: "Dejar de fumar es la medida que más cambia el curso de la EPOC. En muchos hogares también pesa el humo de leña o de biomasa al cocinar en espacios cerrados."
	},
	{
		id: "r5",
		category: "riesgo",
		prompt: "¿Cuál NO es un factor de riesgo conductual de las enfermedades crónicas, según la OMS?",
		choices: [
			"Lavarse las manos antes de comer",
			"Consumo nocivo de alcohol",
			"Dieta poco saludable",
			"Sedentarismo"
		],
		correct: 0,
		explain: "Los cuatro factores conductuales clásicos son tabaco, inactividad, dieta no saludable y consumo nocivo de alcohol. Lavarse las manos previene infecciones, no es un riesgo de estas enfermedades."
	},
	{
		id: "s1",
		category: "sintomas",
		prompt: "¿Qué tríada puede orientar a una glucosa muy alta?",
		choices: [
			"Orinar mucho, mucha sed y mucha hambre",
			"Estornudos, congestión y fiebre de un día",
			"Dolor de oído y zumbido",
			"Una erupción que desaparece en horas"
		],
		correct: 0,
		explain: "Poliuria, polidipsia y polifagia son la tríada clásica. También puede haber cansancio y pérdida de peso. No reemplazan el diagnóstico: hacen falta medición y valoración médica. En la tipo 2 temprana a veces casi no hay síntomas."
	},
	{
		id: "s2",
		category: "sintomas",
		prompt: "¿Por qué a la hipertensión se le llama a menudo «asesina silenciosa»?",
		choices: [
			"Puede no dar síntomas durante años y aun así dañar corazón, cerebro y riñones",
			"Porque siempre provoca fiebre alta",
			"Porque es contagiosa aunque la persona no tosa",
			"Porque duele solo de noche y se cura sola"
		],
		correct: 0,
		explain: "Muchas personas se sienten bien y ya tienen la presión alta. Por eso se mide, no se espera a «sentirla». El dolor de cabeza no confirma ni descarta hipertensión."
	},
	{
		id: "s3",
		category: "sintomas",
		prompt: "Una medida de prevención primaria es…",
		choices: [
			"Actividad física regular, alimentación saludable y no fumar",
			"Esperar al primer infarto para cambiar hábitos",
			"Dejar los medicamentos en cuanto uno se siente bien",
			"Quitar todas las frutas de la dieta"
		],
		correct: 0,
		explain: "Prevención primaria es evitar que la enfermedad aparezca. Moverse, comer con más verdura y menos ultraprocesados, no fumar y moderar el alcohol son el núcleo de esa prevención."
	},
	{
		id: "s4",
		category: "sintomas",
		prompt: "Síntomas frecuentes de la EPOC:",
		choices: [
			"Falta de aire, tos crónica y expectoración",
			"Solo picazón en la piel",
			"Dolor de muelas como único dato",
			"Cambios en el color del iris"
		],
		correct: 0,
		explain: "La disnea al esfuerzo, la tos que no se quita y la flema orientan a EPOC, sobre todo si hay historia de tabaco o de humo. El diagnóstico lo precisa una espirometría."
	},
	{
		id: "s5",
		category: "sintomas",
		prompt: "Cara caída, un brazo débil y dificultad para hablar. ¿Qué corresponde hacer?",
		choices: [
			"Activar emergencias de inmediato: puede ser un accidente cerebrovascular",
			"Esperar en casa a ver si se le pasa",
			"Dar de comer para «bajar la presión»",
			"Ofrecer un remedio casero y no avisar a nadie"
		],
		correct: 0,
		explain: "Cara, brazo y habla son señales de alarma. El tiempo es cerebro: hay que pedir ayuda urgente. No es un diagnóstico casero y no se ofrecen alimentos ni líquidos a quien puede tener dificultad para tragar."
	},
	{
		id: "c1",
		category: "cuidados",
		prompt: "El cuidado de la diabetes tipo 2 suele combinar…",
		choices: [
			"Alimentación, actividad física y medicamentos si el equipo de salud los indica",
			"Solo reposo absoluto de por vida",
			"Suspender todos los controles de glucosa",
			"Únicamente infusiones, sin seguimiento"
		],
		correct: 0,
		explain: "La base es el estilo de vida. Si hace falta, se agregan fármacos (por ejemplo metformina) o insulina, siempre indicados. Las infusiones no sustituyen el tratamiento."
	},
	{
		id: "c2",
		category: "cuidados",
		prompt: "En hipertensión, además del medicamento indicado, ayuda…",
		choices: [
			"Reducir el sodio, cuidar el peso, moverse y no abandonar el tratamiento",
			"Subir la sal «para tener más energía»",
			"Duplicar la dosis los días en que uno se siente bien",
			"Tomar la pastilla solo cuando duele la cabeza"
		],
		correct: 0,
		explain: "El fármaco no reemplaza los hábitos, y los hábitos no autorizan a cambiar la dosis por cuenta propia. La presión alta a menudo no duele: no hay que esperar el dolor para tomar el medicamento."
	},
	{
		id: "c3",
		category: "cuidados",
		prompt: "Adherencia al tratamiento significa…",
		choices: [
			"Seguir de forma constante medicamentos, citas, alimentación y actividad",
			"Tomar el doble de pastillas el fin de semana",
			"Cambiar de fármaco cada semana sin consultar",
			"Dejar todo en cuanto desaparecen los síntomas"
		],
		correct: 0,
		explain: "Muchas enfermedades crónicas no se «sienten» y por eso se abandonan. Seguir el plan previene infartos, derrames, daño renal y descompensaciones."
	},
	{
		id: "c4",
		category: "cuidados",
		prompt: "¿Para qué sirve medirse la glucosa cuando el equipo de salud lo indicó?",
		choices: [
			"Para detectar descontroles y ajustar el cuidado junto con ese equipo",
			"Para sustituir por completo la consulta médica",
			"Para diagnosticar a familiares sin ningún estudio",
			"Solo para publicarlo en redes sociales"
		],
		correct: 0,
		explain: "El automonitoreo muestra hipoglucemias e hiperglucemias y ayuda a decidir con quien atiende a la persona. No reemplaza la hemoglobina glucosilada ni la consulta."
	},
	{
		id: "c5",
		category: "cuidados",
		prompt: "Un cuidado clave de quien vive con EPOC es…",
		choices: [
			"Dejar el tabaco, usar los inhaladores como se indicaron y vacunarse según el plan",
			"Seguir fumando para «acostumbrar» el pulmón",
			"Suspender el inhalador el primer día que se siente mejor, sin consultar",
			"Evitar cualquier actividad, incluso la que tolera"
		],
		correct: 0,
		explain: "Dejar el cigarro es lo que más frena el daño. Los inhaladores se usan como fueron prescritos, la vacuna de influenza y la del neumococo se valoran con el equipo de salud, y la actividad física adaptada forma parte de la rehabilitación."
	}
];
function questionsByCategory(id) {
	return QUESTIONS.filter((question) => question.category === id);
}
function shuffle(items) {
	const next = [...items];
	for (let index = next.length - 1; index > 0; index -= 1) {
		const swap = Math.floor(Math.random() * (index + 1));
		const current = next[index];
		next[index] = next[swap];
		next[swap] = current;
	}
	return next;
}
function toPlay(question) {
	const order = shuffle([
		0,
		1,
		2,
		3
	]);
	return {
		id: question.id,
		category: question.category,
		prompt: question.prompt,
		choices: order.map((index) => question.choices[index]),
		correct: order.indexOf(question.correct),
		explain: question.explain
	};
}
function buildRound(scope) {
	if (scope === "all") return CATEGORIES.flatMap((category) => shuffle(questionsByCategory(category.id)).map(toPlay));
	return shuffle(questionsByCategory(scope)).map(toPlay);
}
function categoryLabel(id) {
	return CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
var DURATION = 2e4;
var BEST_KEY = "trivia-salud-best-v1";
var NAME_KEY = "trivia-salud-name-v1";
var ICONS = {
	tipos: Library,
	riesgo: ShieldAlert,
	sintomas: HeartPulse,
	cuidados: HandHeart
};
var TILES = [
	{
		letter: "A",
		Icon: Triangle,
		face: "bg-teal text-paper"
	},
	{
		letter: "B",
		Icon: Diamond,
		face: "bg-clay text-paper"
	},
	{
		letter: "C",
		Icon: Circle,
		face: "bg-night text-paper"
	},
	{
		letter: "D",
		Icon: Square,
		face: "border-2 border-ink bg-card text-ink"
	}
];
function freshPlay(prev, scope, questions) {
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
		confirmExit: false
	};
}
function applyAnswer(state, picked) {
	if (state.phase !== "question") return state;
	const question = state.questions[state.index];
	if (!question) return state;
	const ok = picked !== null && picked === question.correct;
	const ratio = state.mode === "estudio" ? .5 : Math.max(0, state.remaining) / DURATION;
	const points = ok ? Math.max(state.mode === "estudio" ? 500 : 80, Math.round(1e3 * ratio)) : 0;
	const streak = ok ? state.streak + 1 : 0;
	const bonus = ok && streak >= 3 ? Math.min(200, (streak - 2) * 50) : 0;
	const answer = {
		...question,
		picked,
		points,
		bonus
	};
	return {
		...state,
		phase: "reveal",
		score: state.score + points + bonus,
		streak,
		bestStreak: Math.max(state.bestStreak, streak),
		answers: [...state.answers, answer]
	};
}
function reducer(state, action) {
	switch (action.type) {
		case "mode": return {
			...state,
			mode: action.mode
		};
		case "name": return {
			...state,
			name: action.name.slice(0, 24)
		};
		case "start": return freshPlay(state, action.scope, action.questions);
		case "retry": return freshPlay(state, state.scope, action.questions);
		case "tick": {
			if (state.phase !== "question" || state.mode !== "juego") return state;
			const remaining = Math.max(0, state.startedAt + DURATION - action.now);
			if (remaining <= 0) return applyAnswer({
				...state,
				remaining: 0
			}, null);
			return {
				...state,
				remaining
			};
		}
		case "answer": return applyAnswer(state, action.picked);
		case "next": {
			if (state.phase !== "reveal") return state;
			const nextIndex = state.index + 1;
			if (nextIndex >= state.questions.length) return {
				...state,
				phase: "results",
				confirmExit: false
			};
			return {
				...state,
				phase: "question",
				index: nextIndex,
				remaining: DURATION,
				startedAt: Date.now()
			};
		}
		case "home": return {
			...state,
			phase: "home",
			confirmExit: false,
			answers: [],
			questions: []
		};
		case "bank": return {
			...state,
			phase: "bank",
			confirmExit: false
		};
		case "ask-exit": return {
			...state,
			confirmExit: true
		};
		case "cancel-exit": return {
			...state,
			confirmExit: false
		};
		case "record": return {
			...state,
			isRecord: true
		};
		default: return state;
	}
}
var initialState = {
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
	confirmExit: false
};
function readBest() {
	try {
		const raw = localStorage.getItem(BEST_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (typeof parsed.score !== "number" || typeof parsed.correct !== "number") return null;
		return parsed;
	} catch {
		return null;
	}
}
function scopeTitle(scope) {
	return scope === "all" ? "Trivia completa" : categoryLabel(scope);
}
function TriviaApp() {
	const [state, dispatch] = (0, import_react.useReducer)(reducer, initialState);
	const [best, setBest] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const savedName = localStorage.getItem(NAME_KEY);
		if (savedName) dispatch({
			type: "name",
			name: savedName
		});
		setBest(readBest());
	}, []);
	(0, import_react.useEffect)(() => {
		if (state.phase !== "question" || state.mode !== "juego") return;
		const id = window.setInterval(() => {
			dispatch({
				type: "tick",
				now: Date.now()
			});
		}, 100);
		return () => window.clearInterval(id);
	}, [
		state.phase,
		state.index,
		state.mode,
		state.startedAt
	]);
	(0, import_react.useEffect)(() => {
		if (state.phase !== "question" && state.phase !== "reveal") return;
		const onKey = (event) => {
			const target = event.target;
			if (target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
			if (state.phase === "question") {
				const picked = {
					"1": 0,
					"2": 1,
					"3": 2,
					"4": 3,
					a: 0,
					b: 1,
					c: 2,
					d: 3
				}[event.key.toLowerCase()];
				if (picked === void 0) return;
				event.preventDefault();
				dispatch({
					type: "answer",
					picked
				});
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
	(0, import_react.useEffect)(() => {
		if (state.phase !== "results") return;
		if (state.mode !== "juego" || state.scope !== "all") return;
		const correct = state.answers.filter((answer) => answer.picked === answer.correct).length;
		const current = readBest();
		if (current && current.score >= state.score) return;
		const record = {
			name: state.name.trim() || "Jugador",
			score: state.score,
			correct,
			total: state.answers.length
		};
		localStorage.setItem(BEST_KEY, JSON.stringify(record));
		setBest(record);
		if (!state.isRecord) dispatch({ type: "record" });
	}, [
		state.phase,
		state.mode,
		state.scope,
		state.score,
		state.answers,
		state.name,
		state.isRecord
	]);
	function begin(scope) {
		const trimmed = state.name.trim();
		if (trimmed) localStorage.setItem(NAME_KEY, trimmed);
		else localStorage.removeItem(NAME_KEY);
		dispatch({
			type: "start",
			scope,
			questions: buildRound(scope)
		});
	}
	if (state.phase === "home") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
		state,
		best,
		dispatch,
		onBegin: begin
	});
	if (state.phase === "bank") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankScreen, { onHome: () => dispatch({ type: "home" }) });
	if (state.phase === "results") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultsScreen, {
		state,
		onHome: () => dispatch({ type: "home" }),
		onRetry: () => dispatch({
			type: "retry",
			questions: buildRound(state.scope)
		}),
		onMissed: () => {
			const questions = state.answers.filter((answer) => answer.picked !== answer.correct).map((answer) => QUESTIONS.find((question) => question.id === answer.id)).filter((question) => Boolean(question)).map(toPlay);
			dispatch({
				type: "retry",
				questions
			});
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayScreen, {
		state,
		dispatch
	});
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-paper text-ink",
		children
	});
}
function TopBar({ action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "bg-night text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-8 shrink-0 place-items-center rounded-full bg-teal text-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
						className: "size-4",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-semibold tracking-wide",
					children: "Trivia de la Salud"
				})]
			}), action]
		})
	});
}
function HomeScreen({ state, best, dispatch, onBegin }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => dispatch({ type: "bank" }),
			className: "inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
				className: "size-4",
				"aria-hidden": "true"
			}), "Banco docente"]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-widest text-teal uppercase",
					children: "Enfermedades crónicas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold text-ink sm:text-6xl",
					children: "Trivia de la salud"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
					children: "Veinte preguntas para reconocer los tipos, los factores de riesgo, los síntomas y los cuidados que se trabajan en clase. Se juega en el navegador, sin instalar nada."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex rounded-full border border-line bg-card p-1",
							role: "group",
							"aria-label": "Modo de juego",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": state.mode === "juego",
								onClick: () => dispatch({
									type: "mode",
									mode: "juego"
								}),
								className: "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold " + (state.mode === "juego" ? "bg-night text-paper" : "text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Con tiempo"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": state.mode === "estudio",
								onClick: () => dispatch({
									type: "mode",
									mode: "estudio"
								}),
								className: "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold " + (state.mode === "estudio" ? "bg-night text-paper" : "text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Modo clase"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Nombre"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: state.name,
								onChange: (event) => dispatch({
									type: "name",
									name: event.target.value
								}),
								placeholder: "Tu nombre (opcional)",
								maxLength: 24,
								className: "min-h-12 w-full rounded-full border border-line bg-card px-4 text-base text-ink placeholder:text-muted sm:w-64"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onBegin("all"),
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 text-base font-semibold text-paper hover:bg-teal-deep",
						children: ["Jugar las 20", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [state.mode === "juego" ? "20 segundos por pregunta. Acertar rápido suma más. Una racha de 3 o más da bono." : "Sin cronómetro: sirve para proyectar en clase y leer la explicación con calma.", best ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-ink",
						children: [
							"Mejor trivia completa: ",
							best.name,
							" · ",
							best.score.toLocaleString("es-MX"),
							" pts · ",
							best.correct,
							"/",
							best.total
						]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 font-display text-2xl font-semibold",
					children: "O practica por categoría"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: CATEGORIES.map((category) => {
						const Icon = ICONS[category.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col rounded-card border border-line bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl font-semibold text-teal",
										children: category.index
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5 text-teal",
										"aria-hidden": "true"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl leading-snug font-semibold",
									children: category.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
									children: category.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => onBegin(category.id),
									className: "mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-ink px-4 text-sm font-semibold text-ink",
									children: "5 preguntas"
								})
							]
						}, category.id);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "mx-auto max-w-6xl px-4 pb-10 text-sm leading-relaxed text-muted sm:px-6",
			children: "Material educativo para el aula. No sustituye la valoración ni el tratamiento de un profesional de la salud. El enlace de esta trivia es el acceso al juego."
		})
	] });
}
function PlayScreen({ state, dispatch }) {
	const question = state.questions[state.index];
	if (!question) return null;
	const last = state.answers[state.answers.length - 1];
	const revealing = state.phase === "reveal" && last?.id === question.id;
	const seconds = Math.ceil(state.remaining / 1e3);
	const ratio = state.mode === "juego" ? state.remaining / DURATION : 1;
	const low = state.mode === "juego" && seconds <= 5 && state.phase === "question";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { action: state.confirmExit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "¿Salir?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => dispatch({ type: "home" }),
					className: "min-h-11 rounded-full bg-clay px-3 font-semibold text-paper",
					children: "Sí, salir"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => dispatch({ type: "cancel-exit" }),
					className: "min-h-11 rounded-full px-3 font-semibold text-paper",
					children: "Seguir"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => dispatch({ type: "ask-exit" }),
			className: "min-h-11 rounded-full px-3 text-sm font-semibold text-paper",
			children: "Salir"
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 bg-line",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full w-full origin-left " + (low ? "bg-clay" : "bg-teal"),
				style: { transform: `scaleX(${state.mode === "juego" ? ratio : (state.index + (revealing ? 1 : 0)) / state.questions.length})` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-12 lg:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-teal",
							children: categoryLabel(question.category)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted tabular",
							children: [
								"Pregunta ",
								state.index + 1,
								" de ",
								state.questions.length,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2 text-line",
									children: "/"
								}),
								scopeTitle(state.scope)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							tabIndex: -1,
							className: "mt-4 font-display text-3xl leading-tight font-semibold sm:text-4xl",
							children: question.prompt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-card px-3 py-2 font-semibold tabular ring-1 ring-line",
									children: [state.score.toLocaleString("es-MX"), " pts"]
								}),
								state.mode === "juego" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full px-3 py-2 font-semibold tabular " + (low ? "bg-clay text-paper" : "bg-night text-paper"),
									children: state.phase === "question" ? `${seconds} s` : "Tiempo"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-night px-3 py-2 font-semibold text-paper",
									children: "Modo clase"
								}),
								state.streak >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-card px-3 py-2 font-semibold ring-1 ring-line",
									children: ["Racha ", state.streak]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 hidden text-sm text-muted lg:block",
							children: "Teclas 1 a 4, o A B C D. Enter para continuar."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "grid gap-3 sm:grid-cols-2 lg:col-span-7",
					"aria-label": "Opciones",
					children: question.choices.map((choice, index) => {
						const tile = TILES[index] ?? TILES[0];
						const Icon = tile.Icon;
						const isCorrect = revealing && index === question.correct;
						const isWrongPick = revealing && last?.picked === index && index !== question.correct;
						const dim = revealing && !isCorrect && !isWrongPick;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: state.phase !== "question",
							onClick: () => dispatch({
								type: "answer",
								picked: index
							}),
							className: "flex min-h-16 items-center gap-3 rounded-card px-4 py-4 text-left text-base leading-snug font-semibold transition disabled:cursor-default " + tile.face + (dim ? " opacity-45" : "") + (isCorrect ? " ring-4 ring-teal ring-offset-2 ring-offset-paper" : "") + (isWrongPick ? " ring-4 ring-clay ring-offset-2 ring-offset-paper" : ""),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 shrink-0",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sr-only",
									children: [
										"Opción ",
										tile.letter,
										". "
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: choice }),
								isCorrect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "ml-auto size-5 shrink-0",
									"aria-hidden": "true"
								}) : null,
								isWrongPick ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "ml-auto size-5 shrink-0",
									"aria-hidden": "true"
								}) : null
							]
						}, choice);
					})
				}),
				revealing && last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "rounded-card border border-line bg-card p-5 lg:col-span-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold " + (last.picked === last.correct ? "text-teal" : "text-clay"),
								children: last.picked === null ? "Se acabó el tiempo" : last.picked === last.correct ? "Correcto" : "No es esa"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted tabular",
								children: [
									"+",
									last.points.toLocaleString("es-MX"),
									last.bonus > 0 ? ` · racha +${last.bonus}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-3xl leading-relaxed text-ink",
								children: question.explain
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => dispatch({ type: "next" }),
							className: "inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-teal px-5 font-semibold text-paper hover:bg-teal-deep",
							children: [state.index + 1 >= state.questions.length ? "Ver resultado" : "Siguiente", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})]
					})
				}) : null
			]
		})
	] });
}
function ResultsScreen({ state, onHome, onRetry, onMissed }) {
	const correct = state.answers.filter((answer) => answer.picked === answer.correct).length;
	const total = state.answers.length || 1;
	const percent = Math.round(correct / total * 100);
	const missed = state.answers.length - correct;
	const player = state.name.trim() || "Jugador";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-teal uppercase",
				children: scopeTitle(state.scope)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
				children: ["Resultado de ", player]
			}),
			state.isRecord ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 inline-flex items-center gap-2 rounded-full bg-night px-3 py-1 text-sm font-semibold text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Nuevo récord de la trivia completa"]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-display text-6xl font-semibold tabular text-teal",
				children: [percent, "%"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-lg text-ink",
				children: [
					correct,
					" de ",
					state.answers.length,
					" correctas",
					state.mode === "juego" ? ` · ${state.score.toLocaleString("es-MX")} pts` : " · modo clase"
				]
			}),
			state.bestStreak >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					"Mejor racha: ",
					state.bestStreak,
					" seguidas"
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl font-semibold",
				children: "Por categoría"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-4",
				children: CATEGORIES.map((category) => {
					const rows = state.answers.filter((answer) => answer.category === category.id);
					if (rows.length === 0) return null;
					const hits = rows.filter((answer) => answer.picked === answer.correct).length;
					const width = Math.round(hits / rows.length * 100);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: category.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular text-muted",
							children: [
								hits,
								"/",
								rows.length
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-2 overflow-hidden rounded-full bg-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-teal",
							style: { width: `${width}%` }
						})
					})] }, category.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onRetry,
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-5 font-semibold text-paper hover:bg-teal-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Jugar de nuevo"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onMissed,
						disabled: missed === 0,
						className: "inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-5 font-semibold text-ink disabled:opacity-40",
						children: "Solo las que fallé"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onHome,
						className: "inline-flex min-h-12 items-center justify-center rounded-full px-5 font-semibold text-muted",
						children: "Inicio"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl font-semibold",
				children: "Repaso"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-3",
				children: state.answers.map((answer, index) => {
					const ok = answer.picked === answer.correct;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold text-muted",
								children: [
									index + 1,
									". ",
									categoryLabel(answer.category)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold",
								children: answer.prompt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm " + (ok ? "text-teal" : "text-clay"),
								children: [ok ? "Correcta: " : "Respuesta: ", answer.choices[answer.correct]]
							}),
							!ok && answer.picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: ["Elegiste: ", answer.choices[answer.picked]]
							}) : null,
							!ok && answer.picked === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Sin respuesta a tiempo."
							}) : null
						]
					}, answer.id);
				})
			})
		]
	})] });
}
function BankScreen({ onHome }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: onHome,
		className: "min-h-11 rounded-full px-3 text-sm font-semibold text-paper",
		children: "Volver al juego"
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-teal uppercase",
				children: "Para revisar la tarea"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold",
				children: "Banco de preguntas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 leading-relaxed text-muted",
				children: [QUESTIONS.length, " reactivos en cuatro categorías. En el juego, el orden de las opciones cambia en cada partida. Aquí se muestra la respuesta correcta para la revisión docente."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-10",
				children: CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: category.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-4",
					children: QUESTIONS.filter((question) => question.category === category.id).map((question, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: [
									index + 1,
									". ",
									question.prompt
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1 text-sm",
								children: question.choices.map((choice, choiceIndex) => {
									const correct = choiceIndex === question.correct;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: correct ? "font-semibold text-teal" : "text-muted",
										children: [correct ? "Respuesta: " : "· ", choice]
									}, choice);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink",
								children: question.explain
							})
						]
					}, question.id))
				})] }, category.id))
			})
		]
	})] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriviaApp, {});
}
//#endregion
export { Home as component };
