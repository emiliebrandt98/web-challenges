import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button", { name: "Create game" });

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form", { name: "Create a new game" });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  // Create mock function
  const handleSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleSubmit} />);

  const nameInput = screen.getByRole("textbox", { name: "Name of game" });
  const playersInput = screen.getByRole("textbox", {
    name: "Player names, separated by comma",
  });
  const submitButton = screen.getByRole("button", { name: "Create game" });

  await user.type(nameInput, "Dodelido");
  await user.type(playersInput, "John Doe, Jane Doe");
  await user.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  // Create mock function
  const handleSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleSubmit} />);

  const nameInput = screen.getByRole("textbox", { name: "Name of game" });
  const submitButton = screen.getByRole("button", { name: "Create game" });

  await user.type(nameInput, "Dodelido");
  await user.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
});
