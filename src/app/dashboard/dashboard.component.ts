import { Component } from '@angular/core';
import {Chart, registerables} from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  title = 'angular-chart';
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

    // Doughnuts
    var url = 'https://kami-nashi.com/st_test_data/dashboard_maint.php';

    function getJSON(url){
      
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        console.log('200,', xhr.response);
      } else {
        console.log('failure, ', xhr.response);
      }
    };
    xhr.send();
    return xhr.response;
    };

    const dnCanvasEle: any = document.getElementById('dn_chart')
    console.log("this should be the json array, ", getJSON(url))

    
    const dnChar = new Chart(dnCanvasEle.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Orders','Sales'],
        datasets: [
          { 
            data: [7.75,13.25], 
            //data: getJSON,
            backgroundColor: ['rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(75, 192, 192)','rgb(54, 162, 235)']

          },
        ]
      },
      options: {
      }
    });

    // Line Chart
    const lineCanvasEle: any = document.getElementById('line_chart')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            { data: [12, 15, 18, 14, 11, 19, 12], label: 'Orders', borderColor: 'rgba(54, 162, 235)' },
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales', borderColor: 'rgb(75, 192, 192)' },
          ],
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });

    // Bar chart
    const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
  }
}
