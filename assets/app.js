(function () {
  "use strict";

  var content = window.DETAIL_CONTENT || {};

  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var detailView = document.querySelector("[data-detail-view]");
  var contactEl = document.querySelector("[data-section-contact]");

  var state = { section: "home", openPanel: -1, hoverCard: -1, statsRun: false };

  /* Once the first splash/intro playback finishes, mark <body> so the
     home section's fade-in animations skip their long delays the next
     time it's shown (e.g. clicking the "Letizia Pinca" brand link). */
  var homeSectors = document.querySelector(".home__sectors");
  if (homeSectors) {
    homeSectors.addEventListener("animationend", function onIntroDone(e) {
      if (e.animationName !== "fadeUp") return;
      document.body.classList.add("intro-played");
      homeSectors.removeEventListener("animationend", onIntroDone);
    });
  }

  /* ---------- Small helpers ---------- */
  function kwList(keywords) {
    if (!keywords || !keywords.length) return "";
    return '<ul class="kw-list">' +
      keywords.map(function (k) { return "<li>" + escapeHtml(k) + "</li>"; }).join("") +
      "</ul>";
  }
  function brandsLine(brands) {
    if (!brands || !brands.length) return "";
    return brands.join(". ") + ".";
  }
  function kwMarkup(info) {
    if (!info) return "";
    var out = "";
    if (info.keywords && info.keywords.length) {
      out += kwList(info.keywords);
    }
    if (info.brands && info.brands.length) {
      out += '<div class="brands-line">' + escapeHtml(brandsLine(info.brands)) + "</div>";
    }
    return out;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Section switching ---------- */
  function showSection(id) {
    if (id !== "home") document.body.classList.add("intro-played");
    state.section = id;
    var showDetail = id === "detail";
    sections.forEach(function (s) {
      s.classList.toggle("is-active", !showDetail && s.dataset.section === id);
    });
    detailView.classList.toggle("is-active", showDetail);
    navLinks.forEach(function (a) {
      if (a.dataset.nav === "work" || a.dataset.nav === "about") {
        a.classList.toggle("is-active", a.dataset.nav === id);
      }
    });
    if (id === "about" && !state.statsRun) runCounters();
  }

  function scrollToContact() {
    var rect = contactEl.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + rect.top - 20, behavior: "smooth" });
  }

  navLinks.forEach(function (a) {
    a.addEventListener("click", function () {
      var target = a.dataset.nav;
      if (target === "contact") scrollToContact();
      else {
        showSection(target);
        window.scrollTo({ top: 0 });
      }
    });
  });

  /* ---------- Work: cards + accordion panels ---------- */
  var cardsWrap = document.querySelector(".cards");
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-panel]"));

  function renderWork() {
    var active = state.openPanel !== -1 || state.hoverCard !== -1;
    cardsWrap.classList.toggle("is-dimmed", active);
    cards.forEach(function (c) {
      var i = Number(c.dataset.card);
      c.classList.toggle("is-raised", i === state.openPanel || i === state.hoverCard);
    });
    panels.forEach(function (p) {
      p.classList.toggle("is-open", Number(p.dataset.panel) === state.openPanel);
    });
  }

  cards.forEach(function (c) {
    var i = Number(c.dataset.card);
    c.addEventListener("click", function () {
      state.openPanel = state.openPanel === i ? -1 : i;
      renderWork();
    });
    c.addEventListener("mouseenter", function () { state.hoverCard = i; renderWork(); });
    c.addEventListener("mouseleave", function () { state.hoverCard = -1; renderWork(); });
  });

  /* ---------- Fill accordion rows with keywords / brands ---------- */
  var detailRows = Array.prototype.slice.call(document.querySelectorAll("[data-detail]"));
  detailRows.forEach(function (row) {
    var slot = row.querySelector(".row__kw");
    if (slot) slot.innerHTML = kwMarkup(content[row.dataset.detail]);
    row.addEventListener("click", function () { openDetail(row.dataset.detail); });
  });

  /* ---------- Detail views ---------- */
  var dBanner = document.querySelector("[data-detail-banner]");
  var dTitle = document.querySelector("[data-detail-title]");
  var dSub = document.querySelector("[data-detail-subtitle]");
  var dDesc = document.querySelector("[data-detail-descriptor]");
  var dBrands = document.querySelector("[data-detail-brands]");
  var dBody = document.querySelector("[data-detail-body]");
  var dPdfs = document.querySelector("[data-detail-pdfs]");
  var dKw = document.querySelector("[data-detail-keywords]");
  var dKwFact = dKw ? dKw.closest(".fact--kw") : null;
  var dType = document.querySelector("[data-detail-type]");
  var dTypeFact = dType ? dType.closest(".fact--type") : null;

  function openDetail(id) {
    var info = content[id];
    if (!info) return;
    dBanner.textContent = info.banner;
    dTitle.textContent = info.title;

    if (dSub) { dSub.textContent = info.subtitle || ""; dSub.hidden = !info.subtitle; }
    if (dDesc) { dDesc.textContent = ""; dDesc.hidden = true; }
    if (dBrands) {
      var bl = brandsLine(info.brands);
      dBrands.textContent = bl;
      dBrands.hidden = !bl;
    }

    dBody.innerHTML = "";
    info.blocks.forEach(function (block) {
      if (block.h != null) {
        var h = document.createElement("h2");
        h.textContent = block.h;
        dBody.appendChild(h);
      } else if (block.p != null) {
        var p = document.createElement("p");
        p.textContent = block.p;
        dBody.appendChild(p);
      } else if (block.html != null) {
        var d = document.createElement("div");
        d.innerHTML = block.html;
        while (d.firstChild) dBody.appendChild(d.firstChild);
      } else if (block.gallery != null) {
        var g = document.createElement("div");
        g.className = "detail__gallery";
        block.gallery.forEach(function (im) {
          var i = document.createElement("img");
          i.src = im.src;
          i.alt = im.alt || "";
          g.appendChild(i);
        });
        dBody.appendChild(g);
      } else if (block.v != null) {
        var wrap = document.createElement("div");
        wrap.className = "detail__visual" + (block.v.narrow ? " detail__visual--doc" : "");
        if (block.v.maxWidth) {
          wrap.style.maxWidth = block.v.maxWidth + "px";
          wrap.style.marginLeft = "auto";
          wrap.style.marginRight = "auto";
        }
        if (block.v.src) {
          var img = document.createElement("img");
          img.src = block.v.src;
          img.alt = block.v.alt || "";
          img.className = "detail__img" + (block.v.crop ? " detail__img--crop" : "");
          wrap.appendChild(img);
        } else {
          var frame = document.createElement("div");
          frame.className = "frame";
          if (block.v.id) frame.id = block.v.id;
          wrap.appendChild(frame);
        }
        if (block.v.caption) {
          var cap = document.createElement("div");
          cap.className = "cap";
          cap.textContent = block.v.caption;
          wrap.appendChild(cap);
        }
        dBody.appendChild(wrap);
      }
    });

    Array.prototype.slice.call(dBody.querySelectorAll("[data-detail-contact]")).forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        showSection("work");
        requestAnimationFrame(scrollToContact);
      });
    });

    if (dTypeFact) {
      dType.innerHTML = escapeHtml(info.type || "") + (info.projectDate ? "<br>" + escapeHtml(info.projectDate) : "");
      dTypeFact.hidden = !info.type;
    }

    if (dKwFact) {
      dKw.innerHTML = info.keywords && info.keywords.length ? kwList(info.keywords) : "";
      dKwFact.hidden = !(info.keywords && info.keywords.length);
    }

    if (dPdfs) {
      dPdfs.innerHTML = "";
      var pdfs = info.pdfs || [];
      pdfs.forEach(function (pdf) {
        var a = document.createElement("a");
        a.className = "btn-invert";
        a.href = pdf.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = pdf.label + " \u2193";
        dPdfs.appendChild(a);
      });
      dPdfs.hidden = pdfs.length === 0;
    }

    showSection("detail");
    window.scrollTo({ top: 0 });
  }

  document.querySelector("[data-detail-back]").addEventListener("click", function () {
    showSection("work");
  });

  /* ---------- Banner 05: world-map markers ---------- */
  var pins = Array.prototype.slice.call(document.querySelectorAll(".pin"));
  function closePins(except) {
    pins.forEach(function (p) {
      if (p === except) return;
      p.classList.remove("is-open");
      var n = p.querySelector(".pin__note");
      if (n) n.hidden = true;
    });
  }
  pins.forEach(function (pin) {
    pin.addEventListener("click", function (e) {
      e.stopPropagation();
      var note = pin.querySelector(".pin__note");
      var willOpen = pin.classList.contains("is-open") === false;
      closePins(pin);
      pin.classList.toggle("is-open", willOpen);
      if (note) note.hidden = !willOpen;
    });
  });
  document.addEventListener("click", function () { closePins(null); });

  /* ---------- About: animated counters ---------- */
  function runCounters() {
    state.statsRun = true;
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-stat]"));
    var start = performance.now();
    var dur = 1000;
    function step(ts) {
      var p = Math.min((ts - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      nodes.forEach(function (n) {
        n.textContent = Math.round(e * Number(n.dataset.stat));
      });
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
})();
