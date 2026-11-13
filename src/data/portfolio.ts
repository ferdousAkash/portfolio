export type ExperienceCategory = 'Leadership & Ops' | 'Engineering' | 'Community';
export type ProjectCategory = 'AI & ML' | 'Full-Stack' | 'Mobile' | 'Systems';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  categories: ExperienceCategory[];
  highlight?: string;
  bullets: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  secondaryImage?: string;
  accent: string;
  summary: string;
  highlights: string[];
  tech: string[];
  repos: { label: string; url: string }[];
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  url?: string;
  tag: string;
}

export const PROFILE = {
  shortName: 'Akash',
  fullName: 'Md. Ferdous Hasan Zihad Akash',
  headline: 'Project Manager · AI/ML & Full-Stack Engineer',
  badge: 'Project Manager @ Skarion · M.Sc. Data Science Candidate',
  heroTitleStart: 'Bridging',
  heroTitleAccent: 'AI Engineering',
  heroTitleEnd: '& Operational Delivery.',
  heroDescription:
    'Project Manager at Skarion supporting $50K+ in revenue and cross-functional AI recruitment pipelines, backed by a Computer Science & Engineering degree (AI Major), Full-Stack MERN/Flutter engineering experience, and graduate studies in Statistics & Data Science.',
  location: 'Dhaka, Bangladesh',
  email: 'fhzakash@gmail.com',
  academicEmail: 'ferdous.hasan01@northsouth.edu',
  phone: '+880 1959-214183',
  languages: ['English', 'Bengali (Native)'],
  socials: {
    linkedin: 'https://www.linkedin.com/in/fhzakash/',
    github: 'https://github.com/ferdousAkash',
    instagram: 'https://www.instagram.com/viper.akash/',
    facebook: 'https://www.facebook.com/mighty.akash/',
  },
  images: {
    heroPortrait: '/images/hero-portrait.webp',
    campusPortrait: '/images/campus-portrait.webp',
  },
};

export const IMPACT_METRICS = [
  {
    value: '$50K+',
    label: 'Revenue Impact',
    detail: 'Generated & supported through client conversion and service delivery at Skarion',
  },
  {
    value: '3 Roles',
    label: '6-Month Fast Track',
    detail: 'Promoted from Intern to Executive to Project Manager at Skarion (Dec 2025–May 2026)',
  },
  {
    value: '6+ Builds',
    label: 'AI, Mobile & Web',
    detail: 'From PyTorch plant disease vision & LLM chatbots to MERN/PHP production apps',
  },
  {
    value: 'Champion',
    label: 'NSUDC Intra 2024',
    detail: 'Asian Parliamentary Debate Champion & former Sub-Executive of Debate Development',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'skarion-pm',
    company: 'Skarion',
    role: 'Project Manager',
    type: 'Full-time',
    period: 'May 2026 – Present',
    duration: 'Current',
    location: 'United States · Remote',
    categories: ['Leadership & Ops'],
    highlight: '$50,000+ Revenue Supported',
    bullets: [
      'Manage cross-functional delivery across client acquisition, candidate services, recruitment operations, job-market research, and AI-enabled internal workflows.',
      'Generated over $50,000 in company revenue by supporting client conversion, coordinating onboarding through completion, and maintaining client relationships.',
      'Lead team workload planning, assign priorities, establish deadlines, and unblock teams across resume engineering, applications, recruiter outreach, and technical research.',
      'Introduced structured project tracking, KPI dashboards, QA checkpoints, and SOPs monitoring application volume, recruiter replies, interviews, and revenue.',
      'Drive continuous iteration of Skarion’s AI-assisted recruitment pipeline, candidate dashboard, job-scraping engine, and prompt workflows with technical contributors.',
    ],
    skills: ['Project Management', 'AI Workflows', 'KPI Tracking', 'Business Development', 'Cross-Functional Ops'],
  },
  {
    id: 'skarion-exec',
    company: 'Skarion',
    role: 'Executive',
    type: 'Full-time',
    period: 'Mar 2026 – May 2026',
    duration: '3 mos',
    location: 'Fairfax, Virginia, US · Remote',
    categories: ['Leadership & Ops', 'Engineering'],
    bullets: [
      'Coordinated candidate-support pipelines across specialized engineering fields including GIS, CAD drafting, OSP engineering, Solar PV, and FPGA.',
      'Reviewed and tailored 10–12 technical resumes per focused cycle for ATS alignment, domain keywords, and target-market expectations.',
      'Built recruiter contact pipelines and ran targeted email and LinkedIn outreach campaigns generating recruiter conversations and interviews.',
      'Supported Python web-scraping and data-processing workflows (job extraction, deduplication, validation) and led QA testing on AI prompts, candidate dashboards, and SEO.',
    ],
    skills: ['Python', 'SQL', 'JavaScript', 'Web Scraping QA', 'Prompt Testing', 'Recruiter Outreach'],
  },
  {
    id: 'skarion-intern',
    company: 'Skarion',
    role: 'Talent & Outreach Intern',
    type: 'Internship',
    period: 'Dec 2025 – Feb 2026',
    duration: '3 mos',
    location: 'Fairfax, Virginia, US · Remote',
    categories: ['Leadership & Ops'],
    highlight: 'Promoted in 3 months',
    bullets: [
      'Maintained project trackers, action registers, meeting notes, and deliverable follow-ups across internal and client workstreams.',
      'Conducted market, competitor, and industry research to inform project planning and B2B service strategy.',
      'Collected, validated, and organized operational datasets in Excel and Google Sheets; promoted to Executive after three months.',
    ],
    skills: ['Operations', 'Market Research', 'B2B', 'Documentation', 'Python Automation'],
  },
  {
    id: 'codveda',
    company: 'Codveda Technologies',
    role: 'Full-Stack Development Intern',
    type: 'Internship',
    period: 'Jul 2025 – Oct 2025',
    duration: '4 mos',
    location: 'Remote',
    categories: ['Engineering'],
    bullets: [
      'Engineered end-to-end web applications from local environment setup through deployment using the MERN/PERN ecosystem.',
      'Built scalable RESTful APIs with Node.js and Express implementing full CRUD operations, validation, and Postman-verified endpoint suites.',
      'Created responsive, component-driven interfaces with HTML, CSS, JavaScript, and modern frameworks (React / Vue / Angular).',
      'Implemented secure JWT authentication, role-based route protection, and bcrypt password hashing alongside MongoDB (Mongoose) and SQL (Sequelize/Prisma).',
    ],
    skills: ['Node.js', 'Express', 'React', 'MongoDB', 'PostgreSQL', 'JWT', 'REST & GraphQL', 'WebSockets'],
  },
  {
    id: 'gaotek',
    company: 'GAOTek Inc.',
    role: 'Assistant Squad Leader & Web Developer',
    type: 'Internship',
    period: 'Jun 2024 – Oct 2024',
    duration: '5 mos',
    location: 'New York, US · Remote',
    categories: ['Engineering', 'Leadership & Ops'],
    bullets: [
      'Designed, customized, and maintained WordPress websites, themes, plugins, security updates, backups, and SEO optimizations.',
      'Promoted to Assistant Squad Leader (Sep–Oct 2024), leading weekly intern syncs, assigning tasks, and coordinating cross-functional web delivery.',
    ],
    skills: ['WordPress', 'Front-End Dev', 'SEO', 'Team Coordination', 'Technical Support'],
  },
  {
    id: 'nsudc',
    company: 'NSU Debate Club (NSUDC)',
    role: 'Sub-Executive (Debate Development)',
    type: 'Leadership',
    period: 'Dec 2023 – Jul 2025',
    duration: '3 yrs 7 mos total',
    location: 'Dhaka, Bangladesh',
    categories: ['Community'],
    highlight: 'Champion — NSUDC Intra 2024',
    bullets: [
      'Designed and executed the core training curriculum to sharpen members’ analytical framing, argumentation, and public speaking.',
      'Conducted workshops, organized mock debate rounds, tracked member progression, and mentored novice and tournament teams.',
      'Won Champion title at NSUDC Intra 2024 (Asian Parliamentary Debate).',
    ],
    skills: ['Public Speaking', 'Curriculum Design', 'Mentorship', 'Leadership'],
  },
  {
    id: 'nsu-acm',
    company: 'NSU ACM Student Chapter',
    role: 'Research & Development / Senior Member',
    type: 'Part-time',
    period: 'Jan 2021 – May 2023',
    duration: '2 yrs 5 mos',
    location: 'Dhaka, Bangladesh',
    categories: ['Community', 'Engineering'],
    bullets: [
      'Collaborated in the R&D wing on an NLP-based voice-to-text system tailored for the Bengali language.',
      'Coordinated vendor logistics and technical event operations for flagship university events including HACKNSU and the Capstone Project Showcase.',
    ],
    skills: ['AI / NLP', 'Python', 'OpenCV', 'Event Operations'],
  },
  {
    id: 'techtrioz',
    company: 'TechTrioZ Solutions',
    role: 'Data Entry Operator',
    type: 'Part-time',
    period: 'Jul 2022 – Aug 2022',
    duration: '2 mos',
    location: 'Dhaka, Bangladesh · On-site',
    categories: ['Leadership & Ops'],
    bullets: [
      'Digitized and validated field survey records directly onto server infrastructure for the government “National Student Assessment 2022” project under daily accuracy targets.',
    ],
    skills: ['Data Validation', 'Server Entry', 'Accuracy'],
  },
  {
    id: 'scouts',
    company: 'Bangladesh Scouts',
    role: 'Unit Leader',
    type: 'Leadership',
    period: 'Oct 2013 – Feb 2017',
    duration: '3 yrs 5 mos',
    location: 'Bangladesh',
    categories: ['Community'],
    bullets: [
      'Led school scout unit across intra-scout camps, weekly survival/fieldcraft training, and daily community service evaluation.',
    ],
    skills: ['Team Leadership', 'Community Service', 'Training'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'krishi-ai',
    title: 'Krishi & Plant Disease AI',
    subtitle: 'Mobile Agri-Platform & Computer Vision',
    categories: ['AI & ML', 'Mobile'],
    image: '/images/project-krishi-ai.webp',
    imageWidth: 377,
    imageHeight: 750,
    secondaryImage: '/images/project-krishi.webp',
    accent: 'from-emerald-500/20 to-teal-500/10',
    featured: true,
    summary:
      'An all-in-one Android/Flutter platform assisting Bangladeshi farmers with e-commerce access, real-time location weather & experimental flood alerts, and on-device deep-learning leaf disease detection.',
    highlights: [
      'Trained CNN / MobileNet V2 classifiers in PyTorch and deployed lightweight inference via TensorFlow Lite to diagnose potato and tomato leaf diseases (96.7% confidence previewed on Early Blight).',
      'Integrated Firebase authentication and e-wallet checkout flows for seeds and agricultural supplies.',
      'Built live weather feeds using Rapid API plus experimental area-based flood risk alerts.',
    ],
    tech: ['Flutter', 'Dart', 'PyTorch', 'TensorFlow Lite', 'MobileNet V2', 'CNN', 'SVM', 'Firebase'],
    repos: [
      { label: 'Krishi Mobile App', url: 'https://github.com/ferdousAkash/Krishi' },
      { label: 'AI Disease Detector', url: 'https://github.com/ferdousAkash/Krishi-AI-Plant-Disease-Detector' },
    ],
  },
  {
    id: 'medease',
    title: 'MEDEASE — Medical LLM Chatbot',
    subtitle: 'End-to-End Healthcare Conversational AI',
    categories: ['AI & ML'],
    accent: 'from-sky-500/20 to-indigo-500/10',
    featured: true,
    summary:
      'An end-to-end medical question-answering assistant combining Large Language Models with structured healthcare workflows and tumor analysis experimentation.',
    highlights: [
      'Designed an interactive LLM query pipeline in Python & Jupyter Notebook for grounded medical knowledge retrieval.',
      'Paired conversational symptom/medical Q&A with exploratory tumor classification analysis.',
      'Structured modular notebooks and reproducible prompts for rapid evaluation.',
    ],
    tech: ['Python', 'LLM', 'NLP', 'Jupyter Notebook', 'Deep Learning'],
    repos: [
      { label: 'GitHub Repository', url: 'https://github.com/ferdousAkash/End-To-End-Medical-Chatbot' },
    ],
  },
  {
    id: 'durjog-bondhu',
    title: 'Durjog Bondhu',
    subtitle: 'Disaster Management & Relief Distribution Web App',
    categories: ['Full-Stack'],
    image: '/images/project-durjog.webp',
    imageWidth: 967,
    imageHeight: 919,
    accent: 'from-amber-500/20 to-orange-500/10',
    featured: true,
    summary:
      'A full-stack PHP & MySQL humanitarian platform created in response to the 2022 Sylhet floods, ensuring transparent aid allocation and subsidized survival essentials.',
    highlights: [
      'Built National ID (NID) verification into beneficiary intake forms to prevent duplicate claims and ensure transparent relief fund distribution.',
      'Offered essential survival kits (food, clean water, medicine) at 30% of base market cost alongside a dynamic search engine.',
      'Engineered an authenticated admin panel with hashed credentials to manage inventory, pricing, orders, and delivery tracking.',
    ],
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Password Hashing', 'Admin CMS'],
    repos: [
      { label: 'GitHub Repository', url: 'https://github.com/ferdousAkash/Durjog-Bondhu' },
    ],
  },
  {
    id: 'codveda-fullstack',
    title: 'Full-Stack Web Engineering Suite',
    subtitle: 'REST APIs, Auth & Modern Frontend Architecture',
    categories: ['Full-Stack'],
    accent: 'from-violet-500/20 to-fuchsia-500/10',
    summary:
      'End-to-end full-stack engineering tasks delivered at Codveda Technologies spanning secure REST APIs, database modeling, JWT security, and responsive client apps.',
    highlights: [
      'Developed modular Node.js & Express CRUD backends validated through comprehensive Postman collections.',
      'Implemented stateless JWT authentication, bcrypt credential hashing, and role-based access middleware.',
      'Connected responsive JavaScript/React UIs to MongoDB (Mongoose) and SQL (Sequelize/Prisma) schemas.',
    ],
    tech: ['Node.js', 'Express', 'React', 'JavaScript', 'JWT', 'MongoDB', 'PostgreSQL', 'Postman'],
    repos: [
      { label: 'GitHub Repository', url: 'https://github.com/ferdousAkash/Full_stack_task_Codveda_LEVEL1' },
    ],
  },
  {
    id: 'dream-diet',
    title: 'Dream Diet Plans',
    subtitle: 'Flutter Nutrition & Fitness Companion',
    categories: ['Mobile'],
    image: '/images/project-fitness.webp',
    imageWidth: 720,
    imageHeight: 1198,
    accent: 'from-rose-500/20 to-pink-500/10',
    summary:
      'A cross-platform Flutter mobile UI focused on meal categorization, calorie visibility, preparation times, and clean visual hierarchy for daily nutrition planning.',
    highlights: [
      'Crafted smooth category filtering (Salads, Cakes, Smoothies) with custom cards and responsive spacing.',
      'Displayed dietary recommendations with preparation duration, difficulty level, and caloric breakdown.',
    ],
    tech: ['Flutter', 'Dart', 'Mobile UI/UX'],
    repos: [
      { label: 'GitHub Repository', url: 'https://github.com/ferdousAkash/Fitness_App' },
    ],
  },
  {
    id: 'bst-phonebook',
    title: 'BST Contactbook Engine',
    subtitle: 'Binary Search Tree CLI Application in C++',
    categories: ['Systems'],
    image: '/images/project-bst.webp',
    imageWidth: 731,
    imageHeight: 367,
    accent: 'from-cyan-500/20 to-blue-500/10',
    summary:
      'A lightweight C++ contact management system built from scratch on Binary Search Trees to guarantee sorted traversal and logarithmic-average contact lookups.',
    highlights: [
      'Implemented recursive BST insertion, search, in-order sorted display, and node deletion without external libraries.',
      'Designed an interactive terminal menu handling rapid CRUD operations on contact records.',
    ],
    tech: ['C++', 'Binary Search Tree', 'Data Structures & Algorithms'],
    repos: [
      { label: 'GitHub Repository', url: 'https://github.com/ferdousAkash/Phonebook-BST' },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Project Management & Operations',
    description: 'Cross-functional execution, client delivery, and AI-enabled operational scaling.',
    items: [
      'Cross-Functional Leadership',
      'Client Conversion & BDM',
      'KPI & SLA Reporting',
      'SOP & Process Design',
      'AI Pipeline QA & Prompt Ops',
      'ATS & Technical Recruitment Ops',
      'Risk Escalation & Mitigation',
      'Public Speaking & Debate',
    ],
  },
  {
    title: 'AI, Machine Learning & Data Science',
    description: 'Computer vision, LLM pipelines, statistical modeling, and data automation.',
    items: [
      'Python',
      'PyTorch',
      'TensorFlow Lite',
      'CNN & MobileNet V2',
      'OpenCV',
      'SVM & Scikit-Learn',
      'LLM Workflows',
      'Pandas & Data Validation',
      'Python Web Scraping',
    ],
  },
  {
    title: 'Full-Stack Web & APIs',
    description: 'End-to-end web architecture from database schemas to secure responsive UIs.',
    items: [
      'React & Modern JS',
      'Node.js & Express',
      'REST & GraphQL APIs',
      'WebSockets',
      'JWT & bcrypt Auth',
      'PHP',
      'HTML5 & CSS3',
      'WordPress & SEO',
    ],
  },
  {
    title: 'Mobile, Languages & Infrastructure',
    description: 'Cross-platform mobile apps, core systems languages, and databases.',
    items: [
      'Flutter & Dart',
      'Java',
      'C & C++',
      'PostgreSQL & MySQL',
      'MongoDB (Mongoose)',
      'Firebase',
      'Docker & Linux',
      'Git, GitHub & Postman',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'Jahangirnagar University',
    degree: 'Master of Science (M.Sc.)',
    field: 'Statistics & Data Science',
    period: 'Jan 2026 – Dec 2026',
    location: 'Dhaka, Bangladesh',
    details: [
      'Advancing statistical modeling, experimental analysis, and quantitative data science methodologies.',
    ],
  },
  {
    school: 'North South University',
    degree: 'Bachelor of Science (B.Sc.)',
    field: 'Computer Science and Engineering · Major: AI, Minor: Data Comm & Network',
    period: 'May 2020 – Jan 2024',
    location: 'Bashundhara R/A, Dhaka',
    details: [
      'Champion of NSUDC Intra Debate Competition 2024 & Sub-Executive of Debate Development.',
      'Former Senior & R&D Member at NSU ACM Student Chapter; active event volunteer & mentor.',
    ],
  },
  {
    school: 'Siddique Memorial School & College',
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Science',
    period: '2017 – 2019',
    location: 'Rangpur, Bangladesh',
    details: ['30% Academic Waiver Recipient.'],
  },
  {
    school: 'Shalapur High School',
    degree: 'Secondary School Certificate (SSC)',
    field: 'Science',
    period: '2015 – 2017',
    location: 'Joypurhat, Bangladesh',
    details: ['Active unit leader in Bangladesh Scouts.'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    issued: 'Aug 2025',
    credentialId: '6e5d888ea548',
    url: 'https://www.hackerrank.com/certificates/6e5d888ea548',
    tag: 'Programming',
  },
  {
    title: 'Implementing ISO/IEC 27001 & ISO/IEC 27032',
    issuer: 'PECB',
    issued: 'Oct 2024',
    tag: 'Cybersecurity',
  },
  {
    title: 'Deep Learning Python Project: CNN-Based Image Classification',
    issuer: 'Udemy',
    issued: 'Oct 2024',
    credentialId: 'UC-a801e9fb-0ae8-4f63-91b5-a8b9468a258a',
    tag: 'AI / Vision',
  },
  {
    title: "2024 Beginner's Guide to Cyber Security",
    issuer: 'Udemy',
    issued: 'Oct 2024',
    credentialId: 'UC-25107381-60d4-43b5-b3dc-27b9efdf974a',
    tag: 'Cybersecurity',
  },
  {
    title: 'The Complete Flutter Development Guide [2024 Edition]',
    issuer: 'Udemy',
    credentialId: 'UC-2493f2dd-15e1-443b-9902-7e918523f670',
    tag: 'Mobile',
  },
  {
    title: 'Discovering LinkedIn for Career Growth',
    issuer: 'North South University',
    issued: 'Apr 2024',
    tag: 'Career & Comms',
  },
];
