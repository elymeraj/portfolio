const header = {
  homepage: '.',
  title: 'EY.',
}

const contact = {
  email: 'eldisymeraj0@gmail.com',
}

// --- ENGLISH DATA ---
const aboutEn = {
  name: 'Eldis Ymeraj',
  role: 'AI & Machine Learning Engineer',
  description:
    'AI & Machine Learning Engineer with hands-on experience in developing, evaluating, and analyzing machine learning and deep learning models. Currently working at Airbus on Explainable AI for computer vision, with additional experience in NLP, data science, and applied machine learning.',
  resume: `${process.env.PUBLIC_URL}/CV_YMERAJ_EN.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/eldis-ymeraj-2b5433226',
    github: 'https://github.com/elymeraj',
  },
}

const projectsEn = [
  {
    name: 'Handball Video Detection and Tracking',
    description:
      'A computer vision project covering the workflow from dataset creation and annotation to the training of specialized YOLOv8 models for players, goalkeepers, referees, the ball, and court keypoints. The video tracking pipeline combines ByteTrack, ball filtering and interpolation, and homography-based projection of positions onto a two-dimensional handball court.',
    stack: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'ByteTrack', 'Homography'],
    sourceCode: 'https://github.com/elymeraj/Handball_Tracking',
    livePreview: 'https://github.com/elymeraj/Handball_Tracking',
  },
  {
    name: 'Automatic Annotation of Clinical Narratives',
    description:
      'An NLP system for automatically identifying episodic and semantic memory spans at token level in French clinical narratives. CamemBERT, ModernCamemBERT, and DeBERTa are fine-tuned and compared using patient-level cross-validation to evaluate generalization while preventing data leakage.',
    stack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'CamemBERT', 'Pandas'],
    sourceCode: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
    livePreview: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
  },
  {
    name: 'Interactive Sales Data Visualization',
    description:
      'A containerized web application for exploring sales data through interactive charts and maps. The project combines a MongoDB database, a GraphQL API developed with Node.js, and dynamic D3.js visualizations, with the different services orchestrated through Docker.',
    stack: ['Docker', 'Node.js', 'GraphQL', 'MongoDB', 'D3.js', 'JavaScript'],
    sourceCode: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
    livePreview: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
  },
  {
    name: 'Machine Learning Foundations',
    description:
      'A collection of applied machine learning notebooks covering supervised and unsupervised learning techniques, including regression, clustering, SVM classification, boosting, and data mining. The notebooks combine implementation, visualization, and model evaluation on synthetic and real-world datasets.',
    stack: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    sourceCode: 'https://github.com/elymeraj/Machine-Learning-',
    livePreview: 'https://github.com/elymeraj/Machine-Learning-',
  },
  {
    name: 'Data Warehouse and OLAP Analysis',
    description:
      'A data engineering project focused on building an analytical data warehouse from operational sources. It includes ETL workflows, multidimensional modeling, OLAP cube creation, and MDX queries for interactive reporting and analysis.',
    stack: ['Apache Hop', 'SQLite', 'ETL', 'OLAP', 'MDX'],
    sourceCode: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
    livePreview: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
  },
  {
    name: 'Cooperative Game Theory Solver',
    description:
      'A modular Java framework for modeling and analyzing coalitional games. It verifies properties such as convexity and superadditivity, and computes solution concepts including the Core and the Shapley value through exact and simulation-based approaches.',
    stack: ['Java', 'OOP', 'Game Theory', 'Monte Carlo Simulation', 'Makefile'],
    sourceCode: 'https://github.com/elymeraj/SMAA',
    livePreview: 'https://github.com/elymeraj/SMAA',
  },
  {
    name: 'Fair Allocation of Indivisible Resources',
    description:
      'A decision-making project focused on allocating indivisible goods among agents with different preferences. It implements allocation protocols, fairness criteria such as EF, EF1, EFX, and proportionality, envy-graph analysis, and reallocation strategies evaluated through repeated simulations.',
    stack: ['Python', 'Algorithmic Fairness', 'Multi-Agent Systems', 'Graph Algorithms', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources',
    livePreview: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources',
  },
  {
    name: 'Adversarial Games with Opponent Modeling',
    description:
      'A game AI project exploring adversarial reasoning under complete and incomplete information. It implements predictive and adaptive variants of MinMax, applies them to Tic-Tac-Toe and Domino, and compares their behavior against several opponent strategies through extensive simulations.',
    stack: ['Python', 'Game Theory', 'Adversarial Search', 'MinMax', 'Opponent Modeling'],
    sourceCode: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models',
    livePreview: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models',
  },
  {
    name: 'Multi-Agent Production Workshop Simulation',
    description:
      'A decentralized production workshop simulation developed with JADE. A workshop agent coordinates robot agents with heterogeneous skills through ACL messages, while execution time, proficiency, and failure probability are modeled to evaluate coordination efficiency and robustness under different configurations.',
    stack: ['Java', 'JADE', 'Multi-Agent Systems', 'ACL Messaging', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Atelier_agent',
    livePreview: 'https://github.com/elymeraj/Atelier_agent',
  },
  {
    name: 'Modal Logic Reasoning and Semantic Tableaux',
    description:
      'A symbolic reasoning project combining Kripke semantics and semantic tableaux for propositional modal logic. It represents formulas through design patterns, evaluates them in Kripke models, and checks satisfiability and validity through a systematic tableau proof procedure.',
    stack: ['Java', 'Modal Logic', 'Symbolic Reasoning', 'Kripke Semantics', 'Design Patterns'],
    sourceCode: 'https://github.com/elymeraj/Modal-Logic',
    livePreview: 'https://github.com/elymeraj/Modal-Logic',
  },
  {
    name: 'Java Paint Application',
    description:
      'A Java drawing application based on the MVC architecture and several design patterns. Users can create and manipulate graphical objects, while an additional game mode introduces interactive shape-drawing tasks.',
    stack: ['Java', 'Swing', 'MVC', 'Design Patterns'],
    sourceCode: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
    livePreview: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
  },
  {
    name: 'Graph Coloring and SAT Solving',
    description:
      'An algorithmic project combining graph theory, logical satisfiability, and complexity analysis. It solves 3-coloring and 4-coloring problems through exhaustive search and polynomial reductions to SAT, with CNF encoding and experimental evaluation on structured and random graphs.',
    stack: ['Python', 'Graph Algorithms', 'SAT Solvers', 'Complexity Analysis', 'NetworkX'],
    sourceCode: 'https://github.com/elymeraj/ccSAT_3Col',
    livePreview: 'https://github.com/elymeraj/ccSAT_3Col',
  },
]

const experienceEn = [
  {
    id: 'airbus-xai-intern-2026',
    title: 'Artificial Intelligence Intern -- Trustworthy AI',
    company: 'Airbus SAS',
    period: 'March 2026 – September 2026 · Internship',
    description:
      'Work on Explainable AI for a computer vision model used for runway detection in a vision-based landing context.',
    responsibilities: [
      'Adapted an Explainable AI method to a multi-scale YOLO-NAS Pose model using PyTorch to identify the visual features influencing model detections.',
      'Developed an experimental protocol to extract, select, and analyze visual representations, assessing their quality, stability, and ability to preserve information relevant to detections.',
      'Quantitatively evaluated detection fidelity using detection and spatial matching metrics, achieving 90.5% precision and a PR-AUC of 0.776.',
      'Analyzed model behavior across different runway distances to identify the most influential visual information and study how it evolves throughout the approach.',
    ],
    stack: [
      'Python',
      'PyTorch',
      'YOLO-NAS Pose',
      'Xplique',
      'Holistic CRAFT',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'AWS EC2',
      'Amazon S3',
      'Git',
    ],
  },
  {
    id: 'responsibio-rd-intern-2025',
    title: 'Data Scientist Intern',
    company: 'Responsibio',
    period: 'May 2025 – August 2025 · Internship',
    description:
      'Data science work on mouse vocalization analysis for animal welfare classification.',
    responsibilities: [
      'Collected and prepared mouse vocalization recordings and associated metadata to build a dataset for animal welfare classification.',
      'Developed an audio classification pipeline using mel-spectrograms, feature extraction, PCA dimensionality reduction, and a linear SVM classifier.',
      'Evaluated the model using 5-fold cross-validation, reducing 2048 features to 58 while retaining 86% of the variance and achieving approximately 79% correct predictions.',
    ],
    stack: [
      'Python',
      'scikit-learn',
      'NumPy',
      'Pandas',
      'PCA',
      'SVM',
    ],
  },
]

const skillsEn = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C', 'C++'],
  },
  {
    category: 'Machine Learning & Computer Vision',
    items: [
      'Object Detection',
      'Pose Estimation',
      'YOLO',
      'Explainable AI (XAI)',
      'PCA',
      'NMF',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'OpenCV',
      'NumPy',
      'Pandas',
    ],
  },
  {
    category: 'NLP & Generative AI',
    items: [
      'RAG',
      'Transformers',
      'Hugging Face',
      'CamemBERT',
      'Embeddings',
    ],
  },
  {
    category: 'Data Engineering & Cloud',
    items: [
      'AWS (EC2, S3)',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Apache Hop',
      'Data Visualization (Matplotlib, Plotly)',
    ],
  },
  {
    category: 'Development Tools',
    items: [
      'Git',
      'GitHub',
      'Linux',
      'Conda',
      'Jupyter Notebook',
      'Google Colab',
      'VS Code',
    ],
  },
  {
    category: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
]

// --- FRENCH DATA ---
const aboutFr = {
  name: 'Eldis Ymeraj',
  role: 'Ingénieur IA & Machine Learning',
  description:
    "Ingénieur en Intelligence Artificielle et Machine Learning, avec une expérience pratique dans le développement, l'évaluation et l'analyse de modèles de machine learning et de deep learning. Je travaille actuellement chez Airbus sur l'IA explicable appliquée à la vision par ordinateur, avec également une expérience en NLP, data science et machine learning appliqué.",
  resume: `${process.env.PUBLIC_URL}/CV_YMERAJ_FR.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/eldis-ymeraj-2b5433226',
    github: 'https://github.com/elymeraj',
  },
}

const projectsFr = [
  {
    name: 'Détection et suivi vidéo en handball',
    description:
      "Un projet de vision par ordinateur couvrant le processus de la création et de l'annotation des jeux de données jusqu'à l'entraînement de modèles YOLOv8 spécialisés pour les joueurs, gardiens, arbitres, le ballon et les points clés du terrain. Le pipeline de suivi vidéo combine ByteTrack, le filtrage et l'interpolation du ballon, ainsi qu'une homographie pour projeter les positions sur un terrain de handball en deux dimensions.",
    stack: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'ByteTrack', 'Homographie'],
    sourceCode: 'https://github.com/elymeraj/Handball_Tracking',
    livePreview: 'https://github.com/elymeraj/Handball_Tracking',
  },
  {
    name: 'Annotation automatique de récits cliniques',
    description:
      "Un système NLP permettant d'identifier automatiquement, mot par mot, les passages de mémoire épisodique et sémantique dans des récits cliniques en français. CamemBERT, ModernCamemBERT et DeBERTa sont fine-tunés et comparés avec une validation croisée par patient afin d'évaluer la généralisation sans fuite de données.",
    stack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'CamemBERT', 'Pandas'],
    sourceCode: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
    livePreview: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
  },
  {
    name: 'Visualisation interactive de données de ventes',
    description:
      "Une application web conteneurisée permettant d’explorer des données de ventes à travers des graphiques et des cartes interactives. Le projet combine une base MongoDB, une API GraphQL développée avec Node.js et des visualisations dynamiques en D3.js, avec des services orchestrés à l’aide de Docker.",
    stack: ['Docker', 'Node.js', 'GraphQL', 'MongoDB', 'D3.js', 'JavaScript'],
    sourceCode: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
    livePreview: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
  },
  {
    name: 'Fondements du Machine Learning',
    description:
      "Un ensemble de notebooks de Machine Learning couvrant des méthodes supervisées et non supervisées, notamment la régression, le clustering, la classification par SVM, le boosting et la fouille de données. Les notebooks associent implémentation, visualisation et évaluation des modèles sur des jeux de données synthétiques et réels.",
    stack: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    sourceCode: 'https://github.com/elymeraj/Machine-Learning-',
    livePreview: 'https://github.com/elymeraj/Machine-Learning-',
  },
  {
    name: 'Entrepôt de données et analyse OLAP',
    description:
      "Un projet de Data Engineering consacré à la construction d’un entrepôt analytique à partir de sources opérationnelles. Il comprend des traitements ETL, une modélisation multidimensionnelle, la création d’un cube OLAP et des requêtes MDX pour le reporting et l’analyse interactive.",
    stack: ['Apache Hop', 'SQLite', 'ETL', 'OLAP', 'MDX'],
    sourceCode: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
    livePreview: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
  },
  {
    name: 'Solveur de théorie des jeux coopératifs',
    description:
      "Un framework Java modulaire pour modéliser et analyser des jeux de coalition. Il vérifie des propriétés telles que la convexité et la superadditivité, puis calcule des concepts de solution comme le Cœur et la valeur de Shapley à l’aide d’approches exactes et fondées sur la simulation.",
    stack: ['Java', 'POO', 'Théorie des jeux', 'Simulation Monte-Carlo', 'Makefile'],
    sourceCode: 'https://github.com/elymeraj/SMAA',
    livePreview: 'https://github.com/elymeraj/SMAA',
  },
  {
    name: 'Allocation équitable de ressources indivisibles',
    description:
      "Un projet d’aide à la décision consacré à l’allocation de biens indivisibles entre des agents aux préférences différentes. Il implémente plusieurs protocoles d’allocation, des critères d’équité tels que EF, EF1, EFX et la proportionnalité, l’analyse de graphes d’envie et des stratégies de réallocation évaluées par simulations répétées.",
    stack: ['Python', 'Équité algorithmique', 'Systèmes multi-agents', 'Algorithmes de graphes', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources',
    livePreview: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources',
  },
  {
    name: 'Jeux antagonistes et modélisation de l’adversaire',
    description:
      "Un projet d’IA pour les jeux consacré au raisonnement adversarial en information complète et incomplète. Il implémente des variantes prédictives et adaptatives de MinMax, les applique au morpion et aux dominos, puis compare leur comportement face à plusieurs stratégies adverses au moyen de nombreuses simulations.",
    stack: ['Python', 'Théorie des jeux', 'Recherche adversariale', 'MinMax', 'Modélisation de l’adversaire'],
    sourceCode: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models',
    livePreview: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models',
  },
  {
    name: 'Simulation d’un atelier de production multi-agents',
    description:
      "Une simulation d’atelier de production décentralisé développée avec JADE. Un agent atelier coordonne des agents robots aux compétences hétérogènes par messages ACL, tandis que le temps d’exécution, le niveau de compétence et la probabilité d’échec sont modélisés pour évaluer l’efficacité et la robustesse de la coordination.",
    stack: ['Java', 'JADE', 'Systèmes multi-agents', 'Messages ACL', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Atelier_agent',
    livePreview: 'https://github.com/elymeraj/Atelier_agent',
  },
  {
    name: 'Raisonnement en logique modale et tableaux sémantiques',
    description:
      "Un projet de raisonnement symbolique combinant la sémantique de Kripke et les tableaux sémantiques pour la logique modale propositionnelle. Il représente les formules à l’aide de patrons de conception, les évalue dans des modèles de Kripke et vérifie leur satisfaisabilité et leur validité par une procédure systématique de preuve.",
    stack: ['Java', 'Logique modale', 'Raisonnement symbolique', 'Sémantique de Kripke', 'Design Patterns'],
    sourceCode: 'https://github.com/elymeraj/Modal-Logic',
    livePreview: 'https://github.com/elymeraj/Modal-Logic',
  },
  {
    name: 'Application de dessin Java',
    description:
      "Une application de dessin en Java fondée sur l’architecture MVC et plusieurs patrons de conception. Elle permet de créer et de manipuler des objets graphiques, et propose également un mode de jeu avec des exercices interactifs de dessin de formes.",
    stack: ['Java', 'Swing', 'MVC', 'Design Patterns'],
    sourceCode: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
    livePreview: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
  },
  {
    name: 'Coloration de graphes et résolution SAT',
    description:
      "Un projet algorithmique combinant théorie des graphes, satisfaisabilité logique et analyse de complexité. Il résout les problèmes de 3-coloration et de 4-coloration par recherche exhaustive et réduction polynomiale vers SAT, avec encodage CNF et évaluation expérimentale sur des graphes structurés et aléatoires.",
    stack: ['Python', 'Algorithmes de graphes', 'Solveurs SAT', 'Analyse de complexité', 'NetworkX'],
    sourceCode: 'https://github.com/elymeraj/ccSAT_3Col',
    livePreview: 'https://github.com/elymeraj/ccSAT_3Col',
  },
]

const experienceFr = [
  {
    id: 'airbus-xai-intern-2026',
    title: 'Stagiaire en Intelligence Artificielle -- IA de confiance',
    company: 'Airbus SAS',
    period: 'Mars 2026 – Septembre 2026 · Stage',
    description:
      "Travail sur l'IA explicable appliquée à un modèle de vision par ordinateur utilisé pour la détection de pistes dans un contexte d'atterrissage basé sur la vision.",
    responsibilities: [
      "Adaptation d'une méthode d'IA explicable à un modèle YOLO-NAS Pose multi-échelle sous PyTorch afin d'identifier les caractéristiques visuelles influençant les détections du modèle.",
      "Développement d'un protocole expérimental pour extraire, sélectionner et analyser les représentations visuelles du modèle, en évaluant leur qualité, leur stabilité et leur capacité à préserver l'information utile aux détections.",
      "Évaluation quantitative de la fidélité des détections à l'aide de métriques de détection et de correspondance spatiale, avec 90,5 % de précision et un PR-AUC de 0,776.",
      "Analyse du comportement du modèle à différentes distances de la piste afin d'identifier les informations visuelles les plus influentes et d'étudier leur évolution au cours de l'approche.",
    ],
    stack: [
      'Python',
      'PyTorch',
      'YOLO-NAS Pose',
      'Xplique',
      'Holistic CRAFT',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'AWS EC2',
      'Amazon S3',
      'Git',
    ],
  },
  {
    id: 'responsibio-rd-intern-2025',
    title: 'Stagiaire Data Scientist',
    company: 'Responsibio',
    period: 'Mai 2025 – Août 2025 · Stage',
    description:
      "Travail en data science sur l'analyse de vocalisations de souris pour la classification du bien-être animal.",
    responsibilities: [
      "Collecte et préparation de données audio de vocalisations de souris et de leurs métadonnées afin de construire un jeu de données pour la classification du bien-être animal.",
      "Développement d'un pipeline de classification audio utilisant des mél-spectrogrammes, l'extraction de caractéristiques, une réduction de dimension par PCA et un SVM linéaire.",
      "Évaluation du modèle avec une validation croisée à 5 folds, réduction de 2048 à 58 caractéristiques en conservant 86 % de la variance et obtention d'environ 79 % de prédictions correctes.",
    ],
    stack: [
      'Python',
      'scikit-learn',
      'NumPy',
      'Pandas',
      'PCA',
      'SVM',
    ],
  },
]

const skillsFr = [
  {
    category: 'Langages de programmation',
    items: ['Python', 'Java', 'C', 'C++'],
  },
  {
    category: 'Machine Learning & Computer Vision',
    items: [
      'Object Detection',
      'Pose Estimation',
      'YOLO',
      'Explainable AI (XAI)',
      'PCA',
      'NMF',
    ],
  },
  {
    category: 'Frameworks & bibliothèques',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'OpenCV',
      'NumPy',
      'Pandas',
    ],
  },
  {
    category: 'NLP & IA générative',
    items: [
      'RAG',
      'Transformers',
      'Hugging Face',
      'CamemBERT',
      'Embeddings',
    ],
  },
  {
    category: 'Data Engineering & Cloud',
    items: [
      'AWS (EC2, S3)',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Apache Hop',
      'Data Visualization (Matplotlib, Plotly)',
    ],
  },
  {
    category: 'Outils de développement',
    items: [
      'Git',
      'GitHub',
      'Linux',
      'Conda',
      'Jupyter Notebook',
      'Google Colab',
      'VS Code',
    ],
  },
  {
    category: 'Technologies Web',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
]

const portfolios = {
  en: {
    header,
    about: aboutEn,
    projects: projectsEn,
    experience: experienceEn,
    skills: skillsEn,
    contact,
  },
  fr: {
    header,
    about: aboutFr,
    projects: projectsFr,
    experience: experienceFr,
    skills: skillsFr,
    contact,
  },
}

export { portfolios }