import "./Oficinas.css";
import { cleanPage } from "../../utils/cleanPage";
import {Proyectlocal } from "./data/Proyectlocal" 
import { OficinaCard } from "../../components/OficinaCard/OficinaCard";
import { Divider } from "../../components/Divider/Divider";
export const Oficinas = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="projects">
<h1>L O C A L E S</h1>
${Divider()}
<div class="projects-container"></div>
</section>`;
const container = document.querySelector(".projects-container");
for (const project of Proyectlocal) {
const figure = document.createElement("figure");
figure.innerHTML = OficinaCard(project);
container.appendChild(figure);
}
};




