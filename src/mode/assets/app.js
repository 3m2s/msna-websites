// MSNA-Mode – gedeeld script. Elke taalpagina zet window.MSNA_MODE_CONFIG (teksten + endpoint).
(function () {
  "use strict";
  var CONFIG = window.MSNA_MODE_CONFIG || {};
  var T = CONFIG.text || {};

  var form = document.getElementById("waitlist-form");
  var emailInput = document.getElementById("waitlist-email");
  var nameInput = document.getElementById("waitlist-name");
  var statusEl = document.getElementById("waitlist-status");
  var submitBtn = document.getElementById("waitlist-submit");
  var successEl = document.getElementById("waitlist-success");

  function setStatus(msg) { statusEl.textContent = msg; statusEl.hidden = false; }
  function showSuccess() { form.hidden = true; successEl.hidden = false; }
  function resetBtn() { submitBtn.disabled = false; submitBtn.textContent = T.submit; }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = emailInput.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus(T.errInvalid); emailInput.focus(); return; }
      statusEl.hidden = true;

      // Zonder endpoint wordt niets opgeslagen: toon dat eerlijk i.p.v. een valse bevestiging.
      if (!CONFIG.endpoint) { setStatus(T.notOpen); return; }

      submitBtn.disabled = true;
      submitBtn.textContent = T.submitting;
      fetch(CONFIG.endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, name: nameInput.value.trim(), lang: CONFIG.lang, website: "MSNA-Mode waitlist" }),
      })
        .then(function (res) { if (res.ok) showSuccess(); else { setStatus(T.errFailed); resetBtn(); } })
        .catch(function () { setStatus(T.errNetwork); resetBtn(); });
    });
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () {
        btn.textContent = btn.getAttribute("data-label-copied");
        setTimeout(function () { btn.textContent = btn.getAttribute("data-label-copy"); }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
    });
  });
})();
