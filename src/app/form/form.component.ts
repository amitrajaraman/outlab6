import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { GetpostService } from '../getpost.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: Contact;
  form_email: string = '';
  form_name: string = '';
  comments='';
  selected;
  b_sel=false;

  constructor(private GpService: GetpostService) { }

  getdata(): void {
    this.GpService.getData()
              .subscribe(data => { this.data = data; this.form_email = data.email; this.form_name = data.name });
  }

  ngOnInit(): void {
    this.getdata();
  }

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
