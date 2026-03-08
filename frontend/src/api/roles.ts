import { API_BASE_URL } from "@/config/api";

export const getRoles = async () => {
  console.log(API_BASE_URL)
  const res = await fetch(`${API_BASE_URL}/roles`);

  if (!res.ok) {
    throw new Error("Failed to fetch roles");
  }

  return res.json();
};