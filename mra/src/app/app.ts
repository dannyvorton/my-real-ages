import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { Scripture } from './scripture/scripture';
import { Dates } from './dates/dates';
import { Age } from './age/age';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Scripture,
    Dates,
    Age,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-real-ages');
}
