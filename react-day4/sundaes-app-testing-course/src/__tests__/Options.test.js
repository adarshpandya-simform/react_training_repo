import { render, screen } from "@testing-library/react";
import Options from "../components/Options";

test("should display image for each scoop from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages.length).toBe(2);

  //   confirm alt text
  const altText = scoopImages.map((elem) => elem.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
