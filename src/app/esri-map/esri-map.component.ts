import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements AfterViewInit {
  esriMap: Map | undefined;
  mapView: MapView | undefined;

  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef | undefined;
  constructor() { }

    const AddHomeWidget = async() => {
   let homeWidget = new Home({view:  this.mapView});
    this.mapView.ui.add(homeWidget, "top-left");
  }
    
  initMap = async () => {
    this.esriMap = new Map({
      basemap: 'streets'
    })
    const mapViewProperties = {
      container: this.mapViewEl?.nativeElement,
      center: [0.1278, 51.5074],
      zoom: 8,
      map: this.esriMap
    };

    this.mapView = new MapView(mapViewProperties);

    await this.mapView.when(); 
    await this.AddHomeWidget();
  }
  


  ngAfterViewInit(): void {
    this.initMap();
  }

}
