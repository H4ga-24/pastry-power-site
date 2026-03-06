const sauceTomateMaison = {
  id: "sauce-tomate-maison",
  title: "La Sauce Tomate Maison",
  category: "Cuisine",
  subCategory: ["Sauces"],
  isVip: false,
  prepTime: "15 MIN", // Estimé
  cookTime: "30 MIN", // Estimé (20min mijotage + finition)
  difficulty: "FACILE",
  description: "La base absolue de la cuisine méditerranéenne, idéale pour pâtes et pizzas.",
  image: "https://images.unsplash.com/photo-1608949621308-c54d112c808a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  baseServings: 4,
  
  ingredients: [
    { name: "Tomates (bien mûres)", amount: 800, unit: "g" },
    { name: "Oignons", amount: 2, unit: "pcs" },
    { name: "Gousses d'ail", amount: 2, unit: "pcs" },
    { name: "Persil plat", amount: 8, unit: "brins" },
    { name: "Basilic frais", amount: 1, unit: "bouquet" },
    { name: "Huile d'olive", amount: 1, unit: "Q.S.P", note: "finition" },
    { name: "Sel et Poivre", amount: 1, unit: "Q.S.P" }
  ],

  steps: [
    { 
      title: "La Mise en Place", 
      text: "Lavez les tomates et coupez-les en dés grossiers (gardez le jus !). Pelez et émincez les oignons. Pelez et hachez l'ail dégermé. Lavez le persil et le basilic, puis ciselez-les." 
    },
    { 
      title: "La Cuisson", 
      text: "Dans une casserole profonde, versez les tomates avec leur jus, les oignons, l'ail et le persil. Portez à ébullition à feu vif. Une fois que ça bout, baissez le feu et couvrez partiellement. Laissez mijoter environ 20 minutes en remuant." 
    },
    { 
      title: "La Texture et l'Assaisonnement", 
      text: "Passez la sauce au moulin à légumes (grille fine ou moyenne) pour retirer les peaux et obtenir une texture veloutée. Remettez la sauce dans la casserole. Ajoutez le sel, le poivre et le basilic frais. Laissez mijoter encore 5 minutes à feu doux." 
    },
    { 
      title: "La Finition", 
      text: "Retirez la casserole du feu. Ajoutez un filet d'huile d'olive crue pour le parfum et la brillance, mélangez une dernière fois. C'est prêt !" 
    }
  ],

  advices: ["Si vos tomates sont trop acides (hors saison), ajoutez une petite cuillère à café de sucre en fin de cuisson."],
  chefQuote: "L'huile d'olive crue ajoutée hors du feu est le secret des vraies mamas italiennes pour une saveur intacte.",
  equipment: ["Casserole", "Moulin à légumes", "Couteau d'office"]
};

export default sauceTomateMaison;