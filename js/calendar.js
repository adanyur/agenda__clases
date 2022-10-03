const calendar = document.querySelector("#calendar");
const monthYear = document.querySelector("#monthYear");

const yearMonth = {
  year: moment().year(),
  month: moment().month() + 1,
};

const lastDayMonth = (year, month) => {
  return +moment
    .utc(`${year}-${month}-01`, "YYYY-MM-DD")
    .endOf("month")
    .format("DD");
};

const getDays = (data) => {
  const day = +data + 1;
  const isToday = day === +moment().format("DD");
  return { day, isToday };
};

const getDaysMonth = ({ year, month }) => {
  const endDay = lastDayMonth(year, month);
  return {
    year,
    month,
    dates: Object.keys([...Array(endDay)]).map(getDays),
  };
};

const createElementCheckbox = ({ day, isToday }) => {
  let template = `<input type="radio" name="day" id="${day}" class="input__control__checkbox" ${
    isToday ? "checked" : ""
  }><label class="grid-items" for="${day}">${day}</label>`;
  calendar.innerHTML += template;
};

const week = () => {
  const weeks = ["L", "M", "M", "J", "V", "S", "D"];
  let week = document.querySelector("#week");

  weeks.forEach((week) => {
    week.innerHTML += `<span>${week}</span>`;
  });
};

const createCalendar = () => {
  const { year, month, dates } = getDaysMonth(yearMonth);
  monthYear.innerText = moment(`${year},${month}`, "YYYY-MM").format(
    "MMMM,YYYY"
  );

  dates.forEach(createElementCheckbox);
};

week();
createCalendar();
