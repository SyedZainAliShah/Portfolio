import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Project } from './projects.model'; // Updated import

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('animatedElement', { read: ElementRef }) animatedElements!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Helper to format tags for CSS classes
  getTagClass(tag: string): string {
    return tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  // --- TIER 1 PROJECTS ---
  tier1Projects: Project[] = [
    {
      header: '🔐 UEBA Cybersecurity Dashboard',
      subheader: 'Professional Experience | GhangorCloud | March 2023 - March 2024',
      description: 'Architected an enterprise-grade security analytics platform processing 50,000+ events daily, reducing analyst investigation time by 40%.',
      achievements: [
        'Built 15+ custom data visualization components using Angular & TypeScript.',
        'Integrated 20+ RESTful APIs with 99.9% uptime for near-real-time monitoring.',
        'Optimized state management to handle 10,000+ concurrent updates smoothly.',
        'Improved threat detection efficiency by 35% through intuitive UX design.'
      ],
      tags: ['Angular', 'TypeScript', 'Kendo UI', 'RESTful APIs', 'State Management'],
      buttons: [
        { label: 'Read Case Study', url: '#', icon: 'fas fa-book-open' },
        { label: 'View Details', url: '#', icon: 'fas fa-info-circle' }
      ]
    },
    {
      header: '🏥 DIGA (Digital Health Application)',
      subheader: 'Medical Informatics Project | Marburg University Hospital | 2024',
      description: 'Contributed to a medical informatics project at Marburg University Hospital, focusing on data processing while ensuring GDPR compliance and medical data privacy standards.',
      achievements: [
        'Processed 10,000+ patient records with strict data security protocols.',
        'Ensured compliance with GDPR and German medical data regulations.',
        'Collaborated with healthcare professionals and data scientists.'
      ],
      tags: ['Python', 'Data Processing', 'GDPR', 'Healthcare IT'], // Example tags
      highlightBadge: '🇩🇪 German Healthcare Project',
      buttons: [
        { label: 'Project Details', url: '#', icon: 'fas fa-info-circle' }
      ]
    },
    {
      header: '🛒 Pineapple E-commerce Platform',
      subheader: 'Full-Stack MERN Application | Personal Project',
      description: 'Built a complete e-commerce platform from scratch using the MERN stack, featuring user authentication, payment gateway integration, and product management.',
      achievements: [
        'Full-featured product catalog supporting 500+ items.',
        'Integrated Stripe payment gateway.',
        'Implemented JWT authentication and authorization.',
        'Responsive design for mobile and desktop.'
      ],
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
      buttons: [
        { label: 'Live Demo', url: '#', styleClass: 'btn-primary', icon: 'fas fa-rocket' },
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Pineapple', icon: 'fab fa-github' },
        { label: 'Case Study', url: '#', icon: 'fas fa-book-open' }
      ]
    }
  ];

  // --- TIER 2 PROJECTS ---
  tier2Projects: Project[] = [
    {
      header: '♻️ ERASE - Trash Detection System',
      subheader: 'Machine Learning Project | YOLOv4 & Kotlin',
      description: 'Developed an end-to-end computer vision application for real-time trash classification, achieving 92% accuracy across 5 waste categories.',
      achievements: [
        'Trained YOLOv4 model on custom dataset of 5,000+ annotated images.',
        'Built Android app using Kotlin with TensorFlow Lite integration.',
        'Managed complete ML pipeline: data collection → training → deployment.'
      ],
      tags: ['YOLOv4', 'Python', 'Kotlin', 'TFlite', 'OpenCV'],
      buttons: [
        { label: 'Demo Video', url: '#', icon: 'fas fa-video' },
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/ERASE-Android-App', icon: 'fab fa-github' }
      ]
    },
    {
      header: '📋 Taskboard - Backend API',
      subheader: 'RESTful API | NestJS & PostgreSQL',
      description: 'Built a robust backend system with comprehensive API endpoints for task management and team collaboration.',
      achievements: [
        'RESTful API architecture with NestJS framework.',
        'PostgreSQL database with optimized queries.',
        'JWT authentication and role-based access control.',
        'Swagger API documentation.'
      ],
      tags: ['NestJS', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript'],
      buttons: [
        { label: 'GitHub', url: '#', icon: 'fab fa-github' },
        { label: 'API Docs', url: '#', icon: 'fas fa-file-alt' }
      ]
    },
    {
      header: '⌨️ Typathon - Angular Typing Game',
      subheader: 'Frontend Project | Angular & TypeScript',
      description: 'Created an interactive typing game to master modern Angular development principles and TypeScript best practices.',
      achievements: [
        'Real-time WPM and accuracy tracking.',
        'Multiple difficulty levels and random word generation.',
        'Responsive design with smooth animations.'
      ],
      tags: ['Angular', 'TypeScript', 'RxJS', 'CSS'],
      buttons: [
        { label: 'Play Game', url: '#', styleClass: 'btn-primary', icon: 'fas fa-play-circle' },
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Typathon', icon: 'fab fa-github' }
      ]
    }
  ];

  // --- INTERSECTION OBSERVER LOGIC ---
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
      // Stagger the animation
      (el.nativeElement as HTMLElement).style.transitionDelay = `${Math.min(index * 100, 500)}ms`;
      this.observer.observe(el.nativeElement);
    });
  }
}