import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Routers, Features } from '@constants'
import { Hero } from '@models/hero';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class HeroEditComponent {

  heroForm: FormGroup = new FormGroup({})
  heroExists: Hero | undefined
  loading: boolean = true
  router_paths = Routers

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.apiService.get_hero_id(params['idHero'])
        .subscribe(
          hero => {
            this.heroExists = hero
            console.log(params, hero)
            if (this.heroExists instanceof Hero)
              this.loadHeroForm()
            else
              this.initializeHeroForm()

          }
        )
    })
  }

  private initializeHeroForm(): void {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
    this.loading = false;
  }
  private loadHeroForm(): void {
    console.log(this)
    this.heroForm = this.formBuilder.group({
      idHero: [this.heroExists?.idHero, Validators.required],
      name: [this.heroExists?.name, Validators.required]
    })
    this.loading = false;
  }

  public save(): void {
    if (this.heroForm.valid) {
      if (this.heroForm.controls['idHero'] && this.heroExists instanceof Hero) {
        this.apiService.update_hero(this.heroExists)
      }
      else if (!this.heroExists) {
        console.log(this.heroForm.value)
        //this.apiService.create_hero(this.heroForm.controls)
      }
    }
  }

  public cancel(): void {
    this.heroExists ? this.snackbar.open('Se ha cancelado la operacion de edicion.') : this.snackbar.open('No se ha creado ningun heroe.')
    this.router.navigateByUrl(Routers.HEROES + '/' + Features.LIST)
  }

  ngOnDestroy() { }
}
