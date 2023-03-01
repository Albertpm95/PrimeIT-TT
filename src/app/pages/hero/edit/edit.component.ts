import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Routers, Features } from '@constants'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class HeroEditComponent {

  heroForm: FormGroup = new FormGroup({})
  router_paths = Routers

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    console.log('Edit!', this.router)
  }
}
