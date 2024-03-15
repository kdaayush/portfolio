document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('show');
  });
  const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
document.addEventListener('DOMContentLoaded', function () {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.transform = `rotate(${(level * 1.8)}deg)`;
  });
});
document.getElementById('facebook-icon').addEventListener('click', function() {
  window.open('https://www.facebook.com/ayushdwibedy');
});

document.getElementById('instagram-icon').addEventListener('click', function() {
  window.open('https://www.instagram.com/');
});

document.getElementById('twitter-icon').addEventListener('click', function() {
  window.open('https://twitter.com/');
});

document.getElementById('github-icon').addEventListener('click', function() {
  window.open('https://github.com/');
});
