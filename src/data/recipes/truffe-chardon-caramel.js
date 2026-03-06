const truffeChardonCaramel = {
  id: "truffe-chardon-caramel",
  title: "Truffe Chardon au Caramel",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "2H + 24H (Cristallisation)",
  cookTime: "15 MIN",
  difficulty: "EXPERT",
  description: "Un bonbon mythique à l'aspect piquant. Une ganache fondante au caramel et à la fleur de sel, enrobée d'une couverture noire texturée grâce au passage sur une grille à chardon.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/3cb65d12941c94016dfe5729457af895.png",
  baseServings: 200, // pièces
  
  ingredients: [
    { name: "Sucre semoule", amount: 1600, unit: "g", note: "Ganache" },
    { name: "Crème liquide 35%", amount: 1600, unit: "g", note: "Ganache" },
    { name: "Sirop de glucose DE60", amount: 200, unit: "g", note: "Ganache" },
    { name: "Sorbitol poudre", amount: 100, unit: "g", note: "Ganache" },
    { name: "Fleur de sel", amount: 12, unit: "g", note: "Ganache" },
    { name: "Couverture Lait 40%", amount: 2800, unit: "g", note: "Ganache" },
    { name: "Beurre de cacao", amount: 100, unit: "g", note: "Ganache" },
    { name: "Beurre doux", amount: 400, unit: "g", note: "Ganache" },
    { name: "Couverture Noire 64%", amount: 3000, unit: "g", note: "Enrobage Chardon" },
    { name: "Couverture Noire", amount: 500, unit: "g", note: "Mise au point" }
  ],

  steps: [
    { 
      title: "Ganache Caramel", 
      text: "Réaliser un caramel à sec avec le sucre semoule. En parallèle, chauffer la crème liquide avec le glucose, le sorbitol et la fleur de sel. Décuire le caramel avec la crème chaude (attention aux projections). Cuire le tout à 105°C pour assurer une bonne conservation et texture. Laisser refroidir à 60°C. Verser sur la couverture lait et le beurre de cacao partiellement fondus. Réaliser l'émulsion au mixeur plongeant. À 35°C-40°C, incorporer le beurre doux en parcelles et mixer à nouveau." 
    },
    { 
      title: "Dressage et Façonnage", 
      text: "Laisser cristalliser la ganache à température ambiante (16-18°C) jusqu'à ce qu'elle ait une texture pochable (environ 24h). Dresser des boules régulières à la poche munie d'une douille lisse sur feuille guitare. Laisser cristalliser. Rouler chaque boule à la main pour les rendre parfaitement sphériques." 
    },
    { 
      title: "Enrobage 'Chardon'", 
      text: "Mettre au point la couverture noire. Tremper les boules de ganache dans la couverture tempérée. Rouler immédiatement la truffe enrobée sur une 'grille à chardon' (grille à mailles métalliques). Le mouvement de roulement sur les fils de la grille va tirer le chocolat pour former les picots caractéristiques. Laisser cristalliser." 
    }
  ],

  advices: ["Le mouvement sur la grille à chardon demande le bon coup de main : il faut faire rouler la truffe pendant que le chocolat commence tout juste à figer pour que les pics tiennent."],
  chefQuote: "Le sorbitol ajouté à la ganache permet d'abaisser l'activité de l'eau (Aw) et prolonge considérablement la durée de vie (DLUO) de la truffe.",
  equipment: ["Mixeur plongeant", "Thermomètre", "Poche à douille", "Grille à chardon"]
};

export default truffeChardonCaramel;