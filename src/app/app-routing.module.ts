import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { Card1PageComponent } from './card1-page/card1-page.component';
import { Card2PageComponent } from './card2-page/card2-page.component';
import { Card3PageComponent } from './card3-page/card3-page.component';
import { Card4PageComponent } from './card4-page/card4-page.component';
import { CartComponent } from './pages/cart/cart.component';



const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'card1', component: Card1PageComponent },
  { path: 'card2', component: Card2PageComponent },
  { path: 'card3', component: Card3PageComponent },
  { path: 'card4', component: Card4PageComponent },
  {path : 'profile', component: ProfileComponent},
  { path: 'cart', component: CartComponent }


  {path : '**', component: HomeComponent},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
