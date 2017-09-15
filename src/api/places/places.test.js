import { getPlaces } from "./places";

test("Places data is retrieved", () => {
  const expectedPlaces = [
    { name: "Nomadic Community Gardens" },
    { name: "Old Fountain" },
    { name: "Ace Hotel" },
    { name: "Brewdog Shoreditch" },
    { name: "Crate Brewery" },
    { name: "The Hoxton" },
    { name: "The Alchemist" },
    { name: "La Bouche" },
    { name: "Brick Lane Book Shop" },
    { name: "Mother Kelly's" }
  ];

  const places = getPlaces();
  expect(places).toEqual(expectedPlaces);
});
