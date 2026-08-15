const WHATSAPP = "553173581976";

const products = [
  {
    id:"cartao-visita",
    name:"Cartões de visita",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartões profissionais com opções de laminação, verniz localizado, cantos especiais e outros acabamentos.",
    image:"assets/03-cartoes-rosa.jpg"
  },
  {
    id:"cartao-agradecimento",
    name:"Cartões de agradecimento",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Para acompanhar pedidos, apresentar cuidados, garantias e fortalecer a experiência da sua marca.",
    image:"20220928_122913.jpg"
  },
  {
    id:"cartao-qr",
    name:"Cartões com QR Code",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartões com QR Code para Instagram, catálogo, avaliação, pagamento, cardápio ou página de destino.",
    image:"assets/01-cartoes-qr-code.jpg"
  },
 {
    id:"cartao-pricia-dourado",
    name:"Cartão com acabamento dourado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartões personalizados com acabamento especial dourado para valorizar sua marca.",
    image:"assets/cartao-pricia-dourado.jpg"
  },
  {
    id:"cartao-aurea-joias-semijoias",
    name:"Cartão para joias e semijoias",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartões personalizados para joias, semijoias, acessórios e marcas.",
    image:"assets/cartao-aurea-joias-semijoias.jpg"
  },
  {
    id:"cartao-criando-experiencias-unicas",
    name:"Cartão personalizado premium",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para marcas, embalagens e experiências de compra.",
    image:"assets/cartao-criando-experiencias-unicas.jpg"
  },
  {
    id:"cartao-arte-em-pelicula",
    name:"Cartão de agradecimento personalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado de agradecimento para acompanhar pedidos e embalagens.",
    image:"assets/cartao-arte-em-pelicula.jpg"
  },
  {
    id:"cartao-bikima-agradecimento",
    name:"Cartão de agradecimento para loja",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de agradecimento personalizado para fortalecer a experiência da marca.",
    image:"assets/cartao-bikima-agradecimento.jpg"
  },
  {
    id:"cartao-vizzo-agradecimento",
    name:"Cartão de agradecimento com acabamento especial",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para pedidos com acabamento diferenciado.",
    image:"assets/cartao-vizzo-agradecimento.jpg"
  },
  {
    id:"cartao-gamma-garantia-smartwatch",
    name:"Cartão de garantia e cuidados",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com informações de garantia, cuidados e orientações ao cliente.",
    image:"assets/cartao-gamma-garantia-smartwatch.jpg"
  },
  {
    id:"cartao-bruges-semijoias",
    name:"Cartão de cuidados para semijoias",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado de agradecimento e cuidados para semijoias.",
    image:"assets/cartao-bruges-semijoias.jpg"
  },
  {
    id:"cartao-gota-de-orvalho-natal",
    name:"Cartão de Natal personalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para ações sazonais, brindes e mensagens de Natal.",
    image:"assets/cartao-gota-de-orvalho-natal.jpg"
  },
  {
    id:"cartao-natal-laluque",
    name:"Cartão comemorativo de Natal",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com mensagem de Natal para clientes e parceiros.",
    image:"assets/cartao-natal-laluque.jpg"
  },
  {
    id:"cartao-casa-dolphi-agradecimento",
    name:"Cartão de agradecimento com QR Code",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado de agradecimento com QR Code e informações da marca.",
    image:"assets/cartao-casa-dolphi-agradecimento.jpg"
  },
  {
    id:"cartao-petit-poa-agradecimento",
    name:"Cartão para acompanhar pedidos",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para acompanhar encomendas, pedidos e embalagens.",
    image:"assets/cartao-petit-poa-agradecimento.jpg"
  },
  {
    id:"cartao-bk-emporium",
    name:"Cartão frente e verso para loja",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado frente e verso para marcas, lojas e agradecimentos.",
    image:"assets/cartao-bk-emporium.jpg"
  },
  {
    id:"cartao-baldwin-velas",
    name:"Cartão de agradecimento para loja de roupas",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de agradecimento personalizado para lojas de roupas, pedidos e embalagens.",
    image:"assets/cartao-baldwin-velas.jpg"
  },
  {
    id:"cartao-studio-oral-boas-vindas",
    name:"Cartão de boas-vindas",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado de boas-vindas e orientações para clientes.",
    image:"assets/cartao-studio-oral-boas-vindas.jpg"
  },
  {
    id:"cartao-melissa-nesti",
    name:"Cartão minimalista personalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com identidade visual minimalista para marcas e produtos.",
    image:"assets/cartao-melissa-nesti.jpg"
  },
  {
    id:"cartao-925-prataria",
    name:"Cartão de agradecimento",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de agradecimento personalizado para acompanhar pedidos de joias e semijoias.",
    image:"assets/cartao-925-prataria.jpg"
  },
  {
    id:"cartao-josi-lima",
    name:"Cartão de agradecimento e cuidados",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com agradecimento e orientações de cuidados para acompanhar pedidos.",
    image:"assets/cartao-josi-lima.jpg"
  },
  {
    id:"cartao-boi-da-cara-preta",
    name:"Cartão motivacional",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão motivacional personalizado para acompanhar pedidos e valorizar a experiência do cliente.",
    image:"assets/cartao-boi-da-cara-preta.jpg"
  },
  {
    id:"cartao-personalizado-20220505",
    name:"Cartão personalizado para marca",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para agradecimento, cuidados, divulgação e relacionamento com clientes.",
    image:"assets/cartao-personalizado-20220505.jpg"
  },
  {
    id:"cartao-zaya-cheguei",
    name:"Cartão de agradecimento Zaya",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para acompanhar pedidos e reforçar a identidade da marca.",
    image:"assets/cartao-zaya-cheguei.jpg"
  },
  {
    id:"cartao-madu-modas",
    name:"Cartão de agradecimento para moda",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para lojas de moda, pedidos e embalagens.",
    image:"assets/cartao-madu-modas.jpg"
  },
  {
    id:"cartao-zaya-agradecimento",
    name:"Cartão de agradecimento com desconto",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com agradecimento, redes sociais e incentivo à recompra.",
    image:"assets/cartao-zaya-agradecimento.jpg"
  },
  {
    id:"cartao-flores-semijoias",
    name:"Cartão para semijoias",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com agradecimento e cuidados para semijoias.",
    image:"assets/cartao-flores-semijoias.jpg"
  },
  {
    id:"cartao-odonto-ig",
    name:"Cartão institucional personalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão institucional para apresentação, boas-vindas e relacionamento com clientes.",
    image:"assets/cartao-odonto-ig.jpg"
  },
  {
    id:"cartao-stylish-first-boutique",
    name:"Cartão promocional para boutique",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para ações promocionais, agradecimento e relacionamento com clientes.",
    image:"assets/cartao-stylish-first-boutique.jpg"
  },
  {
    id:"cartao-patricinha-pet",
    name:"Cartão de agradecimento para pet shop",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para pet shops, serviços e acompanhamento de pedidos.",
    image:"assets/cartao-patricinha-pet.jpg"
  },
  {
    id:"cartao-pedra-branca-agradecimento",
    name:"Cartão de agradecimento para acessórios",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado de agradecimento para lojas de acessórios.",
    image:"assets/cartao-pedra-branca-agradecimento.jpg"
  },
  {
    id:"cartao-pedra-branca-instrucoes",
    name:"Cartão de cuidados para acessórios",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com instruções de conservação e cuidados.",
    image:"assets/cartao-pedra-branca-instrucoes.jpg"
  },
  {
    id:"cartao-bikina-agradecimento",
    name:"Cartão de agradecimento para moda praia",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para moda praia, pedidos e relacionamento com clientes.",
    image:"assets/cartao-bikina-agradecimento.jpg"
  },
  {
    id:"cartao-kairos-pet",
    name:"Cartão de agradecimento para pet",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para pet shop, acessórios e agradecimento.",
    image:"assets/cartao-kairos-pet.jpg"
  },
  {
    id:"cartao-good-marias-kraft",
    name:"Cartão kraft personalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado em estilo kraft para agradecimento e identidade da marca.",
    image:"assets/cartao-good-marias-kraft.jpg"
  },
  {
    id:"cartao-cherie-papillon",
    name:"Cartão de cuidados para lingerie",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com agradecimento, cuidados e QR Code.",
    image:"assets/cartao-cherie-papillon.jpg"
  },
  {
    id:"cartao-farmacia-esperanca-natal",
    name:"Cartão de Natal com acabamento dourado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão comemorativo personalizado com acabamento dourado para clientes e parceiros.",
    image:"assets/cartao-farmacia-esperanca-natal.jpg"
  },
  {
    id:"cartao-kefi-glasses",
    name:"Cartão de agradecimento para loja",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado frente e verso para agradecimento e acompanhamento de pedidos.",
    image:"assets/cartao-kefi-glasses.jpg"
  },
  {
    id:"cartao-massariol-cosmeticos",
    name:"Material promocional com cartão e adesivo",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para divulgação de produtos acompanhado de adesivos.",
    image:"assets/cartao-massariol-cosmeticos.jpg"
  },
  {
    id:"cartao-blink-moda-praia",
    name:"Cartão de cuidados para moda praia",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com orientações de lavagem e conservação para moda praia.",
    image:"assets/cartao-blink-moda-praia.jpg"
  },
  {
    id:"cartao-unita-agradecimento",
    name:"Cartão de agradecimento feminino",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para acompanhar pedidos e fortalecer a experiência da marca.",
    image:"assets/cartao-unita-agradecimento.jpg"
  },
  {
    id:"cartao-dani-coelho-semijoias",
    name:"Cartão de agradecimento para semijoias",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com agradecimento, garantia e cuidados para semijoias.",
    image:"assets/cartao-dani-coelho-semijoias.jpg"
  },
  {
    id:"cartao-biquinis-da-na",
    name:"Cartão de cuidados para biquínis",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado com orientações de uso, lavagem e conservação para moda praia.",
    image:"assets/cartao-biquinis-da-na.jpg"
  },
  {
    id:"cartao-modelo-01",
    name:"Raspadinha promocional personalizada",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão raspadinha personalizado para promoções, descontos, brindes e ações especiais.",
    image:"assets/cartao-01.jpg"
  },
  {
    id:"cartao-modelo-02",
    name:"Raspadinha de desconto personalizada",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Raspadinha personalizada para oferecer descontos e incentivar novas compras.",
    image:"assets/cartao-02.jpg"
  },
  {
    id:"cartao-modelo-03",
    name:"Cartão de visita com cantos arredondados",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com formato compacto e cantos arredondados.",
    image:"assets/cartao-03.jpg"
  },
  {
    id:"cartao-modelo-04",
    name:"Certificado de garantia personalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para informações de garantia, conservação e atendimento ao cliente.",
    image:"assets/cartao-04.jpg"
  },
  {
    id:"cartao-modelo-05",
    name:"Raspadinha promocional colorida",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão raspadinha colorido para campanhas, brindes e promoções da sua marca.",
    image:"assets/cartao-05.jpg"
  },
  {
    id:"cartao-modelo-06",
    name:"Raspadinha de presente personalizada",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão raspadinha personalizado para presentear clientes com prêmios e descontos.",
    image:"assets/cartao-06.jpg"
  },
  {
    id:"cartao-modelo-07",
    name:"Cartão de visita elegante",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com visual delicado e apresentação profissional.",
    image:"assets/cartao-07.jpg"
  },
  {
    id:"cartao-modelo-08",
    name:"Cartão fidelidade rosa",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão fidelidade personalizado para recompensar clientes e estimular novas compras.",
    image:"assets/cartao-08.jpg"
  },
  {
    id:"cartao-modelo-09",
    name:"Raspadinha personalizada",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Raspadinha promocional personalizada para campanhas, brindes e ações com clientes.",
    image:"assets/cartao-09.jpg"
  },
  {
    id:"cartao-modelo-10",
    name:"Cartão com cupom de desconto",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão promocional personalizado com cupom para atrair e fidelizar clientes.",
    image:"assets/cartao-10.jpg"
  },
  {
    id:"cartao-modelo-11",
    name:"Cartão de visita",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado para apresentar marca, contatos e redes sociais.",
    image:"assets/cartao-11.jpg"
  },
  {
    id:"cartao-modelo-12",
    name:"Cartão de visita para confeitaria",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado para confeitaria, doces e atendimento sob encomenda.",
    image:"assets/cartao-12.jpg"
  },
  {
    id:"cartao-modelo-13",
    name:"Cartão de visita para semijoias",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado para marcas de semijoias e acessórios.",
    image:"assets/cartao-13.jpg"
  },
  {
    id:"cartao-modelo-14",
    name:"Cartão de visita para advocacia",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita profissional para escritórios, advocacia e serviços jurídicos.",
    image:"assets/cartao-14.jpg"
  },
  {
    id:"cartao-modelo-15",
    name:"Raspadinha promocional feminina",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão raspadinha personalizado para lojas, campanhas e ações promocionais.",
    image:"assets/cartao-15.jpg"
  },
  {
    id:"cartao-modelo-16",
    name:"Cartão profissional minimalista",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com visual limpo e informações profissionais.",
    image:"assets/cartao-16.jpg"
  },
  {
    id:"cartao-modelo-17",
    name:"Cartão de visita preto com dourado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com combinação preta e dourada para um visual sofisticado.",
    image:"assets/cartao-17.jpg"
  },
  {
    id:"cartao-modelo-18",
    name:"Raspadinha personalizada",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Raspadinha promocional personalizada para campanhas e ações com clientes.",
    image:"assets/cartao-18.jpg"
  },
  {
    id:"cartao-modelo-19",
    name:"Cartão kraft personalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão em estilo kraft para marcas artesanais, lojas, presentes e embalagens.",
    image:"assets/cartao-19.jpg"
  },
  {
    id:"cartao-modelo-20",
    name:"Cartão fidelidade",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão fidelidade personalizado para estimular novas compras e recorrência.",
    image:"assets/cartao-20.jpg"
  },
  {
    id:"cartao-modelo-21",
    name:"Raspadinha personalizada",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Raspadinha promocional personalizada para campanhas, brindes e descontos.",
    image:"assets/cartao-21.jpg"
  },
  {
    id:"cartao-modelo-22",
    name:"Cartão de visita com acabamento metalizado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com detalhes metalizados e acabamento sofisticado.",
    image:"assets/cartao-22.jpg"
  },
  {
    id:"cartao-modelo-23",
    name:"Cartão de garantia",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de garantia personalizado com informações de cuidados e atendimento.",
    image:"assets/cartao-23.jpg"
  },
  {
    id:"cartao-modelo-24",
    name:"Cartão de visita para academia",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado para academia, treinamento e serviços fitness.",
    image:"assets/cartao-24.jpg"
  },
  {
    id:"cartao-modelo-25",
    name:"Cartão de visita com moldura dourada",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com detalhes dourados e apresentação elegante.",
    image:"assets/cartao-25.jpg"
  },
  {
    id:"cartao-modelo-26",
    name:"Cartão de visita rosa minimalista",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado em tons suaves com estilo moderno e delicado.",
    image:"assets/cartao-26.jpg"
  },
  {
    id:"cartao-modelo-27",
    name:"Cartão de visita profissional clean",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com visual clean para profissionais e empresas.",
    image:"assets/cartao-27.jpg"
  },
  {
    id:"cartao-modelo-28",
    name:"Cartão de visita institucional",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão personalizado para empresas, serviços profissionais e apresentação institucional.",
    image:"assets/cartao-28.jpg"
  },
  {
    id:"cartao-modelo-30",
    name:"Cartão de visita branco e dourado",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Cartão de visita personalizado com visual branco e dourado para uma apresentação elegante.",
    image:"assets/cartao-30.jpg"
  },
  {
    id:"tag-moda",
    name:"Tags para roupas",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tags para lojas e confecções com furo, informações de tamanho, troca, preço e identidade visual.",
    image:"assets/02-tags-moda.jpg"
  },
  {
    id:"tag-semijoias",
    name:"Tags par de brincos para semijoias",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Modelos para brincos, colares, pulseiras e pequenos acessórios, com formatos e acabamentos personalizados.",
    image:"assets/05-tags-semijoias.jpg"
  },
  {
    id:"tag-premium",
    name:"Tags com acabamento especial",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Modelos diferenciados para marcas que buscam uma apresentação mais sofisticada.",
    image:"assets/04-tags-premium.jpg"
  },
  {
    id:"adesivos",
    name:"Adesivos personalizados",
    category:"adesivos",
    categoryLabel:"Adesivos",
    desc:"Adesivos em diferentes formatos, tamanhos e materiais para embalagens, produtos, eventos e marcas.",
    image:"assets/06-adesivos-metalizados.jpg"
  },
  {
  id:"adesivo-black-gota-faixa",
  name:"Adesivo personalizado para embalagens",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado para identificação e acabamento de embalagens e produtos.",
  image:"assets/adesivo-black-gota-faixa.jpg"
},
{
  id:"adesivo-black-gota-redondo",
  name:"Adesivo redondo personalizado",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado para marcas, embalagens e produtos.",
  image:"assets/adesivo-black-gota-redondo.jpg"
},
{
  id:"adesivo-branco-retangular",
  name:"Adesivo branco retangular",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado em formato retangular para marcas e embalagens.",
  image:"assets/adesivo-branco-retangular.jpg"
},
{
  id:"adesivo-brinquedos-fechamento-02",
  name:"Adesivo de fechamento personalizado",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado para fechamento de embalagens, sacolas e caixas.",
  image:"assets/adesivo-brinquedos-fechamento-02.jpg"
},

{
  id:"adesivo-com-amor",
  name:"Adesivo Com Amor",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado para embalagens, presentes e encomendas.",
  image:"assets/adesivo-com-amor.jpg"
},
{
  id:"adesivo-dourado-aromatizador",
  name:"Adesivo dourado para aromatizador",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo metalizado dourado personalizado para aromatizadores e produtos.",
  image:"assets/adesivo-dourado-aromatizador.jpg"
},
{
  id:"adesivo-dourado-folha",
  name:"Adesivo dourado metalizado",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo dourado metalizado personalizado para embalagens e produtos.",
  image:"assets/adesivo-dourado-folha.jpg"
},
{
  id:"adesivo-dourado-retangular",
  name:"Adesivo dourado retangular",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo metalizado dourado em formato retangular com personalização.",
  image:"assets/adesivo-dourado-retangular.jpg"
},
{
  id:"adesivo-dreams-recorte-especial",
  name:"Adesivo com recorte especial",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado com formato especial e acabamento diferenciado.",
  image:"assets/adesivo-dreams-recorte-especial.jpg"
},
{
  id:"adesivo-dreams-transparente-dourado",
  name:"Adesivo transparente com dourado",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo transparente personalizado com detalhe dourado.",
  image:"assets/adesivo-dreams-transparente-dourado.jpg"
},
{
  id:"adesivo-encomenda-chegou",
  name:"Adesivo Sua Encomenda Chegou",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado para lojas, encomendas e embalagens.",
  image:"assets/adesivo-encomenda-chegou.jpg"
},
{
  id:"adesivo-feito-a-mao-com-amor",
  name:"Adesivo Feito à Mão com Amor",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado para produtos artesanais, presentes e embalagens.",
  image:"assets/adesivo-feito-a-mao-com-amor.jpg"
},
{
  id:"adesivo-katia-feitosa",
  name:"Adesivo personalizado para marca",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado para identidade visual e embalagens.",
  image:"assets/adesivo-katia-feitosa.jpg"
},
{
  id:"adesivo-la-linda-redondo",
  name:"Adesivo redondo para marca",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado para lojas, roupas e embalagens.",
  image:"assets/adesivo-la-linda-redondo.jpg"
},
{
  id:"adesivo-laranja-redondo",
  name:"Adesivo redondo colorido",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado com impressão colorida.",
  image:"assets/adesivo-laranja-redondo.jpg"
},
{
  id:"adesivo-lingerie-coral",
  name:"Adesivo personalizado para lingerie",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado para lojas de lingerie, moda e embalagens.",
  image:"assets/adesivo-lingerie-coral.jpg"
},
{
  id:"adesivo-mimo-pra-voce",
  name:"Adesivo Um Mimo pra Você",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado para presentes, encomendas e embalagens.",
  image:"assets/adesivo-mimo-pra-voce.jpg"
},
{
  id:"adesivo-prisma-seguros",
  name:"Adesivo corporativo personalizado",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado para empresas e identidade visual.",
  image:"assets/adesivo-prisma-seguros.jpg"
},
{
  id:"adesivo-rosa-embalagem",
  name:"Adesivo rosa para embalagem",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado para embalagens, caixas e produtos.",
  image:"assets/adesivo-rosa-embalagem.jpg"
},
{
  id:"adesivo-desculpa-encomenda",
  name:"Adesivo para encomendas",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo personalizado para complementar embalagens e pedidos.",
  image:"assets/adesivo-encomenda-chegou.jpg"
},
{
  id:"adesivo-obrigado-rosa",
  name:"Adesivo de agradecimento",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo rosa personalizado para agradecimento em pedidos e encomendas.",
  image:"assets/adesivo-rosa-embalagem.jpg"
},
{
  id:"adesivo-transparente-fechamento",
  name:"Adesivo transparente de fechamento",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo transparente personalizado para fechamento de embalagens.",
  image:"assets/adesivo-transparente-fechamento.jpg"
},
{
  id:"adesivo-transparente-hidratante",
  name:"Adesivo transparente para cosméticos",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo transparente personalizado para cosméticos, potes e embalagens.",
  image:"assets/adesivo-transparente-hidratante.jpg"
},
{
  id:"adesivo-transparente-regiana-matos",
  name:"Adesivo transparente personalizado",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo transparente para identificação de produtos, embalagens e marcas.",
 image:"assets/adesivo-transparente-regiane-matos.jpg"
},
{
  id:"adesivo-vermelho-redondo-02",
  name:"Adesivo redondo personalizado vermelho",
  category:"adesivos",
  categoryLabel:"Adesivos",
  desc:"Adesivo redondo personalizado para marcas, produtos e embalagens.",
  image:"assets/adesivo-vermelho-redondo-02.jpg"
},

  {
    id:"panfletos",
    name:"Panfletos e flyers",
    category:"divulgacao",
    categoryLabel:"Divulgação",
    desc:"Materiais para promoções, delivery, eventos, serviços, lançamentos e campanhas comerciais.",
    image:"20250912_122212 - Copia.jpg"
  },
 
  {
    id:"fidelidade",
    name:"Cartões fidelidade",
    category:"promocionais",
    categoryLabel:"Promocionais",
    desc:"Crie recorrência com cartões de fidelidade personalizados para sua loja, salão ou serviço.",
    image:"assets/07-cartao-fidelidade.jpg"
  },
  
    {
  id:"raspadinhas",
  name:"Raspadinhas promocionais",
  category:"promocionais",
  categoryLabel:"Promocionais",
  desc:"Campanhas de raspe e ganhe para lojas, eventos e ações promocionais com a identidade da sua marca.",
  image:"assets/08-raspadinha.jpg"
},
  
  {
    id:"acabamento-metalizado",
    name:"Acabamentos metalizados",
    category:"promocionais",
    categoryLabel:"Acabamentos",
    desc:"Aplicações metalizadas que valorizam cartões, tags, adesivos e materiais comemorativos.",
    image:"assets/06-adesivos-metalizados.jpg"
  },
{
  id:"tag-kraft-personalizada",
  name:"Tag Kraft personalizada",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags em papel kraft para roupas, presentes, cosméticos e produtos artesanais, com impressão personalizada e opção de furo.",
image:"20260717-121649.jpg"
},

{
  id:"tag-lingerie-personalizada",
  name:"Tags para lingerie",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags personalizadas para lingerie com informações de tamanho, modelo, valor, troca e identidade da sua marca.",
image:"20231002-141347.jpg"
},

{
  id:"tag-beachwear",
  name:"Tags para moda praia",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags personalizadas para biquínis, moda praia e beachwear, com impressão frente e verso e acabamento profissional.",
 image:"20231005-154740.jpg"
},

{
  id:"tag-redonda",
  name:"Tags redondas personalizadas",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags redondas personalizadas para roupas, presentes, embalagens e produtos, disponíveis em diferentes cores e acabamentos.",
image:"20220302-153935.jpg"
},

{
  id:"tag-infantil",
  name:"Tags para moda infantil",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags coloridas para lojas infantis, com espaço para preço, informações de troca e dados da marca.",
image:"20220405-160502.jpg"
},

{
  id:"tag-oval",
  name:"Tag redonda para roupas",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tag redonda personalizada para roupas, com impressão frente e verso, informações de troca e opção de furo.",
 image:"20220524-111734.jpg"
},

{
  id:"tag-moda-feminina",
  name:"Tags para moda feminina",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags personalizadas para lojas de moda feminina, com campos para tamanho, valor, redes sociais e informações de troca.",
 image:"20220524-112729.jpg"
},

{
  id:"tag-premium-roupas",
  name:"Tags premium para roupas",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags sofisticadas para marcas de moda, com design diferenciado, impressão frente e verso e diversos acabamentos.",
 image:"20220615-131434.jpg"
},

{
  id:"tag-colorida",
  name:"Tags coloridas personalizadas",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags personalizadas em cores vibrantes para roupas, lojas e confecções, com impressão profissional frente e verso.",
 image:"20220811-140712.jpg"
},

{
  id:"tag-corte-especial",
  name:"Tags com corte especial",
  category:"tags",
  categoryLabel:"Tags",
  desc:"Tags personalizadas com formatos e cortes especiais para valorizar a apresentação e a identidade da sua marca.",
  image:"20220909-155740.jpg"
}
  ];

const state = {
  filter: "todos",
  search: "",
  visibleCount: 12,
  pageSize: 12,
  selectedProductId: null,
  quantities: Object.fromEntries(products.map(p => [p.id, 1])),
  cart: []
};

const grid = document.getElementById("productGrid");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const productSearch = document.getElementById("productSearch");
const clearProductSearch = document.getElementById("clearProductSearch");
const productCount = document.getElementById("productCount");
const showMoreProducts = document.getElementById("showMoreProducts");
const catalogMore = showMoreProducts.closest(".catalog-more");
const productDetailsModal = document.getElementById("productDetailsModal");
const productDetailsImage = document.getElementById("productDetailsImage");
const productDetailsCategory = document.getElementById("productDetailsCategory");
const productDetailsTitle = document.getElementById("productDetailsTitle");
const productDetailsDescription = document.getElementById("productDetailsDescription");
const productDetailsQty = document.getElementById("productDetailsQty");

function normalizeText(value){
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function matchesProductCategory(product, filter){
  if(filter === "todos") return true;

  const text = normalizeText(`${product.id} ${product.name} ${product.desc} ${product.categoryLabel}`);
  const titleText = normalizeText(`${product.id} ${product.name}`);

  if(filter === "agradecimento"){
    return product.category === "cartoes" && /agradecimento|obrigad[ao]/.test(titleText);
  }

  if(filter === "garantia"){
    return product.category !== "adesivos" && /garantia|certificado/.test(titleText);
  }

  if(filter === "tags-semijoias"){
    return product.category === "tags" && /semijoia|joia|brinco/.test(titleText);
  }

  if(filter === "tags-roupas"){
    return product.category === "tags" && /roupa|moda|lingerie|biquini|praia|infantil/.test(text);
  }

  return product.category === filter;
}

function getFilteredProducts(){
  const term = normalizeText(state.search);
  return products.filter(product => {
    const matchesCategory = matchesProductCategory(product, state.filter);
    const searchableText = normalizeText(`${product.name} ${product.desc} ${product.categoryLabel}`);
    return matchesCategory && (!term || searchableText.includes(term));
  });
}

function renderProducts(){
  const filteredProducts = getFilteredProducts();
  const list = filteredProducts.slice(0, state.visibleCount);

  productCount.textContent = filteredProducts.length === 1
    ? "1 produto encontrado"
    : `${filteredProducts.length} produtos encontrados`;
  clearProductSearch.hidden = !state.search;
  catalogMore.hidden = filteredProducts.length <= state.visibleCount;

  if(!filteredProducts.length){
    grid.innerHTML = `
      <div class="catalog-empty">
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outro nome ou veja novamente todas as categorias.</p>
        <button type="button" onclick="resetProductCatalog()">Ver todos os produtos</button>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <button class="product-visual${p.imageFit === "contain" ? " product-visual-contain" : ""}"${p.imageFit === "contain" ? ` style="--product-image:url(\'${p.image}\')"` : ""} type="button" onclick="openProductDetails('${p.id}')" aria-label="Ver detalhes de ${p.name}">
        <img src="${p.image}" alt="Exemplo de ${p.name.toLowerCase()} produzido pela Gráfica Intromaker" loading="lazy" />
        <span class="product-photo-label">Foto real</span>
      </button>
      <div class="product-body">
        <span class="category">${p.categoryLabel}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-meta">
          <strong>Orçamento personalizado</strong>
          <div class="qty" aria-label="Quantidade">
            <button type="button" aria-label="Diminuir" onclick="changeQty('${p.id}',-1)">−</button>
            <span id="qty-${p.id}">${state.quantities[p.id]}</span>
            <button type="button" aria-label="Aumentar" onclick="changeQty('${p.id}',1)">+</button>
          </div>
        </div>
        <div class="product-actions">
          <button class="details-button" type="button" onclick="openProductDetails('${p.id}')">Ver detalhes</button>
          <button class="add-button" type="button" onclick="addToCart('${p.id}')">Adicionar ao pedido</button>
        </div>
      </div>
    </article>`).join("");
}

window.changeQty = (id, delta) => {
  state.quantities[id] = Math.max(1, (state.quantities[id] || 1) + delta);
  const el = document.getElementById(`qty-${id}`);
  if(el) el.textContent = state.quantities[id];
  if(state.selectedProductId === id) productDetailsQty.textContent = state.quantities[id];
};

window.openProductDetails = (id) => {
  const product = products.find(item => item.id === id);
  if(!product) return;

  state.selectedProductId = id;
  productDetailsImage.src = product.image;
  productDetailsImage.alt = `Exemplo de ${product.name.toLowerCase()} produzido pela Gráfica Intromaker`;
  productDetailsCategory.textContent = product.categoryLabel;
  productDetailsTitle.textContent = product.name;
  productDetailsDescription.textContent = product.desc;
  productDetailsQty.textContent = state.quantities[id] || 1;
  productDetailsModal.hidden = false;
  productDetailsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  document.getElementById("closeProductDetails").focus();
};

function closeProductDetails(){
  productDetailsModal.hidden = true;
  productDetailsModal.setAttribute("aria-hidden", "true");
  productDetailsImage.src = "";
  state.selectedProductId = null;
  document.body.classList.remove("no-scroll");
}

window.resetProductCatalog = () => {
  state.search = "";
  state.filter = "todos";
  state.visibleCount = state.pageSize;
  productSearch.value = "";
  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === "todos");
  });
  renderProducts();
  productSearch.focus();
};

window.addToCart = (id) => {
  const product = products.find(p => p.id === id);
  const qty = state.quantities[id];
  const existing = state.cart.find(i => i.id === id);
  if(existing) existing.qty += qty;
  else state.cart.push({...product, qty});
  updateCart();
  openCart();
};

function updateCart(){
  const total = state.cart.reduce((n,i) => n + i.qty,0);
  cartCount.textContent = total;

  if(!state.cart.length){
    cartItems.innerHTML = `<div class="empty">Seu pedido está vazio.<br>Adicione os produtos que deseja orçar.</div>`;
    return;
  }

  cartItems.innerHTML = state.cart.map(i => `
    <div class="cart-item">
      <div>
        <h4>${i.name}</h4>
        <p>Quantidade selecionada: ${i.qty}</p>
      </div>
      <button class="remove" type="button" onclick="removeItem('${i.id}')">Remover</button>
    </div>`).join("");
}

window.removeItem = (id) => {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCart();
};

function openCart(){
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden","false");
  drawerBackdrop.hidden = false;
  document.body.classList.add("no-scroll");
}
function closeCart(){
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden","true");
  drawerBackdrop.hidden = true;
  document.body.classList.remove("no-scroll");
}

document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
drawerBackdrop.addEventListener("click",closeCart);

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click",() => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.filter = btn.dataset.filter;
    state.visibleCount = state.pageSize;
    renderProducts();
  });
});

productSearch.addEventListener("input", () => {
  state.search = productSearch.value;
  state.visibleCount = state.pageSize;
  renderProducts();
});

clearProductSearch.addEventListener("click", () => {
  state.search = "";
  state.visibleCount = state.pageSize;
  productSearch.value = "";
  renderProducts();
  productSearch.focus();
});

showMoreProducts.addEventListener("click", () => {
  state.visibleCount += state.pageSize;
  renderProducts();
});

document.getElementById("closeProductDetails").addEventListener("click", closeProductDetails);
productDetailsModal.querySelector("[data-close-product-modal]").addEventListener("click", closeProductDetails);
document.getElementById("detailQtyMinus").addEventListener("click", () => {
  if(state.selectedProductId) changeQty(state.selectedProductId, -1);
});
document.getElementById("detailQtyPlus").addEventListener("click", () => {
  if(state.selectedProductId) changeQty(state.selectedProductId, 1);
});
document.getElementById("addProductFromDetails").addEventListener("click", () => {
  const productId = state.selectedProductId;
  if(!productId) return;
  closeProductDetails();
  addToCart(productId);
});
document.getElementById("quoteProductWhatsapp").addEventListener("click", () => {
  const product = products.find(item => item.id === state.selectedProductId);
  if(!product) return;
  const quantity = state.quantities[product.id] || 1;
  const message = [
    "Olá! Gostaria de solicitar um orçamento pela loja da Gráfica Intromaker.",
    "",
    `Produto: ${product.name}`,
    `Quantidade selecionada: ${quantity}`,
    "",
    "Pode me informar valor e opções de acabamento?"
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
});

document.getElementById("checkoutWhatsapp").addEventListener("click",() => {
  if(!state.cart.length){
    alert("Adicione pelo menos um produto ao pedido.");
    return;
  }
  const note = document.getElementById("customerNote").value.trim();
  const lines = [
    "Olá! Gostaria de solicitar um orçamento pela loja da Gráfica Intromaker.",
    "",
    ...state.cart.map((i,idx) => `${idx+1}. ${i.name} — quantidade selecionada: ${i.qty}`),
    "",
    note ? `Observações: ${note}` : "Observações: nenhuma.",
    "",
    "Pode me informar valor, prazo e opções de acabamento?"
  ];
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`,"_blank");
});

document.querySelectorAll(".portfolio-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.alt || "Trabalho produzido pela Gráfica Intromaker";
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden","false");
    document.body.classList.add("no-scroll");
  });
});

function closeLightbox(){
  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden","true");
  lightboxImage.src = "";
  document.body.classList.remove("no-scroll");
}

document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    if(!productDetailsModal.hidden) closeProductDetails();
    else if(!lightbox.hidden) closeLightbox();
    else closeCart();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
updateCart();

// ABRIR FOTO GRANDE AO CLICAR
document.addEventListener("click", function (event) {
  const imagem = event.target.closest(".showcase-photo img");
  if (!imagem) return;

  let lightbox = document.getElementById("clickZoomLightbox");

  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "clickZoomLightbox";
    lightbox.className = "image-lightbox";

    lightbox.innerHTML = `
      <button class="image-lightbox-close" type="button" aria-label="Fechar">&times;</button>
      <img alt="">
    `;

    document.body.appendChild(lightbox);
  }

  const fotoGrande = lightbox.querySelector("img");
  fotoGrande.src = imagem.src;
  fotoGrande.alt = imagem.alt || "Foto do produto";

  lightbox.hidden = false;
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// FECHAR CLICANDO FORA OU NO X
document.addEventListener("click", function (event) {
  const lightbox = document.getElementById("clickZoomLightbox");
  if (!lightbox) return;

  if (
    event.target === lightbox ||
    event.target.closest("#clickZoomLightbox .image-lightbox-close")
  ) {
    lightbox.hidden = true;
    lightbox.style.display = "none";
    document.body.style.overflow = "";
  }
});

// FECHAR COM A TECLA ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const lightbox = document.getElementById("clickZoomLightbox");
    if (lightbox) {
      lightbox.hidden = true;
      lightbox.style.display = "none";
      document.body.style.overflow = "";
    }
  }
});
