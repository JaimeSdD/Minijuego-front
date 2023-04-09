import { randomChoice, updateHistorical } from "../components/GameLogic";
import { API, getHistorical } from "../services/api";


describe("GameLogic functions", () => {

  it("should return a value from the array (randomChoice function)", () => {
    const choices = ["piedra", "papel", "tijeras"];
    const choice = randomChoice();
    const choice1 = randomChoice();
    const choice2 = randomChoice();
    expect(choices).toContain(choice);
    expect(choices).toContain(choice1);
    expect(choices).toContain(choice2);
  });

  it("should retrieve the data from the API", async () => {
    const mockResponse = [
      { player: "piedra", computer: "papel", result: "derrota" },
    ];
    API.get = jest.fn().mockResolvedValue({data: mockResponse});

    const data = await getHistorical();
    expect(data).toEqual(mockResponse);
  });

  it("should update the historical array with the new player choice", () => {
    const playerChoice = "piedra";
    const historical = [{ player: "papel", computer: "piedra", result: "tijeras"}];
    const expectedHistorical = [
      { player: "papel", computer: "piedra", result: "tijeras"},
      { player: "piedra" },
    ];
    const result = updateHistorical(playerChoice, historical);
    expect(result).toEqual(expectedHistorical);
  });


})

