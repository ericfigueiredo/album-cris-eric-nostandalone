import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
userName = 'Cristininininiane';
userData = {
  email: 'cris@mail.com',
  role: 'Admin'
}

  title = 'album-cris-eric-nostandalone';
}
