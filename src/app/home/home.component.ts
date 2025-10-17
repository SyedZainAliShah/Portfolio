import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'; // Import NgOptimizedImage

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage], // Add it here
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  profession = 'Software Developer';
  clickCount = 0;
  isFlipped = false;

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