import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarRightComponent } from '../sidebar-right/sidebar-right.component';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, SidebarComponent, SidebarRightComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {

}
