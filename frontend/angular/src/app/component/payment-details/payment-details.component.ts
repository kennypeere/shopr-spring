import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  @Input()
  secondFormGroup: FormGroup;
  public ccMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public cvc = [/\d/, /\d/, /\d/];
  years: number[] = [];
  months: string[] = [];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.calculateYears()
    // this.secondFormGroup.addControl("id", this.formBuilder.control(this.years));
    // this.secondFormGroup.addControl("cardNumber", null);
    this.setMonths();
  }

  calculateYears(){
    let year = new Date().getFullYear();
    for (let i = 0; i < 5; i++){
      this.years.push(year + i);
    }
  }

  setMonths(){
    for (let i=1; i<10 ; i++){
      this.months.push('0' + i);
    }
    for (let i= 0; i<3 ; i++){
      this.months.push('1' + i);
    }
  }

}
