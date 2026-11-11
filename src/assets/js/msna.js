// MSNA Cleaning & Support — shared site script
(function(){
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.main');
  if (toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
      var open = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); });
    });
  }
})();

// Quote form handling. Each page sets window.MSNA_FORM_CONFIG before this script runs.
(function(){
  var cfg = window.MSNA_FORM_CONFIG;
  if (!cfg) return;
  var form = document.getElementById('quote-form');
  if (!form) return;
  var msg = document.getElementById('quote-form-msg');
  var panel = document.getElementById('quote-form-panel');
  var successView = document.getElementById('quote-form-success');

  function showMsg(text, type){
    if (!msg) return;
    msg.textContent = text;
    msg.className = 'form-msg show ' + type;
  }
  function hideMsg(){
    if (!msg) return;
    msg.className = 'form-msg';
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    hideMsg();

    var email = (form.querySelector('[name="email"]') || {}).value || '';
    var companyEl = form.querySelector('[name="company"][required]');
    var company = companyEl ? companyEl.value : 'n.v.t.';
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!company.trim()){
      showMsg(cfg.errRequired, 'error');
      return;
    }
    if (!emailOk){
      showMsg(cfg.errInvalidEmail, 'error');
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalLabel = submitBtn ? submitBtn.textContent : '';
    if (submitBtn){ submitBtn.disabled = true; submitBtn.textContent = cfg.submitting; }

    var endpoint = cfg.endpoint;
    if (!endpoint){
      // No endpoint configured yet — this is expected until a real form backend
      // (e.g. Formspree, Basin, a mailto relay) is wired up before launch.
      window.setTimeout(function(){
        if (submitBtn){ submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
        showMsg(cfg.errNoEndpoint, 'error');
      }, 400);
      return;
    }

    var data = new FormData(form);
    fetch(endpoint, { method:'POST', body:data, headers:{ 'Accept':'application/json' } })
      .then(function(res){
        if (res.ok){
          if (panel && successView){
            panel.style.display = 'none';
            successView.style.display = 'block';
          } else {
            showMsg(cfg.success, 'success');
            form.reset();
          }
        } else {
          showMsg(cfg.errFailed, 'error');
        }
      })
      .catch(function(){
        showMsg(cfg.errNetwork, 'error');
      })
      .finally(function(){
        if (submitBtn){ submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
      });
  });
})();
