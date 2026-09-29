/* ==========================================================================
   SkinVerse — product catalogue
   ========================================================================== */

const PRODUCTS = [
  // ---------- Digital ----------
  { id: "d01", cat: "digital", name: "Nebula Terminal", tagline: "Animated terminal theme", price: 12, swatch: 1, icon: "fa-terminal",
    desc: "A full terminal re-skin with an animated star-drift background, glow-cursor and a custom prompt glyph set. Built for iTerm2, Windows Terminal and most Linux emulators.",
    variants: ["Windows Terminal", "iTerm2", "Alacritty"] },
  { id: "d02", cat: "digital", name: "Chrome Void", tagline: "Icon pack, 400+ glyphs", price: 8, swatch: 8, icon: "fa-icons",
    desc: "A brushed-metal icon set for your dock and desktop shortcuts. 400+ hand-tuned glyphs covering apps, folders and system tools.",
    variants: ["macOS", "Windows 11", "Linux"] },
  { id: "d03", cat: "digital", name: "Aurora Boot", tagline: "Startup sequence", price: 15, swatch: 5, icon: "fa-bolt",
    desc: "Replace the stock boot logo with a slow aurora bloom and a low synth swell. Loads in under 400ms so it never delays your desktop.",
    variants: ["1080p", "1440p", "4K"] },
  { id: "d04", cat: "digital", name: "Glasswing Cursor", tagline: "Cursor + click FX set", price: 6, swatch: 3, icon: "fa-arrow-pointer",
    desc: "A frosted-glass cursor with a soft trailing glow and satisfying click ripple. Includes busy, text and resize states.",
    variants: ["Standard", "Large", "Extra Large"] },
  { id: "d05", cat: "digital", name: "Obsidian Taskbar", tagline: "Taskbar + tray skin", price: 10, swatch: 8, icon: "fa-window-maximize",
    desc: "A slim, translucent taskbar with chrome dividers and a re-drawn system tray. Pairs cleanly with dark wallpapers.",
    variants: ["Windows 11", "Windows 10"] },
  { id: "d06", cat: "digital", name: "Solstice Bundle", tagline: "12 wallpapers, dual monitor", price: 9, swatch: 4, icon: "fa-image",
    desc: "Twelve wallpapers built as matching pairs for dual-monitor rigs, from midday amber to deep-space navy.",
    variants: ["Single 4K", "Dual Monitor", "Ultrawide"] },
  { id: "d07", cat: "digital", name: "Vaporlight Widgets", tagline: "Desktop widget pack", price: 11, swatch: 6, icon: "fa-gauge",
    desc: "Clock, weather and system-monitor widgets in one cohesive glass style, ready for Rainmeter or Übersicht.",
    variants: ["Rainmeter", "Übersicht"] },
  { id: "d08", cat: "digital", name: "Monolith Lockscreen", tagline: "Animated lock screen", price: 7, swatch: 5, icon: "fa-lock",
    desc: "A slow-rotating monolith render for your lock screen, with a clean time readout and no clutter.",
    variants: ["1080p", "1440p", "4K"] },

  // ---------- Desk ----------
  { id: "k01", cat: "desk", name: "Argent Desk Mat", tagline: "900×400mm, stitched edge", price: 34, swatch: 5, icon: "fa-border-none",
    desc: "A full-desk mat in brushed-silver print with a stitched edge and non-slip rubber base. 900×400mm covers keyboard, mouse and more.",
    variants: ["900×400", "1200×500"] },
  { id: "k02", cat: "desk", name: "Halo LED Panel", tagline: "Ambient monitor backlight", price: 58, swatch: 1, icon: "fa-lightbulb",
    desc: "A slim LED strip that mounts behind your monitor and syncs to on-screen colour for bias lighting that cuts eye strain.",
    variants: ["27\" Panel", "32\" Panel", "Ultrawide"] },
  { id: "k03", cat: "desk", name: "Obsidian Keycaps", tagline: "108-key PBT set", price: 42, swatch: 8, icon: "fa-keyboard",
    desc: "A 108-key PBT double-shot set in matte black with chrome-edge accent keys. Cherry profile, fits most mechanical boards.",
    variants: ["Cherry Profile", "OEM Profile"] },
  { id: "k04", cat: "desk", name: "Chrome Cable Kit", tagline: "Braided sleeve set", price: 19, swatch: 5, icon: "fa-plug",
    desc: "Braided cable sleeves in gunmetal chrome, with matching combs and Velcro ties to keep your under-desk run invisible.",
    variants: ["6-Cable Kit", "12-Cable Kit"] },
  { id: "k05", cat: "desk", name: "Drift Wrist Rest", tagline: "Memory-foam, cooling gel", price: 22, swatch: 3, icon: "fa-hand",
    desc: "A low-profile wrist rest with cooling gel over memory foam and a soft-touch cover that matches the Argent mat.",
    variants: ["Keyboard", "Mouse", "Set"] },
  { id: "k06", cat: "desk", name: "Nightfall Riser", tagline: "Tempered-glass monitor stand", price: 46, swatch: 8, icon: "fa-display",
    desc: "A tempered-glass riser with under-storage and a smoked-chrome frame. Lifts your monitor to eye level and tidies the desk below.",
    variants: ["Single", "Dual"] },
  { id: "k07", cat: "desk", name: "Vertex Cable Comb", tagline: "Aluminium, 24-slot", price: 8, swatch: 6, icon: "fa-layer-group",
    desc: "A machined aluminium comb that keeps braided cables in a straight, even run behind your rig.",
    variants: ["16-Slot", "24-Slot"] },
  { id: "k08", cat: "desk", name: "Ion Desk Lamp", tagline: "Touch-dim, USB-C hub base", price: 65, swatch: 1, icon: "fa-lightbulb",
    desc: "A touch-dimmable desk lamp with a weighted base that doubles as a 3-port USB-C hub. Warm-to-cool colour slider.",
    variants: ["Matte Black", "Brushed Silver"] },
];

const SKINVERSE = (() => {
  const CART_KEY = "sv_cart";
  const WISH_KEY = "sv_wish";

  const read = (key) => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
  const write = (key, val) => localStorage.setItem(key, JSON.stringify(val));

  const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

  const getCart = () => read(CART_KEY);
  const saveCart = (cart) => { write(CART_KEY, cart); updateBadges(); };

  const addToCart = (id, qty = 1) => {
    const cart = getCart();
    const line = cart.find((l) => l.id === id);
    if (line) line.qty += qty; else cart.push({ id, qty });
    saveCart(cart);
  };
  const removeFromCart = (id) => saveCart(getCart().filter((l) => l.id !== id));
  const setQty = (id, qty) => {
    const cart = getCart();
    const line = cart.find((l) => l.id === id);
    if (!line) return;
    line.qty = Math.max(1, qty);
    saveCart(cart);
  };
  const cartCount = () => getCart().reduce((n, l) => n + l.qty, 0);
  const cartLines = () => getCart().map((l) => ({ ...l, product: getProduct(l.id) })).filter((l) => l.product);
  const cartSubtotal = () => cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);

  const getWishlist = () => read(WISH_KEY);
  const isWished = (id) => getWishlist().includes(id);
  const toggleWishlist = (id) => {
    let wish = getWishlist();
    wish = wish.includes(id) ? wish.filter((w) => w !== id) : [...wish, id];
    write(WISH_KEY, wish);
    updateBadges();
  };
  const wishlistProducts = () => getWishlist().map(getProduct).filter(Boolean);

  const money = (n) => `$${n.toFixed(2)}`;

  const swatchIcon = (p) =>
    `<div class="thumb swatch-${p.swatch}"><i class="fa-solid ${p.icon}"></i></div>`;

  const cardHTML = (p) => `
    <a class="product-card" href="product.html?id=${p.id}">
      ${swatchIcon(p)}
      <button class="card-wish ${isWished(p.id) ? "active" : ""}" data-wish="${p.id}" aria-label="Toggle wishlist" onclick="event.preventDefault(); SKINVERSE.toggleWishlist('${p.id}'); this.classList.toggle('active');">
        <i class="fa-solid fa-heart"></i>
      </button>
      <div class="card-body">
        <span class="card-cat">${p.cat === "digital" ? "Digital" : "Desk"}</span>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-tagline">${p.tagline}</p>
        <div class="card-foot">
          <span class="card-price">${money(p.price)}</span>
          <button class="card-add" onclick="event.preventDefault(); SKINVERSE.addToCart('${p.id}'); SKINVERSE.pulse(this);">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </a>`;

  const pulse = (btn) => {
    btn.classList.add("added");
    setTimeout(() => btn.classList.remove("added"), 550);
  };

  const renderGrid = (targetSel, products) => {
    const el = document.querySelector(targetSel);
    if (!el) return;
    el.innerHTML = products.length
      ? products.map(cardHTML).join("")
      : `<div class="empty-state"><i class="fa-solid fa-satellite-dish"></i><p>Nothing here yet.</p></div>`;
  };

  const updateBadges = () => {
    document.querySelectorAll("[data-badge='cart']").forEach((b) => {
      const n = cartCount();
      b.textContent = n;
      b.style.display = n > 0 ? "flex" : "none";
    });
    document.querySelectorAll("[data-badge='wish']").forEach((b) => {
      const n = getWishlist().length;
      b.textContent = n;
      b.style.display = n > 0 ? "flex" : "none";
    });
  };

  document.addEventListener("DOMContentLoaded", updateBadges);

  return {
    PRODUCTS, getProduct, getCart, addToCart, removeFromCart, setQty,
    cartCount, cartLines, cartSubtotal, getWishlist, isWished, toggleWishlist,
    wishlistProducts, money, cardHTML, renderGrid, updateBadges, pulse,
  };
})();
