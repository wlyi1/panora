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
  
  // --- Simple Reveal Animations on Scroll ---
  const sections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('revealed');
      }
    });
  };
  
  // Set initial scroll trigger check
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // trigger once on start
});
