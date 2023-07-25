import "./Oficinas.css";
import { cleanPage } from "../../utils/cleanPage";
export const Oficinas = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
BIENVENIDO LOCALES`;
};