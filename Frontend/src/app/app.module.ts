import { NgModule, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { CustomSideNavComponent } from './components/custom-side-nav/custom-side-nav.component';
import { MatListModule } from '@angular/material/list';
import { ViewAllClaimsComponent } from './components/view-all-claims/view-all-claims.component';
import { FlaggedClaimsComponent } from './components/flagged-claims/flagged-claims.component';
import { InvestigationStatusComponent } from './components/investigation-status/investigation-status.component';
import { ChatWithAiComponent } from './components/chat-with-ai/chat-with-ai.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartModule } from 'primeng/chart';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    CustomSideNavComponent,
    ViewAllClaimsComponent,
    FlaggedClaimsComponent,
    InvestigationStatusComponent,
    ChatWithAiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    ChartModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
