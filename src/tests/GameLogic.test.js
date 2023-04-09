import { randomChoice, updateHistorical } from "../components/GameLogic";
import { API, deleteHistorical, getHistorical, sendHistorical } from "../services/api";

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

    API.get = jest.fn().mockResolvedValue({ data: mockResponse });

    const data = await getHistorical();
    expect(data).toEqual(mockResponse);
  });

  it("should update the historical array with the new player choice", () => {
    const playerChoice = "piedra";
    const historical = [
      { player: "papel", computer: "piedra", result: "victoria" },
    ];
    const expectedHistorical = [
      { player: "papel", computer: "piedra", result: "victoria" },
      { player: "piedra" },
    ];

    const result = updateHistorical(playerChoice, historical);
    expect(result).toEqual(expectedHistorical);
  });

  it("should send the data to the API and get a response", async () => {
    const newHistorical = [
      { player: "papel", computer: "piedra", result: "victoria" },
      { player: "piedra" },
    ];
    const mockResponse = [
      { player: "papel", computer: "piedra", result: "victoria" },
      { player: "piedra", computer: "tijeras", result: "victoria" },
    ];
    const expectedPayload = JSON.stringify({ historical: newHistorical });

    API.post = jest.fn().mockResolvedValue({ data: mockResponse });

    const data = await sendHistorical(expectedPayload);
    expect(API.post).toHaveBeenCalledWith("/player", expectedPayload);
    expect(data).toEqual(mockResponse);
  });

  it("should call the API with the correct endpoint", async () => {

    API.delete = jest.fn().mockResolvedValue();
    await deleteHistorical();
    expect(API.delete).toHaveBeenCalledWith("/reset");
  })

});
