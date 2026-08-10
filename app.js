
const WHATSAPP = "553173581976";

const products = [
  {id:"cartao-visita", name:"Cartão de visita", category:"cartoes", categoryLabel:"Cartões", desc:"Modelos profissionais com opções de laminação, verniz localizado e diferentes papéis.", unit:"quantidade a definir"},
  {id:"cartao-agradecimento", name:"Cartão de agradecimento", category:"cartoes", categoryLabel:"Cartões", desc:"Ideal para acompanhar pedidos e fortalecer a identidade da sua marca.", unit:"quantidade a definir"},
  {id:"panfleto", name:"Panfletos", category:"divulgacao", categoryLabel:"Divulgação", desc:"Divulgação de promoções, eventos, serviços e campanhas em diversos formatos.", unit:"quantidade a definir"},
  {id:"folder", name:"Folders", category:"divulgacao", categoryLabel:"Divulgação", desc:"Apresentação organizada de serviços, cardápios e informações comerciais.", unit:"quantidade a definir"},
  {id:"adesivo", name:"Adesivos personalizados", category:"adesivos", categoryLabel:"Adesivos", desc:"Adesivos em diferentes formatos, tamanhos e materiais para embalagens e marcas.", unit:"quantidade a definir"},
  {id:"etiqueta", name:"Etiquetas", category:"adesivos", categoryLabel:"Adesivos", desc:"Etiquetas para produtos, lembrancinhas, embalagens e identificação.", unit:"quantidade a definir"},
  {id:"sacola", name:"Sacolas personalizadas", category:"personalizados", categoryLabel:"Personalizados", desc:"Sacolas para lojas e eventos com personalização da sua marca.", unit:"quantidade a definir"},
  {id:"convite", name:"Convites", category:"personalizados", categoryLabel:"Personalizados", desc:"Convites personalizados para festas, eventos, igrejas e comemorações.", unit:"quantidade a definir"},
  {id:"material-evento", name:"Materiais para eventos", category:"personalizados", categoryLabel:"Personalizados", desc:"Ingressos, tags, cartões, placas e outros materiais produzidos sob medida.", unit:"sob consulta"}
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

function renderProducts(){
  const list = state.filter === "todos" ? products : products.filter(p => p.category === state.filter);
  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-visual"><div class="shape">${p.name}</div></div>
      <div class="product-body">
        <span class="category">${p.categoryLabel}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-meta">
          <strong>Orçamento personalizado</strong>
          <div class="qty">
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
    cartItems.innerHTML = `<div class="empty">Seu carrinho está vazio.</div>`;
    return;
  }

  cartItems.innerHTML = state.cart.map(i => `
    <div class="cart-item">
      <div>
        <h4>${i.name}</h4>
        <p>Quantidade informada: ${i.qty}</p>
      </div>
      <button class="remove" onclick="removeItem('${i.id}')">Remover</button>
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
}
function closeCart(){
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden","true");
  drawerBackdrop.hidden = true;
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
    ...state.cart.map((i,idx) => `${idx+1}. ${i.name} — quantidade: ${i.qty}`),
    "",
    note ? `Observações: ${note}` : "Observações: nenhuma.",
    "",
    "Pode me informar valor, prazo e opções de acabamento?"
  ];
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`,"_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
updateCart();
