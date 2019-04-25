import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', image: "assets/front.jpg"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
