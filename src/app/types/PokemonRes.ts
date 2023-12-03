import { Pokemon } from "./Pokemon";

export default interface PokemonRes{
    count:number;
    next:string;
    previus:string | null;
    results:Pokemon[]
}