import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Router/AppRouter.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.jsx";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </Provider>
);
