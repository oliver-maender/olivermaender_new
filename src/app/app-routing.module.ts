import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
  { path: 'contact-success', component: ContactSuccessComponent },
  { path: '', component: StartPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
