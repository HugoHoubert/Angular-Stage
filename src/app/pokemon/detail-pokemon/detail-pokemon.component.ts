import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined

  constructor(private route: ActivatedRoute,
    private back: Router,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonID: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonID) {
      this.pokemonService.getPokemonById(+pokemonID).subscribe(
        pokemon => this.pokemon = pokemon
      );
    } 
  }

  deletepokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id).subscribe(() => this.goBack());
  }

  goBack() {
    this.back.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.back.navigate(['/edit/pokemon', pokemon.id]);
  }
}
