import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/components/home/home.component';
import { AboutComponent } from './pages/components/about/about.component';
import { GalleryComponent } from './pages/components/gallery/gallery.component';
import { TestimonialsComponent } from './pages/components/testimonials/testimonials.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { VideoComponent } from './pages/components/video/video.component';
import { BooksComponent } from './pages/components/books/books.component';
import { DueloComponent } from './pages/components/duelo/duelo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    VideoComponent,
    BooksComponent,
    DueloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
