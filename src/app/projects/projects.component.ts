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

  // 2. ADD A CONSTRUCTOR to inject the platform ID
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  // Helper to format tags for CSS classes
  getTagClass(tag: string): string {
    return tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  projects: Project[] = [
    {
      title: 'Pineapple',
      icon: 'fas fa-tshirt',
      description: 'A modern MERN stack e-commerce site for menswear, offering a seamless shopping experience with user authentication, a secure payment gateway, and cart functionality.',
      projectUrl: 'https://github.com/SyedZainAliShah/Pineapple',
      tags: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'ERASE',
      icon: 'fas fa-trash-alt',
      description: 'A mobile app using a YOLOv4 model to detect and classify garbage. It helps users sort trash correctly by identifying materials and determining recyclability on-device.',
      projectUrl: 'https://github.com/SyedZainAliShah/ERASE-Android-App',
      tags: ['Kotlin', 'Java', 'TFlite', 'YOLOv4']
    },
    {
      title: 'JumpAround',
      icon: 'fas fa-gamepad',
      description: 'An enhanced Pong game in Java/JOGL with realistic lighting via Phong and GGX microfacet shading, allowing dynamic control over material properties.',
      projectUrl: 'https://github.com/SyedZainAliShah/JumpAround',
      tags: ['Java', 'GGX Shading', 'JOGL']
    },
    {
      title: 'Typathon',
      icon: 'fas fa-keyboard',
      description: 'A clean, simple typing game built with Angular. This real-time challenge leverages Angular\'s robust structure and generates random words to enhance typing practice.',
      projectUrl: 'https://github.com/SyedZainAliShah/Typathon',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Messaging Portal',
      icon: 'fas fa-terminal',
      description: 'A command-line messaging application built with Python that enables users to send and receive messages directly from their terminal, showcasing file I/O.',
      projectUrl: 'https://github.com/SyedZainAliShah/Messaging-Portal',
      tags: ['Python', 'CLI']
    },
    {
      title: 'Proxy Server',
      icon: 'fas fa-server',
      description: 'A Python-based proxy server with caching. It intercepts HTTP requests, serves files from its cache, or fetches them from the origin while supporting a URL blocklist.',
      projectUrl: 'https://github.com/SyedZainAliShah/Proxy-Server',
      tags: ['Python', 'Networking']
    }
  ];

  ngAfterViewInit() {
    // 3. WRAP THE LOGIC in a platform check
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