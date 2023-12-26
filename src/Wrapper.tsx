/* Wrapper.tsx */

/* Imports */
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/* Initialize new query client */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const Wrapper: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* Devtool */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Wrapper;
