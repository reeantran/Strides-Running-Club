const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".day-content");

  function activateDay(day) {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    const activeTab = document.querySelector(`.tab[data-day="${day}"]`);
    const activeContent = document.getElementById(day);

    if (activeTab && activeContent) {
      activeTab.classList.add("active");
      activeContent.classList.add("active");
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      activateDay(tab.dataset.day);
    });
  });

  let today = new Date().getDay(); 

  if (today === 0) {
    today = 1;
  }

  const dayMap = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
  };

  activateDay(dayMap[today]);
});