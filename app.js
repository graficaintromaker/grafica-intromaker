(() => {
  const OLD_WHATSAPP = "553173581976";
  const NEW_WHATSAPP = "5531973581976";

  const fixWhatsappLinks = () => {
    document.querySelectorAll(`a[href*="${OLD_WHATSAPP}"]`).forEach(link => {
      link.href = link.href.replaceAll(OLD_WHATSAPP, NEW_WHATSAPP);
    });
  };

  const fixSaturdayHours = () => {
    document.querySelectorAll(".info-card p").forEach(paragraph => {
      if (paragraph.innerHTML.includes("Sábado, das 9h30 às 12h30.")) {
        paragraph.innerHTML = paragraph.innerHTML.replace(
          "Sábado, das 9h30 às 12h30.",
          "Sábado, das 9h30 às 11h30."
        );
      }
    });
  };

  const ensureScratchCardCategory = () => {
    const filters = document.querySelector(".filters");
    if (!filters || filters.querySelector('[data-filter="raspadinhas"]')) return;

    const button = document.createElement("button");
    button.className = "filter";
    button.dataset.filter = "raspadinhas";
    button.type = "button";
    button.textContent = "Raspadinha personalizada";

    const promotionalButton = filters.querySelector('[data-filter="promocionais"]');
    if (promotionalButton) promotionalButton.insertAdjacentElement("beforebegin", button);
    else filters.appendChild(button);
  };

  const applySiteFixes = () => {
    fixWhatsappLinks();
    fixSaturdayHours();
    ensureScratchCardCategory();
  };

  applySiteFixes();

  const nativeOpen = window.open.bind(window);
  window.open = (url, ...args) => {
    const correctedUrl = typeof url === "string"
      ? url.replaceAll(OLD_WHATSAPP, NEW_WHATSAPP)
      : url;
    return nativeOpen(correctedUrl, ...args);
  };

  const observer = new MutationObserver(applySiteFixes);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["href"]
  });

  const base=document.createElement("script");
  base.src="app-base.js?v=20260814-15";
  base.onload=()=>{
    if (typeof products !== "undefined") {
      products.forEach(product => {
        const productText = `${product.name || ""} ${product.desc || ""}`.toLocaleLowerCase("pt-BR");
        if (productText.includes("raspadinha") || productText.includes("raspe e ganhe")) {
          product.category = "raspadinhas";
          product.categoryLabel = "Raspadinhas personalizadas";
        }
      });
      if (typeof renderProducts === "function") renderProducts();
    }

    const extras=document.createElement("script");
    extras.src="novos-cartoes.js?v=20260814-15";
    document.body.appendChild(extras);

    const videos=document.createElement("script");
    videos.src="videos.js?v=20260815-2";
    document.body.appendChild(videos);

    const seo=document.createElement("script");
    seo.src="seo.js?v=20260815-2";
    document.body.appendChild(seo);
  };
  document.body.appendChild(base);
})();