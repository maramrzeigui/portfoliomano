// =============================================================================
//  DONNÉES DU PORTFOLIO — Manel Jlassi
//  Pour modifier ce portfolio, il suffit de changer le texte ci-dessous.
// =============================================================================

export const cvData = {
  personal: {
    name: "Manel Jlassi",
    title: "Élève Ingénieure en Informatique · Cybersécurité & Développement",
    role: "Élève Ingénieure — Cybersécurité (SOC) & Développement Full-Stack",
    profile:
      "Étudiante en deuxième année du cycle ingénieur à ESPRIT, à la recherche d'un stage ingénieur. Mon objectif est de mettre en pratique les connaissances techniques acquises au cours de ma formation, tout en développant mes compétences au sein d'un environnement professionnel stimulant. Curieuse et rigoureuse, je m'intéresse particulièrement à la cybersécurité, aux systèmes & réseaux et au développement logiciel.",
    email: "maneljlassi2507@gmail.com",
    phone: "+216 52 802 736",
    location: "Tunis, Tunisie",
    // Déposez une photo dans src/assets/manel.jpg pour remplacer l'avatar à initiales.
    image: "/profile.jpg",
    initials: "MJ",
    cv: "/CV-Manel-Jlassi.pdf",
    social: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/in/manel-jlassi5b4874300",
      email: "mailto:maneljlassi2507@gmail.com",
    },
  },

  // --- Compétences techniques (groupées par catégorie) -----------------------
  skillGroups: [
    {
      title: "Langages de programmation",
      items: ["Python", "Java", "C / C++", "JavaScript"],
    },
    {
      title: "Cybersécurité",
      items: ["SOC", "SIEM (Wazuh)", "SOAR (n8n)", "TheHive", "MISP", "Threat Intelligence", "Threat Hunting"],
    },
    {
      title: "Systèmes & Réseaux",
      items: ["Linux", "Windows", "Active Directory", "pfSense", "OPNsense", "GNS3", "VMware Workstation Pro", "SSH", "Cisco IOS"],
    },
    {
      title: "Développement Web",
      items: ["HTML", "CSS", "PHP", "Symfony", "React", "Angular", "Spring Boot", ".NET", "Node.js"],
    },
    {
      title: "Bases de données & Mobile",
      items: ["MySQL", "Oracle", "Firebase", "MongoDB", "FlutterFlow"],
    },
    {
      title: "DevOps & Outils",
      items: ["Git", "CI/CD", "Automatisation réseau (Python / Ansible)"],
    },
  ],

  // --- Expérience professionnelle --------------------------------------------
  experience: [
    {
      role: "Conception & développement — Visitor Management System",
      company: "BIAT",
      date: "Juil. – Août 2025",
      location: "Tunis",
      type: "work",
      description:
        "Développement full-stack de bout en bout d'une application web moderne (Angular + Spring Boot REST) pour digitaliser l'accueil des visiteurs : algorithmes prédictifs et tableaux de bord (Insights AI), notifications temps réel et messagerie interne via WebSockets (STOMP/SockJS), sécurité par Spring Security & JWT avec gestion des rôles, génération de badges QR Code, base relationnelle MySQL 8 / Spring Data JPA.",
      tech: ["Angular", "Spring Boot", "Spring Security", "JWT", "WebSockets", "MySQL", "Spring Data JPA"],
    },
    {
      role: "Stage — Découverte du système d'information bancaire",
      company: "BIAT",
      date: "Juil. – Août 2023",
      location: "Tunis",
      type: "work",
      description:
        "Immersion dans l'écosystème IT d'une grande banque nationale : organisation interne, départements technologiques et fonctionnement global du système d'information. Sensibilisation aux processus métiers, aux normes de sécurité et aux enjeux RSE. Développement des soft skills et de la communication professionnelle.",
      tech: ["Système d'information", "Sécurité bancaire", "Soft skills"],
    },
  ],

  // --- Formation -------------------------------------------------------------
  education: [
    {
      degree: "Cycle d'ingénieur en Informatique",
      school: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologie",
      location: "Tunis",
      date: "2022 – Présent",
      focus: "Cybersécurité, systèmes & réseaux, développement logiciel",
    },
    {
      degree: "Baccalauréat — Sciences expérimentales",
      school: "Lycée Amal Fouchana",
      location: "Fouchana",
      date: "2021 – 2022",
      focus: "",
    },
  ],

  // --- Projets ---------------------------------------------------------------
  projects: [
    {
      title: "Intelligent SOC & Threat Detection Platform",
      image: "/projects/soc-platform.jpg",
      date: "2025 – 2026",
      category: "Cybersécurité",
      description:
        "Conception, déploiement et gestion d'un Centre Opérationnel de Sécurité (SOC) complet et automatisé dans un environnement d'entreprise/hospitalier simulé : architecture & segmentation réseau (LAN/WAN/SOC/DMZ), SIEM Wazuh avec règles adaptatives, pare-feux pfSense/OPNsense, automatisation SOAR via n8n, intégration TheHive (gestion d'incidents) et MISP (Threat Intelligence), playbooks et Threat Hunting proactif.",
      tech: ["Wazuh", "n8n", "TheHive", "MISP", "pfSense", "OPNsense", "Active Directory", "Threat Intelligence"],
      links: [] as { label: string; url: string }[],
    },
    {
      title: "PIDEV — Projet Intégré Java & Web",
      image: "/projects/pidev.jpg",
      date: "2025",
      category: "Web & Desktop",
      description:
        "Application composée de deux clients (Java Desktop & Web) connectés à une base de données commune et intégrant des services externes.",
      tech: ["JavaFX", "JDBC", "Singleton", "MySQL", "Symfony 6.4", "Doctrine ORM", "Twig", "MVC"],
      links: [] as { label: string; url: string }[],
    },
    {
      title: "Application mobile — FlutterFlow",
      image: "/projects/mobile-app.jpg",
      date: "2024",
      category: "Mobile",
      description:
        "Application mobile pour la gestion complète des utilisateurs, produits et commandes, avec services externes et messagerie cloud.",
      tech: ["FlutterFlow", "Firebase", "API REST", "Spoonacular API", "AI Photo Generator API", "Cloud Messaging"],
      links: [] as { label: string; url: string }[],
    },
    {
      title: "Site Web Full Stack dynamique",
      image: "/projects/fullstack-web.jpg",
      date: "2024",
      category: "Web",
      description:
        "Site web dynamique avec front-end (HTML / CSS / JS) et back-end PHP connecté à une base de données MySQL.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      links: [] as { label: string; url: string }[],
    },
    {
      title: "Application Desktop C++ — Qt & Oracle",
      image: "/projects/cpp-desktop.jpg",
      date: "2023",
      category: "Desktop",
      description:
        "Application avec interface graphique pour la gestion de données via Oracle.",
      tech: ["C++", "Qt", "Oracle"],
      links: [] as { label: string; url: string }[],
    },
    {
      title: "Jeu vidéo en C sous Linux",
      image: "/projects/c-game.jpg",
      date: "2023",
      category: "Desktop",
      description:
        "Création d'un jeu en langage C dans un environnement VirtualBox sous Ubuntu Linux.",
      tech: ["C", "Linux Ubuntu", "VirtualBox"],
      links: [] as { label: string; url: string }[],
    },
  ],

  // --- Langues ---------------------------------------------------------------
  languages: [
    { name: "Arabe", level: "Langue maternelle", value: 100 },
    { name: "Français", level: "Courant", value: 95 },
    { name: "Anglais", level: "Professionnel", value: 80 },
    { name: "Italien", level: "Notions", value: 35 },
  ],

  // --- Centres d'intérêt -----------------------------------------------------
  interests: [
    {
      title: "Cybersécurité & Blue Team",
      description: "Passionnée par la détection de menaces, le SOC et la réponse aux incidents.",
    },
    {
      title: "Travail d'équipe",
      description: "Collaboration, gestion de projet et résolution de problèmes en environnement technique.",
    },
  ],
};

export type CvData = typeof cvData;
