import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { ValhallaDatepickerComponent } from './valhalla-datepicker.component';

@NgModule({
	imports: [
		CommonModule,
		DateInputsModule
	],
	exports: [
		ValhallaDatepickerComponent
	],
	declarations: [ValhallaDatepickerComponent]
})
export class ValhallaDatepickerModule { }
