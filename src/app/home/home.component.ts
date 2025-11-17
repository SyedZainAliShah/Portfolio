import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit { 
  
  // --- Properties for Typing Animation ---
  typedText = ''; 
  private titles = [
    "Full-Stack Developer",
    "Angular Specialist",
    "Spring Boot Developer",
    "Cybersecurity Enthusiast"
  ];
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;
  
  // --- Existing Properties ---
  clickCount = 0;
  isFlipped = false;

  // --- 1. Inject PLATFORM_ID ---
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // --- 2. Add the browser check ---
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.type();
    }
  }

  // --- 3. The animation logic (unchanged) ---
  private type() {
    const currentTitle = this.titles[this.titleIndex];
    let typeDelay: number;

    if (this.isDeleting) {
      this.charIndex--;
      this.typedText = currentTitle.substring(0, this.charIndex);
      typeDelay = this.deletingSpeed;
    } else {
      this.charIndex++;
      this.typedText = currentTitle.substring(0, this.charIndex);
      typeDelay = this.typingSpeed;
    }

    if (!this.isDeleting && this.charIndex === currentTitle.length) {
      typeDelay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      typeDelay = 500;
    }

    // This will now only run in the browser
    setTimeout(() => this.type(), typeDelay);
  }

  // --- Existing Image Click Logic (unchanged) ---
  onImageClick() {
    this.clickCount++;

    if (this.clickCount >= 15) {
      this.isFlipped = true;
      setTimeout(() => {
        this.isFlipped = false;
        this.clickCount = 0;
      }, 3000);
    }
  }
}