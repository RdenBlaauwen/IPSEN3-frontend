export class Project
{
    constructor(
        public projectId?: number,
        public projectIsDeleted?: string,
        public projectName?: string,
        public projectDescription?: string,
        public projectCustomerFk?: number)
    {
        
    }
}