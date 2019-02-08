import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {NonFiction} from "../../../entity/NonFiction";
import {FictionService} from "../../../service/fiction.service";
import {NonFictionService} from "../../../service/non-fiction.service";
import {Fiction} from "../../../entity/Fiction";

@Component({
  selector: 'app-non-fiction-datatable',
  templateUrl: './non-fiction-datatable.component.html',
  styleUrls: ['./non-fiction-datatable.component.css']
})
export class NonFictionDatatableComponent implements OnInit {
  columnsToDisplay = ['id', 'author', 'title', 'subject', 'price', 'details', 'delete'];
  dataSource : MatTableDataSource<NonFiction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private nonFictionService: NonFictionService) { }

  ngOnInit() {
    this.fetchNonFictions();
  }

  fetchNonFictions() {
    this.nonFictionService.getNonFictions().subscribe(data => {
      this.dataSource = new MatTableDataSource<NonFiction>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
