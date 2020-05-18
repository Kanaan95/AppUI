import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TerminalComponent } from './terminal/terminal.component';
import { TweetsComponent } from './tweets/tweets.component';
import { CategoriesComponent } from './categories/categories.component'

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TweetsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
