import { QueryClient, QueryClientProvider, setLogger } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useTodos } from "../hooks";

describe("todos hooks test", () => {
  test("should fetch all todos", async () => {
    setLogger({
      log: console.log,
      error: () => {},
      warn: console.warn,
    });
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const wrapper = ({ children }) => {
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>;
    };

    const { result, waitFor } = renderHook(() => useTodos(), { wrapper });

    await waitFor(() => result.current.isSuccess, { timeout: 10000 });
    // console.log(result.current);
    expect(await result.current.data).toBeDefined();
  });
});
