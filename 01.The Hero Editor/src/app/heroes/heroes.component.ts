import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  //Refactor the component's hero property to be of type Hero.
  heroClass: Hero = {
    id: 1,
    name: 'mamta'
  }
  constructor() { }

  ngOnInit() {
  }

}
