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

  const applySiteFixes = () => {
    fixWhatsappLinks();
    fixSaturdayHours();
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