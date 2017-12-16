export class Project {

  constructor(
    public projectId?: number, 
    public projectName?: string, 
    public projectDescription?: string, 
    public projectIsDeleted?: boolean, 
    public projectCustomerFk?: number)
  {}
}
