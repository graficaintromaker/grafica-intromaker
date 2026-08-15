(() => {
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