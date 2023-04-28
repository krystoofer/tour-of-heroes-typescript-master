import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { HeroEditComponent } from "./hero-edit/hero-edit.component";
const routes: Routes = [
  {
    path: "",
    component: HeroesListComponent,
  },
  {
    path: "edit/:id",
    component: HeroEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
