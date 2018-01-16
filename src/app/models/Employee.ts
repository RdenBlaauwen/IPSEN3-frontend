export class Employee {
    constructor(
        public employeeId?: number,
        public employeeFirstname?: string,
        public employeeLastname?: string,
        public employeePassword?: string,
        public employeeEmail?: string,
        public employeeIsDeleted?: boolean,
        public employeeRole?: string) {}
}
