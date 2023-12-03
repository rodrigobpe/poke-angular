import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokeFilterComponent } from './components/poke-filter/poke-filter.component';
import PokeGenerations from './types/pokeGenerations';
import pokeGenerations from './mock/pokeGenerations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    PokeFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pokeGenerations: PokeGenerations[] = pokeGenerations
}
