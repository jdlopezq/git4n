import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() pageName = ''
  public userInfo: any
  public cookiesList: any

  constructor(private _dataTransferService: DataTransferService,
    private _router: Router, public _authService: AuthService) {

  }

  ngOnInit(): void {
    this.cookiesList = Object.keys(this._dataTransferService.getAllUsers())
    if (this.cookiesList.length > 0) {
      let savedUsers = this._dataTransferService.getAllUsers()
      this.userInfo = JSON.parse(savedUsers[`${this.cookiesList[0]}`])
    }
    this._dataTransferService.currentData.subscribe((data: any) => {
      if (data) {
        this.userInfo = this._dataTransferService.getUserInfo(data)
      }
    })
  }

  clearData() {
    this._router.navigate(['register'])
    this.userInfo=false
    if (this.cookiesList.length > 0) {
      this._dataTransferService.deleteUserInfo(this.userInfo.document)
    }
  }


  logout() {
    this._router.navigate(['home'])
    this.userInfo=false
    this._authService.logout()
    if (this.cookiesList.length > 0) {
      this._dataTransferService.deleteUserInfo(this.userInfo.document)
      this._dataTransferService.deleteUsersInfo()
    }
  }
}
