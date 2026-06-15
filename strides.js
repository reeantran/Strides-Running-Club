const SHEET_URL = "https://opensheet.elk.sh/1XnCsDOrH9m69O-AbIC4RmBBtgVXX3HF9qFFNmD5VUpA/Sheet1";

const officerImages = {
  "Jessica": "images/officers/jessica_ly.avif",
  "Sam": "images/officers/sam_bravo.avif",
  "Diego": "images/officers/diego_ramirez.avif",
  "Anica": "images/officers/anica_bangur.avif",
  "Ryan": "images/officers/ryan_tran.avif",
  "Jonathan": "images/officers/jonathan_ho.avif",
  "Liam": "images/officers/liam_lott.avif",
  "Richard": "images/officers/richard_valdez.avif",
  "Colm": "images/officers/colm_grieb.avif",
  "Elaina": "images/officers/elaina_truong.avif",
  "Alex": "images/officers/alex_kelly.avif",
  "Owen": "images/officers/owen_white.avif",
  "Mattie": "images/officers/mattie_whitworth.avif",
  "Naomi": "images/officers/naomi_metzler.avif",
  "Gray": "images/officers/gray_begeman.avif",
  "Dean": "images/officers/dean_mclane.avif",
  "Jacintha": "images/officers/jacintha_shutt.avif",
  "Emily": "images/officers/emily_zhu.avif",
  "Ellie": "images/officers/ellie_anderson.avif",
  "Ernesto": "images/officers/ernesto_carrasco.avif",
  "Jane": "images/officers/jane_pearson.avif",
  "Magaly": "images/officers/magaly_garcia-sanchez.avif",
  "Phillip": "images/officers/phillip_leyva-ramirez.avif",
  "Abby": "images/officers/abby_larsen.avif",
  "Miguel": "images/officers/miguel_flores.avif",
  "Aileen": "images/officers/aileen_bachrens.avif",
  "Noah": "images/officers/noah_balla-hawkins.avif",
  "Ben": "images/officers/ben_alvarez.avif",
  "Sergio": "images/officers/sergio_montano.avif",
  "Joachim": "images/officers/joachim_galil.avif",
  "Hannah": "images/officers/hannah_kim.avif",
  "Roxanna": "images/officers/roxanna_siordia.avif",
  "Amara": "images/officers/amara_maw.avif"
};

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