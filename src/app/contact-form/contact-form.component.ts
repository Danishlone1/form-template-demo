import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContactMethod} from '../common/contact-method';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods: ContactMethod[] = [
    new ContactMethod(1, 'Email'),
    new ContactMethod(2, 'Phone'),
    new ContactMethod(3, 'Pager')
  ];
  submit(f: NgForm) {
    console.log(f.value);
  }
}
