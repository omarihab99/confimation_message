(function detectLoader() {
  const loader = document.querySelector(".loader");
  const messageContainer = document.querySelector(".message-container");
  loader.addEventListener("animationend", () => {
    messageContainer.classList.add("leave");
    setTimeout(() => {
      messageContainer.style.display = "none";
    }, 300);
  });
})();

const copy = document.querySelector(".copy");
const clear = document.querySelector(".clear");
copy.addEventListener("click", () => {
  const messageContainer = document.querySelector(".message-container");
  messageContainer.style.display = "block";
  messageContainer.classList.remove("leave");
});
clear.addEventListener("click", () => {
  const messageContainer = document.querySelector(".message-container");
  messageContainer.style.display = "none";
});