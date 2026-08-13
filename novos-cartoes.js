(() => {
const trocas={
"cartao-bikima-agradecimento":"assets/cartao-bikima-agradecimento.jpg",
"cartao-pedra-branca-agradecimento":"assets/cartao-pedra-branca-novo.jpg",
"cartao-pedra-branca-instrucoes":"assets/cartao-pedra-branca-novo.jpg",
"cartao-zaya-cheguei":"assets/cartao-zaya-cheguei-novo.jpg",
"cartao-zaya-agradecimento":"assets/cartao-zaya-agradecimento-novo.jpg",
"cartao-patricinha-pet":"assets/cartao-patricinha-pet-novo.jpg",
"cartao-kairos-pet":"assets/cartao-kairos-pet-novo.jpg",
"cartao-good-marias-kraft":"assets/cartao-good-marias-kraft-novo.jpg",
"cartao-farmacia-esperanca-natal":"assets/cartao-farmacia-esperanca-natal-novo.jpg"};
const nomesAtualizados={
"cartao-zaya-cheguei":"Cartão de agradecimento para loja de roupas"
};
Object.entries(trocas).forEach(([id,image])=>{const p=products.find(x=>x.id===id);if(p){p.image=image;p.imageFit="contain";if(nomesAtualizados[id])p.name=nomesAtualizados[id];}});
const novos=[
["cartao-thais-boutique","Cartão de agradecimento com cupom de desconto","Cartão personalizado de agradecimento com cupom para incentivar a próxima compra.","assets/cartao-thais-boutique.jpg"],
["cartao-com-afeto-lingerie","Cartão promocional para lingerie","Cartão personalizado com vales promocionais para ações de relacionamento e fidelização.","assets/cartao-com-afeto-lingerie.jpg"],
["cartao-obrigada-metalizado","Cartão de agradecimento com detalhe metalizado","Cartão minimalista personalizado com acabamento metalizado para valorizar a apresentação da marca.","assets/cartao-obrigada-metalizado.jpg"],
["cartao-emagrecentro-voucher","Voucher personalizado","Voucher personalizado frente e verso para brindes, serviços, campanhas e promoções.","assets/cartao-emagrecentro-voucher.jpg"],
["cartao-atelie-mais","Cartão de agradecimento para ateliê","Cartão personalizado frente e verso para acompanhar pedidos e reforçar a identidade da marca.","assets/cartao-atelie-mais.jpg"],
["cartao-ladusse-semijoias","Cartão de agradecimento para semijoias","Cartão personalizado para semijoias com identidade visual, agradecimento e informações de contato.","assets/cartao-ladusse-semijoias.jpg"],
["cartao-pijamas-fernandes","Cartão de agradecimento e cuidados","Cartão personalizado frente e verso com agradecimento e orientações de cuidados do produto.","assets/cartao-pijamas-fernandes.webp"],
["cartao-de-siena-store","Cartão de agradecimento premium","Cartão personalizado frente e verso com visual sofisticado para lojas e marcas.","assets/cartao-de-siena-store.jpg"],
["cartao-agropet-sao-lucas","Cartão de agradecimento para pet shop","Cartão personalizado para pet shop com agradecimento, identidade visual e incentivo à avaliação.","assets/cartao-agropet-sao-lucas.jpg"],
["cartao-fernanda-marcelino-semijoias","Cartão de agradecimento e garantia para semijoias","Cartão personalizado frente e verso com agradecimento, garantia e cuidados para semijoias.","assets/cartao-fernanda-marcelino-semijoias.jpg"],
["cartao-gleiciane-geroli","Cartão de agradecimento para marca","Cartão personalizado frente e verso para acompanhar pedidos e fortalecer a identidade visual.","assets/cartao-gleiciane-geroli.jpg"]
];
novos.forEach(([id,name,desc,image])=>{const existente=products.find(p=>p.id===id);if(existente){Object.assign(existente,{name,desc,image,imageFit:"contain"});}else{products.push({id,name,category:"cartoes",categoryLabel:"Cartões",desc,image,imageFit:"contain"});state.quantities[id]=1;}});

// Mantém juntos e no início os cartões enviados pela cliente.
const idsEnviados=[
...novos.map(([id])=>id),
"cartao-pedra-branca-agradecimento",
"cartao-pedra-branca-instrucoes",
"cartao-zaya-cheguei",
"cartao-zaya-agradecimento",
"cartao-patricinha-pet",
"cartao-kairos-pet",
"cartao-good-marias-kraft",
"cartao-farmacia-esperanca-natal"
];
const cartoesEnviados=idsEnviados.map(id=>products.find(p=>p.id===id)).filter(Boolean);
const demaisProdutos=products.filter(p=>!idsEnviados.includes(p.id));
products.splice(0,products.length,...demaisProdutos.slice(0,3),...cartoesEnviados,...demaisProdutos.slice(3));

renderProducts();
})();