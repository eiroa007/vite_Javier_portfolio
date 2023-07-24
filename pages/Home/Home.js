import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p> I d e a l i s t a  </p>
<h1>Javier Eiroa</h1>
<h2>Bienvenido a la oficina de mi inmobiliaria. Aquí encontrarás información sobre pisos, viviendas y chalets, así como otros datos relevantes.
<a href="mailto:eiroa007@gmail.com">Contacto Aqui →</a>
</section>`;
};