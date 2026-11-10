/* Family Itinerary — Disneyland plan for Dec 5. Ride facts come from the official
   "Attractions Accessibility Map" PDFs (March 2026). The # numbers match those maps,
   so the family can find each ride on the official PDF or app. No Disney artwork is used. */
(() => {
"use strict";
const KEY = "fi_disney_v1";
const OFFICIAL_MAP = "https://www.disneylandparis.com/en-int/maps";
const OFFICIAL_SITE = "https://www.disneylandparis.com/";
const TYPES = {big:["Emociones fuertes","#c75a22"],fam:["Familia","#2a7fbf"],kid:["Pequeños","#c2457f"],show:["Show / personajes","#6b52b3"]};
const PRI = ["Imprescindible","Alta","Opcional","Descartado"];

// [id, #, name, land, type, minutes, height, mayFrighten, defaultPriority, note]
const RIDES = [
// ---------------- Disneyland Park ----------------
["p1","1","Disneyland Railroad (vuelta completa)","Disneyland Park · Main Street, U.S.A.","kid",30,"",0,"Opcional","Tren de vapor; estaciones #1 Main Street, #12 Frontierland, #25 Fantasyland y #38 Discoveryland."],
["p2","2","Horse-Drawn Streetcars","Disneyland Park · Main Street, U.S.A.","kid",7,"",0,"Opcional","Tranvía tirado por caballos por Main Street."],
["p3","3","Main Street Vehicles","Disneyland Park · Main Street, U.S.A.","kid",0,"",0,"Opcional","Paseo en auto antiguo o camión de bomberos."],
["p4","4","Statue of Liberty Tableau","Disneyland Park · Main Street, U.S.A.","fam",0,"",0,"Opcional","Galería corta; zona oscura."],
["p13","13","La Cabane des Robinson","Disneyland Park · Adventureland","fam",15,"",0,"Opcional","Casa del árbol; muchos escalones."],
["p14","14","Pirates' Beach","Disneyland Park · Adventureland","kid",0,"máx. 1,40 m",0,"Opcional","Zona de juegos para 3–6 y 7–9 años."],
["p15","15","Le Passage Enchanté d'Aladdin","Disneyland Park · Adventureland","kid",3,"",0,"Opcional","Escenas en miniatura de Aladdín; sin fila larga."],
["p16","16","Indiana Jones et le Temple du Péril","Disneyland Park · Adventureland","big",5,"1,40 m",1,"Descartado","Montaña rusa con giro completo."],
["p17","17","Adventure Isle","Disneyland Park · Adventureland","fam",0,"",0,"Opcional","Cuevas y puentes colgantes; zonas oscuras y mojadas."],
["p18","18","Pirates of the Caribbean","Disneyland Park · Adventureland","fam",10,"",1,"Alta","Barca con 2 bajadas; oscuro y húmedo."],
["p6","6","Phantom Manor","Disneyland Park · Frontierland","fam",7,"",1,"Opcional","Casa embrujada; muy oscura."],
["p7","7","Thunder Mesa Riverboat Landing","Disneyland Park · Frontierland","fam",15,"",0,"Opcional","Paseo tranquilo en barco por el río."],
["p8b","8b","Legends of the Wild West","Disneyland Park · Frontierland","fam",0,"",0,"Opcional","Fuerte del Oeste para recorrer a pie; escaleras."],
["p9","9","Big Thunder Mountain","Disneyland Park · Frontierland","big",5,"1,02 m",1,"Alta","Tren minero con giros; la favorita de muchos. Solo si llega a la altura y le interesa."],
["p10","10","Frontierland Playground","Disneyland Park · Frontierland","kid",0,"",0,"Opcional","Zona de juegos (4–8 años)."],
["p11","11","The Lion King: Rhythms of the Pride Lands","Disneyland Park · Frontierland","show",30,"",0,"Opcional","Show de 30 min; horarios en la app."],
["p19","19","Sleeping Beauty Castle","Disneyland Park · Fantasyland","fam",0,"",0,"Alta","Galería del castillo con vitrales; se sube por escaleras."],
["p20","20","La Tanière du Dragon","Disneyland Park · Fantasyland","fam",0,"",1,"Alta","El dragón bajo el castillo; oscuro y con humo."],
["p21","21","Blanche-Neige et les Sept Nains","Disneyland Park · Fantasyland","fam",3,"",1,"Opcional","Paseo oscuro con la bruja."],
["p22","22","Les Voyages de Pinocchio","Disneyland Park · Fantasyland","fam",3,"",1,"Opcional","Paseo oscuro corto."],
["p23","23","Le Carrousel de Lancelot","Disneyland Park · Fantasyland","kid",3,"",0,"Opcional","Carrusel clásico."],
["p24","24","Peter Pan's Flight","Disneyland Park · Fantasyland","kid",5,"",0,"Alta","Barco volador sobre Londres; fila larga: temprano o tarde."],
["p26","26","Meet Mickey Mouse","Disneyland Park · Fantasyland","show",0,"",0,"Opcional","Foto con Mickey; reserva o fila en la app."],
["p27","27","Dumbo the Flying Elephant","Disneyland Park · Fantasyland","kid",3,"",0,"Opcional","Carrusel aéreo."],
["p28","28","Alice's Curious Labyrinth","Disneyland Park · Fantasyland","kid",0,"",0,"Opcional","Laberinto hasta el castillo de la Reina de Corazones."],
["p29","29","Mad Hatter's Tea Cups","Disneyland Park · Fantasyland","fam",3,"",0,"Opcional","Tazas giratorias."],
["p30","30","Casey Jr. – le Petit Train du Cirque","Disneyland Park · Fantasyland","kid",3,"",0,"Opcional","Trencito con curvas."],
["p31","31","Le Pays des Contes de Fées","Disneyland Park · Fantasyland","kid",5,"",0,"Opcional","Barca tranquila entre cuentos en miniatura."],
["p32","32","\"it's a small world\"","Disneyland Park · Fantasyland","kid",10,"",0,"Alta","Barca por los países del mundo; desfile de juguetes en la fachada cada 15 min."],
["p33","33","Princess Pavilion","Disneyland Park · Fantasyland","show",0,"",0,"Opcional","Foto con una princesa; reserva en la app."],
["p34","34","Royal Castle Stage","Disneyland Park · Fantasyland","show",0,"",0,"Opcional","Escenario frente al castillo; horarios en la app."],
["p35","35","Buzz Lightyear Laser Blast","Disneyland Park · Discoveryland","fam",5,"",0,"Alta","Disparar con láser y sumar puntos."],
["p36","36","Orbitron","Disneyland Park · Discoveryland","kid",3,"",0,"Opcional","Naves que giran en altura."],
["p37","37","Vidéopolis Theatre","Disneyland Park · Discoveryland","show",0,"",0,"Opcional","Escenario; horarios en la app."],
["p39","39","Star Tours: l'Aventure Continue","Disneyland Park · Discoveryland","big",7,"1,02 m",1,"Opcional","Simulador 3D con movimientos bruscos."],
["p40","40","Starport: Meet a Star Wars character","Disneyland Park · Discoveryland","show",0,"",1,"Opcional","Foto con personaje de Star Wars; reserva en la app."],
["p41","41","Mickey's PhilharMagic","Disneyland Park · Discoveryland","fam",10,"",0,"Opcional","Película 3D con Donald; buena pausa bajo techo."],
["p42","42","Les Mystères du Nautilus","Disneyland Park · Discoveryland","fam",5,"",0,"Opcional","Recorrido por el submarino; oscuro."],
["p43","43","Star Wars Hyperspace Mountain","Disneyland Park · Discoveryland","big",5,"1,20 m",1,"Descartado","Montaña rusa a oscuras con lanzamiento e inversiones."],
["p44","44","Autopia","Disneyland Park · Discoveryland","fam",7,"0,81 m (1,32 m para conducir sola)",0,"Opcional","Manejar un auto en pista; un adulto conduce si no llega a 1,32 m."],
// ---------------- Disney Adventure World ----------------
["a21","21","Frozen Ever After","Disney Adventure World · World of Frozen","fam",5,"",1,"Alta","Barca por Arendelle con Anna, Elsa y Olaf. Nueva: ir a primera hora (sugerencia)."],
["a22","22","Rencontre Royale (Anna y Elsa)","Disney Adventure World · World of Frozen","show",0,"",0,"Alta","Foto con Anna y Elsa en el castillo; reserva necesaria en la app."],
["a20","20","Raiponce Tangled Spin","Disney Adventure World · Adventure Way","fam",3,"",0,"Alta","Barcas con farol que giran; efecto centrífugo."],
["a12","12","Ratatouille: L'Aventure Totalement Toquée de Rémy","Disney Adventure World · Worlds of Pixar","fam",5,"",0,"Alta","Paseo 3D en la cocina de Remy."],
["a11","11","Crush's Coaster","Disney Adventure World · Worlds of Pixar","big",5,"1,07 m",1,"Opcional","Montaña rusa giratoria a oscuras; fila muy larga."],
["a13","13","Cars ROAD TRIP","Disney Adventure World · Worlds of Pixar","fam",7,"",1,"Opcional","Paseo con efectos de agua y fuego."],
["a10","10","Cars Quatre Roues Rallye","Disney Adventure World · Worlds of Pixar","kid",3,"",0,"Opcional","Autos que giran."],
["a14","14","Toy Soldiers Parachute Drop","Disney Adventure World · Worlds of Pixar","fam",3,"0,81 m",1,"Opcional","Paracaídas de 28 m."],
["a15","15","Slinky Dog Zigzag Spin","Disney Adventure World · Worlds of Pixar","kid",3,"",0,"Opcional","Vueltas suaves en círculo."],
["a16","16","RC Racer","Disney Adventure World · Worlds of Pixar","big",3,"1,20 m",1,"Descartado","Medio tubo a alta velocidad."],
["a18","18","Spider-Man W.E.B. Adventure","Disney Adventure World · Avengers Campus","fam",5,"",0,"Alta","Juego interactivo en 3D lanzando telarañas."],
["a17","17","Avengers Assemble: Flight Force","Disney Adventure World · Avengers Campus","big",3,"1,20 m",1,"Descartado","Montaña rusa con lanzamiento e inversiones."],
["a19","19","Training Center (Avengers)","Disney Adventure World · Avengers Campus","show",0,"",0,"Opcional","Foto con un Vengador; reserva necesaria."],
["a8","8","The Twilight Zone Tower of Terror","Disney Adventure World · World Premiere Plaza","big",5,"1,02 m",1,"Descartado","Caída libre en ascensor; puede asustar mucho."],
["a4","4","Les Tapis Volants – Flying Carpets Over Agrabah","Disney Adventure World · World Premiere Plaza","kid",3,"",0,"Opcional","Alfombras voladoras (carrusel)."],
["a3","3","Mickey and the Magician (Animagique Theater)","Disney Adventure World · World Premiere Plaza","show",30,"",0,"Opcional","Show de 30 min; horarios en la app."],
["a5","5","Together: une Aventure Musicale Pixar","Disney Adventure World · World Premiere Plaza","show",15,"",0,"Opcional","Musical Pixar; se llena 30 min antes."],
["a6","6","Stitch Live!","Disney Adventure World · World Premiere Plaza","show",15,"",0,"Opcional","Show interactivo con Stitch (inglés o francés)."]
];

// Christmas entertainment (video tips + Disney announcements). Times change daily: always check the app.
const SHOWS = [
["Mickey's Dazzling Christmas Parade","Disneyland Park","El desfile navideño; el momento más concurrido. Llegar 30–60 min antes."],
["Encendido del árbol de Navidad","Disneyland Park · Town Square","Al anochecer, con coro y Mickey. Hora en la app."],
["Let's Sing Christmas","Disneyland Park","Canto navideño con Mickey, Goofy y amigos. Muy recomendado en los videos."],
["Princess Waltz","Disneyland Park · frente al castillo","Princesas bailando; varias veces al día."],
["A Celebration in Arendelle","Disney Adventure World · World of Frozen","Show en el fiordo frente al castillo de Arendelle."],
["Disney Tales of Magic","Disneyland Park · castillo","Show nocturno de cierre con fuegos y proyecciones."],
["Disney Cascade of Lights","Disney Adventure World · lago","Show nocturno con fuegos, agua y drones."],
["Chalets navideños de comida","Detrás del castillo, Worlds of Pixar y Adventure Way","Chocolate caliente, gofres, crepes y dulces de temporada."]
];

const PREP = [
["Comprar entrada fechada · recomendación inicial: 1 día / 2 parques", OFFICIAL_SITE],
["Si quieren comida con mesa, reservar ya (abre 60 días antes). Revisar también turnos de \"almuerzo\" hacia las 17:00", ""],
["Descargar la app Disneyland Paris y guardar en el teléfono los 2 PDF del mapa oficial", OFFICIAL_MAP],
["Medir la altura de la niña y descartar lo que no aplique", ""],
["Premier Access: comprar \"One\" por atracción en el día solo si la espera es alta; no comprar Ultimate de entrada", ""],
["Fotos con personajes: reservar en la app el mismo día (fila virtual gratuita)", ""],
["Ruta desde el hotel: confirmar RER A hasta Marne-la-Vallée – Chessy en Bonjour RATP", ""],
["Medicinas desde casa: paracetamol, ibuprofeno, pastillas para la garganta (no hay farmacia en los parques)", ""],
["Ropa: abrigo largo impermeable con capucha, guantes táctiles, calzado impermeable con agarre, capas", ""],
["Bolso del día: batería externa, snacks, agua, gel o toallitas, capturas de las entradas", ""],
["El día: revisar horario del parque (puede cerrar antes por eventos privados) y horarios de shows", ""]
];

// ---------------- State ----------------
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
const state = Object.assign({pri:{},done:{},prep:{},onlyTop:false,tab:"rides"}, load());
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
function pri(r){return state.pri[r[0]]||r[8];}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

// ---------------- UI ----------------
const css = `
.dz{position:fixed;inset:0;z-index:60;background:#f6f4fb;display:flex;flex-direction:column;font-family:Inter,system-ui,sans-serif;color:#1f2a44}
.dz[hidden]{display:none}
.dz-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:16px 18px 10px;background:#2c1f5c;color:#fff}
.dz-kicker{font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#d9cbff}
.dz-head h2{font-family:Georgia,serif;font-size:26px;margin:4px 0 0;font-weight:600}
.dz-close{border:0;background:#fff;color:#2c1f5c;width:38px;height:38px;border-radius:50%;font-size:24px;line-height:1;flex-shrink:0}
.dz-tabs{display:flex;gap:6px;padding:0 14px 12px;background:#2c1f5c;overflow-x:auto}
.dz-tabs button{border:1px solid #6c5aa6;background:transparent;color:#e4dcff;border-radius:20px;padding:8px 13px;font-size:12px;font-weight:700;white-space:nowrap}
.dz-tabs button.on{background:#fff;color:#2c1f5c;border-color:#fff}
.dz-body{flex:1;overflow-y:auto;padding:14px 14px 40px;max-width:820px;width:100%;margin:0 auto}
.dz-note{font-size:12px;color:#5d6680;line-height:1.55;background:#fff;border:1px solid #e3e0ef;border-radius:12px;padding:11px 13px;margin-bottom:12px}
.dz-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px}
.dz-sum{font-size:12px;font-weight:700;color:#3d3270;flex:1;min-width:180px}
.dz-btn{border:1px solid #cbc3e6;background:#fff;color:#3d3270;border-radius:9px;padding:9px 11px;font-size:12px;font-weight:700;text-decoration:none}
.dz-btn.on{background:#3d3270;color:#fff;border-color:#3d3270}
.dz-land{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#6b5fa0;margin:18px 4px 7px}
.dz-row{display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid #e6e2f1;border-radius:12px;padding:11px;margin:7px 0}
.dz-row.done{opacity:.55}.dz-row.done .dz-name{text-decoration:line-through}
.dz-row input[type=checkbox]{width:22px;height:22px;margin:2px 0 0;flex-shrink:0;accent-color:#3d3270}
.dz-main{flex:1;min-width:0}
.dz-name{font-size:14px;font-weight:700;line-height:1.3}
.dz-num{display:inline-block;min-width:30px;font-size:11px;font-weight:800;color:#fff;background:#3d3270;border-radius:6px;padding:2px 5px;margin-right:5px;text-align:center}
.dz-meta{font-size:11px;color:#69718a;margin-top:4px;line-height:1.5}
.dz-type{font-weight:800}
.dz-warn{color:#a25a00;font-weight:700}
.dz-txt{font-size:12px;color:#4b546c;margin-top:4px;line-height:1.5}
.dz-row select{border:1px solid #cbc3e6;border-radius:8px;padding:7px 4px;font-size:12px;background:#fff;color:#2c1f5c;max-width:118px;flex-shrink:0}
.dz-row select.p0{background:#3d3270;color:#fff}.dz-row select.p1{background:#e9e3fb}
.dz-show b{font-size:14px}.dz-show small{display:block;font-size:11px;color:#6b5fa0;font-weight:700;margin:2px 0 4px}
.dz-prep label{display:flex;gap:10px;align-items:flex-start;font-size:13px;line-height:1.5;cursor:pointer;flex:1}
.dz-prep a{font-size:12px;font-weight:700;color:#3d3270;white-space:nowrap}
@media(max-width:760px){.dz-head h2{font-size:22px}.dz-row select{max-width:104px}}
`;
const style=document.createElement("style");style.textContent=css;document.head.appendChild(style);
const shell=document.createElement("section");shell.className="dz";shell.hidden=true;shell.setAttribute("aria-label","Plan Disneyland");
shell.innerHTML='<div class="dz-head"><div><div class="dz-kicker">Sáb. 5 dic. · Disneyland París</div><h2>Plan Disneyland</h2></div><button type="button" class="dz-close" aria-label="Volver a París">×</button></div><div class="dz-tabs"><button type="button" data-tab="rides">Atracciones</button><button type="button" data-tab="shows">Navidad y shows</button><button type="button" data-tab="prep">Preparación</button></div><div class="dz-body"></div>';
document.body.appendChild(shell);
const body=shell.querySelector(".dz-body");
shell.querySelector(".dz-close").onclick=()=>{shell.hidden=true;document.body.style.overflow="";};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!shell.hidden){shell.hidden=true;document.body.style.overflow="";}});
shell.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;save();draw();});

function rideRow(r){
 const p=pri(r),t=TYPES[r[4]],done=!!state.done[r[0]];
 const meta=['<span class="dz-type" style="color:'+t[1]+'">'+t[0]+'</span>'];
 if(r[5])meta.push(r[5]+" min");
 if(r[6])meta.push("Altura: "+esc(r[6]));
 if(r[7])meta.push('<span class="dz-warn">⚠ puede asustar</span>');
 const opts=PRI.map((x,k)=>'<option value="'+x+'"'+(x===p?" selected":"")+'>'+x+'</option>').join("");
 return '<div class="dz-row'+(done?" done":"")+'"><input type="checkbox" data-done="'+r[0]+'"'+(done?" checked":"")+' aria-label="Hecho: '+esc(r[2])+'"><div class="dz-main"><div class="dz-name"><span class="dz-num">#'+r[1]+'</span>'+esc(r[2])+'</div><div class="dz-meta">'+meta.join(" · ")+'</div><div class="dz-txt">'+esc(r[9])+'</div></div><select data-pri="'+r[0]+'" class="p'+PRI.indexOf(p)+'" aria-label="Prioridad">'+opts+'</select></div>';
}

function drawRides(){
 const top=RIDES.filter(r=>pri(r)==="Imprescindible").length,high=RIDES.filter(r=>pri(r)==="Alta").length;
 const done=RIDES.filter(r=>state.done[r[0]]).length;
 let h='<div class="dz-note">Los números <b>#</b> son los del mapa oficial de cada parque (versión marzo 2026): búsquenlos en el PDF o en la app. Alturas y avisos según ese mapa. Prioridades y marcas se guardan solo en este teléfono. Las prioridades iniciales son sugerencias: ajústenlas en familia.<br><b>Alturas mínimas:</b> 1,02 m (Big Thunder, Star Tours, Tower of Terror) · 1,07 m (Crush) · 1,20 m (Hyperspace, RC Racer, Flight Force) · 1,40 m (Indiana Jones).</div>';
 h+='<div class="dz-bar"><div class="dz-sum">'+top+' imprescindibles · '+high+' altas · '+done+' hechas</div><button type="button" class="dz-btn'+(state.onlyTop?" on":"")+'" data-only>Solo prioridades</button><a class="dz-btn" target="_blank" rel="noopener" href="'+OFFICIAL_MAP+'">Mapa oficial ↗</a></div>';
 let land="";
 RIDES.forEach(r=>{
  const p=pri(r);
  if(state.onlyTop&&p!=="Imprescindible"&&p!=="Alta")return;
  if(r[3]!==land){land=r[3];h+='<div class="dz-land">'+esc(land)+'</div>';}
  h+=rideRow(r);
 });
 body.innerHTML=h;
 body.querySelector("[data-only]").onclick=()=>{state.onlyTop=!state.onlyTop;save();draw();};
 body.querySelectorAll("[data-done]").forEach(c=>c.onchange=()=>{if(c.checked)state.done[c.dataset.done]=true;else delete state.done[c.dataset.done];save();draw();});
 body.querySelectorAll("[data-pri]").forEach(s=>s.onchange=()=>{state.pri[s.dataset.pri]=s.value;save();draw();});
}

function drawShows(){
 let h='<div class="dz-note">Entretenimiento navideño 2026 según anuncios y videos de viajeros: <b>los horarios cambian cada día, confirmarlos en la app</b>. Llegar 30–60 min antes a desfiles y shows populares. Un desfile en un parque y un show nocturno en el otro pueden coincidir: elegir según los horarios del día.</div>';
 SHOWS.forEach(s=>{h+='<div class="dz-row dz-show"><div class="dz-main"><b>'+esc(s[0])+'</b><small>'+esc(s[1])+'</small><div class="dz-txt">'+esc(s[2])+'</div></div></div>';});
 body.innerHTML=h;
}

function drawPrep(){
 const n=PREP.filter((_,i)=>state.prep[i]).length;
 let h='<div class="dz-note">Checklist antes y durante el día. Consejos del mapa oficial y de videos de viajeros; precios y horarios por confirmar. '+n+' de '+PREP.length+' listos.</div>';
 PREP.forEach((x,i)=>{h+='<div class="dz-row dz-prep"><label><input type="checkbox" data-prep="'+i+'"'+(state.prep[i]?" checked":"")+'><span>'+esc(x[0])+'</span></label>'+(x[1]?'<a target="_blank" rel="noopener" href="'+x[1]+'">Abrir ↗</a>':'')+'</div>';});
 body.innerHTML=h;
 body.querySelectorAll("[data-prep]").forEach(c=>c.onchange=()=>{if(c.checked)state.prep[c.dataset.prep]=true;else delete state.prep[c.dataset.prep];save();draw();});
}

function draw(){
 shell.querySelectorAll("[data-tab]").forEach(b=>b.classList.toggle("on",b.dataset.tab===state.tab));
 const y=body.scrollTop;
 if(state.tab==="shows")drawShows();else if(state.tab==="prep")drawPrep();else drawRides();
 body.scrollTop=y;
}

window.openDisney=()=>{shell.hidden=false;document.body.style.overflow="hidden";draw();};
})();
