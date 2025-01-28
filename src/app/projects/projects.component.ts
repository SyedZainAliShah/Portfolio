import { Component } from '@angular/core';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Pineapple',
      description: 'A modern mens clothing website built using the MERN stack, designed to offer a seamless shopping experience. Features include product browsing, user authentication (signup/login), a secure payment gateway, add-to-cart functionality, and a responsive design.',
    //  imageUrl: 'assets/project1.jpg',
      projectUrl: 'https://github.com/SyedZainAliShah/Typathon',
      tags: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'ERASE',
      description: 'A mobile app that detects and classifies garbage using a YOLOv4 model, converted to TensorFlow Lite (TFLite) for efficient on-device processing. It identifies waste types (plastic, paper, metal, etc.) and determines recyclability, helping users sort trash correctly and promote recycling.',
    //  imageUrl: 'assets/project2.jpg',
      projectUrl: 'https://github.com/SyedZainAliShah/Typathon',
      tags: ['Kotlin', 'Java', 'TFlite', 'YOLOv4']
    },
    {
      title: 'JumpAround',
      description: 'An enhanced Pong game built with Java and JOGL, featuring Phong and GGX microfacet shading for realistic lighting. Control metallic and roughness properties dynamically, adjust light direction, and enjoy gameplay with power-ups. Controls: Player 1: W/S, Player 2: P/L, 5-8 to tweak shading.',
   //   imageUrl: 'assets/project3.jpg',
      projectUrl: 'https://github.com/SyedZainAliShah/Messaging-Portal',
      tags: ['Java', 'GGX Microfacet Shading', 'JOGL']
    },
    {
      title: 'Typathon',
      description: 'Typathon is a typing game built with Angular (v14.2.5), focusing on a clean, simple design. Angular was chosen for its robust structure and efficient handling of dynamic content, making it perfect for this real-time typing challenge. The game generates random Latin words via Faker JS to enhance typing practice.',
   //   imageUrl: 'assets/project4.jpg',
      projectUrl: 'https://github.com/SyedZainAliShah/Typathon',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Javascript']
    },
    {
      title: 'Messaging Portal',
      description: 'A command-line messaging application built with Python, enabling users to send and receive messages directly from the terminal. This simple app demonstrates Pythons capabilities for handling basic user input, file operations, and message storage in a text-based interface.',
    //  imageUrl: 'assets/project5.jpg',
      projectUrl: 'https://github.com/SyedZainAliShah/Messaging-Portal',
      tags: ['Python','HTML']
    },
    {
      title: 'Proxy Server',
      description: 'A simple Python-based proxy server with caching functionality. This server listens on a specified port, intercepts HTTP requests, and serves files from cache if available. If the file is not cached, it fetches it from the origin server, caches it, and then serves it to the client. It also supports blocking URLs from a blocklist.',
    //  imageUrl: 'assets/project6.jpg',
      projectUrl: 'https://github.com/SyedZainAliShah/Proxy-Server',
      tags: ['Python','HTML']
    }
  ];
} 