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
