import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../services/zone.service';
import { Zone } from '../../models/zone.model';
import { Section } from '../../models/section.model';
import { faFileMedical, faBiohazard, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
      const dest = this.zones.map(z => {
        return { "destinationGuid": z.guid };
      }) as Section[];
      this.zones.map(z => z.sections = Object.assign([], dest));

      this.zones.forEach(zone => {
          zone.sections.forEach((section, i, arr) => {
            const match = data.sections.find(s =>
              s.sourceGuid === zone.guid && s.destinationGuid === section.destinationGuid);

            if (match) {
              match.incomplianceLevel = 100 - match.complianceLevel;
            }
            
            arr[i] = match;
          });
      });
    });
  }
}
