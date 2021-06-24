import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GalleryComponent } from './pages/components/gallery/gallery.component';
import { HomeComponent } from './pages/components/home/home.component';
import { TestimonialsComponent } from './pages/components/testimonials/testimonials.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { AboutComponent } from './pages/components/about/about.component';
import { VideoComponent } from './pages/components/video/video.component';
import { BooksComponent } from './pages/components/books/books.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'video', component: VideoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'books', component: BooksComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
