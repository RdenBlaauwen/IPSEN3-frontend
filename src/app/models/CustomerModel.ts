export class CustomerModel
{
    constructor(
        public customer_id?: number,
        public customer_name?: string,
        public customer_description?: string,
        public customer_isdeleted?: boolean)
    {}
}