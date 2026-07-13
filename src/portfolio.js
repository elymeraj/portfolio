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
  role: 'Junior Data Scientist',
  description:
    'Data Scientist specialized in Artificial Intelligence, with a particular interest in Computer Vision and Natural Language Processing. I am currently completing my final-year internship at Airbus, where I work on the explainability of computer vision models for vision-based landing assistance systems. I am seeking a permanent or fixed-term position to contribute to practical AI projects and help develop robust, reliable, and interpretable solutions.',
  resume: `${process.env.PUBLIC_URL}/CV_YMERAJ_EN.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/eldis-ymeraj-2b5433226',
    github: 'https://github.com/elymeraj',
  },
}

const projectsEn = [
  {
    name: 'Automatic Annotation of Clinical Narratives',
    description:
      'An NLP project for token-level annotation of autobiographical narratives from clinical protocols. The pipeline prepares the corpus, applies BIO labels, fine-tunes CamemBERT, and classifies each token as episodic or semantic. Evaluation is performed with a strict patient-level split to prevent data leakage and provide a reliable estimate of generalization.',
    stack: ['Python', 'PyTorch', 'Transformers', 'CamemBERT', 'Hugging Face', 'Pandas'],
    sourceCode: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
    livePreview: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
  },
  {
    name: 'Handball Player and Ball Tracking',
    description:
      'A computer vision project covering the full workflow from dataset creation and annotation to the training of specialized YOLOv8 models for players, goalkeepers, referees, the ball, and court keypoints. The tracking pipeline uses ByteTrack for players, filtering and interpolation for the ball, and homography to project detected positions onto a two-dimensional handball court.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'ByteTrack', 'Kalman Filter', 'Homography'],
    sourceCode: 'https://github.com/elymeraj/Handball_Tracking',
    livePreview: 'https://github.com/elymeraj/Handball_Tracking',
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
    title: 'Artificial Intelligence / Explainable AI Intern',
    company: 'Airbus SAS',
    period: 'March 2026 – September 2026 · Internship',
    description:
      'Contribution to the RELAI-VLS project, focused on explaining runway detection models used in Vision Landing Systems. The work challenges and adapts concept-based explainability methods to understand what the models learn and whether the resulting explanations remain faithful under different experimental settings.',
    responsibilities: [
      'Adapted CRAFT, a concept-based explainability method, to YOLO pose models in order to identify and visualize learned concepts.',
      'Built experiments to extract internal activations, reconstruct latent representations, and compare original and reconstructed predictions.',
      'Evaluated explanation fidelity and robustness across model layers, datasets, concept-bank sizes, and training sample sizes.',
      'Ran experiments on AWS EC2, managed datasets and results with Amazon S3, and produced visual analyses for model interpretation.',
    ],
    stack: ['Python', 'PyTorch', 'YOLOv8 Pose', 'YOLO-NAS Pose', 'Xplique', 'CRAFT', 'NumPy', 'Pandas', 'Matplotlib', 'AWS EC2', 'Amazon S3', 'Git'],
  },
  {
    id: 'responsibio-rd-intern-2025',
    title: 'Data Science Intern',
    company: 'CENOMEXA – Responsibio',
    period: 'May 2025 – August 2025 · Internship',
    description:
      'Development of an automated classification system for mouse and rat vocalizations used in animal bio-monitoring. The project combined audio processing, deep feature extraction, dimensionality reduction, and classical machine learning.',
    responsibilities: [
      'Prepared bio-acoustic recordings and transformed audio signals into Mel-spectrogram representations.',
      'Extracted 2,048-dimensional features with a pre-trained ResNet50 model and reduced them to 58 principal components while preserving 86% of the variance.',
      'Trained and evaluated SVM classifiers with stratified cross-validation and class balancing.',
      'Achieved approximately 80% classification accuracy and assessed robustness to noise and cross-species domain shift.',
    ],
    stack: ['Python', 'PyTorch', 'ResNet50', 'Librosa', 'scikit-learn', 'NumPy', 'Pandas', 'PCA', 'SVM'],
  },
]

const skillsEn = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'Machine Learning',
    items: ['scikit-learn', 'SVM', 'PCA', 'Clustering', 'GMM', 'Boosting'],
  },
  {
    category: 'Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'CNN', 'Transfer Learning', 'Fine-tuning'],
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'YOLO', 'ByteTrack', 'Object Detection', 'Image Processing', 'Video Tracking'],
  },
  {
    category: 'Explainable AI',
    items: ['Xplique', 'CRAFT', 'Concept-Based Explanations', 'Attribution Methods'],
  },
  {
    category: 'Natural Language Processing',
    items: ['Transformers', 'CamemBERT', 'BERT', 'Hugging Face', 'Token Classification'],
  },
  {
    category: 'Data and Databases',
    items: ['Pandas', 'NumPy', 'MongoDB', 'PostgreSQL', 'SQLite', 'ETL', 'OLAP'],
  },
  {
    category: 'Cloud and Tools',
    items: ['AWS EC2', 'Amazon S3', 'Docker', 'Git', 'Linux', 'Jupyter', 'Google Colab', 'LaTeX'],
  },
  {
    category: 'Web and Visualization',
    items: ['Node.js', 'GraphQL', 'D3.js', 'React', 'Matplotlib'],
  },
]

// --- FRENCH DATA ---
const aboutFr = {
  name: 'Eldis Ymeraj',
  role: 'Data Scientist junior',
  description:
    "Data scientist spécialisé en intelligence artificielle, avec un intérêt particulier pour la vision par ordinateur et le traitement automatique du langage. Actuellement en stage de fin d’études chez Airbus, je travaille sur l’explicabilité de modèles de vision appliqués aux systèmes visuels d’aide à l’atterrissage. Je recherche un CDI ou un CDD afin de contribuer à des projets d’IA concrets et de développer des solutions robustes, fiables et interprétables.",
  resume: `${process.env.PUBLIC_URL}/CV_YMERAJ_FR.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/eldis-ymeraj-2b5433226',
    github: 'https://github.com/elymeraj',
  },
}

const projectsFr = [
  {
    name: 'Annotation automatique de récits cliniques',
    description:
      "Un projet de TAL consacré à l’annotation, au niveau des tokens, de récits autobiographiques issus de protocoles cliniques. Le pipeline prépare le corpus, applique un étiquetage BIO, affine CamemBERT et classe chaque token comme épisodique ou sémantique. L’évaluation repose sur une séparation stricte des patients afin d’éviter les fuites de données et d’estimer correctement la généralisation.",
    stack: ['Python', 'PyTorch', 'Transformers', 'CamemBERT', 'Hugging Face', 'Pandas'],
    sourceCode: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
    livePreview: 'https://github.com/elymeraj/Episodic-Semantic-Memory-Annotation',
  },
  {
    name: 'Suivi des joueurs et du ballon en handball',
    description:
      "Un projet de Computer Vision couvrant l’ensemble du processus, de la création et de l’annotation des jeux de données jusqu’à l’entraînement de modèles YOLOv8 spécialisés pour les joueurs, gardiens, arbitres, le ballon et les points clés du terrain. Le pipeline utilise ByteTrack pour les joueurs, du filtrage et de l’interpolation pour le ballon, puis une homographie pour projeter les positions sur un terrain de handball en deux dimensions.",
    stack: ['Python', 'YOLOv8', 'OpenCV', 'ByteTrack', 'Filtre de Kalman', 'Homographie'],
    sourceCode: 'https://github.com/elymeraj/Handball_Tracking',
    livePreview: 'https://github.com/elymeraj/Handball_Tracking',
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
    title: 'Stagiaire en Intelligence Artificielle / IA explicable',
    company: 'Airbus SAS',
    period: 'Mars 2026 – Septembre 2026 · Stage',
    description:
      "Contribution au projet RELAI-VLS, consacré à l’explicabilité de modèles de détection de pistes utilisés dans les systèmes visuels d’aide à l’atterrissage. Le travail consiste à mettre à l’épreuve et à adapter des méthodes d’explicabilité fondées sur les concepts afin de comprendre ce que les modèles apprennent et de vérifier la fidélité des explications selon différents paramètres expérimentaux.",
    responsibilities: [
      "Adaptation de CRAFT, une méthode d’explicabilité fondée sur les concepts, à des modèles YOLO Pose afin d’identifier et de visualiser les concepts appris.",
      "Mise en place d’expériences pour extraire les activations internes, reconstruire les représentations latentes et comparer les prédictions originales et reconstruites.",
      "Évaluation de la fidélité et de la robustesse des explications selon les couches du modèle, les jeux de données, la taille de la banque de concepts et le nombre d’images d’apprentissage.",
      "Exécution des expériences sur AWS EC2, gestion des données et résultats avec Amazon S3, et production de visualisations pour l’interprétation des modèles.",
    ],
    stack: ['Python', 'PyTorch', 'YOLOv8 Pose', 'YOLO-NAS Pose', 'Xplique', 'CRAFT', 'NumPy', 'Pandas', 'Matplotlib', 'AWS EC2', 'Amazon S3', 'Git'],
  },
  {
    id: 'responsibio-rd-intern-2025',
    title: 'Stagiaire Data Science',
    company: 'CENOMEXA – Responsibio',
    period: 'Mai 2025 – Août 2025 · Stage',
    description:
      "Développement d’un système de classification automatique des vocalisations de souris et de rats pour la bio-surveillance animale. Le projet combine traitement audio, extraction de caractéristiques profondes, réduction dimensionnelle et Machine Learning classique.",
    responsibilities: [
      "Préparation des enregistrements bioacoustiques et transformation des signaux audio en spectrogrammes de Mel.",
      "Extraction de 2 048 caractéristiques avec un modèle ResNet50 pré-entraîné, puis réduction à 58 composantes principales en conservant 86 % de la variance.",
      "Entraînement et évaluation de classifieurs SVM avec validation croisée stratifiée et pondération des classes.",
      "Obtention d’environ 80 % de précision et évaluation de la robustesse au bruit et au changement de domaine entre espèces.",
    ],
    stack: ['Python', 'PyTorch', 'ResNet50', 'Librosa', 'scikit-learn', 'NumPy', 'Pandas', 'PCA', 'SVM'],
  },
]

const skillsFr = [
  {
    category: 'Langages de programmation',
    items: ['Python', 'Java', 'C', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'Machine Learning',
    items: ['scikit-learn', 'SVM', 'PCA', 'Clustering', 'GMM', 'Boosting'],
  },
  {
    category: 'Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'CNN', 'Transfer Learning', 'Fine-tuning'],
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'YOLO', 'ByteTrack', 'Détection d’objets', 'Traitement d’images', 'Suivi vidéo'],
  },
  {
    category: 'IA explicable',
    items: ['Xplique', 'CRAFT', 'Explications par concepts', 'Méthodes d’attribution'],
  },
  {
    category: 'Traitement automatique du langage',
    items: ['Transformers', 'CamemBERT', 'BERT', 'Hugging Face', 'Classification de tokens'],
  },
  {
    category: 'Data et bases de données',
    items: ['Pandas', 'NumPy', 'MongoDB', 'PostgreSQL', 'SQLite', 'ETL', 'OLAP'],
  },
  {
    category: 'Cloud et outils',
    items: ['AWS EC2', 'Amazon S3', 'Docker', 'Git', 'Linux', 'Jupyter', 'Google Colab', 'LaTeX'],
  },
  {
    category: 'Web et visualisation',
    items: ['Node.js', 'GraphQL', 'D3.js', 'React', 'Matplotlib'],
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