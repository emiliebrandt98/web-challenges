import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player />);

  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  // Create mock functions
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  const user = userEvent.setup();

  render(
    <Player
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />,
  );
  const decreaseButton = screen.getByRole("button", { name: "Decrease Score" });
  const increaseButton = screen.getByRole("button", { name: "Increase Score" });

  await user.click(increaseButton);
  await user.click(decreaseButton);
  await user.click(increaseButton);

  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(2);
});
