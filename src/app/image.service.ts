import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  filenames: string[] = [];

  constructor(private http: HttpClient) {
    this.getFilenames().subscribe(res => {
          this.filenames = res;
          console.log(res);
        },
        console.error
      );
      console.log(this.filenames);

  }

  getThumbnails(): string[] {
    var thumbnails: string[] = [];
    for (var _i = 0; _i < 115; _i++) {
      thumbnails.push('http://localhost:5000/images/small/' + this.filenames[_i] + '.jpg');
      console.log(this.filenames[_i]);
      }
    return thumbnails;
  }

  getBigImage(pid: string): string {
    return 'http://localhost:5000/images/big/' + pid + '.jpg';
  }

  private getFilenames(): Observable<any> {
      return this.http.get('http://localhost:5000/images/filenames.json');
  }

}
