/* ==========================================================================
   SkinVerse — product catalogue
   All prices are in Indian Rupees (INR / ₹).
   Images live in ref/desk (d1–d24) and ref/digital:
     w = wallpapers · cur = cursors · vs = VS Code themes · r = Rainmeter skins
   ========================================================================== */

const PRODUCTS = [
  // ---------- Digital ----------

  // Wallpapers
  { id: "w1", cat: "digital", sub: "wallpaper", name: "Ink & Gold Duo", tagline: "Anime-style wallpaper, up to 8K", price: 79, swatch: 4, img: "ref/digital/w1.jpg", file: "ref/digital/w1.jpg",
    desc: "Two silhouetted figures stand back to back in front of bold yellow brush calligraphy, set on a deep teal ink-wash background with dark cloud shapes. High-impact art that fills a single or dual monitor setup.",
    variants: ["1080p", "4K", "8K"] },
  { id: "w2", cat: "digital", sub: "wallpaper", name: "Cherry Blossom Katana", tagline: "Minimal pink wallpaper", price: 39, swatch: 3, img: "ref/digital/w2.jpg", file: "ref/digital/w2.jpg",
    desc: "A katana with a flowering cherry-blossom branch laid along the blade, on a soft pastel-pink background. Clean, calm and easy on the eyes.",
    variants: [] },
  { id: "w3", cat: "digital", sub: "wallpaper", name: "Bay Bridge at Night", tagline: "City skyline wallpaper", price: 59, swatch: 8, img: "ref/digital/w3.jpg", file: "ref/digital/w3.jpg",
    desc: "A lit suspension bridge and glittering skyline across a calm bay under a starry sky with a faint shooting star. Moored boats leave warm golden light trails on the water.",
    variants: ["1080p", "1440p", "4K"] },
  { id: "w4", cat: "digital", sub: "wallpaper", name: "Black Silk Abstract", tagline: "OLED-friendly dark wallpaper", price: 39, swatch: 8, img: "ref/digital/w4.png", file: "ref/digital/w4.png",
    desc: "A sculpted ribbon of black silk with subtle silver highlights, floating on pure black. Minimal, moody and a good match for OLED screens and dark themes.",
    variants: ["1080p", "1440p", "4K"] },
  { id: "w5", cat: "digital", sub: "wallpaper", name: "Awakening in the Rubble", tagline: "Dark monochrome art", price: 59, swatch: 8, img: "ref/digital/w5.jpg", file: "ref/digital/w5.jpg",
    desc: "A lone figure with glowing white hair stands amid floating debris in a shadowy blue-grey cavern. Dramatic, dark and detailed without being busy.",
    variants: ["1080p", "1440p", "4K"] },
  { id: "w6", cat: "digital", sub: "wallpaper", name: "Island House Sunset", tagline: "Painterly sunset wallpaper", price: 59, swatch: 6, img: "ref/digital/w6.jpg", file: "ref/digital/w6.jpg",
    desc: "A pink beach house on a tiny palm-fringed island at sunset, with a golden comet trailing across towering orange clouds above a calm blue sea.",
    variants: ["1080p", "1440p", "4K"] },
  { id: "w7", cat: "digital", sub: "wallpaper", name: "Crimson Smoke Portrait", tagline: "Anime portrait wallpaper", price: 59, swatch: 1, img: "ref/digital/w7.jpg", file: "ref/digital/w7.jpg",
    desc: "An anime character with pink spiky hair and a scarred cheek, wearing a black hooded jacket, framed by swirling red and violet smoke.",
    variants: ["1080p", "1440p", "4K"] },
  { id: "w8", cat: "digital", sub: "wallpaper", name: "Kawaii Bow Kitty", tagline: "Cute pink wallpaper", price: 39, swatch: 3, img: "ref/digital/w8.png", file: "ref/digital/w8.png",
    desc: "A cheerful white cat with a red bow and a tiny teddy on her head, surrounded by little hearts on a warm salmon-pink background.",
    variants: ["1080p", "1440p", "4K"] },

  // Cursors
  { id: "cur1", cat: "digital", sub: "cursor", name: "Glove & Astronaut Cursor", tagline: "Pointing glove + mascot", price: 69, swatch: 5, img: "ref/digital/cur1.png",
    desc: "A white cartoon glove with an extended finger as the pointer, paired with a chubby white astronaut mascot with a blue visor as the companion cursor. Bold outlines and a soft shadow keep it readable on any background.",
    variants: ["Standard", "Large"] },
  { id: "cur2", cat: "digital", sub: "cursor", name: "Checkerboard Racer Cursor", tagline: "Black & white arrow + hand", price: 69, swatch: 8, img: "ref/digital/cur2.png",
    desc: "A race-flag checkerboard arrow with a matching pointing hand, both with thick black outlines. High contrast and easy to spot on busy screens.",
    variants: ["Standard", "Large"] },
  { id: "cur3", cat: "digital", sub: "cursor", name: "Pink Bloom Cursor", tagline: "Floral arrow + hand", price: 59, swatch: 3, img: "ref/digital/cur3.png",
    desc: "A hot-pink arrow and pointing hand filled with a marbled cream flower pattern. Soft, playful and a little retro.",
    variants: ["Standard", "Large"] },
  { id: "cur4", cat: "digital", sub: "cursor", name: "Tiger Orange Cursor", tagline: "Orange arrow + tiger face", price: 79, swatch: 1, img: "ref/digital/cur4.png",
    desc: "A glossy orange arrow with a highlight stripe, paired with a cheerful tiger face with brown stripes and a cream muzzle.",
    variants: ["Standard", "Large"] },
  { id: "cur5", cat: "digital", sub: "cursor", name: "Sparky Yellow Cursor", tagline: "Yellow arrow + mouse face", price: 79, swatch: 4, img: "ref/digital/cur5.png",
    desc: "A bright yellow arrow with a glossy edge, paired with a cute electric-mouse face with black-tipped ears and red cheeks.",
    variants: ["Standard", "Large"] },
  { id: "cur6", cat: "digital", sub: "cursor", name: "Bow Kitty Cursor", tagline: "Pastel arrow + kitty face", price: 79, swatch: 3, img: "ref/digital/cur6.png",
    desc: "A pastel-pink arrow with a glossy shine, paired with a white kitty face with a red bow, pink cheeks and whiskers.",
    variants: ["Standard", "Large"] },
  { id: "cur7", cat: "digital", sub: "cursor", name: "Aqua Turtle Cursor", tagline: "Pale blue arrow + turtle face", price: 79, swatch: 2, img: "ref/digital/cur7.png",
    desc: "A pale aqua arrow with a soft highlight, paired with a round-faced blue turtle character with big glossy eyes.",
    variants: ["Standard", "Large"] },
  { id: "cur8", cat: "digital", sub: "cursor", name: "Midnight Spider Cursor", tagline: "Indigo arrow + spider", price: 69, swatch: 7, img: "ref/digital/cur8.png",
    desc: "A deep indigo arrow with a white highlight, paired with a little purple spider with long, curved legs. Quiet, dark and a bit spooky.",
    variants: ["Standard", "Large"] },

  // VS Code themes
  { id: "vs1", cat: "digital", sub: "vscode", name: "GitHub Dark", tagline: "VS Code theme, charcoal", price: 79, swatch: 8, img: "ref/digital/vs1.svg",
    desc: "A calm charcoal editor theme with soft coral, purple and blue syntax colours, a subtle red-accent tab and a quiet status bar. Easy to read through a long day of JavaScript.",
    variants: [] },
  { id: "vs2", cat: "digital", sub: "vscode", name: "Atom One Dark", tagline: "VS Code theme, slate", price: 79, swatch: 5, img: "ref/digital/vs2.svg",
    desc: "A slate-grey theme with green strings, purple keywords and blue function names. A familiar, balanced palette for everyday coding.",
    variants: [] },
  { id: "vs3", cat: "digital", sub: "vscode", name: "Ayu Dark", tagline: "VS Code theme, deep navy", price: 79, swatch: 8, img: "ref/digital/vs3.svg",
    desc: "A near-black navy theme with warm orange and gold highlights on keywords and strings. Strong contrast with a soft, low-glare background.",
    variants: [] },
  { id: "vs4", cat: "digital", sub: "vscode", name: "Night Owl", tagline: "VS Code theme, midnight blue", price: 99, swatch: 2, img: "ref/digital/vs4.svg",
    desc: "A deep midnight-blue theme with italic teal and violet accents, built for late-night sessions. Comments and calls stay clear without harsh brightness.",
    variants: [] },
  { id: "vs5", cat: "digital", sub: "vscode", name: "Doki Theme: Asuna", tagline: "VS Code theme, crimson accent", price: 99, swatch: 1, img: "ref/digital/vs5.svg",
    desc: "A dark charcoal theme with crimson accents, from the sidebar icons to the full-width red status bar, and bright blue, orange and yellow syntax colours.",
    variants: [] },
  { id: "vs6", cat: "digital", sub: "vscode", name: "Bearded Black & Gold Soft", tagline: "VS Code theme, warm black", price: 99, swatch: 4, img: "ref/digital/vs6.svg",
    desc: "A warm brown-black theme with gold activity-bar accents, teal and orange syntax colours and a soft, low-glare feel.",
    variants: [] },
  { id: "vs7", cat: "digital", sub: "vscode", name: "Noctis Bordo", tagline: "VS Code theme, wine", price: 99, swatch: 1, img: "ref/digital/vs7.svg",
    desc: "A wine-toned theme with a mauve-brown background and rose accents, with yellow, teal and peach highlights. Distinctive, warm and easy on the eyes.",
    variants: [] },
  { id: "vs8", cat: "digital", sub: "vscode", name: "Cobalt2", tagline: "VS Code theme, bold blue", price: 79, swatch: 2, img: "ref/digital/vs8.svg",
    desc: "A bold cobalt-blue theme with yellow and green highlights and an electric-blue comment style. High energy and very readable.",
    variants: [] },

  // Rainmeter skins
  { id: "r1", cat: "digital", sub: "rainmeter", name: "Dot-Matrix Red Suite", tagline: "Rainmeter widget pack", price: 199, swatch: 1, img: "ref/digital/r1.png",
    desc: "A bold red, black and white widget collection in a dot-matrix style: clocks, calendar, music player, battery and RAM rings, notes and a photo frame, arranged like a phone-style dashboard.",
    variants: [] },
  { id: "r2", cat: "digital", sub: "rainmeter", name: "Transparent Blur Widgets", tagline: "Rainmeter glass widget pack", price: 179, swatch: 6, img: "ref/digital/r2.png",
    desc: "Frosted-glass widgets over your wallpaper: circular gauges, an analog clock, calendar, music controls, a battery meter and a sidebar weather panel with clear, friendly error messages.",
    variants: [] },
  { id: "r3", cat: "digital", sub: "rainmeter", name: "Sage Dashboard", tagline: "Rainmeter all-in-one desktop", price: 249, swatch: 5, img: "ref/digital/r3.png",
    desc: "A dark dashboard with a huge clock, date and weather, a music player with waveform, CPU, RAM and GPU bars, a month calendar, app shortcuts, a search bar and a sports-car illustration, all in soft sage-green tiles.",
    variants: [] },
  { id: "r4", cat: "digital", sub: "rainmeter", name: "Minimal Glass Day Clock", tagline: "Rainmeter minimal set", price: 129, swatch: 8, img: "ref/digital/r4.png",
    desc: "A minimalist set in thin glass outlines: a large day-and-date block, current weather, a now-playing bar and a recycle-bin widget. Quiet and uncluttered.",
    variants: [] },
  { id: "r5", cat: "digital", sub: "rainmeter", name: "Slate Blue Big Clock", tagline: "Rainmeter clock + calendar", price: 149, swatch: 2, img: "ref/digital/r5.png",
    desc: "A huge slate-blue clock beside a month calendar, a music card with a play button and a connected-device battery readout. Easy to read from across the room.",
    variants: [] },
  { id: "r6", cat: "digital", sub: "rainmeter", name: "Mountain Horizon Desktop", tagline: "Rainmeter full-desktop skin", price: 229, swatch: 8, img: "ref/digital/r6.png",
    desc: "A black desktop with a glowing mountain ridge: a spaced-out day and date headline, 7-day forecast, music player with visualiser, CPU and RAM meters, an app dock, a quote and a recycle bin.",
    variants: [] },
  { id: "r7", cat: "digital", sub: "rainmeter", name: "Navy Tile Dashboard", tagline: "Rainmeter tile layout", price: 229, swatch: 2, img: "ref/digital/r7.png",
    desc: "A navy-blue tile layout with a clock, music player, weather forecast, quote card, black-cat illustration and photo tiles, plus system meters and a bottom app dock.",
    variants: [] },


  // Desktop bundles (home-page slider). Each one is a full-desktop setup sold as one download.
  // `file` = the zip you upload into the /downloads folder. Edit `includes` to match what is really inside each zip.
  { id: "b1", cat: "digital", sub: "bundle", name: "Himalaya Dawn", tagline: "Minimal alpine desktop bundle", price: 299, swatch: 2, img: "ref/home-pro/ds1.jpg",
    file: "downloads/himalaya-dawn.rmskin",
    desc: "A calm, wide-open desktop built around a snow-capped mountain at first light. A big, widely spaced weekday headline and a slim date line sit in the sky, a live audio visualiser rises from the ridge, and a one-line weather readout and a glowing app dock finish the scene.",
    theme: "Cool blue sky fading into warm peak light, thin futuristic lettering, lots of breathing room. Made for people who want a clean desktop that still feels alive.",
    includes: ["Mountain wallpaper (high resolution)", "Weekday + date headline widget", "Audio visualiser widget", "Weather one-liner widget", "Glow app-dock icon set", "Double-click install (.rmskin)"],
    variants: [] },
  { id: "b2", cat: "digital", sub: "bundle", name: "Fuji Midnight", tagline: "Giant-clock lock-screen style bundle", price: 249, swatch: 5, img: "ref/home-pro/ds2.jpg",
    file: "downloads/fuji-midnight.rmskin",
    desc: "A snowy night scene with a glowing late-night shop in front of a huge mountain, and an oversized clock sitting right behind the peak. A small month calendar, a now-playing music card and a battery readout stack neatly in the top-left corner.",
    theme: "Deep navy and frosty white, quiet and cinematic. The number-one look for a tablet or a clean, focused workspace.",
    includes: ["Night mountain wallpaper (tablet + desktop sizes)", "Oversized clock widget", "Mini calendar widget", "Music player card", "Battery / device status widget", "Double-click install (.rmskin)"],
    variants: [] },
  { id: "b3", cat: "digital", sub: "bundle", name: "Crimson Web", tagline: "Red & black hero-style bundle", price: 349, swatch: 1, img: "ref/home-pro/ds3.jpg",
    file: "downloads/crimson-web/SpideyDesk.rmskin",
    extras: [{ label: "Matching wallpaper (JPG)", file: "downloads/crimson-web/spidey-wallpaper.jpg" }, { label: "Setup guide (TXT)", file: "downloads/crimson-web/SpideyDesk-README.txt" }, { label: "Scaling guide (TXT)", file: "downloads/crimson-web/Scaling-Guide.txt" }],
    requires: "Needs Rainmeter 4.5+ on Windows 10/11 (free from rainmeter.net).",
    desc: "A bold red and black desktop with a textured suit-pattern wallpaper and a metallic spider emblem in the middle. Dark-red glass widgets frame the screen: calendar, clock, battery ring, weather strip, comic-style photo tiles and a full icon dock.",
    theme: "High-energy crimson with black accents, comic-book attitude and glassy widgets. For fans who want their desktop to look like a collector's edition.",
    includes: ["32 separate Rainmeter skins, each movable and resizable", "Live clock, day card, calendar and battery ring", "Weather forecast (no API key needed)", "CPU / RAM / GPU meters + audio visualiser", "Music player, search bar and Wi-Fi status", "10-tile app dock + folder shortcuts", "Matching wallpaper (JPG)", "Setup guide + scaling guide"],
    variants: [] },
  { id: "b4", cat: "digital", sub: "bundle", name: "Blue Waves", tagline: "Soft blue widget-collage bundle", price: 299, swatch: 2, img: "ref/home-pro/ds4.jpg",
    file: "downloads/blue-waves.rmskin",
    desc: "A dreamy periwinkle desktop made of rounded widget cards: a bold date-and-time block, a five-day weather strip, a poster-style quote card, a music cover card, a black-cat illustration and a cosy photo tile, all above a frosted dock.",
    theme: "Washed blue, soft glass and playful photo cards, calm and personal. A mood-board desktop you can make your own.",
    includes: ["Blue gradient wallpaper (high resolution)", "Date + time block widget", "5-day weather strip", "Quote poster card", "Photo and music card templates", "Frosted dock + icon set", "Double-click install (.rmskin)"],
    variants: [] },

  // ---------- Desk ----------
  { id: "d1", cat: "desk", name: "Neon Wave Rope Light", tagline: "Flexible LED wall light", price: 1299, swatch: 1, img: "ref/desk/d1.jpg",
    desc: "A flexible neon-style LED rope bent into a free-flowing wave across the wall above a bed. The soft white glow adds a calm accent light without a bulky fixture.",
    variants: [] },
  { id: "d2", cat: "desk", name: "Sunrise Smart Clock", tagline: "Rounded ambient display clock", price: 2499, swatch: 5, img: "ref/desk/d2.jpg",
    desc: "A pebble-shaped desk clock with a curved screen showing the time, day, temperature and a sunrise gradient. Its cream shell sits neatly beside a keyboard and notebook.",
    variants: [] },
  { id: "d3", cat: "desk", name: "Shuriken & Kunai Wall Hooks", tagline: "Ninja-style hooks", price: 799, swatch: 8, img: "ref/desk/d3.jpg",
    desc: "Matte black shuriken and kunai that double as wall hooks. The kunai is wrapped in twine with a hanging paper charm, so keys, bags or headphones hang in style.",
    variants: [] },
  { id: "d4", cat: "desk", name: "Katana Wall Display", tagline: "Sword brackets + LED panels", price: 1499, swatch: 6, img: "ref/desk/d4.jpg",
    desc: "Two slim black brackets hold a katana flat against the wall, shown above purple LED light panels for a glowing gaming-room corner.",
    variants: [] },
  { id: "d5", cat: "desk", name: "Cactus Headphone Stand", tagline: "Headphones + watch holder", price: 999, swatch: 3, img: "ref/desk/d5.jpg",
    desc: "A ribbed green cactus sculpture that holds over-ear headphones on one arm and a smartwatch on the other. The wooden tray base catches earbuds and small items.",
    variants: [] },
  { id: "d6", cat: "desk", name: "Retro Car-Grille Wall Light", tagline: "Vintage statement lamp", price: 3499, swatch: 1, img: "ref/desk/d6.jpg",
    desc: "A vintage car front end, with chrome grille and round headlights, mounted on the wall as a statement lamp. Warm bulbs behind the headlights cast an amber glow across the ceiling.",
    variants: [] },
  { id: "d7", cat: "desk", name: "Pixel Crafting-Table Side Table", tagline: "Block-style bedside table", price: 4999, swatch: 1, img: "ref/desk/d7.jpg",
    desc: "A wooden side table finished in a pixel-block crafting-bench pattern, with a gridded top, dark frame and an open lower shelf for books or a console.",
    variants: [] },
  { id: "d8", cat: "desk", name: "Tripod Phone Stand", tagline: "Sci-fi spider-leg stand", price: 399, swatch: 5, img: "ref/desk/d8.jpg",
    desc: "A white tripod-style phone stand with three splayed legs and etched sci-fi lettering. It holds your phone upright and angled for video calls, recipes or a bedside clock.",
    variants: [] },
  { id: "d9", cat: "desk", name: "Stone Golem Planter", tagline: "Rocky head planter", price: 1499, swatch: 3, img: "ref/desk/d9.jpg",
    desc: "A planter shaped like a grumpy stone golem head with two clenched fists. Succulents and trailing greenery sprout from the top, perfect for a dresser or desk.",
    variants: [] },
  { id: "d10", cat: "desk", name: "Spider Emblem Wall Light", tagline: "Red-glow LED wall emblem", price: 1799, swatch: 1, img: "ref/desk/d10.jpg",
    desc: "A black spider silhouette mounted on the wall with a vivid red backlight halo. A bold accent for a gaming or work corner.",
    variants: [] },
  { id: "d11", cat: "desk", name: "GT Wing Desk Display", tagline: "Race-car spoiler desk piece", price: 699, swatch: 8, img: "ref/desk/d11.jpg",
    desc: "A miniature race-car rear wing on slim black struts, finished in white with bold black lettering. A small display piece for a shelf or desk.",
    variants: [] },
  { id: "d12", cat: "desk", name: "Hand Headphone Hanger", tagline: "Wall-mounted hand holder", price: 499, swatch: 8, img: "ref/desk/d12.jpg",
    desc: "A black hand-shaped hook on a square wall plate that cradles your headphones by the headband, keeping them off the desk and within reach.",
    variants: [] },
  { id: "d13", cat: "desk", name: "Platform 9¾ Hanging Sign", tagline: "Wrought-iron wall sign", price: 1299, swatch: 1, img: "ref/desk/d13.jpg",
    desc: "A round Platform 9¾ sign with a maroon rim, hanging from a black scrolled iron bracket with a ball finial. A storybook-station accent for a hallway or study.",
    variants: [] },
  { id: "d14", cat: "desk", name: "Wizard Hat Book Stack", tagline: "Sculpted hat on spellbooks", price: 1199, swatch: 4, img: "ref/desk/d14.jpg",
    desc: "A weathered, sculpted wizard hat perched on three ornate hardbound books with gold detailing. A magical shelf piece that also works as a hanging ornament.",
    variants: [] },
  { id: "d15", cat: "desk", name: "Pixel Lantern Wall Light", tagline: "Block-style lantern on a chain", price: 1399, swatch: 4, img: "ref/desk/d15.jpg",
    desc: "A pixel-style lantern with glowing amber squares, hanging from a grey chain on a wall bracket. It casts a warm light and a neat chain shadow on the wall.",
    variants: [] },
  { id: "d16", cat: "desk", name: "Ocean Resin Lamp", tagline: "Wood + resin diver lamp", price: 4499, swatch: 2, img: "ref/desk/d16.jpg",
    desc: "A live-edge wood and clear resin lamp with a deep-blue ocean scene, tiny divers and glowing foam where the wood parts. Lit from the base, it works as both lamp and art piece.",
    variants: [] },
  { id: "d17", cat: "desk", name: "Turntable Wall Clock", tagline: "Record-player clock", price: 1299, swatch: 5, img: "ref/desk/d17.jpg",
    desc: "A wall clock built like a turntable: a black vinyl record with an orange label serves as the face, framed by a silver plinth and tonearm.",
    variants: [] },
  { id: "d18", cat: "desk", name: "Star Shield Round Rug", tagline: "Plush circular rug", price: 1999, swatch: 1, img: "ref/desk/d18.jpg",
    desc: "A soft round rug in concentric red and cream rings with a blue centre and a white star. The deep pile suits a bathroom, bedside or gaming nook.",
    variants: [] },
  { id: "d19", cat: "desk", name: "Sculpted Wood Glow Lamp", tagline: "Organic cut-out lamp", price: 3999, swatch: 6, img: "ref/desk/d19.jpg",
    desc: "A dark wood sculpture with flowing cut-outs that glow amber from inside, throwing dramatic patterned shadows across the wall.",
    variants: [] },
  { id: "d20", cat: "desk", name: "Potato Buddy Night Light", tagline: "Soft glow mood light", price: 899, swatch: 6, img: "ref/desk/d20.jpg",
    desc: "A cheerful potato-shaped night light lounging on a mint sofa. Its warm orange glow makes a gentle bedside or desk companion.",
    variants: [] },
  { id: "d21", cat: "desk", name: "Kitty Face Ceramic Mug", tagline: "Cat-ear coffee mug", price: 499, swatch: 3, img: "ref/desk/d21.jpg",
    desc: "A glossy cream ceramic mug with a kitten face, whiskers, blush cheeks and little ear points at the rim, plus a comfy rounded handle.",
    variants: [] },
  { id: "d22", cat: "desk", name: "LED Desk Clock", tagline: "Bold digital clock", price: 799, swatch: 8, img: "ref/desk/d22.jpg",
    desc: "A compact digital clock with large white LED digits in a black frame, easy to read from your chair. Sits neatly beside a lamp, laptop and keyboard.",
    variants: [] },
  { id: "d23", cat: "desk", name: "Cloud Wall Shelf", tagline: "Backlit floating shelf", price: 1199, swatch: 5, img: "ref/desk/d23.jpg",
    desc: "A white cloud-shaped floating shelf with a warm glowing back panel. Holds a mug, books or small keepsakes.",
    variants: [] },
  { id: "d24", cat: "desk", name: "Sand Art Glow Lamp", tagline: "Mountain sand-art LED lamp", price: 2299, swatch: 4, img: "ref/desk/d24.jpg",
    desc: "A round sand-art scene of blue mountains set inside a crescent LED ring on a black base. The ring gives a warm ambient glow that lights the picture.",
    variants: [] },
];

const SKINVERSE = (() => {
  const CART_KEY = "sv_cart";
  const WISH_KEY = "sv_wish";

  const read = (key) => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
  const write = (key, val) => localStorage.setItem(key, JSON.stringify(val));

  const OWN_KEY = "sv_owned";
  const getOwned = () => read(OWN_KEY);
  const isOwned = (id) => getOwned().includes(id);
  // Demo checkout: marks every digital item in the cart as owned, then empties the cart.
  const placeOrder = () => {
    const lines = cartLines();
    const owned = new Set(getOwned());
    lines.forEach((l) => { if (l.product.cat === "digital") owned.add(l.id); });
    write(OWN_KEY, [...owned]);
    saveCart([]);
    return lines;
  };

  // Files a buyer can download for a product (bundles: main package + extras; wallpapers: the image).
  const downloadsFor = (p) => {
    if (!p || !p.file) return [];
    const list = [{ label: p.sub === "bundle" ? "Download bundle (.rmskin)" : "Download wallpaper", href: p.file }];
    (p.extras || []).forEach((e) => list.push({ label: e.label, href: e.file }));
    return list;
  };

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
  const cartCount = () => cartLines().reduce((n, l) => n + l.qty, 0);
  const cartLines = () => getCart().map((l) => ({ ...l, product: getProduct(l.id) })).filter((l) => l.product);
  const cartSubtotal = () => cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);

  const getWishlist = () => read(WISH_KEY).filter((id) => getProduct(id));
  const isWished = (id) => getWishlist().includes(id);
  const toggleWishlist = (id) => {
    let wish = getWishlist();
    wish = wish.includes(id) ? wish.filter((w) => w !== id) : [...wish, id];
    write(WISH_KEY, wish);
    updateBadges();
  };
  const wishlistProducts = () => getWishlist().map(getProduct).filter(Boolean);

  // All prices are Indian Rupees, shown with Indian digit grouping (e.g. ₹1,29,999).
  const INR = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  const money = (n) => INR.format(Math.round(n));

  const SUB_LABELS = { wallpaper: "Wallpaper", cursor: "Cursor pack", vscode: "VS Code theme", rainmeter: "Rainmeter skin", bundle: "Desktop bundle" };
  const catLabel = (p) => (p.cat === "digital" ? `Digital · ${SUB_LABELS[p.sub] || "Skin"}` : "Desk");

  // Cursor packs and VS Code previews are shown whole (contain); photos and art fill the tile (cover).
  const fitClass = (p) => (p.sub === "cursor" || p.sub === "vscode" ? "fit-contain" : "");
  const thumbHTML = (p) =>
    `<div class="thumb has-img ${p.cat === "digital" ? "wide" : ""} ${fitClass(p)} swatch-${p.swatch}"><img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"></div>`;

  const cardHTML = (p) => `
    <a class="product-card" href="${p.sub === 'bundle' ? 'bundle.html' : 'product.html'}?id=${p.id}">
      ${thumbHTML(p)}
      <button class="card-wish ${isWished(p.id) ? "active" : ""}" data-wish="${p.id}" aria-label="Toggle wishlist" onclick="event.preventDefault(); SKINVERSE.toggleWishlist('${p.id}'); this.classList.toggle('active');">
        <i class="fa-solid fa-heart"></i>
      </button>
      <div class="card-body">
        <span class="card-cat">${catLabel(p)}</span>
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
    wishlistProducts, getOwned, isOwned, placeOrder, downloadsFor, money, catLabel, thumbHTML, fitClass, cardHTML, renderGrid, updateBadges, pulse,
  };
})();
