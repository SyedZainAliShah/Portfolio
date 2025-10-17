import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule], 
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