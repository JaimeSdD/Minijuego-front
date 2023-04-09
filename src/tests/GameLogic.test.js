import { randomChoice } from "../components/GameLogic";

  
  it("should return a value from the array (función randomChoice)", () => {
    const choices = ["piedra", "papel", "tijeras"];
    const choice = randomChoice();
    const choice1 = randomChoice();
    const choice2 = randomChoice();
    expect(choices).toContain(choice);
    expect(choices).toContain(choice1);
    expect(choices).toContain(choice2);
  });

  

  
  