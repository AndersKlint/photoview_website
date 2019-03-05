import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getThumbnails(): string[] {
    var thumbnails: string[] = [];
    for (var _i = 0; _i < 115; _i++) {
      thumbnails.push('http://localhost:5000/images/' + _i + '.png');
      }
    return thumbnails;
  }

}
