import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ExploreComponent } from "./explore/explore.component";
import { FqaComponent } from "./fqa/fqa.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { TermComponent } from "./term/term.component";

const appRoutes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'explore', component: ExploreComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contacts', component: ContactusComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'fqa', component: FqaComponent},
    {path: 'terms', component:TermComponent},
    {path: 'aboutus', component:AboutusComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}