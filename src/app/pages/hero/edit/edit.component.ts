import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private activatedRouter: ActivatedRoute, private router: Router, private snackbar: MatSnackBar, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    const idHero = this.activatedRouter.snapshot.params['idHero']
    if (idHero) {
      this.apiService.get_hero_id(idHero).subscribe(hero => {
        if (hero) {
          this.heroExists = hero
          this.loadHeroForm()
        }
        else
          this.initializeHeroForm()
      })
    }
    else {
      this.initializeHeroForm()
    }
  }

  private initializeHeroForm(): void {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
    this.loading = false;
  }
  private loadHeroForm(): void {
    this.heroForm = this.formBuilder.group({
      idHero: [this.heroExists?.idHero, Validators.required],
      name: [this.heroExists?.name, Validators.required]
    })
    this.loading = false;
  }

  public save(): void {
    if (this.heroForm.valid) {
      if (this.heroForm.controls['idHero'] && this.heroExists) {
        let hero: Hero = new Hero(this.heroForm.value.name, this.heroForm.value.idHero)
        this.apiService.update_hero(hero)
      }
      else if (!this.heroExists) {
        let hero: Hero = new Hero(this.heroForm.value.name)
        this.apiService.create_hero(hero)
      }
    }
    this.router.navigateByUrl(Routers.HEROES + '/' + Features.LIST)
  }

  public cancel(): void {
    this.heroExists ? this.snackbar.open('The edit operation has ben canceled.') : this.snackbar.open('Hero creation canceled.')
    this.router.navigateByUrl(Routers.HEROES + '/' + Features.LIST)
  }

  ngOnDestroy() { }
}
