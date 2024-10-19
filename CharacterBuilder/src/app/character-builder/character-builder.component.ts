import { Component, inject, signal } from '@angular/core';
import { imageOptions, WebApiService } from '../web-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-builder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './character-builder.component.html',
  styleUrl: './character-builder.component.css'
})
export class CharacterBuilderComponent {
  eye = signal<string>('No Eye');
  mouth = signal<string>('No Mouth');
  hand = signal<string>('No Hand');
  hasHammer = signal<boolean>(false);
  hasTail = signal<boolean>(false);
  imageUrl = signal<string>('');

  private webApiService: WebApiService = inject(WebApiService);

  async buildImage() {
    let url: string = await this.webApiService
    .buildImage(this.eye().replace(" ", ""), this.mouth().replace(" ", ""), this.hand().replace(" ", ""), this.hasHammer(), this.hasTail());
    this.imageUrl.set(url);
  }

  async buildRandom() {
    let options: imageOptions = await this.webApiService.buildRandomImage();
    console.log(options);
    this.eye.set(options.eye);
    this.mouth.set(options.mouth);
    this.hand.set(options.rightHand);
    this.hasHammer.set(options.hasHammer);
    this.hasTail.set(options.hasTail);
    this.buildImage();
  }

  reset() {
    this.eye.set('');
    this.mouth.set('');
    this.hand.set('');
    this.hasHammer.set(false);
    this.hasTail.set(false);
  }
}
