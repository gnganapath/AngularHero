import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartcombo',
  templateUrl: './chartcombo.component.html',
  styleUrls: ['./chartcombo.component.less']
})
export class ChartcomboComponent implements OnInit {

  public chartCat : string ='';
 
  data: {name: string, series: { name: string, value: number }[] }[];
  barColor = ['#a9ce97', '#a5b5de'];
  domain = [100, 1000];


  constructor() {
    this.data = [
      {
        name: 'Row1',
        series: [
          {name: 'Bar1', value: 150},
          {name: 'Bar2', value: 200}
        ],
      },
      {
        name: 'Row2',
        series: [
          {name: 'Bar1', value: 300},
          {name: 'Bar2', value: 400}
        ],
      },
      {
        name: 'Row3',
        series: [
          {name: 'Bar1', value: 500},
          {name: 'Bar2', value: 1000}
        ],
      }
    ];
   }

  ngOnInit(): void {
  }

  renderChart(event:any){
    this.chartCat = event.target.value;

    console.log(this.chartCat);
  }
}
