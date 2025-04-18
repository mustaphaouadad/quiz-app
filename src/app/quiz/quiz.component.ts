import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Question } from '../models/question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentIndex: number = 0;
  selectedAnswers: string[] = [];
  category: string = '';
  difficulty: string = '';
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.difficulty = params['difficulty'];

      this.quizService.getQuestions(this.category, this.difficulty).subscribe(res => {
        this.questions = res.results;
        this.questions.forEach(q => {
          q.shuffledOptions = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
        });
        this.isLoading = false;
      });
    });
  }

  selectAnswer(option: string): void {
    this.selectedAnswers[this.currentIndex] = option;
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz(): void {
    let score = 0;
    this.questions.forEach((q, i) => {
      if (this.selectedAnswers[i] === q.correct_answer) {
        score++;
      }
    });

    const result = {
      date: new Date().toISOString(),
      score,
      total: this.questions.length,
      percentage: Math.round((score / this.questions.length) * 100),
      category: this.category,
      difficulty: this.difficulty
    };

    localStorage.setItem('lastResult', JSON.stringify(result));

    this.router.navigate(['/result']);
  }
}
