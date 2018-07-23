import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-live-chart',
  templateUrl: './live-chart.component.html',
  styleUrls: ['./live-chart.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class LiveChartComponent implements OnInit{
  ngOnInit(): void {
    setInterval(() => this.randomize(), 25)
  }
  // lineChart
  public lineChartData:Array<any> = [
    {data: [50], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['1'];
  public lineChartOptions:any = {
    responsive: true,
     animation: false,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride: true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps: 10,
    //Number - The value jump in the hard coded scale
    scaleStepWidth: 10,
    //Number - The scale starting value
    scaleStartValue: 0,
    pointRadius: 0
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = [...this.lineChartData];
    if(_lineChartData[0].data.length >=100) {
      _lineChartData[0].data = _lineChartData[0].data.slice(1);
      this.lineChartLabels = this.lineChartLabels.slice(1);
    }
    let s = 1;
    if(Math.random() > 0.5) {
      s = -1;
    }
    _lineChartData[0].data.push(this.lineChartData[0].data[this.lineChartData[0].data.length-1] + 2*s);
    this.lineChartLabels.push(Date.now()/1000);
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
}
