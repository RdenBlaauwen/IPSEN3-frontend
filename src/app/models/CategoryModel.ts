export class Category{
    constructor(
        public categoryId?: number,
        public categoryIsDeleted?: boolean,
        public categoryName?: string,
        public categoryStartDate?: string,
        public categoryEndDate?: string,
        public categoryDescription?: string,
        public projectFK?: number,
        public projectName?: string,
        public isCurrent?: boolean)
    {}
}