import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StavkaCenovnikaService {

  private url = "http://localhost:9000";

  constructor(private http : Http) { }

  saveStavkaCenovnika(stavkaCenovnika: any) {
    return this.http.post(this.url + "/stavkacenovnika/save", stavkaCenovnika).map(res=>res.json());
  }

  updateStavkaCenovnika(stavkaCenovnika: any, id: number) {
    stavkaCenovnika.id = id;
    return this.http.post(this.url + "/stavkacenovnika/save", stavkaCenovnika).map(res=>res.json());
  }

  getStavkaCenovnika(id) {
    return this.http.get(this.url + "/stavkacenovnika/get/" + id).map(res=>res.json());
  }

  allStavkaCenovnika() {
    return this.http.get(this.url + "/stavkacenovnika/get/svi").map(res=>res.json());
  }

  deleteStavkaCenovnika(stavkaCenovnika: any) {
    return this.http.post(this.url + "/stavkacenovnika/obrisi", stavkaCenovnika).map(res=>res.json());
  }


}