import { Component } from '@angular/core';
import { ZoneService } from '../../services/zone.service';
import { Zone } from '../../models/zone.model';
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

  constructor (private service: ZoneService) {}

  ngOnInit() {
    this.getZones();
  }

  getZones() {
    this.service.getZones().subscribe(data => {
     this.zones = data.zones;
     this.zones.forEach((zone) => {
        zone.sections = [];
        data.sections.forEach((section, sectionIndex) => {
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
    });
  }
}
