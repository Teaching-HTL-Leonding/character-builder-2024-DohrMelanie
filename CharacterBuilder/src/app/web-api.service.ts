import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface imageResponse {
  url: string;
}
export interface imageOptions {
  eye: string,
  hasHammer: boolean,
  mouth: string,
  rightHand: string,
  hasTail: boolean
}

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  readonly apiUrl: string = 'http://localhost:5110/';
  private httpClient = inject(HttpClient);

  async buildImage(eye: string, mouth: string, hand: string, hasHammer: boolean, hasTail: boolean): Promise<string> {
    const imageOptions: imageOptions = {
      eye: eye,
      hasHammer: hasHammer,
      mouth: mouth,
      rightHand: hand,
      hasTail: hasTail
    };
    const response = await lastValueFrom(this.httpClient.post<imageResponse>(this.apiUrl + "build-image-url", imageOptions));
    return response.url;
  }
  async buildRandomImage(): Promise<imageOptions> {
    return await lastValueFrom(this.httpClient.get<imageOptions>(this.apiUrl + "get-random-image-options"));
  }
}
