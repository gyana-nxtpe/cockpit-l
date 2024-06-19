export interface RecordData {
  page: number;
  content: ModifiedData;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

type ModifiedData =
  | mandatesData[]
  | settlementsData[]
  | collectionsData[]
  | auditData[]
  | collectionDetails[]
  | SubscriptionData[]
  | NotifyData[];

interface mandatesData {
  mandateId: string;
  customerId: string;
  CustomerFIName: string;
  associatedFiid: string;
  mobileNo: string;
  creationTime: string;
  status: string;
  limit: number;
  currency: string;
  expiryDate: string;
  frequency: number;
  lastUpdated: string;
}

interface settlementsData {
  settlementId: string;
  settlementDate: string;
  collectionId: number;
  settledAmount: number;
  merchantFIAccountNo: number;
  financialInstitutionTxnId: number;
  status: string;
}

interface collectionsData {
  orderId: string;
  mandateId: string;
  collectionDate: string;
  customerId: number;
  customerMSISDN: string;
  collectionId: string;
  customerFIMSISDN: string;
  financialInstitutionTxnId: string;
  baseAmount: number;
  customerPaymentFee: number;
  customerTaxAmount: number;
  collectionAmount: number;
  status: string;
  currency: string;
  collectionDelay: number;
}
interface auditData {
  field: number;
  mandateId: string;
  updatedTimeStamp: string;
  status: string;
  remarks: string;
}
interface collectionDetails {
  collectionDate: string;
  collectionId: string;
  collectionAmount: string;
  status: string;
  financialInstitutionTxnId: string;
}

interface SubscriptionData {
  subscriptionId: string;
  customerId: string;
  customerMSISDN: string;
  subscriptionDate: string;
  subscriptionAmount: number;
  subscriptionStatus: string;
  subscriptionType: string;
  subscriptionFrequency: number;
  subscriptionExpiryDate: string;
}

export interface GetRecordQueryParams {
  endpoint?: string;
  recordName: string;
  queries: string;
}

interface NotifyData {
  createdDate: string;
  entityId: string;
  lastModifiedDate: Date;
  destination: string;
  message: string;
  status: string;
  template: string;
  type: string;
  orderId: string;
}
