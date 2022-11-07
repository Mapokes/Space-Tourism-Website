fetch("/code/data.json", { cache: "no-store" })
  .then((response) => response.json())
  .then((data) => {
    // ==============================
    // DESTINATION
    // ==============================
    const destinationButtons = document.querySelectorAll(".destination-nav");

    // destination buttons functionality
    function activateDestinationButton(clickedDestinationButton) {
      destinationButtons.forEach((destinationButton) => {
        destinationButton.classList.remove("active");
      });
      clickedDestinationButton.classList.add("active");
    }

    destinationButtons.forEach((destinationButton) => {
      destinationButton.addEventListener("click", () => {
        activateDestinationButton(destinationButton);
        renderDestination(destinationButton);
      });
    });

    // renders destination content accordignly
    function renderDestination(clickedDestinationButton) {
      const destinationName = document.querySelector(".destination-name");
      const destinationDescription = document.querySelector(".destination-description");
      const destinationDistance = document.querySelector(".destination-distance");
      const destinationTravel = document.querySelector(".destination-travel");
      const destinationImg = document.querySelector(".destination-img");

      for (let i = 0; i < data.destinations.length; i++) {
        if (data.destinations[i].name == clickedDestinationButton.value) {
          destinationName.textContent = data.destinations[i].name;
          destinationDescription.textContent = data.destinations[i].description;
          destinationDistance.textContent = data.destinations[i].distance;
          destinationTravel.textContent = data.destinations[i].travel;
          destinationImg.src = data.destinations[i].images.png;
        }
      }
    }

    // ==============================
    // CREW
    // ==============================
    const crewButtons = document.querySelectorAll(".crew-nav");

    // crew buttons functionality
    function activateCrewButton(clickedCrewButton) {
      crewButtons.forEach((crewButton) => {
        crewButton.classList.remove("active");
      });
      clickedCrewButton.classList.add("active");
    }

    crewButtons.forEach((crewButton) => {
      crewButton.addEventListener("click", () => {
        activateCrewButton(crewButton);
        renderCrew(crewButton);
      });
    });

    // renders crwe content accordignly
    function renderCrew(clickedCrewButton) {
      const crewName = document.querySelector(".crew-name");
      const crewRole = document.querySelector(".crew-role");
      const crewBio = document.querySelector(".crew-bio");
      const crewImg = document.querySelector(".crew-img");

      for (let i = 0; i < data.crew.length; i++) {
        if (data.crew[i].name == clickedCrewButton.value) {
          crewName.textContent = data.crew[i].name;
          crewRole.textContent = data.crew[i].role;
          crewBio.textContent = data.crew[i].bio;
          crewImg.src = data.crew[i].images.png;
        }
      }
    }

    // ==============================
    // TECHNOLOGY
    // ==============================
    const technologyButtons = document.querySelectorAll(".technology-nav");

    // technology buttons functionality
    function activateTechnologyButton(clickedTechnologyButton) {
      technologyButtons.forEach((technologyButton) => {
        technologyButton.classList.remove("active");
      });
      clickedTechnologyButton.classList.add("active");
    }

    technologyButtons.forEach((technologyButton) => {
      technologyButton.addEventListener("click", () => {
        activateTechnologyButton(technologyButton);
        renderTechnology(technologyButton.name);
      });
    });

    // renders technology content accordignly
    function renderTechnology(clickedTechnologyButton) {
      const technologyName = document.querySelector(".technology-name");
      const technologyDescription = document.querySelector(".technology-description");

      for (let i = 0; i < data.technology.length; i++) {
        if (data.technology[i].name == clickedTechnologyButton) {
          technologyName.textContent = data.technology[i].name;
          technologyDescription.textContent = data.technology[i].description;
        }
      }

      // sets hidden property on technology pictures accordignly
      const technologyImgs = document.querySelectorAll(".technology-img");

      technologyImgs.forEach((technologyImg) => {
        technologyImg.setAttribute("hidden", "");

        if (technologyImg.parentElement.id == clickedTechnologyButton.toLowerCase().replace(" ", "-")) {
          technologyImg.removeAttribute("hidden");
        }
      });
    }
  });

// ==============================
// mobile nav functionality
// ==============================
const mobileNavButton = document.querySelector(".mobile-nav-control img");
const navBar = document.querySelector(".site-nav");
let toggle = true;

mobileNavButton.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    mobileNavButton.src = "/code/assets/shared/icon-hamburger.svg";
  } else {
    mobileNavButton.src = "/code/assets/shared/icon-close.svg";
  }
  navBar.classList.toggle("active");
});
