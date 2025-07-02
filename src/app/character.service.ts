import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url = "https://rickandmortyapi.com/api/character";
  

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {

    return this.http.get<any>(this.url).pipe(
      map(response => response.results.map((c: any) => ({
        name: c.name,
        gender: c.gender,
        image: c.image
      })))
    );
  }
}



//daniel.vilchis@endava.com
