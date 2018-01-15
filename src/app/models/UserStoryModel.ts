export class UserStory{
    constructor(
        public userStoryID? : number,
        public userStoryName? : String,
        public userStoryDescription? : String,
        public userStoryIsDeleted? : boolean,
        public isCurrent? : boolean
    )
    {}
}