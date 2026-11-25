// Machine-drafted marketing copy for review. Privacy Policy and Terms bodies are not in this file.
import type { SiteMessages } from "./en";

const messages = {
  meta: {
    title: "Riov | Planifiez mieux. Mangez mieux. Dépensez moins.",
    description:
      "Riov compose des menus méditerranéens pour une semaine ou jusqu'à un mois selon votre régime et vos calories, avec de vrais prix de supermarché en Europe et aux États-Unis.",
  },
  nav: {
    logoAlt: "Logo Riov",
    primary: "Principal",
    getApp: "Obtenir l'application",
    features: "Fonctionnalités",
    about: "À propos",
    collaborations: "Collaborations",
    investors: "Investisseurs",
    contact: "Contactez-nous",
    forBrands: "Pour les marques",
    skip: "Aller au contenu",
    darkMode: "Mode sombre",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    searchLanguages: "Rechercher une langue",
    noLanguages: "Aucune langue",
  },
  hero: {
    badge: "Disponible sur iOS et Android",
    line1: "Planifiez mieux.",
    line2: "Mangez mieux.",
    line3: "Dépensez moins.",
    body: "Riov compose votre plan de repas méditerranéen pour une semaine ou jusqu'à un mois, suit ce que vous mangez et prépare la liste de courses. Les prix viennent de vrais supermarchés en Europe et aux États-Unis.",
    googlePlayAlt: "Disponible sur Google Play",
    appStoreAlt: "Télécharger dans l'App Store",
    qrAlt: "Scannez pour télécharger Riov",
    scan: "Scannez pour télécharger",
    mockupAlt: "Interface de l'application Riov",
    shotIntake: "Les apports du jour",
    shotRecipes: "Recettes, avec prix",
    shotPlan: "Le plan de la semaine",
    shotsLabel: "Écrans de l'application Riov",
    prevShot: "Écran précédent",
    nextShot: "Écran suivant",
    shots: {
      home: "Les apports du jour",
      planner: "Planificateur",
      basket: "Liste de courses",
      search: "Chercher une recette",
      recipes: "Recettes, avec prix",
      recipe: "Une recette",
      generate: "Générer le plan",
      menu: "Le menu de la semaine",
    },
  },
  features: {
    headlineLead: "Tout ce qu'il vous faut dans ",
    headlineEmphasis: "une seule app.",
    intro:
      "Riov remplace votre application de notes, votre compteur de calories et votre suivi de budget par un seul écosystème alimenté par l'IA.",
    cook: {
      category: "Cuisiner et partager",
      scannerTitle: "Scanner alimentaire IA",
      scannerBody:
        "Vous ne savez pas quoi cuisiner ? Scannez les ingrédients de votre cuisine et nous générons le repas idéal avec exactement ce que vous avez.",
      pdfTitle: "Exportez votre plan et votre liste en PDF",
      pdfBody:
        "Transformez votre plan de repas ou votre liste de courses en un PDF clair et partagez-le depuis votre téléphone, ou copiez la liste en texte pour la coller dans WhatsApp ou Messenger.",
    },
    organize: {
      category: "Organisation intelligente",
      plannerTitle: "Planificateur de repas et Frigo virtuel",
      plannerBody:
        "Planifiez toute votre semaine en quelques secondes. Suivez le contenu de votre Frigo virtuel pour réduire nettement le gaspillage alimentaire.",
      shoppingTitle: "Organisateur de courses intelligent",
      shoppingBody:
        "Votre plan de repas génère automatiquement une liste de courses bien organisée, classée par rayons de supermarché pour vous faire gagner du temps. Le coût des recettes et de la liste utilise de vrais prix de supermarché en Europe et aux États-Unis.",
    },
    health: {
      category: "Santé, budget et sécurité",
      mediterraneanTitle: "Menus méditerranéens et nutrition",
      mediterraneanBody:
        "Générez un plan méditerranéen pour une semaine ou jusqu'à 31 jours selon des repères cliniques (légumes, légumineuses, poisson et protéines maigres) tout en suivant vos macros du jour. Un plan personnalisé peut suivre votre type de régime et un objectif de calories par jour.",
      allergyTitle: "Contrôle clinique des régimes et des allergies",
      allergyBody:
        "Parcourez les recettes en sécurité. Indiquez des allergies alimentaires strictes (comme le gluten ou les produits laitiers) ou les ingrédients que vous n'aimez pas, et Riov filtrera automatiquement vos repas.",
    },
  },
  about: {
    imageAlt: "Une famille qui partage un repas sain",
    mission: "Notre mission",
    headlineLead: "Du ",
    headlineHighlight: "défilement",
    headlineTail: " à l'assiette.",
    paragraph1:
      "Nous pensons que nourrir votre famille ne devrait pas ressembler à un second travail. Entre la hausse du prix des courses, le stress de planifier les repas et la culpabilité de jeter des aliments oubliés, le dîner est devenu inutilement compliqué.",
    paragraph2:
      "Riov a été créé pour changer cela. En associant notre scanner de recettes par IA à des outils concrets pour la maison — comme le Frigo virtuel et le suivi du budget — nous vous aidons à tirer le meilleur des ingrédients que vous avez déjà, à découvrir de nouvelles cuisines et à remettre de la joie en cuisine.",
    quote:
      "Après 10 ans comme chef et responsable de cuisine, j'ai compris que les foyers n'avaient pas les outils que nous utilisons dans le métier : un contrôle strict du coût matière, le respect des allergènes et une logistique zéro déchet. J'ai créé Riov pour apporter cette efficacité professionnelle dans votre cuisine familiale.",
    attribution: "Cristian Dorultan, fondateur et ingénieur principal",
    statLanguages: "Langues",
    statLive: "Actif",
    statBudget: "Suivi du budget",
    statMinimal: "Minimal",
    statWaste: "Gaspillage alimentaire",
  },
  investors: {
    kicker: "Devenez partenaire",
    headlineLead: "Investisseurs et ",
    headlineHighlight: "collaborations",
    intro:
      "Riov est un planificateur de repas intelligent, entièrement développé et alimenté par l'IA, conçu pour relier sans friction l'inspiration culinaire et l'exécution en cuisine. Nous recherchons des partenaires stratégiques pour nous aider à grandir.",
    tractionTitle: "Traction actuelle et MVP",
    tractionBody:
      "Contrairement à beaucoup de jeunes entreprises qui cherchent encore à être conseillées, le MVP de Riov est déjà entièrement codé et opérationnel.",
    traction1:
      "Construit sur une architecture évolutive, avec React Native pour l'interface et Firebase/Google Cloud Functions pour le serveur.",
    traction2: "Intègre des API d'IA avancées (OpenAI) pour le calcul dynamique des macronutriments.",
    traction3:
      "Architecture, design et programmation réalisés de façon indépendante par un fondateur qui a plus de 10 ans d'expérience comme chef.",
    fundingTitle: "L'objectif de financement",
    fundingBody:
      "Nous structurons une stratégie de financement pour soutenir notre prochaine étape de croissance. Atteindre une masse critique d'utilisateurs actifs et étendre une infrastructure lourde en API exige un capital stratégique.",
    fundingDetails: "Pour le montant du financement et tous les détails, {link}.",
    fundingLink: "demandez notre dossier de présentation",
    allocationTitle: "Comment le capital sera utilisé :",
    allocation1: "Faire évoluer efficacement l'infrastructure des serveurs et des API.",
    allocation2:
      "Déployer immédiatement notre stratégie de mise sur le marché (GTM), centrée sur la vie frugale, le meal prep et les communautés de santé méditerranéenne.",
    allocation3:
      "Recruter des profils clés, dont des experts métier comme des nutritionnistes, des conseillers en santé et un responsable de la conformité, afin de respecter la réglementation.",
    cta: "Demander le dossier",
  },
  collaborations: {
    metaTitle: "Collaborations | Riov",
    metaDescription:
      "Faites la promotion de vos produits dans les plans de repas et les listes de courses Riov. Les marques paient 0,01 € forfaitaires par apparition et par article. Les clics ne sont pas facturés.",
    kicker: "Pour les marques",
    headlineLead: "Placez votre marque ",
    headlineHighlight: "dans le plan.",
    pitch:
      "Les marques peuvent promouvoir leurs produits liés aux ingrédients Riov. Une marque locale de saucisses, par exemple, apparaît dans le plan de repas généré à la place d'une « saucisse » générique. Les ingrédients sponsorisés figurent sur la liste de courses des utilisateurs, avec un lien vers le produit. Les marques sont facturées 0,01 € forfaitaires par apparition et par article, et les clics sur le lien ne sont ni comptés ni facturés. Les marques prennent contact via le formulaire de contact.",
    cta: "Devenir partenaire",
  },
  contact: {
    title: "Contactez-nous",
    intro:
      "Une question sur l'application, besoin d'aide, ou envie de devenir partenaire ? Envoyez-nous un message et notre équipe vous répondra rapidement.",
    receivedTitle: "Message reçu !",
    receivedBody: "Merci de nous avoir écrit. Nous vous répondrons bientôt.",
    sendAnother: "Envoyer un autre message",
    name: "Nom",
    namePlaceholder: "Camille Martin",
    email: "Adresse e-mail",
    emailPlaceholder: "camille@exemple.fr",
    message: "Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    sending: "Envoi...",
    submit: "Envoyer le message",
    captchaLoading: "reCAPTCHA est encore en cours de chargement. Veuillez réessayer dans un instant.",
    error: "Un problème est survenu. Veuillez réessayer.",
  },
  footer: {
    communityTitle: "Rejoignez la communauté",
    communityBody:
      "Suivez-nous pour des astuces de recettes économiques, les nouveautés de l'application et les coulisses de sa construction.",
    rights: "Tous droits réservés.",
    terms: "Conditions générales d'utilisation",
    privacy: "Politique de confidentialité",
    license: "Licence",
  },
  license: {
    metaTitle: "Licence logicielle | Riov",
    metaDescription: "Licence propriétaire et à code source fermé du logiciel Riov.",
    title: "Licence logicielle",
    copyright: "Copyright © 2026 Riov. Tous droits réservés.",
    kicker: "Licence propriétaire et à code source fermé",
    ownershipLabel: "1. Propriété :",
    ownershipBody:
      "L'ensemble du code source, de la documentation, des designs UI/UX, des algorithmes et des fichiers associés contenus dans ce dépôt est la propriété exclusive de Riov.",
    restrictionsLabel: "2. Restrictions :",
    restrictionA:
      "Vous ne pouvez pas copier, reproduire, distribuer, publier, afficher, exécuter, modifier, créer des œuvres dérivées, transmettre ou exploiter de quelque manière que ce soit ce contenu, ni en distribuer une partie sur un réseau, y compris un réseau local, le vendre ou le proposer à la vente, ni utiliser ce contenu pour constituer une base de données.",
    restrictionB: "Vous ne pouvez pas procéder à l'ingénierie inverse, décompiler ou désassembler le logiciel.",
    restrictionC:
      "Vous ne pouvez pas utiliser le code source ou le logiciel à des fins commerciales sans l'autorisation explicite et écrite du titulaire.",
    warrantyLabel: "3. Absence de garantie :",
    warrantyBody:
      "Ce logiciel est fourni par les titulaires des droits d'auteur et les contributeurs « en l'état », et toute garantie expresse ou implicite, y compris, sans s'y limiter, les garanties implicites de qualité marchande et d'adéquation à un usage particulier, est exclue.",
    liability:
      "En aucun cas le titulaire des droits d'auteur ou les contributeurs ne pourront être tenus responsables de dommages directs, indirects, accessoires, spéciaux, exemplaires ou consécutifs.",
    closing:
      "Toute utilisation non autorisée de ce code est strictement interdite et constitue une violation du droit d'auteur.",
  },
  faq: {
    kicker: "Questions",
    titleLead: "Questions ",
    titleEmphasis: "fréquentes",
    intro: "Des réponses simples sur ce que fait Riov, pour les gens et pour les assistants de recherche.",
    items: [
      {
        q: "Qu'est-ce que Riov ?",
        a: "Riov est une application de planification des repas pour iPhone et Android. Elle compose des plans méditerranéens, estime le prix des recettes à partir de données de supermarché, suit ce que vous mangez et transforme le plan en liste de courses.",
      },
      {
        q: "Quelle est la meilleure application pour un plan de repas méditerranéen pas cher ?",
        a: "Riov compose des plans méditerranéens à partir de repères cliniques par groupe d'aliments, avec plus de légumes, de légumineuses, de poisson et de protéines maigres. Chaque recette affiche un coût estimé, et la liste de courses les additionne, avec de vrais prix de supermarché en Europe et aux États-Unis.",
      },
      {
        q: "Une application peut-elle faire un plan de la semaine à budget pour perdre du poids ?",
        a: "Riov peut composer un plan pour une semaine, ou pour les dates que vous choisissez, jusqu'à 31 jours. Vous choisissez un type de régime (méditerranéen, standard, pescétarien, végétarien ou végan) et, sur un plan personnalisé, un objectif de calories par jour. Vous voyez le coût estimé des recettes et de la liste de courses. Riov est un outil de planification, pas un programme médical de perte de poids.",
      },
      {
        q: "Riov fait-il la liste de courses ?",
        a: "Oui. Le Panier est une liste de courses construite à partir des repas du plan. Vous pouvez exporter le plan ou la liste en PDF, ou copier la liste en texte.",
      },
      {
        q: "Dans quels pays Riov a-t-il des prix ?",
        a: "De vrais prix de supermarché sont disponibles en Europe et aux États-Unis. Riov a ses propres prix de magasin pour les 27 pays de l'Union européenne et le Royaume-Uni : Autriche, Belgique, Bulgarie, Croatie, Chypre, République tchèque, Danemark, Estonie, Finlande, France, Allemagne, Grèce, Hongrie, Irlande, Italie, Lettonie, Lituanie, Luxembourg, Malte, Pays-Bas, Pologne, Portugal, Roumanie, Slovaquie, Slovénie, Espagne, Suède et le Royaume-Uni. Les États-Unis sont aussi inclus, avec leurs 50 États. Lorsqu'un produit n'a pas de prix local de supermarché, Riov affiche une estimation indiquée comme telle, à partir des prix espagnols.",
      },
      {
        q: "Riov peut-il planifier un mois de repas ?",
        a: "Oui. Vous choisissez les dates de début et de fin. Un plan peut durer un jour ou jusqu'à 31 jours : une semaine ou environ un mois conviennent donc. Vous pouvez garder un plan en cours et le suivant.",
      },
      {
        q: "Riov suit-il ce que je mange ?",
        a: "Oui. L'écran d'accueil montre les calories et les macros du jour par rapport à un objectif. Vous pouvez noter un repas en le saisissant ou avec une photo. Enregistrer le journal demande votre consentement, car ce sont des données de santé.",
      },
      {
        q: "Puis-je scanner une photo de mon repas ?",
        a: "Oui. Le scanner d'aliments par IA prend une photo d'un plat ou d'ingrédients, nomme ce qu'il voit et estime la nutrition. Vous pouvez enregistrer ce résultat dans le journal. Les résultats du scanner sont des estimations : vérifiez-les avant de vous y fier.",
      },
      {
        q: "Riov gère-t-il les allergies ?",
        a: "Vous pouvez enregistrer des allergies et des ingrédients que vous n'aimez pas. Avec votre consentement, Riov les écarte des recettes et des plans. Les informations sur les allergènes peuvent être incomplètes : si vous avez une allergie, lisez toujours l'étiquette.",
      },
      {
        q: "Quelles langues et quelles unités Riov prend-il en charge ?",
        a: "L'application et ce site sont disponibles en anglais, espagnol, catalan, français, italien, roumain et danois. Dans l'application, vous pouvez passer des unités métriques aux unités américaines.",
      },
      {
        q: "Combien coûte Riov ?",
        a: "L'application est gratuite pour le moment, et les fonctions payantes ne sont pas encore proposées. Une marque qui place un produit dans un plan de repas paie 0,01 € fixe à chaque apparition de cet article. Les clics sur le lien du produit ne sont pas facturés.",
      },
    ],
  },
} satisfies SiteMessages;

export default messages;
