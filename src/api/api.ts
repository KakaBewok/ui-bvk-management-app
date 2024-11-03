import { MemberFormValues } from "@/pages/members/components/member-form";
import apiClient from "../lib/api-client";

export const getMembers = async () => {
  try {
    const response = await apiClient.get("/dashboard/members");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch members:", error);
    throw error;
  }
};

export const createMember = async (data: MemberFormValues) => {
  try {
    const response = await apiClient.post("/dashboard/members/store", data);
    return response.data;
  } catch (error) {
    console.error("Failed to create member:", error);
    throw error;
  }
};

export const getMemberDetails = async (memberId: string) => {
  try {
    const response = await apiClient.get(`/dashboard/members/${memberId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch member details:", error);
    throw error;
  }
};
