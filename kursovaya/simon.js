document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.style.display = "none";
  document.getElementById("thankYouMessage").classList.remove("hidden");
});
