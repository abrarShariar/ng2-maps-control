import { Component, OnChanges } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';
/*
*	Show a default map with attributes set
*/
@Component({
	selector: 'ng2-map',
	styleUrls: ['./map.component.css'],
	templateUrl: './map.component.html'
})
export class MapComponent implements OnChanges{
	// lat and long of Dhaka
	lat: number = 23.8103;
	lng: number = 90.4125;
	zoom: number = 10;

	ngOnChanges() {

	}

	mapClicked(){
		// alert('Map Clicked' );
	}



} 	