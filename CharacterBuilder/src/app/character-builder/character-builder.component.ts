import { Component, inject, signal } from '@angular/core';
import { WebApiService } from '../web-api.service';


@Component({
  selector: 'app-character-builder',
  standalone: true,
  imports: [],
  templateUrl: './character-builder.component.html',
  styleUrl: './character-builder.component.css'
})
export class CharacterBuilderComponent {
  eye = signal<string>('');
  mouth = signal<string>('');
  hand = signal<string>('');
  hasHammer = signal<boolean>(false);
  hasTail = signal<boolean>(false);

  private webApiService: WebApiService = inject(WebApiService);

  buildImage() {

  }
}
