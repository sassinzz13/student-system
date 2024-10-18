import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IdentificationInformationComponent } from './identification-information/identification-information.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AcademicInformationComponent } from './academic-information/academic-information.component';
import { EmergencyInformationComponent } from './emergency-information/emergency-information.component';
import { HealthInformationComponent } from './health-information/health-information.component';
import { FinancialInformationComponent } from './financial-information/financial-information.component';
import { ExtraInformationComponent } from './extra-information/extra-information.component';


export const routes: Routes = [
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'personal-identification', component: IdentificationInformationComponent },
  { path: 'academic-information', component: AcademicInformationComponent },
  { path: 'emergency-information', component: EmergencyInformationComponent },
  { path: 'health-information', component: HealthInformationComponent },
  { path: 'financial-information', component: FinancialInformationComponent },
  { path: 'extra-information', component: ExtraInformationComponent },

  
];
