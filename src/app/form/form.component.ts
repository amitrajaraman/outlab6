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
      .subscribe(data => {
        this.data = data;
        this.form_email = data.email;
        this.form_name = data.name
      });
  }

  ngOnInit(): void {
    this.getdata();
  }

  submit(): void{
    if( this.b_sel==false ) {window.alert('Error: Selecting feedback is compulsory');}
    else{
    	this.data.email=this.form_email;
      this.data.name =this.form_name;
      this.GpService.postData(this.data)
        .subscribe(
          (val) => {
            console.log("Value submitted is", this.data);
            console.log("POST call successful value returned in body", 
                        val);
          },
          response => {
              console.log("POST call in error", response);
              window.alert('There was an error in submitting the form, try again.');
          },
          () => {
              console.log("The POST observable is now completed.");
              window.alert('Form submitted successfully!');
          }
        );
    }
  }

  onItemChange(value){
   this.selected=value;
   this.b_sel=true;
  }

}
