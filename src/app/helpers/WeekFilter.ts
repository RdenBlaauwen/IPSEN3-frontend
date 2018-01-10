import {WeekModel} from '../models/WeekModel';
import { EntryModel } from '../models/EntryModel';
import { DayModel } from '../models/DayModel';
import { Searcher } from './searcher';
import {MatDatepickerModule} from '@angular/material/datepicker';
export class WeekFilter{
    public entryData: EntryModel[];

    private _idArg: number;
    private _descriptionArg: string;
    private _statusArg: string;
    private _dateArg: string;
    private _startTimeArg: string;
    private _EndTimeArg: string;
    private _isLockedArg = false;
    private _projectNameArg: string;
    private _sprintNameArg: string;
    private _userStoryNameArg: string;
    private _isDeletedArg = false;
    private _isCurrentArg = true;
    private _employeeNameArg: string;

    public set idArg(id: number){
        this._idArg=id;
        this.filterTable();
    }
    public set descriptionArg(description: string){
        console.log('set description arg: '+description);
        this._descriptionArg=description;
        this.filterTable();
    }
    public set statusArg(status: string){
        this._statusArg=status;
        this.filterTable();
    }
    public set dateArg(date: string){
        console.log('dateArg: '+date);
        this._dateArg=date;
        this.filterTable();
    }
    // public set dateArgFromDate(date: EventEmitter<MatDatepickerInputEvent<D>>){
        
    // }
    public set startTimeArg(startTime: string){
        this._startTimeArg=startTime;
        this.filterTable();
    }
    public set endTimeArg(endTime: string){
        this._EndTimeArg=endTime;
        this.filterTable();
    }
	public set isLockedArg(isLocked: boolean) {
        this._isLockedArg = isLocked;
        this.filterTable();
	}

	public set projectNameArg(value: string) {
        this._projectNameArg = value;
        this.filterTable();
	}

	public set sprintNameArg(value: string) {
        this._sprintNameArg = value;
        this.filterTable();
	}

	public set userStoryNameArg(value: string) {
        this._userStoryNameArg = value;
        this.filterTable();
	}

	public set isDeletedArg(value: boolean) {
        this._isDeletedArg = value;
        console.log("isDeletedArg: "+value);
        this.filterTable();
	}

	public set isCurrentArg(value: boolean) {
        this._isCurrentArg = value;
        // console.log("isCurrentArg: "+value);
        this.filterTable();
	}

	public set employeeNameArg(value: string) {
        this._employeeNameArg = value;
        this.filterTable();
	}

    constructor(private weekModel: WeekModel){
        console.log('data in filter: '+weekModel);
        // this.fillTable();
        this.filterTable();
    }
    // private fillTable(): void{
    //     this.entryData = new Array<EntryModel>();
    //     for (let day of this.weekModel.dayModels){
    //         for(let entry of day.entryModels){
    //             this.entryData.push(entry);
    //         }
    //     }
    // }
    public filterTable(): void{
        let srch = new Searcher();
        // console.log('pre filterTable(): entrydata '+this.entryData);
        this.entryData = new Array<EntryModel>();
        for (let day of this.weekModel.dayModels){
            for(let entry of day.entryModels){
                // console.log('filterTable(): iterate '+entry.entryDescription);
                let hasId = srch.hasInt(entry.entryId,this._idArg);
                let hasDescription = srch.hasString(entry.entryDescription,this._descriptionArg);
                let hasStatus = srch.hasString(entry.entryStatus,this._statusArg);
                let hasDate = srch.hasDateString(entry.entryDate,this._dateArg);
                let hasStartTime = srch.hasString(entry.entryStartTime,this._startTimeArg);
                let hasEndTime = srch.hasString(entry.entryEndTime,this._EndTimeArg);
                let isLocked;
                if(this._isLockedArg){
                    isLocked = true;
                }else if(entry.entryIsLocked==false){
                    isLocked = true;
                }
                let hasProjectName = srch.hasString(entry.entryProjectName,this._projectNameArg);

                let hasSprintName = srch.hasString(entry.entrySprintName,this._sprintNameArg);
                let hasUserStoryName = srch.hasString(entry.entryUserstoryName,this._userStoryNameArg);

                let isDeleted = this._isDeletedArg ? true : !entry.isDeleted;
                let isCurrent = this._isCurrentArg ? entry.isCurrent : true;
                let hasEmployee = srch.hasString(entry.entryEmployeeName,this._employeeNameArg);
                console.log('WeekFilter description='+entry.entryDescription);
                console.log('WeekFilter isDeletedArg='+this._isDeletedArg+' !entry.isDeleted='+!entry.isDeleted+" isDeleted="+isDeleted);
                // console.log('WeekFilter isCurrent='+isCurrent);
                
                // if(hasId&&hasDescription&&hasStatus&&hasDate
                // &&hasStartTime&&hasEndTime&&isLocked&&hasProjectName
                // &&hasSprintName&&hasUserStoryName&&isDeleted
                // &&isCurrent&&hasEmployee){
                //     console.log('push '+entry.entryDescription);
                //     this.entryData.push(entry);
                // }

                if(hasId&&hasDescription&&hasStatus&&hasDate&&hasStartTime&&hasEndTime&&hasEmployee&&hasProjectName
                    &&isLocked&&hasSprintName&&hasUserStoryName&&isCurrent&&isDeleted){
                        console.log('push '+isDeleted);
                        console.log(this.entryData);
                        this.entryData.push(entry);
                    }
                
            }
        }
        // console.log('post filterTable(): entrydata '+this.entryData);
    }
}