import fs from "fs-extra";
import path from "path";

const buildPath = path.join(__dirname, "build");
const indexPath = path.join(buildPath, "index.html");
const baseDirectory = "./build/";
const folders = [
  "checkout",
  "subsequent-collect",
  "kora",
  "ride-collect",
  "order-status",
  "mandate-management",
  "merchant-creation",
  "plan-config",
  "till-registration",
  "fee-plan-config",
  "fee-rule-config",
  "sms-bulk-notifier",
  "kibana",
  "kuma",
  "create-user-um",
  "contract-upload",
  "settlements",
  "orders-overview",
  "order-details",
  "notify-rv",
  "webhook-rv",
  "overview-kpi",
  "contract-overview"

];
const defaultFolders = ["panel", "auth", "error"];
const loginRoutes = ["login", "forgot-password", "set-password", "success"];
// Create default folders and move index.html into them directly
for (const defaultFolder of defaultFolders) {
  const defaultFolderPath = path.join(baseDirectory, defaultFolder);
  fs.ensureDirSync(defaultFolderPath); // Ensure folder exists, creates if not

  // For 'panel', create subfolders based on the 'folders' list
  if (defaultFolder === "panel") {
    // create index.html in panel also
    fs.copySync(indexPath, path.join(defaultFolderPath, "index.html"));
    for (const subFolder of folders) {
      const subFolderPath = path.join(defaultFolderPath, subFolder);
      fs.ensureDirSync(subFolderPath); // Ensure subfolder exists

      fs.copySync(indexPath, path.join(subFolderPath, "index.html")); // Copy index.html into each subfolder
    }
  } else {
    // For 'auth' and 'error', simply copy index.html into the folder
    if (defaultFolder === "auth") {
      for (const route of loginRoutes) {
        const routeFolderPath = path.join(defaultFolderPath, route);
        fs.ensureDirSync(routeFolderPath);
        fs.copySync(indexPath, path.join(routeFolderPath, "index.html"));
      }
    }
    fs.copySync(indexPath, path.join(defaultFolderPath, "index.html"));
  }
}
