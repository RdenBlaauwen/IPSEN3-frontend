export class Task{
    constructor(
        public userStoryId? : number,
        public userStoryName? : String,
        public userStoryDescription? : String,
        public userStoryIsDeleted? : boolean,
        public isCurrent? : boolean,
        public projectName? : String,
        public projectId? : number,
        public categoryName? : String,
        public categoryId? : number
    )
    {}
}