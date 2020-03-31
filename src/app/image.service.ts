import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  thumbnail_extension: string = '.small.jpg';
  big_extension: string = '.big.jpg';

  api_url: string = 'http://localhost:5000/';
  images_url: string = this.api_url + 'images/'
  filenames_url: string = this.api_url + 'images/filenames.json'
  ratings_url: string = this.api_url + 'ratings/'

  constructor(private http: HttpClient) {  }

  getImage(filename: string, thumbnail = false): string {
    var extension = this.big_extension;
    if (thumbnail)
      extension = this.thumbnail_extension;
    return this.images_url + filename + extension;
  }

  getFilenames(): Observable<any> {
      return this.http.get(this.filenames_url);
  }

  getImageRating(imageName: string): Observable<any> {
    return this.http.get(this.ratings_url + imageName);
  }

  likeImage(imageName: string, nbrOfLikes = 1): Observable<any> {
    const params = new HttpParams()
      .set('data', nbrOfLikes.toString());
    return this.http.put(this.ratings_url + imageName, params)
      .pipe(
        tap( // Log the result or error
          data => console.log('PUT: ' + imageName + ' Response: ' + data.toString()),
          error => console.log('PUT: ' + imageName  + ' Response: ' +  error.toString())
        )
      );
  }

}
