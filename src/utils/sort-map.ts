import { UserType } from "common-types"

const sortNameMap = {
    [UserType.MERCHANT]:{
      "mandates": {
        "createdDate": "mandateCreationTimestamp",
        "lastModifiedDate": "mandateLastUpdated"
      },
      "collections": { "collectionDate": "collectionDate" },
      "settlements": { "lastModifiedDate": "settlementDate" },
      "refunds": {"requestDate":"refundRequestDate"}
    },
    // [UserType.MERCHANT]:{
    //   "transactions":{
    //     "collectionDate": "collectionDate"
    //   },
    //   "mandates":{
    //     "lastModifiedDate": "mandateLastUpdated",
    //     "expiryDate":"expiryDate"
    //   },
    //   "refunds":{
    //     "requestDate":"refundRequestDate"
    //   },
    //   "revenue":{
    //     "revenueDisbursementDate":"disbursementDate"
    //   },
    //   "tax":{
    //     "taxDisbursementDate":"disbursementDate"
    //   },
    //   "customer":{
    //     "totalActiveMandates":"totalActiveMandates",
    //     "totalTransactionAmount":"totalTransactionCount"
    //   }
    // }
  }
  
  export default sortNameMap