// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; justify-content: center;">
      <canvas baseChart
              [data]="pieChartData"
              [labels]="pieChartLabels"
              [chartType]="pieChartType"></canvas>
    </div>
  `,
  styles: [`
    canvas {
      width: 80%;
      height: 80%;
    }
  `]
})
export class AppComponent {
  public pieChartLabels = ['Web Design', 'Web Development', 'E-Commerce', 'SEO', 'Social Media', 'Content Marketing', 'Email Marketing', 'PPC Advertising', 'Copywriting', 'UX/UI'];
  public pieChartData = [30, 20, 15, 10, 8, 6, 5, 4, 3, 2];
  public pieChartType = 'pie';
}
