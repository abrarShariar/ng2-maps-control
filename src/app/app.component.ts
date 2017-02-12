import { Component, OnInit, DoCheck } from '@angular/core';
import { MapComponent } from './components/MapComponent/map.component';

import { Router } from '@angular/router';

/*
* using this component like an app shell for routing
*/
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
	title = 'Angular 2 google maps control';
	home = true;
	constructor(private _router:Router){
		
	}

	ngOnInit(){
		
	}

	ngDoCheck(){
		if(this._router.url != '/'){
			this.home = false;
		}
	}
}
