import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainArticicleComponent } from './components/main-articicle/main-articicle.component';
import { MerchCardsComponent } from './components/merch-cards/merch-cards.component';
import { SubArticiclesComponent } from './components/sub-articicles/sub-articicles.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainArticicleComponent,
    MerchCardsComponent,
    SubArticiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
