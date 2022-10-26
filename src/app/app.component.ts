import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PayBokWeb';

  hamburguer: string = '';
  imageLigth: string = '';
  imageLigthStyle: string = '';
  showImageStyle: string = '';

  constructor(){
  }

  changeStyle(value: number){
    if(this.hamburguer == '' && value == 1){
      this.hamburguer = 'spread';
    } else {
      this.hamburguer = ''
    }
  }

  changeImageLight(value: string){
    this.imageLigth = '../assets/' + value;
    if(this.imageLigthStyle == ''){
      this.imageLigthStyle = 'show';
      this.showImageStyle = 'showImage';
    } else {
      this.imageLigthStyle = '';
      this.showImageStyle = '';
    }
    console.log(this.imageLigth);
  }

}
