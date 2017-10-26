import { Component, Injector, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'valhalla-datepicker',
	templateUrl: './valhalla-datepicker.component.html',
	styleUrls: ['./valhalla-datepicker.component.scss'],
	encapsulation: ViewEncapsulation.None// required by @progress https://www.telerik.com/kendo-angular-ui/components/styling/
})
export class ValhallaDatepickerComponent {

	@Input()
	get value() {
		return this.val;
	}
	set value(newValue) {
		this.val = newValue;
		this.valueChange.emit(newValue);
	}

	val: Date;

	@Output()
	valueChange: EventEmitter<Date> = new EventEmitter();

	@Input()
	disabled: boolean = false;
}