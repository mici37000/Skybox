import { Zone } from './zone.model';
import { Section } from './section.model';

export interface ResponseObject {
    viewId: number;
    policyId: number;
    zones: Zone[];
    sections: Section[];
    sectionsWithNetworkEntitiesCount: number;
}
