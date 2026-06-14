const header = {
  homepage: '.',
  title: 'EY.',
}

const skills = [
  // Programming
  'Python', 'Java', 'SQL', 'C', 'C++', 'JavaScript',

  // Data Science & Analysis
  'Data Analysis', 'Data Cleaning', 'Data Preprocessing',
  'Exploratory Data Analysis (EDA)', 'Feature Engineering',
  'Statistical Analysis', 'Pandas', 'NumPy', 'Matplotlib',

  // Machine Learning
  'Machine Learning', 'Supervised Learning', 'Unsupervised Learning',
  'Model Training & Evaluation', 'scikit-learn',
  'Support Vector Machines (SVM)', 'PCA', 'GMM',
  'Boosting (AdaBoost)', 'Clustering (K-Means, DBSCAN, Hierarchical)',

  // Deep Learning
  'Deep Learning', 'PyTorch', 'TensorFlow', 'Keras',
  'Neural Networks', 'CNN', 'Transfer Learning', 'Fine-tuning',

  // Explainable AI
  'Explainable AI (XAI)', 'Xplique',
  'Concept-Based Explainability', 'Attribution Methods',
  'Model Interpretability',

  // Computer Vision
  'Computer Vision', 'Image Processing', 'Object Detection',
  'YOLO', 'Multi-Object Tracking', 'ByteTrack', 'OpenCV',
  'Video Tracking',

  // Natural Language Processing
  'Natural Language Processing (NLP)', 'Text Preprocessing',
  'Token Classification', 'BERT', 'CamemBERT',
  'Embeddings', 'Hugging Face Transformers',

  // Data Engineering
  'ETL Pipelines', 'ELT Pipelines', 'Data Warehousing',
  'Apache Hop', 'Talend', 'OLAP', 'MDX',
  'SQLite', 'PostgreSQL', 'MongoDB', 'GraphQL',

  // Cloud, DevOps & Tools
  'AWS EC2', 'AWS S3', 'Docker', 'Git', 'GitHub',
  'Linux', 'Jupyter Notebook', 'Google Colab', 'LaTeX',

  // Data Visualization
  'D3.js', 'Data Visualization'
]

const contact = {
  email: 'eldisymeraj0@gmail.com',
}

// --- ENGLISH DATA ---
const aboutEn = {
  name: 'Eldis Ymeraj',
  role: 'Master’s Student in Artificial Intelligence',
  description:
    "I am a Master’s student in Artificial Intelligence at the University of Caen Normandy, currently completing an internship at Airbus on Explainable AI for Vision Landing Systems and runway analysis. My profile combines Computer Vision, Deep Learning, Data Science, and applied AI, with experience in object detection, visual data analysis, model interpretability, and end-to-end AI experimentation. I am currently looking for a full-time position in Computer Vision, Deep Learning, or AI/Data Science, where I can contribute to real-world industrial projects and continue developing robust, interpretable, and reliable AI systems.",
  social: {
    linkedin: 'https://www.linkedin.com/in/eldis-ymeraj-2b5433226',
    github: 'https://github.com/elymeraj',
  },
}

const projectsEn = [
  {
    name: 'Autobiographical Memory Classification (work in progress)',
    description:
      'A research-oriented NLP project that fine-tunes CamemBERT for token-level classification of autobiographical narratives. The model identifies, word by word, whether a memory detail is episodic (event-specific) or semantic (general knowledge), using BIO tagging and manually annotated data from neuropsychological protocols.',
    stack: ['Python', 'PyTorch', 'CamemBERT', 'Hugging Face Transformers', 'NLP', 'BIO Tagging'],
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
    stack: ['Python', 'Algorithmic Fairness', 'Multi-Agent Systems', 'Graph Algorithms', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources',
    livePreview: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources'
  },
  {
    name: 'Adversarial Games with Opponent Modeling',
    description:
      'A decision-making and game AI project focused on adversarial reasoning under complete and incomplete information. The project implements two advanced variants of the MinMax algorithm: a predictive approach based on a fixed opponent model and a realistic approach using dynamic filtering of multiple credible opponent models. The algorithms were applied to Tic-Tac-Toe (complete information) and Domino (incomplete information), with extensive simulations and performance analysis against different adversary strategies.',
    stack: ['Python', 'Game Theory', 'Adversarial Search', 'MinMax', 'Opponent Modeling'],
    sourceCode: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models',
    livePreview: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models'
  },
  {
    name: 'Multi-Agent Production Workshop Simulation',
    description:
      'A multi-agent systems project simulating a decentralized production workshop using the JADE framework. The system models an atelier agent coordinating multiple robot agents with heterogeneous skills to process products requiring specific competencies. Task allocation is dynamic, communication relies on ACL messaging, and stochastic elements such as skill proficiency, execution time, and failure probability are integrated. The project includes experimental evaluation under different configurations to analyze coordination efficiency and system robustness.',
    stack: ['Java', 'JADE', 'Multi-Agent Systems', 'Agent Communication (ACL)', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Atelier_agent',
    livePreview: 'https://github.com/elymeraj/Atelier_agent'
  },
  {
    name: 'Modal Logic Reasoning & Semantic Tableaux',
    description:
      'A symbolic reasoning project focused on propositional modal logic, combining two complementary approaches: Kripke semantics and the semantic tableau method. The project implements a full representation of modal formulas using the Composite design pattern, evaluates their truth in Kripke models, and checks satisfiability and validity through a tableau-based proof system with systematic rule application.',
    stack: ['Java', 'Modal Logic', 'Symbolic Reasoning', 'Kripke Semantics', 'Design Patterns'],
    sourceCode: 'https://github.com/elymeraj/Modal-Logic',
    livePreview: 'https://github.com/elymeraj/Modal-Logic'
  },
  {
    name: 'Sales Data Visualization',
    description: 
      'A containerized sales data visualization project utilizing Docker, MongoDB, React, and GraphQL. The system features a MongoDB database for sales data, a React-based UI, and a GraphQL server with associated resolvers.',
    stack: ['SASS', 'TypeScript', 'React','Docker'],
    sourceCode: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
    livePreview: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
  },
  {
    name: 'Databases: Multidimensional Modeling',
    description: 
      'A project that includes ETL (Extract, Transform, Load) processes using Talend and Mondrian OLAP Server, designed to create and manage OLAP cubes to facilitate data analysis and reporting.',
    stack: ['Apache Hop', 'SQLite', 'ETL', 'Mondrian OLAP Server'],
    sourceCode: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
    livePreview: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
  },
  {
    name: 'Java Paint App',
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
    stack: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Machine Learning'],
    sourceCode: 'https://github.com/elymeraj/Machine-Learning-',
    livePreview: 'https://github.com/elymeraj/Machine-Learning-'
  },
  {
    name: 'Handball Player & Ball Tracking',
    description: 
      'A computer vision project focused on detecting and tracking key entities in handball match videos, including players, goalkeepers, referees, and the ball. The system uses multiple YOLO models specialized for different object categories and combines them with tracking mechanisms to maintain object identities across frames. The pipeline is optimized for experimentation through cached detections and supports efficient analysis of sports dynamics.',
    stack: ['Python', 'Computer Vision', 'YOLO', 'Object Detection', 'Video Processing'],
    sourceCode: 'https://github.com/elymeraj/Handball_Tracking',
    livePreview: 'https://github.com/elymeraj/Handball_Tracking'
  },
  {
    name: 'Graph Coloring & SAT Solving',
    description: 
      'An algorithmic reasoning project combining graph theory, logical satisfiability, and complexity analysis. The project addresses the 3-coloring and 4-coloring problems using both brute-force search and polynomial reductions to SAT. It includes CNF encoding of graph constraints, integration of a SAT solver to efficiently solve large instances, and extensive experimental evaluation on structured and random graphs, with complexity analysis across different problem sizes.',
    stack: ['Python', 'Graph Algorithms', 'SAT Solvers', 'Computational Complexity', 'NetworkX'],
    sourceCode: 'https://github.com/elymeraj/ccSAT_3Col',
    livePreview: 'https://github.com/elymeraj/ccSAT_3Col'
  }
]

const experienceEn = [
  {
    id: 'airbus-xai-intern-2026',
    title: 'Artificial Intelligence / Explainable AI Intern',
    company: 'Airbus SAS',
    period: 'March 2026 – September 2026 · Internship',
    description:
      'Contribution to the RELAI-VLS project, focused on Explainable AI for Vision Landing Systems and runway analysis. The work aims to better understand and analyze the decisions of Computer Vision models in an aeronautical context, with a focus on object detection, concept-based explanations, internal activations, and experimental evaluation.',
    responsibilities: [
      'Studied and adapted explainability methods to analyze the decisions of Computer Vision models applied to runway detection and analysis.',
      'Designed experiments to extract, visualize, and compare concepts learned by object detection models.',
      'Analyzed internal activations, reconstruction quality, and concept stability across datasets, model layers, and experimental parameters.',
      'Worked with visual aeronautical datasets and model outputs to evaluate how learned concepts vary depending on data conditions and model configuration.',
      'Used AWS resources to run experiments and manage datasets/results, including EC2 instances and S3 storage.',
      'Produced visualizations and experimental summaries to support model interpretation and analysis.'
    ],
    stack: ['Python', 'PyTorch', 'YOLO', 'XAI', 'NumPy', 'Pandas', 'Matplotlib', 'AWS EC2', 'Bucket S3', 'Git']
  },
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
    stack: ['Python 3.12', 'PyTorch', 'scikit-learn', 'Librosa', 'Signal Processing', 'PCA', 'SVM']
  }
]

// --- FRENCH DATA ---
const aboutFr = {
  name: 'Eldis Ymeraj',
  role: 'Étudiant en Master Intelligence Artificielle',
  description:
  "Je suis étudiant en Master Intelligence Artificielle à l’Université de Caen Normandie, actuellement en stage chez Airbus sur l’IA explicable appliquée aux Vision Landing Systems et à l’analyse de pistes. Mon profil combine Computer Vision, Deep Learning, Data Science et IA appliquée, avec une expérience en détection d’objets, analyse de données visuelles, interprétabilité des modèles et expérimentation IA de bout en bout. Je recherche actuellement un CDI en Computer Vision, Deep Learning ou IA/Data Science, afin de contribuer à des projets industriels concrets et au développement de systèmes d’IA robustes, interprétables et fiables.",  resume: 'https://elymeraj.github.io/portfolio/YMERAJ_CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/eldis-ymeraj-2b5433226',
    github: 'https://github.com/elymeraj',
  },
}

const projectsFr = [
  {
    name: 'Classification de Mémoire Autobiographique',
    description:
      "Un projet de NLP orienté recherche qui consiste à affiner (fine-tuner) CamemBERT pour une classification au niveau des tokens de récits autobiographiques. Le modèle identifie, mot par mot, si un détail de mémoire est épisodique (spécifique à un événement) ou sémantique (connaissances générales), en utilisant un étiquetage BIO et des données annotées manuellement issues de protocoles neuropsychologiques.",
    stack: ['Python', 'PyTorch', 'CamemBERT', 'Hugging Face', 'NLP', 'BIO Tagging'],  
    sourceCode: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
    livePreview: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation'
  },
  {
    name: 'Solveur de Théorie des Jeux Coopératifs',
    description:
      "Un framework Java modulaire pour la modélisation et l’analyse des jeux coopératifs. Il implémente des algorithmes permettant de vérifier des propriétés mathématiques (convexité, superadditivité) et de calculer des concepts de solution tels que le Cœur (via une approche hybride de recherche sur grille et de Monte Carlo) ainsi que la valeur de Shapley, validés à travers des scénarios comme les jeux de veto et de vote majoritaire.",
    stack: ['Java', 'OOP', 'Game Theory', 'Monte Carlo', 'Makefile'],
    sourceCode: 'https://github.com/elymeraj/SMAA',
    livePreview: 'https://github.com/elymeraj/SMAA',
  },
  {
    name: 'Allocation Équitable de Ressources Indivisibles',
    description:
      "Un projet d’aide à la décision et d’équité algorithmique axé sur l’allocation de biens indivisibles entre plusieurs agents aux préférences hétérogènes. Le projet met en œuvre la modélisation des préférences, des protocoles d’allocation aléatoires et structurés, des métriques d’équité (EF, EF1, EFX, proportionnalité), l’analyse de graphes d’envie, ainsi que des stratégies de réallocation visant à réduire l’envie. Un module d’évaluation statistique compare les métriques d’équité et d’utilité à travers de multiples simulations et tailles de problèmes.",
    stack: ['Python', 'Algorithmique', 'Systèmes Multi-Agents', 'Graphes', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources',
    livePreview: 'https://github.com/elymeraj/Fair_Allocation_of_Indivisible_Resources'
  },
  {
    name: 'Jeux Antagonistes & Modélisation de l\'Adversaire',
    description:
      "Un projet de prise de décision et d’IA pour les jeux, axé sur le raisonnement adversarial en information complète et incomplète. Le projet implémente deux variantes avancées de l’algorithme MinMax : une approche prédictive basée sur un modèle d’adversaire fixe et une approche réaliste utilisant un filtrage dynamique de plusieurs modèles d’adversaires crédibles. Les algorithmes ont été appliqués au Morpion (information complète) et au Domino (information incomplète), avec de nombreuses simulations et une analyse approfondie des performances face à différentes stratégies adverses.",
    stack: ['Python', 'Théorie des Jeux', 'MinMax', 'Modélisation Adversaire', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models',
    livePreview: 'https://github.com/elymeraj/Algorithms-for-Games-with-Opponent-Models'
  },
  {
    name: 'Simulation d\'Atelier de Production (JADE)',
    description:
      "Un projet de systèmes multi-agents simulant un atelier de production décentralisé à l’aide du framework JADE. Le système modélise un agent atelier coordonnant plusieurs agents robots aux compétences hétérogènes afin de traiter des produits nécessitant des compétences spécifiques. L’allocation des tâches est dynamique, la communication repose sur des messages ACL, et des éléments stochastiques tels que le niveau de compétence, le temps d’exécution et la probabilité d’échec sont intégrés. Le projet comprend une évaluation expérimentale sous différentes configurations afin d’analyser l’efficacité de la coordination et la robustesse du système.",
    stack: ['Java', 'JADE', 'Systèmes Multi-Agents', 'Communication ACL', 'Simulation'],
    sourceCode: 'https://github.com/elymeraj/Atelier_agent',
    livePreview: 'https://github.com/elymeraj/Atelier_agent'
  },
  {
    name: 'Raisonnement Logique Modale & Tableaux Sémantiques',
    description:
      "Un projet de raisonnement symbolique centré sur la logique modale propositionnelle, combinant deux approches complémentaires : la sémantique de Kripke et la méthode des tableaux sémantiques. Le projet implémente une représentation complète des formules modales à l’aide du patron de conception Composite, évalue leur vérité dans des modèles de Kripke et vérifie la satisfaisabilité ainsi que la validité au moyen d’un système de preuve basé sur les tableaux, avec une application systématique des règles.",
    stack: ['Java', 'Logique Modale', 'Raisonnement Symbolique', 'Kripke', 'Design Patterns'],
    sourceCode: 'https://github.com/elymeraj/Modal-Logic',
    livePreview: 'https://github.com/elymeraj/Modal-Logic'
  },
  {
    name: 'Visualisation de Données de Ventes',
    description: "Un projet de visualisation de données de ventes conteneurisé utilisant Docker, MongoDB, React et GraphQL. Le système comprend une base de données MongoDB pour les données de ventes, une interface utilisateur basée sur React et un serveur GraphQL avec ses résolveurs associés.",
    stack: ['SASS', 'TypeScript', 'React','Docker'],
    sourceCode: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
    livePreview: 'https://github.com/elymeraj/Data-Visualization-Application-with-Docker',
  },
  {
    name: 'Entrepôt de Données & ETL',
    description: "Un projet intégrant des processus ETL (Extract, Transform, Load) utilisant Talend et le serveur OLAP Mondrian, conçu pour créer et gérer des cubes OLAP afin de faciliter l’analyse des données et le reporting.",
    stack: ['Apache Hop', 'SQLite', 'ETL', 'Mondrian OLAP'],
    sourceCode: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
    livePreview: 'https://github.com/elymeraj/DataWarehouse_ETL_OLAP',
  },
  {
    name: 'Application de Dessin Java (MVC)',
    description: 'Une application de dessin en Java basée sur le patron MVC. Elle permet aux utilisateurs de créer et de manipuler des dessins, et inclut une fonctionnalité ludique où les utilisateurs peuvent jouer à un jeu consistant à dessiner des formes.',
    stack: ['Java', 'Swing', 'Design Patterns', 'MVC'],
    sourceCode: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
    livePreview: 'https://github.com/elymeraj/Java-Paint-Shape-Game-MVC-and-Other-Patterns',
  },
  {
    name: 'Fondements du Machine Learning',
    description: 'Un ensemble de projets appliqués en apprentissage automatique, développés à travers une série de notebooks Jupyter dans le cadre d’un cours de niveau Master en Intelligence Artificielle. Le projet couvre les principales techniques d’apprentissage supervisé et non supervisé, notamment la régression, le clustering, la classification avec les SVM, les méthodes de boosting et des tâches de fouille de données. Chaque notebook combine des concepts théoriques avec des expérimentations pratiques, des analyses visuelles et une évaluation des performances sur des jeux de données synthétiques et réels.',
    stack: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'ML'],
    sourceCode: 'https://github.com/elymeraj/Machine-Learning-',
    livePreview: 'https://github.com/elymeraj/Machine-Learning-'
  },
  {
    name: 'Suivi de Joueurs de Handball (Vision par Ordinateur)',
    description: 'Un projet de vision par ordinateur axé sur la détection et le suivi des entités clés dans des vidéos de matchs de handball, notamment les joueurs, les gardiens, les arbitres et le ballon. Le système utilise plusieurs modèles YOLO spécialisés pour différentes catégories d’objets et les combine avec des mécanismes de suivi afin de maintenir l’identité des objets à travers les images. Le pipeline est optimisé pour l’expérimentation grâce à la mise en cache des détections et permet une analyse efficace de la dynamique sportive.',
    stack: ['Python', 'Computer Vision', 'YOLO', 'Tracking', 'Vidéo'],
    sourceCode: 'https://github.com/elymeraj/Handball_Tracking',
    livePreview: 'https://github.com/elymeraj/Handball_Tracking'
  },
  {
    name: 'Coloration de Graphes & SAT',
    description: 'Un projet de raisonnement algorithmique combinant théorie des graphes, satisfaisabilité logique et analyse de la complexité. Le projet traite les problèmes de 3-coloration et de 4-coloration à l’aide de recherches exhaustives et de réductions polynomiales vers SAT. Il inclut l’encodage en forme normale conjonctive (CNF) des contraintes de graphes, l’intégration d’un solveur SAT pour résoudre efficacement des instances de grande taille, ainsi qu’une évaluation expérimentale approfondie sur des graphes structurés et aléatoires, avec une analyse de la complexité selon différentes tailles de problèmes.',
    stack: ['Python', 'Graphes', 'SAT Solvers', 'Complexité', 'NetworkX'],
    sourceCode: 'https://github.com/elymeraj/ccSAT_3Col',
    livePreview: 'https://github.com/elymeraj/ccSAT_3Col'
  }
]

const experienceFr = [
  {
    id: 'airbus-xai-intern-2026',
    title: 'Stagiaire Intelligence Artificielle / IA Explicable',
    company: 'Airbus SAS',
    period: 'Mars 2026 – Septembre 2026 · Stage',
    description:
      "Contribution au projet RELAI-VLS, centré sur l’IA explicable appliquée aux Vision Landing Systems et à l’analyse de pistes. Le travail vise à mieux comprendre et analyser les décisions de modèles de Computer Vision dans un contexte aéronautique, avec un focus sur la détection d’objets, les explications par concepts, les activations internes et l’évaluation expérimentale.",
    responsibilities: [
      "Étude et adaptation de méthodes d’explicabilité pour analyser les décisions de modèles de Computer Vision appliqués à la détection et à l’analyse de pistes.",
      "Conception d’expériences pour extraire, visualiser et comparer les concepts appris par des modèles de détection d’objets.",
      "Analyse des activations internes, de la qualité de reconstruction et de la stabilité des concepts selon les jeux de données, les couches du modèle et les paramètres expérimentaux.",
      "Exploitation de données visuelles aéronautiques et de sorties de modèles afin d’évaluer l’évolution des concepts appris selon les conditions de données et la configuration du modèle.",
      "Utilisation de ressources AWS pour exécuter les expériences et gérer les jeux de données/résultats, notamment des instances EC2 et du stockage S3.",
      "Production de visualisations et de synthèses expérimentales pour faciliter l’interprétation et l’analyse des modèles."
    ],
    stack: ['Python', 'PyTorch', 'YOLO', 'Xplique', 'NumPy', 'Pandas', 'Matplotlib', 'AWS EC2', 'S3', 'Git']
  },
  {
    id: 'responsibio-rd-intern-2025',
    title: 'Stagiaire Data Science',
    company: 'CENOMEXA – Projet Responsibio',
    period: '2025 · Stage de 3 mois',
    description:
      "Conception et mise en oeuvre d’un pipeline d’IA hybride de bout en bout pour l’évaluation non invasive des états émotionnels de rongeurs par analyse bioacoustique. Le projet combine le traitement du signal, l’apprentissage profond et le machine learning classique afin de gérer des données audio complexes et non structurées, et d’assurer une généralisation robuste dans des conditions de laboratoire.",
    responsibilities: [
      'Construction et constitution d’un jeu de données bioacoustiques propriétaire (vocalisations de souris et de rats), incluant le nettoyage et la normalisation des signaux audio bruts.',
      'Transformation des signaux audio temporels en représentations temps–fréquence via la génération de spectrogrammes de Mel (échelle en décibels) à l’aide de Librosa.',
      'Application du transfer learning avec une architecture ResNet50 pré-entraînée (PyTorch) utilisée comme extracteur de caractéristiques afin de convertir les images de spectrogrammes en embeddings de haute dimension (2048 caractéristiques).',
      'Réalisation d’une réduction de dimension par Analyse en Composantes Principales (ACP), réduisant l’espace latent de 2048 à 58 dimensions tout en conservant 86 % de la variance.',
      'Conduite d’une étude d’ablation afin d’identifier le seuil optimal de variance et de limiter le sur-apprentissage sur un jeu de données restreint.',
      'Entraînement et optimisation d’un classifieur à Machines à Vecteurs de Support (SVM) linéaire avec pondération équilibrée des classes pour traiter le déséquilibre des données.',
      'Validation du modèle par validation croisée K-fold stratifiée et évaluation de la robustesse en situation de changement de domaine, en testant la généralisation inter-espèces (souris → rat).',
      'Obtention d’une précision de classification d’environ 80 %, démontrant une forte robustesse face au bruit de fond et à des conditions d’enregistrement inédites.'
    ],
    stack: ['Python 3.12', 'PyTorch', 'scikit-learn', 'Librosa', 'Signal Processing', 'PCA', 'SVM']
  }
]

const portfolios = {
  en: {
    header,
    about: aboutEn,
    projects: projectsEn,
    experience: experienceEn,
    skills,
    contact
  },
  fr: {
    header,
    about: aboutFr,
    projects: projectsFr,
    experience: experienceFr,
    skills,
    contact
  }
}

export { portfolios }