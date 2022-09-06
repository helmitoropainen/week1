import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("my-button").addEventListener("click", function () {
    console.log("hello world");
    document.getElementsByTagName("h1")[0].innerText = "My notebook";
  });

  document.getElementById("add-data").addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.innerText = document.getElementById("text-field").value;
    document.getElementsByTagName("ul")[0].appendChild(newItem);
  });
}
