import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vilains-list",
  templateUrl: "./vilains-list.component.html",
  styleUrls: ["./vilains-list.component.css"],
})
export class VilainsListComponent implements OnInit {
  vilains = [
    { id: 1, name: "Mister Freeze", superpower: "Freeze" },
    { id: 2, name: "Lex Luthor", superpower: "Rich" },
    { id: 3, name: "Scorpio", superpower: "Poison" },
  ];
  constructor() {}

  ngOnInit() {}
}
