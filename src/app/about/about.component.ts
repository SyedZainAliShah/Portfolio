import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('animatedElement', { read: ElementRef }) animatedElements!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  professionalSummary = "A highly ambitious Software Engineer with a proven track record of designing and developing scalable, data-intensive applications. My expertise is in building high-performance features and creating effortless, pixel-perfect user experiences. I thrive on taking full ownership of projects, from shaping frontend architecture to deployment, and am eager to contribute to a company that values both craftsmanship and high-impact results.";

  experience = [
  {
    role: 'Software Engineer',
    company: 'GhangorCloud (Cybersecurity)',
    period: '03/2023 – 03/2024',
    points: [
      'Took full ownership of the development for a new User and Entity Behavior Analytics (UEBA) platform, contributing to both the frontend architecture in Angular and the backend services in Java Spring Boot.',
      'Engineered a suite of high-performance data visualization components using TypeScript and Kendo UI to represent user risk scores, activity timelines, and behavioral anomalies.',
      'Developed and maintained RESTful APIs with Java Spring Boot to efficiently process and deliver near-real-time security event data to the Angular frontend.',
      'Collaborated closely with UI/UX designers and domain experts to translate complex cybersecurity requirements into an intuitive and user-friendly interface for security analysts.'
    ]
  },
  {
    role: 'Associate Software Engineer',
    company: 'GhangorCloud',
    period: '09/2022 – 02/2023',
    points: [
      'Developed responsive data visualization components, including dynamic charts and data grids, in Angular and Kendo UI for the real-time analysis of large datasets.',
      'Enhanced application performance and stability by optimizing front-end logic and resolving long-standing bugs in the Angular codebase.',
      'Improved front-end styling and layout for data-centric applications using Bootstrap CSS for a more polished and usable interface.'
    ]
  },
  {
    role: 'Product Management Intern',
    company: 'SphereWMS - Shispare',
    period: '07/2021 – 09/2021',
    points: [
      'Translated client needs into actionable development tasks by managing the product backlog and defining sprint goals.',
      'Facilitated agile ceremonies to improve team alignment and ensure on-time feature delivery.',
      'Designed detailed flowcharts and wireframes that served as a technical blueprint for the development team.'
    ]
  }
];

  education = [
    {
      degree: 'Master of Science, Computer Science',
      university: 'Philipps-Universität Marburg, Germany',
      period: '2024 – Ongoing',
      logoUrl: 'assets/marburg.png'
    },
    {
      degree: 'Bachelor of Science, Computer Science',
      university: 'National University of Computing and Emerging Sciences, Pakistan',
      period: '2018 – 2022',
      logoUrl: 'assets/fast.png'
    }
  ];

  skills = [
    { category: 'Frontend', list: 'React, Angular, TypeScript, Next.js, TailwindCSS' },
    { category: 'Backend', list: 'Java Spring Boot, Python, Node.js' },
    { category: 'Systems Programming', list: 'Java, C++, C' },
    { category: 'Data/ML', list: 'TensorFlow, Keras, Scikit-learn, Pandas, OpenCV' },
    { category: 'Databases', list: 'MySQL, MongoDB, PostgreSQL' },
    { category: 'Tools & Platforms', list: 'Git, Docker, AWS, Jira, Postman' }
  ];

  languages = [
    { name: 'English', proficiency: 'Full Professional Proficiency' },
    { name: 'German', proficiency: 'Basic Conversational' },
    { name: 'Urdu', proficiency: 'Native Speaker' }
  ];

  hobbies = [
    { name: 'Gardening', icon: 'fas fa-leaf' },
    { name: 'Wood Carving', icon: 'fas fa-tree' },
    { name: 'Hiking', icon: 'fas fa-hiking' },
    { name: 'Bouldering', icon: 'fas fa-mountain' }
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
      (el.nativeElement as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      this.observer.observe(el.nativeElement);
    });
  }
}