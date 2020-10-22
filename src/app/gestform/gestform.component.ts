import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-gestform',
  templateUrl: './gestform.component.html',
  styleUrls: ['./gestform.component.css']
})
export class GestformComponent{

  gestform = new FormControl(null, Validators.compose([
    Validators.required,
  ]));

  result = '';
  randomValues = [];
  arrayResult = [];
  
  onSubmit() {
    let length = this.gestform.value;
    this.randomValues = [];
    this.arrayResult = [];
    this.randomValues = Array.from({length: length}, () => Math.floor(Math.random() * 2001) - 1000)
    for (let i = 0; i < this.randomValues.length; i++) {
      console.log(this.randomValues[i]);
      if (this.randomValues[i] % 3 === 0 && this.randomValues[i] % 5 === 0) {
        this.arrayResult.push(this.randomValues[i].toString() + ' Gestform');
      } else if (this.randomValues[i] % 3 === 0) {
        this.arrayResult.push(this.randomValues[i].toString() + ' Geste');
      } else if (this.randomValues[i] % 5 === 0) {
        this.arrayResult.push(this.randomValues[i].toString() + ' Forme');
      } else {
        this.arrayResult.push(this.randomValues[i].toString() + ' ' + this.randomValues[i].toString());
        
      }
    }
  }

  onClick() {
    this.randomValues = [];
    this.arrayResult = [];
  }

}
