import { Component, OnInit } from '@angular/core';
import { ChartBarItem, ChartDonutItem, DashboardResponse, TableUser } from 'src/app/core/models/dashboard.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chartDonutData: ChartDonutItem[] = [];
  chartBarData: ChartBarItem[] = [];
  tableUsers: TableUser[] = [];

  isLoading = true;
  errorMessage = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.isLoading = true;
    this.apiService.getDashboard().subscribe({
      next: (data: DashboardResponse) => {
        this.chartDonutData = data.chartDonut;
        this.chartBarData = data.chartBar;
        this.tableUsers = data.tableUsers;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load dashboard data.';
        this.isLoading = false;
      }
    });
  }

}
