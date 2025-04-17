import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName: string = '';
  category: string = '22'; 
  difficulty: string = 'easy';
  
}
