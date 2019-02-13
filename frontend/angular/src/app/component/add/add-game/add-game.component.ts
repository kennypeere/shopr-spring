import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {GameService} from "../../../service/game.service";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  addGameForm: FormGroup;
  localPrice: string;

  constructor(private formBuilder: FormBuilder, private gameService: GameService) { }

  ngOnInit() {
    this.addGameForm = this.formBuilder.group({
      publisher: [''],
      title: [''],
      minimumAge:[''],
      genre: [''],
      supplierId: [''],
      price: ['']});
  }

  addGame() {
    this.addGameForm.patchValue({price: this.localPrice});
    this.gameService.addGame(this.addGameForm.value);
  }

  updatePrice(event) {
    this.localPrice = event;
  }

}
