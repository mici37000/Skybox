import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';
import { ResponseObject } from '../models/zone.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) { }

  getZones() {
    return this.http.get<ResponseObject>(`${Config.restApiUrl}zones.json`)
  }
}
