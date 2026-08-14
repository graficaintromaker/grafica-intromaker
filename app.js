(() => {
  const base=document.createElement("script");
  base.src="app-base.js?v=20260814-8";
  base.onload=()=>{
    const extras=document.createElement("script");
    extras.src="novos-cartoes.js?v=20260814-8";
    document.body.appendChild(extras);
  };
  document.body.appendChild(base);
})();
