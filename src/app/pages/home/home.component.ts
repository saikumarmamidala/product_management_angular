import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  studentName: string = 'Sai Kumar Mamidala';
  customTagline: string = 'Efficiently manage your product catalog with my unique system - Product Hub.';
}