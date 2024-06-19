// src/declarations.d.ts
declare module "app2/App" {
  interface AppProps {
    configs: {
      BASE_URL: string;
      LOCAL_BASE_URL: string;
      BASE_PAGE_URL: string;
      X_Partner_Code: string;
      Theme_X_partner_code: string;
      ASSETS_URL: string;
      SUPERMERCHANT_URL: string;
      successUrl: string;
      appType: string;
    };
    handleLoginDispatcher: (val) => void;
  }

  const app2: React.ComponentType<AppProps>;

  export default app2;
}
