import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface imageResponse {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  readonly apiUrl: string = 'http://localhost:5110/';
  private httpClient = inject(HttpClient);

  async buildImage(eye: string, mouth: string, hand: string, hasHammer: boolean, hasTail: boolean): Promise<string> {
    console.log(eye, mouth, hand, hasHammer, hasTail);
    const response = await lastValueFrom(this.httpClient.post<imageResponse>(this.apiUrl + "build-image-url", {
      eye: eye,
      hasHammer: hasHammer,
      mouth: mouth,
      rightHand: hand,
      hasTail: hasTail
    }));
    console.log(response);
    return response.url;
  }
}
