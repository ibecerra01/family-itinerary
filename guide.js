/* Family Itinerary — "Guía del viaje": whole-trip summary (travel days, tips, bookings, packing).
   Tips come from the family's planning docs and travel-video research. Each tip carries a source tag:
   o = official / booking, v = video tip, s = our suggestion, c = to confirm. Reuses the .dz styles from disney.js. */
(() => {
"use strict";
const KEY = "fi_guide_v1";
const TAGS = {o:["Oficial","#2e7d4f"],v:["Video","#a86a12"],s:["Sugerencia","#5f6b7a"],c:["Confirmar","#b0413e"]};

// Each tab: list of sections [title, [[text, tag, optionalLink]]]
const TABS = {
viaje: ["Viaje", [
 ["Días de traslado (horarios locales)", [
  ["Jue 3 · origen� 10:00 → conexión 15:16 · conexión 21:55 → París CDG 11:35 (vie 4)","o"],
  ["Mar 8 · Salir del hotel 14:00–14:15 · CDG 18:20 → Múnich 19:45","o"],
  ["Sáb 12 · Tren Múnich Hbf 9:23 → Verona 15:01 (cambio de 61 min) → Milán 16:02 → 17:15 · primera clase, mesa para 3","o"],
  ["Sáb 19 · Milán Malpensa T2 15:30 → París CDG T2D 17:05 · noche cerca de CDG","o"],
  ["Dom 20 · CDG 13:25 → conexión 16:10 · conexión 23:49 → origen� 5:10 (lun 21)","o"],
  ["Regreso: en conexión probablemente hay que pasar migración y volver a documentar maletas antes del vuelo a origen�","c"]]],
 ["Alojamiento", [
  ["París 4–8 · Le Ruisseau, Saint-Mandé · desayuno incluido","o"],
  ["Múnich 8–12 · hotel a pocos minutos a pie de la estación central","o"],
  ["Milán 12–19 · apartamento en zona Cadorna, con cocina y lavandería compartida","o"],
  ["CDG 19–20 · por reservar · zona Roissypole (tren CDGVAL gratis a las terminales)","s"]]],
 ["Reservas y pendientes", "CHECK"]
]],
paris: ["París", [
 ["Moverse", [
  ["Una tarjeta Navigo Easy por persona (incluida la niña). Comprarlas en CDG al llegar; la app oficial suele no funcionar con teléfonos de fuera de Francia","v"],
  ["Línea 1 del metro (estación Saint-Mandé, junto al hotel) va directo a Bastille, Hôtel de Ville, Louvre, Tuileries, Concorde y Champs-Élysées","c"],
  ["Disney: RER A desde Vincennes hasta Marne-la-Vallée – Chessy, sin cambios","c"],
  ["Tarifas 2025: metro/RER €2,50 · bus €2 · Disney €5 · aeropuerto €13 · niños con tarifa reducida","c"],
  ["El pase semanal va de lunes a domingo: no conviene para vie–mar","v"],
  ["Validar siempre (pitido y luz verde); evitar torniquetes ya abiertos. Si un inspector multa: calma, no es obligatorio pagar en el acto","v"],
  ["Bonjour RATP: estado en vivo, vagón recomendado y número de salida. Guardar el hotel como «casa»","v","https://www.bonjour-ratp.fr/"],
  ["Taxi G7 (usa carriles de bus) mejor que Uber en hora punta (7–9 y 16–19) y para el aeropuerto con maletas","v"],
  ["Evitar trasbordos en Châtelet-Les Halles: es un laberinto","v"],
  ["Carteristas: bolso cruzado al frente, sobre todo en metro lleno","v"]]],
 ["Mercados y luces de Navidad", [
  ["Tullerías (lun 7): el más grande, con noria (de pago), atracciones y comida. Entrada libre. Día de semana al atardecer: ideal","v"],
  ["Notre-Dame, Square René Viviani (lun 7): pequeño, artesanos franceses, castañas asadas; ahí está el árbol más antiguo de París (1601)","v"],
  ["Hôtel de Ville: carrusel y puestos; Saint-Germain: cerca de Odéon y La Jacobine","v"],
  ["Fechas de apertura vistas en 2025: Tullerías ~14 nov, Notre-Dame ~26 nov, Hôtel de Ville y Torre Eiffel ~4–5 dic. Confirmar 2026","c"],
  ["Evitar viernes y sábado de noche en Tullerías, Opéra y el mercado de la Torre Eiffel: lleno total","v"],
  ["Muchos mercados cierran hacia las 20:00–21:00; casi todos aceptan tarjeta sin contacto","v"],
  ["Ruta de luces gratis: Champs-Élysées (desde ~17:00), Avenue Montaigne (Dior, n.º 30), Concorde y Place Vendôme (a ~10 min a pie de Tullerías)","v"],
  ["Galeries Lafayette (dom 6): vitrinas afuera, árbol bajo la cúpula, terraza gratis (cierra con lluvia o viento), baños y cafetería en el piso 6. Es domingo: confirmar horario","c"],
  ["Pedir reembolso de impuestos (tax free) en Galeries Lafayette con pasaporte si la compra supera el mínimo","v"],
  ["Torre Eiffel: destella 5 min cada hora en punto al anochecer","v"],
  ["Notre-Dame: reserva gratuita 48 h antes o el mismo día. No pagar a terceros","o","https://www.notredamedeparis.fr/en/"]]],
 ["Comer y beber", [
  ["Chocolate caliente: Carette (Trocadéro, dom 6) · Angelina (rue de Rivoli, junto a Tullerías, lun 7) · La Jacobine (Odéon, lun 7) · Cyril Lignac","v"],
  ["En los mercados: raclette, tartiflette, crepe de Nutella y banana, gofres, castañas, vin chaud y chocolate caliente para la niña","v"],
  ["Platos de invierno en bistró: coq au vin, cassoulet, choucroute, tarte tatin, profiteroles","v"],
  ["Mercados locales: galette-saucisse y comida casera; en Aligre (mar 8) desayuno con pan, quesos y frutas","v"],
  ["Comer barato: supermercados tipo Franprix tienen comida lista y microondas","v"],
  ["Chocolates de regalo (Jacques Genin, Patrick Roger, À la Mère de Famille): comprarlos al final de París para que lleguen frescos","v"]]],
 ["Avisos", [
  ["En Francia el paracetamol, ibuprofeno y pastillas para la garganta solo se venden en farmacia: traerlos de casa","v"],
  ["Baños públicos de pago (~€2) cerca de Notre-Dame; usar los de museos, tiendas grandes y cafés","v"]]]
]],
munich: ["Múnich", [
 ["Moverse", [
  ["Aeropuerto → estación central: S-Bahn S1 o S8 (~40 min) o taxi; decidir antes de llegar (mar 8, ~20:00)","c"],
  ["Billetes MVV: comparar billete diario familiar vs. sencillos; confirmar tarifa infantil","c"],
  ["Tren del sáb 12 sale de München Hauptbahnhof, a pocos minutos a pie del hotel","o"]]],
 ["Mercados", [
  ["Christkindlmarkt de Marienplatz: 20 nov – 24 dic 2026","o","https://www.christkindlmarkt-muenchen.de/en/home"],
  ["Märchenbazar: 26 nov – 28 dic 2026, Olympiapark Sur (Spiridon-Louis-Ring 100)","o","https://maerchenbazar.de/"],
  ["Mercado de la Residenz (protegido del viento) o Mercado Medieval de Wittelsbacherplatz","s"],
  ["Tollwood Winter Festival en Theresienwiese: mayoría de actividades gratis","o","https://www.tollwood.de/"],
  ["Visitar los mercados después de las 16:00, con las luces encendidas","s"],
  ["Tazas con depósito: devolverlas o quedárselas de recuerdo","s"]]],
 ["Comer y beber", [
  ["Weißwurst con mostaza dulce y Brezel, antes del mediodía","s"],
  ["Schweinebraten (cerdo asado con Knödel) · Schweinshaxe (codillo, para compartir)","s"],
  ["Käsespätzle (pasta con queso, buena opción para la niña) · Kaiserschmarrn de postre","s"],
  ["En mercados: Lebkuchen, almendras garrapiñadas, Kartoffelpuffer","s"],
  ["Adultos: Glühwein, Helles, Weißbier o Radler. Feuerzangenbowle lleva más alcohol","s"],
  ["Niña: Kinderpunsch, chocolate caliente o Apfelschorle","s"],
  ["Restaurantes: Augustiner-Keller (cerca del hotel, reservar) o Schneider Bräuhaus (cerca de Marienplatz)","s"]]],
 ["Decisiones pendientes", [
  ["Himmelswerkstatt: 90 min sin padres y probablemente en alemán; reserva ~29 nov","c"],
  ["Mercado de la Residenz o Medieval (mié 9)","s"],
  ["BMW Welt basta, salvo interés especial en el BMW Museum","s"],
  ["Elegir y reservar la cena bávara","s"]]]
]],
milan: ["Milán", [
 ["Llegada (sáb 12)", [
  ["Llegada 17:15; confirmar si es Milano Centrale","c"],
  ["De Milano Centrale a Cadorna: metro M2 (verde), directo","s"]]],
 ["Plan", [
  ["Itinerario pendiente: Duomo, Castello Sforzesco (junto a Cadorna), Brera y mercados navideños","s"],
  ["Excursiones posibles: lago de Como, Bérgamo, Turín o los Alpes; elegir 1–2 días","s"]]],
 ["Salida (sáb 19)", [
  ["Malpensa Express sale de Cadorna (~50 min); confirmar que el tren llegue a T2","c"],
  ["Entrega de maletas 12:30–14:30 en Malpensa T2: tomar el tren hacia las 12:30","o"],
  ["Check-in online de easyJet abre el 19 nov; 3 maletas de 23 kg + 1 bolso bajo el asiento por persona","o"],
  ["Confirmar hora de salida del apartamento y si se pueden dejar maletas","c"]]]
]],
equipaje: ["Equipaje", [
 ["Ropa", [
  ["Abrigo largo impermeable con capucha · capas térmicas · gorro y bufanda","v"],
  ["Guantes táctiles para usar el teléfono","v"],
  ["Calzado impermeable con buen agarre (hielo y charcos) · medias térmicas","v"]]],
 ["Salud y bolso del día", [
  ["Medicinas: paracetamol, ibuprofeno, pastillas para la garganta, y las personales","v"],
  ["Gel o toallitas; lavarse las manos antes de comer (temporada de virus)","v"],
  ["Batería externa · snacks · botella de agua · bolso cruzado antirrobo","v"]]],
 ["Electricidad y documentos", [
  ["Enchufes europeos tipo C/F a 230 V: llevar adaptadores; cargadores de teléfono suelen aceptar 110–240 V, secadores no siempre","s"],
  ["Pasaportes vigentes y copia digital; capturas de entradas y reservas sin conexión","s"]]],
 ["Apps para instalar", [
  ["Bonjour RATP · Google Maps · G7 · Uber · Disneyland Paris","v"],
  ["Google Translate con francés, alemán e italiano descargados sin conexión","v"],
  ["MVV (Múnich) · ATM Milano · easyJet · United · Lufthansa","s"]]]
]]
};

const CHECKS = [
 ["Disneyland: entrada fechada (1 día / 2 parques)","https://www.disneylandparis.com/"],
 ["Torre Eiffel: cima por ascensor, dom 6 a las 10:30","https://www.toureiffel.paris/en"],
 ["Sainte-Chapelle: lun 7 a las 10:00 (2 adultos + 1 gratis)","https://www.sainte-chapelle.fr/en/"],
 ["Notre-Dame: reserva gratuita 48 h antes","https://www.notredamedeparis.fr/en/"],
 ["Disney: restaurante con mesa (opcional)",""],
 ["Comprar 3 tarjetas Navigo Easy al llegar a CDG",""],
 ["Himmelswerkstatt: reservar ~29 nov (si se decide)",""],
 ["Deutsches Museum: entradas",""],
 ["Múnich: cena bávara reservada",""],
 ["Nymphenburg: entrada con horario (opcional)",""],
 ["easyJet: check-in online desde el 19 nov",""],
 ["Hotel cerca de CDG para el 19 dic",""]
];

function load(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
const state = Object.assign({tab:"viaje",done:{}}, load());
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

const style=document.createElement("style");
style.textContent='.gd .dz-head,.gd .dz-tabs{background:#16324a}.gd .dz-kicker{color:#f2c9a5}.gd .dz-tabs button{border-color:#4d6b85;color:#dbe7f1}.gd .dz-tabs button.on{color:#16324a}.gd-tag{display:inline-block;font-size:10px;font-weight:800;border-radius:6px;padding:2px 6px;color:#fff;margin-right:6px;vertical-align:1px}.gd-item{font-size:13px;line-height:1.55;color:#33415a}.gd-item a{font-weight:700;color:#16324a;margin-left:4px}.gd-legend{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}';
document.head.appendChild(style);
const shell=document.createElement("section");shell.className="dz gd";shell.hidden=true;shell.setAttribute("aria-label","Guía del viaje");
shell.innerHTML='<div class="dz-head"><div><div class="dz-kicker">Familia · Europa 2026</div><h2>Guía del viaje</h2></div><button type="button" class="dz-close" aria-label="Cerrar guía">×</button></div><div class="dz-tabs">'+Object.keys(TABS).map(k=>'<button type="button" data-gtab="'+k+'">'+TABS[k][0]+'</button>').join("")+'</div><div class="dz-body"></div>';
document.body.appendChild(shell);
const body=shell.querySelector(".dz-body");
function close(){shell.hidden=true;document.body.style.overflow="";}
shell.querySelector(".dz-close").onclick=close;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!shell.hidden)close();});
shell.querySelectorAll("[data-gtab]").forEach(b=>b.onclick=()=>{state.tab=b.dataset.gtab;save();draw();body.scrollTop=0;});

function tag(t){const x=TAGS[t]||TAGS.s;return '<span class="gd-tag" style="background:'+x[1]+'">'+x[0]+'</span>';}
function draw(){
 shell.querySelectorAll("[data-gtab]").forEach(b=>b.classList.toggle("on",b.dataset.gtab===state.tab));
 let h='<div class="dz-note">Resumen del viaje: planes de la familia, reservas y consejos de videos. Etiquetas:<div class="gd-legend">'+Object.keys(TAGS).map(tag).join("")+'</div>Lo marcado <b>Confirmar</b> o <b>Video</b> no es dato oficial: verificar antes de depender de ello.</div>';
 TABS[state.tab][1].forEach(sec=>{
  h+='<div class="dz-land">'+esc(sec[0])+'</div>';
  if(sec[1]==="CHECK"){
   const n=CHECKS.filter((_,i)=>state.done[i]).length;
   h+='<div class="dz-note" style="margin:0 0 6px">'+n+' de '+CHECKS.length+' listos · se guarda solo en este teléfono</div>';
   CHECKS.forEach((c,i)=>{h+='<div class="dz-row dz-prep"><label><input type="checkbox" data-gcheck="'+i+'"'+(state.done[i]?" checked":"")+'><span>'+esc(c[0])+'</span></label>'+(c[1]?'<a target="_blank" rel="noopener" href="'+c[1]+'">Abrir ↗</a>':'')+'</div>';});
   return;
  }
  sec[1].forEach(it=>{h+='<div class="dz-row"><div class="dz-main gd-item">'+tag(it[1])+esc(it[0])+(it[2]?'<a target="_blank" rel="noopener" href="'+it[2]+'">Abrir ↗</a>':'')+'</div></div>';});
 });
 body.innerHTML=h;
 body.querySelectorAll("[data-gcheck]").forEach(c=>c.onchange=()=>{if(c.checked)state.done[c.dataset.gcheck]=true;else delete state.done[c.dataset.gcheck];save();draw();});
}
window.openGuide=(tab)=>{if(tab&&TABS[tab])state.tab=tab;shell.hidden=false;document.body.style.overflow="hidden";draw();};
const btn=document.getElementById("openGuide");if(btn)btn.onclick=()=>window.openGuide(typeof city!=="undefined"&&TABS[city]?city:undefined);
})();
