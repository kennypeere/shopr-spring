import { Component, OnInit } from '@angular/core';
import {Fiction} from "../../../entity/Fiction";
import {LpService} from "../../../service/lp.service";
import {ActivatedRoute} from "@angular/router";
import {FictionService} from "../../../service/fiction.service";

@Component({
  selector: 'app-fiction-detail',
  templateUrl: './fiction-detail.component.html',
  styleUrls: ['./fiction-detail.component.css']
})
export class FictionDetailComponent implements OnInit {
  fiction: Fiction = new Fiction();

  constructor(private fictionService: FictionService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.fictionService.findFictionById(id).subscribe(fiction => this.fiction = fiction);
  }

  isFavourite(): boolean{
    return true;
  }

}
