import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../language.service';

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI/ML' | 'DevOps';
  icon: string;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  logoUrl?: string;
  courses: {
    title: string;
    list: string[];
  };
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private observer!: IntersectionObserver;

  @ViewChildren('animatedElement', { read: ElementRef })
  set animatedElements(elements: QueryList<ElementRef>) {
    if (isPlatformBrowser(this.platformId) && elements) {
      this.observeElements(elements);
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public lang: LanguageService) {
    if (isPlatformBrowser(this.platformId)) {
      this.initIntersectionObserver();
    }
  }

  private de(): boolean { return this.lang.lang() === 'de'; }

  private summaryEn = "A full-stack Software Engineer who ships AI into real products. My professional foundation is enterprise web development, building Angular frontends and Spring Boot backends for cybersecurity platforms, and my recent work brings LLMs into production: a fully local OWASP/GDPR code auditor (SecureAudit) and a RAG-powered digital-health assistant for Marburg University Hospital. I take full ownership of projects, from architecture to deployment, and care equally about measurable results and polished user experiences.";
  private summaryDe = "Ein Full-Stack Software Engineer, der KI in echte Produkte bringt. Mein beruflicher Kern ist Enterprise-Webentwicklung – Angular-Frontends und Spring-Boot-Backends für Cybersecurity-Plattformen. Meine jüngste Arbeit bringt LLMs in die Produktion: ein vollständig lokaler OWASP/DSGVO-Code-Auditor (SecureAudit) und ein RAG-basierter Digital-Health-Assistent für das Universitätsklinikum Marburg. Ich übernehme volle Verantwortung für Projekte – von der Architektur bis zum Deployment – und lege gleichermaßen Wert auf messbare Ergebnisse und ausgefeilte Nutzererlebnisse.";
  get professionalSummary(): string { return this.de() ? this.summaryDe : this.summaryEn; }

  private experienceEn = [
    {
      role: 'Software Engineer',
      company: 'GhangorCloud (Cybersecurity)',
      period: '03/2023 – 03/2024',
      points: [
        'Designed and architected of two major product initiatives: the User and Entity Behavior Analytics (UEBA) platform and a new Data Compliance offering (Angular/Java Spring Boot).',
        'Engineered a suite of high-performance data visualization components (TypeScript/Kendo UI) to represent behavioral anomalies, risk scores, and activity timelines.',
        'Integrated 20+ RESTful APIs to ensure a high-availability, near-real-time data stream for continuous threat monitoring.',
        'Streamlined the analyst investigation process by collaborating with UI/UX designers to translate complex cybersecurity requirements into an intuitive and results-driven interface.'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'GhangorCloud',
      period: '09/2022 – 02/2023',
      points: [
        'Developed responsive data visualization components, including dynamic charts and data grids, in Angular and Kendo UI for the real-time analysis of large datasets.',
        'Optimized front-end logic and resolving critical stability bugs in the core Angular codebase.',
        'Improved usability and user interface appeal for several data-centric applications through targeted front-end styling and layout enhancements (Bootstrap CSS).'
      ]
    },
    {
      role: 'Product Management Intern',
      company: 'SphereWMS - Shispare',
      period: '07/2021 – 09/2021',
      points: [
        'Translated client needs into actionable development tasks by managing the product backlog and defining clear sprint goals.',
        'Facilitated agile ceremonies (Scrum) to improve team alignment and ensure on-time feature delivery.',
        'Designed detailed flowcharts and wireframes that served as a technical blueprint for the development team.'
      ]
    }
  ];
  private experienceDe = [
    {
      role: 'Software Engineer',
      company: 'GhangorCloud (Cybersecurity)',
      period: '03/2023 – 03/2024',
      points: [
        'Konzeption und Architektur zweier großer Produktinitiativen: die User-and-Entity-Behavior-Analytics-Plattform (UEBA) und ein neues Data-Compliance-Angebot (Angular/Java Spring Boot).',
        'Entwicklung einer Reihe leistungsstarker Datenvisualisierungs-Komponenten (TypeScript/Kendo UI) zur Darstellung von Verhaltensanomalien, Risiko-Scores und Aktivitäts-Timelines.',
        'Über 20 RESTful-APIs integriert, um einen hochverfügbaren, nahezu Echtzeit-Datenstrom für kontinuierliche Bedrohungsüberwachung sicherzustellen.',
        'Den Analyseprozess verschlankt, indem ich mit UI/UX-Designern komplexe Cybersecurity-Anforderungen in eine intuitive, ergebnisorientierte Oberfläche übersetzt habe.'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'GhangorCloud',
      period: '09/2022 – 02/2023',
      points: [
        'Responsive Datenvisualisierungs-Komponenten entwickelt, darunter dynamische Diagramme und Data-Grids, in Angular und Kendo UI für die Echtzeit-Analyse großer Datensätze.',
        'Frontend-Logik optimiert und kritische Stabilitäts-Bugs in der zentralen Angular-Codebasis behoben.',
        'Usability und optische Gestaltung mehrerer datenzentrierter Anwendungen durch gezieltes Frontend-Styling und Layout-Verbesserungen (Bootstrap CSS) verbessert.'
      ]
    },
    {
      role: 'Praktikant Produktmanagement',
      company: 'SphereWMS - Shispare',
      period: '07/2021 – 09/2021',
      points: [
        'Kundenbedürfnisse in umsetzbare Entwicklungsaufgaben übersetzt, indem ich das Produkt-Backlog verwaltet und klare Sprint-Ziele definiert habe.',
        'Agile Zeremonien (Scrum) moderiert, um die Teamabstimmung zu verbessern und eine termingerechte Feature-Lieferung sicherzustellen.',
        'Detaillierte Flussdiagramme und Wireframes erstellt, die als technische Vorlage für das Entwicklungsteam dienten.'
      ]
    }
  ];
  get experience() { return this.de() ? this.experienceDe : this.experienceEn; }

  private educationEn: Education[] = [
    {
      degree: 'Master of Science in Computer Science',
      university: 'Philipps-Universität Marburg, Germany',
      period: '2024 – Present',
      logoUrl: 'assets/marburg.png',
      courses: {
        title: 'Relevant Coursework',
        list: [
          'IT Security', 'Cryptography', 'Understanding Deep Learning',
          'Software Design Patterns', 'Big Data Analytics', 'Graphics Programming',
          'Data Integration', 'Multimedia and Signal Processing'
        ]
      }
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      university: 'NUCES (National University of Computing and Emerging Sciences), Pakistan',
      period: '2018 – 2022',
      logoUrl: 'assets/fast.png',
      courses: {
        title: 'Foundation Courses',
        list: [
          'Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems',
          'Computer Networks', 'Database Systems', 'Software Engineering', 'Computer Architecture'
        ]
      }
    }
  ];
  private educationDe: Education[] = [
    {
      degree: 'Master of Science in Informatik',
      university: 'Philipps-Universität Marburg, Deutschland',
      period: '2024 – heute',
      logoUrl: 'assets/marburg.png',
      courses: {
        title: 'Relevante Module',
        list: [
          'IT Security', 'Cryptography', 'Understanding Deep Learning',
          'Software Design Patterns', 'Big Data Analytics', 'Graphics Programming',
          'Data Integration', 'Multimedia and Signal Processing'
        ]
      }
    },
    {
      degree: 'Bachelor of Science in Informatik',
      university: 'NUCES (National University of Computing and Emerging Sciences), Pakistan',
      period: '2018 – 2022',
      logoUrl: 'assets/fast.png',
      courses: {
        title: 'Grundlagenmodule',
        list: [
          'Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems',
          'Computer Networks', 'Database Systems', 'Software Engineering', 'Computer Architecture'
        ]
      }
    }
  ];
  get education(): Education[] { return this.de() ? this.educationDe : this.educationEn; }

  allSkills: Skill[] = [
    { name: 'Angular', category: 'Frontend', icon: 'fab fa-angular' },
    { name: 'React', category: 'Frontend', icon: 'fab fa-react' },
    { name: 'TypeScript', category: 'Frontend', icon: 'fab fa-js-square' },
    { name: 'JavaScript', category: 'Frontend', icon: 'fab fa-js-square' },
    { name: 'Nest.js', category: 'Frontend', icon: 'fas fa-code' },
    { name: 'HTML5', category: 'Frontend', icon: 'fab fa-html5' },
    { name: 'CSS3', category: 'Frontend', icon: 'fab fa-css3-alt' },
    { name: 'TailwindCSS', category: 'Frontend', icon: 'fas fa-paint-brush' },
    { name: 'Bootstrap', category: 'Frontend', icon: 'fab fa-bootstrap' },
    { name: 'Java/Spring Boot', category: 'Backend', icon: 'fab fa-java' },
    { name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js' },
    { name: 'Express.js', category: 'Backend', icon: 'fab fa-node-js' },
    { name: 'Python', category: 'Backend', icon: 'fab fa-python' },
    { name: 'Django', category: 'Backend', icon: 'fab fa-python' },
    { name: 'FastAPI', category: 'Backend', icon: 'fab fa-python' },
    { name: 'RESTful APIs', category: 'Backend', icon: 'fas fa-exchange-alt' },
    { name: 'PostgreSQL', category: 'Database', icon: 'fas fa-database' },
    { name: 'MongoDB', category: 'Database', icon: 'fas fa-database' },
    { name: 'MySQL', category: 'Database', icon: 'fas fa-database' },
    { name: 'Qdrant (Vector DB)', category: 'Database', icon: 'fas fa-database' },
    { name: 'LLM Integration', category: 'AI/ML', icon: 'fas fa-robot' },
    { name: 'RAG & Vector Search', category: 'AI/ML', icon: 'fas fa-magnifying-glass-chart' },
    { name: 'Ollama / Llama 3', category: 'AI/ML', icon: 'fas fa-microchip' },
    { name: 'Prompt Engineering', category: 'AI/ML', icon: 'fas fa-comment-dots' },
    { name: 'TensorFlow', category: 'AI/ML', icon: 'fas fa-brain' },
    { name: 'Keras', category: 'AI/ML', icon: 'fas fa-brain' },
    { name: 'YOLOv4', category: 'AI/ML', icon: 'fas fa-eye' },
    { name: 'OpenCV', category: 'AI/ML', icon: 'fas fa-camera-retro' },
    { name: 'Pandas/NumPy', category: 'AI/ML', icon: 'fas fa-chart-bar' },
    { name: 'Docker', category: 'DevOps', icon: 'fab fa-docker' },
    { name: 'Kubernetes', category: 'DevOps', icon: 'fas fa-cubes' },
    { name: 'Git/GitHub', category: 'DevOps', icon: 'fab fa-git-alt' },
    { name: 'AWS', category: 'DevOps', icon: 'fab fa-aws' },
    { name: 'Azure', category: 'DevOps', icon: 'fas fa-cloud' },
    { name: 'CI/CD', category: 'DevOps', icon: 'fas fa-sync-alt' }
  ];

  skillCategories: string[] = ['All', 'Frontend', 'Backend', 'Database', 'AI/ML', 'DevOps'];
  selectedSkillCategory: string = 'All';
  filteredSkills: Skill[] = [];

  ngOnInit() {
    this.filterSkills('All');
  }

  filterSkills(category: string) {
    this.selectedSkillCategory = category;
    if (category === 'All') {
      this.filteredSkills = this.allSkills;
    } else {
      this.filteredSkills = this.allSkills.filter(skill => skill.category === category);
    }
  }

  private activitiesEn = [
    {
      title: 'iGEM 2026: Team Marburg',
      role: 'Dry Lab & Wiki Contributor',
      period: '2026 - Present',
      badge: 'Paris Finals · Nov 2026',
      icon: 'fas fa-dna',
      description: "Contributing to my university's team for iGEM 2026, the world's largest synthetic biology competition, with the Grand Jamboree finals in Paris this November. It is a cross-disciplinary team spanning wet lab and dry lab.",
      points: [
        'Collaborating in a large multidisciplinary team on tools that visualize protein structures from AlphaFold data.',
        'Building and maintaining the team wiki that presents the project to the global iGEM community.',
        'Joining the dry-lab (computational) workstream, bringing a software-engineering perspective to a biology-led project.'
      ],
      tags: ['Synthetic Biology', 'Dry Lab', 'AlphaFold', 'Teamwork'],
      link: { label: 'About iGEM', url: 'https://igem.org/' }
    }
  ];
  private activitiesDe = [
    {
      title: 'iGEM 2026: Team Marburg',
      role: 'Dry-Lab- & Wiki-Mitarbeit',
      period: '2026 – heute',
      badge: 'Finale in Paris · Nov 2026',
      icon: 'fas fa-dna',
      description: "Mitarbeit im Team meiner Universität für iGEM 2026, den weltgrößten Wettbewerb für synthetische Biologie, mit dem Grand-Jamboree-Finale im November in Paris. Es ist ein interdisziplinäres Team aus Wet Lab und Dry Lab.",
      points: [
        'Mitarbeit in einem großen interdisziplinären Team an Tools, die Proteinstrukturen aus AlphaFold-Daten visualisieren.',
        'Aufbau und Pflege des Team-Wikis, das das Projekt der weltweiten iGEM-Community präsentiert.',
        'Teil des Dry-Lab-Arbeitsstroms (computergestützt) und bringe eine Software-Engineering-Perspektive in ein biologisch geführtes Projekt ein.'
      ],
      tags: ['Synthetic Biology', 'Dry Lab', 'AlphaFold', 'Teamwork'],
      link: { label: 'Über iGEM', url: 'https://igem.org/' }
    }
  ];
  get activities() { return this.de() ? this.activitiesDe : this.activitiesEn; }

  private languagesEn = [
    { name: 'English', proficiency: 'C2 (Fluent)' },
    { name: 'Urdu', proficiency: 'Native Speaker' },
    { name: 'German', proficiency: 'B1 (Actively Learning)' }
  ];
  private languagesDe = [
    { name: 'Englisch', proficiency: 'C2 (fließend)' },
    { name: 'Urdu', proficiency: 'Muttersprache' },
    { name: 'Deutsch', proficiency: 'B1 (wird aktiv gelernt)' }
  ];
  get languages() { return this.de() ? this.languagesDe : this.languagesEn; }

  private quickFactsEn = [
    { label: 'Location', value: 'Marburg, Germany', icon: 'fas fa-map-marker-alt' },
    { label: 'Current Status', value: 'M.Sc. Computer Science Student', icon: 'fas fa-graduation-cap' },
    { label: 'Primary Stack', value: 'Angular & Spring Boot Specialist', icon: 'fas fa-laptop-code' },
    { label: 'Language Skills', value: 'English C2, German B1', icon: 'fas fa-globe' },
    { label: 'Availability', value: 'Werkstudent and Internship (20hrs/week)', icon: 'fas fa-calendar-check' }
  ];
  private quickFactsDe = [
    { label: 'Standort', value: 'Marburg, Deutschland', icon: 'fas fa-map-marker-alt' },
    { label: 'Aktueller Status', value: 'M.Sc.-Informatik-Student', icon: 'fas fa-graduation-cap' },
    { label: 'Haupt-Stack', value: 'Angular- & Spring-Boot-Spezialist', icon: 'fas fa-laptop-code' },
    { label: 'Sprachkenntnisse', value: 'Englisch C2, Deutsch B1', icon: 'fas fa-globe' },
    { label: 'Verfügbarkeit', value: 'Werkstudent und Praktikum (20 Std./Woche)', icon: 'fas fa-calendar-check' }
  ];
  get quickFacts() { return this.de() ? this.quickFactsDe : this.quickFactsEn; }

  private initIntersectionObserver() {
    const options = { root: null, rootMargin: '0px', threshold: 0.1 };
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  }

  private observeElements(elements: QueryList<ElementRef>) {
    setTimeout(() => {
      elements.forEach((el, index) => {
        const htmlEl = el.nativeElement as HTMLElement;
        if (htmlEl && !htmlEl.classList.contains('is-visible')) {
          const delay = Math.min(index * 50, 500);
          htmlEl.style.transitionDelay = `${delay}ms`;
          this.observer.observe(htmlEl);
        }
      });
    }, 10);
  }
}
