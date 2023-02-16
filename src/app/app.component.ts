import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temp';


  defaultCountry = 'india';
  defaultGender = 'male';
  email: string = '';
  country: string = '';
  Gender: string = '';
  hobbies: string = '';
  firstname: string = '';
  lastname: string = '';

  gender = [
    { id: 1, value: 'male' },
    { id: 2, value: 'female' },
    { id: 3, value: 'other' },
  ];


  //By passing local reference value
  // onSubmit(form : NgForm){
    // console.log(form)
  // }
  // By using @ ViewChild Method
  @ViewChild('myForm') form! : NgForm;

  onSubmit(){
    console.log(this.form);

    this.firstname = this.form.value.personalDetails.firstname;
    this.lastname = this.form.value.personalDetails.lastname;
    this.email = this.form.value.personalDetails.email;
    this.Gender = this.form.value.gender;
    this.country = this.form.value.country;
    this.hobbies = this.form.value.hobbies;

    
    this.form.reset();

  }

  setDefaultValues(){
    //It will not display in the input field only update in console
    // this.form.value.personalDetails.firstname = "Veeresh";
    // this.form.value.personalDetails.lastname = "Achari";
    // this.form.value.personalDetails.email = "vireshachara18@gmail.com";

    // setValue method will be applicable only for All entries need to be done as per console 
    // this.form.setValue({
    //   country : '',
    //   gender : '',
    //   hobbies : '',
    //   personalDetails : {
    //     firstname : "Veeresh",
    //     lastname : 'Achari',
    //     email : "vireshachara18@gmail.com"
    //   }
    // })

    this.form.form.patchValue({
      personalDetails : {
            firstname : "Veeresh",
            lastname : 'Achari',
            email : "vireshachara18@gmail.com"
          }
    })
  }
}
