import { Component, OnInit } from "@angular/core";
import Hero from "../types/hero.type";
@Component({
  selector: "app-heroes-list",
  templateUrl: "./heroes-list.component.html",
  styleUrls: ["./heroes-list.component.css"],
})
export class HeroesListComponent implements OnInit {
  heroes = [
    { id: 1, name: "Batman", superpower: "Batmobile" },
    {
      id: 2,
      name: "Superman",
      superpower: "Fly",
      citation: "le New York Times est toujours à la recherche de sources",
    },
    {
      id: 3,
      name: "Spiderman",
      superpower: "Web Shooter",
      citation:
        "Le guerrier rusé ne s'attaque ni au corps, ni à l'esprit mais au cœur.",
    },
  ];
  selectedHero: Hero;

  constructor() {}

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  ngOnInit() {}
}
