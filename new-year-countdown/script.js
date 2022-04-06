const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);

//retrieve HTML elements
const $today = document.getElementById('today');
const $saved = document.getElementById('saved');
const $form = document.getElementById('form');
const $title = document.getElementById('title');
const $datetime = document.getElementById('datetime');

//date constructor : Date()
//create a date instance using new keyword
const today = new Date();

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
}

$today.innerHTML = today.toLocaleString('en-CA', options);

$form.addEventListener('submit', function(e) {
  e.preventDefault();
  //get the title
  const title = $title.value;

  //get the datetime
  //create date instance
  const datetime = new Date($datetime.value);


  $saved.textContent = `${title} will be saved on ${datetime.toLocaleString('en-CA', options)}`;

  //create a data object
  const data = {
    title: title,
    timestamp: datetime.getTime()
  }

  //store in local storage
  localStorage.setItem('savedDate', JSON.stringify(data));


})

const ls = localStorage.getItem('savedDate');

  if (ls) {
    const data = JSON.parse(ls);

    const title = data.title;
    const datetime = new Date(data.timestamp);


  
  $saved.textContent = `${title} will be saved on ${datetime.toLocaleString('en-CA', options)}`;

  }