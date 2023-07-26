import "./OficinaCard.css";
export const OficinaCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.link}>
<img src="/icons/link.png" alt="Link icon" />
</a>
</div>
</div>
<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;