import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainArticicleComponent } from './components/main-articicle/main-articicle.component';
import { MerchCardsComponent } from './components/merch-cards/merch-cards.component';
import { SubArticiclesComponent } from './components/sub-articicles/sub-articicles.component';
import { HomeComponent } from './pages/home/home.component';
import { SmallCardsComponent } from './components/small-cards/small-cards.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainArticicleComponent,
    MerchCardsComponent,
    SubArticiclesComponent,
    HomeComponent,
    SmallCardsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
