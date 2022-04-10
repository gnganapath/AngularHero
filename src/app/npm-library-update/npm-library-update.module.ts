import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpmLibraryUpdateRoutingModule } from './npm-library-update-routing.module';
import { NpmLibraryUpdateComponent } from './npm-library-update.component';
import { D3chartComponent } from './d3chart/d3chart.component';
import { NgxChartComponent } from './ngx-chart/ngx-chart.component';
import { HighchartComponent } from './highchart/highchart.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { MatUiComponent } from './mat-ui/mat-ui.component';
import { ChartcomboComponent } from './chartcombo/chartcombo.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    NpmLibraryUpdateComponent,
    D3chartComponent,
    NgxChartComponent,
    HighchartComponent,
    AgGridComponent,
    MatUiComponent,
    ChartcomboComponent,
    //HighchartsChartComponent
  ],
  imports: [
    CommonModule,
    NpmLibraryUpdateRoutingModule,
    HighchartsChartModule
  ]
})
export class NpmLibraryUpdateModule { }
