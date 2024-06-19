export type FullTable = {
    Mandate?:TableType,
    collection?:TableType,
    settlement?:TableType,
    refunds?:TableType,
}

export type TableType = {
    tableColumns: TableColumns[],
    tableData:tableData[],
    filters: string[],
    search: string,
    paging: PageModel,
}

export interface TableColumns { 
    key: string, 
    label: string, 
    isVisible: boolean, 
    isClickable?: boolean,
    width:string,
    isStatusColumn?: boolean,
    searchEnabled?: boolean,
    isFilterAllowed?: boolean;
    isSortAllowed?: boolean;
    sort?: string;
    filter?: string;
}

type tableData = {
    mandateId: number,
    status: string,
    lastUpdated: string,
    mobileNo: string,
    customerId: string,
    creationTime: string,
    limit: number,
    expiryDate: string,
    frequency: number,
    associatedFiid: string,
}

export interface PageModel {
    pageNumber: number;
    pageSize: number;
}
