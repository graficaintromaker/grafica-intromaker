(() => {
  const base=document.createElement("script");
  base.src="app-base.js?v=7ce2883e";
  base.onload=()=>{
    const extras=document.createElement("script");
    extras.src="novos-cartoes.js?v=7ce2883e";
    document.body.appendChild(extras);
  };
  document.body.appendChild(base);
})();