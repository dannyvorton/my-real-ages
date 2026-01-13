import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Scriptures } from './components/scriptures/scriptures';
import { Dates } from './components/dates/dates';
import { Ages } from './components/ages/ages';
import { Footer } from './components/footer/footer';

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
