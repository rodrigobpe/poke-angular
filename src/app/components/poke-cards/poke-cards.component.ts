import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pokemon } from '../../types/Pokemon';

@Component({
  selector: 'app-poke-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-cards.component.html',
  styleUrl: './poke-cards.component.scss'
})
export class PokeCardsComponent {
  @Input()pokemon:Pokemon
}
