https://www.freakyjolly.com/angular-material-how-to-install-angular-material-in-angular-project/
https://youtu.be/Fcr-gM-QThc


ng new client --routing --style=scss
npm i --save Angular/material @angilar/cdk

$ npm install --save @angular/material @angular/cdk @angular/animations

0. theme_1:  
ng g c components/layout --skipTests
ng g c components/header --skipTests
ng g c components/main --skipTests
ng g c components/footer --skipTests
ng g c components/home --skipTests
ng g c components/projects --skipTests


skip hammer Js (further reading on it viaa internet)  

ng s --aot --port 4202
 bootstrap: [LayoutComponent]
<app-layout> on index.html  

1.  create a custom file to import material pieces:  
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
@NgModule ({
    imports: [
    MatSliderModule,
  ],
  exports: [
    MatSliderModule,
  ]
  })
  export class MaterialModule {}  
  
