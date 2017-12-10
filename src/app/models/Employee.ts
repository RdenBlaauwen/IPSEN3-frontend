export class Employee
{
    constructor(
        public employeeId?: number,
        public employeeFirstName?: string,
        public employeeLastName?: string,
        public employeePassword?: string,
        public employeeEmail?: string,
        public employeeIsDeleted?: boolean,
        public employeeRole?: string)
    {
        
    }
}