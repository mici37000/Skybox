import { Component } from '@angular/core';
import { HostService } from './services/host.service';
import { Zone } from './models/host.model';
import { faFileMedical, faBiohazard, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  zones: Zone[] = [];
  faFileMedical = faFileMedical;
  faBiohazard = faBiohazard;
  faEllipsisH = faEllipsisH;
  // sections: Section[] = [];
  // combinedData: any[] = [];

  constructor (private service: HostService) {}

  ngOnInit() {
    this.findAllHosts();
  }

  findAllHosts() {
    this.service.findAllUsers().subscribe(hosts => {
     this.zones = hosts.zones;
    //  this.sections = hosts.sections;

     this.zones.forEach((zone) => {
        zone.sections = [];
        hosts.sections.forEach((section, sectionIndex) => {
          if (sectionIndex < this.zones.length) {
            if (zone.guid === section.destinationGuid) {
              section.incomplianceLevel = 100 - section.complianceLevel;
              zone.sections.push(section);
            } else {
              zone.sections.push(null);
            }
          }
        });
     });

     console.log(this.zones);
    });
  }
}
