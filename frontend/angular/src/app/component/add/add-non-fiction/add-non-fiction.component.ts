import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {NonFictionService} from "../../../service/non-fiction.service";

@Component({
  selector: 'app-add-non-fiction',
  templateUrl: './add-non-fiction.component.html',
  styleUrls: ['./add-non-fiction.component.css']
})
export class AddNonFictionComponent implements OnInit {
  public isbnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/];
  addNonFictionForm: FormGroup;
  localPrice: string;

  constructor(private formBuilder: FormBuilder, private nonFictionService: NonFictionService) { }

  ngOnInit() {
    this.addNonFictionForm = this.formBuilder.group({
      author: [''],
      title: [''],
      subject: [''],
      isbn: [''],
      numberOfPages: [''],
      supplierId: [''],
      price: ['']
    });
  }

  addNonFiction() {
    this.addNonFictionForm.patchValue({price: this.localPrice});
    this.nonFictionService.addNonFiction(this.addNonFictionForm.value);
  }

  updatePrice(event) {
    this.localPrice = event;
  }

}
