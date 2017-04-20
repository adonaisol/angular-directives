import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UnorderedListComponent } from './unordered-list.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MyColorDirective } from './my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnorderedListComponent,
    UpperDirective,
    MyvisibilityDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    UpperDirective
  ]
})
export class AppModule { }
