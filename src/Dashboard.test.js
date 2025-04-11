import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("filters stocks by name", () => {
  render(<Dashboard />);
  const input = screen.getByPlaceholderText(/search stocks/i);
  fireEvent.change(input, { target: { value: "Tes" } });

  expect(screen.getByText(/Tesla/i)).toBeInTheDocument();
  expect(screen.queryByText(/Apple/i)).not.toBeInTheDocument();
});
