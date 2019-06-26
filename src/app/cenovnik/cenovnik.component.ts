import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CenovnikService } from '../cenovnik/cenovnik.service';

@Component({
  selector: 'app-cenovnik',
  templateUrl: './cenovnik.component.html',
  styleUrls: ['./cenovnik.component.css']
})
export class CenovnikComponent implements OnInit {

  cenovnikForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private cenovnikService: CenovnikService) { }

  ngOnInit() {

    this.cenovnikForm = new FormGroup({
       
       id: new FormControl(null),
        
       naziv: new FormControl('', [Validators.required]),
       
    })

  }

  save() {
    this.cenovnikService.saveCenovnik(this.cenovnikForm.value).subscribe(data=>{
      this.router.navigate(['/allCenovnik']);
    })
  }

}