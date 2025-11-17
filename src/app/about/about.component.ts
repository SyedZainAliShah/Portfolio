import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

// ... (Interfaces are unchanged)
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI/ML' | 'DevOps';
  icon: string; // Font Awesome icon class
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  logoUrl?: string; // Optional logo
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initIntersectionObserver();
    }
  }

  // ... (professionalSummary, experience, education, allSkills data are unchanged) ...
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

  education: Education[] = [
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

  allSkills: Skill[] = [
    // ... (skills data unchanged)
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
    { name: 'FastAPI', category: 'Backend', icon: 'fab fa-python' },
    { name: 'RESTful APIs', category: 'Backend', icon: 'fas fa-exchange-alt' },
    { name: 'PostgreSQL', category: 'Database', icon: 'fas fa-database' },
    { name: 'MongoDB', category: 'Database', icon: 'fas fa-database' },
    { name: 'MySQL', category: 'Database', icon: 'fas fa-database' },
    { name: 'TensorFlow', category: 'AI/ML', icon: 'fas fa-brain' },
    { name: 'Keras', category: 'AI/ML', icon: 'fas fa-brain' },
    { name: 'YOLOv4', category: 'AI/ML', icon: 'fas fa-eye' },
    { name: 'OpenCV', category: 'AI/ML', icon: 'fas fa-camera-retro' },
    { name: 'Pandas/NumPy', category: 'AI/ML', icon: 'fas fa-chart-bar' },
    { name: 'Docker', category: 'DevOps', icon: 'fab fa-docker' },
    { name: 'Kubernetes', category: 'DevOps', icon: 'fas fa-cubes' },
    { name: 'Git/GitHub', category: 'DevOps', icon: 'fab fa-git-alt' },
    { name: 'AWS', category: 'DevOps', icon: 'fab fa-aws' },
    { name: 'CI/CD', category: 'DevOps', icon: 'fas fa-sync-alt' }
  ];

  skillCategories: string[] = ['All', 'Frontend', 'Backend', 'Database', 'AI/ML', 'DevOps'];
  selectedSkillCategory: string = 'All';
  filteredSkills: Skill[] = [];

  ngOnInit() {
    this.filterSkills('All'); // Initialize filter
  }

  filterSkills(category: string) {
    this.selectedSkillCategory = category;
    if (category === 'All') {
      this.filteredSkills = this.allSkills;
    } else {
      this.filteredSkills = this.allSkills.filter(skill => skill.category === category);
    }
  }

  languages = [
    { name: 'English', proficiency: 'C2 (Fluent)' },
    { name: 'Urdu', proficiency: 'Native Speaker' },
    { name: 'German', proficiency: 'A2.2 (Actively Learning)' }
  ];

  // --- Hobbies array removed ---

  // ... (Intersection Observer logic is unchanged) ...
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