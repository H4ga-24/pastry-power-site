const macaronCitronVert = {
  id: "macaron-citron-vert",
  title: "Macaron Citron Vert",
  category: "Confiserie",
  subCategory: ["Macarons"],
  isVip: false,
  prepTime: "2H 00",
  cookTime: "14 MIN",
  difficulty: "DIFFICILE",
  description: "La fraîcheur acidulée du citron vert capturée dans une crème onctueuse, nichée entre deux coques tendres et croquantes.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/d19ff6df5fa5adf008867b48b0007ff0.jpg",
  baseServings: 70, // coques
  
  ingredients: [
    { name: "Tant pour tant amandes", amount: 500, unit: "g", note: "Coques" },
    { name: "Sucre glace", amount: 200, unit: "g", note: "Coques" },
    { name: "Blancs d'œufs", amount: 200, unit: "g", note: "Coques" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Coques" },
    { name: "Zestes de citron vert", amount: 2, unit: "pièces", note: "Coques" },
    { name: "Crème de tartre", amount: 1, unit: "g", note: "Coques" },
    { name: "Colorant Jaune", amount: 1, unit: "pincée", note: "Coques" },
    { name: "Colorant Bleu", amount: 1, unit: "pincée", note: "Coques" },
    { name: "Jus de citron vert", amount: 150, unit: "g", note: "Garniture" },
    { name: "Sucre semoule", amount: 300, unit: "g", note: "Garniture" },
    { name: "Beurre", amount: 200, unit: "g", note: "Garniture" },
    { name: "Œufs", amount: 300, unit: "g", note: "Garniture" },
    { name: "Gélatine en feuille", amount: 4, unit: "g", note: "Garniture" }
  ],

  steps: [
    { 
      title: "Coques", 
      text: "Broyer et tamiser le tant pour tant et le sucre glace. Monter les blancs avec la crème de tartre et un peu de sucre. Ajouter les colorants (vert). Serrer avec le reste du sucre. Incorporer les poudres (et zestes si souhaité). Macaronner. Dresser. Cuire à 150°C (4-5 min fermé, 12-14 min ouvert)." 
    },
    { 
      title: "Crème Citron Vert", 
      text: "Hydrater la gélatine. Mélanger jus de citron, sucre et œufs. Cuire au bain-marie ou feu doux jusqu'à épaississement (83°C), comme une crème pâtissière. Hors du feu, ajouter la gélatine essorée. Refroidir à 40°C. Ajouter le beurre en morceaux et mixer pour émulsionner. Laisser prendre au froid." 
    },
    { 
      title: "Montage", 
      text: "Garnir les coques avec la crème citron vert prise. Réserver 24h au frais." 
    }
  ],

  advices: ["Ne faites jamais bouillir la crème au citron, sinon les œufs coagulent (omelette sucrée)."],
  chefQuote: "Zestez les citrons verts directement dans le sucre de la crème 1h avant pour plus de parfum.",
  equipment: ["Robot coupe", "Poche à douille", "Thermomètre"]
};

export default macaronCitronVert;