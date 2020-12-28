import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit{
/**
   * @description variable que almacena las llaves de las columnas.
   */
  displayedColumns: string[] = ['name', 'language', 'default_branch', 'description', 'created_at', 'url'];
 /**
   * @description varable que almacena los nombres para mostrar de las columnas.
   */
  displayedNames: string[] = ['Name', 'Language', 'Default Branch', 'Description', 'Creation date', 'Git Url'];

  /**
   * @description variable para el manejo de datos de la tabla.
   */
  dataSource = new MatTableDataSource();
  /**
   * @description variable para almacenar la lista de cookies.
   */
  cookiesList: any
  /**
   * @description variable para identificar si se usa o no el paginador. 
   */
  itsPaginable = true
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('table') table!:MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _githubService: GithubService,
    private _dataTransfer: DataTransferService) { }

  ngOnInit(): void {
    this.cookiesList = Object.keys(this._dataTransfer.getAllUsers())
    if (this.cookiesList.length > 0) {
      let savedUsers = this._dataTransfer.getAllUsers()
      let userJson = JSON.parse(savedUsers[`${this.cookiesList[0]}`])
      this._githubService.getUserRepos(userJson.guser).subscribe(data => {
        if (data.length > 5) {
          this.itsPaginable = false
        }
        this.dataSource.data = data
        this.dataSource.sort=this.sort
      })
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort
  }
 /**
   * @description Método para filtrar las filas de la tabla.
   * @param event string para filtrar los resultados 
   * @method applyFilter
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
