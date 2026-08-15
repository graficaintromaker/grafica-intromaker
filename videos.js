(() => {
  if (document.getElementById("videos-trabalhos")) return;

  const style = document.createElement("style");
  style.textContent = `
    .video-showcase-section { background: #f8f6f2; }
    .video-showcase-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
      align-items: start;
    }
    .video-showcase-card {
      margin: 0;
      background: #fff;
      border: 1px solid rgba(20,20,20,.08);
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,.06);
    }
    .video-showcase-card video {
      display: block;
      width: 100%;
      aspect-ratio: 16 / 10;
      background: #ece9e3;
      object-fit: cover;
    }
    .video-showcase-card.video-vertical video {
      aspect-ratio: 4 / 5;
      object-fit: cover;
    }
    .video-showcase-copy {
      padding: 16px 18px 18px;
    }
    .video-showcase-copy strong {
      display: block;
      font-size: 1rem;
      margin-bottom: 5px;
    }
    .video-showcase-copy span {
      display: block;
      color: #666;
      font-size: .92rem;
      line-height: 1.45;
    }
    @media (max-width: 760px) {
      .video-showcase-grid { grid-template-columns: 1fr; gap: 18px; }
      .video-showcase-card video,
      .video-showcase-card.video-vertical video { aspect-ratio: 4 / 5; }
    }
  `;
  document.head.appendChild(style);

  const section = document.createElement("section");
  section.className = "section video-showcase-section";
  section.id = "videos-trabalhos";
  section.innerHTML = `
    <div class="container">
      <div class="section-heading">
        <div>
          <span class="eyebrow">VÍDEOS REAIS</span>
          <h2>Veja nossos materiais de perto</h2>
        </div>
        <p>Detalhes de acabamento e trabalhos produzidos pela Gráfica Intromaker.</p>
      </div>

      <div class="video-showcase-grid">
        <article class="video-showcase-card">
          <video controls playsinline preload="metadata" poster="assets/06-adesivos-metalizados.jpg" aria-label="Vídeo de materiais produzidos pela Gráfica Intromaker">
            <source src="video-materiais-intromaker(1).mp4" type="video/mp4" />
            Seu navegador não suporta vídeo em MP4.
          </video>
          <div class="video-showcase-copy">
            <strong>Materiais produzidos</strong>
            <span>Alguns detalhes e acabamentos dos nossos impressos.</span>
          </div>
        </article>

        <article class="video-showcase-card video-vertical">
          <video controls playsinline preload="metadata" poster="20220928_122913.jpg" aria-label="Vídeo de cartão de agradecimento produzido pela Gráfica Intromaker">
            <source src="video_intromaker_compativel(1).mp4" type="video/mp4" />
            Seu navegador não suporta vídeo em MP4.
          </video>
          <div class="video-showcase-copy">
            <strong>Cartão de agradecimento</strong>
            <span>Visual real do material e do formato especial.</span>
          </div>
        </article>
      </div>
    </div>
  `;

  const portfolio = document.getElementById("portfolio");
  if (portfolio) {
    portfolio.insertAdjacentElement("afterend", section);
  } else {
    const main = document.querySelector("main");
    if (main) main.appendChild(section);
  }
})();