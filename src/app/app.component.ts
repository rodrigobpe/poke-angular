import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokeCardsComponent } from './components/poke-cards/poke-cards.component';
import { PokeFilterComponent } from './components/poke-filter/poke-filter.component';
import PokeGenerations from './types/pokeGenerations';
import pokeGenerations from './mock/pokeGenerations';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from './types/Pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    PokeFilterComponent,
    PokeCardsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private pokeService:PokemonService){}
  pokemon$:Observable<Pokemon[]> = new Observable;
  filter:boolean

  ngOnInit(): void {
  }
  pokeGenerations: PokeGenerations[] = pokeGenerations
  onClickUpdateGenration({limit,offset}:{limit:number,offset:number}){
    this.pokemon$ = this.pokeService.getAllPokemons({limit,offset})
    this.filter = true
  }
}
