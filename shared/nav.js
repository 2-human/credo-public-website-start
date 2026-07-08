// Shared nav rendering for the three prototypes (A/B/C).
// Reads from window.CredoNav populated by data.js.

(function () {
  const { CLUSTERS, CLUSTER_ORDER, siblingDestination, clusterDestination } = window.CredoNav;

  const root = document.documentElement;
  const variant = root.getAttribute('data-variant') || 'B';

  // Build the current-context selector — a dropdown listing each angle LP across all clusters
  // plus a "no context" entry that represents the visitor arriving without an angle frame.
  function buildContextSelector(target) {
    const sel = target.querySelector('select');
    sel.innerHTML = '';
    const noCtx = document.createElement('option');
    noCtx.value = '';
    noCtx.textContent = '(No angle context — homepage / fresh visitor)';
    sel.appendChild(noCtx);
    CLUSTER_ORDER.forEach(key => {
      const c = CLUSTERS[key];
      const og = document.createElement('optgroup');
      og.label = c.label;
      c.items.forEach(it => {
        const opt = document.createElement('option');
        opt.value = `${key}::${it.angle}::${it.lp}`;
        opt.textContent = `${it.label} (${it.angle})`;
        og.appendChild(opt);
      });
      sel.appendChild(og);
    });
    sel.addEventListener('change', () => {
      renderDesktopNav();
    });
  }

  function currentContext() {
    const sel = document.querySelector('#ctx-current');
    if (!sel || !sel.value) return { clusterKey: null, angle: null };
    const [clusterKey, angle, lp] = sel.value.split('::');
    return { clusterKey, angle, lp };
  }

  // ---------- Desktop mega-menu ----------
  function renderDesktopNav() {
    const ctx = currentContext();
    const dnav = document.querySelector('#desktop-nav');
    if (!dnav) return;
    dnav.innerHTML = '';

    // First item: Home link
    const homeLi = document.createElement('li');
    const home = document.createElement('a');
    home.textContent = 'Home';
    home.style.cursor = 'pointer';
    home.addEventListener('click', () => showToast({ url: '/', label: 'Homepage', note: 'home link' }));
    homeLi.appendChild(home);
    dnav.appendChild(homeLi);

    // Services dropdown — single root with mega-menu
    const servLi = document.createElement('li');
    const servLink = document.createElement('a');
    servLink.textContent = 'Services';
    servLink.style.cursor = 'pointer';
    servLi.appendChild(servLink);

    const mega = document.createElement('div');
    mega.className = 'megamenu';
    mega.style.minWidth = '700px';
    mega.style.padding = '14px';
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gap = '20px';

    CLUSTER_ORDER.forEach(key => {
      const cluster = CLUSTERS[key];
      const col = document.createElement('div');

      // Cluster name (clickable) — variant-specific destination
      const dest = clusterDestination(key, ctx.angle, variant);
      const head = document.createElement('div');
      head.style.display = 'flex';
      head.style.alignItems = 'center';
      head.style.justifyContent = 'space-between';
      head.style.padding = '4px 0';
      head.style.borderBottom = '1px solid #efefee';
      head.style.marginBottom = '6px';

      const clusterLink = document.createElement('a');
      clusterLink.textContent = cluster.label;
      clusterLink.style.fontWeight = '700';
      clusterLink.style.fontSize = '14px';
      clusterLink.style.color = 'var(--brand)';
      clusterLink.style.cursor = 'pointer';
      clusterLink.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast(dest);
      });
      head.appendChild(clusterLink);
      col.appendChild(head);

      // Option C only: overview header link
      if (variant === 'C') {
        const ov = document.createElement('a');
        ov.textContent = cluster.label + ' overview';
        ov.className = 'overview-header';
        ov.style.cssText = 'display:block; font-size:11px; color:#555; padding:6px 0; cursor:pointer; font-weight:600; letter-spacing:0.3px;';
        ov.addEventListener('click', (e) => {
          e.stopPropagation();
          showToast({ url: cluster.overview, label: cluster.label + ' overview', note: 'mega-menu overview link (Option C)' });
        });
        col.appendChild(ov);
      }

      // Sub-items
      cluster.items.forEach(it => {
        const sub = document.createElement('a');
        sub.className = 'sub-item';
        sub.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:6px 0; font-size:12px; cursor:pointer; color:#1a1a1a;';
        const labelSpan = document.createElement('span');
        labelSpan.textContent = it.label;
        sub.appendChild(labelSpan);
        const tag = document.createElement('span');
        tag.textContent = it.angle;
        tag.className = 'angle-tag ' + it.angle;
        tag.style.cssText = 'font-size:9px; padding:2px 6px; border-radius:8px; margin-left:6px; font-weight:500;';
        if (it.angle === 'urgent') tag.style.background = '#ffe5e0', tag.style.color = '#a02e1e';
        if (it.angle === 'validity') tag.style.background = '#e6f0ff', tag.style.color = '#1a4894';
        if (it.angle === 'education') tag.style.background = '#e5f5e0', tag.style.color = '#2a6e1e';
        if (it.angle === 'outcome') tag.style.background = '#ede0ff', tag.style.color = '#5a2a8c';
        sub.appendChild(tag);
        sub.addEventListener('click', (e) => {
          e.stopPropagation();
          showToast({ url: it.url, label: it.label, note: 'angle sub-item · ' + it.angle });
        });
        col.appendChild(sub);
      });

      grid.appendChild(col);
    });
    mega.appendChild(grid);

    // Toggle behavior
    servLink.addEventListener('click', (e) => {
      e.preventDefault();
      mega.classList.toggle('open');
      document.querySelectorAll('.megamenu').forEach(m => { if (m !== mega) m.classList.remove('open'); });
    });
    document.addEventListener('click', (e) => {
      if (!servLi.contains(e.target)) mega.classList.remove('open');
    });

    servLi.appendChild(mega);
    dnav.appendChild(servLi);

    // About link
    const aboutLi = document.createElement('li');
    const about = document.createElement('a');
    about.textContent = 'About';
    about.style.cursor = 'pointer';
    about.addEventListener('click', () => showToast({ url: '/about', label: 'About', note: 'utility page' }));
    aboutLi.appendChild(about);
    dnav.appendChild(aboutLi);

    renderMobileLevels();
  }

  // ---------- Mobile drilldown ----------
  let mobileStack = [];

  function renderMobileLevels() {
    const overlay = document.querySelector('#nav-overlay');
    if (!overlay) return;
    const ul = overlay.querySelector('.nav-list');
    const titleEl = overlay.querySelector('.nav-overlay-title');
    const backBtn = overlay.querySelector('.back');
    ul.innerHTML = '';
    const ctx = currentContext();

    const level = mobileStack.length === 0 ? 'root' : mobileStack[mobileStack.length - 1];
    if (level === 'root') {
      titleEl.textContent = 'Menu';
      backBtn.style.visibility = 'hidden';
      ul.appendChild(rowItem('Home', '/', { url: '/', label: 'Homepage', note: 'home link' }));
      ul.appendChild(rowExpand('Services', () => { mobileStack.push('services'); renderMobileLevels(); }));
      ul.appendChild(rowItem('About', '/about', { url: '/about', label: 'About', note: 'utility' }));
      return;
    }
    if (level === 'services') {
      titleEl.textContent = 'Services';
      backBtn.style.visibility = 'visible';
      backBtn.onclick = () => { mobileStack.pop(); renderMobileLevels(); };
      CLUSTER_ORDER.forEach(key => {
        const cluster = CLUSTERS[key];
        // Tap on cluster name = variant default destination; long-press / chevron tap drills down
        const dest = clusterDestination(key, ctx.angle, variant);
        const li = document.createElement('li');
        const row = document.createElement('div');
        row.className = 'row';
        const label = document.createElement('div');
        label.style.cssText = 'flex:1; display:flex; flex-direction:column; cursor:pointer;';
        const labelTop = document.createElement('span');
        labelTop.className = 'label';
        labelTop.textContent = cluster.label;
        labelTop.style.fontWeight = '600';
        label.appendChild(labelTop);
        const sub = document.createElement('span');
        sub.style.cssText = 'font-size:11px; color:#8a8a8a; margin-top:2px;';
        sub.textContent = `→ ${dest.label} (${dest.note})`;
        label.appendChild(sub);
        label.addEventListener('click', () => showToast(dest));
        row.appendChild(label);
        const chev = document.createElement('button');
        chev.textContent = '›';
        chev.style.cssText = 'background:none; border:none; font-size:24px; color:#8a8a8a; padding:6px 12px; margin-left:6px; cursor:pointer;';
        chev.addEventListener('click', (e) => {
          e.stopPropagation();
          mobileStack.push('cluster:' + key);
          renderMobileLevels();
        });
        row.appendChild(chev);
        li.appendChild(row);
        ul.appendChild(li);
      });
      return;
    }
    if (level.startsWith('cluster:')) {
      const key = level.split(':')[1];
      const cluster = CLUSTERS[key];
      titleEl.textContent = cluster.label;
      backBtn.style.visibility = 'visible';
      backBtn.onclick = () => { mobileStack.pop(); renderMobileLevels(); };

      if (variant === 'C') {
        const li = document.createElement('li');
        const r = document.createElement('div');
        r.className = 'row overview-header';
        r.textContent = cluster.label + ' overview';
        r.addEventListener('click', () => showToast({ url: cluster.overview, label: cluster.label + ' overview', note: 'mega-menu overview link (Option C)' }));
        li.appendChild(r);
        ul.appendChild(li);
      }

      cluster.items.forEach(it => {
        const li = document.createElement('li');
        const row = document.createElement('div');
        row.className = 'row sub-item';
        const labelW = document.createElement('div');
        labelW.style.cssText = 'flex:1; display:flex; align-items:center;';
        const lab = document.createElement('span');
        lab.className = 'label';
        lab.textContent = it.label;
        labelW.appendChild(lab);
        const tag = document.createElement('span');
        tag.className = 'angle-tag ' + it.angle;
        tag.textContent = it.angle;
        labelW.appendChild(tag);
        row.appendChild(labelW);
        const chev = document.createElement('span');
        chev.className = 'chev';
        chev.textContent = '›';
        row.appendChild(chev);
        row.addEventListener('click', () => showToast({ url: it.url, label: it.label, note: 'angle sub-item · ' + it.angle }));
        li.appendChild(row);
        ul.appendChild(li);
      });
    }
  }

  function rowItem(label, url, dest) {
    const li = document.createElement('li');
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<span class="label">${label}</span><span class="chev">›</span>`;
    row.addEventListener('click', () => showToast(dest));
    li.appendChild(row);
    return li;
  }
  function rowExpand(label, onTap) {
    const li = document.createElement('li');
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<span class="label">${label}</span><span class="chev">›</span>`;
    row.addEventListener('click', onTap);
    li.appendChild(row);
    return li;
  }

  // ---------- Destination toast ----------
  let toastTimer = null;
  function showToast(dest) {
    const t = document.querySelector('#dest-toast');
    if (!t || !dest) return;
    t.innerHTML = `<div>Would navigate to <strong>${dest.label}</strong></div>
      <div class="url">${dest.url}</div>
      <div class="reason">${dest.note}</div>`;
    t.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
  }

  // ---------- Wire up DOM ----------
  function init() {
    const sel = document.querySelector('#ctx-current-wrap');
    if (sel) buildContextSelector(sel);

    const menuBtn = document.querySelector('#menu-btn');
    const overlay = document.querySelector('#nav-overlay');
    if (menuBtn && overlay) {
      menuBtn.addEventListener('click', () => {
        mobileStack = [];
        overlay.classList.add('open');
        renderMobileLevels();
      });
      overlay.querySelector('.close').addEventListener('click', () => overlay.classList.remove('open'));
    }

    renderDesktopNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
