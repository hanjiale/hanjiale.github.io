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

  function setupSectionNavigation() {
    function targetForHash(hash) {
      if (!hash || hash === "#") return null;
      try {
        return document.querySelector(hash);
      } catch (error) {
        return null;
      }
    }

    document.addEventListener("click", function (event) {
      var link = event.target.closest(".reference-home .masthead a[href^='#']");
      if (!link) return;
      var target = targetForHash(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) history.replaceState(null, "", link.getAttribute("href"));
    }, true);

    window.addEventListener("load", function () {
      var target = targetForHash(window.location.hash);
      if (!target) return;
      var root = document.documentElement;
      var previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      target.scrollIntoView({ block: "start" });
      window.requestAnimationFrame(function () {
        root.style.scrollBehavior = previousBehavior;
      });
    });
  }

  function initialize() {
    initializeNewsScrollbars();
    setupSectionNavigation();
    new MutationObserver(initializeNewsScrollbars).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
}());
