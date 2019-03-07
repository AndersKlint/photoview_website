import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  filenames: string[] = [];
  thumbnail_extension: string = '.small.jpg';
  big_extension: string = '.big.jpg';

  constructor(private http: HttpClient) {  }

  getImage(filename: string, thumbnail = false): string {
    var extension = this.big_extension;
    if (thumbnail)
      extension = this.thumbnail_extension;
    return 'http://localhost:5000/images/' + filename + extension;
  }

  getFilenames(): Observable<any> {
      return this.http.get('http://localhost:5000/images/filenames.json');
  }

}
