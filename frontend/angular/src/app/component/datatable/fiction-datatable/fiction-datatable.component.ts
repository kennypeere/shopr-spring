import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Fiction} from "../../../entity/Fiction";
import {FictionService} from "../../../service/fiction.service";

@Component({
  selector: 'app-fiction-datatable',
  templateUrl: './fiction-datatable.component.html',
  styleUrls: ['./fiction-datatable.component.css']
})
export class FictionDatatableComponent implements OnInit {
  columnsToDisplay = ['id', 'title', 'author', 'genre', 'price', 'details', 'delete'];
  dataSource: MatTableDataSource<Fiction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fictionService: FictionService) {
  }

  ngOnInit() {
    this.fetchFictions();
  }

  fetchFictions() {
    this.fictionService.getFictions().subscribe(data => {
      this.dataSource = new MatTableDataSource<Fiction>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
