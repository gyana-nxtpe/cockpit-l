import httpService from "./httpServices";
import {
  formSchemaFeePlanConfiguration,
  formSchemaFeeRuleConfiguration,
  formSchemaMerchantCreation,
  formSchemaTillRegistration,
  planSchema,
} from "@/lib/schemas";
import * as z from "zod";

export const merchantCreationService = (
  data: z.infer<typeof formSchemaMerchantCreation>,
  toast,
  delayedNavigate: (to: string, delay?: number) => void
) => {
  const formattedData = {
    name: data.name,
    contractedProducts: data.contractedProducts,
    contractedFspIds: data.contractedFspIds,
    settlementSchedule: data.settlementSchedule,
    theme: {
      bodyColor: data.themeColors.backgroundColor,
      infoBg: data.themeColors.secondaryColor,
      btnColor: data.themeColors.primaryColor,
      iconColor: data.themeColors.primaryColor,
      themeBackgroundColor: data.themeColors.backgroundColor,
      themeColor: data.themeColors.primaryColor,
      headerBackgroundColor: data.themeColors.primaryColor,
      headerColor: data.themeColors.backgroundColor,
      errorColor: "#CD3B33",
      successColor: "#4BB543",
      merchantName: data.name,
      logoUrl: data.logo,
    },
    kycInfo: {
      merchantCountry: "UGA",
    },
  };

  httpService.postData(
    "/merchants",
    formattedData,
    (res) => {
      console.log(res);
      sessionStorage.setItem("merchantId", res.data.entityId);
      sessionStorage.setItem(
        "contractedFspIds",
        JSON.stringify(res.data.contractedFspIds)
      );
      sessionStorage.setItem(
        "contractedProducts",
        JSON.stringify(res.data.contractedProducts)
      );
      fisConfigService(data.fisConfigs, res.data.entityId);
      // create merchant component and otp template here
      merchantComponentCreation(res.data.entityId);
      otpTemplateCreation(res.data.entityId);
      toast({
        title: "Merchant Creation Successful",
        description: "You can now configure the plans",
        duration: 3000,
      });
      delayedNavigate("/plan-config");
    },
    (err) => {
      //   message.error("Not able to fetch.")
      console.log(err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        duration: 3000,
        description: "There was a problem with your request.",
      });
    }
  );
};

export const tillRegistrationService = (
  data: z.infer<typeof formSchemaTillRegistration>
) => {
  // Return a new Promise from the function
  return new Promise((resolve, reject) => {
    httpService.postData(
      "/tills",
      {
        ...data,
        parentMerchantId: sessionStorage.getItem("merchantId"),
        defaultTill: true,
        description: "",
      },
      (res) => {
        console.log(res);
        resolve(res);
      },
      (err) => {
        console.log(err);
        reject(err);
      }
    );
  });
};

export const planConfigurationService = (data: z.infer<typeof planSchema>) => {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    httpService.postData(
      "/merchants/plans",
      {
        ...data,
        description: "",
        currency: "UGX",
        merchantId: sessionStorage.getItem("merchantId"),
      },
      (res) => {
        const planIds = JSON.parse(sessionStorage.getItem("plans")) || [];
        planIds.push(res.data.entityId);
        sessionStorage.setItem("plans", JSON.stringify(planIds));
        console.log(res);
        resolve(res); // Resolve the promise on success
      },
      (err) => {
        console.log(err);
        reject(err); // Reject the promise on error
      }
    );
  });
};

export const feePlanConfigurationService = (
  data: z.infer<typeof formSchemaFeePlanConfiguration>,
  merchantPlanId: string,
  fspId: string,
  product: string
) => {
  // Return a new Promise from the function
  return new Promise((resolve, reject) => {
    httpService.postData(
      "/txn-fee/plans",
      {
        ...data,
        merchantId: sessionStorage.getItem("merchantId"),
        merchantPlanId,
        fspId,
        product,
      },
      (res) => {
        const txnFeePlanIds =
          JSON.parse(sessionStorage.getItem("txnFeePlanIds")) || [];
        txnFeePlanIds.push(res.data.entityId);
        sessionStorage.setItem("txnFeePlanIds", JSON.stringify(txnFeePlanIds));
        sessionStorage.setItem('profileType', data.profileType)
        console.log(res);
        resolve(res); // Resolve the promise when successful
      },
      (err) => {
        console.log(err);
        reject(err); // Reject the promise on error
      }
    );
  });
};
export const feeRuleConfigurationService = (
  data: z.infer<typeof formSchemaFeeRuleConfiguration>,
  txnFeePlanId: string,
  feeBearer: string,
  transactionType: string
) => {
  return new Promise((resolve, reject) => {
    httpService.postData(
      "/txn-fee/rules",
      {
        ...data,
        name: "name",
        txnFeePlanId,
        feeBearer,
        transactionType,
      },
      (res) => {
        console.log(res);
        resolve(res); // Resolve the promise on success
      },
      (err) => {
        console.log(err);
        reject(err); // Reject the promise on error
      }
    );
  });
};

export const fisConfigService = (
  data: z.infer<typeof formSchemaMerchantCreation>["fisConfigs"],
  merchantId: string
) => {
  if (Array.isArray(data) && data.length > 0) {
    data.forEach((config) => {
      httpService.postData(
        "/merchants/fis",
        {
          ...config,
          merchantId,
        },
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  } else {
    console.log("No fisConfigs to process.");
  }
};

export const merchantComponentCreation = (merchantId: string) => {
  return new Promise((resolve, reject) => {
    httpService.postData(
      `/component/v1/create/${merchantId}`,
      null,
      (res) => {
        console.log(res);
        resolve(res);
      },
      (err) => {
        console.log(err);
        reject(err);
      },
      "wallet-aggregator"
    );
  });
};

export const otpTemplateCreation = (merchantId: string) => {
  return new Promise((resolve, reject) => {
    httpService.postData(
      `/otp-template/create`,
      {
        name: `${merchantId}_send_otp`,
        active: true,
        characterSet: "0123456789",
        exipryInMinutes: 3,
        createdBy: JSON.parse(localStorage.getItem("auth") || "{}")?.userName,
        noOfAttempts: 10,
        length: 4,
        notificationTemplate: "CHECKOUT_OTP_TEMPLATE",
      },
      (res) => {
        console.log(res);
        resolve(res);
      },
      (err) => {
        console.log(err);
        reject(err);
      },
      "notify",
      {
        "X-Partner-Code": "internal-notify",
      }
    );
  });
};

export const SmsBulkNotifierService = (file) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    httpService.postData(
      "/notification/bulk",
      formData,
      (res) => {
        console.log(res);
        resolve(res);
      },
      (err) => {
        console.log(err);
        reject(err);
      },
      "notify",
      {
        "X-Partner-Code": "internal-notify",
      }
    );
  });
};
