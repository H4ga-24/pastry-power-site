const bonbonFlorentin = {
  id: "bonbon-florentin",
  title: "Bonbon Florentin & Ganache AmÃ¨re",
  category: "Chocolaterie",
  subCategory: [],
  isVip: true,
  prepTime: "2H 30 + 24H (Cristal)",
  cookTime: "15 MIN",
  difficulty: "AVANCÃ‰",
  description: "L'Ã©lÃ©gance d'un classique revisitÃ©. Un disque de nougatine croustillante aux amandes, oranges et miel, surmontÃ© d'une ganache noire intense et peu sucrÃ©e.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/cbef407c92ab7561d5406e122492664a.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 750, unit: "g", note: "Florentin" },
    { name: "Miel", amount: 250, unit: "g", note: "Florentin" },
    { name: "CrÃ¨me liquide 35%", amount: 750, unit: "g", note: "Florentin" },
    { name: "Beurre", amount: 750, unit: "g", note: "Florentin" },
    { name: "Amandes effilÃ©es", amount: 850, unit: "g", note: "Florentin" },
    { name: "Oranges confites cubes", amount: 750, unit: "g", note: "Florentin" },
    { name: "CrÃ¨me liquide 35%", amount: 1300, unit: "g", note: "Ganache" },
    { name: "Sucre inverti (Trimoline)", amount: 200, unit: "g", note: "Ganache" },
    { name: "Couverture Noire 70%", amount: 1100, unit: "g", note: "Ganache" },
    { name: "Beurre de cacao", amount: 30, unit: "g", note: "Ganache" },
    { name: "Beurre doux", amount: 150, unit: "g", note: "Ganache" },
    { name: "Couverture Noire", amount: 3000, unit: "g", note: "Enrobage" }
  ],

  steps: [
    { 
      title: "La Masse Florentin", 
      text: "Cuire sucre, miel, crÃ¨me et beurre Ã  118Â°C. Ajouter amandes et oranges hors du feu. MÃ©langer dÃ©licatement." 
    },
    { 
      title: "La Cuisson Florentin", 
      text: "Ã‰taler sur Silpat ou moules. Cuire Ã  170Â°C jusqu'Ã  coloration caramel dorÃ© (10-12 min). Refroidir." 
    },
    { 
      title: "La Ganache AmÃ¨re", 
      text: "Bouillir la crÃ¨me et le sucre inverti. Verser sur le chocolat et le beurre de cacao. Ã‰mulsionner. Ã€ 40Â°C, ajouter le beurre. Couler en cadre de 4mm. Cristalliser 24h Ã  16Â°C." 
    },
    { 
      title: "Le Chablonnage", 
      text: "Chablonner la ganache. Coller les disques de florentins froids sur la ganache avec un peu de chocolat tempÃ©rÃ©." 
    },
    { 
      title: "Finition", 
      text: "DÃ©tailler. Enrober partiellement ou totalement avec de la couverture noire." 
    }
  ],

  advices: [
    "Le chablonnage est crucial pour isoler le florentin (sucre cuit) de l'humiditÃ© de la ganache."
  ],
  chefQuote: "Visez une couleur 'acajou' pour le florentin. Trop pÃ¢le, il colle ; trop foncÃ©, il est amer.",
  equipment: [
    "Casserole",
    "Cadre 4mm",
    "Guitare"
  ]
};

export default bonbonFlorentin;
