import React, { ReactElement } from "react";
import { useAppSelector } from "app/hooks";
import { selectUserAddress } from "features/auth/authSlice";
import { useLocation } from "react-router-dom";
import Welcome from "features/welcome/Welcome";
import SNS from "features/share/SNS";
interface MilestoneProps {
  children: ReactElement;
}
const Milestone = ({ children }: MilestoneProps) => {
  const userAddress = useAppSelector(selectUserAddress);
  const { pathname } = useLocation();
  if (pathname.startsWith("/readme")) return <SNS />;
  else if (userAddress) return children;
  else return <Welcome />;
};

export default Milestone;