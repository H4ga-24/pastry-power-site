const rocherCroustillant = {
  id: "rocher-croustillant",
  title: "Rocher Croustillant (Praliné Feuilletine)",
  category: "Chocolaterie",
  subCategory: [],
  isVip: false,
  prepTime: "2H 30",
  cookTime: "15 MIN",
  difficulty: "INTERMÉDIAIRE",
  description: "Une gourmandise absolue. Un praliné maison rustique riche en noisettes, rendu croustillant par l'ajout généreux de feuilletine, puis enrobé d'un glaçage rocher aux amandes hachées.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/2595a1f7694eed76382db1c61c0cdf5e.jpg",
  baseServings: 640, // pièces (recette pro)
  
  ingredients: [
    { name: "Sucre semoule", amount: 1200, unit: "g", note: "Praliné" },
    { name: "Noisettes brutes", amount: 1800, unit: "g", note: "Praliné" },
    { name: "Gousses de vanille", amount: 2, unit: "pce", note: "Praliné" },
    { name: "Couverture Lait 40%", amount: 700, unit: "g", note: "Masse" },
    { name: "Beurre de cacao", amount: 200, unit: "g", note: "Masse" },
    { name: "Pailleté Feuilletine", amount: 800, unit: "g", note: "Masse" },
    { name: "Couverture Lait 40%", amount: 2500, unit: "g", note: "Enrobage" },
    { name: "Huile de pépin de raisin", amount: 150, unit: "g", note: "Enrobage" },
    { name: "Amandes hachées torréfiées", amount: 600, unit: "g", note: "Enrobage" }
  ],

  steps: [
    { 
      title: "1. Le Praliné Maison", 
      text: "Réaliser un praliné à l'ancienne avec les noisettes torréfiées et le caramel (sucre + vanille cuit à sec). Mixer jusqu'à obtenir une pâte fluide." 
    },
    { 
      title: "2. La Masse Croustillante", 
      text: "Fondre la couverture lait (700g) et le beurre de cacao. Mélanger avec le praliné tempéré. Ajouter la feuilletine délicatement pour ne pas trop l'écraser. Étaler dans un cadre ou détailler en petits cubes/dômes." 
    },
    { 
      title: "3. Préparation de l'enrobage", 
      text: "Mettre au point (tempérer) la grande quantité de couverture lait. Ajouter l'huile (qui fluidifie) et les amandes hachées torréfiées." 
    },
    { 
      title: "4. Enrobage", 
      text: "Tremper les intérieurs praliné/feuilletine dans l'enrobage rocher. Égoutter l'excédent et déposer sur feuille guitare pour cristallisation." 
    }
  ],

  advices: ["L'ajout d'huile dans l'enrobage est le secret pour une coque plus fine et moins dure à la mâche."],
  chefQuote: "La feuilletine ne ramollit jamais si elle est bien enrobée de beurre de cacao et de chocolat avant contact avec l'air.",
  equipment: ["Robot coupe", "Cadre inox", "Fourchette à tremper"]
};

export default rocherCroustillant;