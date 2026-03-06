const focaccia = {
  id: "focaccia",
  title: "Focaccia",
  category: "Pâtisserie",
  subCategory: ["Pâtes"], // Correction : Pâtes (Levées)
  isVip: false,
  prepTime: "20 MIN + Repos",
  cookTime: "25 MIN",
  difficulty: "MOYEN",
  description: "Une spécialité italienne moelleuse et parfumée à l'huile d'olive, aux herbes et à la fleur de sel. Idéale à l'apéritif ou en accompagnement.",
  image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/63D3854D-D39C-4999-9DC0-AFF9583DB3F7/Derivates/BF9507B3-F2C0-4262-8346-649A5F980789.jpg",
  baseServings: 1, // 1 Plaque
  
  ingredients: [
    { name: "Farine T55 (riche en gluten)", amount: 500, unit: "g" },
    { name: "Eau tiède", amount: 350, unit: "g" },
    { name: "Levure boulangère fraîche", amount: 15, unit: "g" },
    { name: "Sel fin", amount: 10, unit: "g" },
    { name: "Huile d'olive (pâte)", amount: 40, unit: "g" },
    { name: "Huile d'olive (finition)", amount: 30, unit: "g" },
    { name: "Romarin frais", amount: 2, unit: "branches" },
    { name: "Fleur de sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "PÉTRISSAGE", 
      text: "Mélanger la farine, la levure émiettée, l'eau et le sel (ajouter le sel en dernier). Pétrir 5 min. Ajouter les 40g d'huile d'olive et pétrir jusqu'à incorporation complète. La pâte est très hydratée et collante." 
    },
    { 
      title: "RABATS ET POINTAGE", 
      text: "Mettre la pâte dans un bac huilé. Laisser lever 30 min. Faire un rabat (replier les 4 côtés vers le centre). Répéter l'opération 3 fois toutes les 30 min (Total 2h de pousse)." 
    },
    { 
      title: "MISE EN PLAQUE", 
      text: "Verser la pâte sur une plaque de cuisson généreusement huilée. L'étaler doucement du bout des doigts sans l'écraser." 
    },
    { 
      title: "APPRÊT", 
      text: "Laisser lever à nouveau 45 min à 1h. La pâte doit être bien gonflée et bullée." 
    },
    { 
      title: "EMPREINTES", 
      text: "Arroser d'huile d'olive. Enfoncer les doigts dans la pâte pour créer les trous caractéristiques (les fossettes). Parsemer de romarin et de fleur de sel." 
    },
    { 
      title: "CUISSON", 
      text: "Enfourner à 220°C pendant 20 à 25 minutes jusqu'à ce qu'elle soit bien dorée." 
    }
  ],

  advices: ["Ne dégazez pas la pâte lors de l'étalement, ce sont les bulles d'air qui donnent la texture."],
  chefQuote: "Ajoutez des olives ou des tomates séchées dans les trous avant cuisson pour une version garnie.",
  equipment: ["Robot pétrisseur", "Plaque de cuisson"]
};

export default focaccia;