export class SimpleTime {
    private hours = new TimeUnitValue(TimeUnit.Hours);
    private minutes = new TimeUnitValue(TimeUnit.Minutes);
    private seconds = new TimeUnitValue(TimeUnit.Seconds);
    private milliseconds = new TimeUnitValue(TimeUnit.Milliseconds);
    private orderList: TimeUnitValue[] = [this.hours,this.minutes,this.seconds,this.milliseconds];

    public getHours():number{
        return this.hours.value;
    }
    public getMinutes():number{
        return this.minutes.value;
    }
    public getSeconds():number{
        return this.seconds.value;
    }
    public getMilliseconds():number{
        return this.milliseconds.value;
    }

    constructor(){
        this.setByDate(new Date());
    }

    public setByDate(date: Date):void{
        this.hours.value=date.getHours();
        this.minutes.value=date.getMinutes();
        this.seconds.value=date.getSeconds();
        this.milliseconds.value=date.getMilliseconds();
    }

    public setByString(timeString: string):void{
        let stringValues = timeString.split(":");
        for(let i=0;i<this.orderList.length;i++){
            let TimeUnitValue = this.orderList[i];
            TimeUnitValue.value=parseInt(stringValues[i]);
        }
        this.orderList.forEach(TimeUnitValue=>{
            console.log('SimpleTime setByString: '+TimeUnitValue.value);
        });
    }

    public setFormat(formatString: string){
        this.validateFormatString(formatString);
        let formatValues = formatString.split(":");
        this.orderList = [];
        formatValues.forEach(newValue=>{
            if(newValue.indexOf('H')>=0){
                this.hours.desiredLength=newValue.length;
                this.orderList.push(this.hours);
            } else if(newValue.indexOf('m')>=0){
                this.minutes.desiredLength=newValue.length;
                this.orderList.push(this.minutes);
            } else if(newValue.indexOf('s')>=0){
                this.seconds.desiredLength=newValue.length;
                this.orderList.push(this.seconds);
            } else if(newValue.indexOf('S')>=0){
                this.milliseconds.desiredLength=newValue.length;
                this.orderList.push(this.milliseconds);
            }
        });
    }

    public roundTimeUnit(timeUnit: TimeUnit, grain:number,direction: Direction){
        if(timeUnit==TimeUnit.Hours){
            this.hours.setRoundParams(grain, direction);
        } else if(timeUnit==TimeUnit.Minutes){
            this.minutes.setRoundParams(grain, direction);
        } else if(timeUnit==TimeUnit.Seconds){
            this.seconds.setRoundParams(grain, direction);
        } else {
            this.milliseconds.setRoundParams(grain, direction);
        }
    }
    private validateFormatString(formatString: string): boolean{
        let formatValues = formatString.split(":");
        if(formatValues.length>4){
            throw this.constructor.name+': format string contains too many time variables.';
        } else{
            formatValues.forEach(formatValue => {
                let isValue = false;
                let type = new TimeUnitSettings(TimeUnit.Hours);
                if(formatValue.indexOf(type.formatString)>=0){
                    isValue=true;
                    if(formatValue.length>type.maxLength){
                        throw this.constructor.name+': format string contains an \''+type.formatString+
                            '\' variable which is too long. Max length is '+type.maxLength;
                    }
                }
                type = new TimeUnitSettings(TimeUnit.Minutes);
                if(formatValue.indexOf(type.formatString)>=0){
                    isValue=true;
                    if(formatValue.length>type.maxLength){
                        throw this.constructor.name+': format string contains an \''+type.formatString+
                            '\' variable which is too long. Max length is '+type.maxLength;
                    }
                }
                type = new TimeUnitSettings(TimeUnit.Seconds);
                if(formatValue.indexOf(type.formatString)>=0){
                    isValue=true;
                    if(formatValue.length>type.maxLength){
                        throw this.constructor.name+': format string contains an \''+type.formatString+
                            '\' variable which is too long. Max length is '+type.maxLength;
                    }
                }
                type = new TimeUnitSettings(TimeUnit.Milliseconds);
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

    public toString():string{
        let timeString: string;
        for(let i=0;i<this.orderList.length;i++){
            let value=this.orderList[i].value.toString();
            let length1 = this.orderList[i].desiredLength;
            let length2 = value.length;
            let verschil = length1-length2;
            console.log('SimpleTime toString type='+this.orderList[i].type.type+' desiredLenght='+length1+' valuelength='+length2+'verschil='+verschil);
            for(let j=0;j<verschil;j++){
                value='0'+value;
            }
            if((i+1)==this.orderList.length){
                timeString=timeString+value;
            }else if(i==0){
                timeString=value+":";
            }else{
                timeString=timeString+value+":";
            }
        }
        return timeString;
    }
}
export enum Direction {
    Up, Down, Standard,
}
class TimeUnitValue{
    public type: TimeUnitSettings;
    private _value: number;
    public isIncluded = true;
    private _desiredLength: number;
    public roundingGrain=0;
    public roundingDirection: Direction;

    public get value(): number {
		return this._value;
    }
    public set value(value: number) {
        if(value<this.type.maxSize&&value>=0){
            this._value = value;
            this.round();
        }else{
            throw this.constructor.name+': set '+this.type.type+' failed; out of bounds (0-'+this.type.maxSize+')';
        }
    }
    private round():void{
        let rest = this._value%this.roundingGrain;
        if(this.roundingDirection==Direction.Down){
            this._value-=rest;
        }else if(this.roundingDirection==Direction.Up){
            this._value+=(this.roundingGrain-rest);
        }else if(rest<this.roundingGrain/2){
            this._value-=rest;
        }else if(rest>=this.roundingGrain/2){
            this._value+=(this.roundingGrain-rest);
        }
    }
    public getFormatString():string{
        return this.type.formatString;
    }

    public set desiredLength(length:number){
        if(length<=this.type.maxLength&&length>=0){
            this._desiredLength = length;
        }else{
            throw this.constructor.name+': set format length failed; out of bounds (0 -'+this.type.maxLength+')'
            +' got '+length;
        }
    }
    public get desiredLength():number{
        return this._desiredLength;
    }

    constructor(typeName: TimeUnit){
        this.type = new TimeUnitSettings(typeName);
        this._desiredLength = this.type.maxLength;
    }

    public setRoundParams(grain: number, direction: Direction){
        this.roundingGrain=grain;
        this.roundingDirection=direction;
        this.round();
    }
}
class TimeUnitSettings{
    public type: TimeUnit;
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

    constructor(type: TimeUnit){
        this.type=type;
        switch(type){
            case TimeUnit.Hours:
                this._maxSize=23
                this._maxLength=2
                this._formatString='H';
                break;
            case TimeUnit.Minutes:
                this._maxSize=59
                this._maxLength=2
                this._formatString='m';
                break;
            case TimeUnit.Seconds:
                this._maxSize=59
                this._maxLength=2
                this._formatString='s';
                break;
            case TimeUnit.Milliseconds:
                this._maxSize=999
                this._maxLength=3
                this._formatString='S';
                break; 
        }
    }
}
export enum TimeUnit{
    Hours='H',
    Minutes='m',
    Seconds='s',
    Milliseconds='S',
}



