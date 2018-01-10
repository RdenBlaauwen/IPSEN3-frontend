import {DateHelper} from './dateHelper';
export class Searcher {
    public hasString(input: string, substring: string): boolean {
        if(input==null&&substring==""||substring==null){
            return true;
        }else if(input==null){
            return false;
        }
        if(substring!=null&&substring!=""){
            
            return (input.indexOf(substring) >= 0) ? true : false;
        }else{
            return true;
        }
    }
    public hasInt(input: number, substring: number): boolean {
        if(input==null&&substring==null){
            return true;
        }else if(input==null){
            return false;
        }
        if(substring!=null){
            let parsedInput=input.toString();
            let parsedSubString = substring.toString();
            return (parsedInput.indexOf(parsedSubString) >= 0) ? true : false;
        }else{
            return true;
        }
    }

    public hasDateString(input: string, substring: string): boolean{
        if(input==null&&substring==""||substring==null){
            return true;
        }else if(input==null){
            return false;
        }
        let dh = new DateHelper();
        let dateString = dh.normalizeDateString(input);
        if(substring!=null&&substring!=""){
            return (dateString.indexOf(substring) >= 0) ? true : false;
        }else{
            return true;
        }
    }

    public hasStringConsole(input: string, substring: string): boolean {
        console.log('searcher input: '+input+' substring: '+substring);
        if(input==null){
            return false;
        }
        if(substring!=null&&substring!=""){
            
            return (input.indexOf(substring) >= 0) ? true : false;
        }else{
            return true;
        }
    }
}
