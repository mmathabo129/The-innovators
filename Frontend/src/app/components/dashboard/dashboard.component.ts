import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  responseData: any;
  chartData: any;
  chartOptions: any;
  claims: any[] = [];
  selectedClaim: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.initializeChartOptions();
    this.fetchClaims();
  }

  fetchClaims(): void {
    this.dashboardService.getAllClaims().subscribe(
      (data) => {
        this.claims = data;
      },
      (error) => {
        console.error('Error fetching claims:', error);
      }
    );
  }

  getPredictions(): void {
    if (this.selectedClaim) {
      this.dashboardService.predict(this.selectedClaim).subscribe(
        (response) => {
          this.responseData = response;
          this.updateChartData();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  initializeChartOptions(): void {
    this.chartOptions = {
      title: {
        display: true,
        text: 'Model Predictions',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }

  updateChartData(): void {
    if (this.responseData) {
      const labels = Object.keys(this.responseData);
      const data = labels.map(key => this.responseData[key] === 'Fraudulent' ? 1 : 0);
      const backgroundColors = labels.map(key => this.responseData[key] === 'Fraudulent' ? '#FF6384' : '#4BC0C0');

      this.chartData = {
        labels: labels,
        datasets: [{
          label: 'Prediction',
          backgroundColor: backgroundColors,
          borderColor: backgroundColors,
          data: data
        }]
      };
    }
  }
}
