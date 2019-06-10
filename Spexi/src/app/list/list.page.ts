import { Component, OnInit } from '@angular/core';

import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

import { GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;


  constructor(public geolocaion: Geolocation, private googleMaps: GoogleMaps) {}

  ngOnInit() {
  }

ngAfterViewInit(){
  this.geolocationNative();
}

  geolocationNative(){
    this.geolocaion.getCurrentPosition().then((geposition: Geoposition)=> {
      console.log(geposition);
      this.loadMap(geposition);
    })
  }
  loadMap(position){
    let map: GoogleMap = this.googleMaps.create('map');
    let latlng = new LatLng(position.coords.latitude, position.coords.longitude);
    
    map.one(GoogleMapsEvent.MAP_READY).then(()=>{
        let position: CameraPosition<LatLng> = {
            target: latlng,
            zoom: 18,
            tilt: 30
        };
        map.moveCamera(position);
        let markerOptions: MarkerOptions = {
            position: latlng,
            title: 'Su paquete'
        };
        let marker= map.addMarker(markerOptions).then((marker:Marker)=> {
            marker.showInfoWindow();
        });
    })
}

}
