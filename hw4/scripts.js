/* ============================================================
   scripts.js — Nouf Bin Jurayyad Portfolio
   HW4: DOM Manipulation & Interactivity
   ============================================================ */

/* ── 1. HOMEPAGE: Dynamically add load timestamp to footer ── */
window.onload = function () {
  var footer = document.querySelector("footer[role='contentinfo']");
  if (footer) {
    var now = new Date();
    var timestamp = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    var p = document.createElement("p");
    var textNode = document.createTextNode("Page loaded on: " + timestamp);
    p.appendChild(textNode);
    p.style.fontSize = "0.78rem";
    p.style.color = "#7c6fac";
    p.style.textAlign = "center";
    p.style.marginTop = "0.75rem";
    p.style.fontStyle = "italic";
    footer.appendChild(p);
  }
};

/* ── 2. CONTACT PAGE: Form validation ── */
var contactForm = document.querySelector("form[aria-label='Contact form']");
if (contactForm) {
  contactForm.onsubmit = function (event) {
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");

    if (nameField.value.trim() === "" || emailField.value.trim() === "") {
      alert("Please fill out all required fields.");
      event.preventDefault();
      return false;
    }
    return true;
  };
}

/* ── 3. PROJECTS PAGE: Toggle project description visibility ── */
function toggleDescription(buttonEl, descId) {
  var desc = document.getElementById(descId);
  if (!desc) return;

  if (desc.style.display === "none") {
    desc.style.display = "block";
    buttonEl.textContent = "Hide Description ▲";
    buttonEl.setAttribute("aria-expanded", "true");
  } else {
    desc.style.display = "none";
    buttonEl.textContent = "Show Description ▼";
    buttonEl.setAttribute("aria-expanded", "false");
  }
}

/* ── 4. CV PAGE: Blockquote hover interactivity ── */
var blockquote = document.querySelector("blockquote");
if (blockquote) {
  blockquote.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#ede9fe";
    this.style.fontStyle = "italic";
    this.style.transform = "scale(1.02)";
    this.style.boxShadow = "0 4px 18px rgba(124,58,237,0.18)";
    this.style.transition = "all 0.25s ease";
  });

  blockquote.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
    this.style.fontStyle = "";
    this.style.transform = "";
    this.style.boxShadow = "";
  });
}
