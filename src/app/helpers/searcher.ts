export class Searcher {
    public hasString(input: string, substring: string): boolean {
        if(substring!=null&&substring!=""){
            return (input.indexOf(substring) >= 0) ? true : false;
        }
        return false;
    }
    public hasInt(input: number, substring: number): boolean {
        if(substring!=null){
            let parsedInput=input.toString();
            let parsedSubString = substring.toString();
            return (parsedInput.indexOf(parsedSubString) >= 0) ? true : false;
        }
        return false;
    }
}
