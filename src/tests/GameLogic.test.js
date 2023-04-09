import { randomChoice } from "../components/GameLogic";
import { API, getHistorical } from "../services/api";

// jest.mock("../services/api.js");

it("should return a value from the array (randomChoice function)", () => {
  const choices = ["piedra", "papel", "tijeras"];
  const choice = randomChoice();
  const choice1 = randomChoice();
  const choice2 = randomChoice();
  expect(choices).toContain(choice);
  expect(choices).toContain(choice1);
  expect(choices).toContain(choice2);
});

describe("API connection functions", () => {

  it("should retrieve the data from the API", async () => {
    const mockResponse = [
      { player: "piedra", computer: "papel", result: "derrota" },
    ];
    API.get = jest.fn().mockResolvedValue({data: mockResponse});

    const data = await getHistorical();
    expect(data).toEqual(mockResponse);
  });
});
