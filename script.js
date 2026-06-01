function showMessage() {
  const message = document.getElementById("message");

  message.innerHTML =
    "✨ Surprise! ✨<br>Mum, you are my greatest blessing, my first teacher, my safe place, and my forever hero.<br><br>Happy Birthday, my beautiful queen 👑❤️🦋";

  message.classList.remove("magic-message");

  void message.offsetWidth;

  message.classList.add("magic-message");
}
