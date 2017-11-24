import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Country } from '../country';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  //selectedCountry:Country = new Country(2, 'India');
  public userdata = [];
  countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil')
  ];
  
  myForm: FormGroup;
  
    constructor(){
      this.myForm = new FormGroup({
          'username': new FormControl('', Validators.required),
          'city': new FormControl('', Validators.required),
          'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
          'country': new FormControl('', Validators.required),
        });

       }
    onSubmit() {
      console.log(this.userdata);
      let id = this.userdata.length + 1;
      this.myForm.value['id'] = id;
      this.userdata.push(this.myForm.value);
      this.myForm.reset();
     }
     edit(){
       alert("Edit Data");
     } 
     delete(i){
      this.userdata.splice(i,1);
     }
 }