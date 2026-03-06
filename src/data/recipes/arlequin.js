const arlequin = {
  id: "arlequin",
  title: "L'Arlequin",
  category: "Pâtisserie", 
  subCategory: ["Entremets"],
  isVip: true,
  prepTime: "5H + Congel",
  cookTime: "20 MIN",
  difficulty: "EXPERT",
  description: "Un entremets haut en couleur : l'alliance acidulée de la passion et de la framboise rencontre la douceur de la pistache dans un jeu de textures moelleuses et fondantes.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/f31e1f663893ced8b953a4ddb60456e7.png",
  baseServings: 5,
  
  ingredients: [
    { name: "Sucre glace", amount: 240, unit: "g", note: "Financier Pistache" },
    { name: "Poudre d'amande", amount: 90, unit: "g", note: "Financier Pistache" },
    { name: "Farine T55", amount: 90, unit: "g", note: "Financier Pistache" },
    { name: "Pâte de pistache pure", amount: 50, unit: "g", note: "Financier Pistache" },
    { name: "Blancs d'œufs", amount: 240, unit: "g", note: "Financier Pistache" },
    { name: "Beurre noisette", amount: 150, unit: "g", note: "Financier Pistache" },
    
    { name: "Oeufs entiers", amount: 250, unit: "g", note: "Biscuit Joconde" },
    { name: "Sucre glace", amount: 190, unit: "g", note: "Biscuit Joconde" },
    { name: "Poudre d'amande", amount: 150, unit: "g", note: "Biscuit Joconde" },
    { name: "Pâte de pistache", amount: 40, unit: "g", note: "Biscuit Joconde" },
    { name: "Farine T45", amount: 50, unit: "g", note: "Biscuit Joconde" },
    { name: "Beurre fondu", amount: 35, unit: "g", note: "Biscuit Joconde" },
    { name: "Blancs d'œufs", amount: 165, unit: "g", note: "Biscuit Joconde" },
    { name: "Sucre semoule", amount: 25, unit: "g", note: "Biscuit Joconde" },
    
    { name: "Purée Passion", amount: 125, unit: "g", note: "Coulis Passion" },
    { name: "Purée Mangue", amount: 125, unit: "g", note: "Coulis Passion" },
    { name: "Purée Framboise", amount: 250, unit: "g", note: "Coulis Framboise" },
    { name: "Sucre", amount: 55, unit: "g", note: "Coulis (27g + 28g)" },
    { name: "Gélatine", amount: 10, unit: "g", note: "Coulis (5g + 5g)" },
    
    { name: "Purée Passion", amount: 200, unit: "g", note: "Mousse Passion" },
    { name: "Purée Framboise", amount: 200, unit: "g", note: "Mousse Framboise" },
    { name: "Meringue Italienne", amount: 180, unit: "g", note: "Mousses (90g + 90g)" },
    { name: "Crème fouettée 35%", amount: 440, unit: "g", note: "Mousses (220g + 220g)" },
    { name: "Gélatine", amount: 12, unit: "g", note: "Mousses (6g + 6g)" }
  ],

  steps: [
    { 
      title: "Le Financier Pistache (Base)", 
      text: "Réaliser un beurre noisette et le laisser tiédir (45°C). Dans un cul-de-poule, mélanger le sucre glace, la poudre d'amande, la farine et les blancs d'œufs non montés. Ajouter la pâte de pistache, puis le beurre noisette. Couler dans 5 cercles de 10cm de diamètre beurrés. Cuire à 170°C pendant 12 à 15 minutes. Laisser refroidir." 
    },
    { 
      title: "Le Biscuit Joconde Pistache (Tour)", 
      text: "Au batteur, monter les œufs entiers, le sucre glace, la poudre d'amande et la pâte de pistache jusqu'au ruban (10 min). Incorporer la farine tamisée puis le beurre fondu tiède. Monter les blancs en neige ferme avec le sucre semoule et les incorporer délicatement. Étaler sur plaque (40x60cm) sur 5mm d'épaisseur. Cuire à 230°C pendant 6 à 8 minutes. Détailler des bandes de 4,5cm de haut." 
    },
    { 
      title: "Les Inserts Coulis", 
      text: "Hydrater la gélatine. Chauffer 1/3 de la purée passion/mangue, y fondre 5g de gélatine essorée et 27g de sucre. Mélanger au reste de purée froide. Couler 5 disques de Ø10cm (1cm épaisseur). Surgeler. Répéter l'opération pour la framboise avec le reste des ingrédients." 
    },
    { 
      title: "Les Mousses de Fruits", 
      text: "Chauffer 1/3 de la purée passion, y fondre 6g de gélatine hydratée. Mélanger au reste de purée froide. Incorporer 90g de meringue italienne, puis 220g de crème fouettée mousseuse. Répéter l'opération à l'identique pour la mousse framboise. Utiliser immédiatement." 
    },
    { 
      title: "Le Montage", 
      text: "Chemiser 5 cercles de Ø12cm avec du Rhodoïd et une bande de Joconde. Placer un disque de Financier au fond. Pocher une couche de mousse Framboise. Déposer un insert Passion congelé. Pocher une couche de mousse Passion. Déposer un insert Framboise congelé. Lisser à ras avec le reste de mousse. Surgeler." 
    },
    { 
      title: "La Finition", 
      text: "Démouler les entremets congelés. Napper le dessus avec un nappage neutre ou un glaçage rouge/jaune. Décorer avec des framboises fraîches, des éclats de pistaches vertes et des pointes de feuille d'or." 
    }
  ],

  advices: [
    "Assurez-vous que les inserts de coulis sont bien centrés lors du montage pour avoir une belle coupe à la découpe.",
    "Ne montez pas trop votre crème fouettée pour les mousses, elle doit rester mousseuse."
  ],
  chefQuote: "L'Arlequin est un jeu de contrastes : l'acidité et la fraîcheur des fruits qui viennent couper le gras et la sucrosité de la pistache. Il demande beaucoup de rigueur sur le montage.",
  equipment: [
    "5 cercles Ø12cm (h 4.5cm)",
    "5 cercles Ø10cm (pour inserts)",
    "Rhodoïd",
    "Plaque 40x60cm"
  ]
};

export default arlequin;