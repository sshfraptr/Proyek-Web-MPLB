function toggleBilingualView(isBilingual) {
            const viewMain = document.getElementById('view-main');
            const viewBilingual = document.getElementById('view-bilingual');
            
            const headerTitle = document.getElementById('header-title');
            const headerLogo = document.getElementById('header-logo-img');
            
            const footerTitle1 = document.getElementById('footer-title-1');
            const footerTitle2 = document.getElementById('footer-title-2');
            const footerLogo = document.getElementById('footer-logo-img');

            if (isBilingual) {
                viewMain.classList.remove('active');
                viewBilingual.classList.add('active');
                
                headerTitle.innerHTML = "SKILL CONCENTRATION<br>Office Management";
                headerLogo.src = "assets/LOGO/BI.png"; 
                
                footerTitle1.innerText = "SKILL CONCENTRATION";
                footerTitle2.innerText = "Office Management";
                footerLogo.src = "assets/LOGO/BI.png";
            } else {
                viewBilingual.classList.remove('active');
                viewMain.classList.add('active');
                
                headerTitle.innerHTML = "KONSENTRASI KEAHLIAN<br>Manajemen Perkantoran";
                headerLogo.src = "assets/LOGO/MP.png";
                
                footerTitle1.innerText = "KONSENTRASI KEAHLIAN";
                footerTitle2.innerText = "Manajemen Perkantoran";
                footerLogo.src = "assets/LOGO/MP.png";
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

(function () {
  'use strict';

  const CONFIG = {
    BG_COLOR: '#f4f5f7', // Match your --bg-page
    DURATION: 400,
    EASING: 'cubic-bezier(0.4, 0, 0.2, 1)'
  };

  // ---- 1. Prevent white flash ----
  const style = document.createElement('style');
  style.textContent = `
    html { background: ${CONFIG.BG_COLOR}; }
    
    /* View Transition Animations */
    @keyframes vt-fade-out {
      to { opacity: 0; transform: translateY(-10px); }
    }
    @keyframes vt-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Navbar & Footer stay FROZEN */
    ::view-transition-group(header),
    ::view-transition-group(footer) {
      animation: none;
    }

    /* Main content animates */
    ::view-transition-old(main) {
      animation: ${CONFIG.DURATION}ms ${CONFIG.EASING} both vt-fade-out;
    }
    ::view-transition-new(main) {
      animation: ${CONFIG.DURATION}ms ${CONFIG.EASING} both vt-fade-in;
    }
  `;
  document.head.appendChild(style);

  // ---- 2. Tag elements for View Transitions ----
  function tagElements() {
    const header = document.querySelector('.top-header');
    const footer = document.querySelector('.site-footer');
    const main = document.querySelector('main');

    if (header) header.style.viewTransitionName = 'header';
    if (footer) footer.style.viewTransitionName = 'footer';
    if (main) main.style.viewTransitionName = 'main';
  }

  tagElements();
  document.addEventListener('DOMContentLoaded', tagElements);

  // ---- 3. Intercept Link Clicks ----
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link || !link.href) return;

    // Ignore external links, new tabs, and hash links
    if (link.target === '_blank' || link.hostname !== window.location.hostname) return;
    if (link.getAttribute('href').startsWith('#')) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    // If it's the current page, ignore
    const url = new URL(link.href);
    if (url.pathname === window.location.pathname && !url.hash) return;

    // If browser doesn't support View Transitions, let it load normally
    if (!document.startViewTransition) return;

    e.preventDefault();

    // Fade out the main content smoothly
    document.startViewTransition(() => {
      // We use a full page load here so that the new page's CSS is applied properly.
      // The View Transition API freezes the screen, loads the new URL, and crossfades.
      window.location.href = link.href;
    });
  });

  // ---- 4. Handle Back/Forward Cache ----
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      tagElements();
    }
  });

})();

        function toggleBilingualView(isBilingual) {
            const viewMain = document.getElementById('view-main');
            const viewBilingual = document.getElementById('view-bilingual');
            
            // Header Elements
            const headerTitle = document.getElementById('header-title');
            const headerLogo = document.getElementById('header-logo-img');
            
            // Footer Elements
            const footerTitle1 = document.getElementById('footer-title-1');
            const footerTitle2 = document.getElementById('footer-title-2');
            const footerLogo = document.getElementById('footer-logo-img');

            // Slider Logo in the middle (Main View)
            const carouselLogo = document.getElementById('carousel-logo-img');
            const dotMain = document.getElementById('dot-main');
            const dotBi = document.getElementById('dot-bi');

            if (isBilingual) {
                // Switch to Bilingual View
                viewMain.classList.remove('active');
                viewBilingual.classList.add('active');
                
                // Change Header & Footer text/logos
                headerTitle.innerHTML = "<span class='text-normal'>SKILL CONCENTRATION</span><br>Office Management";
                headerLogo.src = "assets/LOGO/BI.png"; 
                
                footerTitle1.innerText = "SKILL CONCENTRATION";
                footerTitle2.innerText = "Office Management";
                footerLogo.src = "assets/LOGO/BI.png";

                // Change carousel logo and dots
                if(carouselLogo) carouselLogo.src = "assets/LOGO/BI.png";
                if(dotMain && dotBi) {
                    dotMain.classList.remove('active');
                    dotBi.classList.add('active');
                }
            } else {
                // Switch back to Main View
                viewBilingual.classList.remove('active');
                viewMain.classList.add('active');
                
                // Reset Header & Footer text/logos
                headerTitle.innerHTML = "<span class='text-normal'>KONSENTRASI KEAHLIAN</span><br>Manajemen Perkantoran";
                headerLogo.src = "assets/LOGO/MP.png";
                
                footerTitle1.innerText = "KONSENTRASI KEAHLIAN";
                footerTitle2.innerText = "Manajemen Perkantoran";
                footerLogo.src = "assets/LOGO/MP.png";

                // Reset carousel logo and dots
                if(carouselLogo) carouselLogo.src = "assets/LOGO/MP.png";
                if(dotMain && dotBi) {
                    dotBi.classList.remove('active');
                    dotMain.classList.add('active');
                }
            }
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
/* ============================================================
   PAGE TRANSITION ANIMATION
   For multi-page sites (index.html, mapel.html, prospek.html, pembuat.html)
   
   HOW TO USE:
   1. Save this file as "page-transition.js" in your project root
   2. Add these 2 lines to the <head> of EVERY HTML file,
      right after <meta name="viewport">:
      
      <style>html{background:#f4f5f7;}</style>
      <script src="page-transition.js"></script>
      
   The inline <style> prevents white flash.
   The <script> MUST be in <head> without defer/async.
   ============================================================ */

(function () {
  'use strict';

  // ============================================================
  // CONFIG — change these to match your site
  // ============================================================
  const CONFIG = {
    // Must match your site's --bg-page color (#f4f5f7 = light grey)
    OVERLAY_COLOR: '#f4f5f7',

    // Duration of fade in/out (milliseconds)
    FADE_DURATION: 450,

    // Optional: add a subtle spinner inside the overlay
    SHOW_SPINNER: false,

    // Spinner color
    SPINNER_COLOR: '#7a1a2b',

    // Respect prefers-reduced-motion (accessibility)
    RESPECT_REDUCED_MOTION: true
  };

  // ============================================================
  // CHECK REDUCED MOTION PREFERENCE
  // ============================================================
  function prefersReducedMotion() {
    if (!CONFIG.RESPECT_REDUCED_MOTION) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  const reduceMotion = prefersReducedMotion();
  const effectiveDuration = reduceMotion ? 0 : CONFIG.FADE_DURATION;

  // ============================================================
  // INJECT STYLES INTO <HEAD> AS EARLY AS POSSIBLE
  // ============================================================
  const style = document.createElement('style');
  style.id = 'page-transition-styles';
  style.textContent = `
    /* Lock html background so no white flash before body renders */
    html {
      background: ${CONFIG.OVERLAY_COLOR};
    }

    /* The overlay that covers the page during transitions */
    #page-transition-overlay {
      position: fixed;
      inset: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${CONFIG.OVERLAY_COLOR};
      z-index: 2147483647; /* max z-index */
      pointer-events: none;
      opacity: 0;
      transition: opacity ${effectiveDuration}ms cubic-bezier(0.4, 0, 0.2, 1);
      will-change: opacity;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* When active, cover the whole page and block clicks */
    #page-transition-overlay.is-covering {
      opacity: 1;
      pointer-events: all;
    }

    /* Optional spinner inside overlay */
    #page-transition-overlay .pt-spinner {
      width: 44px;
      height: 44px;
      border: 3px solid rgba(122, 26, 43, 0.15);
      border-top-color: ${CONFIG.SPINNER_COLOR};
      border-radius: 50%;
      animation: pt-spin 0.8s linear infinite;
      opacity: 0;
      transition: opacity 200ms ease 100ms;
    }

    #page-transition-overlay.is-covering .pt-spinner {
      opacity: 1;
    }

    @keyframes pt-spin {
      to { transform: rotate(360deg); }
    }

    /* Reduced-motion: no animation, no spinner */
    @media (prefers-reduced-motion: reduce) {
      #page-transition-overlay {
        transition: none;
      }
      #page-transition-overlay .pt-spinner {
        animation: none;
        display: none;
      }
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  // ============================================================
  // CREATE OVERLAY ELEMENT
  // Overlay starts at opacity: 1 (inline) so the FIRST paint of
  // the new page is already covered -> zero white flash.
  // Then JS fades it out on DOMContentLoaded.
  // ============================================================
  let overlay = null;

  function createOverlay() {
    // Check if overlay already exists (bfcache restore)
    overlay = document.getElementById('page-transition-overlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'page-transition-overlay';

    // Start fully opaque — covers first paint
    overlay.style.opacity = '1';

    // Add spinner if enabled
    if (CONFIG.SHOW_SPINNER && !reduceMotion) {
      const spinner = document.createElement('div');
      spinner.className = 'pt-spinner';
      overlay.appendChild(spinner);
    }

    // Append to <html> (not <body>) so it exists even before body renders
    (document.body || document.documentElement).appendChild(overlay);
    return overlay;
  }

  // ============================================================
  // FADE OVERLAY OUT (called on page load)
  // ============================================================
  let hasFadedOut = false;

  function fadeOverlayOut() {
    if (!overlay || hasFadedOut) return;
    hasFadedOut = true;

    // Double rAF ensures the browser has painted at least once
    // with the overlay at opacity: 1 before we start fading
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.remove('is-covering');
        overlay.style.opacity = '0';
      });
    });
  }

  // ============================================================
  // FADE OVERLAY IN (called on link click)
  // ============================================================
  function fadeOverlayIn() {
    if (!overlay) return;
    hasFadedOut = false;
    overlay.classList.add('is-covering');
    overlay.style.opacity = '1';
  }

  // ============================================================
  // DETECT INTERNAL NAVIGATION
  // Returns true only for same-origin, non-special link clicks
  // ============================================================
  function isInternalLink(link, event) {
    if (!link || !link.href) return false;

    // Ignore new tabs / downloads / modifier keys
    if (link.target && link.target !== '_self') return false;
    if (link.hasAttribute('download')) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (event.button !== 0) return false; // only left-click

    const rawHref = link.getAttribute('href') || '';

    // Ignore hash-only, javascript:, mailto:, tel:
    if (
      rawHref.startsWith('#') ||
      rawHref.startsWith('javascript:') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:')
    ) {
      return false;
    }

    try {
      const url = new URL(link.href, window.location.href);

      // Must be same origin
      if (url.origin !== window.location.origin) return false;

      // Same page, only hash difference → ignore
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        url.hash
      ) {
        return false;
      }

      // Same URL as current (just clicked the current page link) → ignore
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        !url.hash
      ) {
        return false;
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  // ============================================================
  // CLICK INTERCEPTOR
  // ============================================================
  function handleClick(event) {
    const link = event.target.closest('a');
    if (!link) return;
    if (!isInternalLink(link, event)) return;

    event.preventDefault();

    const destination = link.href;

    // No animation preference → navigate immediately
    if (reduceMotion) {
      window.location.href = destination;
      return;
    }

    fadeOverlayIn();

    // Wait for fade to complete, then navigate
    setTimeout(() => {
      window.location.href = destination;
    }, effectiveDuration);
  }

  // ============================================================
  // INITIALIZE
  // ============================================================
  createOverlay();

  // Listen for clicks (capture phase so it fires before other handlers)
  document.addEventListener('click', handleClick, false);

  // Fade overlay out once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fadeOverlayOut);
  } else {
    // DOM already loaded (script injected late)
    fadeOverlayOut();
  }

  // ============================================================
  // HANDLE BROWSER BACK/FORWARD CACHE (bfcache)
  // When user hits Back, browser restores page from memory.
  // Reset overlay so it doesn't cover the restored page.
  // ============================================================
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      // Page restored from bfcache
      hasFadedOut = false;
      if (overlay) {
        overlay.classList.remove('is-covering');
        overlay.style.opacity = '0';
        hasFadedOut = true;
      }
    }
  });

  // ============================================================
  // HANDLE PAGE UNLOAD (user closes tab / navigates away)
  // Fade overlay in for smoother exit when possible
  // ============================================================
  window.addEventListener('beforeunload', function () {
    // Note: browsers ignore most animations on unload,
    // but this helps Chrome/Edge show a cleaner transition
    if (overlay && !reduceMotion) {
      overlay.classList.add('is-covering');
      overlay.style.opacity = '1';
    }
  });

  // ============================================================
  // HANDLE HASH CHANGES (in-page anchors) — no reload, no animation
  // ============================================================
  window.addEventListener('hashchange', function () {
    if (overlay) {
      overlay.classList.remove('is-covering');
      overlay.style.opacity = '0';
      hasFadedOut = true;
    }
  });

})();

// ==========================================
// KODE MODE GELAP (DARK MODE)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
  const tombol = document.getElementById("theme-toggle");
  const ikon = document.getElementById("theme-icon");

  // Cek memori browser, apakah sebelumnya user pilih gelap
  if (localStorage.getItem("tema") === "gelap") {
    document.body.classList.add("dark-mode");
    if (ikon) {
      ikon.classList.remove("fa-moon");
      ikon.classList.add("fa-sun");
    }
  }

  // Saat tombol diklik
  if (tombol) {
    tombol.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        // Mode Gelap Aktif
        localStorage.setItem("tema", "gelap");
        ikon.classList.remove("fa-moon");
        ikon.classList.add("fa-sun");
      } else {
        // Mode Terang Aktif
        localStorage.setItem("tema", "terang");
        ikon.classList.remove("fa-sun");
        ikon.classList.add("fa-moon");
      }
    });
  }
});