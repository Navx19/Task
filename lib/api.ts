import { mails } from "@/data/mails";
import { pricingPlans } from "@/data/pricing";
import { currentUser } from "@/data/user";

// Simulate API delay
const delay = (ms: number) =>
     new Promise((resolve) => setTimeout(resolve, ms));

// Get all mails
export async function getMails() {
  await delay(1000);

  return mails;
}

export async function getPricingPlans() {
  await delay(1000);
  return pricingPlans;
}

export async function getCurrentUser() {
  await delay(1000);
  return currentUser;
}
