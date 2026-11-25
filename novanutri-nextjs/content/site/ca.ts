// Machine-drafted marketing copy for review. Privacy Policy and Terms bodies are not in this file.
import type { SiteMessages } from "./en";

const messages = {
  meta: {
    title: "Riov | Planifica millor. Menja millor. Gasta menys.",
    description:
      "Riov crea plans mediterranis per a una setmana o fins a un mes segons la teva dieta i les calories, amb preus reals de supermercat a Europa i als EUA.",
  },
  nav: {
    logoAlt: "Logotip de Riov",
    primary: "Principal",
    getApp: "Aconsegueix l'app",
    features: "Funcions",
    about: "Nosaltres",
    collaborations: "Col·laboracions",
    investors: "Inversors",
    contact: "Contacta'ns",
    forBrands: "Per a marques",
    skip: "Ves al contingut",
    darkMode: "Mode fosc",
    openMenu: "Obre el menú",
    closeMenu: "Tanca el menú",
    searchLanguages: "Cerca idiomes",
    noLanguages: "Cap idioma",
  },
  hero: {
    badge: "Ja disponible a iOS i Android",
    line1: "Planifica millor.",
    line2: "Menja millor.",
    line3: "Gasta menys.",
    body: "Riov crea el teu pla d'àpats mediterrani per a una setmana o fins a un mes, controla el que menges i prepara la llista de la compra. Els preus són de supermercats reals a Europa i als Estats Units.",
    googlePlayAlt: "Aconsegueix-la a Google Play",
    appStoreAlt: "Descarrega-la a l'App Store",
    qrAlt: "Escaneja per descarregar Riov",
    scan: "Escaneja per descarregar",
    mockupAlt: "Interfície de l'app Riov",
    shotIntake: "La ingesta d'avui",
    shotRecipes: "Receptes, amb preu",
    shotPlan: "El pla setmanal",
    shotsLabel: "Pantalles de l'app Riov",
    prevShot: "Pantalla anterior",
    nextShot: "Pantalla següent",
    shots: {
      home: "La ingesta d'avui",
      planner: "Planificador setmanal",
      basket: "Llista de la compra",
      search: "Cercar receptes",
      recipes: "Receptes, amb preu",
      recipe: "Una recepta",
      generate: "Generar el pla",
      menu: "El menú de la setmana",
    },
  },
  features: {
    headlineLead: "Tot el que necessites en ",
    headlineEmphasis: "una sola app.",
    intro:
      "Riov substitueix l'app de notes, el comptador de calories i el control de despeses per un únic ecosistema amb IA.",
    cook: {
      category: "Cuina i comparteix",
      scannerTitle: "Escàner d'aliments amb IA",
      scannerBody:
        "No saps què cuinar? Escaneja els ingredients de la cuina i generarem l'àpat perfecte amb exactament el que tens.",
      pdfTitle: "Exporta el pla i la llista en PDF",
      pdfBody:
        "Converteix el pla setmanal o la llista de la compra en un PDF net i comparteix-lo des del mòbil, o copia la llista com a text per enganxar-la a WhatsApp o Messenger.",
    },
    organize: {
      category: "Organització intel·ligent",
      plannerTitle: "Planificador d'àpats i Nevera virtual",
      plannerBody:
        "Planifica tota la setmana en segons. Controla què hi ha a la Nevera virtual per reduir de debò el malbaratament d'aliments.",
      shoppingTitle: "Organitzador de la compra intel·ligent",
      shoppingBody:
        "El pla d'àpats genera automàticament una llista de la compra molt ordenada, classificada pels passadissos del supermercat per estalviar-te temps. El cost de les receptes i de la llista fa servir preus reals de supermercat a Europa i als Estats Units.",
    },
    health: {
      category: "Salut, butxaca i seguretat",
      mediterraneanTitle: "Plans mediterranis i nutrició",
      mediterraneanBody:
        "Genera un pla mediterrani per a una setmana o fins a 31 dies segons pautes clíniques (verdures, llegums, peix i proteïnes magres) mentre controles els macros diaris. Un pla personalitzat pot seguir el teu tipus de dieta i un objectiu de calories al dia.",
      allergyTitle: "Control clínic de dietes i al·lèrgies",
      allergyBody:
        "Consulta les receptes amb seguretat. Indica al·lèrgies alimentàries estrictes (com el gluten o els làctics) o ingredients que no t'agraden, i Riov filtrarà els àpats automàticament.",
    },
  },
  about: {
    imageAlt: "Una família gaudint d'un àpat saludable",
    mission: "La nostra missió",
    headlineLead: "De ",
    headlineHighlight: "desplaçar",
    headlineTail: " a servir.",
    paragraph1:
      "Creiem que alimentar la família no hauria de semblar una segona feina. Entre l'augment del preu de la compra, l'estrès de planificar els àpats i la culpa de llençar menjar oblidat, el sopar s'ha tornat innecessàriament complicat.",
    paragraph2:
      "Riov es va crear per canviar això. En combinar el nostre escàner de receptes amb IA amb eines pràctiques per a la llar —com la Nevera virtual i el control del pressupost—, t'ajudem a aprofitar els ingredients que ja tens, descobrir noves cuines i tornar l'alegria a la cuina.",
    quote:
      "Després de 10 anys com a xef i cap de cuina, em vaig adonar que a casa faltaven les eines que fem servir al sector: un control estricte del cost del menjar, el compliment dels al·lèrgens i una logística de zero residus. Vaig crear Riov per portar aquesta eficiència professional a la cuina de la teva família.",
    attribution: "Cristian Dorultan, fundador i enginyer principal",
    statLanguages: "Llengües",
    statLive: "Actiu",
    statBudget: "Control del pressupost",
    statMinimal: "Mínim",
    statWaste: "Malbaratament d'aliments",
  },
  investors: {
    kicker: "Col·labora amb nosaltres",
    headlineLead: "Inversors i ",
    headlineHighlight: "col·laboracions",
    intro:
      "Riov és un planificador d'àpats intel·ligent, totalment desenvolupat i amb IA, pensat per unir sense fricció la inspiració culinària i l'execució a la cuina. Busquem socis estratègics que ens ajudin a créixer.",
    tractionTitle: "Tracció actual i MVP",
    tractionBody:
      "A diferència de moltes startups en fase inicial que busquen assessorament, el MVP de Riov ja està completament programat i en funcionament.",
    traction1:
      "Construït sobre una arquitectura escalable, amb React Native al frontend i Firebase/Google Cloud Functions al backend.",
    traction2: "Integra APIs d'IA avançades (OpenAI) per al càlcul dinàmic de macronutrients.",
    traction3:
      "Arquitectura, disseny i programació fets de manera independent per un fundador amb més de 10 anys d'experiència professional com a xef.",
    fundingTitle: "L'objectiu de finançament",
    fundingBody:
      "Estem estructurant una estratègia de finançament per a la següent etapa de creixement. Aconseguir una massa crítica d'usuaris actius i ampliar una infraestructura intensiva en APIs requereix capital estratègic.",
    fundingDetails: "Per a l'import del finançament i tots els detalls, {link}.",
    fundingLink: "demana'ns la presentació per a inversors",
    allocationTitle: "Com s'assignarà el capital:",
    allocation1: "Escalar de manera eficient la infraestructura de servidors i APIs.",
    allocation2:
      "Executar de seguida la nostra estratègia de sortida al mercat (GTM), centrada en la vida frugal, el meal prep i les comunitats de salut mediterrània.",
    allocation3:
      "Fer contractacions clau, inclosos experts de domini com nutricionistes, assessors de salut i un responsable de compliment, per garantir el respecte de la normativa.",
    cta: "Demanar la presentació",
  },
  collaborations: {
    metaTitle: "Col·laboracions | Riov",
    metaDescription:
      "Promociona els teus productes als plans d'àpats i a les llistes de la compra de Riov. Les marques paguen 0,01 € fixos per aparició i per article. Els clics no es cobren.",
    kicker: "Per a marques",
    headlineLead: "Posa la teva marca ",
    headlineHighlight: "al pla.",
    pitch:
      "Les marques poden promocionar els seus productes vinculats als ingredients de Riov. Una marca local de salsitxes, per exemple, apareix al pla d'àpats generat en lloc d'una «salsitxa» genèrica. Els ingredients patrocinats apareixen a la llista de la compra dels usuaris amb un enllaç al producte. A les marques se'ls factura una tarifa fixa de 0,01 € per aparició i per article, i els clics a l'enllaç no es compten ni es cobren. Les marques es posen en contacte a través del formulari de contacte.",
    cta: "Fes-te soci",
  },
  contact: {
    title: "Escriu-nos",
    intro:
      "Tens una pregunta sobre l'app, necessites ajuda o vols col·laborar amb nosaltres? Envia'ns un missatge i l'equip et respondrà aviat.",
    receivedTitle: "Missatge rebut!",
    receivedBody: "Gràcies per escriure'ns. Et respondrem aviat.",
    sendAnother: "Enviar un altre missatge",
    name: "Nom",
    namePlaceholder: "Anna Garcia",
    email: "Correu electrònic",
    emailPlaceholder: "anna@exemple.com",
    message: "Missatge",
    messagePlaceholder: "Com et podem ajudar?",
    sending: "Enviant...",
    submit: "Enviar el missatge",
    captchaLoading: "reCAPTCHA encara s'està carregant. Torna-ho a provar d'aquí a un moment.",
    error: "Alguna cosa ha anat malament. Torna-ho a provar.",
  },
  footer: {
    communityTitle: "Uneix-te a la comunitat",
    communityBody:
      "Segueix-nos per a trucs de receptes econòmiques, novetats de l'app i el dia a dia de com la construïm.",
    rights: "Tots els drets reservats.",
    terms: "Termes i condicions",
    privacy: "Política de privadesa",
    license: "Llicència",
  },
  license: {
    metaTitle: "Llicència de programari | Riov",
    metaDescription: "Llicència propietària i de codi tancat del programari de Riov.",
    title: "Llicència de programari",
    copyright: "Copyright © 2026 Riov. Tots els drets reservats.",
    kicker: "Llicència propietària i de codi tancat",
    ownershipLabel: "1. Titularitat:",
    ownershipBody:
      "Tot el codi font, la documentació, els dissenys d'UI/UX, els algoritmes i els fitxers associats continguts en aquest repositori són propietat exclusiva de Riov.",
    restrictionsLabel: "2. Restriccions:",
    restrictionA:
      "No pots copiar, reproduir, distribuir, publicar, mostrar, executar, modificar, crear obres derivades, transmetre ni explotar de cap manera aquest contingut, ni distribuir cap part d'aquest contingut a través de cap xarxa, inclosa una xarxa d'àrea local, vendre'l o oferir-lo a la venda, ni utilitzar aquest contingut per construir cap mena de base de dades.",
    restrictionB: "No pots fer enginyeria inversa, descompilar ni desassemblar el programari.",
    restrictionC:
      "No pots utilitzar el codi font ni el programari amb finalitats comercials sense el permís explícit i per escrit del titular.",
    warrantyLabel: "3. Sense garantia:",
    warrantyBody:
      "Aquest programari es proporciona pels titulars dels drets d'autor i els col·laboradors «tal qual», i es rebutja qualsevol garantia expressa o implícita, incloses, entre d'altres, les garanties implícites de comercialitat i d'adequació a una finalitat concreta.",
    liability:
      "En cap cas el titular dels drets d'autor o els col·laboradors seran responsables de cap dany directe, indirecte, incidental, especial, exemplar o conseqüent.",
    closing:
      "L'ús no autoritzat d'aquest codi està estrictament prohibit i constitueix una infracció de la llei de drets d'autor.",
  },
  faq: {
    kicker: "Preguntes",
    titleLead: "Preguntes ",
    titleEmphasis: "freqüents",
    intro: "Respostes clares sobre què fa Riov, per a les persones i per als assistents de cerca.",
    items: [
      {
        q: "Què és Riov?",
        a: "Riov és una app de planificació d'àpats per a iPhone i Android. Crea plans mediterranis, calcula el preu de les receptes amb dades de supermercat, registra el que menges i converteix el pla en una llista de la compra.",
      },
      {
        q: "Quina és la millor app per a un pla d'àpats mediterrani econòmic?",
        a: "Riov crea plans mediterranis a partir de pautes clíniques de grups d'aliments, amb més verdura, llegums, peix i proteïnes magres. Cada recepta mostra un cost estimat i la llista de la compra els suma, amb preus reals de supermercat a Europa i als Estats Units.",
      },
      {
        q: "Una app pot fer un pla setmanal amb pressupost per perdre pes?",
        a: "Riov pot crear un pla per a una setmana o per a les dates que triïs, fins a 31 dies. Tries un tipus de dieta (mediterrània, estàndard, pescetariana, vegetariana o vegana) i, en un pla personalitzat, un objectiu de calories al dia. Veus el cost estimat de les receptes i de la llista de la compra. Riov és una eina de planificació, no un programa mèdic per aprimar-se.",
      },
      {
        q: "Riov fa la llista de la compra?",
        a: "Sí. La Cistella és una llista de la compra generada amb els àpats del pla. Pots exportar el pla o la llista en PDF, o copiar la llista com a text.",
      },
      {
        q: "En quins països té preus Riov?",
        a: "Hi ha preus reals de supermercat a Europa i als Estats Units. Riov té preus propis de botiga per als 27 països de la Unió Europea i el Regne Unit: Àustria, Bèlgica, Bulgària, Croàcia, Xipre, República Txeca, Dinamarca, Estònia, Finlàndia, França, Alemanya, Grècia, Hongria, Irlanda, Itàlia, Letònia, Lituània, Luxemburg, Malta, Països Baixos, Polònia, Portugal, Romania, Eslovàquia, Eslovènia, Espanya, Suècia i el Regne Unit. Els Estats Units també hi són, amb els 50 estats. Si un producte no té preu local de supermercat, Riov mostra una estimació etiquetada a partir de preus espanyols.",
      },
      {
        q: "Riov pot planificar un mes d'àpats?",
        a: "Sí. Tu tries les dates d'inici i de final. Un pla pot durar un dia o fins a 31 dies, de manera que serveixen tant una setmana com prop d'un mes. Pots tenir un pla actual i el següent.",
      },
      {
        q: "Riov registra el que menjo?",
        a: "Sí. La pantalla d'inici mostra les calories i els macros d'avui respecte d'un objectiu. Pots anotar un àpat escrivint-lo o amb una foto. Desar el diari requereix el teu consentiment, perquè són dades de salut.",
      },
      {
        q: "Puc escanejar una foto del meu menjar?",
        a: "Sí. L'escàner d'aliments amb IA fa una foto d'un plat o d'ingredients, diu què hi veu i estima la nutrició. Pots desar el resultat al diari. Els resultats de l'escàner són estimacions: revisa'ls abans de refiar-te'n.",
      },
      {
        q: "Riov té en compte les al·lèrgies?",
        a: "Pots desar al·lèrgies i ingredients que no t'agraden. Amb el teu consentiment, Riov els filtra a les receptes i als plans. La informació sobre al·lèrgens pot ser incompleta: si tens una al·lèrgia, comprova sempre l'etiqueta.",
      },
      {
        q: "Quines llengües i unitats admet Riov?",
        a: "L'app i aquest web són en anglès, espanyol, català, francès, italià, romanès i danès. A l'app pots fer servir unitats mètriques o del sistema dels Estats Units.",
      },
      {
        q: "Quant costa Riov?",
        a: "L'app és gratuïta de moment i encara no hi ha funcions de pagament. Una marca que col·loca un producte en un pla d'àpats paga 0,01 € fixos cada vegada que aquest article apareix. Els clics a l'enllaç del producte no es cobren.",
      },
    ],
  },
} satisfies SiteMessages;

export default messages;
