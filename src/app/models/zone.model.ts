export interface ResponseObject {
    viewId: number;
    policyId: number;
    zones: Zone[];
    sections: Section[];
    sectionsWithNetworkEntitiesCount: number;
}

export interface Zone {
    guid: string;
    name: string;
    complianceLevel: number;
    sections: Section[];
}

export interface Section {
    sectionId: number;
    sourceGuid: string;
    destinationGuid:string;
    complianceLevel: number;
    incomplianceLevel: number;
    violationsCount: number;
    hasMultipleSections: boolean;
    hasUncomputedResults: boolean;
    hasErrors: boolean;
}
