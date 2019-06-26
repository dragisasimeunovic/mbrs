import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StavkaCenovnikaService } from '../stavka-cenovnika/stavka-cenovnika.service';

@Component({
  selector: 'app-stavka-cenovnika',
  templateUrl: './stavka-cenovnika.component.html',
  styleUrls: ['./stavka-cenovnika.component.css']
})
export class StavkaCenovnikaComponent implements OnInit {

  stavkaCenovnikaForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private stavkaCenovnikaService: StavkaCenovnikaService) { }

  ngOnInit() {

    this.stavkaCenovnikaForm = new FormGroup({
       
       id: new FormControl('', [Validators.required]),
        
       naziv: new FormControl('', [Validators.required]),
        
       cena: new FormControl('', [Validators.required]),
       
    })

  }

  save() {
    this.stavkaCenovnikaService.saveStavkaCenovnika(this.stavkaCenovnikaForm.value).subscribe(data=>{
      this.router.navigate(['/allStavkaCenovnika']);
    })
  }

}