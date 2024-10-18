import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PersonalInformationComponent, SidebarRightComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentSystem';
}
