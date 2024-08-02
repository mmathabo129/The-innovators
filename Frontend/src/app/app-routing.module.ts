import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewAllClaimsComponent } from './components/view-all-claims/view-all-claims.component';
import { FlaggedClaimsComponent } from './components/flagged-claims/flagged-claims.component';
import { InvestigationStatusComponent } from './components/investigation-status/investigation-status.component';
import { ChatWithAiComponent } from './components/chat-with-ai/chat-with-ai.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path:'claims', component: ViewAllClaimsComponent},
  {path: 'flagged', component: FlaggedClaimsComponent},
  {path: 'status', component: InvestigationStatusComponent},
  {path: 'chat', component: ChatWithAiComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
