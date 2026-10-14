export type CategoryId = "tipos" | "riesgo" | "sintomas" | "cuidados";

export type Question = {
  id: string;
  category: CategoryId;
  prompt: string;
  choices: readonly [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explain: string;
};

export type PlayQuestion = {
  id: string;
  category: CategoryId;
  prompt: string;
  choices: string[];
  correct: number;
  explain: string;
};

export const CATEGORIES: {
  id: CategoryId;
  index: string;
  label: string;
  blurb: string;
}[] = [
  {
    id: "tipos",
    index: "01",
    label: "Tipos de enfermedades crónicas",
    blurb: "Qué son, cuánto duran y cuáles se estudian en clase: diabetes, hipertensión, corazón, pulmones.",
  },
  {
    id: "riesgo",
    index: "02",
    label: "Factores de riesgo",
    blurb: "Lo que se puede cambiar y lo que no: tabaco, sal, sedentarismo, alcohol, edad y herencia.",
  },
  {
    id: "sintomas",
    index: "03",
    label: "Síntomas y prevención",
    blurb: "Señales de alerta, la hipertensión silenciosa y cómo prevenir antes de que aparezca la enfermedad.",
  },
  {
    id: "cuidados",
    index: "04",
    label: "Tratamientos y cuidados",
    blurb: "Medicamentos, adherencia, glucosa, presión, inhaladores y cuidados de todos los días.",
  },
];

export const QUESTIONS: Question[] = [
  {
    id: "t1",
    category: "tipos",
    prompt: "Una enfermedad crónica no transmisible se reconoce sobre todo porque…",
    choices: [
      "Suele durar mucho tiempo y progresar de forma lenta",
      "Siempre se contagia de persona a persona",
      "Se cura sola en dos o tres días de reposo",
      "Solo la transmiten los mosquitos",
    ],
    correct: 0,
    explain:
      "Diabetes, hipertensión, EPOC, cáncer y las enfermedades cardiovasculares son de larga duración. No se contagian como una infección aguda.",
  },
  {
    id: "t2",
    category: "tipos",
    prompt: "Según la OMS, los grandes grupos de enfermedades crónicas no transmisibles son…",
    choices: [
      "Cardiovasculares, cáncer, respiratorias crónicas y diabetes",
      "Solo gripe, otitis y gastroenteritis",
      "Únicamente accidentes de tránsito",
      "Enfermedades que duran menos de una semana",
    ],
    correct: 0,
    explain:
      "Esos cuatro grupos causan la mayor parte de las muertes por enfermedades crónicas en el mundo. Por eso suelen ser el eje de la clase.",
  },
  {
    id: "t3",
    category: "tipos",
    prompt: "¿Qué diferencia, en general, a la diabetes tipo 1 de la tipo 2?",
    choices: [
      "La tipo 1 suele deberse a falta de insulina y requiere insulina; la tipo 2 se relaciona más con resistencia a la insulina",
      "La tipo 2 es contagiosa y la tipo 1 no",
      "La tipo 1 solo afecta a personas mayores y la tipo 2 solo a niños",
      "Ninguna de las dos es una enfermedad crónica",
    ],
    correct: 0,
    explain:
      "En la tipo 1 el cuerpo deja de producir insulina y el tratamiento habitual es la insulina. La tipo 2, más frecuente en adultos, se asocia a resistencia a la insulina, peso y actividad, aunque también puede necesitar medicamentos. Hay excepciones: el equipo de salud individualiza el caso.",
  },
  {
    id: "t4",
    category: "tipos",
    prompt: "La hipertensión arterial es…",
    choices: [
      "Una elevación persistente de la presión de la sangre sobre las arterias",
      "Una infección de las arterias",
      "Lo mismo que un infarto",
      "Un dolor de cabeza que, por sí solo, confirma el diagnóstico",
    ],
    correct: 0,
    explain:
      "Es presión alta de forma sostenida, no un episodio aislado. En adultos, muchas guías usan 140/90 mmHg o más en mediciones repetidas. El diagnóstico lo confirma el personal de salud.",
  },
  {
    id: "t5",
    category: "tipos",
    prompt: "La EPOC (enfermedad pulmonar obstructiva crónica) afecta principalmente…",
    choices: [
      "Las vías respiratorias y los pulmones",
      "El hígado y la vesícula",
      "Los huesos y las articulaciones",
      "La tiroides",
    ],
    correct: 0,
    explain:
      "La EPOC limita el flujo de aire. Sus piezas clave en clase son la tos crónica, la falta de aire y el antecedente de tabaco o de humo de leña.",
  },
  {
    id: "r1",
    category: "riesgo",
    prompt: "¿Cuál de estos es un factor de riesgo modificable?",
    choices: [
      "El tabaquismo",
      "La edad",
      "Los antecedentes familiares",
      "El sexo biológico",
    ],
    correct: 0,
    explain:
      "Modificables: tabaco, alimentación, inactividad, alcohol y sobrepeso. No modificables: edad, herencia y sexo. La prevención actúa sobre los primeros.",
  },
  {
    id: "r2",
    category: "riesgo",
    prompt: "Una alimentación rica en sal (sodio) se asocia sobre todo con mayor riesgo de…",
    choices: [
      "Hipertensión arterial",
      "Miopía",
      "Daltonismo",
      "Alergia al polen",
    ],
    correct: 0,
    explain:
      "El exceso de sodio favorece que suba la presión. Reducir sal de mesa, embutidos y caldos concentrados es una medida habitual del cuidado.",
  },
  {
    id: "r3",
    category: "riesgo",
    prompt: "La inactividad física y el sobrepeso aumentan especialmente el riesgo de…",
    choices: [
      "Diabetes tipo 2 y enfermedad cardiovascular",
      "Solo de gripe estacional",
      "Únicamente de caries dental",
      "Cambiar el color de los ojos",
    ],
    correct: 0,
    explain:
      "Moverse poco y acumular grasa, sobre todo abdominal, empujan la resistencia a la insulina, la presión y el colesterol. Por eso entran en el plan de prevención.",
  },
  {
    id: "r4",
    category: "riesgo",
    prompt: "El principal factor de riesgo evitable de la EPOC es…",
    choices: [
      "El consumo de tabaco",
      "Beber agua potable",
      "Dormir alrededor de ocho horas",
      "Usar lentes graduados",
    ],
    correct: 0,
    explain:
      "Dejar de fumar es la medida que más cambia el curso de la EPOC. En muchos hogares también pesa el humo de leña o de biomasa al cocinar en espacios cerrados.",
  },
  {
    id: "r5",
    category: "riesgo",
    prompt: "¿Cuál NO es un factor de riesgo conductual de las enfermedades crónicas, según la OMS?",
    choices: [
      "Lavarse las manos antes de comer",
      "Consumo nocivo de alcohol",
      "Dieta poco saludable",
      "Sedentarismo",
    ],
    correct: 0,
    explain:
      "Los cuatro factores conductuales clásicos son tabaco, inactividad, dieta no saludable y consumo nocivo de alcohol. Lavarse las manos previene infecciones, no es un riesgo de estas enfermedades.",
  },
  {
    id: "s1",
    category: "sintomas",
    prompt: "¿Qué tríada puede orientar a una glucosa muy alta?",
    choices: [
      "Orinar mucho, mucha sed y mucha hambre",
      "Estornudos, congestión y fiebre de un día",
      "Dolor de oído y zumbido",
      "Una erupción que desaparece en horas",
    ],
    correct: 0,
    explain:
      "Poliuria, polidipsia y polifagia son la tríada clásica. También puede haber cansancio y pérdida de peso. No reemplazan el diagnóstico: hacen falta medición y valoración médica. En la tipo 2 temprana a veces casi no hay síntomas.",
  },
  {
    id: "s2",
    category: "sintomas",
    prompt: "¿Por qué a la hipertensión se le llama a menudo «asesina silenciosa»?",
    choices: [
      "Puede no dar síntomas durante años y aun así dañar corazón, cerebro y riñones",
      "Porque siempre provoca fiebre alta",
      "Porque es contagiosa aunque la persona no tosa",
      "Porque duele solo de noche y se cura sola",
    ],
    correct: 0,
    explain:
      "Muchas personas se sienten bien y ya tienen la presión alta. Por eso se mide, no se espera a «sentirla». El dolor de cabeza no confirma ni descarta hipertensión.",
  },
  {
    id: "s3",
    category: "sintomas",
    prompt: "Una medida de prevención primaria es…",
    choices: [
      "Actividad física regular, alimentación saludable y no fumar",
      "Esperar al primer infarto para cambiar hábitos",
      "Dejar los medicamentos en cuanto uno se siente bien",
      "Quitar todas las frutas de la dieta",
    ],
    correct: 0,
    explain:
      "Prevención primaria es evitar que la enfermedad aparezca. Moverse, comer con más verdura y menos ultraprocesados, no fumar y moderar el alcohol son el núcleo de esa prevención.",
  },
  {
    id: "s4",
    category: "sintomas",
    prompt: "Síntomas frecuentes de la EPOC:",
    choices: [
      "Falta de aire, tos crónica y expectoración",
      "Solo picazón en la piel",
      "Dolor de muelas como único dato",
      "Cambios en el color del iris",
    ],
    correct: 0,
    explain:
      "La disnea al esfuerzo, la tos que no se quita y la flema orientan a EPOC, sobre todo si hay historia de tabaco o de humo. El diagnóstico lo precisa una espirometría.",
  },
  {
    id: "s5",
    category: "sintomas",
    prompt: "Cara caída, un brazo débil y dificultad para hablar. ¿Qué corresponde hacer?",
    choices: [
      "Activar emergencias de inmediato: puede ser un accidente cerebrovascular",
      "Esperar en casa a ver si se le pasa",
      "Dar de comer para «bajar la presión»",
      "Ofrecer un remedio casero y no avisar a nadie",
    ],
    correct: 0,
    explain:
      "Cara, brazo y habla son señales de alarma. El tiempo es cerebro: hay que pedir ayuda urgente. No es un diagnóstico casero y no se ofrecen alimentos ni líquidos a quien puede tener dificultad para tragar.",
  },
  {
    id: "c1",
    category: "cuidados",
    prompt: "El cuidado de la diabetes tipo 2 suele combinar…",
    choices: [
      "Alimentación, actividad física y medicamentos si el equipo de salud los indica",
      "Solo reposo absoluto de por vida",
      "Suspender todos los controles de glucosa",
      "Únicamente infusiones, sin seguimiento",
    ],
    correct: 0,
    explain:
      "La base es el estilo de vida. Si hace falta, se agregan fármacos (por ejemplo metformina) o insulina, siempre indicados. Las infusiones no sustituyen el tratamiento.",
  },
  {
    id: "c2",
    category: "cuidados",
    prompt: "En hipertensión, además del medicamento indicado, ayuda…",
    choices: [
      "Reducir el sodio, cuidar el peso, moverse y no abandonar el tratamiento",
      "Subir la sal «para tener más energía»",
      "Duplicar la dosis los días en que uno se siente bien",
      "Tomar la pastilla solo cuando duele la cabeza",
    ],
    correct: 0,
    explain:
      "El fármaco no reemplaza los hábitos, y los hábitos no autorizan a cambiar la dosis por cuenta propia. La presión alta a menudo no duele: no hay que esperar el dolor para tomar el medicamento.",
  },
  {
    id: "c3",
    category: "cuidados",
    prompt: "Adherencia al tratamiento significa…",
    choices: [
      "Seguir de forma constante medicamentos, citas, alimentación y actividad",
      "Tomar el doble de pastillas el fin de semana",
      "Cambiar de fármaco cada semana sin consultar",
      "Dejar todo en cuanto desaparecen los síntomas",
    ],
    correct: 0,
    explain:
      "Muchas enfermedades crónicas no se «sienten» y por eso se abandonan. Seguir el plan previene infartos, derrames, daño renal y descompensaciones.",
  },
  {
    id: "c4",
    category: "cuidados",
    prompt: "¿Para qué sirve medirse la glucosa cuando el equipo de salud lo indicó?",
    choices: [
      "Para detectar descontroles y ajustar el cuidado junto con ese equipo",
      "Para sustituir por completo la consulta médica",
      "Para diagnosticar a familiares sin ningún estudio",
      "Solo para publicarlo en redes sociales",
    ],
    correct: 0,
    explain:
      "El automonitoreo muestra hipoglucemias e hiperglucemias y ayuda a decidir con quien atiende a la persona. No reemplaza la hemoglobina glucosilada ni la consulta.",
  },
  {
    id: "c5",
    category: "cuidados",
    prompt: "Un cuidado clave de quien vive con EPOC es…",
    choices: [
      "Dejar el tabaco, usar los inhaladores como se indicaron y vacunarse según el plan",
      "Seguir fumando para «acostumbrar» el pulmón",
      "Suspender el inhalador el primer día que se siente mejor, sin consultar",
      "Evitar cualquier actividad, incluso la que tolera",
    ],
    correct: 0,
    explain:
      "Dejar el cigarro es lo que más frena el daño. Los inhaladores se usan como fueron prescritos, la vacuna de influenza y la del neumococo se valoran con el equipo de salud, y la actividad física adaptada forma parte de la rehabilitación.",
  },
];

export function questionsByCategory(id: CategoryId): Question[] {
  return QUESTIONS.filter((question) => question.category === id);
}

export function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    const current = next[index] as T;
    next[index] = next[swap] as T;
    next[swap] = current;
  }
  return next;
}

export function toPlay(question: Question): PlayQuestion {
  const order = shuffle([0, 1, 2, 3] as const);
  return {
    id: question.id,
    category: question.category,
    prompt: question.prompt,
    choices: order.map((index) => question.choices[index]),
    correct: order.indexOf(question.correct),
    explain: question.explain,
  };
}

export function buildRound(scope: CategoryId | "all"): PlayQuestion[] {
  if (scope === "all") {
    return CATEGORIES.flatMap((category) => shuffle(questionsByCategory(category.id)).map(toPlay));
  }
  return shuffle(questionsByCategory(scope)).map(toPlay);
}

export function categoryLabel(id: CategoryId): string {
  return CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
