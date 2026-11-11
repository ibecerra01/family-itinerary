/* Family Itinerary — rich stop cards. No Google API key needed here. */
(() => {
"use strict";
const PLACES = {
"Aeropuerto CDG":{wiki:"Charles de Gaulle Airport",kind:"Aeropuerto",duration:"Variable",tips:"Contemplar migración, recogida de equipaje y tiempo de traslado. Verificar terminal y transporte el mismo día.",reserve:"Vuelo confirmado; traslado por organizar"},
"Le Ruisseau":{wiki:"Saint-Mandé",kind:"Hotel · Saint-Mandé",duration:"Según programa",tips:"Dirección: 137 Avenue Gallieni, 94160 Saint-Mandé (a ~5 min a pie del metro Saint-Mandé, línea 1). Base para explorar París. La imagen es de Saint-Mandé, no necesariamente del hotel. Preparar abrigos para el día siguiente.",reserve:"Alojamiento reservado",photoLabel:"Imagen de la zona, no del hotel"},
"Decathlon Porte de Montreuil":{wiki:"Decathlon (retailer)",kind:"Compras",duration:"2 h 30 min en el itinerario",tips:"Priorizar capas térmicas, calcetines, guantes, gorros y zapatos resistentes al agua. La fotografía representa la cadena, no necesariamente esta sucursal.",reserve:"No requiere reserva",photoLabel:"Imagen ilustrativa de la cadena"},
"Disneyland París":{wiki:"Disneyland Paris",kind:"Parques temáticos",duration:"Día completo",tips:"Priorizar World of Frozen, Frozen Ever After y algunas atracciones familiares. Llevar entradas fechadas, revisar aplicación oficial y tiempos de espera.",reserve:"Entradas compradas ✓ · 1 día / 2 parques",official:"https://www.disneylandparis.com/"},
"Trocadéro":{wiki:"Trocadéro",kind:"Mirador",duration:"45 min",tips:"Uno de los mejores puntos para fotografiar la Torre Eiffel. Descender por los jardines hacia el puente de Iéna.",reserve:"Acceso exterior libre"},
"Torre Eiffel":{wiki:"Eiffel Tower",kind:"Monumento",duration:"1 h 30 min–2 h (estimado)",tips:"Reserva de ascensor a la cima; como alternativa, segundo piso. Llegar unos 30 minutos antes por seguridad.",reserve:"Entrada por reservar",official:"https://www.toureiffel.paris/en"},
"Almuerzo zona Torre Eiffel":{wiki:"7th arrondissement of Paris",kind:"Comida",duration:"1 h–1 h 30 min (estimado)",tips:"Comer cerca de la Torre Eiffel; Carette Trocadéro queda como alternativa solo si la cola es razonable. Imagen ilustrativa de la zona.",reserve:"Restaurante aún por decidir",photoLabel:"Imagen de la zona, no del restaurante"},
"Sacré-Cœur":{wiki:"Sacré-Cœur, Paris",kind:"Basílica · Montmartre",duration:"45–60 min (estimado)",tips:"La explanada tiene buenas vistas. El barrio incluye pendientes y escalones; ajustar la caminata a la energía familiar.",reserve:"Entrada a la basílica habitualmente libre"},
"Place du Tertre":{wiki:"Place du Tertre",kind:"Plaza",duration:"30–45 min (estimado)",tips:"Zona de artistas y cafés; conviene pasear sin prisa, especialmente por las calles laterales.",reserve:"Sin entrada"},
"Pigalle":{wiki:"Pigalle",kind:"Barrio",duration:"20–40 min (estimado)",tips:"Bajada desde Montmartre hacia la zona de Pigalle. Elegir recorridos sencillos y evitar alargar demasiado la caminata.",reserve:"Sin entrada"},
"Galeries Lafayette Haussmann":{wiki:"Galeries Lafayette Haussmann",kind:"Grandes almacenes",duration:"1–1 h 30 min (estimado)",tips:"Ver la decoración, las vitrinas navideñas y el gran árbol. Terraza panorámica solo si está abierta y el clima acompaña.",reserve:"Acceso a tienda libre; verificar horarios",official:"https://haussmann.galerieslafayette.com/"},
"Sainte-Chapelle":{wiki:"Sainte-Chapelle",kind:"Capilla histórica",duration:"45–60 min (estimado)",tips:"Las vidrieras lucen mejor con luz natural. Llegar a la hora reservada y prever controles.",reserve:"Entradas por reservar",official:"https://www.sainte-chapelle.fr/en/"},
"Notre-Dame":{wiki:"Notre-Dame de Paris",kind:"Catedral",duration:"45–60 min (estimado)",tips:"Entrada gratis. La reserva es opcional, solo en el sitio o la app oficial, y abre como máximo 2 días antes (a veces solo unas horas). No pagar a intermediarios.",reserve:"Gratis · reserva opcional",official:"https://www.notredamedeparis.fr/en/"},
"Mercado navideño Notre-Dame":{wiki:"Square René Viviani",kind:"Mercado navideño",duration:"30–45 min (estimado)",tips:"Ubicado en Square René Viviani, frente a Notre-Dame; combinar con la visita a la catedral. Fechas y horarios sujetos a confirmación.",reserve:"Sin reserva prevista"},
"Barrio Latino y Sena":{wiki:"Latin Quarter, Paris",kind:"Barrio histórico · Comida",duration:"2 h previstas",tips:"Almuerzo y paseo por el Barrio Latino y la orilla del Sena. Au P'tit Grec es una opción si la fila es razonable.",reserve:"Restaurante sin reserva",photoLabel:"Imagen del barrio"},
"Louvre exterior":{wiki:"Louvre Pyramid",kind:"Museo · Exteriores",duration:"1 h 15 min prevista",tips:"Recorrer Cour Carrée, Cour Napoléon, la pirámide y el Arco del Carrusel. No está previsto entrar al museo.",reserve:"Exteriores sin entrada",official:"https://www.louvre.fr/en"},
"Mercado navideño de Tullerías":{wiki:"Tuileries Garden",kind:"Mercado navideño",duration:"Tarde y noche",tips:"Puestos, comida, luces, carrusel y atracciones. Las actividades específicas y horarios deben reconfirmarse.",reserve:"Paseo libre; atracciones podrían cobrar",photoLabel:"Imagen del Jardín de las Tullerías"},
"Marché d'Aligre":{wiki:"Marché d'Aligre",kind:"Mercado local",duration:"2 h",tips:"Recorrer la plaza y el mercado cubierto Beauvau; desayunar y probar productos locales. Verificar puestos abiertos y horarios.",reserve:"Sin entrada"},
"Salida hacia CDG":{wiki:"Charles de Gaulle Airport",kind:"Traslado al aeropuerto",duration:"Salir 14:00–14:15",tips:"Regresar desde Saint-Mandé con equipaje y margen para el vuelo a Múnich de las 18:20.",reserve:"Vuelo confirmado"},
"Aeropuerto de Múnich":{wiki:"Munich Airport",kind:"Aeropuerto",duration:"Llegada ~19:45",tips:"S-Bahn S1 o S8 a Hauptbahnhof, cada 10 min, 40–45 min (billete zona M–5). Alternativa: taxi; con equipaje y cansancio después de las 20:00, el taxi puede compensar.",reserve:"Vuelo confirmado"},
"Hotel (Hauptbahnhof)":{wiki:"München Hauptbahnhof",kind:"Hotel · estación central",duration:"Según programa",tips:"Hotel a pocos minutos a pie de la estación central. Cena sencilla cerca o en la estación.",reserve:"Alojamiento reservado",photoLabel:"Imagen de la estación, no del hotel"},
"Karlsplatz (Stachus)":{wiki:"Karlsplatz (Munich)",kind:"Plaza · calle peatonal",duration:"30 min",tips:"Entrada a la zona peatonal de Neuhauser y Kaufingerstraße.",reserve:"Sin entrada"},
"LEGO Store München":{wiki:"Kaufingerstraße",kind:"Tienda LEGO",duration:"50 min",tips:"Personalizar una minifigura y ver la pared de piezas. Abre lun–sáb 10:00–20:00.",reserve:"No requiere reserva",official:"https://www.lego.com/de-de/stores/store/munchen-zentrum",photoLabel:"Imagen de la calle, no de la tienda"},
"Glockenspiel · Marienplatz":{wiki:"Rathaus-Glockenspiel",kind:"Carillón",duration:"15 min",tips:"En diciembre suena a las 11:00 y 12:00. Llegar unos minutos antes para ver de frente el Nuevo Ayuntamiento.",reserve:"Gratis"},
"Frauenkirche":{wiki:"Frauenkirche, Munich",kind:"Catedral",duration:"30–60 min",tips:"Combinar con calles cercanas sin alargar la caminata.",reserve:"Entrada libre (verificar)"},
"Viktualienmarkt":{wiki:"Viktualienmarkt",kind:"Mercado",duration:"1 h 30 min",tips:"Almuerzo informal; algunos puestos cierran temprano en invierno. Probar Weißwurst antes del mediodía.",reserve:"Sin entrada"},
"Himmelswerkstatt":{wiki:"New Town Hall (Munich)",kind:"Taller navideño infantil · opcional",duration:"90 min",tips:"Gratis, para 6–12 años, sin padres dentro; no requiere idioma común. Sesiones 14:30–16:00 o 16:30–18:00. Punto de encuentro: Rathauspforte junto al Fischbrunnen, 15 min antes.",reserve:"Reserva abre el 29 nov (kindermuseum-muenchen.de)",official:"https://www.kindermuseum-muenchen.de/",photoLabel:"Imagen del Nuevo Ayuntamiento"},
"Canto en San Miguel":{wiki:"St. Michael's Church, Munich",kind:"Canto navideño",duration:"30 min",tips:"Miércoles 9 dic a las 16:30, unos 30 min, con cancioneros gratis.",reserve:"Gratis"},
"Mercado de la Residenz":{wiki:"Munich Residenz",kind:"Mercado navideño",duration:"Tarde y noche",tips:"Patio protegido del viento, ambiente de cuentos. Alternativa: Mercado Medieval de Wittelsbacherplatz. Taza con depósito: devolverla o conservarla.",reserve:"Sin entrada",photoLabel:"Imagen de la Residenz"},
"Deutsches Museum":{wiki:"Deutsches Museum",kind:"Museo de ciencia",duration:"4 h",tips:"Abre 9–17. Ir directo a Kinderreich (Kids' Kingdom, 3–8 años, 9:00–16:30) y elegir solo dos áreas más.",reserve:"Entrada por comprar · familia €40",official:"https://www.deutsches-museum.de/"},
"Eisbach":{wiki:"Eisbach (Isar)",kind:"Surf urbano · opcional",duration:"20–30 min",tips:"Parada corta solo si el clima acompaña; si no, pausa en el hotel antes de Tollwood.",reserve:"Gratis"},
"Tollwood":{wiki:"Theresienwiese",kind:"Festival de invierno",duration:"2 h 30 min",tips:"Carpas iluminadas, comida, música y programa infantil; la mayoría gratis.",reserve:"Sin entrada",official:"https://www.tollwood.de/",photoLabel:"Imagen de Theresienwiese"},
"Palacio de Nymphenburg":{wiki:"Nymphenburg Palace",kind:"Palacio",duration:"2 h",tips:"Salón principal, apartamentos y Galería de las Bellezas. En invierno fuentes y pabellones cerrados. Menores de 18 entran gratis.",reserve:"Entrada con horario obligatoria · €10 adulto, menores gratis · 10–16",official:"https://www.schloss-nymphenburg.de/"},
"BMW Welt":{wiki:"BMW Welt",kind:"Exposición",duration:"1 h 30 min",tips:"Exposición gratuita; el BMW Museum es aparte y de pago.",reserve:"Gratis"},
"Olympiapark":{wiki:"Olympiapark, Munich",kind:"Parque",duration:"1 h",tips:"Paseo corto antes de que oscurezca (~16:20).",reserve:"Gratis"},
"Märchenbazar":{wiki:"Olympiapark, Munich",kind:"Mercado navideño familiar",duration:"Tarde y noche",tips:"En Olympiapark Sur (Spiridon-Louis-Ring 100): carpas de circo, carrusel, cuentos, velas y comida.",reserve:"Entrada por confirmar",official:"https://maerchenbazar.de/",photoLabel:"Imagen del Olympiapark"},
"Tren a Verona":{wiki:"München Hauptbahnhof",kind:"Tren",duration:"Salida 9:23",tips:"Desayunar temprano; la estación está a pocos minutos a pie. Cambio en Verona hacia Milán.",reserve:"Tren confirmado"}
};
const css = `
.fi-detail{position:absolute;right:20px;top:75px;bottom:20px;width:min(390px,calc(100% - 40px));background:#fff;z-index:8;box-shadow:0 13px 48px rgba(17,42,63,.25);border:1px solid #e4e9ec;border-radius:18px;overflow:hidden;display:flex;flex-direction:column;font-family:Inter,system-ui,sans-serif;color:#183048}
.fi-detail[hidden]{display:none}.fi-top{position:relative;min-height:180px;background:linear-gradient(135deg,#24465b,#b6d6d6);flex-shrink:0;overflow:hidden}
.fi-cover{height:195px;width:100%;object-fit:cover;display:none}.fi-placeholder{height:195px;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Georgia,serif;font-size:29px;text-align:center;padding:38px}
.fi-close{position:absolute;top:12px;right:12px;background:#fff;border:0;color:#243b4c;width:34px;height:34px;border-radius:50%;font-size:23px;box-shadow:0 2px 9px #0004;z-index:2;cursor:pointer}
.fi-content{padding:19px 22px 23px;overflow-y:auto}.fi-kicker{font-size:10px;font-weight:800;color:#a36f45;letter-spacing:.11em;text-transform:uppercase}
.fi-title{font-family:Georgia,serif;font-size:28px;line-height:1.18;margin:8px 0 9px}.fi-sub{font-size:12px;color:#738597;line-height:1.5}.fi-section{margin-top:17px;padding-top:14px;border-top:1px solid #e7edef}.fi-section h3{font-size:12px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 9px;color:#46677c}.fi-section p{font-size:13px;line-height:1.65;color:#42576a;margin:0}.fi-chip{background:#edf4f6;color:#2b5a70;border-radius:7px;display:inline-block;font-size:11px;font-weight:700;padding:7px 9px;margin-top:7px}
.fi-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.fi-action{border:1px solid #cad8e0;border-radius:9px;padding:10px 12px;text-decoration:none;font-weight:700;font-size:12px;color:#275675;background:#f7fafb}.fi-action.primary{background:#1d4761;color:white;border-color:#1d4761;width:auto;margin:0}
.fi-photo-credit{font-size:10px;color:#8191a0;margin-top:7px;display:none}.fi-note{font-size:11px;color:#8995a0;margin-top:15px;line-height:1.5}
@media(max-width:760px){.fi-detail{top:auto;bottom:0;left:0;right:0;width:100%;height:min(68dvh,600px);border-radius:18px 18px 0 0}.fi-top{min-height:120px}.fi-cover,.fi-placeholder{height:150px}.fi-title{font-size:24px}.fi-content{padding:15px 18px}}
`;
const style=document.createElement("style");style.textContent=css;document.head.appendChild(style);
const shell=document.createElement("section");shell.id="fi-detail";shell.className="fi-detail";shell.hidden=true;shell.setAttribute("aria-label","Detalles del lugar");
shell.innerHTML='<div class="fi-top"><button type="button" class="fi-close" aria-label="Cerrar detalles">×</button><div class="fi-placeholder"></div><img class="fi-cover" alt=""></div><div class="fi-content"><div class="fi-kicker"></div><h2 class="fi-title"></h2><div class="fi-sub"></div><div class="fi-section"><h3>Qué haremos</h3><p class="fi-plan"></p></div><div class="fi-section"><h3>Consejos prácticos</h3><p class="fi-tips"></p></div><div class="fi-section"><h3>Reservas y duración</h3><div class="fi-chip fi-reservation"></div><p class="fi-duration" style="margin-top:8px"></p></div><div class="fi-actions"></div><div class="fi-photo-credit"></div><div class="fi-note">Los horarios son los del itinerario familiar, no horarios oficiales de apertura. Las fotos proceden de Wikipedia/Wikimedia cuando están disponibles.</div></div>';
const host=document.querySelector(".mapwrap");if(!host)return;host.appendChild(shell);
shell.querySelector(".fi-close").addEventListener("click",()=>shell.hidden=true);
document.addEventListener("keydown",e=>{if(e.key==="Escape")shell.hidden=true;});
let currentRequest=0;
const photoCache=new Map();
function photoFor(title){
 if(!title)return Promise.resolve(null);
 if(photoCache.has(title))return photoCache.get(title);
 const promise=fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=960&redirects=1&origin=*&titles="+encodeURIComponent(title))
 .then(r=>{if(!r.ok)throw new Error("photo");return r.json();})
 .then(data=>{const pages=Object.values(data.query?.pages||{});const image=pages.find(p=>p.thumbnail?.source);return image?{url:image.thumbnail.source,page:"https://en.wikipedia.org/wiki/"+encodeURIComponent(title.replaceAll(" ","_"))}:null;})
 .catch(()=>null);photoCache.set(title,promise);return promise;
}
function mapLink(p){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(p[3]+","+p[4]);}
function backHotel(p){return "https://www.google.com/maps/dir/?api=1&origin="+encodeURIComponent(p[3]+","+p[4])+"&destination="+encodeURIComponent(HOTEL.lat+","+HOTEL.lng)+"&travelmode=transit";}
function directions(p){return "https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(p[3]+","+p[4]);}
function setText(selector,value){shell.querySelector(selector).textContent=value||"";}
function openDetail(i,j){
 if(!Array.isArray(DAYS)||!DAYS[i]?.stops[j])return;
 const p=DAYS[i].stops[j],d=DAYS[i],meta=PLACES[p[1]]||{},token=++currentRequest;
 shell.hidden=false;shell.querySelector(".fi-content").scrollTop=0;
 setText(".fi-kicker",d.date+" · "+p[0]+" · "+(meta.kind||"Parada "+(j+1)));
 setText(".fi-title",p[1]);setText(".fi-sub","Parada "+(j+1)+" de "+d.stops.length+" · "+d.title);
 setText(".fi-plan",p[2]);setText(".fi-tips",meta.tips||"Verificar detalles de la visita antes del viaje.");
 setText(".fi-reservation",meta.reserve||"Pendiente de confirmar");
 setText(".fi-duration","Tiempo previsto: "+(meta.duration||"Flexible"));
 let actions='<a class="fi-action primary" target="_blank" rel="noopener" href="'+directions(p)+'">Cómo llegar ↗</a><a class="fi-action" target="_blank" rel="noopener" href="'+mapLink(p)+'">Google Maps ↗</a>';
 if(typeof HOTEL!=="undefined"&&Math.abs(p[3]-HOTEL.lat)+Math.abs(p[4]-HOTEL.lng)>0.003)actions+='<a class="fi-action" target="_blank" rel="noopener" href="'+backHotel(p)+'">Volver al hotel ↗</a>';
 if(meta.official)actions+='<a class="fi-action" target="_blank" rel="noopener" href="'+meta.official+'">Sitio oficial ↗</a>';
 shell.querySelector(".fi-actions").innerHTML=actions;
 const img=shell.querySelector(".fi-cover"),place=shell.querySelector(".fi-placeholder"),credit=shell.querySelector(".fi-photo-credit");
 img.style.display="none";img.removeAttribute("src");place.style.display="flex";place.textContent=p[1];credit.style.display="none";
 photoFor(meta.wiki).then(photo=>{if(token!==currentRequest||!photo)return;
 img.onload=()=>{if(token!==currentRequest)return;img.style.display="block";place.style.display="none";credit.style.display="block";credit.textContent=(meta.photoLabel||"Imagen: Wikipedia / Wikimedia Commons")+" · Ver fuente";credit.onclick=()=>window.open(photo.page,"_blank","noopener");credit.style.cursor="pointer";};
 img.onerror=()=>{img.style.display="none";place.style.display="flex";credit.style.display="none";};
 img.alt="Imagen de "+p[1];img.src=photo.url;
 });
}
const previousOpenStop=openStop;
openStop=function(i,j,marker){openDetail(i,j);};
})();
