import {WeekModel} from '../models/WeekModel';
import { EntryModel } from '../models/EntryModel';
import { DayModel } from '../models/DayModel';
import { Searcher } from './searcher';
export class WeekFilter{
    public entryData: EntryModel[];

    private idArg: number;
    private descriptionArg: string;
    private statusArg: string;
    private dateArg: string;
    private startTimeArg: string;
    private EndTimeArg: string;
    private isLockedArg: boolean;
    private projectNameArg: string;
    private sprintNameArg: string;
    private userStoryNameArg: string;
    private isDeletedArg: boolean;
    private isCurrentArg: boolean;
    private employeeNameArg: string;

    constructor(private weekModel: WeekModel){
        this.fillTable();
    }
    private fillTable(): void{
        this.entryData = new Array<EntryModel>();
        for (let day of this.weekModel.dayModels){
            for(let entry of day.entryModels){
                this.entryData.push(entry);
            }
        }
    }
    public filterTable(): void{
        let searcher = new Searcher();
        this.entryData = new Array<EntryModel>();
        for (let day of this.weekModel.dayModels){
            for(let entry of day.entryModels){
                let hasId = searcher.hasInt(entry.entryId,this.idArg);
                let hasDescription = searcher.hasString(entry.entryDescription,this.descriptionArg);
                let hasStatus = searcher.hasString(entry.entryStatus,this.statusArg);
                let hasDate = searcher.hasString(entry.entryDate,this.dateArg);
                let hasStartTime = searcher.hasString(entry.entryStartTime,this.startTimeArg);
                let hasEndTime = searcher.hasString(entry.entryEndTime,this.EndTimeArg);
                let isLocked = entry.entryIsLocked==this.isLockedArg;
                let hasProjectName = searcher.hasString(entry.entryProjectName,this.projectNameArg);
                let hasSprintName = searcher.hasString(entry.entrySprintName,this.sprintNameArg);
                let hasUserStoryName = searcher.hasString(entry.entryUserstoryName,this.userStoryNameArg);
                let isDeleted = entry.isDeleted==this.isDeletedArg;
                let isCurrent = entry.isCurrent==this.isCurrentArg;
                let hasEmployee = searcher.hasString(entry.entryEmployeeName,this.employeeNameArg);
                if(hasId&&hasDescription&&hasStatus&&hasDate
                &&hasStartTime&&hasEndTime&&isLocked&&hasProjectName
                &&hasSprintName&&hasUserStoryName&&isDeleted
                &&isCurrent&&hasEmployee){
                    this.entryData.push(entry);
                }
                
            }
        }
    }
}