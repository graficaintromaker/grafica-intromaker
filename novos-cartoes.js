(() => {
const trocas={
"cartao-pedra-branca-agradecimento":"assets/cartao-pedra-branca-novo.svg",
"cartao-pedra-branca-instrucoes":"assets/cartao-pedra-branca-novo.svg",
"cartao-zaya-cheguei":"assets/cartao-zaya-cheguei-novo.svg",
"cartao-zaya-agradecimento":"assets/cartao-zaya-agradecimento-novo.svg",
"cartao-patricinha-pet":"assets/cartao-patricinha-pet-novo.svg",
"cartao-kairos-pet":"assets/cartao-kairos-pet-novo.svg",
"cartao-good-marias-kraft":"assets/cartao-good-marias-kraft-novo.svg",
"cartao-farmacia-esperanca-natal":"assets/cartao-farmacia-esperanca-natal-novo.svg"};
Object.entries(trocas).forEach(([id,image])=>{const p=products.find(x=>x.id===id);if(p)p.image=image;});
const novos=[
["cartao-thais-boutique","Cartão de agradecimento com cupom de desconto","Cartão personalizado de agradecimento com cupom para incentivar a próxima compra.","assets/cartao-thais-boutique.svg"],
["cartao-com-afeto-lingerie","Cartão promocional para lingerie","Cartão personalizado com vales promocionais para ações de relacionamento e fidelização.","assets/cartao-com-afeto-lingerie.svg"],
["cartao-obrigada-metalizado","Cartão de agradecimento com detalhe metalizado","Cartão minimalista personalizado com acabamento metalizado para valorizar a apresentação da marca.","assets/cartao-obrigada-metalizado.svg"],
["cartao-emagrecentro-voucher","Voucher personalizado","Voucher personalizado frente e verso para brindes, serviços, campanhas e promoções.","assets/cartao-emagrecentro-voucher.svg"],
["cartao-atelie-mais","Cartão de agradecimento para ateliê","Cartão personalizado frente e verso para acompanhar pedidos e reforçar a identidade da marca.","assets/cartao-atelie-mais.svg"],
["cartao-ladusse-semijoias","Cartão de agradecimento para semijoias","Cartão personalizado para semijoias com identidade visual, agradecimento e informações de contato.","assets/cartao-ladusse-semijoias.svg"],
["cartao-pijamas-fernandes","Cartão de agradecimento e cuidados","Cartão personalizado frente e verso com agradecimento e orientações de cuidados do produto.","assets/cartao-pijamas-fernandes.svg"],
["cartao-de-siena-store","Cartão de agradecimento premium","Cartão personalizado frente e verso com visual sofisticado para lojas e marcas.","assets/cartao-de-siena-store.svg"],
["cartao-agropet-sao-lucas","Cartão de agradecimento para pet shop","Cartão personalizado para pet shop com agradecimento, identidade visual e incentivo à avaliação.","assets/cartao-agropet-sao-lucas.svg"],
["cartao-fernanda-marcelino-semijoias","Cartão de agradecimento e garantia para semijoias","Cartão personalizado frente e verso com agradecimento, garantia e cuidados para semijoias.","assets/cartao-fernanda-marcelino-semijoias.svg"],
["cartao-gleiciane-geroli","Cartão de agradecimento para marca","Cartão personalizado frente e verso para acompanhar pedidos e fortalecer a identidade visual.","assets/cartao-gleiciane-geroli.svg"]
];
novos.forEach(([id,name,desc,image])=>{if(!products.some(p=>p.id===id)){products.push({id,name,category:"cartoes",categoryLabel:"Cartões",desc,image});state.quantities[id]=1;}});
renderProducts();
})();