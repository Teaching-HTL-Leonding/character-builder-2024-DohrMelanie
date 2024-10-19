import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-randomizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './randomizer.component.html',
  styleUrl: './randomizer.component.css'
})
export class RandomizerComponent {
  zoomLevel: any;
  imageUrl: any;
  private webApiService: WebApiService = inject(WebApiService);


  constructor() {
    this.zoomLevel = 1;
    this.nextCharacter();
  }

  nextCharacter() {
    this.webApiService.buildRandomImage().then((imageOptions) => {
      this.webApiService.buildImage(imageOptions).then((imageUrl) => {
        this.imageUrl = imageUrl;
      });
    });
  }
  zoomOut() {
    this.zoomLevel -= 0.1;
  }
  zoomIn() {
    this.zoomLevel += 0.1;
  }
}
