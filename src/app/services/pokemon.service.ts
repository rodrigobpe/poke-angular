import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/Pokemon';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import PokeTypes from '../types/PokeTypes';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'https://pokeapi.co/api/v2/'

  getAllPokemons({ limit, offset }: { limit: number, offset: number }){
    return this.http.get<Pokemon[]>(`${this.baseUrl}pokemon?limit=${limit}&offset=${offset}`).pipe(
      delay(1000),
      map((res:any) => {
        return res.results.map((result:any) =>{
           return result           
        })
      })
    )
  }

  getPokemonTypes(id:number){
    return this.http.get<PokeTypes[]>(`${this.baseUrl}pokemon/${id}`).pipe(
      map((res:any)=> {
        return res.types.map((types:any) => {
          return types.type.name
        })
      })
    )
  }
}
