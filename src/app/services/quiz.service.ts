import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuestions(category: string, difficulty: string): Observable<any> {
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http.get<any>(apiUrl);
  }
}

