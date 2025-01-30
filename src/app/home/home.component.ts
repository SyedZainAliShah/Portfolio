import { Component } from '@angular/core';
import { MiniGameComponent } from '../mini-game/mini-game.component'; 

@Component({
  selector: 'app-home',
  imports: [MiniGameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Syed Zain Ali Shah"
  profession = 'Software Developer'
  interests = 'I’m a computer science enthusiast with a passion for coding, especially when it comes to building sleek and efficient applications using Angular. Outside of tech, I love spending time in my garden, finding peace in nurturing plants and watching them thrive. I’m also deeply inspired by art, whether I’m creating something myself or appreciating the work of others. My interests are a mix of creativity and logic, and I’m always excited to learn, create, and grow—both in tech and in life.'

}
