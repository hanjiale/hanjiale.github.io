(function () {
  "use strict";

  function setupNewsScrollbar(scroller) {
    if (scroller.dataset.customScrollbar === "ready") return;
    scroller.dataset.customScrollbar = "ready";

    var shell = document.createElement("div");
    shell.className = "homepage-news-shell";
    scroller.parentNode.insertBefore(shell, scroller);
    shell.appendChild(scroller);

    var track = document.createElement("div");
    track.className = "news-scrollbar";
    track.setAttribute("aria-hidden", "true");
    var thumb = document.createElement("div");
    thumb.className = "news-scrollbar__thumb";
    track.appendChild(thumb);
    shell.appendChild(track);

    function metrics() {
      return {
        maxScroll: Math.max(0, scroller.scrollHeight - scroller.clientHeight),
        maxTop: Math.max(0, track.clientHeight - thumb.offsetHeight)
      };
    }

    function updateThumb() {
      var size = metrics();
      track.hidden = size.maxScroll === 0;
      var top = size.maxScroll ? (scroller.scrollTop / size.maxScroll) * size.maxTop : 0;
      thumb.style.transform = "translateY(" + top + "px)";
    }

    scroller.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb, { passive: true });

    thumb.addEventListener("pointerdown", function (event) {
      event.preventDefault();
      thumb.setPointerCapture(event.pointerId);
      thumb.classList.add("is-dragging");
      var startY = event.clientY;
      var startScroll = scroller.scrollTop;

      function drag(moveEvent) {
        var size = metrics();
        if (!size.maxTop) return;
        scroller.scrollTop = startScroll + ((moveEvent.clientY - startY) / size.maxTop) * size.maxScroll;
      }

      function stop() {
        thumb.classList.remove("is-dragging");
        thumb.removeEventListener("pointermove", drag);
        thumb.removeEventListener("pointerup", stop);
        thumb.removeEventListener("pointercancel", stop);
      }

      thumb.addEventListener("pointermove", drag);
      thumb.addEventListener("pointerup", stop);
      thumb.addEventListener("pointercancel", stop);
    });

    track.addEventListener("pointerdown", function (event) {
      if (event.target === thumb) return;
      var size = metrics();
      var rect = track.getBoundingClientRect();
      var top = Math.max(0, Math.min(size.maxTop, event.clientY - rect.top - thumb.offsetHeight / 2));
      scroller.scrollTo({ top: size.maxTop ? (top / size.maxTop) * size.maxScroll : 0, behavior: "smooth" });
    });

    updateThumb();
  }

  function initializeNewsScrollbars() {
    document.querySelectorAll(".homepage-news-scroll").forEach(setupNewsScrollbar);
  }

  function setupHomeNavigation() {
    var nav = document.getElementById("home-site-nav");
    if (!nav || nav.dataset.homeNavigation === "ready") return;
    nav.dataset.homeNavigation = "ready";

    var button = nav.querySelector("button");
    var visible = nav.querySelector(".visible-links");
    var hidden = nav.querySelector(".hidden-links");
    if (!button || !visible || !hidden) return;

    visible.querySelectorAll("li:not(.masthead__menu-item--lg)").forEach(function (item) {
      hidden.appendChild(item.cloneNode(true));
    });

    function closeMenu() {
      hidden.classList.add("hidden");
      button.classList.remove("close");
      button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = hidden.classList.contains("hidden");
      hidden.classList.toggle("hidden", !willOpen);
      button.classList.toggle("close", willOpen);
      button.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    hidden.addEventListener("click", closeMenu);
    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target)) closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 924) closeMenu();
    }, { passive: true });
  }

  function setupSectionNavigation() {
    var nav = document.getElementById("home-site-nav");

    function targetForHash(hash) {
      if (!hash || hash === "#") return null;
      try {
        return document.querySelector(hash);
      } catch (error) {
        return null;
      }
    }

    function sectionHashForLink(link) {
      var url;
      try {
        url = new URL(link.href, window.location.href);
      } catch (error) {
        return "";
      }
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return "";
      return targetForHash(url.hash) ? url.hash : "";
    }

    function setActiveSection(hash) {
      if (!nav || /(?:students-openings|opportunities)/.test(window.location.pathname)) return;
      var activeHash = hash || "#home";
      nav.querySelectorAll(".visible-links > li, .hidden-links > li").forEach(function (item) {
        if (item.classList.contains("masthead__menu-item--lg") || item.classList.contains("home-language-link")) return;
        var link = item.querySelector("a");
        item.classList.toggle("masthead__menu-item--active", !!link && sectionHashForLink(link) === activeHash);
      });
    }

    function activeSectionForScroll() {
      var masthead = document.querySelector(".reference-home .masthead");
      var threshold = (masthead ? masthead.getBoundingClientRect().height : 0) + 24;
      var activeHash = "#home";
      var pageHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      if (window.scrollY + window.innerHeight >= pageHeight - 2 && document.getElementById("services")) return "#services";
      ["news", "background", "publications", "awards", "services"].forEach(function (id) {
        var section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) activeHash = "#" + id;
      });
      return activeHash;
    }

    var scrollFrame = null;
    var pauseScrollTrackingUntil = window.location.hash ? window.performance.now() + 1000 : 0;
    function updateActiveSectionForScroll() {
      if (window.performance.now() < pauseScrollTrackingUntil) return;
      if (scrollFrame !== null) return;
      scrollFrame = window.requestAnimationFrame(function () {
        scrollFrame = null;
        setActiveSection(activeSectionForScroll());
      });
    }

    document.addEventListener("click", function (event) {
      var link = event.target.closest(".reference-home .masthead a");
      if (!link) return;
      var hash = sectionHashForLink(link);
      var target = targetForHash(hash);
      if (!target) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      setActiveSection(hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) history.replaceState(null, "", hash);
    }, true);

    window.addEventListener("load", function () {
      if (window.location.hash && targetForHash(window.location.hash)) {
        pauseScrollTrackingUntil = window.performance.now() + 1000;
        setActiveSection(window.location.hash);
      } else {
        updateActiveSectionForScroll();
      }
    });

    window.addEventListener("hashchange", function () {
      if (window.location.hash && targetForHash(window.location.hash)) {
        pauseScrollTrackingUntil = window.performance.now() + 500;
        setActiveSection(window.location.hash);
      } else {
        updateActiveSectionForScroll();
      }
    });

    window.addEventListener("scroll", updateActiveSectionForScroll, { passive: true });
    window.addEventListener("resize", updateActiveSectionForScroll, { passive: true });
    updateActiveSectionForScroll();
  }

  function initialize() {
    initializeNewsScrollbars();
    setupHomeNavigation();
    setupSectionNavigation();
    new MutationObserver(initializeNewsScrollbars).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
}());
