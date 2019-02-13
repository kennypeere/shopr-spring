import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LpService} from "../../../service/lp.service";

@Component({
  selector: 'app-add-lp',
  templateUrl: './add-lp.component.html',
  styleUrls: ['./add-lp.component.css']
})
export class AddLpComponent implements OnInit {
  addLpForm: FormGroup;
  localPrice: string;

  constructor(private formBuilder: FormBuilder, private lpService: LpService) { }

  ngOnInit() {
    this.addLpForm = this.formBuilder.group({
      artist: [''],
      title: [''],
      genre: [''],
      supplierId: [''],
      price: ['']});
  }

  addLp() {
    this.addLpForm.patchValue({price: this.localPrice});
    this.lpService.addLp(this.addLpForm.value);
  }

  updatePrice(event) {
    this.localPrice = event;
  }

}
