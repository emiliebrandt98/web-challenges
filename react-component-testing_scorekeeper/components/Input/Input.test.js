import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name"
      name="name"
      placeholder="Enter a name"
      value=""
      onChange={() => {}}
    />,
  );
  const input = screen.getByLabelText("Name");

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "name");
  expect(input).toHaveAttribute("placeholder", "Enter a name");
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();

  render(
    <Input labelText="Name" name="name" value="" onChange={handleChange} />,
  );

  const input = screen.getByLabelText("Name");
  await userEvent.type(input, "Jane");

  expect(handleChange).toHaveBeenCalledTimes(4);
});
