let boxes = document.querySelectorAll(".box");
let winAlert = document.querySelector(".win");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let lines = document.querySelectorAll(".line")
let line = ''
let turn = true;

win_case = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (win_case, boxes) => {
  for (let i = 0; i < win_case.length; i++) {
    let val1 = boxes[win_case[i][0]].innerHTML;
    let val2 = boxes[win_case[i][1]].innerHTML;
    let val3 = boxes[win_case[i][2]].innerHTML;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        return [true, val1,[i]];
      }
    }
  }
  return [false];
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerHTML = "X";
      turn = false;
    } else {
      box.innerHTML = "O";
      turn = true;
    }
    box.setAttribute("disabled", "true");

    if (checkWinner(win_case, boxes)[0]) {
      winAlert.innerHTML = `Winner is ${checkWinner(win_case, boxes)[1]}`;
      winAlert.classList.remove("hidden");
      newgame.classList.remove("hidden");
      reset.classList.add("hidden");
      line = lines[checkWinner(win_case,boxes)[2]]
      line.classList.remove('hidden')
      boxes.forEach((box) => {
        box.setAttribute("disabled", "true");
      });
    }
  });
});

newgame.addEventListener("click", () => {
  turn = true;
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.removeAttribute("disabled");
    winAlert.classList.add("hidden");
  });
  line.classList.add('hidden')
  reset.classList.remove("hidden");
  newgame.classList.add("hidden");
});

reset.addEventListener("click", () => {
  turn = true;
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.removeAttribute("disabled");
  });
  winAlert.classList.add("hidden");
});
