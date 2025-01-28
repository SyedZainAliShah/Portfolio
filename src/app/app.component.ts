import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatSliderModule], // Import RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zain-portfolio';
}