import { Section } from './section.model';

export interface Zone {
    guid: string;
    name: string;
    complianceLevel: number;
    sections: Section[];
}
