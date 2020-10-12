import { Component, OnInit } from '@angular/core';
import { DATA } from '../contact-data';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Name = DATA.name;
  Rollno = DATA.rollno;
  Email = DATA.email;

  constructor() { }

  ngOnInit(): void {
  }

}
