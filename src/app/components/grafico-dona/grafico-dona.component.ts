import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: ChartType = '';

  constructor() { }

  ngOnInit() {
  }

}