import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CenovnikService {

  private url = "http://localhost:9000";

  constructor(private http : Http) { }

  saveCenovnik(cenovnik: any) {
    return this.http.post(this.url + "/cenovnik/save", cenovnik).map(res=>res.json());
  }

  updateCenovnik(cenovnik: any, id: number) {
    cenovnik.id = id;
    return this.http.post(this.url + "/cenovnik/save", cenovnik).map(res=>res.json());
  }

  getCenovnik(id) {
    return this.http.get(this.url + "/cenovnik/get/" + id).map(res=>res.json());
  }

  allCenovnik() {
    return this.http.get(this.url + "/cenovnik/get/svi").map(res=>res.json());
  }

  deleteCenovnik(cenovnik: any) {
    return this.http.post(this.url + "/cenovnik/obrisi", cenovnik).map(res=>res.json());
  }


}