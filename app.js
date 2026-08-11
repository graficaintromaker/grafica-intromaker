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
    image:"20220928_122913.jpg"
    name:"Cartões de agradecimento",
    category:"cartoes",
    categoryLabel:"Cartões",
    desc:"Para acompanhar pedidos, apresentar cuidados, garantias e fortalecer a experiência da sua marca.",
    image:"assets/cartao-cuidados.jpg"
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
    id:"tag-moda",
    name:"Tags para roupas",
    category:"tags",
    categoryLabel:"Tags",
    desc:"Tags para lojas e confecções com furo, informações de tamanho, troca, preço e identidade visual.",
    image:"assets/02-tags-moda.jpg"
  },
  {
    id:"tag-semijoias",
    name:"Tags para semijoias",
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
    id:"panfletos",
    name:"Panfletos e flyers",
    category:"divulgacao",
    categoryLabel:"Divulgação",
    desc:"Materiais para promoções, delivery, eventos, serviços, lançamentos e campanhas comerciais.",
    image:"assets/20250912_122212 - Copia.jpg"
  },
  {
    id:"informativos",
    name:"Materiais informativos",
    category:"divulgacao",
    categoryLabel:"Divulgação",
    desc:"Manuais, orientações, fichas, informativos e materiais impressos para profissionais e empresas.",
    image:"assets/manual-orientacoes.webp"
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
  }
];

const state = {
  filter: "todos",
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

function renderProducts(){
  const list = state.filter === "todos" ? products : products.filter(p => p.category === state.filter);
  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-visual">
        <img src="${p.image}" alt="Exemplo de ${p.name.toLowerCase()} produzido pela Gráfica Intromaker" loading="lazy" />
        <span class="product-photo-label">Foto real</span>
      </div>
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
        <button class="add-button" type="button" onclick="addToCart('${p.id}')">Adicionar ao pedido</button>
      </div>
    </article>`).join("");
}

window.changeQty = (id, delta) => {
  state.quantities[id] = Math.max(1, state.quantities[id] + delta);
  const el = document.getElementById(`qty-${id}`);
  if(el) el.textContent = state.quantities[id];
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
    renderProducts();
  });
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
    if(!lightbox.hidden) closeLightbox();
    else closeCart();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
updateCart();
