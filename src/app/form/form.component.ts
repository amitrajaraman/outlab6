import { Component, OnInit } from '@angular/core';
import { DATA } from '../contact-data';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data=DATA;
  form_email=this.data.EMAIL;
  form_name=this.data.NAME;
  comments='';
  selected;
  b_sel=false;

  submit(): void{
    if( this.b_sel==false ) {window.alert('Error: Selecting feedback is compulsory');}
    else{
    	this.data.EMAIL=this.form_email;
    	this.data.NAME =this.form_name;
    	window.alert('Submitted Successfully! \n Your Comment was: ' + this.comments + '\n Your Feedback was: ' + this.selected);
    }
  }

  onItemChange(value){
   this.selected=value;
   this.b_sel=true;
  }

}
