export enum templateTypeEnum {
  CONTRACT = "CONTRACT",
  SMS = "SMS",
}

export interface templateTypes {
  name: string;
  partnerId: string;
  type: templateTypeEnum;
  columnsMapping: {
    [key: string]: {
      columnName: string;
      isLookup: boolean;
    };
  };
  startDate?: Date;
  endDate?: Date;
  owner: string;
}
