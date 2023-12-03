import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output, booleanAttribute } from '@angular/core';
import PokeGenerations from '../../types/pokeGenerations';

@Component({
  selector: 'app-poke-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-filter.component.html',
  styleUrl: './poke-filter.component.scss'
})
export class PokeFilterComponent {
  @Input() pokeGenerations: PokeGenerations[];
  @Input({transform:booleanAttribute}) isWelcome:boolean
}
