// product data

const products = [ 
  {"id":1,"name":"Digital Auto Level","category":"Survey","price":18500,"description":"High precision digital auto level with automatic horizontal circle reading for accurate surveying.","image":"https://tse3.mm.bing.net/th/id/OIP.do58eFQ21lUgNHeZ3TUP1QHaF-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3","featured":true,"specifications":{"accuracy":"±1.5mm/km","magnification":"32x","minimumFocusing":"0.3m","compensatorRange":"±15'"},"inStock":true},

  {"id":4,"name":"Handheld GPS","category":"Survey","price":35000,"description":"Rugged handheld GPS unit with high-sensitivity receiver for field surveying applications.","image":"https://m.media-amazon.com/images/I/61LfDX97GjL.jpg","specifications":{"accuracy":"3-5 meters","channels":"12 channel","batteryLife":"22 hours","waterRating":"IPX7"},"inStock":true},

  {"id":5,"name":"Laser Distance Meter","category":"Survey","price":8500,"description":"Compact laser distance meter for quick and accurate distance measurements up to 100m.","image":"https://www.electronicscomp.com/image/cache/catalog/bosch-glm-150-c-laser-distance-measuring-instrument-800x800.jpg","specifications":{"range":"0.05-100m","accuracy":"±1.5mm","laserClass":"Class II","batteryLife":"5000 measurements"},"inStock":true},

  {"id":6,"name":"Compression Testing Machine","category":"Civil QC Lab","price":125000,"description":"Digital compression testing machine for concrete cube and cylinder strength testing.","image":"https://civillabequipmentmanufacturer.com/wp-content/uploads/2023/12/compression-testing-machine-pillar-type-load-frame-hand-operated.png","featured":true,"specifications":{"capacity":"2000 kN","accuracy":"±1%","cubeSize":"150mm x 150mm","cylinderSize":"150mm dia x 300mm"},"inStock":true},

  {"id":7,"name":"Electric Sieve Shaker","category":"Civil QC Lab","price":28000,"description":"Automatic electric sieve shaker for particle size analysis of aggregates and soil.","image":"https://zaxco.com.my/wp-content/uploads/2022/08/material-test-sieve-shaker.jpg","specifications":{"sieveSize":"200mm & 300mm","timer":"0-99 minutes","amplitude":"Variable","power":"0.25 HP motor"},"inStock":true},

  {"id":8,"name":"Vicat Apparatus","category":"Civil QC Lab","price":5500,"description":"Manual Vicat apparatus for determining initial and final setting time of cement.","image":"https://tse2.mm.bing.net/th/id/OIP.1hT854fCn3Azw1KNPkLiTAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3","specifications":{"needleWeight":"300g","plungerWeight":"300g","mould":"Conical, hard rubber","standard":"IS 4031 Part 5"},"inStock":true},

  {"id":9,"name":"Slump Test Cone","category":"Civil QC Lab","price":2200,"description":"Standard slump cone for testing workability of fresh concrete as per IS specifications.","image":"https://amvscientific.com/wp-content/uploads/2023/12/slump-test-apparatus.jpg","specifications":{"topDiameter":"100mm","bottomDiameter":"200mm","height":"300mm","material":"16 gauge steel"},"inStock":true},

  {"id":10,"name":"CBR Test Apparatus","category":"Civil QC Lab","price":45000,"description":"Complete CBR test setup for determining bearing strength of soil subgrade.","image":"https://tse1.mm.bing.net/th/id/OIP.OhsZUc50bnPJ7Rzn3N8SigAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3","specifications":{"loadCapacity":"50kN","penetrationRate":"1.25mm/min","pistonDia":"49.63mm","mouldDia":"152.4mm"},"inStock":true},

  {"id":11,"name":"Concrete Mixer","category":"Construction","price":55000,"description":"Portable concrete mixer with 100L capacity for small to medium construction projects.","image":"https://tse1.mm.bing.net/th/id/OIP.roFKIZh3KzVhP2QGT3jiFgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3","featured":true,"specifications":{"capacity":"100 liters","power":"1 HP motor","voltage":"230V single phase","weight":"85 kg"},"inStock":true},

  {"id":12,"name":"Needle Vibrator","category":"Construction","price":12000,"description":"Electric needle vibrator for efficient concrete compaction in construction work.","image":"https://5.imimg.com/data5/SELLER/Default/2022/2/OJ/ON/JK/79354682/25mm-concrete-needle-vibrator-1000x1000.png","specifications":{"power":"1.5 HP motor","frequency":"12000 VPM","needleDia":"35mm","hoseLength":"6 meters"},"inStock":true},

  {"id":13,"name":"Plate Compactor","category":"Construction","price":32000,"description":"Heavy-duty plate compactor for soil and asphalt compaction work.","image":"https://tse4.mm.bing.net/th/id/OIP.es5BeAV_uFvM3_ubYdL0CAHaHz?r=0&pid=ImgDet&w=178&h=187&c=7&dpr=1.3&o=7&rm=3","specifications":{"plateSize":"450mm x 350mm","weight":"85 kg","engine":"Honda GX160","compactionForce":"16kN"},"inStock":true},

  {"id":14,"name":"Cut-off Machine","category":"Construction","price":18500,"description":"Portable concrete cut-off machine for precise cutting of concrete and masonry.","image":"https://th.bing.com/th/id/R.f939f6d4c08e281697a221be4b45dd18?rik=TjcKb8pv%2bBKxJw&riu=http%3a%2f%2fwww.ingco.co.za%2fwp-content%2fuploads%2f2020%2f07%2fCOS35568E.jpg&ehk=KnIYrtpV%2fjJJSPZfTcLnS%2bd1JfDhqJmAjcbEkTQtoBc%3d&risl=&pid=ImgRaw&r=0","specifications":{"bladeDia":"350mm (14 inch)","engine":"2-stroke petrol","cuttingDepth":"125mm","weight":"9.5 kg"},"inStock":true},

  {"id":15,"name":"Rebar Cutter","category":"Construction","price":25000,"description":"Electric rebar cutter for cutting reinforcement bars up to 32mm diameter.","image":"https://rebartyingsystems.co.uk/wp-content/uploads/102998-KSS-16mm-Rod-Cutter.jpg","specifications":{"cuttingCapacity":"32mm rebar","power":"2.2 kW motor","cuttingSpeed":"3 sec per cut","weight":"45 kg"},"inStock":true},

  {"id":16,"name":"ISI Safety Helmet","category":"Safety","price":650,"description":"ISI marked safety helmet with adjustable headband for construction site protection.","image":"https://m.media-amazon.com/images/I/51M9AqXi45L.jpg","specifications":{"material":"HDPE shell","standard":"IS 2925","colors":"White, Yellow, Red, Blue","chinStrap":"Included"},"inStock":true},

  {"id":17,"name":"Safety Hand Gloves","category":"Safety","price":250,"description":"Cut-resistant safety gloves with excellent grip for construction workers.","image":"https://tse3.mm.bing.net/th/id/OIP.GSahesbNwrnoasw1nejf7wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3","specifications":{"material":"Nitrile coated","cutLevel":"Level 5","sizes":"S, M, L, XL","grip":"Palm and finger coating"},"inStock":true},

  {"id":18,"name":"Safety Harness","category":"Safety","price":3500,"description":"Full body safety harness for working at height protection.","image":"https://www.uviraj.com/images/FBH-EN/U221FBH.jpg","specifications":{"type":"Full body harness","material":"Polyester webbing","buckles":"Auto-locking","capacity":"140 kg"},"inStock":true},

  {"id":19,"name":"Safety Goggles","category":"Safety","price":450,"description":"Anti-fog safety goggles with UV protection for eye safety.","image":"https://th.bing.com/th/id/OIP.B-6wNhxaeq95PpMePz7SmAHaEt?w=297&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3","specifications":{"lens":"Polycarbonate","coating":"Anti-fog, anti-scratch","uvProtection":"99.9%","frame":"Flexible TPR"},"inStock":true},

  {"id":20,"name":"Safety Shoes","category":"Safety","price":2200,"description":"Steel toe safety shoes with slip-resistant sole for workplace protection.","image":"https://www.fischerbell.com/wp-content/uploads/2022/11/FT-SHOE_SAFETYJOGGER_10803SJ1401XX-2.jpg","specifications":{"toeCap":"Steel toe","sole":"PU dual density","upper":"Buffalo leather","sizes":"6-11 UK"},"inStock":true},

  {"id":21,"name":"Cordless Drill Set","category":"Power Tools","price":5500,"description":"Professional cordless drill with 18V battery and complete accessory set.","image":"https://i5.walmartimages.com/seo/AIRXPRO-Cordless-Drill-21V-Power-Drill-Set-25-1-Position-Adjustable-Torque-Electric-2-Speed-Transmission-For-Screwdriving-And-Drilling-Black_403503c1-d664-4771-becf-cbf6b4c568cd.2e73f817631b3beb0b55358875e1ce38.jpeg","featured":true,"specifications":{"voltage":"18V Li-ion","chuckSize":"13mm keyless","torque":"50 Nm","batteryLife":"2-3 hours"},"inStock":true},

  {"id":22,"name":"Angle Grinder","category":"Power Tools","price":3200,"description":"4-inch angle grinder with variable speed control for cutting and grinding applications.","image":"https://image.made-in-china.com/2f0j00veBaSQtWqcYT/Angle-Grinder-Angle-Grinder-K6230026-1-.jpg","specifications":{"discSize":"100mm (4 inch)","power":"850W","noLoadSpeed":"11000 RPM","weight":"1.8 kg"},"inStock":true},

  {"id":23,"name":"Impact Driver","category":"Power Tools","price":4200,"description":"High-torque impact driver for heavy-duty fastening applications.","image":"https://www.fishertools.com/images/products/10/10998/238028064932a2855b6a7616274ca26d_1000.jpg","specifications":{"torque":"180 Nm","impactsPerMinute":"3600 IPM","battery":"18V Li-ion","chuckSize":"1/4 inch hex"},"inStock":true},

  {"id":24,"name":"Circular Saw","category":"Power Tools","price":6800,"description":"Professional circular saw with laser guide for precise wood cutting.","image":"https://hupshenghardware.com/wp-content/uploads/2019/01/Bosch-Circular-Saw-GKS600-1.jpg","specifications":{"bladeSize":"190mm (7.5 inch)","power":"1400W","cuttingDepth":"68mm at 90°","laserGuide":"Included"},"inStock":true},

  {"id":25,"name":"Oscillating Multi-Tool","category":"Power Tools","price":3800,"description":"Versatile oscillating tool with multiple attachments for cutting, sanding, and scraping.","image":"https://rhgaudion.com/wp-content/uploads/2020/09/DCS355-700x700.jpg","specifications":{"oscillations":"22000 OPM","power":"300W","attachments":"35 piece kit","toolFree":"Quick change system"},"inStock":true},

  {"id":26,"name":"Laser Level","category":"Survey","price":14500,"description":"Self-leveling laser level for quick and accurate alignment tasks.","image":"https://tse2.mm.bing.net/th/id/OIP.smL-X8SlMknffjRgIv_iBwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3","specifications":{"accuracy":"±3mm/10m","range":"20m","batteryLife":"15 hours","mount":"Magnetic"},"inStock":true},

  {"id":27,"name":"Digital Caliper","category":"Measuring","price":3200,"description":"Stainless steel digital caliper for precise internal and external measurements.","image":"https://m.media-amazon.com/images/I/61CUf9nJ+PL._AC_UF894,1000_QL80_.jpg","specifications":{"range":"0-150mm","accuracy":"±0.02mm","display":"LCD","battery":"SR44"},"inStock":true},

  {"id":28,"name":"Welding Machine","category":"Welding","price":18500,"description":"Portable inverter welding machine for on-site fabrication and repairs.","image":"https://tse1.mm.bing.net/th/id/OIP.ZrttgjJdOlYl827NDYPzbwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3","specifications":{"inputVoltage":"220V","outputCurrent":"20-200A","weight":"6kg","dutyCycle":"60%"},"inStock":true},

  {"id":29,"name":"Safety Net","category":"Safety","price":1200,"description":"Heavy-duty safety net for fall protection at construction sites.","image":"https://5.imimg.com/data5/SELLER/Default/2022/2/WO/TU/UJ/27926459/gtfl-safetynets-brochure-print-file-8-copy-1000x1000.jpg","specifications":{"material":"HDPE","meshSize":"100mm x 100mm","size":"3m x 10m","color":"Green"},"inStock":true},

  {"id":30,"name":"Tool Kit Set","category":"Hand Tools","price":2500,"description":"Comprehensive hand tool kit for general maintenance and repairs.","image":"https://housegrail.com/wp-content/uploads/2021/08/DOWELL-HYT49-Tool-Set.jpg","specifications":{"pieces":"120","case":"Plastic","weight":"4kg","tools":"Wrenches, pliers, screwdrivers, etc."},"inStock":true},

  {"id":31,"name":"Cutting Wheel","category":"Consumables","price":120,"description":"High-performance cutting wheel for metal and steel applications.","image":"https://5.imimg.com/data5/SELLER/Default/2021/1/JM/ZN/NX/2354261/wood-cutting-wheel-500x500.jpg","specifications":{"diameter":"107mm","thickness":"1.2mm","bore":"16mm","maxRPM":"15200"},"inStock":true}
];



// Elements

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("search");
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const categoryBar = document.getElementById("categoryBar");
const sortSelect = document.getElementById("sortSelect");

// Get unique categories from products
const allCategories = ["All"].concat(
  Array.from(new Set(products.map(p => p.category)))
);
let activeCategory = "All";
let currentSort = "default";

// Render Products

function renderCategoryBar() {
  categoryBar.innerHTML = "";
  allCategories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn" + (activeCategory === cat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => {
      activeCategory = cat;
      renderCategoryBar();
      renderProducts();
    };
    categoryBar.appendChild(btn);
  });
}

function getFilteredSortedProducts() {
  let filtered = products.filter(p => {
    const matchesText = searchInput.value.trim() === "" ||
      p.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchInput.value.toLowerCase()));
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesText && matchesCategory;
  });
  // Sorting
  switch (sortSelect.value) {
    case "price-asc":
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filtered = filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filtered = filtered.slice().sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  return filtered;
}

function renderProducts() {
  productContainer.innerHTML = "";
  const filtered = getFilteredSortedProducts();
  if (filtered.length === 0) {
    productContainer.innerHTML = "<p>No products found.</p>";
    return;
  }
  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.style.animationDelay = (i * 0.04) + "s";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <span class="price">₹${p.price.toLocaleString()}</span>
      </div>
    `;
    card.addEventListener('click', () => showProductModal(p));
    productContainer.appendChild(card);
  });
}

// Modal Logic
function showProductModal(product) {
  let specs = '';
  if (product.specifications) {
    specs = '<ul style="margin:10px 0 0 0;padding:0 0 0 18px;">' + Object.entries(product.specifications).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('') + '</ul>';
  }
  modalBody.innerHTML = `
  <div class="modal-display">
    <div class="image-block">
    <img class="modal-product-img" src="${product.image}" alt="${product.name}">
    ${product.featured ? '<span class="modal-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
    
    </div>
    <div class="detail-block">
    <div class="modal-product-title">${product.name}</div>
    <div class="modal-product-desc">${product.description}</div>
    <div class="modal-product-price">₹${product.price.toLocaleString()}</div>
    <div style="margin-top:10px;">${product.inStock ? '<span style="color:green;font-weight:600;">In Stock</span>' : '<span style="color:red;font-weight:600;">Out of Stock</span>'}</div>
    
    </div>
  </div>
  
  `;
  modal.style.display = 'flex';
}
if (closeModal) closeModal.onclick = () => { modal.style.display = 'none'; };
window.onclick = function(event) {
  if (event.target === modal) modal.style.display = 'none';
};

// Event Listeners

searchInput.addEventListener("input", () => {
  renderProducts();
});
if (sortSelect) sortSelect.addEventListener("change", () => {
  renderProducts();
});

// Initial Render
renderCategoryBar();
renderProducts();
