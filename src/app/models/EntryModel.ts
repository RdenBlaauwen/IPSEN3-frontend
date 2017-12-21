export class EntryModel {
    constructor(
        public entryId?: number,
        public entryDescription?: string,
        public entryStatus?: string,
        public entryDate?: string,
        public entryStartTime?: string,
        public entryEndTime?: string,
        public entryIsLocked?: boolean,
        public employeeFk?: number,
        public entryProjectFk?: number,
        public entryProjectName?: String,
        public entrySprintFk?: number,
        public entrySprintName?: String,
        public entryUserstoryFk?: number,
        public entryUserstoryName?: String,
        public isDeleted?: boolean,
        public isCurrent?: true,
        public entryEmployeeName?: String)
    {}
}