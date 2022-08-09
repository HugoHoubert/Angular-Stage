import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonlist: Pokemon[];

  constructor(private router: Router,
  private pokemonService: PokemonService) 
  { }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(
      pokemonlist => this.pokemonlist = pokemonlist
    );
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
