const cremePatissiereCitron = {
  id: "creme-patissiere-citron",
  title: "Crème Pâtissière Citron",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "10 MIN",
  difficulty: "FACILE",
  description: "Une version acidulée et fraîche de la classique crème pâtissière. Parfaite pour garnir des choux, des éclairs ou un fond de tarte.",
  image: "https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2018~09~25~ce09e092-b3d7-486a-a8b6-b8543b5533c1.jpeg/650x365/quality/80/crop-from/center/creme-patissiere-au-citron.jpeg",
  baseServings: 1, // Environ 500g
  
  ingredients: [
    { name: "Jus de citron jaune", amount: 150, unit: "g" },
    { name: "Zeste de citron", amount: 2, unit: "pièces" },
    { name: "Œufs entiers", amount: 100, unit: "g" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Maïzena", amount: 20, unit: "g" },
    { name: "Beurre doux", amount: 75, unit: "g" },
    { name: "Gélatine (feuille)", amount: 2, unit: "g", note: "Optionnel" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "Zester les citrons. Presser le jus. Hydrater la gélatine." 
    },
    { 
      title: "Mélange à froid", 
      text: "Fouetter les œufs avec le sucre. Ajouter la maïzena." 
    },
    { 
      title: "Cuisson", 
      text: "Porter le jus de citron (avec zestes) à ébullition. Verser sur le mélange œufs/sucre. Reverser dans la casserole et cuire à feu moyen jusqu'à épaississement." 
    },
    { 
      title: "Finition", 
      text: "Hors du feu, ajouter la gélatine essorée. Laisser tiédir vers 45°C, puis ajouter le beurre et mixer pour émulsionner." 
    }
  ],

  advices: [
    "L'émulsion au mixeur avec le beurre est cruciale pour casser l'acidité trop vive du citron et apporter de l'onctuosité."
  ],
  chefQuote: "Si vous voulez une crème très lisse, filtrez les zestes avant de cuire, ou après cuisson.",
  equipment: [
    "Casserole",
    "Mixeur plongeant",
    "Zesteur"
  ]
};

export default cremePatissiereCitron;