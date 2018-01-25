
import {Time, TimeUnit, Direction} from '../helpers/time';

export class EntryModel {
    // isVisible = true;
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
        public entryProjectName?: string,
        public entrySprintFk?: number,
        public entrySprintName?: string,
        public entryUserstoryFk?: number,
        public entryUserstoryName?: string,
        public isDeleted?: boolean,
        public isCurrent?: true,
        public entryEmployeeName?: string) {
        }
        public changeStatus($event){
            switch($event.value){
                case 0:
                    this.entryStatus='rejected';
                    break;
                case 1:
                    this.entryStatus='queued';
                    break;
                case 2:
                    this.entryStatus='approved';
                    break;
            }
        }
}
