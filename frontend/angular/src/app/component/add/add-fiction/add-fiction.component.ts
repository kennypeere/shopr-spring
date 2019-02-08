import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FictionService} from "../../../service/fiction.service";

@Component({
  selector: 'app-add-fiction',
  templateUrl: './add-fiction.component.html',
  styleUrls: ['./add-fiction.component.css']
})
export class AddFictionComponent implements OnInit {

  public isbnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/];
  addFictionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private fictionService: FictionService) {
  }

  ngOnInit() {
    this.addFictionForm = this.formBuilder.group({
      author: [''],
      title: [''],
      genre: [''],
      isbn: [''],
      numberOfPages: [''],
      summary: [''],
      supplierId: [''],
      price: ['']
    });
  }

  addFiction() {
    this.fictionService.addFiction(this.addFictionForm.value);
  }

}
