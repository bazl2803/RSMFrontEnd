interface SalesSummary {
    Id: number;
    productName: string;
    productCategoryName: string;
    total: number;
    salesPersonName: string;
    orderDate: Date;
    shipToAddress: string;
    billToAddress: string;
}