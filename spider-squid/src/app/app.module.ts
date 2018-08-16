import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { RetrieveComponent } from './components/retrieve/retrieve.component';

import { CreateService } from './services/create.service';
import { RetrieveService } from './services/retrieve.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    RetrieveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CreateService, RetrieveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
