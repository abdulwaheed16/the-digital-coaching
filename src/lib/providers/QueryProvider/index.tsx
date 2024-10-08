import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface IProps {
  children: React.ReactNode;
}
const QueryProvider = ({ children }: IProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
