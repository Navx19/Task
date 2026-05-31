import { mails } from "@/data/mails";
import { pricingPlans } from "@/data/pricing";
import { currentUser } from "@/data/user";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

export async function loginUser(email: string, password: string) {
  await delay(1000);

  if (email === currentUser.email && password === currentUser.password) {
    return {
      success: true,
      user: currentUser,
    };
  }

  return {
    success: false,
    message: "Invalid email or password.",
  };
}
