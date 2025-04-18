import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  category: string = '';
  difficulty: string = '';
  

  constructor(private router: Router) {}

  startQuiz() {
    if (!this.category || !this.difficulty) {
      alert('Please choose the category and level');
      return;
    }

    // Navigate to quiz page with parameters
    this.router.navigate(['/quiz'], {
      queryParams: {
        category: this.category,
        difficulty: this.difficulty
      }
    });
  }
}
