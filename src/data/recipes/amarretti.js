const amarretti = {
  id: "amarretti",
  title: "L'Amarretti",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: true,
  prepTime: "4H + Repos",
  cookTime: "30 MIN",
  difficulty: "AVANCÉ",
  description: "Une création exclusive où la douceur du biscuit noisette rencontre l'acidité parfumée d'une compotée de griottes et l'onctuosité d'une mousse légère au lait d'amande.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3c901d5843ce9d7c979b087d04c101de.png",
  
  ingredients: [
    // Biscuit Noisette
    { name: "Blancs d'oeufs", amount: 90, unit: "g", note: "Biscuit Noisette" },
    { name: "Sucre glace", amount: 50, unit: "g", note: "Biscuit Noisette" },
    { name: "Poudre de noisettes", amount: 50, unit: "g", note: "Biscuit Noisette" },
    { name: "Farine T45", amount: 20, unit: "g", note: "Biscuit Noisette" },
    { name: "Beurre noisette", amount: 20, unit: "g", note: "Biscuit Noisette" },
    
    // Compotée Griottes
    { name: "Griottes (surgelées ou fraîches)", amount: 200, unit: "g", note: "Insert Griotte" },
    { name: "Sucre semoule", amount: 30, unit: "g", note: "Insert Griotte" },
    { name: "Pectine NH", amount: 3, unit: "g", note: "Insert Griotte" },
    { name: "Jus de citron", amount: 5, unit: "g", note: "Insert Griotte" },
    
    // Crème Lait d'Amande
    { name: "Lait d'amande", amount: 250, unit: "g", note: "Mousse Amande" },
    { name: "Sucre semoule", amount: 40, unit: "g", note: "Mousse Amande" },
    { name: "Jaunes d'oeufs", amount: 40, unit: "g", note: "Mousse Amande" },
    { name: "Gélatine (feuilles 200 Bloom)", amount: 4, unit: "g", note: "Mousse Amande" },
    { name: "Crème liquide 35%", amount: 200, unit: "g", note: "Mousse Amande" },
    { name: "Amaretto", amount: 10, unit: "g", note: "Mousse Amande (facultatif)" },
    
    // Glaçage Miroir
    { name: "Eau", amount: 75, unit: "g", note: "Glaçage" },
    { name: "Sucre semoule", amount: 150, unit: "g", note: "Glaçage" },
    { name: "Glucose", amount: 150, unit: "g", note: "Glaçage" },
    { name: "Lait concentré sucré", amount: 100, unit: "g", note: "Glaçage" },
    { name: "Gélatine (feuilles 200 Bloom)", amount: 10, unit: "g", note: "Glaçage" },
    { name: "Chocolat blanc", amount: 150, unit: "g", note: "Glaçage" }
  ],

  steps: [
    { 
      title: "Le Biscuit Noisette", 
      text: "Réaliser un beurre noisette et le laisser tiédir. Monter les blancs en neige ferme en serrant avec le sucre glace. Incorporer délicatement la poudre de noisettes et la farine tamisées à la maryse. Terminer par le beurre noisette tiède. Etaler sur 1cm d'épaisseur et cuire à 170°C pendant 12 à 15 minutes. Détailler un disque de Ø16cm." 
    },
    { 
      title: "L'Insert Griotte", 
      text: "Dans une casserole, chauffer les griottes avec une partie du sucre et le jus de citron. À 40°C, ajouter le mélange sucre restant + Pectine NH en pluie. Porter à ébullition pendant 1 minute tout en remuant. Couler dans un cercle de Ø14cm filmé et congeler à cœur (minimum 2h)." 
    },
    { 
      title: "La Crème Légère Amande", 
      text: "Hydrater la gélatine. Réaliser une crème anglaise : chauffer le lait d'amande, verser sur le mélange jaunes + sucre, et cuire à la nappe (83°C). Ajouter la gélatine essorée (et l'Amaretto) hors du feu. Refroidir à 25°C - 30°C. Monter la crème liquide en chantilly mousseuse (pas trop ferme) et l'incorporer délicatement à la crème anglaise tiède." 
    },
    { 
      title: "Le Glaçage Miroir Rouge", 
      text: "Hydrater la gélatine. Cuire l'eau, le sucre et le glucose à 103°C. Verser sur le lait concentré, la gélatine essorée et le chocolat blanc (et le colorant rouge). Mixer au mixeur plongeant sans incorporer d'air. Filmer au contact et laisser reposer 24h au frais pour une brillance optimale. Utilisation à 30°C - 32°C." 
    },
    { 
      title: "Le Montage (A l'envers)", 
      text: "Dans un cercle de Ø18cm filmé : Pocher une couche de mousse amande au fond et sur les bords. Déposer l'insert griotte congelé au centre. Recouvrir d'un peu de mousse. Fermer avec le disque de biscuit noisette. Lisser à ras. Surgeler une nuit." 
    },
    { 
      title: "La Finition", 
      text: "Réchauffer le glaçage à 30°C - 32°C. Démouler l'entremets congelé, le placer sur une grille et glacer immédiatement. Décorer la base avec des amandes effilées torréfiées ou des brisures de biscuit." 
    }
  ],

  // Données des onglets (Tabs)
  advices: "Le glaçage doit être utilisé entre 30 et 32°C sur un entremets sorti directement du congélateur. S'il est trop chaud, il coule trop vite (transparence). S'il est trop froid, il fige en faisant des vagues.",
  chefQuote: "L'Amarretti joue sur le contraste entre la rondeur sucrée de l'amande et le pep's acidulé de la griotte. C'est un dessert qui demande de la précision sur le sucre.",
  equipment: [
    "Cercle Ø18cm (h 4.5cm)",
    "Cercle Ø14cm (Insert)",
    "Mixeur plongeant",
    "Thermomètre sonde"
  ]
};

export default amarretti;