import { Injectable } from '@angular/core';

@Injectable()
export class DateHelper{
    /**
     * Veranderd een date in een string van formaat dd-MM-yyyy
     * 
     * @author Robert
     * @param input Date object om te converteren
     */
    public dateToString(input: Date): string{
        let day = input.getDate();
        let month = input.getMonth();
        month++;
        let year = input.getFullYear();
        return day+"-"+month+"-"+year;
    }
    public normalizeDateString(input: string): string{
        let date = new Date(input);
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        return day+"-"+month+"-"+year;
    }
    public getFirstDayOfWeekDate(date: Date): Date{
        let dayNumber = date.getDay();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        return new Date(year, month, (day+1)-dayNumber);
    }
    public getTimeString(date: Date):string{
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(minutes<10){
            return hours+":0"+minutes;
        }else{
            return hours+":"+minutes;
        }
    }
    public stringToDate(input: string): Date{
        let hours = parseInt(input.substr(0,2));
        let minutes = parseInt(input.substr(3,5));
        let date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        return date;
    }
}