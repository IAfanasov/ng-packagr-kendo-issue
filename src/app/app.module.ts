import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ValhallaDatepickerModule } from './valhalla-datepicker/valhalla-datepicker.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ValhallaDatepickerModule,
		NoopAnimationsModule
	],
	exports: [
		ValhallaDatepickerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
