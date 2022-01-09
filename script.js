
const monthEl = document.querySelector('.calendar__month');
const yearEl = document.querySelector('.calendar__year');
const daysEl = document.querySelector('.calendar__days');
const prevMonthButtonEl = document.querySelector('.calendar__left button');
const nextMonthButtonEl = document.querySelector('.calendar__right button');

const today = new Date();
const state = {
  month: today.getMonth(),
  year: today.getFullYear(),
}
updateElements();

prevMonthButtonEl.addEventListener('click', () => {
  changeMonthBy(-1);
  updateElements()
})
nextMonthButtonEl.addEventListener('click', () => {
  changeMonthBy(1);
  updateElements()
})

function changeMonthBy(offset) {
  console.assert(offset === 1 || offset === -1);
  const MAX_MONTH = 11;
  state.month += offset;
  if (state.month < 0) {
    state.month = MAX_MONTH;
    state.year -= 1;
  } else if (state.month > MAX_MONTH) {
    state.month = 0;
    state.year += 1;
  }
}


 function updateElements() {
  const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const { month, year } = state;
  monthEl.innerHTML = MONTH_NAMES[month];
  yearEl.innerHTML = year;
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const numberOfDaysInMonth = new Date(year, month+1, 0).getDate();
  let spans = ''
  for (let i = 0; i < firstDayOfMonth; i++) {
    spans += '<span></span>';
  }
  for (let i = 1; i <= numberOfDaysInMonth; i++) {
    spans += `<span>${i}</span>`;
  }
  daysEl.innerHTML = spans;
}