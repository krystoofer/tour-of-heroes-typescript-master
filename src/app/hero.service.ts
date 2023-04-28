import { Injectable } from "@angular/core";
import Hero from "./types/hero.type";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  private heroes: Hero[] = [
    { id: 1, name: "Batman", superpower: "Batmobile" },
    { id: 2, name: "Superman", superpower: "Fly" },
    { id: 3, name: "Spiderman", superpower: "Web Shooter" },
  ];

  constructor() {}

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(id: number): Hero {
    return this.heroes.find((hero) => hero.id === id);
  }
}
