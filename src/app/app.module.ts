import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PinchZoomComponent } from "./pinch-zoom/pinch-zoom.component";
import { HighchartsChartModule } from "highcharts-angular";
@NgModule({
  imports: [BrowserModule, FormsModule, HighchartsChartModule],
  declarations: [AppComponent, PinchZoomComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
