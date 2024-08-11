let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");

const choices_object = {
  rock: {
    rock: "draw",
    scissor: "win",
    paper: "lose",
  },
  scissor: {
    rock: "lose",
    scissor: "draw",
    paper: "win",
  },
  paper: {
    rock: "win",
    scissor: "lose",
    paper: "draw",
  },
};

function checker(input) {
  const choices = ["rock", "paper", "scissor"];
  const num = Math.floor(Math.random() * 3);
  const computer_choice = choices[num];

  document.getElementById(
    "comp_choice"
  ).innerHTML = `Computer chose <span>${computer_choice.toUpperCase()}</span>`;
  document.getElementById(
    "user_choice"
  ).innerHTML = `You chose <span>${input.toUpperCase()}</span>`;

  switch (choices_object[input][computer_choice]) {
    case "win":
      result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
      result_ref.innerHTML = "YOU WIN";
      user_score++;
      break;
    case "lose":
      result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
      result_ref.innerHTML = "YOU LOSE";
      computer_score++;
      break;
    default:
      result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
      result_ref.innerHTML = "DRAW";
      break;
  }

  document.getElementById("computer_score").innerHTML = computer_score;
  document.getElementById("user_score").innerHTML = user_score;
}
