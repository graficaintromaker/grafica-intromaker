(() => {
const trocas={
"cartao-bikima-agradecimento":"assets/cartao-bikima-agradecimento-novo.jpg",
"cartao-pedra-branca-agradecimento":"assets/cartao-pedra-branca-novo.jpg",
"cartao-zaya-cheguei":"assets/cartao-zaya-cheguei-novo.jpg",
"cartao-zaya-agradecimento":"assets/cartao-zaya-agradecimento-novo.jpg",
"cartao-patricinha-pet":"assets/cartao-patricinha-pet-novo.jpg",
"cartao-kairos-pet":"assets/cartao-kairos-pet-novo.jpg",
"cartao-good-marias-kraft":"assets/cartao-good-marias-kraft-novo.jpg",
"cartao-farmacia-esperanca-natal":"assets/cartao-farmacia-esperanca-natal-novo.jpg"};
const nomesAtualizados={
"cartao-zaya-cheguei":"Cartão de agradecimento para loja de roupas",
"cartao-farmacia-esperanca-natal":"Cartão de Natal com acabamento hot stamping dourado",
"cartao-pedra-branca-agradecimento":"Cartão de agradecimento e cuidados para acessórios"
};
Object.entries(trocas).forEach(([id,image])=>{const p=products.find(x=>x.id===id);if(p){p.image=image;p.imageFit="contain";if(nomesAtualizados[id])p.name=nomesAtualizados[id];}});
const ajustesIniciais={
"cartao-pricia-dourado":{
  name:"Cartão para joias e semijoias",
  desc:"Cartão personalizado para joias, semijoias e acessórios com acabamento dourado."
},
"cartao-aurea-joias-semijoias":{
  name:"Cartão para joias e semijoias em hot stamping",
  desc:"Cartão personalizado para joias e semijoias com aplicação de hot stamping."
},
"cartao-criando-experiencias-unicas":{
  name:"Cartão personalizado premium com verniz localizado",
  desc:"Cartão personalizado premium com aplicação de verniz localizado para valorizar a apresentação da marca."
}
};
Object.entries(ajustesIniciais).forEach(([id,ajustes])=>{
  const p=products.find(item=>item.id===id);
  if(p) Object.assign(p,ajustes);
});
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

const fotosNovas=[
  {
    "id": "cartao-fidelidade-agradecimento-vip",
    "name": "Cartão fidelidade com agradecimento",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão fidelidade apresentado em material de agradecimento para valorizar clientes e incentivar novas compras.",
    "image": "assets/cartao-fidelidade-agradecimento-vip.jpg",
    "imageFit": "contain"
  },
  {
    "id": "tag-brincos-corte-especial",
    "name": "Tag para brincos com corte especial",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Tag personalizada para brincos e pequenos acessórios com formato especial e acabamento sofisticado.",
    "image": "assets/tag-brincos-corte-especial.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-agradecimento-qr-metalizado",
    "name": "Cartão de agradecimento com QR Code e acabamento em verniz localizado",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão personalizado com QR Code e aplicação de verniz localizado para acompanhar pedidos e divulgar a marca.",
    "image": "assets/cartao-agradecimento-qr-metalizado.jpg",
    "imageFit": "contain"
  },
  {
    "id": "tag-roupa-verniz-localizado",
    "name": "Tag para roupa com acabamento fosco com verniz localizado",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Tag personalizada frente e verso para roupas com acabamento fosco e aplicação de verniz localizado.",
    "image": "assets/tag-semijoias-metalizada.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-garantia-semijoias-novo",
    "name": "Cartão de garantia fosco com verniz localizado",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão de garantia com acabamento fosco, verniz localizado, informações de conservação e QR Code.",
    "image": "assets/cartao-garantia-semijoias-novo.jpg",
    "imageFit": "contain"
  },
  {
    "id": "tag-roupas-troca",
    "name": "Tag para roupas com informações de troca",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Tag personalizada frente e verso para roupas, com tamanhos e orientações de troca.",
    "image": "assets/tag-roupas-troca.webp",
    "imageFit": "contain"
  },
  {
    "id": "cartao-agradecimento-acessorios-novo",
    "name": "Cartão de agradecimento para acessórios",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão de agradecimento personalizado para lojas de acessórios, pedidos e embalagens.",
    "image": "assets/cartao-agradecimento-acessorios-novo.jpg",
    "imageFit": "contain"
  },
  {
    "id": "kit-cartoes-adesivos-personalizados",
    "name": "Kit de cartões e adesivos personalizados",
    "category": "promocionais",
    "categoryLabel": "Promocionais",
    "desc": "Conjunto personalizado com cartões de agradecimento, QR Code e adesivos para embalagens.",
    "image": "assets/kit-cartoes-adesivos-personalizados.jpg",
    "imageFit": "contain"
  },
  {
    "id": "tag-semijoias-acabamento-especial",
    "name": "Tag para semijoias com acabamento especial",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Tag personalizada para semijoias com corte especial e acabamento metalizado.",
    "image": "assets/tag-semijoias-acabamento-especial.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-natal-dourado-novo",
    "name": "Cartão de Natal com acabamento hot stamping dourado",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão comemorativo de Natal com aplicação de hot stamping dourado e visual sofisticado.",
    "image": "assets/cartao-natal-dourado-novo.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-agradecimento-dourado-novo",
    "name": "Cartão de agradecimento com acabamento hot stamping dourado",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão de agradecimento frente e verso com corte especial e aplicação de hot stamping dourado.",
    "image": "assets/cartao-agradecimento-dourado-novo.jpg",
    "imageFit": "contain"
  },
  {
    "id": "tag-maternidade-corte-especial",
    "name": "Tag temática para maternidade",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Tag personalizada para produtos de maternidade com aplique e corte especial.",
    "image": "assets/tag-maternidade-corte-especial.jpg",
    "imageFit": "contain"
  },
  {
    "id": "caixinha-acessorios-personalizada",
    "name": "Caixinha personalizada para acessórios",
    "category": "promocionais",
    "categoryLabel": "Embalagens",
    "desc": "Caixinha personalizada com alça para acessórios, brindes e pequenos produtos.",
    "image": "assets/caixinha-acessorios-personalizada.jpg",
    "imageFit": "contain"
  },
  {
    "id": "caixinha-semijoias-personalizada",
    "name": "Caixinha personalizada para semijoias",
    "category": "promocionais",
    "categoryLabel": "Embalagens",
    "desc": "Caixinha personalizada para semijoias e pequenos acessórios com acabamento de marca.",
    "image": "assets/caixinha-semijoias-personalizada.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-garantia-cuidados-semijoias",
    "name": "Cartão de garantia e cuidados para semijoias",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão personalizado com certificado de garantia, orientações de uso e conservação.",
    "image": "assets/cartao-garantia-cuidados-semijoias.jpg",
    "imageFit": "contain"
  },
  {
    "id": "tag-natal-corte-especial",
    "name": "Tag de Natal com corte especial",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Tag temática de Natal com formato especial e acabamento metalizado.",
    "image": "assets/tag-natal-corte-especial.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cupom-promocional-desconto",
    "name": "Cupom promocional com desconto",
    "category": "promocionais",
    "categoryLabel": "Promocionais",
    "desc": "Cupom personalizado com corte especial para descontos, brindes e ações promocionais.",
    "image": "assets/cupom-promocional-desconto.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-agradecimento-delivery-qr",
    "name": "Panfleto de agradecimento para delivery com QR Code",
    "category": "divulgacao",
    "categoryLabel": "Divulgação",
    "desc": "Panfleto personalizado com agradecimento e QR Code para pedidos, delivery e contato da marca.",
    "image": "assets/cartao-agradecimento-delivery-qr.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-cuidados-roupas",
    "name": "Panfleto de cuidados para roupas",
    "category": "divulgacao",
    "categoryLabel": "Divulgação",
    "desc": "Panfleto informativo frente e verso com orientações de lavagem e conservação de roupas.",
    "image": "assets/cartao-cuidados-roupas.jpg",
    "imageFit": "contain"
  },
  {
    "id": "receituario-farmaceutico-personalizado",
    "name": "Receituário farmacêutico personalizado",
    "category": "divulgacao",
    "categoryLabel": "Papelaria",
    "desc": "Bloco de receituário profissional personalizado para consultórios e atendimentos farmacêuticos.",
    "image": "assets/receituario-farmaceutico-personalizado.jpg",
    "imageFit": "contain"
  },
  {
    "id": "folder-catalogo-produtos",
    "name": "Folder para catálogo de produtos",
    "category": "divulgacao",
    "categoryLabel": "Divulgação",
    "desc": "Folder personalizado para apresentar produtos, benefícios, informações e canais de contato.",
    "image": "assets/folder-catalogo-produtos.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-lancamento-acabamento-especial",
    "name": "Cartão fosco com verniz localizado",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão personalizado com acabamento fosco e aplicação de verniz localizado.",
    "image": "assets/cartao-lancamento-acabamento-especial.jpg",
    "imageFit": "contain"
  },
  {
    "id": "kit-papelaria-personalizada-loja",
    "name": "Kit de papelaria personalizada para laçeiras",
    "category": "promocionais",
    "categoryLabel": "Promocionais",
    "desc": "Kit coordenado com papel de seda, cartões, tags e cartelas personalizados para laçeiras.",
    "image": "assets/kit-papelaria-personalizada-loja.jpg",
    "imageFit": "contain"
  },
  {
    "id": "folder-dobravel-personalizado",
    "name": "Cartão dobrável personalizado",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão compacto dobrável com identidade visual e informações institucionais da marca.",
    "image": "assets/folder-dobravel-personalizado.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-dobravel-agradecimento-cuidados",
    "name": "Folder dobrável de agradecimento e cuidados",
    "category": "divulgacao",
    "categoryLabel": "Divulgação",
    "desc": "Folder dobrável com agradecimento, QR Code e orientações de conservação dos produtos.",
    "image": "assets/cartao-dobravel-agradecimento-cuidados.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-dobravel-garantia-semijoias",
    "name": "Cartão dobrável de garantia para semijoias",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão dobrável com garantia, limpeza, cuidados e informações para troca de semijoias.",
    "image": "assets/cartao-dobravel-garantia-semijoias.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-informativo-produtos-beleza",
    "name": "Cartão com corte especial",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão personalizado com corte especial para apresentar informações, pedidos e produtos da marca.",
    "image": "assets/cartao-informativo-produtos-beleza.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartela-brincos-metalizada",
    "name": "Tag conjunto para brincos e colar com acabamento fosco com verniz localizado",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Cartela para brincos com acabamento fosco e aplicação de verniz localizado.",
    "image": "assets/cartela-brincos-metalizada.jpg",
    "imageFit": "contain"
  },
  {
    "id": "sacola-personalizada-semijoias",
    "name": "Sacola personalizada para semijoias",
    "category": "promocionais",
    "categoryLabel": "Embalagens",
    "desc": "Sacola personalizada com alça para lojas de semijoias, acessórios e presentes.",
    "image": "assets/sacola-personalizada-semijoias.jpg",
    "imageFit": "contain"
  },
  {
    "id": "adesivo-sorria-encomenda",
    "name": "Adesivo para encomendas",
    "category": "adesivos",
    "categoryLabel": "Adesivos",
    "desc": "Adesivo personalizado para identificar pedidos, brindes e embalagens.",
    "image": "assets/adesivo-sorria-encomenda.jpg",
    "imageFit": "contain"
  },
  {
    "id": "tag-semijoias-corte-especial",
    "name": "Tag para semijoias com corte especial",
    "category": "tags",
    "categoryLabel": "Tags",
    "desc": "Tag personalizada para brincos e semijoias com recortes e formato diferenciado.",
    "image": "assets/tag-semijoias-corte-especial.jpg",
    "imageFit": "contain"
  },
  {
    "id": "kit-embalagem-cartao-agradecimento",
    "name": "Kit de embalagem e cartão de agradecimento",
    "category": "promocionais",
    "categoryLabel": "Embalagens",
    "desc": "Conjunto personalizado com embalagem e cartão de agradecimento para acompanhar pedidos.",
    "image": "assets/kit-embalagem-cartao-agradecimento.jpg",
    "imageFit": "contain"
  },
  {
    "id": "cartao-dobravel-garantia-acessorios",
    "name": "Cartão dobrável de garantia para acessórios",
    "category": "cartoes",
    "categoryLabel": "Cartões",
    "desc": "Cartão dobrável com garantia, recomendações de uso e campos para referência e data.",
    "image": "assets/cartao-dobravel-garantia-acessorios.jpg",
    "imageFit": "contain"
  }
];
fotosNovas.forEach(item=>{
  const existente=products.find(p=>p.id===item.id);
  if(existente) Object.assign(existente,item);
  else {
    products.push(item);
    state.quantities[item.id]=1;
  }
});

const novasTags=[
  {
    id:"tag-joias-corte-especial-preta",
    name:"Tag para joias com corte especial",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag personalizada para joias e semijoias, com espaço para brincos, colares e informações de conservação.",
    image:"assets/tag-joias-corte-especial-preta.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-semijoias-infantis-dupla",
    name:"Tag para semijoias infantis",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag personalizada frente e verso para brincos e semijoias infantis.",
    image:"assets/tag-semijoias-infantis-dupla.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-colorida-semijoias",
    name:"Tag brinco mimo para cliente",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag colorida personalizada para brincos, pequenos acessórios e semijoias.",
    image:"assets/tag-colorida-semijoias.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-semijoias-acabamento-dourado",
    name:"Tag para semijoias com acabamento dourado",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag personalizada para semijoias com impressão frente e verso e acabamento dourado.",
    image:"assets/tag-semijoias-acabamento-dourado.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-semijoias-acessorios-branca",
    name:"Tag para semijoias e acessórios",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag personalizada frente e verso para brincos, colares, acessórios e semijoias.",
    image:"assets/tag-semijoias-acessorios-branca.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-outubro-rosa-semijoias",
    name:"Tag Outubro Rosa para semijoias",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag temática personalizada para semijoias, acessórios e campanhas do Outubro Rosa.",
    image:"assets/tag-outubro-rosa-semijoias.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-coracao-roupas-lingerie",
    name:"Tag coração para roupas e lingerie",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag de roupa em formato de coração, com campos para tamanho, preço e informações da loja.",
    image:"assets/tag-coracao-roupas-lingerie.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-semijoias-metalizada-rosa",
    name:"Tag gravatinha para semijoias com acabamento metalizado",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag personalizada para semijoias com formato diferenciado e acabamento metalizado.",
    image:"assets/tag-semijoias-metalizada-rosa.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-horizontal-semijoias",
    name:"Tag argolinhas para semijoias",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag horizontal personalizada frente e verso para semijoias, com espaço para conservação e contatos.",
    image:"assets/tag-horizontal-semijoias.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-infantil-semijoias-arcoiris",
    name:"Tag infantil para semijoias",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag infantil personalizada para brincos e semijoias, com impressão frente e verso.",
    image:"assets/tag-infantil-semijoias-arcoiris.jpg",
    imageFit:"contain"
  },
  {
    id:"tag-semijoias-luana-corte-especial",
    name:"Tag para semijoias com corte especial",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tag personalizada para semijoias com corte especial, espaço para brincos, preço e contatos.",
    image:"assets/tag-semijoias-luana-corte-especial.jpg",
    imageFit:"contain"
  }
];
novasTags.forEach(item=>{
  const existente=products.find(p=>p.id===item.id);
  if(existente) Object.assign(existente,item);
  else {
    products.push(item);
    state.quantities[item.id]=1;
  }
});

// As fotos já cadastradas são mantidas uma única vez e exibidas sem corte.
["tag-infantil","tag-oval","tag-colorida","tag-lingerie-personalizada"].forEach(id=>{
  const p=products.find(item=>item.id===id);
  if(p) p.imageFit="contain";
});

// Remove somente o cadastro que repetia a mesma foto de acessórios.
const idsDuplicadosRemovidos=["cartao-pedra-branca-instrucoes"];
idsDuplicadosRemovidos.forEach(id=>{
  const i=products.findIndex(p=>p.id===id);
  if(i>=0) products.splice(i,1);
});

// Mantém juntos e no início os cartões enviados pela cliente.
const idsEnviados=[
...fotosNovas.map(item=>item.id),
...novasTags.map(item=>item.id),
...novos.map(([id])=>id),
"cartao-pedra-branca-agradecimento",
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
