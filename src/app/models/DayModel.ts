import { EntryModel } from './EntryModel';

/**
 * @author Robert
 */
export class DayModel {
    private inactiveEntries = [];
    constructor(
        public date?: Date,
        public entryModels?: EntryModel[]
    ) {}

    /**
     * filter zodat de klant door gegevens kan zoeken.
     * 
     * @author Robert
     */
    public filter(description: string, status: string, 
                date: Date, startTime: string, endTime: string, 
                isLocked: boolean, projectName: string, 
                sprintName: string, userstoryName: string, 
                isDeleted: boolean, isCurrent: boolean, employeeName: string) {
        console.log('DayModel: filter!');
    }
}
