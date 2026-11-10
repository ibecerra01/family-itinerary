/* Family Itinerary — extra context for the "Guía del viaje".
   GUIDE_DETAILS: key = the first words of a tip in guide.js (must match the start of the tip text exactly);
   value = the "why / details" shown when the tip is opened. Mention the source in the text.
   GUIDE_FOOD: place tiles shown inside "Comer y beber" (photo, website, "Ver dónde" in Google Maps).
   Video sources (research, not official): «3 Days in Paris with Kids», «Disneyland Paris at Christmas – What No One Tells You»,
   «Don't Make These 10 Disneyland Paris Mistakes», «The Ultimate Paris Christmas Guide», «7 Things to Do in Paris at Christmas»,
   «How to Buy Metro Tickets in Paris», «Is Christmas the Best Time to Visit Disneyland Paris?», «Paris with Kids»,
   «The Ultimate Guide to Disneyland Paris», «Everyone Books Christmas in Paris for the Wrong Week», «What Paris Locals Know About the Metro». */
window.GUIDE_DETAILS = {
// ---------------- Viaje ----------------
"Jue 3 · origen�":"Día largo con vuelo nocturno desde conexión. Al llegar a CDG (11:35 del viernes) contar 1 a 1,5 h para migración y maletas antes de salir hacia Saint-Mandé. Por eso el viernes solo tiene compras de ropa térmica y descanso. Fuente: reservas e itinerario familiar.",
"Mar 8 · Salir del hotel":"El vuelo a Múnich sale a las 18:20. Salir entre 14:00 y 14:15 deja margen para el tráfico (la hora punta empieza ~16:00) y para entregar maletas. Fuente: itinerario familiar; horas punta según el video «How to Buy Metro Tickets in Paris».",
"Sáb 12 · Tren":"Trayecto de día por Innsbruck, el paso del Brennero y Bolzano: el paisaje alpino es parte del viaje. El cambio de 61 min en Verona Porta Nuova alcanza sin correr. Llevar agua y algo de comer. Fuente: reservas y resumen del viaje.",
"Sáb 19 · Milán Malpensa":"La entrega de maletas cierra a las 14:30, una hora antes del vuelo. El Malpensa Express sale de Cadorna, junto al apartamento. Se llega a CDG T2D: por eso conviene un hotel en Roissypole, conectado con el tren gratuito CDGVAL.",
"Dom 20 · CDG Terminal 1":"United opera en la Terminal 1 (Paris Aéroport). Desde Roissypole se llega en CDGVAL en pocos minutos. En conexión hay ~7 h de escala: suficiente para migración y volver a documentar.",
"Regreso: en conexión":"En el primer aeropuerto de EE. UU. siempre se recogen las maletas, se pasa por aduana (CBP) y se vuelven a entregar a la aerolínea, aunque el boleto sea de conexión. Fuente: CBP, 2026.",
"París 4–8 · Le Ruisseau":"A pasos de la estación Saint-Mandé (línea 1) y cerca de Vincennes (RER A directo a Disney): buena base para todo el plan de París.",
"CDG 19–20":"Roissypole está entre las terminales 1 y 2 y conecta con el CDGVAL, tren gratuito cada pocos minutos. Evita depender de taxis la mañana del vuelo.",
// ---------------- París · Moverse ----------------
"Una tarjeta Navigo Easy":"Cada persona necesita su propia tarjeta: no se puede pasar una tarjeta dos veces para dos personas. Es anónima (sin foto) y se recarga en máquinas o taquillas. Fuente: IDFM y videos «How to Buy Metro Tickets in Paris» y «What Paris Locals Know About the Metro».",
"Comprarlas en CDG":"Ambos videos coinciden: la app IDF Mobilités a menudo no se instala o no acepta números extranjeros. Las máquinas grandes venden tarjetas y billetes; las pequeñas con lector morado solo recargan. Las taquillas con personal también venden.",
"Línea 1 del metro":"Es la línea más sencilla de París (este–oeste) y la mayoría de los paseos del 6 y 7 de diciembre quedan cerca de sus estaciones. Fuente: Bonjour RATP.",
"Disney: RER A":"El RER A tiene dos ramales hacia el este. En las pantallas del andén aparece el destino de cada tren: subir solo si dice Marne-la-Vallée – Chessy. Fuente: RATP.",
"Tarifas 2026":"Desde 2025 se eliminaron las zonas: un mismo billete sirve para toda Île-de-France salvo los aeropuertos. Ejemplo: ida y vuelta a Disney para 2 adultos y la niña ≈ €12,80. Fuente: IDFM, tarifas 2026.",
"Niños de 4 a 9 años":"Como no hay pase diario reducido, para la niña conviene cargar billetes sueltos reducidos en su Navigo Easy. Fuente: IDFM.",
"Navigo Semaine":"Vale de lunes 00:00 a domingo 23:59 sin importar el día de compra: para una estadía de viernes a martes se pagaría una semana casi sin usar. Fuente: IDFM.",
"Validar siempre":"Hay controles frecuentes y multan aunque sea un error honesto. Según los videos, los inspectores ganan comisión si se paga en el acto; se puede pedir el acta (procès-verbal) y pagar o reclamar después (2 meses). Evitar los torniquetes que ya están abiertos o rotos. Mantener la calma. Fuente: videos «How to Buy Metro Tickets» y «What Paris Locals Know».",
"Bonjour RATP":"Los videos la prefieren a Google Maps porque muestra el estado en tiempo real, el vagón ideal para el trasbordo, cuán lleno va el tren y el número de salida exacto. Guardar el hotel como «casa» para volver con un toque.",
"Taxi G7":"Los taxis oficiales usan los carriles de bus; Uber no. En hora punta (7–9 y 16–19) eso ahorra mucho tiempo. G7 se paga en la app, sin riesgo de estafas. Fuente: video «How to Buy Metro Tickets in Paris».",
"Evitar trasbordos en Châtelet":"Consejo de un parisino en el video «What Paris Locals Know»: es enorme, con mucha gente y confuso. También desaconseja Montparnasse por las caminatas largas entre líneas.",
"Carteristas":"Los videos no lo presentan como un gran riesgo, pero recomiendan tocar bolsillos al entrar al metro y llevar el bolso adelante y cerrado, sobre todo en vagones llenos.",
// ---------------- París · Navidad ----------------
"Tullerías (lun 7)":"El video «7 Things to Do in Paris at Christmas» lo describe como mitad mercado y mitad feria: noria (la vista vale la pena tras el atardecer), carruseles y puestos de productores franceses. Llegar al final de la tarde para ver cómo se encienden las luces (atardecer ~16:55). Comida típica: raclette y tartiflette.",
"Notre-Dame (lun 7)":"Pequeño y tranquilo, con artesanos seleccionados y comida regional. Dentro del square está el robinia plantado en 1601, el árbol más antiguo de París. Suele haber visitas de Papá Noel. Fuente: video «7 Things to Do in Paris at Christmas».",
"Hôtel de Ville":"Si se instala en 2026, tiene carrusel y puestos frente al Ayuntamiento, en la línea 1 (estación Hôtel de Ville). Fuente: video «The Ultimate Paris Christmas Guide».",
"Saint-Germain":"En el bulevar Saint-Germain, junto a los cafés literarios (Les Deux Magots, Café de Flore). El video destaca el nougat y el sándwich de raclette.",
"Evitar viernes y sábado":"Los autores del video viven en París: esas noches los parisinos salen en masa. Su consejo: esas noches hacer algo tranquilo con reserva. El plan familiar ya lo respeta (Tullerías el lunes).",
"Muchos mercados cierran":"Los puestos abren desde ~10–11 h y cierran ~20–21 h. Casi todo se paga con tarjeta sin contacto; llevar algo de efectivo para puestos pequeños. Fuente: video «Everyone Books Christmas in Paris for the Wrong Week».",
"Champs-Élysées iluminados":"La mejor vista es de frente por la avenida hacia el Arco del Triunfo. Fuente: paris.fr y video «7 Things to Do».",
"Ruta de luces gratis":"Ruta del video «7 Things to Do»: Champs-Élysées, Avenue Montaigne (las casas de moda decoran fachadas; Dior en el n.º 30), Concorde, rue Royale y Place Vendôme (árboles iluminados y vitrinas de joyerías). Con energía, seguir a la Ópera y los grandes almacenes. Con poco tiempo: Champs-Élysées, Montaigne y Vendôme.",
"Galeries Lafayette, domingo":"La terraza tiene vista a la Torre Eiffel, Sacré-Cœur y la Ópera; ideal al atardecer. Fuente: Galeries Lafayette.",
"Galeries Lafayette (dom 6)":"El video recomienda ver las vitrinas de día, el árbol bajo la cúpula de 1912 (subir a los pisos altos para verlo desde arriba), la terraza al atardecer y volver a las vitrinas de noche. Piso 5: sección infantil. Piso 6: baños limpios, cafetería y recuerdos a buen precio. Fuente: video «The Ultimate Paris Christmas Guide».",
"Pedir reembolso de impuestos":"Para residentes fuera de la UE: pedir el formulario en el mostrador de bienvenida con el pasaporte. El monto mínimo aplica por tienda y por día (confirmar en el mostrador).",
"Torre Eiffel: destella":"Buen cierre de una noche, desde Trocadéro o el puente de Iéna: llegar unos minutos antes de la hora en punto. Fuente: Torre Eiffel (sitio oficial).",
"Notre-Dame: entrada gratis":"Sin reserva se hace la fila general; la reserva gratuita solo asigna una franja horaria. La catedral reabrió en diciembre de 2024. Fuente: Notre-Dame de Paris.",
"Sainte-Chapelle":"Los vitrales lucen mejor con luz de día: por eso la visita es a las 10:00. Fuente: Sainte-Chapelle e itinerario familiar.",
// ---------------- París · Comer ----------------
"En los mercados: raclette":"Raclette: queso fundido raspado sobre papas y embutidos. Tartiflette: papas, cebolla, tocino y queso reblochon gratinados (para compartir). Vin chaud: vino caliente con canela y naranja. Para la niña: chocolate caliente espeso, crepe de Nutella y banana, gofre de Lieja o castañas asadas. Fuente: videos de Navidad en París.",
"Platos de invierno en bistró":"Coq au vin (pollo al vino), cassoulet (frijoles blancos con confit de pato y salchicha), choucroute (chucrut con cerdo, de Alsacia), tarte tatin (tarta de manzana caramelizada) y profiteroles con chocolate. Fuente: video «The Ultimate Paris Christmas Guide».",
"Mercados locales":"En los mercados de barrio se come rico y barato: galette-saucisse (crepe bretona salada con salchicha), pollo rostizado, aligot (puré con queso). En Aligre hay mercado al aire libre y el mercado cubierto Beauvau.",
"Comer barato":"Franprix o Monoprix tienen platos listos y a veces microondas: útil para una cena tranquila en el hotel. Fuente: video «3 Days in Paris with Kids».",
"Chocolates de regalo":"Comprarlos al final de la estadía en París (8 dic) para que lleguen frescos. Jacques Genin es famoso por sus caramelos de frutas; À la Mère de Famille es la opción más accesible para cajas de regalo. Fuente: video «The Ultimate Paris Christmas Guide».",
// ---------------- París · Avisos ----------------
"En Francia el paracetamol":"Desde 2020 están detrás del mostrador del farmacéutico: no se venden en supermercados ni en tiendas de Disney. Las farmacias se reconocen por la cruz verde. Fuente: ANSM.",
"Baños públicos de pago":"Las «sanisettes» de la calle son gratuitas pero a veces están ocupadas o sucias; los cafés piden consumir. Grandes almacenes y museos son la mejor opción. Fuente: video «3 Days in Paris with Kids».",
// ---------------- Múnich ----------------
"Aeropuerto → Hauptbahnhof":"La S8 entra por Ostbahnhof y Marienplatz; la S1 por el oeste. Ambas paran en Hauptbahnhof, a minutos del hotel. El Airport-City-Day-Ticket cubre el viaje y todo el transporte del resto del día. Fuente: MVV.",
"Con maletas y cansancio":"Tras un día de vuelo con equipaje, el taxi es directo hasta la puerta; decidirlo antes de llegar evita discusiones a las 20:00.",
"Desde 2026, niños de 6 a 14":"Novedad 2026: con la Single-Tageskarte de un adulto, los hijos de 6 a 14 viajan gratis. Para 2 adultos puede salir igual o más barato que la Gruppen-Tageskarte: comparar en la app MVV. Fuente: MVV.",
"Christkindlmarkt de Marienplatz":"El mercado principal de Múnich, frente al Nuevo Ayuntamiento, con el gran árbol en el centro. Fuente: christkindlmarkt-muenchen.de.",
"Canto navideño frente a San Miguel":"Programa oficial: se reparten cancioneros gratis. Encaja justo antes de ir al mercado de la Residenz.",
"Märchenbazar":"Mercado pensado para familias: carpas de circo, carrusel, cuentos, talleres de velas y espectáculos. Es el cierre del viernes 11 después de BMW Welt y Olympiapark. Fuente: maerchenbazar.de y plan de Múnich.",
"Weihnachtsdorf de la Residenz":"Residenz: patio Kaiserhof con ambiente de cuento, protegido del viento (primera opción para la niña según el plan). Medieval de Wittelsbacherplatz: artesanos, fuego y trajes de época; más ruidoso. Fuente: muenchen.travel y plan de Múnich.",
"Tollwood en Theresienwiese":"Festival con carpas iluminadas, comida de muchos países (gran parte orgánica), artesanías y programa infantil. Es el plan del jueves 10 por la tarde. Fuente: tollwood.de.",
"Visitar los mercados después de las 16:00":"En Múnich anochece ~16:20: las luces encendidas cambian todo el ambiente. Fuente: plan de Múnich.",
"Tazas con depósito":"En Alemania se paga un depósito (Pfand) por la taza y se recupera al devolverla. Las tazas cambian cada año: recuerdo barato.",
"Weißwurst":"Tradición bávara: se come antes del mediodía, sin la piel, con mostaza dulce y un Brezel. Fuente: plan de Múnich.",
"Käsespätzle":"Pasta suave de huevo con queso fundido y cebolla frita: la apuesta segura para la niña. Kaiserschmarrn: panqueque esponjoso en trozos, con azúcar y compota.",
"Himmelswerkstatt: gratis":"Mientras la niña está en el taller (90 min), los padres pueden recorrer el Christkindlmarkt de Marienplatz, justo al lado. Fuente: muenchen.de.",
// ---------------- Milán ----------------
"De Milano Centrale a Cadorna":"La línea M2 (verde) conecta ambas estaciones sin cambios; con maletas es más cómoda que un taxi en hora punta del sábado. Fuente: ATM.",
"Malpensa Express desde Cadorna":"Trenes cada 30 min, ~43 min hasta T2 (la terminal de easyJet). Fuente: Malpensa Express.",
// ---------------- Equipaje ----------------
"Abrigo largo impermeable":"Los videos de Disney insisten: mejor un abrigo que no se moje que uno lindo; largo para sentarse en asientos mojados de atracciones y con capucha. Fuente: video «Disneyland Paris at Christmas – What No One Tells You».",
"Guantes táctiles":"La vloguera cuenta que le ardían las manos de frío cada vez que sacaba el teléfono para ver la app. Fuente: video «Disneyland Paris at Christmas».",
"Calzado impermeable":"En noviembre y diciembre hubo hielo en escaleras y muchos charcos; los pies mojados arruinan el día. Fuente: video «Disneyland Paris at Christmas».",
"Gel o toallitas":"En invierno circulan virus estomacales y muchos geles no los eliminan: lavarse las manos con agua y jabón antes de comer. Fuente: video «Disneyland Paris at Christmas».",
"Google Translate":"Con conversación por voz: útil en taquillas, farmacias o con un inspector del metro. Fuente: video «How to Buy Metro Tickets in Paris»."
};

// id, city, name, area/day, why (our context), plus research fields filled in below
window.GUIDE_FOOD = [];
