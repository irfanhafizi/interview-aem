import { Component, Input, OnInit } from '@angular/core';
import { TableUser } from 'src/app/core/models/dashboard.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  @Input() users: TableUser[] = [];

}
