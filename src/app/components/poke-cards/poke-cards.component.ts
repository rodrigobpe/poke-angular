import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { Pokemon } from '../../types/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';
import PokeTypes from '../../types/PokeTypes';

@Component({
  selector: 'app-poke-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-cards.component.html',
  styleUrl: './poke-cards.component.scss'
})
export class PokeCardsComponent implements OnChanges {
  constructor(private pokeService: PokemonService) { }
  types$:Observable<PokeTypes[]> = new Observable
  ngOnChanges() {
    this.types$ = this.pokeService.getPokemonTypes(parseInt(this.pokemon.url.split('/')[6]))
  }
  @Input() pokemon: Pokemon
}
