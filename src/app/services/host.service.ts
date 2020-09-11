import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';
import { ResponseObject } from '../models/host.model';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private http: HttpClient) { }

  findAllUsers() {
    return this.http.get<ResponseObject>(`${Config.restApiUrl}zones.json`)
      .pipe(
          map(resposneData => {
              return resposneData;
          })
      );
  }
}
