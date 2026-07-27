export type FocusArea =
  | "Present Perfect"
  | "Prepositions"
  | "Phrasal Verbs"
  | "Modals";

export interface PatternInfo {
  name: string;
  examples: string[];
}

export interface Exercise {
  id: string;
  prompt: string;
  correctAnswer: string;
  naturalAnswer: string;
  why: string;
  pattern: PatternInfo;
  focus: FocusArea;
}

export const TODAYS_FOCUS: FocusArea[] = [
  "Present Perfect",
  "Prepositions",
  "Phrasal Verbs",
];

export const exercises: Exercise[] = [
  {
    id: "call-mother",
    prompt: "Tengo que llamar a mi madre.",
    correctAnswer: "I have to call my mother.",
    naturalAnswer: "I've got to call my mom.",
    why: "We use “have to” to express obligation or necessity — something you're required to do.",
    pattern: {
      name: "Have to + Verb",
      examples: ["I have to work.", "I have to study.", "I have to leave."],
    },
    focus: "Modals",
  },
  {
    id: "finished-homework",
    prompt: "Ya he terminado mi tarea.",
    correctAnswer: "I have already finished my homework.",
    naturalAnswer: "I've already finished my homework.",
    why: "The present perfect connects a past action to now — “already” signals it's done and relevant today.",
    pattern: {
      name: "Present Perfect + already",
      examples: [
        "I have already eaten.",
        "She has already left.",
        "We have already decided.",
      ],
    },
    focus: "Present Perfect",
  },
  {
    id: "interested-learning",
    prompt: "Estoy interesado en aprender inglés.",
    correctAnswer: "I am interested in learning English.",
    naturalAnswer: "I'm interested in learning English.",
    why: "After “interested in”, English uses a gerund (verb + -ing), not the infinitive “to learn”.",
    pattern: {
      name: "Interested in + verb-ing",
      examples: [
        "I'm interested in cooking.",
        "She's interested in painting.",
        "They're interested in traveling.",
      ],
    },
    focus: "Prepositions",
  },
  {
    id: "look-for-keys",
    prompt: "Voy a buscar las llaves.",
    correctAnswer: "I'm going to look for the keys.",
    naturalAnswer: "I'm going to look for the keys.",
    why: "“Look for” is the natural phrasal verb for searching — “search” alone sounds too formal here.",
    pattern: {
      name: "Look for (phrasal verb)",
      examples: [
        "I'm looking for my phone.",
        "He's looking for a job.",
        "We looked for a solution.",
      ],
    },
    focus: "Phrasal Verbs",
  },
  {
    id: "never-japan",
    prompt: "Nunca he estado en Japón.",
    correctAnswer: "I have never been to Japan.",
    naturalAnswer: "I've never been to Japan.",
    why: "Life experiences up to now use the present perfect, not the past simple.",
    pattern: {
      name: "Present Perfect + never",
      examples: [
        "I have never tried sushi.",
        "She has never driven.",
        "We have never met.",
      ],
    },
    focus: "Present Perfect",
  },
  {
    id: "depends-on-you",
    prompt: "Depende de ti.",
    correctAnswer: "It depends on you.",
    naturalAnswer: "It depends on you.",
    why: "“Depend” always pairs with the preposition “on” in English, never “of”.",
    pattern: {
      name: "Depend on",
      examples: [
        "It depends on the weather.",
        "Success depends on effort.",
        "It depends on the price.",
      ],
    },
    focus: "Prepositions",
  },
  {
    id: "give-up-smoking",
    prompt: "Voy a dejar de fumar.",
    correctAnswer: "I'm going to give up smoking.",
    naturalAnswer: "I'm going to quit smoking.",
    why: "“Give up” is followed by a gerund (-ing), and it's the natural way to say you'll stop a habit.",
    pattern: {
      name: "Give up + verb-ing",
      examples: [
        "I'm giving up sugar.",
        "He gave up drinking.",
        "They gave up trying.",
      ],
    },
    focus: "Phrasal Verbs",
  },
  {
    id: "married-musician",
    prompt: "Ella se casó con un músico.",
    correctAnswer: "She married a musician.",
    naturalAnswer: "She got married to a musician.",
    why: "“Marry” takes no preposition in English — only “get married to” needs one.",
    pattern: {
      name: "Marry (no preposition)",
      examples: [
        "He married his best friend.",
        "They married young.",
        "She married an artist.",
      ],
    },
    focus: "Prepositions",
  },
  {
    id: "waiting-whole-life",
    prompt: "He estado esperando este momento toda mi vida.",
    correctAnswer: "I have been waiting for this moment my whole life.",
    naturalAnswer: "I've been waiting for this moment my whole life.",
    why: "An ongoing situation that started in the past uses the present perfect continuous.",
    pattern: {
      name: "Present Perfect Continuous",
      examples: [
        "I have been working here for years.",
        "She has been studying all day.",
        "We have been waiting for an hour.",
      ],
    },
    focus: "Present Perfect",
  },
  {
    id: "put-it-off",
    prompt: "Deja de posponerlo.",
    correctAnswer: "Stop putting it off.",
    naturalAnswer: "Stop putting it off.",
    why: "“Put off” means to postpone — it's far more natural here than the verb “postpone” itself.",
    pattern: {
      name: "Put off (phrasal verb)",
      examples: [
        "Don't put off your homework.",
        "We put off the meeting.",
        "I keep putting it off.",
      ],
    },
    focus: "Phrasal Verbs",
  },
];
