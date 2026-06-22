import {
  FaAws,
  FaChartBar,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact
} from "react-icons/fa";
import {
  SiFastapi,
  SiFlask,
  SiHuggingface,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow
} from "react-icons/si";
import { TbBrain, TbChartDots, TbRobot } from "react-icons/tb";

export const profile = {
  name: "Abhishek Kumar",
  role: "AI/ML Engineer | Data Analyst | Generative AI Developer",
  headline:
    "I build production-minded AI systems, analytics pipelines, and LLM applications that turn messy data into decisions, automation, and recruiter-visible business impact.",
  email: "abhishekkumar13516@gmail.com",
  phone: "+91-9131984320",
  location: "Bhopal, India",
  resumeUrl: "/abhi_resume.pdf",
  github: "https://github.com/Abh9131",
  linkedin: "https://www.linkedin.com/in/abhishek-kumar9131/"
};

export const heroMetrics = [
  { value: "150+", label: "Schools supported through ERP analytics" },
  { value: "5+", label: "AI, ML, and GenAI portfolio projects" },
  { value: "1", label: "Production AI deployment at Vedanta" },
  { value: "7+", label: "AI, data, and analytics certifications" }
];

export const identityCards = [
  {
    icon: TbBrain,
    title: "AI/ML Engineering",
    text: "Machine learning, deep learning, NLP, computer vision, and time-series models built with Python-first engineering discipline."
  },
  {
    icon: TbChartDots,
    title: "Data Analytics",
    text: "ERP data cleaning, transformation, reporting automation, Power BI dashboards, and stakeholder-ready business insights."
  },
  {
    icon: TbRobot,
    title: "Generative AI",
    text: "LangChain, Mistral AI, prompt engineering, RAG concepts, AI agents, and LLM-powered research and chatbot workflows."
  }
];

export const skills = [
  {
    group: "AI / ML / GenAI",
    icon: TbBrain,
    items: [
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 85 },
      { name: "NLP", level: 84 },
      { name: "LLMs", level: 90 },
      { name: "LangChain", level: 92 },
      { name: "RAG", level: 86 },
      { name: "Prompt Engineering", level: 86 },
      { name: "AI Agents", level: 82 }
    ]
  },
  {
    group: "Data & BI",
    icon: TbChartDots,
    items: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 84 },
      { name: "Power BI", level: 82 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "Data Cleaning", level: 90 },
      { name: "Business Analysis", level: 92 }
    ]
  },
  {
    group: "Engineering Stack",
    icon: FaDatabase,
    items: [
      { name: "TensorFlow", level: 82 },
      { name: "PyTorch", level: 74 },
      { name: "Scikit-Learn", level: 86 },
      { name: "FastAPI / Flask", level: 78 },
      { name: "Streamlit", level: 86 },
      { name: "AWS", level: 78 },
      { name: "MySQL / MongoDB", level: 78 },
      { name: "GitHub", level: 82 }
    ]
  }
];

export const skillCloud = [
  { name: "Python", icon: FaPython },
  { name: "SQL", icon: FaDatabase },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-Learn", icon: SiScikitlearn },
  { name: "LangChain", icon: TbRobot },
  { name: "OpenAI API", icon: SiOpenai },
  { name: "Mistral AI", icon: TbRobot },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Power BI", icon: FaChartBar },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flask", icon: SiFlask },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
  { name: "Pandas", icon: SiPandas },
  { name: "React", icon: FaReact }
];

export const experience = [
  {
    role: "Trainee Data Analyst",
    company: "Maharishi Vidya Mandir National Office, Bhopal",
    period: "Feb 2026 - Present",
    type: "Current Role",
    bullets: [
      "Managing and analyzing ERP data across 150+ schools to generate actionable insights and performance reports.",
      "Developing automated data pipelines and interactive dashboards with Python, Power BI, and Excel.",
      "Cleaning, transforming, and analyzing operational data to support strategic and day-to-day decision-making."
    ],
    stack: ["Python", "Power BI", "Excel", "SQL", "ERP Analytics"]
  },
  {
    role: "Data Science Intern",
    company: "SO Infotech Pvt. Ltd., Noida",
    period: "Apr 2023 - Dec 2023",
    type: "Internship",
    bullets: [
      "Developed machine learning models for predictive analytics and operational efficiency use cases.",
      "Built Python applications including a COVID-19 analysis dashboard, gender prediction model, attendance system, and business management system.",
      "Strengthened production-oriented Python, data analysis, and GUI development skills through hands-on delivery."
    ],
    stack: ["Python", "ML", "Data Analysis", "GUI Apps"]
  },
  {
    role: "Data Science Intern",
    company: "Prodigy InfoTech, Remote",
    period: "Dec 2023 - Jan 2024",
    type: "Internship",
    bullets: [
      "Performed data cleaning, preprocessing, and EDA on Titanic survival and World Development Indicators datasets.",
      "Analyzed sentiment trends in social media data to surface public opinion and consumer behavior insights.",
      "Built analysis workflows using Pandas, NumPy, Matplotlib, Seaborn, and Scikit-Learn."
    ],
    stack: ["Pandas", "NumPy", "EDA", "Visualization", "Scikit-Learn"]
  }
];

export const projects = [
  {
    title: "AI-Powered Document & Signature Verification System",
    label: "Production deployment at Vedanta",
    problem:
      "Manual document verification and signature validation created slow review cycles, inconsistent checks, and limited automation for PDF/image workflows.",
    solution:
      "Built an AI verification platform combining document classification, OCR, and signature validation for real-time document processing.",
    stack: ["TensorFlow", "MobileNetV2", "EasyOCR", "OpenCV", "Flask", "FastAPI"],
    features: [
      "Document classification pipeline",
      "OCR extraction for PDFs and images",
      "Signature validation workflow",
      "API-ready backend for deployment"
    ],
    impact:
      "Moved from project prototype to production deployment, improving verification accuracy and reducing manual workflow effort.",
    github: "https://github.com/Abh9131/MULTIMODAL-DOCUMENT-AUTHENTICATION-API-",
    demo: "#"
  },
  {
    title: "Multi-Agent AI Research Assistant",
    label: "Agentic AI system",
    problem:
      "Research workflows often require repeated searching, synthesis, critique, and report formatting across many sources.",
    solution:
      "Designed a Streamlit-based multi-agent research pipeline for retrieval, web research, synthesis, evaluation, and report generation.",
    stack: ["LangChain", "Agentic AI", "Web Search", "Streamlit", "LLMs"],
    features: [
      "Autonomous research agents",
      "Research synthesis and critique loop",
      "Report generation workflow",
      "Session-state progress tracking"
    ],
    impact:
      "Demonstrates practical agent orchestration and recruiter-relevant readiness for next-generation AI engineering roles.",
    github: "https://github.com/Abh9131/multi_agent",
    demo: "#"
  },
  {
    title: "AI Chatbot with LangChain & Mistral AI",
    label: "Conversational AI",
    problem:
      "Basic chatbots often fail to retain useful context or provide consistent, well-guided responses across a conversation.",
    solution:
      "Built a context-aware chatbot using LangChain, Mistral AI, memory management, and prompt templates inside a Streamlit interface.",
    stack: ["LangChain", "Mistral AI", "Prompt Engineering", "Streamlit"],
    features: [
      "Multi-turn conversation memory",
      "Dynamic prompt templates",
      "Context-grounded response flow",
      "Clean interactive interface"
    ],
    impact:
      "Shows applied LLM product thinking beyond simple API calls, with attention to user experience and response quality.",
    github: "https://github.com/Abh9131/mode_chatbot",
    demo: "#"
  },
  {
    title: "Fake News Detection System",
    label: "NLP classification",
    problem:
      "Online misinformation needs automated credibility screening that can classify news text accurately and consistently.",
    solution:
      "Built a text classification system using preprocessing, TF-IDF vectorization, Logistic Regression, Gradient Boosting, and LSTM models.",
    stack: ["NLP", "TF-IDF", "Logistic Regression", "Gradient Boosting", "LSTM"],
    features: [
      "Text preprocessing pipeline",
      "Classical ML model comparison",
      "Deep learning LSTM experiment",
      "Performance-focused evaluation"
    ],
    impact:
      "Improved classification performance by 30% over baseline in resume-reported testing.",
    github: "https://github.com/Abh9131/fake_news_detection_using_LSTM-NLP",
    demo: "#"
  },
  {
    title: "Stock Price Prediction using LSTM",
    label: "Time-series forecasting",
    problem:
      "Stock trend analysis requires models that can learn temporal dependencies across long historical price windows.",
    solution:
      "Developed an LSTM forecasting model using 1,500+ days of historical stock data with TensorFlow and Keras.",
    stack: ["TensorFlow", "Keras", "LSTM", "Time Series", "Deep Learning"],
    features: [
      "Historical data preprocessing",
      "Sequence modeling workflow",
      "MAE-focused evaluation",
      "Trend prediction visualizations"
    ],
    impact:
      "Achieved resume-reported MAE under 1.5% and outperformed traditional time-series baselines by 25%.",
    github: "https://github.com/Abh9131/stock_prediction_using_deep_learning",
    demo: "#"
  }
];

export const certifications = [
  { name: "Oracle AI Foundation Associate", issuer: "Oracle", date: "Apr 2026", badge: "AI" },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", date: "Dec 2023", badge: "GenAI" },
  { name: "Career Essentials in Data Analysis", issuer: "Microsoft & LinkedIn", date: "Dec 2023", badge: "Data" },
  { name: "Artificial Intelligence Virtual Internship", issuer: "IBM SkillsBuild", date: "Jan-Feb 2023", badge: "AI" },
  { name: "Python with Data Science", issuer: "Ducat, Noida", date: "Apr-Dec 2023", badge: "Python" },
  { name: "IIoT Using ThingWorx", issuer: "IIMT, Greater Noida", date: "Oct 2022-Apr 2023", badge: "IIoT" },
  { name: "Advanced Excel Financial Calculations", issuer: "Elearnmarkets", date: "Aug 2022", badge: "Excel" }
];

export const achievements = [
  "Production deployment of an AI-powered document and signature verification platform at Vedanta.",
  "ERP analytics ownership across 150+ schools at Maharishi Vidya Mandir National Office.",
  "Automated reporting pipelines and Power BI dashboards for operational and strategic decisions.",
  "Portfolio of applied AI systems spanning NLP, computer vision, LLM chatbots, agents, and forecasting.",
  "Certifications from Oracle, Microsoft, IBM, Ducat, and industry bootcamps."
];

export const socials = [
  { name: "GitHub", href: profile.github, icon: FaGithub },
  { name: "LinkedIn", href: profile.linkedin, icon: FaLinkedin }
];
