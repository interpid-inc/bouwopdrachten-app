import DashboardLayout from "@/app/dashboard/layout";
import AuthLayout from "./AuthLayout";

export const Layouts = {
  Auth: AuthLayout,
  Dashboard: DashboardLayout,
};
export type LayoutKeys = keyof typeof Layouts;
