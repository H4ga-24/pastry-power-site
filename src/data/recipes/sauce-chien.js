const sauceChien = {
  id: "sauce-chien",
  title: "La Sauce Chien (Antillaise)",
  category: "Cuisine",
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "30 MIN (Repos)",
  difficulty: "TRÈS FACILE",
  description: "L'incontournable de la cuisine créole. Une sauce verte, fraîche et parfumée aux herbes, idéale pour accompagner les poissons grillés, les crustacés ou le poulet boucané.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/631b2c6de02f3e285561f898efaa6c96.jpg",
  baseServings: 4, // personnes
  
  ingredients: [
    { name: "Gousse d'ail", amount: 1, unit: "pce" },
    { name: "Petit oignon", amount: 1, unit: "pce" },
    { name: "Cive (ou ciboulette)", amount: 2, unit: "branches" },
    { name: "Persil plat", amount: 3, unit: "branches" },
    { name: "Citron jaune (jus)", amount: 1, unit: "pce" },
    { name: "Piment", amount: 1, unit: "pincée", note: "selon tolérance" },
    { name: "Eau chaude", amount: 15, unit: "cl" },
    { name: "Huile d'olive", amount: 5, unit: "c.à.s" },
    { name: "Sel et Poivre", amount: 1, unit: "Q.S.P" }
  ],

  steps: [
    { 
      title: "La Découpe (Ciselage)", 
      text: "Épluchez l'ail et l'oignon. Écrasez la gousse d'ail. Coupez l'oignon et les branches de cive (ou ciboulette) en tout petits dés. Effeuillez le persil et émincez-le finement." 
    },
    { 
      title: "L'Assemblage", 
      text: "Dans un bol ou un bocal, placez tous les aromates ainsi que le piment. Pressez le citron et versez le jus sur les herbes." 
    },
    { 
      title: "Le Choc Thermique", 
      text: "Ajoutez le sel, le poivre et l'huile d'olive. Enfin, versez l'eau chaude directement sur la préparation pour 'cuire' légèrement les herbes et extraire les huiles essentielles." 
    },
    { 
      title: "L'Infusion", 
      text: "Remuez bien. Laissez reposer à température ambiante pendant au moins 30 minutes avant de servir." 
    }
  ],

  advices: ["L'eau doit être bien chaude (frémissante) mais pas bouillante pour ne pas cuire le citron."],
  chefQuote: "Le nom 'Sauce Chien' vient de la marque du célèbre couteau avec lequel on hache finement les herbes aux Antilles.",
  equipment: ["Couteau d'office", "Planche à découper", "Bocal"]
};

export default sauceChien;