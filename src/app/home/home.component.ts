import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pseudo: string = '';
  category: string = '';
  difficulty: string = '';

  constructor(private router: Router) {}

  startQuiz() {
    if (this.pseudo && this.category && this.difficulty) {
      this.router.navigate(['/quiz'], {
        queryParams: {
          pseudo: this.pseudo,
          category: this.category,
          difficulty: this.difficulty
        }
      });
}
  }
}
