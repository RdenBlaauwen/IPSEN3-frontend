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
}