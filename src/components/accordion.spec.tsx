import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./accordion";

beforeEach(() => {
  render(
    <Accordion title="Hellow world">
      <h3>Content barcelonista</h3>
    </Accordion>
  );
});

describe("Accordion tests", () => {
  it("Should show title", () => {
    expect(screen.getByText("Hellow world")).toBeDefined();
  });

  it("Should not show content at begining", () => {
    expect(screen.queryByText(/barcelonista/i)).toBeNull();
  });

  it("Should show content when button is pressed", () => {
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.queryByText(/barcelonista/i)).not.toBeNull();

    fireEvent.click(button);
    expect(screen.queryByText(/barcelonista/i)).toBeNull();
  });
});
