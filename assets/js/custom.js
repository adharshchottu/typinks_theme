const para = document.createElement("p");
let url = window.location.href;
let firstSplit = url.split("post/");
let secondSplit = firstSplit[1].split("/");
para.classList.add("comment");
para.innerHTML = secondSplit[0];
document.getElementById("articleContent").append(para);