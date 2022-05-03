import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

getBlueprintItems() {
  return this.http.get('http://localhost:3000/blueprint/items');
}

}
