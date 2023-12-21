import { Component } from '@angular/core';
import { PokeCardsComponent } from '../../components/poke-cards/poke-cards.component';
import { PokeFilterComponent } from '../../components/poke-filter/poke-filter.component';
import { Observable } from 'rxjs';
import { Pokemon } from '../../types/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import PokeGenerations from '../../types/PokeGenerations';
import pokeGenerations from '../../mock/pokeGenerations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PokeFilterComponent,
    PokeCardsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private pokeService: PokemonService) { }

  pokemon$: Observable<Pokemon[]> = new Observable;
  filter: boolean
  pokeGenerations: PokeGenerations[] = pokeGenerations

  onClickUpdateGenration({ limit, offset }: { limit: number, offset: number }) {
    this.pokemon$ = this.pokeService.getAllPokemons({ limit, offset })
    this.filter = true
  }

}
