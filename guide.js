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
  ["Sáb 12 · Tren Múnich Hbf 9:23 → Verona 15:01 (cambio de 61 min) → Milano Centrale 16:02 → 17:15 · primera clase, mesa para 3","o"],
  ["Sáb 19 · Milán Malpensa T2 15:30 → París CDG T2D 17:05 · noche cerca de CDG","o"],
  ["Dom 20 · CDG Terminal 1 (United) 13:25 → conexión 16:10 · conexión 23:49 → origen� 5:10 (lun 21)","o","https://www.parisaeroport.fr/en/passengers/flights/airlines/airline?airline=UA"],
  ["Regreso: en conexión hay que recoger las maletas, pasar migración y aduana, y volver a documentarlas para el vuelo a origen�","o","https://help.cbp.gov/s/article/Article-1244"]]],
 ["Alojamiento", [
  ["París 4–8 · Le Ruisseau, Saint-Mandé · desayuno incluido","o"],
  ["Múnich 8–12 · hotel a pocos minutos a pie de la estación central","o"],
  ["Milán 12–19 · apartamento en zona Cadorna, con cocina y lavandería compartida","o"],
  ["CDG 19–20 · por reservar · zona Roissypole (tren CDGVAL gratis a las terminales)","s"]]],
 ["Reservas y pendientes", "CHECK"]
]],
paris: ["París", [
 ["Moverse", [
  ["Una tarjeta Navigo Easy (€2) por persona, incluida la niña; se cargan billetes sueltos o el Navigo Jour","o","https://www.iledefrance-mobilites.fr/titres-et-tarifs/supports/passe-navigo-easy"],
  ["Comprarlas en CDG al llegar; la app oficial suele no funcionar con teléfonos de fuera de Francia","v"],
  ["Línea 1 del metro (estación Saint-Mandé, junto al hotel) va directo a Bastille, Hôtel de Ville, Louvre-Rivoli, Tuileries, Concorde y Champs-Élysées","o","https://www.bonjour-ratp.fr/lignes-metro/ligne-1/"],
  ["Disney: RER A desde Vincennes hasta Marne-la-Vallée – Chessy, sin cambios. Ojo: subir solo a trenes con destino Chessy (otros van a Boissy-Saint-Léger)","o","https://www.ratp.fr/visiter-paris/lieux/disneyland"],
  ["Tarifas 2026: metro/tren/RER €2,55 (sirve también para Disney) · bus/tranvía €2,05 · aeropuerto CDG €14 · Navigo Jour €12,30","o","https://www.iledefrance-mobilites.fr/tarifs-titre-de-transport-en-commun-2026"],
  ["Niños de 4 a 9 años: 50 % (€1,30 metro/RER, €7 aeropuerto). No hay Navigo Jour reducido","o","https://www.iledefrance-mobilites.fr/titres-et-tarifs/tarifs-reduits/enfants-4-10-ans"],
  ["Navigo Semaine (€32,40) va de lunes a domingo: no conviene para vie–mar","o"],
  ["Validar siempre (pitido y luz verde); evitar torniquetes ya abiertos. Si un inspector multa: calma, no es obligatorio pagar en el acto","v"],
  ["Bonjour RATP: estado en vivo, vagón recomendado y número de salida. Guardar el hotel como «casa»","v","https://www.bonjour-ratp.fr/"],
  ["Taxi G7 (usa carriles de bus) mejor que Uber en hora punta (7–9 y 16–19) y para el aeropuerto con maletas","v"],
  ["Evitar trasbordos en Châtelet-Les Halles: es un laberinto","v"],
  ["Carteristas: bolso cruzado al frente, sobre todo en metro lleno","v"]]],
 ["Mercados y luces de Navidad", [
  ["Tullerías: 14 nov 2026 – 3 ene 2027, todos los días 11:00–23:45","o","https://www.paris.fr/evenements/marches-de-noel-2026-le-calendrier-complet-126813"],
  ["Tullerías (lun 7): el más grande, con noria (de pago), atracciones y comida. Entrada libre. Día de semana al atardecer: ideal","v"],
  ["Notre-Dame, Square René Viviani: 26 nov – 27 dic 2026","o","https://www.paris.fr/evenements/marches-de-noel-2026-le-calendrier-complet-126813"],
  ["Notre-Dame (lun 7): pequeño, artesanos franceses, castañas asadas; ahí está el árbol más antiguo de París (1601)","v"],
  ["Hôtel de Ville: no figura en el calendario oficial 2026 (en 2025 abrió el 5 dic)","c"],
  ["Saint-Germain: mercado cerca de Odéon y La Jacobine","v"],
  ["Evitar viernes y sábado de noche en Tullerías, Opéra y el mercado de la Torre Eiffel: lleno total","v"],
  ["Muchos mercados cierran hacia las 20:00–21:00; casi todos aceptan tarjeta sin contacto","v"],
  ["Champs-Élysées iluminados cada noche desde las 17:00 hasta medianoche (01:00 viernes y sábado); mercado navideño 22 nov – 4 ene","o","https://www.paris.fr/pages/les-champs-elysees-a-l-heure-des-illuminations-25395"],
  ["Ruta de luces gratis: Champs-Élysées, Avenue Montaigne (Dior, n.º 30), Concorde y Place Vendôme (a ~10 min a pie de Tullerías)","v"],
  ["Galeries Lafayette, domingo 11:00–20:00. Terraza gratis y abierta en invierno (con pista de hielo); cierra con lluvia o viento","o","https://haussmann.galerieslafayette.com/en/the-terrace-at-galeries-lafayette/"],
  ["Galeries Lafayette (dom 6): vitrinas afuera, árbol bajo la cúpula, baños y cafetería en el piso 6","v"],
  ["Pedir reembolso de impuestos (tax free) en Galeries Lafayette con pasaporte si la compra supera el mínimo","v"],
  ["Torre Eiffel: destella 5 min al inicio de cada hora desde el anochecer; en invierno el último es a las 23:00","o","https://www.toureiffel.paris/fr/le-monument/illuminations"],
  ["Notre-Dame: entrada gratis; reserva opcional solo en el sitio o la app oficial, abre como máximo 2 días antes. No pagar a terceros","o","https://www.notredamedeparis.fr/visiter/reserver-gratuitement/"],
  ["Sainte-Chapelle: menores de 18 gratis, adultos €22, 9:00–17:00 en invierno; reservar horario también para la niña","o","https://www.sainte-chapelle.fr/visiter/informations-pratiques"]]],
 ["Comer y beber", [
  ["Chocolate caliente: Carette (Trocadéro, dom 6) · Angelina (rue de Rivoli, junto a Tullerías, lun 7) · La Jacobine (Odéon, lun 7) · Cyril Lignac","v"],
  ["En los mercados: raclette, tartiflette, crepe de Nutella y banana, gofres, castañas, vin chaud y chocolate caliente para la niña","v"],
  ["Platos de invierno en bistró: coq au vin, cassoulet, choucroute, tarte tatin, profiteroles","v"],
  ["Mercados locales: galette-saucisse y comida casera; en Aligre (mar 8) desayuno con pan, quesos y frutas","v"],
  ["Comer barato: supermercados tipo Franprix tienen comida lista y microondas","v"],
  ["Chocolates de regalo (Jacques Genin, Patrick Roger, À la Mère de Famille): comprarlos al final de París para que lleguen frescos","v"]]],
 ["Avisos", [
  ["En Francia el paracetamol y el ibuprofeno solo se venden en farmacia, detrás del mostrador: traerlos de casa","o","https://ansm.sante.fr/dossiers-thematiques/les-anti-inflammatoires-non-steroidiens-ains-ibuprofene-ketoprofene-acide-acetylsalicylique"],
  ["Baños públicos de pago (~€2) cerca de Notre-Dame; usar los de museos, tiendas grandes y cafés","v"]]]
]],
munich: ["Múnich", [
 ["Moverse", [
  ["Aeropuerto → Hauptbahnhof: S-Bahn S1 o S8, cada 10 min, ~40–45 min. Billete zona M–5: Airport-City-Day-Ticket o Gruppen-Tageskarte M–5 (€32,60, hasta 5 personas)","o","https://www.mvv-muenchen.de/tickets-abos-preise/airport-city-day-ticket/"],
  ["Con maletas y cansancio después de las 20:00, el taxi es la alternativa","s"],
  ["Desde 2026, niños de 6 a 14 años viajan gratis con la Single-Tageskarte de un adulto; menores de 6 siempre gratis","o","https://www.mvv-muenchen.de/tickets-abos-preise/single-tageskarte/"],
  ["Tren del sáb 12 sale de München Hauptbahnhof, a pocos minutos a pie del hotel","o"]]],
 ["Mercados", [
  ["Christkindlmarkt de Marienplatz: 20 nov – 24 dic 2026, lun–sáb 10–21, dom 10–20","o","https://www.christkindlmarkt-muenchen.de/en/home"],
  ["Canto navideño frente a San Miguel: miércoles 9 dic, 16:30, ~30 min, gratis","o","https://www.christkindlmarkt-muenchen.de/en/home"],
  ["Märchenbazar: 26 nov – 28 dic 2026, Olympiapark Sur (Spiridon-Louis-Ring 100); viernes 14–23; entrada libre","o","https://maerchenbazar.de/"],
  ["Weihnachtsdorf de la Residenz: 16 nov – 22 dic · Mercado Medieval de Wittelsbacherplatz: 20 nov – 23 dic","o","https://www.muenchen.travel/artikel/maerkte-feste/weihnachtsmaerkte-in-muenchen"],
  ["Tollwood en Theresienwiese: 24 nov – 23 dic 2026; lun–vie desde las 14:00; entrada libre (salvo carpas con espectáculo)","o","https://www.tollwood.de/en/besucherinformationen/"],
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
 ["Horarios clave", [
  ["Glockenspiel: 11:00 y 12:00","o","https://www.muenchen.de/sehenswuerdigkeiten/glockenspiel"],
  ["LEGO Store: lun–sáb 10:00–20:00, cerrado domingo","o","https://www.lego.com/de-de/stores/store/munchen-zentrum"],
  ["Viktualienmarkt: lun–sáb, cerrado domingo; en invierno puestos seguros 10–17","o"],
  ["Deutsches Museum: 9–17; Kinderreich 9:00–16:30 (3–8 años); familia €40, compra online","o","https://www.deutsches-museum.de/museumsinsel/ausstellung/kinderreich"],
  ["Nymphenburg: 10–16 en invierno; solo con entrada con horario (€10 adulto, menores gratis)","o","https://www.schloss-nymphenburg.de/deutsch/tourist/oeffn.htm"],
  ["BMW Welt: gratis; BMW Museum €38 familia, cerrado lunes","o","https://www.bmw-welt.com/en/index.html"]]],
 ["Decisiones pendientes", [
  ["Himmelswerkstatt: gratis, 6–12 años, sin padres, no requiere idioma común. Sesiones 14:30–16:00 o 16:30–18:00. Reserva abre 10 días antes (29 nov)","o","https://www.kindermuseum-muenchen.de/"],
  ["Mercado de la Residenz o Medieval (mié 9)","s"],
  ["BMW Welt basta, salvo interés especial en el BMW Museum","s"],
  ["Elegir y reservar la cena bávara","s"]]]
]],
milan: ["Milán", [
 ["Llegada (sáb 12)", [
  ["Llegada a Milano Centrale a las 17:15","o"],
  ["De Milano Centrale a Cadorna: metro M2 (verde), directo, sin cambios","o","https://www.atm.it/"]]],
 ["Plan", [
  ["Itinerario pendiente: Duomo, Castello Sforzesco (junto a Cadorna), Brera y mercados navideños","s"],
  ["Excursiones posibles: lago de Como, Bérgamo, Turín o los Alpes; elegir 1–2 días","s"]]],
 ["Salida (sáb 19)", [
  ["Malpensa Express desde Cadorna llega a T2: ~43 min, cada 30 min","o","https://www.malpensaexpress.it/en/lines-and-timetable/how-to-reach-malpensa/reaching-terminal-2/"],
  ["Entrega de maletas 12:30–14:30 en Malpensa T2: tomar el tren hacia las 12:30","o"],
  ["Check-in online de easyJet: de 30 días a 2 h antes (desde el 19 nov); 3 maletas de 23 kg + 1 bolso bajo el asiento por persona","o"],
  ["Confirmar hora de salida del apartamento y si se pueden dejar maletas","c"]]]
]],
equipaje: ["Equipaje", [
 ["Ropa", [
  ["Abrigo largo impermeable con capucha · capas térmicas · gorro y bufanda","v"],
  ["Guantes táctiles para usar el teléfono","v"],
  ["Calzado impermeable con buen agarre (hielo y charcos) · medias térmicas","v"]]],
 ["Salud y bolso del día", [
  ["Medicinas: paracetamol, ibuprofeno, pastillas para la garganta, y las personales (en Francia solo en farmacia)","o"],
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
 ["Disneyland: entradas 1 día / 2 parques, sáb 5 dic","https://www.disneylandparis.com/",true],
 ["Torre Eiffel: cima por ascensor, dom 6 a las 10:30","https://www.toureiffel.paris/en"],
 ["Sainte-Chapelle: lun 7 a las 10:00 (2 adultos + 1 gratis)","https://www.sainte-chapelle.fr/en/"],
 ["Notre-Dame: reserva gratuita opcional (abre máx. 2 días antes)","https://www.notredamedeparis.fr/visiter/reserver-gratuitement/"],
 ["Disney: restaurante con mesa (opcional)",""],
 ["Comprar 3 tarjetas Navigo Easy al llegar a CDG",""],
 ["Himmelswerkstatt: reservar el 29 nov (si se decide)","https://www.kindermuseum-muenchen.de/"],
 ["Deutsches Museum: entradas",""],
 ["Múnich: cena bávara reservada",""],
 ["Nymphenburg: entrada con horario (obligatoria si se visita)","https://www.schloss-nymphenburg.de/"],
 ["easyJet: check-in online desde el 19 nov",""],
 ["Hotel cerca de CDG para el 19 dic",""]
];

function load(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
const state = Object.assign({tab:"viaje",done:{},sec:-1}, load());
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

const style=document.createElement("style");
style.textContent='.gd .dz-head,.gd .dz-tabs{background:#16324a}.gd .dz-kicker{color:#f2c9a5}.gd .dz-tabs button{border-color:#4d6b85;color:#dbe7f1}.gd .dz-tabs button.on{color:#16324a}.gd-tag{display:inline-block;font-size:10px;font-weight:800;border-radius:6px;padding:2px 6px;color:#fff;margin-right:6px;vertical-align:1px}.gd-item{font-size:13px;line-height:1.55;color:#33415a}.gd-item a{font-weight:700;color:#16324a;margin-left:4px}.gd-legend{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}.gd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}.gd-tile{display:flex;flex-direction:column;align-items:flex-start;gap:6px;text-align:left;background:#fff;border:1px solid #e3e0ef;border-radius:14px;padding:14px;min-height:118px;color:#16324a;box-shadow:0 2px 8px #16324a0d}.gd-tile:active{transform:scale(.98)}.gd-ico{font-size:26px;line-height:1}.gd-tt{font-size:14px;font-weight:800;line-height:1.3}.gd-sub{font-size:11px;color:#6b7a8c;font-weight:700;margin-top:auto}.gd-back{margin-bottom:10px}.gd-h{display:flex;align-items:center;gap:10px;font-family:Georgia,serif;font-size:22px;color:#16324a;margin:4px 2px 10px}.gd-h .gd-ico{font-size:28px}';
document.head.appendChild(style);
const shell=document.createElement("section");shell.className="dz gd";shell.hidden=true;shell.setAttribute("aria-label","Guía del viaje");
shell.innerHTML='<div class="dz-head"><div><div class="dz-kicker">Familia · Europa 2026</div><h2>Guía del viaje</h2></div><button type="button" class="dz-close" aria-label="Volver al mapa">← Mapa</button></div><div class="dz-tabs">'+Object.keys(TABS).map(k=>'<button type="button" data-gtab="'+k+'">'+TABS[k][0]+'</button>').join("")+'</div><div class="dz-body"></div>';
document.body.appendChild(shell);
const body=shell.querySelector(".dz-body");
function close(){shell.hidden=true;document.body.style.overflow="";}
// History: opening the guide and opening a topic each add one step, so the phone's back button walks back
function goBack(){if(history.state&&String(history.state.fi||"").startsWith("guide"))history.back();else if(state.sec>=0){state.sec=-1;save();draw();}else close();}
shell.querySelector(".dz-close").onclick=()=>{if(state.sec>=0&&history.state&&history.state.fi==="guide-sec"){history.go(-2);}else goBack();};
window.addEventListener("popstate",()=>{if(shell.hidden)return;const f=history.state&&history.state.fi;if(f==="guide"){state.sec=-1;save();draw();body.scrollTop=0;}else if(f!=="guide-sec")close();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!shell.hidden)goBack();});
shell.querySelectorAll("[data-gtab]").forEach(b=>b.onclick=()=>{state.tab=b.dataset.gtab;if(state.sec>=0&&history.state&&history.state.fi==="guide-sec"){history.back();return;}state.sec=-1;save();draw();body.scrollTop=0;});
if(history.state&&history.state.fi)history.replaceState(null,"");

const ICONS={"Días de traslado (horarios locales)":"✈️","Alojamiento":"🏨","Reservas y pendientes":"✅","Moverse":"🚇","Mercados y luces de Navidad":"🎄","Mercados":"🎄","Comer y beber":"☕","Avisos":"⚠️","Horarios clave":"🕘","Decisiones pendientes":"🤔","Llegada (sáb 12)":"🚆","Plan":"🗺️","Salida (sáb 19)":"🧳","Ropa":"🧥","Salud y bolso del día":"💊","Electricidad y documentos":"🔌","Apps para instalar":"📱"};
function tag(t){const x=TAGS[t]||TAGS.s;return '<span class="gd-tag" style="background:'+x[1]+'">'+x[0]+'</span>';}
function checksDone(){return CHECKS.filter((c,i)=>c[2]||state.done[i]).length;}
function drawTiles(){
 let h='<div class="dz-note">Resumen del viaje: planes de la familia, reservas y consejos de videos. Etiquetas:<div class="gd-legend">'+Object.keys(TAGS).map(tag).join("")+'</div>Lo marcado <b>Confirmar</b> o <b>Video</b> no es dato oficial: verificar antes de depender de ello.</div><div class="gd-grid">';
 TABS[state.tab][1].forEach((sec,i)=>{
  const sub=sec[1]==="CHECK"?checksDone()+' de '+CHECKS.length+' listos':sec[1].length+(sec[1].length===1?' dato':' datos');
  h+='<button type="button" class="gd-tile" data-sec="'+i+'"><span class="gd-ico">'+(ICONS[sec[0]]||"📌")+'</span><span class="gd-tt">'+esc(sec[0])+'</span><span class="gd-sub">'+sub+'</span></button>';
 });
 body.innerHTML=h+'</div>';
 body.querySelectorAll("[data-sec]").forEach(b=>b.onclick=()=>{state.sec=Number(b.dataset.sec);save();history.pushState({fi:"guide-sec"},"");draw();body.scrollTop=0;});
}
function drawSection(sec){
 let h='<button type="button" class="dz-btn gd-back" data-back>← Temas</button><div class="gd-h"><span class="gd-ico">'+(ICONS[sec[0]]||"📌")+'</span>'+esc(sec[0])+'</div>';
 if(sec[1]==="CHECK"){
  h+='<div class="dz-note" style="margin:0 0 6px">'+checksDone()+' de '+CHECKS.length+' listos · se guarda solo en este teléfono</div>';
  CHECKS.forEach((c,i)=>{h+='<div class="dz-row dz-prep"><label><input type="checkbox" data-gcheck="'+i+'"'+(c[2]||state.done[i]?" checked":"")+(c[2]?" disabled":"")+'><span>'+esc(c[0])+(c[2]?' <b style="color:#2e7d4f">· Comprado</b>':'')+'</span></label>'+(c[1]?'<a target="_blank" rel="noopener" href="'+c[1]+'">Abrir ↗</a>':'')+'</div>';});
 }else{
  sec[1].forEach(it=>{h+='<div class="dz-row"><div class="dz-main gd-item">'+tag(it[1])+esc(it[0])+(it[2]?'<a target="_blank" rel="noopener" href="'+it[2]+'">Abrir ↗</a>':'')+'</div></div>';});
 }
 body.innerHTML=h;
 body.querySelector("[data-back]").onclick=goBack;
 body.querySelectorAll("[data-gcheck]").forEach(c=>c.onchange=()=>{if(c.checked)state.done[c.dataset.gcheck]=true;else delete state.done[c.dataset.gcheck];save();draw();});
}
function draw(){
 shell.querySelectorAll("[data-gtab]").forEach(b=>b.classList.toggle("on",b.dataset.gtab===state.tab));
 const secs=TABS[state.tab][1];
 if(state.sec>=0&&secs[state.sec])drawSection(secs[state.sec]);else drawTiles();
}
window.openGuide=(tab)=>{if(tab&&TABS[tab])state.tab=tab;state.sec=-1;if(shell.hidden)history.pushState({fi:"guide"},"");shell.hidden=false;document.body.style.overflow="hidden";draw();};
const btn=document.getElementById("openGuide");if(btn)btn.onclick=()=>window.openGuide(typeof city!=="undefined"&&TABS[city]?city:undefined);
})();
