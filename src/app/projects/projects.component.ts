import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Project } from './projects.model'; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('animatedElement', { read: ElementRef }) animatedElements!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getTagClass(tag: string): string {
    return tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  // --- TIER 1 PROJECTS ---
  tier1Projects: Project[] = [
    {
      header: '🔐 UEBA Cybersecurity Dashboard',
      subheader: 'Professional Experience | GhangorCloud | March 2023 - March 2024',
      description: 'Built a major enterprise-grade security analytics feature processing thousands of events daily, which resulted in a 40% reduction in analyst investigation time. This project was a cornerstone of my professional development, offering extensive experience in building robust, scalable front-end systems for mission-critical security applications. This work is not publicly accessible on GitHub.',
      achievements: [
        'Built 18 custom data visualization components using Angular & TypeScript.',
        'Integrated 20+ RESTful APIs to ensure a high-availability, near-real-time data stream for continuous threat monitoring.',
        'Optimized state management to handle thousands of concurrent updates smoothly.',
        'Improved threat detection efficiency by 35% through intuitive UX design.'
      ],
      tags: ['Angular', 'TypeScript', 'Kendo UI', 'RESTful APIs', 'State Management', 'Springboot', 'Java', 'Cybersecurity'],
      buttons: []
    },
    {
      header: '🏥 DiGA (Digital Health Application)',
      subheader: 'Medical Informatics Project | University of Marburg Hospital | Summer Semester 2025',
      description: 'Developed a Django web application for physicians to collect, organize, and present comprehensive information on Digital Health Applications (DiGAs). The application features semantic search using Qdrant and deployment on Microsoft Azure.',
      achievements: [
        'Extended data model to include lists of screenshots, videos, advantages, and disadvantages.',
        'Enhanced search functionality using Qdrant vector embeddings for improved search relevance.',
        'Streamlined Azure deployment using environment variables to ensure database persistence across redeployments.',
        'Developed an LLM Chatbot prototype using Ollama and Gradio for research and development.'
      ],
      tags: ['Django', 'Python', 'Qdrant', 'Azure', 'GDPR', 'Healthcare IT'],
      highlightBadge: '🇩🇪 German Healthcare Project',
      buttons: []
    },
    {
      header: '🛒 Pineapple E-commerce Platform',
      subheader: 'Full-Stack MERN Application | Personal Project',
      description: 'A modern men\'s clothing website built using the MERN stack, designed to offer a seamless shopping experience. Features include product browsing, user authentication (signup/login), a secure payment gateway, add-to-cart functionality, and a responsive design.',
      achievements: [
        'Full-featured product catalog supporting 500+ items.',
        'Integrated Braintree payment gateway.',
        'Implemented JWT authentication and authorization.',
        'Responsive design for mobile and desktop.'
      ],
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Braintree'],
      buttons: [
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Pineapple', icon: 'fab fa-github' }
      ]
    }
  ];

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
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/taskboard', icon: 'fab fa-github' }
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
        { label: 'GitHub', url: 'https://github.com/SyedZainAliShah/Typathon', icon: 'fab fa-github' }
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