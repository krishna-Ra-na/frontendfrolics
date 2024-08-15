(function () {
  const words = ["Mastering CSS Animation", "Front End Frolics"];

  const texts = document.querySelectorAll(".text");
  texts.forEach((text, index) => {
    console.log("text:", text);
    const letters = words[index].split("");
    console.log("letters:-", letters);
    letters.forEach((letter) => {
      const span = document.createElement("span");

      if (letter === " ") {
        span.textContent = " "; // Keep the space as is
      } else {
        span.textContent = letter; // Set the letter for other cases
      }

      text.append(span);
    });
  });
})();
