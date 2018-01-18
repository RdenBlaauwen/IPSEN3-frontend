export class Time{
    //HH:mm:ss:SSS
    private _hours: number;
    private _minutes: number;
    private _seconds: number;
    // private _milliseconds: number;

    public formatIsSet: false;

    private _hoursDigits: number;
    private _minutesDigits: number;
    private _secondsDigits: number;

    private _hoursRounding;
    private _minutesRounding;
    private _secondsRounding;
    // private _millisecondsDigits: number;


	public get hours(): number {
		return this._hours;
	}

	public set hours(value: number) {
        if(value<24&&value>=0){
            this._hours = value;
        }else{
            throw this.constructor.name+" set Hours failed: out of bounds (0-24)";
        }
	}

	public get minutes(): number {
		return this._minutes;
	}

	public set minutes(value: number) {
        if(value<60&&value>=0){
            this._minutes = value;
        }else{
            throw this.constructor.name+" set Minutes failed: out of bounds (0-59)";
        }
	}

	public get seconds(): number {
		return this._seconds;
	}

	public set seconds(value: number) {
        if(value<60&&value>=0){
            this._seconds = value;
        }else{
            throw this.constructor.name+" set Seconds failed: out of bounds (0-59)";
        }
	}

	// public get milliseconds(): number {
	// 	return this._milliseconds;
	// }

	// public set milliseconds(value: number) {
    //     if(value<1000&&value>=0){
    //         this._milliseconds = value;
    //     }else{
    //         throw this.constructor.name+" set Milliseconds failed: out of bounds (0-999)";
    //     }
	// }

	public get hoursDigits(): number {
		return this._hoursDigits;
	}

	public set hoursDigits(value: number) {
        if(value<=2&&value>=0){
            this._hoursDigits = value;
        }else{
            throw this.constructor.name+" set hoursDigits failed: out of bounds (0-2)";
        }
	}

	public get minutesDigits(): number {
		return this._minutesDigits;
	}

	public set minutesDigits(value: number) {
		if(value<=2&&value>=0){
            this._minutesDigits = value;
        }else{
            throw this.constructor.name+" set minutesDigits failed: out of bounds (0-2)";
        }
	}

	public get secondsDigits(): number {
		return this._secondsDigits;
	}

	public set secondsDigits(value: number) {
		if(value<=2&&value>=0){
            this._secondsDigits = value;
        }else{
            throw this.constructor.name+" set secondsDigits failed: out of bounds (0-2)";
        }
	}

	// public get millisecondsDigits(): number {
	// 	return this._millisecondsDigits;
	// }

	// public set millisecondsDigits(value: number) {
	// 	if(value<=3&&value>=0){
    //         this._millisecondsDigits = value;
    //     }else{
    //         throw this.constructor.name+" set millisecondsDigits failed: out of bounds (0-3)";
    //     }
	// }
    

    public constructor(){
    }

    public setFormat(formatString: string){

    }

    public setByDate(date: Date){

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