import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { Scriptures } from './scriptures/scriptures';
import { Dates } from './dates/dates';
import { Ages } from './ages/ages';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Scriptures,
    Dates,
    Ages,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-real-ages');
}
