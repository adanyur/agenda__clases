// import { dateNow } from "./calendar.js";

const URL = "http://localhost:8000";

const agenda = document.querySelector("#agenda");

const ul = (descripcion) => {
  lista = document.createElement("li");
  lista.textContent = descripcion;
  agenda.append(lista);
};

const listadoTurno = () => {
  $.get(`${URL}/turno`, (data) => {
    JSON.parse(data).forEach(({ descripcion }) => {
      ul(descripcion);
    });
  });
};

// console.log(dateNow);
listadoTurno();

// console.log(agenda);
