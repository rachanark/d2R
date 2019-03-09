import { Component, OnInit } from '@angular/core';
import {dec2Roman} from 'dec2roman'
import { createCipher } from 'crypto';

@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent implements OnInit {

  constructor() { }
  decInput:number=0;
  decRoman :String='';
  ngOnInit() {
  }
  changeRoman(){
   // this.decRoman=Number(this.decInput)+1+'';
   try{
    this.decRoman=dec2Roman(this.decInput);
   }
   catch(error){
    this.decRoman=error.message;
   }
   
   // console.log(typeof(this.decRoman));
  }
}
