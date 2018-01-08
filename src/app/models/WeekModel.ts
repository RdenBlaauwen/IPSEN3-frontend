import { DayModel } from './DayModel';
export class WeekModel {
    // private inactiveDays = [];
    constructor(
        public beginDate?: Date,
        public endDate?: Date,
        public dayModels?: DayModel[]
    ) {}
}
