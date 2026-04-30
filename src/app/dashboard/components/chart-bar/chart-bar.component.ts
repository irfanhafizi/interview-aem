import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartBarItem } from 'src/app/core/models/dashboard.model';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnChanges {

  @Input() data: ChartBarItem[] = [];
  @ViewChild('chartBar', { static: true }) chartEl!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('test', changes['data']);
    if (changes['data'] && this.data.length) {
      this.renderChart();
    }
  }

  renderChart(): void {
    const trace = {
      type: 'bar' as const,
      x: this.data.map(d => d.name),
      y: this.data.map(d => d.value),
      width: 0.3,
    };

    const layout = {
      margin: { t: 10, b: 40, l: 40, r: 10 },
    };

    Plotly.newPlot(this.chartEl.nativeElement, [trace], layout, { responsive: true, displayModeBar: false });
  }

}
