/* ═══════════════════════════════════════════════════════════
   RODRICKS ANALYTICS — Main JavaScript
   Statistical Analysis · Research Consultancy · Data Insights
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Preloader ──────────────────────────────────────────── */
  const preloader = document.getElementById('preloader');
  const hidePreloader = () => preloader && preloader.classList.add('hidden');
  window.addEventListener('load', () => setTimeout(hidePreloader, 600));
  setTimeout(hidePreloader, 2400); // Fallback

  /* ─── Hero Canvas: Animated Data Network ─────────────────── */
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, nodes = [], animId;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', () => { resize(); buildNodes(); });
    resize();

    class Node {
      constructor() { this.reset(); }
      reset() {
        this.x  = Math.random() * W;
        this.y  = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r  = 1.5 + Math.random() * 2;
        this.life  = 1;
        this.pulse = Math.random() * Math.PI * 2;
        this.type  = Math.random() > 0.7 ? 'teal' : 'amber';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;
        // Wrap
        if (this.x < -20) this.x = W + 20;
        if (this.x > W+20) this.x = -20;
        if (this.y < -20) this.y = H + 20;
        if (this.y > H+20) this.y = -20;
      }
      draw() {
        const pr = this.r + Math.sin(this.pulse) * 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pr, 0, Math.PI * 2);
        ctx.fillStyle = this.type === 'teal'
          ? 'rgba(13,155,155,0.7)' : 'rgba(212,148,43,0.7)';
        ctx.fill();
      }
    }

    const buildNodes = () => {
      const count = Math.floor((W * H) / 14000);
      nodes = Array.from({ length: Math.min(count, 80) }, () => new Node());
    };
    buildNodes();

    const LINK_DIST = 120;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(212,148,43,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw data grid lines (horizontal)
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.strokeStyle = 'rgba(212,148,43,0.03)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // Vertical
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.strokeStyle = 'rgba(212,148,43,0.03)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      nodes.forEach(n => { n.update(); n.draw(); });
      animId = requestAnimationFrame(draw);
    };
    draw();
  }

  /* ─── Navbar ─────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const handleNavScroll = () => {
    navbar && navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ─── Hamburger Menu ─────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* ─── Scroll Reveal ──────────────────────────────────────── */
  const revealAll = document.querySelectorAll('.reveal, .reveal-right');
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); revObs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealAll.forEach(el => revObs.observe(el));

  /* ─── Skill Bar Animations ───────────────────────────────── */
  const skillBars = document.querySelectorAll('.skill-fill, .hv-bar-fill');
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.style.getPropertyValue('--w') || '0%';
        barObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(b => barObs.observe(b));

  // Also trigger hero bars after load
  setTimeout(() => {
    document.querySelectorAll('.hv-bar-fill').forEach(b => {
      b.style.width = b.style.getPropertyValue('--w');
    });
  }, 800);

  /* ─── Hero Counter Animations ────────────────────────────── */
  const counters = document.querySelectorAll('.hsb-num');
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count || el.textContent) || 0;
      let   count  = 0;
      const dur    = 1800;
      const step   = target / (dur / 16);
      const timer  = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = Math.round(count);
        if (count >= target) clearInterval(timer);
      }, 16);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObs.observe(c));

  /* ─── Smooth Anchor Scroll ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ─── Active Nav Link on Scroll ─────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a:not(.nav-wa)');
  const updateActiveNav = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navAs.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ─── Scroll to Top ──────────────────────────────────────── */
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollTopBtn && scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  scrollTopBtn && scrollTopBtn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  /* ─── Contact Form ───────────────────────────────────────── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.disabled = false;
        // Note: for real backend use, remove preventDefault and let form submit
        // form.reset();  — uncomment if using AJAX
      }, 3500);
      // Remove e.preventDefault() if you want actual Flask form submission
      // e.preventDefault();
    });
  }

  /* ─── Case Study Chart Bars animate on view ─────────────── */
  const caseBars = document.querySelectorAll('.cc-bar');
  const caseObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.height = e.target.style.getPropertyValue('--h');
        caseObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  // Reset height to 0 initially
  caseBars.forEach(b => {
    const targetH = b.style.getPropertyValue('--h') || b.style.height;
    b.style.setProperty('--h', targetH);
    b.style.height = '4px';
    b.style.transition = 'height 0.8s cubic-bezier(0.0, 0.0, 0.2, 1)';
    caseObs.observe(b);
  });

  /* ─── Tooltip for floating dots in case maps ─────────────── */
  document.querySelectorAll('.map-dot').forEach(dot => {
    dot.style.cursor = 'pointer';
  });

  console.log('%cRodricks Analytics', 'color:#d4942b;font-family:monospace;font-size:18px;font-weight:bold;');
  console.log('%cStatistical Analysis · Research Consultancy · Data Insights', 'color:#0d9b9b;font-family:monospace;font-size:11px;');
});
