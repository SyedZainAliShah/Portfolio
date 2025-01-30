import { Component, OnInit } from '@angular/core';

interface Card {
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.css']
})
export class MiniGameComponent implements OnInit {
  cards: Card[] = [];
  flippedCards: number[] = [];
  moves = 0;
  time = 0;
  gameWon = false;
  timer: any;
  
  // Game configuration
  symbols = ['Δ', 'Σ', 'λ', 'π', 'Ω', 'Ψ', 'Γ', 'Θ'];
  totalPairs = 6;

  ngOnInit() {
    this.resetGame();
  }

  // Update getters for proper formatting
  get formattedMinutes() {
    return this.minutes.toString().padStart(2, '0');
  }

  get formattedSeconds() {
    return this.seconds.toString().padStart(2, '0');
  }
  resetGame() {
    // Initialize cards
    const values = [...this.symbols.slice(0, this.totalPairs), ...this.symbols.slice(0, this.totalPairs)];
    this.cards = this.shuffle(values).map(value => ({
      value,
      isFlipped: false,
      isMatched: false
    }));
    
    // Reset game state
    this.flippedCards = [];
    this.moves = 0;
    this.time = 0;
    this.gameWon = false;
    
    // Start timer
    clearInterval(this.timer);
    this.timer = setInterval(() => this.time++, 1000);
  }

  flipCard(index: number) {
    if (
      this.flippedCards.length === 2 || 
      this.cards[index].isMatched || 
      this.cards[index].isFlipped
    ) return;

    this.cards[index].isFlipped = true;
    this.flippedCards.push(index);

    if (this.flippedCards.length === 2) {
      this.moves++;
      const [first, second] = this.flippedCards;
      
      if (this.cards[first].value === this.cards[second].value) {
        this.cards[first].isMatched = true;
        this.cards[second].isMatched = true;
        this.checkWin();
      } else {
        setTimeout(() => {
          this.cards[first].isFlipped = false;
          this.cards[second].isFlipped = false;
        }, 1000);
      }
      this.flippedCards = [];
    }
  }

  checkWin() {
    this.gameWon = this.cards.every(card => card.isMatched);
    if (this.gameWon) clearInterval(this.timer);
  }

  shuffle(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  get minutes() { return Math.floor(this.time / 60) }
  get seconds() { return this.time % 60 }
}