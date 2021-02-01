import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formData : any;
  title = 'FormSubject';
  
  receiveFormData($event : any){
    this.formData = $event;
  }
}
