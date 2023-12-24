const calc_age = (birthday) => {
  let today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  birthday.setFullYear(today.getFullYear());
  if (birthday > today) --age;
  return age;
}

const set_age = (birthday) => {
  let age = document.getElementById("age");
  age.innerText = `（${calc_age(birthday)}歳）`;
}

function copyText(text) {
  // console.log(text);
  let element = document.createElement('input');
  element.value = text;
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
}

const copyURL = (e) => {
  // console.log(e.target);
  copyText(e.target.href);
  e.target.ariaLabel = "Copied";
  setTimeout(() => {
    e.target.ariaLabel = "Copy URL";
  }, 2000);
};

window.addEventListener("load", (event) => {
  let birthday = new Date(document.getElementById("birthday").dateTime);
  set_age(birthday);
});

window.addEventListener("load", (event) => {
  document.querySelectorAll(".main>section").forEach((e) => {
    let anchor = document.createElement("a");
    anchor.href = `#${e.id}`;
    anchor.addEventListener("click", copyURL);
    anchor.ariaLabel = "Copy URL";
    e.querySelector(":scope > h2").appendChild(anchor);
  });
});
