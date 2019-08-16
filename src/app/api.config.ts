import {  HttpHeaders } from '@angular/common/http';

export const api = 'http://localhost:3000';

export const httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type':  'application/json',
    })
  };
