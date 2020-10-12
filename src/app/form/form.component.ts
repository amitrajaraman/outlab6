import { Component, OnInit } from '@angular/core';
import { DATA } from '../contact-data';
import { Contact } from '../contact';

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
  form_email=this.data.email;
  form_name=this.data.name;
  comments='';
  selected;
  b_sel=false;

  submit(): void{
    if( this.b_sel==false ) {window.alert('Error: Selecting feedback is compulsory');}
    else{
    	this.data.email=this.form_email;
    	this.data.name =this.form_name;
    	window.alert('Submitted Successfully! \n Your Comment was: ' + this.comments + '\n Your Feedback was: ' + this.selected);
    }
  }

  onItemChange(value){
   this.selected=value;
   this.b_sel=true;
  }

}
