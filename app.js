(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const typed = new Typed(".multi-text", {
  strings: [
    "AC-DC motor winding",
    "PanelBords",
    "single-phase light fiting",
    "three-phase ligth fiting",
  ],
  typeSpeed: 200,
  backSpeed: 200,
  typeDelay: 3000,
  loop: true,
});

ScrollReveal({ reset: true, distance: "80px", duration: 2000, delay: 200 });
ScrollReveal().reveal(
  ".section1 img,.service h1,.main h1,.main2 h1,.main3 h1",
  {
    origin: "top",
  }
);
ScrollReveal().reveal(
  ".text,.container,.contect form,.main img,.card1 img,.icons,form",
  {
    origin: "bottom",
  }
);
