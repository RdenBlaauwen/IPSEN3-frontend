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
        public entrySprintFk?: number,
        public entryUserstoryFk?: number,
        public isDeleted?: boolean,
        public isCurrent?: true)
    {}
}