const bonbonFlorentin = {
  id: "bonbon-florentin",
  title: "Bonbon Florentin & Ganache Amère",
  category: "CHOCOLATERIE",
  subCategory: [],
  isVip: true,
  prepTime: "2H 30 + 24H (Cristal)",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "L'élégance d'un classique revisité. Un disque de nougatine croustillante aux amandes, oranges et miel, surmonté d'une ganache noire intense et peu sucrée.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/cbef407c92ab7561d5406e122492664a.png",
  baseServings: 1, 
  
  ingredients: [
    { name: "Sucre semoule", amount: 750, unit: "g", note: "Florentin" },
    { name: "Miel", amount: 250, unit: "g", note: "Florentin" },
    { name: "Crème liquide 35%", amount: 750, unit: "g", note: "Florentin" },
    { name: "Beurre", amount: 750, unit: "g", note: "Florentin" },
    { name: "Amandes effilées", amount: 850, unit: "g", note: "Florentin" },
    { name: "Oranges confites cubes", amount: 750, unit: "g", note: "Florentin" },
    { name: "Crème liquide 35%", amount: 1300, unit: "g", note: "Ganache" },
    { name: "Sucre inverti (Trimoline)", amount: 200, unit: "g", note: "Ganache" },
    { name: "Couverture Noire 70%", amount: 1100, unit: "g", note: "Ganache" },
    { name: "Beurre de cacao", amount: 30, unit: "g", note: "Ganache" },
    { name: "Beurre doux", amount: 150, unit: "g", note: "Ganache" },
    { name: "Couverture Noire", amount: 3000, unit: "g", note: "Enrobage" }
  ],

  steps: [
    { 
      title: "La Masse Florentin", 
      text: "Cuire sucre, miel, crème et beurre à 118°C. Ajouter amandes et oranges hors du feu. Mélanger délicatement." 
    },
    { 
      title: "La Cuisson Florentin", 
      text: "Étaler sur Silpat ou moules. Cuire à 170°C jusqu'à coloration caramel doré (10-12 min). Refroidir." 
    },
    { 
      title: "La Ganache Amère", 
      text: "Bouillir la crème et le sucre inverti. Verser sur le chocolat et le beurre de cacao. Émulsionner. À 40°C, ajouter le beurre. Couler en cadre de 4mm. Cristalliser 24h à 16°C." 
    },
    { 
      title: "Le Chablonnage", 
      text: "Chablonner la ganache. Coller les disques de florentins froids sur la ganache avec un peu de chocolat tempéré." 
    },
    { 
      title: "Finition", 
      text: "Détailler. Enrober partiellement ou totalement avec de la couverture noire." 
    }
  ],

  advices: [
    "Le chablonnage est crucial pour isoler le florentin (sucre cuit) de l'humidité de la ganache."
  ],
  chefQuote: "Visez une couleur 'acajou' pour le florentin. Trop pâle, il colle ; trop foncé, il est amer.",
  equipment: [
    "Casserole",
    "Cadre 4mm",
    "Guitare"
  ]
};

export default bonbonFlorentin;