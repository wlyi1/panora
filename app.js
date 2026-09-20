/* ==========================================================================
   PANORA LANDING PAGE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Windows Setup & Download Label ---
  const primaryDownloadBtn = document.getElementById('primary-download-btn');
  const downloadText = document.getElementById('download-text');
  if (downloadText) {
    downloadText.innerHTML = 'Get Panora for Windows — $19.99 <s style="opacity:0.65;font-weight:400;margin-left:4px;">$60</s>';
  }

  // Download links navigate directly to Gumroad checkout

  // --- Theme Selection Dropdown (NEST vs MELLO) ---
  const themeTrigger = document.getElementById('theme-selector-trigger');
  const themeContainer = themeTrigger ? themeTrigger.parentElement : null;
  const themeLabel = document.getElementById('active-theme-label');
  const themeOptions = document.querySelectorAll('.theme-option');
  
  // Screenshots
  const screenshotNest = document.getElementById('screenshot-nest');
  const screenshotMello = document.getElementById('screenshot-mello');
  const screenshotClean = document.getElementById('screenshot-clean');
  
  // App Titles
  const mainTitle = document.getElementById('hero-main-title');
  const mainDesc = document.getElementById('hero-main-desc');
  const taglineText = document.getElementById('tagline-text');
  const previewFrameTitle = document.getElementById('preview-frame-title');

  if (themeTrigger) {
    themeTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      themeContainer.classList.toggle('open');
    });
  }

  const switchTheme = (theme) => {
    // 1. Update body classes
    if (theme === 'clean') {
      document.body.classList.remove('theme-nest', 'theme-mello');
      document.body.classList.add('theme-clean');
      
      // Update toggle UI
      if (themeLabel) themeLabel.textContent = 'CLEAN';
      
      // Toggle screenshot visibility
      if (screenshotNest) screenshotNest.classList.remove('active');
      if (screenshotMello) screenshotMello.classList.remove('active');
      if (screenshotClean) screenshotClean.classList.add('active');

      // Update text items matching Clean (Minimalist / Crisp)
      if (mainTitle) mainTitle.innerHTML = 'Your desktop, pure &amp;<br><span class="text-gradient">minimalist.</span>';
      if (mainDesc) mainDesc.textContent = 'Panora is a clean, distraction-free local workspace where your files, notes, tasks, and boards live in pure minimalist harmony — 100% offline and blazingly fast.';
      if (taglineText) taglineText.textContent = 'Clean. Minimal. Distraction-free.';
      if (previewFrameTitle) previewFrameTitle.textContent = 'Panora - Clean Minimalist';
      
      // Show/Hide icons & visual states
      document.querySelectorAll('.icon-mello').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.icon-nest').forEach(el => el.classList.remove('hidden'));
      
      document.querySelectorAll('.room-illustration.mello-view').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.room-illustration.nest-view').forEach(el => el.classList.remove('hidden'));
      
      const studyMeta = document.getElementById('study-meta');
      const workMeta = document.getElementById('work-meta');
      const designMeta = document.getElementById('design-meta');
      const personalMeta = document.getElementById('personal-meta');
      const mediaMeta = document.getElementById('media-meta');
      
      if (studyMeta) studyMeta.textContent = '10 items';
      if (workMeta) workMeta.textContent = '1 item';
      if (designMeta) designMeta.textContent = '3 items';
      if (personalMeta) personalMeta.textContent = '27 files';
      if (mediaMeta) mediaMeta.textContent = '1 file';

    } else if (theme === 'mello') {
      document.body.classList.remove('theme-nest', 'theme-clean');
      document.body.classList.add('theme-mello');
      
      // Update toggle UI
      if (themeLabel) themeLabel.textContent = 'MELLO';
      
      // Toggle screenshot visibility
      if (screenshotNest) screenshotNest.classList.remove('active');
      if (screenshotClean) screenshotClean.classList.remove('active');
      if (screenshotMello) screenshotMello.classList.add('active');

      // Update text items matching Mello (Cute)
      if (mainTitle) mainTitle.innerHTML = 'Your cozy corner,<br><span class="text-gradient">all together. ☀️</span>';
      if (mainDesc) mainDesc.textContent = 'Panora is one cozy local workspace where your folders, to-do lists, diaries, and goal boards live side by side — beautifully themed, completely offline, no tab switching.';
      if (taglineText) taglineText.textContent = 'Cute. Cozy. All in one place.';
      if (previewFrameTitle) previewFrameTitle.textContent = 'Panora - Mello Theme 🐈';
      
      // Show/Hide icons & visual states
      document.querySelectorAll('.icon-nest').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.icon-mello').forEach(el => el.classList.remove('hidden'));
      
      document.querySelectorAll('.room-illustration.nest-view').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.room-illustration.mello-view').forEach(el => el.classList.remove('hidden'));
      
      // Update room metadata values to match Mello's cute terminology
      const studyMeta = document.getElementById('study-meta');
      const workMeta = document.getElementById('work-meta');
      const designMeta = document.getElementById('design-meta');
      const personalMeta = document.getElementById('personal-meta');
      const mediaMeta = document.getElementById('media-meta');
      
      if (studyMeta) studyMeta.textContent = '10 files';
      if (workMeta) workMeta.textContent = '1 folder';
      if (designMeta) designMeta.textContent = '1 folder, 2 files';
      if (personalMeta) personalMeta.textContent = '27 files';
      if (mediaMeta) mediaMeta.textContent = '1 file';
 
    } else {
      document.body.classList.remove('theme-mello', 'theme-clean');
      document.body.classList.add('theme-nest');
      
      // Update toggle UI
      if (themeLabel) themeLabel.textContent = 'NEST';
      
      // Toggle screenshot visibility
      if (screenshotClean) screenshotClean.classList.remove('active');
      if (screenshotMello) screenshotMello.classList.remove('active');
      if (screenshotNest) screenshotNest.classList.add('active');
 
      // Update text items matching Nest (Organic/3D)
      if (mainTitle) mainTitle.innerHTML = 'Your desktop, finally<br><span class="text-gradient">all together.</span>';
      if (mainDesc) mainDesc.textContent = 'Panora is one local workspace where your files, tasks, notes, and goals actually live side by side — beautifully organized, completely offline, no subscriptions, no tab switching.';
      if (taglineText) taglineText.textContent = 'Your files are scattered. Your apps are everywhere.';
      if (previewFrameTitle) previewFrameTitle.textContent = 'Panora - Nest Folder';
      
      // Show/Hide icons & visual states
      document.querySelectorAll('.icon-mello').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.icon-nest').forEach(el => el.classList.remove('hidden'));
      
      document.querySelectorAll('.room-illustration.mello-view').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.room-illustration.nest-view').forEach(el => el.classList.remove('hidden'));
      
      // Reset room metadata values to match Nest
      const studyMeta = document.getElementById('study-meta');
      const workMeta = document.getElementById('work-meta');
      const designMeta = document.getElementById('design-meta');
      const personalMeta = document.getElementById('personal-meta');
      const mediaMeta = document.getElementById('media-meta');
      
      if (studyMeta) studyMeta.textContent = '10 items';
      if (workMeta) workMeta.textContent = '1 item';
      if (designMeta) designMeta.textContent = '3 items';
      if (personalMeta) personalMeta.textContent = '27 files';
      if (mediaMeta) mediaMeta.textContent = '1 file';
    }
  };

  themeOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Reset active state of options
      themeOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      
      const selectedTheme = opt.getAttribute('data-theme');
      switchTheme(selectedTheme);
      
      // Close menu
      themeContainer.classList.remove('open');
    });
  });

  // --- Click Outside to Close Menus ---
  document.addEventListener('click', () => {
    if (themeContainer) themeContainer.classList.remove('open');
    if (downloadDropdownToggle) downloadDropdownToggle.parentElement.classList.remove('open');
  });

  // --- Spaces Interactive Tabs ---
  const spaceTabs = document.querySelectorAll('.space-tab');
  const spacesPanels = document.querySelectorAll('.spaces-panel');

  spaceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 1. Remove active state from all tabs
      spaceTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      
      // 2. Add active to clicked tab
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      
      // 3. Switch panel display
      const targetSpace = tab.getAttribute('data-space');
      
      spacesPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `space-panel-${targetSpace}`) {
          panel.classList.add('active');
        }
      });
    });
  });

  // --- FAQ Accordion Drawer ---
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const faqItem = q.parentElement;
      const faqAnswer = q.nextElementSibling;
      const isExpanded = q.getAttribute('aria-expanded') === 'true';
      
      // Close other opened questions (optional accordion-style behavior)
      faqQuestions.forEach(otherQ => {
        if (otherQ !== q) {
          otherQ.setAttribute('aria-expanded', 'false');
          otherQ.parentElement.classList.remove('open');
          otherQ.nextElementSibling.style.maxHeight = null;
          otherQ.nextElementSibling.setAttribute('hidden', '');
        }
      });

      // Toggle current question
      if (isExpanded) {
        q.setAttribute('aria-expanded', 'false');
        faqItem.classList.remove('open');
        faqAnswer.style.maxHeight = null;
        setTimeout(() => faqAnswer.setAttribute('hidden', ''), 300); // Wait for transition
      } else {
        faqAnswer.removeAttribute('hidden');
        q.setAttribute('aria-expanded', 'true');
        faqItem.classList.add('open');
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
      }
    });
  });
  
  // --- Core Explorer Category Switcher ---
  const categoryPills = document.querySelectorAll('.category-pill');
  const categoryPanels = document.querySelectorAll('.category-panel');

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const targetCat = pill.getAttribute('data-cat');
      categoryPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `cat-panel-${targetCat}`) {
          panel.classList.add('active');
        }
      });
    });
  });

  // --- Mock Explorer File Selector ---
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const viewerContents = document.querySelectorAll('.viewer-content');

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const targetFile = item.getAttribute('data-file');
      viewerContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `view-${targetFile}`) {
          content.classList.add('active');
        }
      });
    });
  });

  // --- Goal Tracker Slider Logic ---
  const sliderTrack = document.getElementById('goal-slider-track');
  const sliderBtns = document.querySelectorAll('.slider-btn');

  if (sliderTrack && sliderBtns.length > 0) {
    sliderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const slideIndex = parseInt(btn.getAttribute('data-slide'));
        const slideWidth = sliderTrack.clientWidth;
        
        // Scroll track to the appropriate offset
        sliderTrack.scrollTo({
          left: slideWidth * slideIndex,
          behavior: 'smooth'
        });

        // Set active button
        sliderBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Update active dots when user swipes natively
    sliderTrack.addEventListener('scroll', () => {
      const scrollPos = sliderTrack.scrollLeft;
      const slideWidth = sliderTrack.clientWidth;
      if (slideWidth > 0) {
        const activeIndex = Math.round(scrollPos / slideWidth);

        sliderBtns.forEach((btn, idx) => {
          if (idx === activeIndex) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      }
    });
  }


  // ===========================================================================
  // INTERACTIVE ENHANCEMENTS — v2.0
  // ===========================================================================

  // --- 1. Scroll Progress Bar ---
  const scrollBar = document.getElementById('scroll-progress');
  const updateScrollProgress = () => {
    if (!scrollBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollBar.style.width = pct + '%';
  };
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // --- 2. Navbar: shadow on scroll + auto-hide ---
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;
  const handleNavbar = () => {
    const y = window.scrollY;
    if (navbar) {
      if (y > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      // Auto-hide on scroll down, reveal on scroll up
      if (y > lastScrollY + 8 && y > 120) {
        navbar.style.transform = 'translateY(-100%)';
      } else if (y < lastScrollY - 5) {
        navbar.style.transform = 'translateY(0)';
      }
      lastScrollY = y;
    }
  };
  window.addEventListener('scroll', handleNavbar, { passive: true });

  // --- 3. IntersectionObserver: Reveal Animations ---
  const revealTargets = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .stagger-children, .section-header'
  );
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => revealObserver.observe(el));

  // Immediately reveal hero (above the fold)
  document.querySelectorAll('#hero .reveal-left, #hero .reveal-right').forEach(el => {
    setTimeout(() => el.classList.add('in-view'), 120);
  });

  // --- 4. Active Nav Link on Scroll ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionEls = document.querySelectorAll('section[id]');

  const updateActiveNav = () => {
    let currentId = '';
    sectionEls.forEach(s => {
      const top = s.getBoundingClientRect().top;
      if (top <= 100) currentId = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // --- 5. Floating Particles Canvas ---
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const isMello = () => document.body.classList.contains('theme-mello');

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: -(Math.random() * 0.4 + 0.2),
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const getParticleColor = () => {
      if (document.body.classList.contains('theme-clean')) return `rgba(71, 85, 105,`;
      if (document.body.classList.contains('theme-mello')) return `rgba(255, 168, 186,`;
      return `rgba(125, 99, 70,`;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${getParticleColor()} ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
      });
      requestAnimationFrame(drawParticles);
    };
    drawParticles();

    window.addEventListener('resize', () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    });
  }

  // --- 7. 3D Parallax Tilt on App Preview Frame ---
  const previewWrapper = document.getElementById('hero-preview-frame');
  const macbookFrame = previewWrapper ? previewWrapper.querySelector('.macbook-frame') : null;

  if (macbookFrame) {
    previewWrapper.addEventListener('mousemove', (e) => {
      const rect = previewWrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
      const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1
      const maxTilt = 8; // degrees
      const rotX = (-dy * maxTilt).toFixed(2);
      const rotY = (dx * maxTilt).toFixed(2);
      macbookFrame.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      macbookFrame.classList.add('tilt-active');
    });

    previewWrapper.addEventListener('mouseleave', () => {
      macbookFrame.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  // --- 8. Magnetic Pulse on CTA Buttons ---
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });

  // --- 9. Simple Reveal Animations on Scroll (legacy sections fallback) ---
  const legacySections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;
    legacySections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) section.classList.add('revealed');
    });
  };
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  // --- 10. App Suite Launcher Selector ---
  const appSuiteBtns  = document.querySelectorAll('.app-suite-btn');
  const appCards      = document.querySelectorAll('.app-showcase-card');

  appSuiteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      appSuiteBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetApp = btn.getAttribute('data-app');
      appCards.forEach(card => {
        card.classList.remove('active');
        if (card.id === `app-card-${targetApp}`) {
          card.classList.add('active');
        }
      });
    });
  });

  // Goal tracker multi-view switcher (Map Canvas vs Milestone View)
  const goalPills = document.querySelectorAll('.goal-view-pill');
  const goalImgs  = document.querySelectorAll('.goal-view-img');

  goalPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = pill.getAttribute('data-goal-view');
      goalPills.forEach(p => {
        const isActive = p.getAttribute('data-goal-view') === target;
        p.classList.toggle('active', isActive);
        p.setAttribute('aria-selected', String(isActive));
      });
      goalImgs.forEach(img => {
        img.classList.toggle('active', img.getAttribute('data-goal-img') === target);
      });
    });
  });


  // ─────────────────────────────────────────────────────────────────────────
  //  THEME SHOWCASE SECTION — interactive tab switcher + icon style picker
  // ─────────────────────────────────────────────────────────────────────────

  const tsChromeTitle  = document.getElementById('ts-chrome-title');
  const tsThemeTabs    = document.querySelectorAll('#ts-theme-tabs .ts-tab');
  const tsPreviewImgs  = document.querySelectorAll('.ts-preview-img');
  const tsInfoCards    = document.querySelectorAll('.ts-info-card');

  const themeNames = {
    clean:    'Panora — Clean Theme',
    flow:     'Panora — Flow Theme',
    graphite: 'Panora — Graphite Theme',
    mello:    'Panora — Mello Theme',
    nest:     'Panora — Nest Theme',
    profes:   'Panora — Profes Theme',
    verve:    'Panora — Verve Theme',
  };

  const switchThemePreview = (targetTheme) => {
    // Tabs
    tsThemeTabs.forEach(tab => {
      const isActive = tab.getAttribute('data-theme-preview') === targetTheme;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });

    // Preview images
    tsPreviewImgs.forEach(img => {
      img.classList.toggle('active', img.getAttribute('data-preview') === targetTheme);
    });

    // Info cards
    tsInfoCards.forEach(card => {
      card.classList.toggle('active', card.id === `ts-info-${targetTheme}`);
    });

    // Chrome title
    if (tsChromeTitle) {
      tsChromeTitle.textContent = themeNames[targetTheme] || 'Panora';
    }
  };

  tsThemeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchThemePreview(tab.getAttribute('data-theme-preview'));
    });
  });

  // Folder & File Explorer Icon pills
  const tsFolderPills     = document.querySelectorAll('.ts-folder-pill');
  const tsFolderZoomImgs  = document.querySelectorAll('.ts-folder-zoom-img');
  const tsFolderFrameLbl  = document.getElementById('ts-folder-icon-frame-label');

  const folderIconLabels = {
    'fur':       'Fur Pack \u2014 Soft plush 3D folder & extension icons',
    'glow':      'Glow Pack \u2014 Luminescent neon & radiant 3D folder icons',
    'luna':      'Hand Draw (Luna) \u2014 Playful sketchy folder & extension icons',
    'kawaii':    'Kawaii Pack \u2014 Cute pastel folder & extension icons',
    'cat':       'Cat Pack \u2014 Whimsical feline folder & extension icons',
    'flat':      'Flat Pack \u2014 Minimalist 2D vector folder & extension icons',
    'low-poly':  'Low Poly Pack \u2014 Faceted 3D geometric folder & extension icons',
    'pillow':    'Pillow Pack \u2014 Puffy soft 3D folder & extension icons',
    'plastic':   'Plastic Pack \u2014 Glossy modern 3D folder & extension icons',
    'voxel':     'Voxel Pack \u2014 3D blocky pixel-art folder & extension icons',
  };

  const switchFolderIconStyle = (target) => {
    tsFolderPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-folder-icon-target') === target));
    tsFolderZoomImgs.forEach(img => img.classList.toggle('active', img.getAttribute('data-folder-zoom') === target));
    if (tsFolderFrameLbl) tsFolderFrameLbl.textContent = folderIconLabels[target] || target;
  };

  tsFolderPills.forEach(pill => {
    pill.addEventListener('click', () => switchFolderIconStyle(pill.getAttribute('data-folder-icon-target')));
  });



  // Auto-cycle through themes every 3.5s (pauses on user interaction)
  let tsAutoPlay = true;
  const tsThemeOrder = ['clean', 'flow', 'graphite', 'mello', 'nest', 'profes', 'verve'];
  let tsCurrentIndex = 0;

  const tsAutoAdvance = () => {
    if (!tsAutoPlay) return;
    tsCurrentIndex = (tsCurrentIndex + 1) % tsThemeOrder.length;
    switchThemePreview(tsThemeOrder[tsCurrentIndex]);
  };

  let tsInterval = setInterval(tsAutoAdvance, 3500);

  // Pause auto-play when user manually picks a theme
  tsThemeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tsAutoPlay = false;
      clearInterval(tsInterval);
      tsCurrentIndex = tsThemeOrder.indexOf(tab.getAttribute('data-theme-preview'));
    });
  });

  // Resume auto-play when user stops hovering the section
  const tsSection = document.querySelector('.theme-showcase-section');
  if (tsSection) {
    tsSection.addEventListener('mouseleave', () => {
      if (!tsAutoPlay) {
        tsAutoPlay = true;
        clearInterval(tsInterval);
        tsInterval = setInterval(tsAutoAdvance, 3500);
      }
    });
    tsSection.addEventListener('mouseenter', () => {
      tsAutoPlay = false;
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  //  DIARY SPREAD CAROUSEL & LIGHTBOX LOGIC
  // ─────────────────────────────────────────────────────────────────────────
  const diarySpreads = [
    {
      title: "Japan Travel Journal",
      pages: "Pages 1–2",
      date: "Jul 7, 2026",
      paper: "Paper Fiber",
      font: "Comfortaa Cursive",
      desc: "Japan travel memories: Sensō-ji Temple, 3D landmark illustration, brown kraft luggage tag with twine, Kodak 400TX film strip, and torii gate reflections.",
      img: "images/diary example/diary2.png",
      pillLabel: "Japan"
    },
    {
      title: "Dev Sprint & Product Iteration",
      pages: "Pages 3–4",
      date: "Aug 9, 2026",
      paper: "Paper Fiber",
      font: "Comfortaa",
      desc: "Quietly productive sprint: feature checklists, speech-bubble reflection card, taped UI mockups, workspace photo, and iteration quote note.",
      img: "images/diary example/diary1.png",
      pillLabel: "Dev Sprint"
    },
    {
      title: "Poetic Thoughts & Reflections",
      pages: "Pages 5–6",
      date: "Aug 9, 2026",
      paper: "Paper Fiber",
      font: "Comfortaa Cursive",
      desc: "Poetry and late-night thoughts: hand-torn graph memo, crescent moon sticker, stencil polaroid, taped dried lavender bouquet, and soft reflections.",
      img: "images/diary example/diary3.png",
      pillLabel: "Reflections"
    },
    {
      title: "Berlin City Exploration",
      pages: "Pages 7–8",
      date: "Aug 15, 2026",
      paper: "Notebook (Lined)",
      font: "Comfortaa",
      desc: "First day in Berlin: torn-edge paper map clipping, paperclipped yellow smiley note, Berlin TV tower polaroid, U-Bahn photo, and city impressions.",
      img: "images/diary example/diary4.png",
      pillLabel: "Berlin"
    },
    {
      title: "Mindfulness & Daily Wisdom",
      pages: "Pages 9–10",
      date: "Aug 16, 2026",
      paper: "Vellum",
      font: "Comfortaa",
      desc: "Daily mindfulness notes: handmade olive deckle paper, brown kraft card with green gingham tape, ripped watercolor sheet, and stitched burlap fabric patch.",
      img: "images/diary example/diary5.png",
      pillLabel: "Mindfulness"
    }
  ];

  let currentSpreadIdx = 0;

  // DOM Elements - Showcase Card
  const diaryPills         = document.querySelectorAll('.diary-spread-pill');
  const diaryDots          = document.querySelectorAll('.diary-dot');
  const diarySpreadDesc    = document.getElementById('diary-spread-desc');
  const diaryMetaDate      = document.getElementById('diary-meta-date');
  const diaryMetaPaper     = document.getElementById('diary-meta-paper');
  const diaryMetaFont      = document.getElementById('diary-meta-font');
  const diarySpreadImg     = document.getElementById('diary-active-spread-img');
  const diarySpreadNum     = document.getElementById('diary-spread-number');
  const diaryPagesLbl      = document.getElementById('diary-pages-label');
  const diaryPrevBtn       = document.getElementById('diary-prev-btn');
  const diaryNextBtn       = document.getElementById('diary-next-btn');
  const diaryBookWrapper   = document.getElementById('diary-book-wrapper');

  // DOM Elements - Lightbox Modal
  const diaryModal         = document.getElementById('diary-lightbox-modal');
  const diaryModalBackdrop = document.getElementById('diary-lightbox-backdrop');
  const diaryModalClose    = document.getElementById('diary-lightbox-close');
  const diaryModalTitle    = document.getElementById('diary-modal-title');
  const diaryModalSubtitle = document.getElementById('diary-modal-subtitle');
  const diaryModalImg      = document.getElementById('diary-modal-img');
  const diaryModalPrev     = document.getElementById('diary-modal-prev');
  const diaryModalNext     = document.getElementById('diary-modal-next');
  const diaryModalThumbs   = document.querySelectorAll('.diary-thumb-btn');

  const updateDiaryDisplay = (idx, animate = true) => {
    currentSpreadIdx = idx;
    const spread = diarySpreads[idx];
    if (!spread) return;

    // 1. Update Pills
    diaryPills.forEach((pill, pIdx) => {
      const isActive = pIdx === idx;
      pill.classList.toggle('active', isActive);
      pill.setAttribute('aria-selected', String(isActive));
    });

    // 2. Update Dots
    diaryDots.forEach((dot, dIdx) => {
      dot.classList.toggle('active', dIdx === idx);
    });

    // 3. Update Text Info
    if (diarySpreadDesc) diarySpreadDesc.textContent = spread.desc;
    if (diaryMetaDate) diaryMetaDate.textContent = spread.date;
    if (diaryMetaPaper) diaryMetaPaper.textContent = spread.paper;
    if (diaryMetaFont) diaryMetaFont.textContent = spread.font;
    if (diarySpreadNum) diarySpreadNum.textContent = `Spread ${idx + 1} of ${diarySpreads.length}`;
    if (diaryPagesLbl) diaryPagesLbl.textContent = `(${spread.pages})`;

    // 4. Update Main Spread Image with smooth transition
    if (diarySpreadImg) {
      if (animate) {
        diarySpreadImg.classList.add('switching');
        setTimeout(() => {
          diarySpreadImg.src = spread.img;
          diarySpreadImg.alt = `Panora Diary - ${spread.title}`;
          diarySpreadImg.classList.remove('switching');
        }, 120);
      } else {
        diarySpreadImg.src = spread.img;
        diarySpreadImg.alt = `Panora Diary - ${spread.title}`;
      }
    }

    // 5. Update Modal if open
    if (diaryModal && diaryModal.classList.contains('open')) {
      if (diaryModalTitle) diaryModalTitle.textContent = `Spread ${idx + 1}: ${spread.title}`;
      if (diaryModalSubtitle) diaryModalSubtitle.textContent = `${spread.pages} • ${spread.date} • ${spread.paper} Texture • Font: ${spread.font}`;
      
      if (diaryModalImg) {
        diaryModalImg.classList.add('switching');
        setTimeout(() => {
          diaryModalImg.src = spread.img;
          diaryModalImg.alt = `Panora Diary Full Spread - ${spread.title}`;
          diaryModalImg.classList.remove('switching');
        }, 120);
      }

      diaryModalThumbs.forEach((thumb, tIdx) => {
        thumb.classList.toggle('active', tIdx === idx);
      });
    }
  };

  // Pill click listeners
  diaryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const spreadIdx = parseInt(pill.getAttribute('data-spread'), 10);
      if (!isNaN(spreadIdx)) updateDiaryDisplay(spreadIdx);
    });
  });

  // Dots click listeners
  diaryDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const spreadIdx = parseInt(dot.getAttribute('data-spread'), 10);
      if (!isNaN(spreadIdx)) updateDiaryDisplay(spreadIdx);
    });
  });

  // Next / Prev listeners
  if (diaryPrevBtn) {
    diaryPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prevIdx = (currentSpreadIdx - 1 + diarySpreads.length) % diarySpreads.length;
      updateDiaryDisplay(prevIdx);
    });
  }

  if (diaryNextBtn) {
    diaryNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextIdx = (currentSpreadIdx + 1) % diarySpreads.length;
      updateDiaryDisplay(nextIdx);
    });
  }

  // --- Lightbox Modal Open / Close Logic ---
  const openDiaryLightbox = (idx = currentSpreadIdx) => {
    if (!diaryModal) return;
    updateDiaryDisplay(idx, false);
    diaryModal.classList.add('open');
    diaryModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDiaryLightbox = () => {
    if (!diaryModal) return;
    diaryModal.classList.remove('open');
    diaryModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (diaryBookWrapper) {
    diaryBookWrapper.addEventListener('click', () => openDiaryLightbox(currentSpreadIdx));
  }

  if (diaryModalClose) {
    diaryModalClose.addEventListener('click', closeDiaryLightbox);
  }

  if (diaryModalBackdrop) {
    diaryModalBackdrop.addEventListener('click', closeDiaryLightbox);
  }

  if (diaryModalPrev) {
    diaryModalPrev.addEventListener('click', () => {
      const prevIdx = (currentSpreadIdx - 1 + diarySpreads.length) % diarySpreads.length;
      updateDiaryDisplay(prevIdx);
    });
  }

  if (diaryModalNext) {
    diaryModalNext.addEventListener('click', () => {
      const nextIdx = (currentSpreadIdx + 1) % diarySpreads.length;
      updateDiaryDisplay(nextIdx);
    });
  }

  diaryModalThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const spreadIdx = parseInt(thumb.getAttribute('data-spread'), 10);
      if (!isNaN(spreadIdx)) updateDiaryDisplay(spreadIdx);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (diaryModal && diaryModal.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeDiaryLightbox();
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentSpreadIdx - 1 + diarySpreads.length) % diarySpreads.length;
        updateDiaryDisplay(prevIdx);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (currentSpreadIdx + 1) % diarySpreads.length;
        updateDiaryDisplay(nextIdx);
      }
    }
  });

});

