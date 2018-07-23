import {createCustomElement} from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { LiveChartComponent } from './live-chart/live-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    LiveChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule 
  ],
  providers: [],
  entryComponents: [LiveChartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(LiveChartComponent, { injector });
    customElements.define('live-chart', customButton);
  }

  ngDoBootstrap() { }
}
