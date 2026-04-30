import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartDonutItem } from 'src/app/core/models/dashboard.model';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.scss']
})
export class ChartDonutComponent implements OnChanges {

  @Input() data: ChartDonutItem[] = [];
  @ViewChild('chartDonut', { static: true }) chartEl!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length) {
      this.renderChart();
    }
  }

  renderChart(): void {
    const trace = {
      type: 'pie' as const,
      labels: this.data.map(d => d.name),
      values: this.data.map(d => d.value),
      textinfo: 'none' as const,
    };

    const layout = {
      margin: { t: 10, b: 10, l: 10, r: 10 },
      height: 300,
      showlegend: false,
    };

    Plotly.newPlot(this.chartEl.nativeElement, [trace], layout, { responsive: true, displayModeBar: false });
  }
}
