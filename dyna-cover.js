(function () {
  const metaVariants = [
    {
      title: "Wiscar Ward 8 — BLE‑замок для 24V техники",
      description: "Умный замок без GSM и ключей. Wiscar Ward 8 — защита тягачей и тракторов на 24 В."
    },
    {
      title: "Bluetooth‑замок Wiscar — альтернатива сигналке",
      description: "Автономный BLE‑замок для будки, кунга, Газели. Без облака, без подписки."
    },
    {
      title: "Умный замок Wiscar — работает даже без интернета",
      description: "Открытие с доверенного Android, без брелоков и проводов. Безопасность без переплат."
    }
  ];
  const metaKey = "wiscarMetaV2";
  const now = Date.now();
  const savedMeta = JSON.parse(localStorage.getItem(metaKey) || "{}");
  if (!savedMeta.timestamp || now - savedMeta.timestamp > 86400000) {
    const pick = metaVariants[Math.floor(Math.random() * metaVariants.length)];
    document.title = pick.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = pick.description;
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = pick.description;
      document.head.appendChild(m);
    }
    localStorage.setItem(metaKey, JSON.stringify({ timestamp: now, ...pick }));
  } else {
    document.title = savedMeta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = savedMeta.description;
  }

  if (document.referrer.includes("youtube.com")) {
    const og = document.querySelector('meta[property="og:image"]');
    if (og) og.content = "https://wiscar.ru/assets/og-youtube.jpg";
  }

  const ua = navigator.userAgent.toLowerCase();
  document.querySelectorAll(".btn-cta").forEach((el) => {
    if (/android/.test(ua)) el.innerText = "Скачать APK";
    else if (/iphone|ipad/.test(ua)) el.innerText = "Узнать подробнее";
  });

  const hour = new Date().getHours();
  if (hour >= 22 || hour < 6) {
    const night = document.getElementById("nightBlock");
    if (night) night.style.display = "block";
  }

  const live = document.getElementById("live-searches");
  if (live) {
    const queries = [
      "замок на кунг без сигналки",
      "BLE замок для Газели",
      "открытие будки с телефона",
      "автозамок без ключа",
      "замок без GSM для фургона",
      "замок Wiscar для проката авто"
    ];
    let i = 0;
    setInterval(() => {
      live.innerText = "🚚 Ищут: " + queries[i++ % queries.length];
    }, 30000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img[alt]").forEach((img) => {
      if (img.closest("figure")) return;
      const fig = document.createElement("figure");
      const clone = img.cloneNode(true);
      const caption = document.createElement("figcaption");
      caption.innerText = img.alt;
      fig.appendChild(clone);
      fig.appendChild(caption);
      img.replaceWith(fig);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const hidden = document.createElement("div");
    hidden.style.cssText = "font-size:0.1px;height:0.1px;overflow:hidden;position:absolute;left:-9999px;";
    hidden.innerText =
      "умный замок без ключей ble 24v bluetooth замок для кунга альтернатива сигнализации газель прокат budka автомобиль ble устройство замок без gsm сигналки wifi ble автозамок без подписки";
    document.body.appendChild(hidden);

    const noscript = document.createElement("noscript");
    noscript.innerHTML =
      '<div style="position:absolute;left:-9999px;top:-9999px;">BLE‑замок для кунга, bluetooth замок без ключа, автономный замок 24 В, Wiscar, замок без GSM, открытие с телефона</div>';
    document.body.appendChild(noscript);
  });

  const faq = document.createElement("script");
  faq.type = "application/ld+json";
  faq.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Можно ли установить Wiscar на Газель?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, модель Ward 5 работает с будками и Газелями. Подключение за 5 минут."
        }
      },
      {
        "@type": "Question",
        "name": "Работает ли Wiscar без GSM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Wiscar — полностью автономный замок BLE 5.0. Интернет не требуется."
        }
      }
    ]
  });
  document.head.appendChild(faq);

  const products = [
    {
      "@type": "Product",
      "name": "Wiscar Ward 2",
      "description": "BLE-замок для кунгов, прицепов и авто 12 В",
      "brand": { "@type": "Brand", "name": "Wiscar" }
    },
    {
      "@type": "Product",
      "name": "Wiscar Ward 5",
      "description": "BLE-замок для будки, фургонов, Газелей (12–24 В)",
      "brand": { "@type": "Brand", "name": "Wiscar" }
    },
    {
      "@type": "Product",
      "name": "Wiscar Ward 8",
      "description": "Промышленный BLE-замок 24 В для тягачей и спецтехники",
      "brand": { "@type": "Brand", "name": "Wiscar" }
    }
  ];
  products.forEach(product => {
    const p = document.createElement("script");
    p.type = "application/ld+json";
    p.textContent = JSON.stringify({ "@context": "https://schema.org", ...product });
    document.head.appendChild(p);
  });

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.innerText = new Date().getFullYear();

  const links = document.createElement("div");
  links.style.cssText = "position:absolute;left:-9999px;font-size:1px;";
  links.innerHTML =
    '<a href="/ward-2">Wiscar Ward 2 — BLE‑замок для прицепов</a><a href="/ward-5">Wiscar Ward 5 — для будки и Газели</a><a href="/ward-8">Wiscar Ward 8 — 24V для тягачей</a>';
  document.body.appendChild(links);

  const cities = [
    "Санкт-Петербург", "Казань", "Тула", "Челябинск",
    "Абу-Даби", "Самара", "Краснодар", "Томск",
    "Новосибирск", "Омск", "Дубай", "Екатеринбург"
  ];
  const picked = cities.sort(() => Math.random() - 0.5).slice(0, 5);
  const cityBlock = document.createElement("div");
  cityBlock.style.cssText = "font-size:13px;color:#888;margin-top:40px;text-align:center;";
  cityBlock.innerText = "🟢 Сегодня Wiscar установили в: " + picked.join(", ");
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(cityBlock);
  });

  console.log("%c🛑 Внимание!", "font-size: 24px; color: red;");
  console.log(
    "%cЛюбая попытка скопировать или подменить скрипт будет зафиксирована. Wiscar работает только с доверенным Android-устройством.",
    "font-size: 14px; color: gray;"
  );

  window.addEventListener("scroll", () => {
    const imgs = document.querySelectorAll("img.tn-atom__img");
    imgs.forEach((img) => {
      img.style.transform = `translateY(${(Math.sin(Date.now() / 300) * 0.5).toFixed(2)}px)`;
    });
  });

  const futureQueries = [
    "электронный замок без GSM и подписки",
    "как защитить кунг от угона",
    "смарт-замок 24в без облака",
    "как открыть будку с телефона",
    "ble замок для лодки и техники",
    "альтернатива StarLine без проводки",
    "замок для фургона без сигналки",
    "как управлять замком с Android 6"
  ];
  const trendEl = document.createElement("div");
  trendEl.innerText = "🧠 Завтра будут искать: " + futureQueries[Math.floor(Math.random() * futureQueries.length)];
  trendEl.style = "font-size: 14px; color: #555; text-align: center; margin-top: 30px;";
  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(trendEl));

  ["logo.webp", "main.js", "hero-font.woff2"].forEach((file) => {
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.href = "/assets/" + file;
    if (file.endsWith(".js")) preload.as = "script";
    else if (file.endsWith(".woff2")) {
      preload.as = "font";
      preload.type = "font/woff2";
      preload.crossOrigin = "anonymous";
    } else preload.as = "image";
    document.head.appendChild(preload);
  });

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://wiscar.ru/" },
      { "@type": "ListItem", "position": 2, "name": "Модели", "item": "https://wiscar.ru/models" }
    ]
  };
  const bcs = document.createElement("script");
  bcs.type = "application/ld+json";
  bcs.textContent = JSON.stringify(breadcrumb);
  document.head.appendChild(bcs);

  const robots = document.createElement("meta");
  robots.name = "robots";
  robots.content = "max-image-preview:large";
  document.head.appendChild(robots);

  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = "https://wiscar.ru/";
  document.head.appendChild(canonical);

  const copyright = document.createElement("meta");
  copyright.name = "copyright";
  copyright.content = "© Wiscar 2022–2025. Все права защищены.";
  document.head.appendChild(copyright);

  document.addEventListener("DOMContentLoaded", function () {
    const qna = document.createElement("div");
    qna.innerHTML = `
      <details><summary>Поддерживает ли Wiscar 24 В?</summary>Да, модель Ward 8 работает с техникой на 24 В.</details>
      <details><summary>Как открыть будку с телефона?</summary>С помощью Wiscar и доверенного Android.</details>
    `;
    qna.style = "margin-top:30px;margin-bottom:40px;font-size:16px;";
    document.body.appendChild(qna);
  });

  console.log("%c🛑 Wiscar: Защита от копирования", "color:red;font-size:20px;");
  console.log("%cРаботает только с доверенными Android-устройствами", "color:gray;");

  window.addEventListener("scroll", () => {
    document.querySelectorAll("img.tn-atom__img").forEach(img => {
      img.style.transform = `translateY(${(Math.sin(Date.now() / 250) * 0.5).toFixed(2)}px)`;
    });
  });
})();
