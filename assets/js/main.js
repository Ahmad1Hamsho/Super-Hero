/* import { key } from "./key.js"; */

const container = document.querySelector("#container");
const more = document.createElement("section");
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", (e) => {
  more.innerHTML = " ";
  const keyInput = document.getElementById("keyInput").value;
  localStorage.setItem("apiKey", keyInput);
  console.log(localStorage.getItem("apiKey"));
  const key = localStorage.getItem("apiKey");
  document.querySelector("span").style.display = "none";
  container.innerHTML = " ";
  const card = document.createElement("section");
  container.appendChild(card);
  card.id = "card";
  const info = document.createElement("div");
  info.id = "info";
  const bildSection = document.createElement("section");
  const powerstats = document.createElement("section");
  const powerstats1 = document.createElement("section");
  powerstats.classList.add("powerstats");
  const combat = document.createElement("div");
  combat.classList.add("combat");
  const durability = document.createElement("div");
  durability.classList.add("durability");
  const intelligence = document.createElement("div");
  intelligence.classList.add("intelligence");
  const power = document.createElement("div");
  power.classList.add("power");
  const speed = document.createElement("div");
  speed.classList.add("speed");
  const strength = document.createElement("div");
  strength.classList.add("strength");
  const combat1 = document.createElement("div");
  combat1.classList.add("combat");
  const durability1 = document.createElement("div");
  durability1.classList.add("durability");
  const intelligence1 = document.createElement("div");
  intelligence1.classList.add("intelligence");
  const power1 = document.createElement("div");
  power1.classList.add("power");
  const speed1 = document.createElement("div");
  speed1.classList.add("speed");
  const strength1 = document.createElement("div");
  strength1.classList.add("strength");
  const q = document.querySelector("#searchInput").value;
  fetch(`https://superheroapi.com/api/${key}/search/${q}`)
    .then((response) => response.json())
    .then((superheros) => {
      superheros.results.forEach((superhero) => {
        card.appendChild(bildSection);
        bildSection.innerHTML = `<div style="background-image: url(${superhero.image.url});" id="bild"></div>`;
        card.appendChild(info);
        info.innerHTML = `
        <h1>${superhero.name}</h1>
        <h2>${superhero.biography["full-name"]}</h2 > 
        <h3>${superhero.appearance.height[1]} ${superhero.appearance.weight[1]}</h3>
        <h4>${superhero.biography.publisher}</h4>
        <h4>${superhero.connections["group-affiliation"]}</h4>
        <h4>${superhero.connections.relatives}</h4>
        `;
        info.appendChild(powerstats);
        powerstats.innerHTML = `<img src="./assets/img/combat.svg" />
            <img src="./assets/img/durability.svg" />
            <img src="./assets/img/intelligence.svg" />`;
        powerstats.appendChild(combat);
        powerstats.appendChild(durability);
        powerstats.appendChild(intelligence);
        const imgPower = document.createElement("img");
        imgPower.src = "./assets/img/power.svg";
        powerstats.appendChild(imgPower);
        const imgSpeed = document.createElement("img");
        imgSpeed.src = "./assets/img/speed.svg";
        powerstats.appendChild(imgSpeed);
        const imgStrenght = document.createElement("img");
        imgStrenght.src = "./assets/img/strenght.svg";
        powerstats.appendChild(imgStrenght);
        powerstats.appendChild(power);
        powerstats.appendChild(speed);
        powerstats.appendChild(strength);
        combat.innerHTML = `${superhero.powerstats.combat}`;
        durability.innerHTML = `${superhero.powerstats.durability}`;
        intelligence.innerHTML = `${superhero.powerstats.intelligence}`;
        power.innerHTML = `${superhero.powerstats.power}`;
        speed.innerHTML = `${superhero.powerstats.speed}`;
        strength.innerHTML = `${superhero.powerstats.strength}`;
        const combatButton = document.createElement("button");
        combatButton.innerHTML = `⚔️`;
        combatButton.id = "combatButton";
        powerstats.appendChild(combatButton);
        const showMore = document.createElement("button");
        showMore.innerHTML = `<img src="https://img.icons8.com/flat_round/64/000000/info.png"/>`;
        showMore.id = "showMore";
        info.appendChild(showMore);
        showMore.addEventListener("click", (e) => {
          document.body.appendChild(more);
          more.id = "more";
          more.innerHTML = `<div id="biography"><h5>Biography</h5><h6>Full Name : ${superhero.biography["full-name"]}</h6><h6>Alter egos : ${superhero.biography["alter-egos"]}</h6><h6>Aliases : ${superhero.biography.aliases}</h6><h6>Place of birth : ${superhero.biography["place-of-birth"]}</h6><h6>First Appearance : ${superhero.biography["first-appearance"]}</h6><h6>Publisher : ${superhero.biography.publisher}</h6><h6>Alignment : ${superhero.biography.alignment}</h6></div> <div id="appearance"><h5>Appearance</h5><h6> Gender :${superhero.appearance.gender}</h6><h6>Race : ${superhero.appearance.race}</h6><h6>Eye Color :${superhero.appearance["eye-color"]}</h6><h6>Hair Color :${superhero.appearance["hair-color"]}</h6></div> <div id="work"><h5>Work</h5><h6>Occupation :${superhero.work.occupation}</h6><h6>Base :${superhero.work.base}</h6></div><div id="connections"><h5>Connections</h5><h6>Group Affiliation :${superhero.connections["group-affiliation"]}</h6><h6>Relatives: ${superhero.connections.relatives}</h6></div>`;
        });

        combatButton.addEventListener("click", (e) => {
          more.innerHTML = " ";

          const combatRandom = Math.round(Math.random() * 731);
          fetch(`https://superheroapi.com/api/${key}/${combatRandom}`)
            .then((response1) => response1.json())
            .then((superherosId) => {
              card.id = "card1";
              info.innerHTML = "";
              info.innerHTML = `<div style="background-image: url(${superherosId.image.url});" id="bildComp"></div>`;
              powerstats.innerHTML = " ";
              bildSection.appendChild(powerstats);
              powerstats.id = "powerstats1";
              const imgCombat = document.createElement("img");
              imgCombat.src = "./assets/img/combat.svg";
              powerstats.appendChild(imgCombat);
              powerstats.appendChild(combat);
              const imgDurability = document.createElement("img");
              imgDurability.src = "./assets/img/durability.svg";
              powerstats.appendChild(imgDurability);
              powerstats.appendChild(durability);
              const imgIntelligence = document.createElement("img");
              imgIntelligence.src = "./assets/img/intelligence.svg";
              powerstats.appendChild(imgIntelligence);
              powerstats.appendChild(intelligence);
              const imgPower = document.createElement("img");
              imgPower.src = "./assets/img/power.svg";
              powerstats.appendChild(imgPower);
              powerstats.appendChild(power);
              const imgSpeed = document.createElement("img");
              imgSpeed.src = "./assets/img/speed.svg";
              powerstats.appendChild(imgSpeed);
              powerstats.appendChild(speed);
              const imgStrenght = document.createElement("img");
              imgStrenght.src = "./assets/img/strenght.svg";
              powerstats.appendChild(imgStrenght);
              powerstats.appendChild(strength);
              combat.innerHTML = `${superhero.powerstats.combat}`;
              durability.innerHTML = `${superhero.powerstats.durability}`;
              intelligence.innerHTML = `${superhero.powerstats.intelligence}`;
              power.innerHTML = `${superhero.powerstats.power}`;
              speed.innerHTML = `${superhero.powerstats.speed}`;
              strength.innerHTML = `${superhero.powerstats.strength}`;
              info.appendChild(powerstats1);
              powerstats1.id = "powerstats2";
              powerstats1.appendChild(combat1);
              const imgCombat1 = document.createElement("img");
              imgCombat1.src = "./assets/img/combat.svg";
              powerstats1.appendChild(imgCombat1);
              powerstats1.appendChild(durability1);
              const imgDurability1 = document.createElement("img");
              imgDurability1.src = "./assets/img/durability.svg";
              powerstats1.appendChild(imgDurability1);
              powerstats1.appendChild(intelligence1);
              const imgIntelligence1 = document.createElement("img");
              imgIntelligence1.src = "./assets/img/intelligence.svg";
              powerstats1.appendChild(imgIntelligence1);
              powerstats1.appendChild(power1);
              const imgPower1 = document.createElement("img");
              imgPower1.src = "./assets/img/power.svg";
              powerstats1.appendChild(imgPower1);
              powerstats1.appendChild(speed1);
              const imgSpeed1 = document.createElement("img");
              imgSpeed1.src = "./assets/img/speed.svg";
              powerstats1.appendChild(imgSpeed1);
              powerstats1.appendChild(strength1);
              const imgStrenght1 = document.createElement("img");
              imgStrenght1.src = "./assets/img/strenght.svg";
              powerstats1.appendChild(imgStrenght1);
              console.log(superherosId.powerstats);
              combat1.innerHTML = `${superherosId.powerstats.combat}`;
              durability1.innerHTML = `${superherosId.powerstats.durability}`;
              intelligence1.innerHTML = `${superherosId.powerstats.intelligence}`;
              power1.innerHTML = `${superherosId.powerstats.power}`;
              speed1.innerHTML = `${superherosId.powerstats.speed}`;
              strength1.innerHTML = `${superherosId.powerstats.strength}`;
              const superheroSum =
                parseInt(superhero.powerstats.combat) +
                parseInt(superhero.powerstats.durability) +
                parseInt(superhero.powerstats.intelligence) +
                parseInt(superhero.powerstats.power) +
                parseInt(superhero.powerstats.speed) +
                parseInt(superhero.powerstats.strength);
              console.log(superheroSum);
              const superhero1Sum =
                parseInt(superherosId.powerstats.combat) +
                parseInt(superherosId.powerstats.durability) +
                parseInt(superherosId.powerstats.intelligence) +
                parseInt(superherosId.powerstats.power) +
                parseInt(superherosId.powerstats.speed) +
                parseInt(superherosId.powerstats.strength);
              console.log(superhero1Sum);
              const erg = document.createElement("div");
              erg.id = "erg";
              container.appendChild(erg);
              if (superheroSum < superhero1Sum) {
                erg.innerHTML = `<b>${superhero.name}</b> have less Power than <b>${superherosId.name}</b> so You lose 😔`;
              } else if (superheroSum > superhero1Sum) {
                erg.innerHTML = `<b>${superhero.name}</b> have more Power than <b>${superherosId.name}</b> so You Win 😎`;
              } else {
                erg.innerHTML = `<b>${superhero.name}</b> have same Power like <b>${superherosId.name}</b> so live in Peace 🤝`;
              }
              document.querySelector("span").style.display = "block";
            });
        });
      });
    });
  if (key == "") {
    alert("Plase enter your Api key");
  } else {
    document.getElementById("apiKeyDiv").style.display = "none";
  }
});
