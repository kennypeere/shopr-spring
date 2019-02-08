import {Component, OnInit, ViewChild} from '@angular/core';
import {Lp} from "../../../entity/Lp";
import {LpService} from "../../../service/lp.service";
import {MatPaginator, MatSort, MatTableDataSource, Sort} from '@angular/material';

@Component({
  selector: 'app-lp-datatable',
  templateUrl: './lp-datatable.component.html',
  styleUrls: ['./lp-datatable.component.css']
})
export class LpDatatableComponent implements OnInit {
  columnsToDisplay = ['id', 'title', 'artist', 'genre', 'price', 'details', 'delete'];
  dataSource : MatTableDataSource<Lp>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private lpService: LpService) {}

  ngOnInit() {
    this.fetchLps();
  }

  fetchLps() {
    this.lpService.getLps().subscribe(data => {
      this.dataSource = new MatTableDataSource<Lp>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}






// sortData(sort: Sort) {
//   console.log('sortData triggered');
//   const data = this.lps.slice();
//   if (!sort.active || sort.direction === '') {
//     this.sortedData = data;
//     return;
//   }
//
//   this.sortedData = data.sort((a, b) => {
//     const isAsc = sort.direction === 'asc';
//     switch (sort.active) {
//       case 'id': return compare(a.id, b.id, isAsc);
//       case 'title': return compare(a.title, b.title, isAsc);
//       case 'artist': return compare(a.artist, b.artist, isAsc);
//       case 'genre': return compare(a.genre, b.genre, isAsc);
//       case 'price': return compare(a.price, b.price, isAsc);
//       default: return 0;
//     }
//   });
// }
