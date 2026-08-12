import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Project } from './projects.model';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('animatedElement', { read: ElementRef }) animatedElements!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public lang: LanguageService) {}

  getTagClass(tag: string): string {
    return tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  get tier1Projects(): Project[] {
    return this.lang.lang() === 'de' ? this.tier1De : this.tier1En;
  }
  get tier2Projects(): Project[] {
    return this.lang.lang() === 'de' ? this.tier2De : this.tier2En;
  }

  // ── TIER 1 (English) ──────────────────────────────────────────────
  private tier1En: Project[] = [
    {
      header: 'SecureAudit - Agentic Security Auditor',
      subheader: 'AI/LLM Project | Python · FastAPI · Angular 19 · Groq/Gemini/Ollama',
      description: 'An agentic OWASP Top 10 & GDPR auditor: it plans, runs deterministic tools (static analysis + live OSV.dev CVE lookups), then has an LLM review the code and the tool findings, streaming every step in a live timeline. Local-first with Ollama, or hosted on free-tier inference. Try the live demo.',
      achievements: [
        'Agentic pipeline (plan → tools → LLM synthesis → merge) with a real-time SSE step timeline.',
        'Deterministic + AI hybrid: a static scanner and OSV.dev CVE lookups produce findings that cannot be hallucinated; the LLM adds context issues on top.',
        'Multi-provider LLM abstraction (Groq / Gemini / Ollama) with automatic fallback.',
        'Evaluation harness scoring precision / recall / F1 on a labeled dataset (1.00 / 0.91 / 0.95), gated in CI.',
        'CI/CD via GitHub Actions (lint · tests · eval gate · build) with automated deployment to a live cloud demo.'
      ],
      tags: ['Python', 'FastAPI', 'LLM', 'Agentic', 'RAG', 'Angular', 'Docker', 'CI/CD', 'OWASP', 'GDPR'],
      highlightBadge: '🚀 Live Demo',
      buttons: [
        { label: 'Live Demo', url: 'https://secureaudit-byev.onrender.com/', icon: 'fas fa-arrow-up-right-from-square', styleClass: 'btn-primary' },
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/SecureAudit', icon: 'fab fa-github' }
      ]
    },
    {
      header: 'UEBA Cybersecurity Dashboard',
      subheader: 'Professional Experience | GhangorCloud | March 2023 - March 2024',
      description: 'Built a major enterprise-grade security analytics feature processing thousands of events daily, which resulted in a 40% reduction in analyst investigation time. This project was a cornerstone of my professional development, offering extensive experience in building robust, scalable front-end systems for mission-critical security applications. This work is not publicly accessible on GitHub.',
      achievements: [
        'Built 18 custom data visualization components using Angular & TypeScript.',
        'Integrated 20+ RESTful APIs for near-real-time threat monitoring, improving threat detection efficiency by 35%.',
        'Optimized state management to handle thousands of concurrent updates smoothly.'
      ],
      tags: ['Angular', 'TypeScript', 'Kendo UI', 'RESTful APIs', 'State Management', 'Springboot', 'Java', 'Cybersecurity'],
      buttons: []
    },
    {
      header: 'DiGA (Digital Health Application)',
      subheader: 'Medical Informatics Project | University of Marburg Hospital | Summer Semester 2025',
      description: 'Developed a Django web application for physicians to collect, organize, and present comprehensive information on Digital Health Applications (DiGAs). The application features semantic search using Qdrant and deployment on Microsoft Azure.',
      achievements: [
        'Extended data model to include lists of screenshots, videos, advantages, and disadvantages.',
        'Enhanced search functionality using Qdrant vector embeddings for improved search relevance.',
        'Streamlined Azure deployment using environment variables to ensure database persistence across redeployments.',
        'Developed an LLM Chatbot prototype using Ollama and Gradio for research and development.'
      ],
      tags: ['Django', 'Python', 'Qdrant', 'Ollama', 'Azure', 'GDPR', 'Healthcare IT'],
      highlightBadge: '🇩🇪 German Healthcare Project',
      buttons: []
    }
  ];

  // ── TIER 1 (German) ───────────────────────────────────────────────
  private tier1De: Project[] = [
    {
      header: 'SecureAudit - Agentic Security Auditor',
      subheader: 'AI/LLM-Projekt | Python · FastAPI · Angular 19 · Groq/Gemini/Ollama',
      description: 'Ein agentischer OWASP-Top-10- und DSGVO-Auditor: Er plant, führt deterministische Tools aus (statische Analyse + Live-CVE-Abfragen über OSV.dev) und lässt anschließend ein LLM den Code und die Tool-Ergebnisse prüfen – jeder Schritt wird in einer Live-Timeline gestreamt. Local-first mit Ollama oder gehostet auf kostenloser Inferenz. Probier die Live-Demo aus.',
      achievements: [
        'Agentische Pipeline (Plan → Tools → LLM-Synthese → Merge) mit einer Echtzeit-Timeline über SSE.',
        'Hybrid aus Deterministik und KI: Ein statischer Scanner und OSV.dev-CVE-Abfragen liefern Ergebnisse, die nicht halluziniert werden können; das LLM ergänzt kontextbezogene Befunde.',
        'Multi-Provider-LLM-Abstraktion (Groq / Gemini / Ollama) mit automatischem Fallback.',
        'Evaluations-Harness misst Precision / Recall / F1 auf einem gelabelten Datensatz (1.00 / 0.91 / 0.95), abgesichert in der CI.',
        'CI/CD über GitHub Actions (Lint · Tests · Eval-Gate · Build) mit automatischem Deployment einer Live-Cloud-Demo.'
      ],
      tags: ['Python', 'FastAPI', 'LLM', 'Agentic', 'RAG', 'Angular', 'Docker', 'CI/CD', 'OWASP', 'GDPR'],
      highlightBadge: '🚀 Live Demo',
      buttons: [
        { label: 'Live Demo', url: 'https://secureaudit-byev.onrender.com/', icon: 'fas fa-arrow-up-right-from-square', styleClass: 'btn-primary' },
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/SecureAudit', icon: 'fab fa-github' }
      ]
    },
    {
      header: 'UEBA Cybersecurity Dashboard',
      subheader: 'Berufserfahrung | GhangorCloud | März 2023 – März 2024',
      description: 'Entwicklung einer umfangreichen Security-Analytics-Funktion auf Enterprise-Niveau, die täglich Tausende Events verarbeitet und die Analysezeit der Analysten um 40 % reduziert hat. Dieses Projekt war ein Grundstein meiner beruflichen Entwicklung und brachte umfangreiche Erfahrung im Aufbau robuster, skalierbarer Frontend-Systeme für sicherheitskritische Anwendungen. Diese Arbeit ist auf GitHub nicht öffentlich zugänglich.',
      achievements: [
        '18 eigene Datenvisualisierungs-Komponenten mit Angular & TypeScript entwickelt.',
        'Über 20 RESTful-APIs für nahezu Echtzeit-Bedrohungsüberwachung integriert und die Erkennungseffizienz um 35 % verbessert.',
        'State-Management optimiert, um Tausende gleichzeitige Updates flüssig zu verarbeiten.'
      ],
      tags: ['Angular', 'TypeScript', 'Kendo UI', 'RESTful APIs', 'State Management', 'Springboot', 'Java', 'Cybersecurity'],
      buttons: []
    },
    {
      header: 'DiGA (Digital Health Application)',
      subheader: 'Medizininformatik-Projekt | Universitätsklinikum Marburg | Sommersemester 2025',
      description: 'Entwicklung einer Django-Webanwendung, mit der Ärztinnen und Ärzte umfassende Informationen zu Digitalen Gesundheitsanwendungen (DiGAs) sammeln, organisieren und präsentieren können. Die Anwendung bietet semantische Suche mit Qdrant und wird auf Microsoft Azure betrieben.',
      achievements: [
        'Datenmodell um Listen für Screenshots, Videos, Vor- und Nachteile erweitert.',
        'Suchfunktion mit Qdrant-Vektor-Embeddings für höhere Trefferrelevanz verbessert.',
        'Azure-Deployment mit Umgebungsvariablen vereinfacht, um Datenbank-Persistenz über Redeployments hinweg sicherzustellen.',
        'LLM-Chatbot-Prototyp mit Ollama und Gradio für Forschung und Entwicklung erstellt.'
      ],
      tags: ['Django', 'Python', 'Qdrant', 'Ollama', 'Azure', 'GDPR', 'Healthcare IT'],
      highlightBadge: '🇩🇪 Deutsches Healthcare-Projekt',
      buttons: []
    }
  ];

  // ── TIER 2 (English) ──────────────────────────────────────────────
  private tier2En: Project[] = [
    {
      header: 'Perspective - Year-at-a-Glance Calendar',
      subheader: 'Full-Stack Project | React · Cloudflare Pages Functions · D1',
      description: 'A calendar that puts all 365 days on one screen as a single grid, so the shape and density of a year is visible without scrolling month by month. Runs entirely on Cloudflare\'s free tier, with no third-party auth or database provider. Try the live demo.',
      achievements: [
        'Year, month, week and day views over one dataset, with milestone preparation ramps and habit tracking rendered as grid pips.',
        'Two-way Google Calendar sync and ICS import/export, with custom daily/weekly/monthly/yearly recurrence rules.',
        'Payload-free Web Push reminders: the notification wakes a service worker that fetches the details, dispatched by a separate cron Worker.',
        'Installable as an offline-capable PWA, backed by D1 (SQLite) through file-routed Pages Functions.'
      ],
      tags: ['React', 'Vite', 'Cloudflare Pages', 'D1', 'Serverless', 'PWA', 'Web Push', 'OAuth'],
      buttons: [
        { label: 'Live Demo', url: 'https://perspective-do2.pages.dev', icon: 'fas fa-arrow-up-right-from-square', styleClass: 'btn-primary' },
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Perspective', icon: 'fab fa-github' }
      ]
    },
    {
      header: 'ERASE - Trash Detection System',
      subheader: 'Machine Learning Project | YOLOv4 & Kotlin',
      description: 'Developed an end-to-end computer vision application for real-time trash classification, achieving 92% accuracy across 5 waste categories.',
      achievements: [
        'Trained YOLOv4 model on custom dataset of 5,000+ annotated images.',
        'Built Android app using Kotlin with TensorFlow Lite integration.',
        'Managed complete ML pipeline: data collection → training → deployment.'
      ],
      tags: ['YOLOv4', 'Python', 'Kotlin', 'TFlite', 'OpenCV'],
      buttons: [
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/ERASE-Android-App', icon: 'fab fa-github' }
      ]
    },
    {
      header: 'Pineapple E-commerce Platform',
      subheader: 'Full-Stack MERN Application | Personal Project',
      description: 'A men\'s clothing storefront built on the MERN stack. Customers browse and filter a live product catalog; admins manage products and categories through a protected dashboard.',
      achievements: [
        'Product catalog with search, category filters, and price-range filtering.',
        'JWT authentication with role-based route guards (user vs. admin).',
        'Admin dashboard for product/category management with image upload.'
      ],
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      buttons: [
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Pineapple', icon: 'fab fa-github' }
      ]
    }
  ];

  // ── TIER 2 (German) ───────────────────────────────────────────────
  private tier2De: Project[] = [
    {
      header: 'Perspective - Jahreskalender auf einen Blick',
      subheader: 'Full-Stack-Projekt | React · Cloudflare Pages Functions · D1',
      description: 'Ein Kalender, der alle 365 Tage als ein einziges Raster auf einen Bildschirm bringt, sodass Form und Dichte eines Jahres sichtbar werden, ohne Monat für Monat zu scrollen. Läuft vollständig auf der kostenlosen Cloudflare-Stufe, ohne externen Auth- oder Datenbankanbieter. Probier die Live-Demo aus.',
      achievements: [
        'Jahres-, Monats-, Wochen- und Tagesansicht auf einem Datensatz, mit Vorbereitungs-Ramps für Meilensteine und Habit-Tracking als Raster-Pips.',
        'Bidirektionale Google-Calendar-Synchronisierung und ICS-Import/-Export, mit eigenen Wiederholungsregeln (täglich/wöchentlich/monatlich/jährlich).',
        'Web-Push-Erinnerungen ohne Payload: Die Benachrichtigung weckt einen Service Worker, der die Details nachlädt, ausgelöst von einem separaten Cron-Worker.',
        'Als offlinefähige PWA installierbar, auf Basis von D1 (SQLite) über dateibasiert geroutete Pages Functions.'
      ],
      tags: ['React', 'Vite', 'Cloudflare Pages', 'D1', 'Serverless', 'PWA', 'Web Push', 'OAuth'],
      buttons: [
        { label: 'Live Demo', url: 'https://perspective-do2.pages.dev', icon: 'fas fa-arrow-up-right-from-square', styleClass: 'btn-primary' },
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Perspective', icon: 'fab fa-github' }
      ]
    },
    {
      header: 'ERASE - Trash Detection System',
      subheader: 'Machine-Learning-Projekt | YOLOv4 & Kotlin',
      description: 'End-to-End-Computer-Vision-Anwendung zur Echtzeit-Klassifizierung von Müll entwickelt, mit 92 % Genauigkeit über 5 Abfallkategorien.',
      achievements: [
        'YOLOv4-Modell auf einem eigenen Datensatz mit über 5.000 annotierten Bildern trainiert.',
        'Android-App mit Kotlin und TensorFlow-Lite-Integration entwickelt.',
        'Komplette ML-Pipeline betreut: Datenerfassung → Training → Deployment.'
      ],
      tags: ['YOLOv4', 'Python', 'Kotlin', 'TFlite', 'OpenCV'],
      buttons: [
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/ERASE-Android-App', icon: 'fab fa-github' }
      ]
    },
    {
      header: 'Pineapple E-commerce Platform',
      subheader: 'Full-Stack-MERN-Anwendung | Privates Projekt',
      description: 'Ein Online-Shop für Herrenmode auf Basis des MERN-Stacks. Kundinnen und Kunden durchsuchen und filtern einen Live-Produktkatalog; Admins verwalten Produkte und Kategorien über ein geschütztes Dashboard.',
      achievements: [
        'Produktkatalog mit Suche, Kategoriefiltern und Preisspannen-Filter.',
        'JWT-Authentifizierung mit rollenbasierten Route-Guards (User vs. Admin).',
        'Admin-Dashboard zur Produkt- und Kategorieverwaltung mit Bild-Upload.'
      ],
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
      buttons: [
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Pineapple', icon: 'fab fa-github' }
      ]
    }
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    const options = { root: null, rootMargin: '0px', threshold: 0.1 };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.animatedElements.forEach((el, index) => {
      (el.nativeElement as HTMLElement).style.transitionDelay = `${Math.min(index * 100, 500)}ms`;
      this.observer.observe(el.nativeElement);
    });
  }
}
