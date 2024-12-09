import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js"; // Certifique-se de que esta importação está correta
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

// Chame a função `hoverChangeExperience` passando os dados corretos para cada experiência

hoverChangeExperience(
  ".camara",
  `Atuo como suporte técnico aos servidores da instituição.,
  "Câmara Municipal de Guaratinguetá",
  "Jul 2024 - atualmente"
);

hoverChangeExperience(
  ".dev",
  `Atuo como desenvolvedora e programadora no site Develope Community, que é voltado para a diagramação de redações em ABNT de trabalhos acadêmicos.,
  "Fev 2022 - atualmente"
);


