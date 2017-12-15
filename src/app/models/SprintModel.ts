export class SprintModel{
    constructor(public sprintId?: number,
        public sprintIsDeleted?: boolean,
        public sprintName?: string,
        public sprintStartDate?: string,
        public sprintEndDate?: string,
        public sprintDescription?: string,
        public projectFK?: number,
        public projectName?: string,
        public isCurrent?: boolean)
    {}
}