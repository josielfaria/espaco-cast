import { Component } from '@angular/core';
import { MarkersMapsModel } from 'src/app/models/markers-maps.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

  // google maps zoom level
  zoom: number = 19;

  // initial center position for the map
  lat: number = -15.878615;
  lng: number = -48.020179;

  markers: any[] = [
    {
      lat: -15.878615,
      lng: -48.020179,
      label: '',
      draggable: false
    }
  ]

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: any) {
    console.log('$event', $event)
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: MarkersMapsModel, $event: any) {
    console.log('dragEnd', m, $event);
  }

}
