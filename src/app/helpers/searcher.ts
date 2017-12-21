export class Searcher {
    public contains(input: string, substring: string): boolean {
        return (input.indexOf(substring) >= 0) ? true : false;
    }
}
