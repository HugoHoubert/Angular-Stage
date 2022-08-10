import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private route: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(){
    this.pokemons$ = this.searchTerms.pipe( 
      debounceTime (300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.searchPokemon(term)),
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemons', pokemon.id];
    this.route.navigate(link);
  }

}
