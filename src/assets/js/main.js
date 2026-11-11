// Mobiel menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    document.body.classList.toggle("nav-open", !open);
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

// Formulier vooraf invullen vanuit de link (?dienst=kantoren of ?type=plaatsbezoek)
const params = new URLSearchParams(location.search);
const dienst = document.querySelector('select[name="dienst"]');
if (dienst && params.get("dienst")) dienst.value = params.get("dienst");
const radio = params.get("type") && document.querySelector(`input[name="aanvraag"][value="${CSS.escape(params.get("type"))}"]`);
if (radio) radio.checked = true;

// Formulieren: versturen naar het endpoint uit src/_data/site.js
document.querySelectorAll("form[data-form]").forEach((form) => {
  const show = (name) =>
    form.querySelectorAll(".msg").forEach((m) => (m.hidden = !m.classList.contains("msg-" + name)));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if (form.querySelector('[name="_gotcha"]')?.value) return; // spam

    const endpoint = form.dataset.endpoint;
    if (!endpoint) return show("pending");

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      show("success");
    } catch {
      show("error");
    } finally {
      button.disabled = false;
    }
  });
});
