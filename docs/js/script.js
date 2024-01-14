const $ = (selector) => document.querySelector(selector);

/**
 * 誕生日から年齢を計算する。
 * @param {Date} birthday 誕生日
 * @returns number 年齢
 */
const calc_age = (birthday) => {
  let today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  birthday.setFullYear(today.getFullYear());
  if (birthday > today) --age;
  return age;
}

/**
 * テキストをクリップボードにコピーする。
 * @param {string} text このテキストをクリップボードにコピーする。
 */
const copyText = (text) => {
  let element = document.createElement('input');
  element.value = text;
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
}

/**
 * クリックされた要素のhref属性の値をクリップボードにコピーする。
 * @param {MouseEvent} e クリックイベント
 */
const copyURL = (e) => {
  copyText(e.target.href);
  e.target.ariaLabel = "Copied";
  setTimeout(() => {
    e.target.ariaLabel = "Copy URL";
  }, 2000);
};

window.addEventListener("load", (event) => {
  let elm = $("#birthday");
  if (elm) {
    let birthday = new Date(elm.dateTime);
    $("#age").innerText = `（${calc_age(birthday)}歳）`;
  }
});

window.addEventListener("load", (event) => {
  document.querySelectorAll("body > header h1").forEach((e) => {
    let anchor = document.createElement("a");
    anchor.href = "#";
    anchor.addEventListener("click", copyURL);
    anchor.ariaLabel = "Copy URL";
    e.appendChild(anchor);
  });
  document.querySelectorAll("main>section:has(>h2)").forEach((e) => {
    let anchor = document.createElement("a");
    anchor.href = `#${e.id}`;
    anchor.addEventListener("click", copyURL);
    anchor.ariaLabel = "Copy URL";
    e.querySelector(":scope > h2").appendChild(anchor);
  });
  document.querySelectorAll("a[aria-label]:not([aria-label=''])").forEach((e) => {
    e.appendChild(document.createElement("span"));
  });
});
