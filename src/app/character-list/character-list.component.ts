import { Component } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  characters: Character[] = [];
  loading = true;
  error = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: data => {
        this.characters = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Error al cargar personajes';
        this.loading = false;
      }
    });
  }
}
