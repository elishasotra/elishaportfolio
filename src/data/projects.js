const projects = [
  {
    id: "01",
    title: "AI INTERVIEW ASSISTANT",
    category: "AI / MACHINE LEARNING",
    status: "IN DEVELOPMENT",
    featured: true,
    description:
      "An AI-powered interview preparation system for technical and behavioral interview preparation, designed around an intelligent interview experience.",
    tech: ["Python", "AI", "NLP"],
    github: null,
    live: null,
    flow: ["PROMPT", "INTERVIEW ENGINE", "FEEDBACK"],
  },

  {
    id: "02",
    title: "DOCUMENT INTELLIGENCE",
    category: "FULL STACK / RAG",
    status: "COMPLETED",
    featured: true,
    description:
      "An AI document assistant that accepts text-based or scanned PDFs, extracts content with native text extraction and OCR, and answers questions with page-grounded references.",
    tech: [
      "Python",
      "Django REST",
      "React",
      "OCR",
      "RAG",
      "FAISS",
      "Gemini",
    ],
    github: "https://github.com/elishasotra/AI-Document-Intelligence",
    live: null,
    flow: ["UPLOAD", "OCR / EXTRACT", "FAISS", "GROUNDED ANSWER"],
  },

  {
    id: "03",
    title: "HE&SHE PG",
    category: "PRODUCT / WEB DESIGN",
    status: "LIVE",
    featured: true,
    description:
      "A PG accommodation platform co-founded and built with a small team, with owner onboarding, property-listing workflows and listing management being tested with real users.",
    tech: [
      "Web Development",
      "JavaScript",
      "UI/UX",
      "Product",
    ],
    github: null,
    live: "https://heandshepg.com/",
    flow: ["OWNER", "LISTING", "SEARCH", "LEAD"],
  },

  {
    id: "04",
    title: "WEB PIANO",
    category: "WEB AUDIO / INTERACTIVE",
    status: "LIVE",
    featured: true,
    description:
      "A browser-based virtual piano with real sampled piano audio, multi-octave keyboard interaction and Tone.js-driven sound for responsive musical input.",
    tech: ["JavaScript", "Tone.js", "Web Audio"],
    github: "https://github.com/elishasotra/web-piano",
    live: "https://elishasotra.github.io/Web-Piano/",
    flow: ["KEY INPUT", "TONE.JS", "AUDIO", "OUTPUT"],
  },

  {
    id: "05",
    title: "FACE RECOGNITION ATTENDANCE",
    category: "COMPUTER VISION",
    status: "COMPLETED",
    featured: false,
    description:
      "A Python attendance system that uses camera input, OpenCV and face recognition to identify registered faces and automatically record attendance records.",
    tech: [
      "Python",
      "OpenCV",
      "Face Recognition",
      "dlib",
      "CSV",
    ],
    github: "https://github.com/elishasotra/face-recognition-attendance-system",
    live: null,
    flow: ["CAMERA", "DETECT", "MATCH", "ATTENDANCE"],
  },

  {
    id: "06",
    title: "BINANCE TRADING BOT",
    category: "AUTOMATION / API",
    status: "COMPLETED",
    featured: false,
    description:
      "A Python Binance Futures Testnet CLI project for experimenting with API-driven order execution and automated trading workflows.",
    tech: ["Python", "Binance API", "CLI"],
    github: "https://github.com/elishasotra/binance-trading-bot",
    live: null,
    flow: ["API", "ORDER", "EXECUTE", "LOG"],
  },
];

export default projects;
