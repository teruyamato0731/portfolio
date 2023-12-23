const calc_age = (birthday) => {
  let today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  birthday.setFullYear(today.getFullYear());
  if(birthday > today) --age;
  console.log(age);
  return age;
}

const set_age = (birthday) => {
  let age = document.getElementById("age");
  age.innerText = `（${calc_age(birthday)}歳）`;
}

window.addEventListener("load", (event) => {
  let birthday = new Date(document.getElementById("birthday").dateTime);
  set_age(birthday);
});
