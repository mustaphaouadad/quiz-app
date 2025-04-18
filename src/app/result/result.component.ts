import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: any;

  ngOnInit(): void {
    const storedResult = localStorage.getItem('lastResult');
    if (storedResult) {
      this.result = JSON.parse(storedResult);
    }
  }
}

