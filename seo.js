(() => {
  const SITE = "https://graficaintromaker.com.br/";
  const WA = "https://wa.me/5531973581976?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  document.title = "Gráfica Intro Maker | Gráfica em Ipatinga/MG | Cartões, Tags e Adesivos";

  const ensureMeta = (name, content, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(property ? "property" : "name", name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  ensureMeta("description", "Gráfica Intromaker em Ipatinga/MG: cartões de agradecimento, cartões de visita, tags, adesivos, panfletos e impressos personalizados. Peça orçamento pelo WhatsApp.");
  ensureMeta("robots", "index,follow,max-image-preview:large");
  ensureMeta("og:type", "website", true);
  ensureMeta("og:title", "Gráfica Intromaker em Ipatinga/MG | Impressos Personalizados", true);
  ensureMeta("og:description", "Cartões, tags, adesivos, panfletos e materiais personalizados com atendimento pelo WhatsApp.", true);
  ensureMeta("og:url", SITE, true);
  ensureMeta("og:image", SITE + "assets/06-adesivos-metalizados.jpg", true);
  ensureMeta("og:locale", "pt_BR", true);
  ensureMeta("twitter:card", "summary_large_image");

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = SITE;

  if (!document.getElementById("intromaker-structured-data")) {
    const ld = document.createElement("script");
    ld.id = "intromaker-structured-data";
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gráfica Intromaker",
      "url": SITE,
      "logo": SITE + "assets/06-adesivos-metalizados.jpg",
      "email": "graficaintromaker@gmail.com",
      "telephone": "+5531973581976",
      "identifier": "CNPJ 38.283.331/0001-59",
      "areaServed": {"@type":"City","name":"Ipatinga","containedInPlace":{"@type":"State","name":"Minas Gerais"}},
      "sameAs": ["https://www.instagram.com/graficaintromakeripatinga/"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5531973581976",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      }
    });
    document.head.appendChild(ld);
  }

  const style = document.createElement("style");
  style.textContent = `
    .seo-local-section{background:#fff;padding:72px 0;border-top:1px solid #eee7e0}
    .seo-local-wrap{width:min(1180px,calc(100% - 32px));margin:auto;display:grid;grid-template-columns:.9fr 1.1fr;gap:44px;align-items:start}
    .seo-local-section h2{font-family:"Playfair Display",Georgia,serif;font-size:clamp(32px,4vw,48px);line-height:1.06;margin:8px 0 16px}
    .seo-local-section p{color:#666;line-height:1.7;margin:0}
    .seo-local-links{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .seo-local-links a{display:block;border:1px solid #e7e2dc;border-radius:16px;padding:18px;background:#faf8f5;font-weight:800;transition:.2s}
    .seo-local-links a span{display:block;color:#777;font-size:12px;font-weight:500;margin-top:5px;line-height:1.4}
    .seo-local-links a:hover{transform:translateY(-2px);border-color:#cbb7a6}
    .seo-local-cta{grid-column:1/-1;background:#171717!important;color:#fff!important;border-color:#171717!important}
    .seo-local-cta span{color:#cfcfcf!important}
    @media(max-width:760px){.seo-local-wrap{grid-template-columns:1fr}.seo-local-links{grid-template-columns:1fr}.seo-local-section{padding:56px 0}}
  `;
  document.head.appendChild(style);

  if (!document.getElementById("seo-local-section")) {
    const section = document.createElement("section");
    section.id = "seo-local-section";
    section.className = "seo-local-section";
    section.innerHTML = `
      <div class="seo-local-wrap">
        <div>
          <span class="eyebrow">GRÁFICA EM IPATINGA/MG</span>
          <h2>Impressos personalizados para valorizar sua marca.</h2>
          <p>A Gráfica Intromaker produz cartões, tags, adesivos, panfletos e materiais personalizados. Escolha o produto, veja exemplos reais e solicite seu orçamento pelo WhatsApp.</p>
        </div>
        <div class="seo-local-links">
          <a href="cartao-de-agradecimento.html">Cartão de agradecimento<span>Para pedidos, lojas, semijoias, moda e embalagens.</span></a>
          <a href="adesivos-personalizados.html">Adesivos personalizados<span>Redondos, transparentes, metalizados e para fechamento.</span></a>
          <a href="tags-personalizadas.html">Tags personalizadas<span>Para roupas, semijoias, presentes e produtos.</span></a>
          <a href="cartao-de-visita.html">Cartões de visita<span>Modelos profissionais com diferentes acabamentos.</span></a>
          <a href="panfletos-personalizados.html">Panfletos e flyers<span>Divulgação para promoções, eventos e serviços.</span></a>
          <a class="seo-local-cta" href="${WA}" target="_blank" rel="noopener">Pedir orçamento pelo WhatsApp<span>Envie sua ideia, referência ou arte e receba orientação.</span></a>
        </div>
      </div>`;

    const contact = document.getElementById("contato");
    const main = document.querySelector("main");
    if (contact) contact.insertAdjacentElement("beforebegin", section);
    else if (main) main.appendChild(section);
  }
})();