export class Project {
  private _projectId?: number;
  private _projectName?: string;
  private _projectDescription?: string;
  private _projectIsDeleted?: boolean;
  private _projectCustomerFk?: number;

  constructor(id: number, name: string, description: string, is_deleted: boolean, customer_fk: number){
    this._projectId = id;
    this._projectName = name;
    this._projectDescription = description;
    this._projectIsDeleted = is_deleted;
    this._projectCustomerFk = customer_fk;
  }

  get projectId(): number {
    return this._projectId;
  }

  set projectId(value: number) {
    this._projectId = value;
  }

  get projectName(): string {
    return this._projectName;
  }

  set projectName(value: string) {
    this._projectName = value;
  }

  get projectDescription(): string {
    return this._projectDescription;
  }

  set projectDescription(value: string) {
    this._projectDescription = value;
  }

  get projectIsDeleted(): boolean {
    return this._projectIsDeleted;
  }

  set projectIsDeleted(value: boolean) {
    this._projectIsDeleted = value;
  }

  get projectCustomerFk(): number {
    return this._projectCustomerFk;
  }

  set projectCustomerFk(value: number) {
    this._projectCustomerFk = value;
  }
}
