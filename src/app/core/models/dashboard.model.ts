export interface ChartDonutItem {
  name: string;
  value: number;
}

export interface ChartBarItem {
  name: string;
  value: number;
}

export interface TableUser {
  firstName: string;
  lastName: string;
  username: string;
}

export interface DashboardResponse {
  chartDonut: ChartDonutItem[];
  chartBar: ChartBarItem[];
  tableUsers: TableUser[];
}