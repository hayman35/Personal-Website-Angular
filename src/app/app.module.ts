import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TerminalComponent } from './component/terminal/terminal.component';
import { LinksbuttonComponent } from './component/linksbutton/linksbutton.component';
import { HomepageComponent } from './component/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TerminalComponent,
    LinksbuttonComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
