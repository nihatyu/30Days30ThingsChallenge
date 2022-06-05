const pressed = [];
const secretCode = "future";

window.addEventListener("keyup", (e) => {
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    cornify_add();
  }
});
