/* ==========================================================================
   PANORA LANDING PAGE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- OS Detection & Download Customization ---
  const primaryDownloadBtn = document.getElementById('primary-download-btn');
  const downloadText = document.getElementById('download-text');
  let detectedOS = 'windows'; // default fallback

  const detectUserOS = () => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    
    if (macosPlatforms.indexOf(platform) !== -1 || macosPlatforms.some(p => userAgent.includes(p))) {
      detectedOS = 'macos';
      if (downloadText) downloadText.textContent = 'Download for macOS';
    } else if (userAgent.includes('Linux') || platform.includes('Linux')) {
      detectedOS = 'linux';
      if (downloadText) downloadText.textContent = 'Download for Linux';
    } else {
      detectedOS = 'windows';
      if (downloadText) downloadText.textContent = 'Download for Windows';
    }
  };

  detectUserOS();

  // --- Simulated Download Actions & Toast Alert ---
  const downloadTriggers = document.querySelectorAll('.download-trigger');
  const downloadToast = document.getElementById('download-toast');
  let toastTimeout;

  const triggerDownloadSimulation = (osName) => {
    // Show toast notification
    if (downloadToast) {
      const toastDesc = downloadToast.querySelector('.toast-desc');
      if (toastDesc) {
        toastDesc.textContent = `Thank you for downloading Panora for ${osName.charAt(0).toUpperCase() + osName.slice(1)}. Your installer is starting.`;
      }
      
      downloadToast.classList.add('show');
      
      // Auto-hide toast after 4.5 seconds
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        downloadToast.classList.remove('show');
      }, 4500);
    }
  };

  downloadTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      let os = detectedOS;
      
      // Check if button has specific OS attribute
      const specificOS = btn.getAttribute('data-os');
      if (specificOS) os = specificOS;
      
      triggerDownloadSimulation(os);
      
      // Close dropdown if it's inside one
      const downloadWrapper = document.getElementById('download-dropdown-menu');
      if (downloadWrapper) {
        downloadWrapper.parentElement.classList.remove('open');
      }
    });
  });

  // --- Download Dropdown Toggle ---
  const downloadDropdownToggle = document.getElementById('download-dropdown-toggle');
  
  if (downloadDropdownToggle) {
    downloadDropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      downloadDropdownToggle.parentElement.classList.toggle('open');
    });
  }

  // --- Theme Selection Dropdown (NEST vs MELLO) ---
  const themeTrigger = document.getElementById('theme-selector-trigger');
  const themeContainer = themeTrigger ? themeTrigger.parentElement : null;
  const themeLabel = document.getElementById('active-theme-label');
  const themeOptions = document.querySelectorAll('.theme-option');
  
  // Screenshots
  const screenshotNest = document.getElementById('screenshot-nest');
  const screenshotMello = document.getElementById('screenshot-mello');
  
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
    if (theme === 'mello') {
      document.body.classList.remove('theme-nest');
      document.body.classList.add('theme-mello');
      
      // Update toggle UI
      if (themeLabel) themeLabel.textContent = 'MELLO';
      
      // Toggle screenshot visibility
      if (screenshotNest) screenshotNest.classList.remove('active');
      if (screenshotMello) screenshotMello.classList.add('active');

      // Update text items matching Mello (Cute)
      if (mainTitle) mainTitle.innerHTML = 'What beautiful things<br>will you <span class="text-gradient">organize today? ☀️</span>';
      if (mainDesc) mainDesc.textContent = 'Step into your spaces, doodle, write diaries, track goals, and make daily work super cozy!';
      if (taglineText) taglineText.textContent = 'Cozy Pastel Workspace';
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
      document.body.classList.remove('theme-mello');
      document.body.classList.add('theme-nest');
      
      // Update toggle UI
      if (themeLabel) themeLabel.textContent = 'NEST';
      
      // Toggle screenshot visibility
      if (screenshotNest) screenshotNest.classList.add('active');
      if (screenshotMello) screenshotMello.classList.remove('active');

      // Update text items matching Nest (Organic/3D)
      if (mainTitle) mainTitle.innerHTML = 'Your local workspace,<br><span class="text-gradient">organized in spaces.</span>';
      if (mainDesc) mainDesc.textContent = 'A multi-tool desktop companion for files, media, documents, and personal planning. Keep your work structured, offline, and beautifully visual.';
      if (taglineText) taglineText.textContent = 'Local-First Workspace';
      if (previewFrameTitle) previewFrameTitle.textContent = 'Panora - Nest Space';
      
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

  // --- 5. Animated Counter (Stats Ticker) ---
  const animateCounter = (el, target, duration = 1200) => {
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quad
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const statNumbers = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(n => statsObserver.observe(n));

  // --- 6. Floating Particles Canvas ---
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

    const getParticleColor = () => isMello()
      ? `rgba(255, 168, 186,`
      : `rgba(125, 99, 70,`;

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

});
