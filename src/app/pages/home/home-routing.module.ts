import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

const homeRoutes: Routes = [
    { path: 'home', component: HomeComponent }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }