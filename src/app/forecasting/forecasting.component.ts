import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChartData } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';


import { NgChartsModule,} from 'ng2-charts';


@Component({
  selector: 'app-forecasting',
  templateUrl: './forecasting.component.html',
  styleUrls: ['./forecasting.component.css']
})
export class ForecastingComponent implements OnInit {
  type:any
  value:any
  postdata:any
  chart :any =[]
  result : any 

  constructor(private http: HttpClient) { 
    Chart.register(...registerables); 

  }
  
  onvalueselected(){
    console.log(this.type)
    console.log(this.value)
    this. postdata={
       period:this.type,
       target:this.value
    };

  }

  onpredicit(){
   
   
    const fd = new FormData()
    fd.append('freq',this.postdata.period);
    fd.append('period',this.postdata.target);
 
     this.http.post("http://localhost:3000/forecast",fd).subscribe((res:any)=>{
     console.log(res);
     const list_date = Array.from(Object.values(res.Date));
     const list_sales = Array.from(Object.values(res.Sales));
    
     this.chart.data.datasets[0].data = list_sales;
     this.chart.data.labels = list_date ;
     this.chart.update();


   });
     
     }



  ngOnInit(): void {
    


        //line chart 
          const lineCanvasEle: any = document.getElementById('line_chart')
          this.chart = new Chart('line_chart', {
          type: 'line',
            data: {
              labels: ['2019-09-30', '2019-10-01', '2019-10-02', '2019-10-03', '2019-10-04', '2019-10-05', '2019-10-06', '2019-10-07', '2019-10-08', '2019-10-09'],
              datasets: [
                { data: [3.210952826486618, 2.7858718855302484, 3.686199507562985,            2.686527129595722,            4.6868547516284593,            3.687182373661196,            1.687509995693933,            4.68783761772667,            5.6881652397594067,            6.6884928617921435        ],
                   label: 'Forecast Projection', 
                   borderColor: 'rgba(54, 162, 235)' },
    
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
      //  Bar chart
      //     const barCanvasEle: any = document.getElementById('bar_chart')
      //     const barChart = new Chart(barCanvasEle.getContext('2d'), {
      //       type: 'bar',
      //         data: {
      //           labels: ["one", "two", "three","four","five","six"],
      //           datasets: [{
      //             label: 'Sales',
      //             data: [1,2,5,6,6,7],
      //             backgroundColor: [
      //               'rgba(255, 99, 132, 0.2)',
      //               'rgba(255, 159, 64, 0.2)',
      //               'rgba(255, 205, 86, 0.2)',
      //               'rgba(75, 192, 192, 0.2)',
      //               'rgba(54, 162, 235, 0.2)',
      //               'rgba(153, 102, 255, 0.2)',
      //               'rgba(201, 203, 207, 0.2)'
      //             ],
      //             borderColor: [
      //               'rgb(255, 99, 132)',
      //               'rgb(255, 159, 64)',
      //               'rgb(255, 205, 86)',
      //               'rgb(75, 192, 192)',
      //               'rgb(54, 162, 235)',
      //               'rgb(153, 102, 255)',
      //               'rgb(201, 203, 207)'
      //             ],
      //             borderWidth: 1
      //           }]
      //         },
      //         options: {
      //           responsive: true,
      //           scales: {
      //               y: {
      //                   beginAtZero: true
      //               }
      //           }
      //         }
      //       });
    

    
  }

}
