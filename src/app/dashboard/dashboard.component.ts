import { Component } from '@angular/core';
import DoughnutLabel from '@mauro.panzeri/chartjs-plugin-doughnutlabel';
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
    var dn_url = 'https://kami-nashi.com/st_test_data/dashboard_maint.php';

    function getDATA(chart_url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", chart_url, false);
      xhr.send();
  
      // stop the engine while xhr isn't done
      for(; xhr.readyState !== 4;)
  
      if (xhr.status === 200) {  
          console.log('SUCCESS', xhr.responseText);}
  
      return JSON.parse(xhr.responseText);
  }

  var dn_data = getDATA(dn_url)
  console.log(dn_data)

    const dnCanvasEle: any = document.getElementById('dn_chart')
    const dnChar = new Chart(dnCanvasEle.getContext('2d'), {
      type: 'doughnut',
      data: {
        //labels: ["Current Hours","Remaining Hours"],
        datasets: [
          { 
            //data: [7.75,13.25], 
            data: [dn_data[0], dn_data[1]],
            backgroundColor: ["#009900","#70db70"],
            //backgroundColor: ['rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)'],
            //borderColor: ['rgb(75, 192, 192)','rgb(54, 162, 235)']

          },
        ]
      },
      options: {
        responsive: true,
      },
      plugins: [],
    });

    // Costs Doughnuts
    var costs_url = 'https://kami-nashi.com/st_test_data/dashboard_costs.php';
    var costs_data = getDATA(costs_url)
    console.log(costs_data)

    const dnCanvasEleCosts: any = document.getElementById('dn_costs')
    const dnCosts = new Chart(dnCanvasEleCosts.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            //coach time vs ice time
            backgroundColor: ["#3d86e8", "#d816e0"],
            data: [costs_data[0], costs_data[1]],
            label: 'Practice & Coach Costs',
            //labels: [ "Coaching Cost","Ice Time Cost"],
          }, {
            //equipment vs maintenance
            backgroundColor: ["#70db70", "#009900"],
            data: [costs_data[2], costs_data[3]],
            label: 'Costs of equipment and maintaining it',
            //labels: ["Equipment Cost","Maintenance Cost"],
          }, {
            //comp vs Performance vs tests vs membership
            backgroundColor: ["#ff7c43","#ffa55b","#febd72","#ffa00e"],
            data: [costs_data[4], costs_data[5], costs_data[6], costs_data[7]],
            label: 'Costs of fees associated with events',
            //labels: ["Competition Fees","Performance Fees", "Test Fees", "Membership Fees"],
          }, {
            //class fees vs camp fees
            backgroundColor: ["#00e0ff", "#0080a6"],
            data: [costs_data[8], costs_data[9]],
            label: 'Costs of group learning',
            //labels: ["Class Fees","Camp Fees"],
          },
        ]
      },
      options: {
        responsive: true,
      },
      plugins: [],
    });


    // Costs Doughnuts
    var prac_url = 'https://kami-nashi.com/st_test_data/dashboard_prac.php';
    var prac_data = getDATA(prac_url)
    console.log(prac_data)

    const dnCanvasElePrac: any = document.getElementById('dn_Prac')
    const dn_Prac = new Chart(dnCanvasElePrac.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            //coach time vs ice time
            backgroundColor: ["#3d86e8", "#d816e0"],
            data: [prac_data[0], prac_data[1]],
            label: 'Monthly Overview',
            //labels: [ "Yearly Practice","Yearly Coached"],
          }, {
            //time per month with and without a coach
            backgroundColor: ["#3d86e8", "#d816e0"],
            data: [prac_data[2], prac_data[3]],
            label: 'Yearly Overview',
            //labels: ["Monthly Practice","Monthly Coached"],
          },
        ]
      },
      options: {
        responsive: true,
      },
      plugins: [],
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
