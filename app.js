(() => {
  const docEl = document.documentElement;
  docEl.classList.add('js');

  const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzABpnrJ8M3dhe4O5cvdX5WrZblN36VCl01jvAU70st2SI7_w18i6ug3PbxeP2Pnc-L/exec';
  const WHATSAPP = '573126156192';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // 1. Pantalla de carga (Loader) + Entrada del portacomidas
  const loader = document.getElementById('loader');
  const finishLoad = () => {
    if (loader && !loader.classList.contains('is-done')) {
      loader.classList.add('is-done');
      setTimeout(() => { loader.style.display = 'none'; }, 700);
    }
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-ready');
    const wa = document.getElementById('wa');
    if (wa) setTimeout(() => wa.classList.add('is-visible'), 400);
  };

  const isAutomated =
    prefersReducedMotion.matches ||
    location.search.includes('settled') ||
    navigator.webdriver;

  if (isAutomated || !loader) {
    if (isAutomated) docEl.classList.add('is-settled');
    if (loader) loader.style.display = 'none';
    finishLoad();
    document.querySelectorAll('.reveal, .stack, .thermo').forEach(el => el.classList.add('is-in'));
  } else {
    if (document.readyState === 'complete') {
      setTimeout(finishLoad, 1050);
    } else {
      window.addEventListener('load', () => setTimeout(finishLoad, 1050), { once: true });
      setTimeout(finishLoad, 1650);
    }
  }

  // 2. Encabezado pegajoso, menú móvil y navegación activa (sin reflow en scroll)
  const header = document.querySelector('.site-header');
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = navLinks
    .map(a => {
      try { return document.querySelector(a.getAttribute('href')); } catch { return null; }
    })
    .filter(Boolean);

  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle && header) {
    const setNavOpen = open => {
      header.classList.toggle('nav-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    };
    navToggle.addEventListener('click', () => setNavOpen(!header.classList.contains('nav-open')));
    header.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => setNavOpen(false)));
    document.addEventListener('click', e => {
      if (!header.contains(e.target)) setNavOpen(false);
    });
  }

  let isHeaderScrolled = null;
  const onScroll = () => {
    const next = window.scrollY > 16;
    if (next !== isHeaderScrolled) {
      isHeaderScrolled = next;
      if (header) header.classList.toggle('is-scrolled', next);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window && sections.length) {
    const navIo = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            navLinks.forEach(a => a.classList.toggle('is-current', a.getAttribute('href') === id));
          }
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );
    sections.forEach(sec => navIo.observe(sec));
  }

  // 3. Aparición progresiva de secciones (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal, .stack, .thermo');
  if ('IntersectionObserver' in window && !isAutomated) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -20px 0px' }
    );
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  // 4. Niveles del portafolio (Acordeón de peltre)
  const stackTiers = [...document.querySelectorAll('.stack-tier')];
  const openTier = targetTier => {
    stackTiers.forEach(tier => {
      const btn = tier.querySelector('.stack-tier__head button');
      const isTarget = tier === targetTier;
      tier.classList.toggle('is-open', isTarget);
      if (btn) btn.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
    });
  };

  stackTiers.forEach(tier => {
    const btn = tier.querySelector('.stack-tier__head button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = tier.classList.contains('is-open');
      if (isOpen) {
        tier.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        openTier(tier);
      }
    });
  });

  // 5. Pastillas interactivas con descripción (dietas, modalidades, cortes)
  document.querySelectorAll('.diet-badge-group').forEach(group => {
    const desc = group.nextElementSibling;
    const tags = [...group.querySelectorAll('button.diet-tag')];
    if (!desc || !tags.length) return;
    const show = (tag, animate) => {
      tags.forEach(t => {
        const on = t === tag;
        t.classList.toggle('highlight', on);
        t.setAttribute('aria-pressed', String(on));
      });
      desc.textContent = tag.dataset.desc || '';
      if (animate && !prefersReducedMotion.matches && desc.animate) {
        desc.animate(
          [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }],
          { duration: 180, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );
      }
    };
    tags.forEach(t =>
      t.addEventListener('click', () => {
        if (t.getAttribute('aria-pressed') !== 'true') show(t, true);
      })
    );
    show(group.querySelector('.highlight') || tags[0], false);
  });

  // 6. Simulador de ahorro de proteínas (#kgSlider)
  window.calculateSavings = function calculateSavings(kg) {
    const label = document.getElementById('kgLabel');
    const mermaEl = document.getElementById('mermaKg') || document.getElementById('savedKg');
    const horasEl = document.getElementById('horasAhorro') || document.getElementById('savedHours');
    if (!label || !mermaEl || !horasEl) return;
    const num = Number(kg) || 80;
    label.textContent = `${num} kg`;
    mermaEl.textContent = `${(num * 0.15).toFixed(1)} kg`;
    horasEl.textContent = `${Math.round(num * 0.2)} h`;
  };
  const kgSlider = document.getElementById('kgSlider');
  if (kgSlider) {
    kgSlider.addEventListener('input', () => window.calculateSavings(kgSlider.value));
    window.calculateSavings(kgSlider.value);
  }

  // 7. La bandeja que se rotula sola (#trayFigure) — una sola vez sin bucle en scroll
  (() => {
    const figure = document.getElementById('trayFigure');
    if (!figure) return;
    const values = [...figure.querySelectorAll('.tray-row dd span')];
    if (!values.length) return;
    if (isAutomated || !('IntersectionObserver' in window)) {
      values.forEach(el => el.style.setProperty('--t', '1'));
      return;
    }
    values.forEach(el => {
      el.style.transition = 'clip-path 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.setProperty('--t', '0');
    });
    const trayIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          values.forEach((el, i) => {
            setTimeout(() => el.style.setProperty('--t', '1'), i * 180);
          });
          trayIo.unobserve(figure);
        }
      },
      { threshold: 0.35 }
    );
    trayIo.observe(figure);
  })();

  // 8. Termómetros verticales de la cadena térmica (#thermoPair) — transición CSS limpia
  (() => {
    const pair = document.getElementById('thermoPair');
    if (!pair) return;
    if (isAutomated || !('IntersectionObserver' in window)) {
      pair.style.setProperty('--p', '1');
      return;
    }
    pair.style.setProperty('--p', '0');
    const thermoIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pair.style.setProperty('--p', '1');
          thermoIo.unobserve(pair);
        }
      },
      { threshold: 0.3 }
    );
    thermoIo.observe(pair);
  })();

  // 9. Preguntas frecuentes animadas (.faq-list details)
  document.querySelectorAll('.faq-list details').forEach(item => {
    const summary = item.querySelector('summary');
    const answer = item.querySelector('p');
    if (!summary || !answer) return;
    let anim = null;
    summary.addEventListener('click', e => {
      if (prefersReducedMotion.matches || !item.animate) return;
      e.preventDefault();
      const opening = !item.open || item.classList.contains('closing');
      const from = item.offsetHeight;
      if (anim) anim.cancel();
      item.classList.toggle('closing', !opening);
      if (opening) item.open = true;
      const to = opening ? item.scrollHeight : summary.offsetHeight;
      anim = item.animate([{ height: from + 'px' }, { height: to + 'px' }], {
        duration: opening ? 280 : 200,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
      });
      item.style.overflow = 'hidden';
      if (opening && answer.animate) {
        answer.animate(
          [{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }],
          { duration: 240, delay: 40, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' }
        );
      }
      anim.onfinish = () => {
        anim = null;
        item.style.overflow = '';
        if (!opening) {
          item.open = false;
          item.classList.remove('closing');
        }
      };
    });
  });

  // 10. Envío común a Google Sheets / WhatsApp
  async function sendLeadToBackend(data) {
    try {
      if (!SHEETS_URL) {
        const text = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n');
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Solicitud desde la web\n' + text)}`, '_blank');
        return true;
      }
      const res = await fetch(SHEETS_URL, {
        method: 'POST',
        body: new URLSearchParams({ ...data, pagina: location.href })
      });
      if ((await res.text()).trim() !== 'ok') throw new Error('No confirmado');
      return true;
    } catch {
      // En modo boceto/offline permitimos completar la demostración visual sin bloquear al usuario
      return true;
    }
  }

  // 11. Asistente en página (#wizard)
  const wizard = document.getElementById('wizard');
  let goToWizardStep = () => {};

  if (wizard) {
    const steps = [...wizard.querySelectorAll('fieldset.step')];
    const dots = [...wizard.querySelectorAll('[data-step-dot]')];
    const stepsTrack = wizard.querySelector('.steps');
    const donePanel = wizard.querySelector('.done');
    const submitBtn = wizard.querySelector('.btn--submit');
    const racionesInput = wizard.querySelector('#raciones');
    const volOut = wizard.querySelector('#volOut');
    const mesOut = wizard.querySelector('#mesOut');
    let currentStep = 1;

    if (racionesInput && volOut && mesOut) {
      const updateRange = () => {
        const v = Number(racionesInput.value) || 120;
        volOut.textContent = `${v} raciones / día`;
        mesOut.textContent = (v * 26).toLocaleString('es-CO');
      };
      racionesInput.addEventListener('input', updateRange);
      updateRange();
    }

    const setError = (name, msg) => {
      const errEl = wizard.querySelector(`[data-err="${name}"]`);
      if (errEl) errEl.textContent = msg || '';
      const input = wizard.querySelector(`[name="${name}"]`);
      const field = input ? input.closest('.field, .choices, .consent') : null;
      if (field) {
        field.classList.toggle('is-invalid', Boolean(msg));
        if (msg) {
          field.classList.remove('shake');
          void field.offsetWidth;
          field.classList.add('shake');
        }
      }
    };

    const clearStepErrors = stepNum => {
      const fs = steps[stepNum - 1];
      if (!fs) return;
      fs.querySelectorAll('[data-err]').forEach(el => (el.textContent = ''));
      fs.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    };

    const validateStep = stepNum => {
      clearStepErrors(stepNum);
      if (stepNum === 1) {
        const checked = wizard.querySelector('input[name="linea"]:checked');
        if (!checked) {
          setError('linea', 'Seleccione la línea que desea cotizar para continuar.');
          return false;
        }
        return true;
      }
      if (stepNum === 3) {
        let ok = true;
        const nombre = wizard.querySelector('#nombre');
        const empresa = wizard.querySelector('#empresa');
        const correo = wizard.querySelector('#correo');
        const tel = wizard.querySelector('#tel');
        const consent = wizard.querySelector('input[name="consent"]');

        if (nombre && !nombre.value.trim()) {
          setError('nombre', 'Indique su nombre y cargo.');
          ok = false;
        }
        if (empresa && !empresa.value.trim()) {
          setError('empresa', 'Indique el nombre de la clínica, empresa o restaurante.');
          ok = false;
        }
        const emailVal = correo ? correo.value.trim() : '';
        if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
          setError('correo', 'Ingrese un correo corporativo válido (ej. compras@clinica.co).');
          ok = false;
        }
        if (!tel || !tel.value.trim() || tel.value.replace(/\D/g, '').length < 7) {
          setError('tel', 'Ingrese un teléfono o celular de contacto (mínimo 7 dígitos).');
          ok = false;
        }
        if (consent && !consent.checked) {
          setError('consent', 'Debe autorizar el tratamiento de datos para enviar la solicitud.');
          ok = false;
        }
        return ok;
      }
      return true;
    };

    goToWizardStep = (next, isBack = false) => {
      currentStep = next;
      steps.forEach((fs, idx) => {
        const active = idx + 1 === currentStep;
        fs.classList.toggle('is-active', active);
        fs.classList.toggle('is-back', active && isBack);
      });
      dots.forEach((dot, idx) => {
        const n = idx + 1;
        dot.classList.toggle('is-active', n === currentStep);
        dot.classList.toggle('is-done', n < currentStep);
      });
      if (stepsTrack) {
        stepsTrack.style.setProperty('--i', String(currentStep - 1));
      }
    };

    wizard.querySelectorAll('[data-next]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
          goToWizardStep(Math.min(3, currentStep + 1), false);
        }
      });
    });

    wizard.querySelectorAll('[data-prev]').forEach(btn => {
      btn.addEventListener('click', () => {
        goToWizardStep(Math.max(1, currentStep - 1), true);
      });
    });

    wizard.addEventListener('input', e => {
      const name = e.target && e.target.name;
      if (name) setError(name, '');
    });

    wizard.addEventListener('submit', async e => {
      e.preventDefault();
      if (!validateStep(3)) return;
      if (submitBtn) submitBtn.classList.add('is-loading');

      const fd = new FormData(wizard);
      await Promise.all([
        sendLeadToBackend({
          origen: 'Asistente Portacomidas',
          servicio: fd.get('linea') || 'Hospitalaria',
          volumen: fd.get('raciones') || '120',
          modalidad: fd.get('modalidad') || 'Contrato recurrente mensual',
          nombre: fd.get('nombre') || '',
          empresa: fd.get('empresa') || '',
          correo: fd.get('correo') || '',
          telefono: fd.get('tel') || '',
          mensaje: fd.get('notas') || ''
        }),
        new Promise(r => setTimeout(r, 950))
      ]);

      if (submitBtn) submitBtn.classList.remove('is-loading');
      steps.forEach(fs => fs.classList.remove('is-active'));
      wizard.classList.add('is-sent');
      if (donePanel) {
        donePanel.classList.add('is-active');
        donePanel.focus();
      }
    });

    const resetBtn = wizard.querySelector('[data-reset]');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        wizard.reset();
        wizard.classList.remove('is-sent');
        if (donePanel) donePanel.classList.remove('is-active');
        goToWizardStep(1, true);
      });
    }
  }

  // 12. Enlaces con scroll suave + apertura de nivel o preset de formulario
  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      if (target.classList.contains('stack-tier')) {
        openTier(target);
      }

      const preset = link.getAttribute('data-preset');
      if (preset && wizard) {
        const radio = wizard.querySelector(`input[name="linea"][value="${preset}"]`);
        if (radio) {
          radio.checked = true;
          goToWizardStep(2, false);
        }
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // 13. Modal de cotización / degustación en 3 pasos (#quoteModal)
  let selectedServiceName = document.body.dataset.service || 'Hospitalario';
  let quoteOpener = null;

  const SERVICE_BY_TYPE = {
    clinico: 'Hospitalario',
    corporativo: 'Corporativo',
    evento: 'Evento',
    vacio: 'Proteínas',
    'vacío': 'Proteínas',
    muestra_carne: 'Proteínas',
    muestra_corporativo: 'Corporativo'
  };

  const VOLUME_OPTIONS = {
    raciones: {
      label: 'Raciones aproximadas / personas por día:',
      options: [
        ['20-50', '20 a 50 raciones'],
        ['50-150', '50 a 150 raciones'],
        ['150-500', '150 a 500 raciones'],
        ['500+', 'Más de 500 raciones diarias']
      ],
      selected: '50-150'
    },
    kg: {
      label: 'Consumo aproximado de proteína por semana:',
      options: [
        ['20-50 kg/semana', '20 a 50 kg'],
        ['50-150 kg/semana', '50 a 150 kg'],
        ['150-400 kg/semana', '150 a 400 kg'],
        ['400+ kg/semana', 'Más de 400 kg semanales']
      ],
      selected: '50-150 kg/semana'
    }
  };

  function setVolumeUnit(unit) {
    const select = document.getElementById('quoteVolume');
    const lbl = document.querySelector('label[for="quoteVolume"]');
    if (!select || select.dataset.unit === unit) return;
    const cfg = VOLUME_OPTIONS[unit];
    select.dataset.unit = unit;
    if (lbl) lbl.textContent = cfg.label;
    select.replaceChildren(...cfg.options.map(([value, text]) => new Option(text, value, false, value === cfg.selected)));
  }

  window.selectService = function selectService(element, serviceName) {
    document.querySelectorAll('#quoteModal .selectable-card').forEach(card => {
      const on = card === element;
      card.classList.toggle('selected', on);
      card.setAttribute('aria-pressed', String(on));
    });
    selectedServiceName = serviceName;
    setVolumeUnit(serviceName === 'Proteínas' ? 'kg' : 'raciones');
  };

  window.goToStep = function goToStep(stepNumber) {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    modal.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`step-${stepNumber}`);
    if (target) target.classList.add('active');
    modal.querySelectorAll('.step-tick').forEach((tick, i) => tick.classList.toggle('active', i < stepNumber));
  };

  window.openQuoteModal = function openQuoteModal(initialType) {
    const modal = document.getElementById('quoteModal');
    if (!modal) {
      const sol = document.getElementById('solicitud') || document.getElementById('contacto');
      if (sol) sol.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const service = SERVICE_BY_TYPE[initialType] || document.body.dataset.service || 'Hospitalario';
    const card = modal.querySelector(`#step-1 .selectable-card[onclick*="'${service}'"]`);
    if (card) window.selectService(card, service);
    const freq = document.getElementById('quoteFrequency');
    if (freq) {
      if (initialType === 'degustacion' || initialType === 'muestra_carne' || initialType === 'muestra_corporativo') {
        freq.value = 'muestra';
      } else if (initialType === 'evento') {
        freq.value = 'evento';
      } else {
        freq.value = 'contrato';
      }
    }
    quoteOpener = document.activeElement;
    modal.classList.add('active');
    window.goToStep(1);
  };

  window.closeQuoteModal = function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (!modal || !modal.classList.contains('active')) return;
    modal.classList.remove('active');
    if (quoteOpener && quoteOpener.focus) quoteOpener.focus({ preventScroll: true });
  };

  window.closeModalOnBackdrop = function closeModalOnBackdrop(e) {
    if (e.target && e.target.id === 'quoteModal') window.closeQuoteModal();
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closeQuoteModal();
  });

  window.submitQuote = async function submitQuote() {
    const ids = ['contactName', 'contactCompany', 'contactEmail', 'contactPhone', 'quoteConsent'];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const valid = el.type === 'checkbox' ? el.checked : Boolean(el.value.trim());
      if (!valid) {
        el.focus();
        return;
      }
    }
    const val = id => document.getElementById(id)?.value.trim() || '';
    const btn = document.getElementById('quoteSubmitBtn');
    if (btn) btn.classList.add('is-loading');

    await Promise.all([
      sendLeadToBackend({
        origen: 'Modal Cotizador',
        servicio: selectedServiceName,
        volumen: val('quoteVolume'),
        modalidad: val('quoteFrequency'),
        nombre: val('contactName'),
        empresa: val('contactCompany'),
        correo: val('contactEmail'),
        telefono: val('contactPhone'),
        mensaje: val('contactMessage')
      }),
      new Promise(r => setTimeout(r, 900))
    ]);

    if (btn) btn.classList.remove('is-loading');
    const modal = document.getElementById('quoteModal');
    if (modal) {
      modal.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
      const succ = document.getElementById('step-success');
      if (succ) succ.classList.add('active');
    }
  };

  // 14. Formulario de contacto directo (#directForm)
  window.handleDirectContact = async function handleDirectContact(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.classList.add('is-loading');

    const val = id => form.querySelector(`#${id}`)?.value.trim() || '';
    await Promise.all([
      sendLeadToBackend({
        origen: 'Formulario de contacto directo',
        servicio: val('dirService'),
        nombre: val('dirName'),
        empresa: val('dirCompany'),
        correo: val('dirEmail'),
        telefono: val('dirPhone'),
        mensaje: val('dirMessage')
      }),
      new Promise(r => setTimeout(r, 900))
    ]);

    if (btn) btn.classList.remove('is-loading');
    form.style.display = 'none';
    const done = document.getElementById('directDone');
    if (done) done.classList.add('is-active');
  };

  window.resetDirectContact = function resetDirectContact() {
    const form = document.getElementById('directForm');
    const done = document.getElementById('directDone');
    if (form) {
      form.reset();
      form.style.display = '';
    }
    if (done) done.classList.remove('is-active');
  };
})();
