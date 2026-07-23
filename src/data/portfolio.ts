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
  role: "AI/ML Engineer | Data Scientist | Generative AI Developer",
  headline:
    "I work on AI/ML systems, analytics pipelines, and LLM applications - mostly turning messy data into something people can actually use to make a decision.",
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
text: "I build ML, deep learning, NLP, computer vision, and time-series models in Python."
},
{
icon: TbChartDots,
title: "Data Analytics",
text: "Cleaning and transforming ERP data, automating reports, and building Power BI dashboards people actually check."
},
{
icon: TbRobot,
title: "Generative AI",
text: "LangChain, Mistral AI, prompt engineering, RAG, and AI agents - I use these to build research tools and chatbots."
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
      { name: "GitHub", level: 82 },
      { name: "Docker", level: 80 }
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
  { name: "LangGraph", icon: TbRobot },
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
  role: "Data Analyst",
  company: "Maharishi Vidya Mandir National Office, Bhopal",
  period: "Aug 2026 - Present",
  type: "Current Role",
  bullets: [
  "Automated and streamlined ERP reporting workflows across 150+ schools using Python, SQL, Excel, and Power BI.",
  "Engineered automated data pipelines and interactive dashboards, improving reporting accuracy and operational efficiency.",
  "Conducted end-to-end data cleaning, transformation, and validation, delivering business analysis that supports organizational decision-making.",
  "Partnered with internal stakeholders to design and develop AI-powered solutions alongside core data analytics responsibilities.",
  "Built production-grade AI applications using Python, FastAPI, OCR, Computer Vision, and Large Language Models (LLMs) to automate enterprise document processing and information extraction.",
  "Architected REST APIs and AI-driven workflows integrating OCR, rule engines, and LLMs to enable real-world business process automation."
],
  stack: [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "FastAPI",
  "OCR",
  "Computer Vision",
  "LLMs",
  "REST APIs"
]
},
  {
    role: "Trainee Data Analyst",
    company: "Maharishi Vidya Mandir National Office, Bhopal",
    period: "Feb 2026 - Jul 2026",
    type: "Full-time",
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
  title: "LLM-Powered ERP Analytics Assistant",
  label: "Production deployment at Maharishi Vidya Mandir",
  problem:
    "Analyzing ERP data required technical SQL knowledge and manual report generation, making business insights difficult for non-technical users to access.",
  solution:
    "Developed an AI-powered analytics assistant that enables users to query ERP data in natural language. The system converts user prompts into SQL, retrieves data from the ERP database, and generates contextual business insights using Large Language Models.",
  stack: ["Python", "FastAPI", "MySQL", "LLMs", "SQL", "Pandas"],
  features: [
    "Natural language to SQL conversion",
    "AI-generated business insights and summaries",
    "Real-time ERP database querying",
    "Context-aware analytics and reporting",
    "REST API integration with enterprise systems"
  ],
  impact:
    "Enabled non-technical users to access ERP insights through conversational AI, significantly reducing manual reporting effort and accelerating data-driven decision-making across 150+ schools."
},
  {
  title: "AI-Powered Student Marksheet Information Extraction",
  label: "Production deployment at Maharishi Vidya Mandir",
  problem:
    "Manual extraction of student information from marksheets was time-consuming, error-prone, and difficult to scale across multiple educational boards.",
  solution:
    "Developed an AI-powered document intelligence system that combines OCR, rule-based validation, and Large Language Models to extract structured information from scanned marksheets and PDFs.",
  stack: ["Python", "FastAPI", "PaddleOCR", "LLMs", "OpenCV", "JSON"],
  features: [
    "Multi-board marksheet processing",
    "AI-assisted OCR and information extraction",
    "Rule engine for data validation",
    "REST API for ERP integration"
  ],
  impact:
    "Reduced manual data entry, improved extraction accuracy, and automated student document processing for enterprise ERP workflows."
},
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
      "Good hands-on practice with agent orchestration - coordinating multiple agents for search, synthesis, and critique in one pipeline.",
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
      "Went beyond a basic API wrapper - had to think about memory, prompt design, and actual response quality.",
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
    label: "Time-series forecasting - Published",
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
  { name: "Copado AI Certified Professional", issuer: "Copado", date: "Jun 2026", badge: "AI" },
  { name: "Oracle AI Foundation Associate", issuer: "Oracle", date: "Apr 2026", badge: "AI" },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn", date: "Dec 2023", badge: "GenAI" },
  { name: "Career Essentials in Data Analysis", issuer: "Microsoft & LinkedIn", date: "Dec 2023", badge: "Data" },
  { name: "Artificial Intelligence Virtual Internship", issuer: "IBM SkillsBuild", date: "Jan-Feb 2023", badge: "AI" },
  { name: "Python with Data Science", issuer: "Ducat, Noida", date: "Apr-Dec 2023", badge: "Python" },
  { name: "IIoT Using ThingWorx", issuer: "IIMT, Greater Noida", date: "Oct 2022-Apr 2023", badge: "IIoT" },
  { name: "Advanced Excel Financial Calculations", issuer: "Elearnmarkets", date: "Aug 2022", badge: "Excel" }
];

export const achievements = [
  "Promoted from Trainee Data Analyst to Data Analyst within six months based on performance and contributions.",
  "Delivered three production-grade AI solutions, including document verification, intelligent document extraction, and an LLM-powered ERP Analytics Assistant.",
  "Automated ERP reporting and analytics workflows across 150+ schools using Python, SQL, Excel, and Power BI.",
  "Developed enterprise AI applications leveraging FastAPI, OCR, Computer Vision, and Large Language Models (LLMs) for business process automation.",
  "Earned professional certifications from Oracle, Microsoft, IBM, and Ducat while continuously expanding expertise in AI, data analytics, and cloud technologies."
];

export const socials = [
  { name: "GitHub", href: profile.github, icon: FaGithub },
  { name: "LinkedIn", href: profile.linkedin, icon: FaLinkedin }
];
