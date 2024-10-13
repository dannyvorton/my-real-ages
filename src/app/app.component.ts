import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScriptureComponent } from './scripture/scripture.component';
import { DateComponent } from './date/date.component';
import { AgeComponent } from './age/age.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ScriptureComponent,
    HeaderComponent,
    DateComponent,
    AgeComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-real-ages';
}
