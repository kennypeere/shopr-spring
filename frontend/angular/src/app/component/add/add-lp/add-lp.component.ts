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

  constructor(private formBuilder: FormBuilder, private lpService: LpService) { }

  ngOnInit() {
    this.addLpForm = this.formBuilder.group({
      artist: [''],
      title: [''],
      genre: [''],
      supplierId: [''],
      price: ['']});
  }

  addLp(){
    this.lpService.addLp(this.addLpForm.value);
  }

}
