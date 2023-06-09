import { Character } from './../interfaces/character.interface';
import { Component, EventEmitter,Output } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {


  constructor(public dbzService: DbzService ) {


   }




}
