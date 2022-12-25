import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CertificateComponent } from './Components/certificate/certificate.component';
import { RouterModule } from '@angular/router';
import { ResumeComponent } from './Components/resume/resume.component';
import { MemoryComponent } from './Components/memory/memory.component';
import { ProjectComponent } from './Components/project/project.component';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { PersonaldocComponent } from './Personalcomponents/personaldoc/personaldoc.component';
import { ProtfolioComponent } from './Components/protfolio/protfolio.component';
import { PagenotfoundComponent } from './datanotfound/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CertificateComponent,
    ResumeComponent,
    MemoryComponent,
    ProjectComponent,
    AboutmeComponent,
    PersonaldocComponent,
    ProtfolioComponent,
    PagenotfoundComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
