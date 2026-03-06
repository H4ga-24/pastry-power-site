const muscadineAuCognac = {
  id: "muscadine-au-cognac",
  title: "Muscadine au Cognac",
  category: "Chocolaterie",
  subCategory: ["Confiseries diverses"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "24H (Repos) + 2H",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "Une spécialité traditionnelle en forme de bûchette. Une ganache onctueuse au praliné et au Cognac, enrobée d'une fine couche de chocolat et roulée dans le sucre glace. Un classique indémodable.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/5b021fbe8cb4f5ec938c0d64d1d04553.png",
  baseServings: 240, // "240-300 pièces"
  
  ingredients: [
    { name: "Praliné Noisette 60%", amount: 500, unit: "g", note: "Ganache" },
    { name: "Couverture Lait 40%", amount: 800, unit: "g", note: "Ganache" },
    { name: "Beurre de cacao", amount: 60, unit: "g", note: "Ganache" },
    { name: "Sorbitol (poudre)", amount: 25, unit: "g", note: "Ganache" },
    { name: "Cognac (60% vol)", amount: 150, unit: "g", note: "Ganache" },
    { name: "Beurre pommade", amount: 200, unit: "g", note: "Ganache" },
    { name: "Couverture Noire 64%", amount: 600, unit: "g", note: "Enrobage" },
    { name: "Sucre glace amylacé", amount: 500, unit: "g", note: "Finition" }
  ],

  steps: [
    { 
      title: "1. Ganache Praliné Cognac", 
      text: "Fondre la couverture lait et le beurre de cacao à 45°C. Mélanger le praliné et le sorbitol. Ajouter le mélange chocolat fondu. Incorporer le beurre pommade. Ajouter le Cognac. Émulsionner si nécessaire. Cadrer ou laisser cristalliser pour pocher." 
    },
    { 
      title: "2. Façonnage", 
      text: "Si cadré : détailler en rectangles ou carrés. Si poché : dresser des boudins. Laisser croûter 24h." 
    },
    { 
      title: "3. Enrobage et Finition", 
      text: "Mettre au point la couverture noire. Enrober les intérieurs à la main ou à la fourchette. Rouler immédiatement dans le sucre glace. Laisser cristalliser. Tamiser pour enlever l'excédent de sucre." 
    }
  ],

  advices: ["Le sorbitol améliore la conservation et la texture (AW)."],
  chefQuote: "L'enrobage doit être très fin pour ne pas masquer le goût subtil du Cognac.",
  equipment: ["Cadre ganache", "Fourchettes à tremper", "Thermomètre"]
};

export default muscadineAuCognac;