// mini-game.component.ts
import { Component } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  score = 0;
  private clickEffectTimeout: any;
 
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  incrementScore() {
    this.score++;
    this.addClickEffect();
  }

  private addClickEffect() {
    const cookie = this.el.nativeElement.querySelector('.cookie');
    this.renderer.addClass(cookie, 'click-effect');
    
    if(this.clickEffectTimeout) clearTimeout(this.clickEffectTimeout);
    this.clickEffectTimeout = setTimeout(() => {
      this.renderer.removeClass(cookie, 'click-effect');
    }, 200);
  }
}