const header = {
  homepage: '.',
  title: 'EY.',
}

const about = {
  name: 'Eldis Ymeraj',
  role: 'Master’s Student in Artificial Intelligence',
  description:
    "I am a Master’s student in Artificial Intelligence at the University of Caen Normandy, with a strong interest in Data Science, Machine Learning, and Natural Language Processing. Through academic projects and applied research work, I have developed solid experience in data analysis, modeling, and end-to-end AI pipelines. I am currently seeking a 4–6 month end-of-studies internship starting March 2026 in Data Science, AI, or NLP, where I can contribute to real-world projects and continue strengthening my technical skills.",
  resume: '/YMERAJ_CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/eldis-ymeraj-2b5433226',
    github: 'https://github.com/elymeraj',
  },
}



const projects = [
    {
    name: 'Autobiographical Memory Classification (work in progress)',
    description:
      'A research-oriented NLP project that fine-tunes CamemBERT for token-level classification of autobiographical narratives. The model identifies, word by word, whether a memory detail is episodic (event-specific) or semantic (general knowledge), using BIO tagging and manually annotated data from neuropsychological protocols.',
    stack: [
      'Python',
      'PyTorch',
      'CamemBERT',
      'Hugging Face Transformers',
      'NLP',
      'BIO Tagging'
    ],
    sourceCode: null,
    livePreview: null
  },
  {
  name: 'Cooperative Game Theory Solver',
  description:
    'A modular Java framework for modeling and analyzing coalitional games. It implements algorithms to verify mathematical properties (Convexity, Superadditivity) and computes solution concepts like the Core (using a hybrid Grid Search & Monte Carlo approach) and Shapley Value, validated through scenarios like Veto and Majority voting games.',
  stack: ['Java', 'OOP', 'Game Theory Algorithms', 'Monte Carlo Simulation', 'Makefile'],
  sourceCode: 'https://github.com/elymeraj/SMAA',
  livePreview: 'https://github.com/elymeraj/SMAA',
  },
  {
  name: 'Fair Allocation of Indivisible Resources',
  description:
    'A decision-making and algorithmic fairness project focused on the allocation of indivisible goods among multiple agents with heterogeneous preferences. The project implements preference modeling, random and structured allocation protocols, fairness metrics (EF, EF1, EFX, proportionality), envy-graph analysis, and reallocation strategies to reduce envy. A statistical evaluation module compares fairness and utility metrics across multiple simulations and problem sizes.',
  stack: [
    'Python',
    'Algorithmic Fairness',
    'Multi-Agent Systems',
    'Graph Algorithms',
    'Simulation',
    'Statistical Analysis'
  ],
  sourceCode: 'https://github.com/elymeraj/https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources',
  livePreview: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources'
  },
  {
  name: 'Adversarial Games with Opponent Modeling (MinMax)',
  description:
    'A decision-making and game AI project focused on adversarial reasoning under complete and incomplete information. The project implements two advanced variants of the MinMax algorithm: a predictive approach based on a fixed opponent model and a realistic approach using dynamic filtering of multiple credible opponent models. The algorithms were applied to Tic-Tac-Toe (complete information) and Domino (incomplete information), with extensive simulations and performance analysis against different adversary strategies.',
  stack: [
    'Python',
    'Game Theory',
    'Adversarial Search',
    'MinMax / Expectimax',
    'Opponent Modeling',
    'Simulation & Analysis'
  ],
  sourceCode: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models',
  livePreview: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models'
  },
  {
  name: 'Multi-Agent Production Workshop Simulation (JADE)',
  description:
    'A multi-agent systems project simulating a decentralized production workshop using the JADE framework. The system models an atelier agent coordinating multiple robot agents with heterogeneous skills to process products requiring specific competencies. Task allocation is dynamic, communication relies on ACL messaging, and stochastic elements such as skill proficiency, execution time, and failure probability are integrated. The project includes experimental evaluation under different configurations to analyze coordination efficiency and system robustness.',
  stack: [
    'Java',
    'JADE',
    'Multi-Agent Systems',
    'Agent Communication (ACL)',
    'Distributed Decision-Making',
    'Simulation'
  ],
  sourceCode: 'https://github.com/elymeraj/Atelier_agent',
  livePreview: 'https://github.com/elymeraj/Atelier_agent'
  },
  {
  name: 'Modal Logic Reasoning & Semantic Tableaux',
  description:
    'A symbolic reasoning project focused on propositional modal logic, combining two complementary approaches: Kripke semantics and the semantic tableau method. The project implements a full representation of modal formulas using the Composite design pattern, evaluates their truth in Kripke models, and checks satisfiability and validity through a tableau-based proof system with systematic rule application.',
  stack: [
    'Java',
    'Modal Logic',
    'Symbolic Reasoning',
    'Kripke Semantics',
    'Semantic Tableaux',
    'Design Patterns'
  ],
  sourceCode: 'https://github.com/elymeraj/Modal-Logic',
  livePreview: 'https://github.com/elymeraj/Modal-Logic'
  },
  {
    name: 'Sales Data Visualization with GraphQL and D3.js',
    description:
      'A containerized sales data visualization project utilizing Docker, MongoDB, React, and GraphQL. The system features a MongoDB database for sales data, a React-based UI, and a GraphQL server with associated resolvers.',
    stack: ['SASS', 'TypeScript', 'React','Docker'],
    sourceCode: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
    livePreview: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
  },
  {
    name: 'Databases: Multidimensional Modeling and Analysis',
    description:
      'A project that includes ETL (Extract, Transform, Load) processes using Talend and Mondrian OLAP Server, designed to create and manage OLAP cubes to facilitate data analysis and reporting.',
    stack: ['Apache Hop', 'SQLite', 'ETL', 'Mondrian OLAP Server'],
    sourceCode: 'https://github.com/imessili/ETL_Talend_OLAP_CUBE',
    livePreview: 'https://github.com/imessili/ETL_Talend_OLAP_CUBE',
  },
  {
    name: 'Java Paint App & Shape Game Using MVC & Other Patterns',
    description:
      'A Java-based paint application using the MVC pattern,it allows users to create and manipulate drawings, and includes a feature where users can play a game of drawing shapes.',
    stack: ['Java', 'Java Swing', 'Design Patterns'],
    sourceCode: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
    livePreview: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
  },
  {
  name: 'Machine Learning Foundations',
  description:
    'A collection of applied machine learning projects developed through a series of Jupyter notebooks during a Master’s-level course in Artificial Intelligence. The project covers core supervised and unsupervised learning techniques, including regression, clustering, classification with SVMs, boosting methods, and data mining tasks. Each notebook combines theoretical concepts with hands-on experiments, visual analysis, and performance evaluation on synthetic and real datasets.',
  stack: [
    'Python',
    'Jupyter Notebook',
    'scikit-learn',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Machine Learning'
  ],
  sourceCode: 'https://github.com/elymeraj/Machine-Learning-',
  livePreview: 'https://github.com/elymeraj/Machine-Learning-'
  },
  {
  name: 'Handball Player & Ball Tracking (Computer Vision)',
  description:
    'A computer vision project focused on detecting and tracking key entities in handball match videos, including players, goalkeepers, referees, and the ball. The system uses multiple YOLO models specialized for different object categories and combines them with tracking mechanisms to maintain object identities across frames. The pipeline is optimized for experimentation through cached detections and supports efficient analysis of sports dynamics.',
  stack: [
    'Python',
    'Computer Vision',
    'YOLO',
    'Object Detection',
    'Multi-Object Tracking',
    'Video Processing'
  ],
  sourceCode: 'https://github.com/elymeraj/Handball_Tracking',
  livePreview: 'https://github.com/elymeraj/Handball_Tracking'
  },
  {
  name: 'Graph Coloring, SAT Solving & Computational Complexity',
  description:
    'An algorithmic reasoning project combining graph theory, logical satisfiability, and complexity analysis. The project addresses the 3-coloring and 4-coloring problems using both brute-force search and polynomial reductions to SAT. It includes CNF encoding of graph constraints, integration of a SAT solver to efficiently solve large instances, and extensive experimental evaluation on structured and random graphs, with complexity analysis across different problem sizes.',
  stack: [
    'Python',
    'Graph Algorithms',
    'SAT Solvers',
    'Computational Complexity',
    'NetworkX',
    'Algorithm Analysis'
  ],
  sourceCode: 'https://github.com/elymeraj/ccSAT_3Col',
  livePreview: 'https://github.com/elymeraj/ccSAT_3Col'
  }
]

const experience = [
  {
    id: 'responsibio-rd-intern-2025',
    title: 'Data Science Intern',
    company: 'CENOMEXA – Responsibio Research Project',
    period: '2025 · 3-month internship',
    description:
      'Design and implementation of an end-to-end hybrid AI pipeline for non-invasive assessment of rodents’ emotional states through bio-acoustic analysis. The project combines signal processing, deep learning, and classical machine learning to handle complex, unstructured audio data and ensure robust generalization in laboratory conditions.',
    responsibilities: [
      'Built and curated a proprietary bio-acoustic dataset (mouse and rat vocalizations), including cleaning and normalization of raw audio signals.',
      'Transformed time-series audio signals into time–frequency representations by generating Mel-spectrograms (decibel scale) using Librosa.',
      'Applied transfer learning with a pre-trained ResNet50 architecture (PyTorch) as a feature extractor to convert spectrogram images into high-dimensional embeddings (2048 features).',
      'Performed dimensionality reduction using Principal Component Analysis (PCA), reducing the latent space from 2048 to 58 dimensions while preserving 86% of the variance.',
      'Conducted an ablation study to identify the optimal variance threshold and mitigate overfitting on a limited dataset.',
      'Trained and optimized a linear Support Vector Machine (SVM) classifier with balanced class weighting to address class imbalance.',
      'Validated the model using stratified K-fold cross-validation and evaluated robustness under domain shift by testing generalization across species (mouse → rat).',
      'Achieved approximately 80% classification accuracy, demonstrating strong robustness to background noise and unseen recording conditions.'
    ],
    stack: [
      'Python 3.12',
      'PyTorch',
      'scikit-learn',
      'Librosa',
      'Signal Processing (DSP)',
      'PCA',
      'SVM',
      'Jupyter Lab',
      'Matplotlib'
    ]
  }
]

const skills = [
  // Programming
  'Python',
  'Java',
  'SQL',
  'C',
  'C++',

  // Data Science & Analysis
  'Data Analysis',
  'Data Cleaning',
  'Data Preprocessing',
  'Exploratory Data Analysis (EDA)',
  'Feature Engineering',
  'Statistical Analysis',

  // Machine Learning
  'Machine Learning',
  'Supervised & Unsupervised Learning',
  'Model Training & Evaluation',
  'scikit-learn',
  'Boosting (AdaBoost)',
  'Clustering (K-Means, DBSCAN, Hierarchical)',
  'Support Vector Machines (SVM)',

  // Deep Learning
  'Deep Learning',
  'PyTorch',
  'TensorFlow',
  'Neural Networks',
  'Transfer Learning',

  // NLP
  'Natural Language Processing (NLP)',
  'Text Preprocessing',
  'Token Classification',
  'BERT / CamemBERT',
  'Embeddings',
  'Hugging Face Transformers',

  // Computer Vision
  'Computer Vision',
  'Object Detection',
  'YOLO',
  'Multi-Object Tracking',
  'OpenCV',

  // Data Engineering (foundations)
  'ETL Pipelines',
  'Data Warehousing',
  'Apache Hop',
  'Talend',
  'OLAP / MDX',
  'SQLite',
  'MongoDB',

  // Tools & Environment
  'Git',
  'Docker',
  'Jupyter Notebook',
  'Linux'
]


const contact = {
  email: 'eldisymeraj0@gmail.com',
}

export { header, about, projects, experience, skills, contact }
