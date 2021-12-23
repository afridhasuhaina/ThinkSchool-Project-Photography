import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { NatureComponent } from './nature/nature.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UsersComponent } from './users/users.component';
import { WildlifeComponent } from './wildlife/wildlife.component';


const routes: Routes = [
  {path: '', redirectTo:'posts', pathMatch:'full'},
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'portfolio', component:PortfolioComponent },
  { path:'portfolio/:id', component:PortfolioPageComponent},
  { path:'wildlife', component:WildlifeComponent },
  { path:'nature', component:NatureComponent },
  { path:'landscape', component:LandscapeComponent },
  { path:'contact', component:ContactComponent },
  { path:'user', component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
