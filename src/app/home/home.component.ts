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
  
  clickCount = 0;
  isFlipped = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.type();
    }
  }

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

    setTimeout(() => this.type(), typeDelay);
  }

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