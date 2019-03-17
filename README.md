# A personal photostream website (work in progress)
Uses an Angular 7 frontend and Flask RESTful backend. 

The frontend displays the pictures in a masonry image grid (photostream), with clickable and enlargable items. The users can rate images they like, which will be sorted accordingly; with higher rated images being placed at the top.

The backend API reads pictures from a specified directory and automatically\* makes smaller sized images (thumbnails) to efficiently send to the frontend.

\* Not automatically yet, you will have to run the make_thumbnails.py script to generate new thumbnails upons changes in the directory.

# Screenshots
Photostream - Made using the [ngx-masnonry](https://www.npmjs.com/package/ngx-masonry) packet which ports [Desandro Masonry](https://github.com/desandro/masonry) to Angular 6+. 

![photostream](https://raw.githubusercontent.com/andersklint/photoview_website/master/screenshots/photostream_2019-03-17.jpg)

Photo modal - Appears upon clicking an image. Made using Overlay from CLI and techniques from [this tutorial on blog.thoughtram.io.](https://blog.thoughtram.io/angular/2017/11/20/custom-overlays-with-angulars-cdk.html)

![photo modal](https://raw.githubusercontent.com/andersklint/photoview_website/master/screenshots/photo_modal_2019-03-17.jpg)

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
