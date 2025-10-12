const enBtn = document.getElementById("en-btn");
const frBtn = document.getElementById("fr-btn");
const alBtn = document.getElementById("al-btn"); 
const skillsList = document.getElementById("skills-list");

let currentLang = "en";

async function loadContent(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    const data = await response.json();

    // Home
    document.getElementById("home-title").textContent = data.home.title;
    document.getElementById("home-desc").textContent = data.home.desc;

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
    document.querySelector("#cv h2").textContent = data.cv.title;
    document.querySelector("#cv a").textContent = data.cv.download;

    // Skills 
    renderSkills(data.skills);

    // About 
    document.querySelector("#about h2").textContent = data.about.title;
    const aboutTextContainer = document.getElementById("about-text");
    aboutTextContainer.innerHTML = data.about.text
      .split("\n\n")
      .map(paragraph => `<p>${paragraph}</p>`)
      .join("");

    // Contact
    document.querySelector("#contact h2").textContent = data.contact.title;
    document.querySelector("#contact").querySelectorAll("p")[0].innerHTML =
      `Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a>`;
    document.querySelector("#contact").querySelectorAll("p")[1].textContent =
      `Phone: ${data.contact.phone}`;
    document.querySelector("#contact").querySelectorAll("p")[2].innerHTML =
      `LinkedIn: <a href="${data.contact.linkedin}" target="_blank">eldis-ymeraj</a>`;
    document.querySelector("#contact").querySelectorAll("p")[3].innerHTML =
      `GitHub: <a href="${data.contact.github}" target="_blank">elymeraj</a>`;
  } catch (error) {
    console.error("Erreur de chargement du contenu :", error);
  }
}


function renderSkills(skills) {
  skillsList.innerHTML = "";

  for (const [category, items] of Object.entries(skills)) {
    const catDiv = document.createElement("div");
    catDiv.classList.add("skill-category");

    const title = document.createElement("h3");
    title.textContent = category;
    catDiv.appendChild(title);

    const ul = document.createElement("ul");
    items.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });

    catDiv.appendChild(ul);
    skillsList.appendChild(catDiv);
  }
}

// Switch buttons
enBtn.addEventListener("click", () => {
  currentLang = "en";
  loadContent("en");
});
frBtn.addEventListener("click", () => {
  currentLang = "fr";
  loadContent("fr");
});
alBtn.addEventListener("click", () => {   // ✅ ajouté
  currentLang = "al";
  loadContent("al");
});

//EN par défaut
loadContent(currentLang);

/* ---- ANIMATIONS AU SCROLL ---- */
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
