import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './home/components/showcase/showcase.component';
import { LatestAuctionsComponent } from './home/components/latest-auctions/latest-auctions.component';
import { HeaderComponent } from './shared/header/header.component';
import { PrimaryBtnComponent } from './shared/primary-btn/primary-btn.component';
import { SecondaryBtnComponent } from './shared/secondary-btn/secondary-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowcaseComponent,
    LatestAuctionsComponent,
    HeaderComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
