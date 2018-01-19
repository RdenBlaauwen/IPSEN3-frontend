export class Time{
    private valueList: TimeValue[] = [];

    public getHours():number{
        for(let i=0;i<this.valueList.length;i++){
            if(this.valueList[i].type.type==TimeValueTypeName.Hours){
                return this.valueList[i].value;
            }
        }
        return null;
    }
    public getMinutes():number{
        for(let i=0;i<this.valueList.length;i++){
            if(this.valueList[i].type.type==TimeValueTypeName.Minutes){
                return this.valueList[i].value;
            }
        }
        return null;
    }
    public getSeconds():number{
        for(let i=0;i<this.valueList.length;i++){
            if(this.valueList[i].type.type==TimeValueTypeName.Seconds){
                return this.valueList[i].value;
            }
        }
        return null;
    }
    public getMillisecond():number{
        for(let i=0;i<this.valueList.length;i++){
            if(this.valueList[i].type.type==TimeValueTypeName.Milliseconds){
                return this.valueList[i].value;
            }
        }
        return null;
    }

    public constructor(){
        this.setByDate(new Date());
    }

    public setFormat(formatString: string){
        this.validateFormatString(formatString);
        let formatValues = formatString.split(":");
        let newValueList: TimeValue[] = [];
    }

    private validateFormatString(formatString: string): boolean{
        let formatValues = formatString.split(":");
        if(formatValues.length>4){
            throw this.constructor.name+': format string contains too many time variables.';
        } else{
            formatValues.forEach(formatValue => {
                let isValue = false;
                let type = new TimeValueType(TimeValueTypeName.Hours);
                if(formatValue.indexOf(type.formatString)>=0){
                    isValue=true;
                    if(formatValue.length>type.maxLength){
                        throw this.constructor.name+': format string contains an \''+type.formatString+
                            '\' variable which is too long. Max length is '+type.maxLength;
                    }
                }
                type = new TimeValueType(TimeValueTypeName.Minutes);
                if(formatValue.indexOf(type.formatString)>=0){
                    isValue=true;
                    if(formatValue.length>type.maxLength){
                        throw this.constructor.name+': format string contains an \''+type.formatString+
                            '\' variable which is too long. Max length is '+type.maxLength;
                    }
                }
                type = new TimeValueType(TimeValueTypeName.Seconds);
                if(formatValue.indexOf(type.formatString)>=0){
                    isValue=true;
                    if(formatValue.length>type.maxLength){
                        throw this.constructor.name+': format string contains an \''+type.formatString+
                            '\' variable which is too long. Max length is '+type.maxLength;
                    }
                }
                type = new TimeValueType(TimeValueTypeName.Milliseconds);
                if(formatValue.indexOf(type.formatString)>=0){
                    isValue=true;
                    if(formatValue.length>type.maxLength){
                        throw this.constructor.name+': format string contains an \''+type.formatString+
                            '\' variable which is too long. Max length is '+type.maxLength;
                    }
                }    
                if(!isValue){
                    throw this.constructor.name+': format string contains invalid time variable. '
                    +'Please only use \'H\', \'m\', \'s\' or \'S\'';
                }
            }); 
        }
        return true;
    }

    public setByDate(date: Date){
        this.valueList.push(new TimeValue(TimeValueTypeName.Hours,date.getHours()));
        this.valueList.push(new TimeValue(TimeValueTypeName.Minutes,date.getMinutes()));
        this.valueList.push(new TimeValue(TimeValueTypeName.Seconds,date.getSeconds()));
        this.valueList.push(new TimeValue(TimeValueTypeName.Milliseconds,date.getMilliseconds()));
    }
    public setByString(date: Date){
        
    }

    public roundByHours(grain: number, direction: any){

    }
    public roundByMinutes(grain: number, direction: any){
        
    }
    public roundBySeconds(grain: number, direction: any){
        
    }
    // public roundByMilliseconds(grain: number, direction: Direction){
        
    // }

    public equals(time: Time): boolean{}
    public greaterThan(time: Time): boolean{}
    public greaterOrEquals(time: Time): boolean{}
    public lessThan(time: Time): boolean{}
    public lessOrEquals(time: Time): boolean{}

    public toString(): string{}
}

export enum Direction {
    Up, Down, Standard,
}

enum TimeValueTypeName{
    Hours='H',
    Minutes='m',
    Seconds='s',
    Milliseconds='S',
}

class TimeValueType{
    public type: TimeValueTypeName;
    private _maxSize: number;
    private _maxLength: number;
    private _formatString: string;

    public get maxSize(): number{
        return this._maxSize;
    }
    public get maxLength(): number{
        return this._maxLength;
    }
    public get formatString(): string{
        return this._formatString;
    }

    constructor(type: TimeValueTypeName){
        this.type=type;
        switch(type){
            case TimeValueTypeName.Hours:
                this._maxSize=23
                this._maxLength=2
                this._formatString='H';
                break;
            case TimeValueTypeName.Minutes:
                this._maxSize=59
                this._maxLength=2
                this._formatString='m';
                break;
            case TimeValueTypeName.Seconds:
                this._maxSize=59
                this._maxLength=2
                this._formatString='s';
                break;
            case TimeValueTypeName.Milliseconds:
                this._maxSize=999
                this._maxLength=3
                this._formatString='S';
                break; 
        }
    }
}

class TimeValue{
    public type: TimeValueType;
    private _value: number;
    public isIncluded = true;
    private _length: number;

    constructor(typeName: TimeValueTypeName, value: number){
        this.type = new TimeValueType(typeName);
        this.value = value;
        this._length = this.type.maxLength;
    }

    public get value(): number {
		return this._value;
    }
    public set value(value: number) {
        if(value<this.type.maxSize&&value>=0){
            this._value = value;
        }else{
            throw this.constructor.name+': set '+this.type.type+' failed; out of bounds (0-'+this.type.maxSize+')';
        }
	}
    public getFormatString():string{
        return this.type.formatString;
    }

    public set length(length:number){
        if(length<this.type.maxLength&&length>=0){
            this._length = length;
        }else{
            throw this.constructor.name+': set format length failed; out of bounds (0-'+this.type.maxLength+')';
        }
    }
}