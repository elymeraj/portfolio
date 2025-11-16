const enBtn = document.getElementById("en-btn");
const frBtn = document.getElementById("fr-btn");
const skillsList = document.getElementById("skills-list");
const expList = document.getElementById("exp-list");

let currentLang = "en";

async function loadContent(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    const data = await response.json();

    // Home
    document.getElementById("home-title").textContent = data.home.title;
    document.getElementById("home-desc").textContent = data.home.desc;

    // Experience
    document.getElementById("exp-title").textContent = data.experience.title;
    renderExperience(data.experience.items);

    // Projects
    const projects = document.querySelectorAll(".project");
    data.projects.forEach((proj, index) => {
      if (projects[index]) {
        projects[index].querySelector("h3").textContent = proj.title;
        projects[index].querySelector("p").textContent = proj.desc;
        projects[index].querySelector("a").textContent = proj.linkText;
      }
    });

    // CV
    document.getElementById("cv-title").textContent = data.cv.title;
    document.getElementById("cv-download").textContent = data.cv.download;

    // Skills
    renderSkills(data.skills);

    // About 
    document.getElementById("about-title").textContent = data.about.title;
    document.getElementById("about-text").innerHTML =
      data.about.text.split("\n\n").map(p => `<p>${p}</p>`).join("");

    // Contact
    document.getElementById("contact-title").textContent = data.contact.title;
    document.getElementById("contact-linkedin").innerHTML =
      `LinkedIn: <a href="${data.contact.linkedin}" target="_blank">eldis-ymeraj</a>`;
    document.getElementById("contact-github").innerHTML =
      `GitHub: <a href="${data.contact.github}" target="_blank">elymeraj</a>`;
  } catch (error) {
    console.error("Erreur de chargement :", error);
  }
}

function renderExperience(items) {
  expList.innerHTML = "";
  items.forEach(exp => {
    const div = document.createElement("div");
    div.classList.add("experience-item");
    div.innerHTML = `
      <h3>${exp.role} — ${exp.company}</h3>
      <p class="exp-date">${exp.date}</p>
      <ul>
        ${exp.tasks.map(t => `<li>${t}</li>`).join("")}
      </ul>
    `;
    expList.appendChild(div);
  });
}

function renderSkills(skills) {
  skillsList.innerHTML = "";
  for (const [category, items] of Object.entries(skills)) {
    const div = document.createElement("div");
    div.classList.add("skill-category");
    div.innerHTML = `
      <h3>${category}</h3>
      <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
    `;
    skillsList.appendChild(div);
  }
}

enBtn.addEventListener("click", () => loadContent("en"));
frBtn.addEventListener("click", () => loadContent("fr"));

loadContent(currentLang);

// Scroll animations
const sections = document.querySelectorAll("section");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < triggerBottom) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
