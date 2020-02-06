const num = Math.floor(Math.random() * 10 + 1);

let chance = 3;

document.getElementById("sub").addEventListener("click", onload);
function onload() {
  let guess = document.getElementById("guess").value;

  if (guess == num) {
    document.getElementById("res").innerHTML = "Your guess is right";
  } else {
    chance--;
    if (chance <= 0) {
      guess = document.getElementById("guess").disable;
      document.getElementById("res").innerHTML = `Wrong!! Try Again`;
    } else
      document.getElementById("res").innerHTML = `Wrong!! You left ${chance} chance`;
  }
}
