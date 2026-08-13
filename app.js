(() => {
  const base=document.createElement("script");
  base.src="app-base.js";
  base.onload=()=>{
    const extras=document.createElement("script");
    extras.src="novos-cartoes.js";
    document.body.appendChild(extras);
  };
  document.body.appendChild(base);
})();