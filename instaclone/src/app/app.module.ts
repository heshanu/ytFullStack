import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule } from './shared/ngprime/ngprime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { BookCardComponent } from './module/book/comp/book-card/book-card.component';
import { MenuComponent } from './module/book/comp/menu/menu.component';
import { RatingComponent } from './module/book/comp/rating/rating.component';
import { BookModule } from './module/book/book.module';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    MenuComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgPrimeModule,
    BookModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
