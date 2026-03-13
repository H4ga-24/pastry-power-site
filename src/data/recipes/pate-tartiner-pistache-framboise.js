const pateTartinerPistacheFramboise = {
  id: "pate-tartiner-pistache-framboise",
  title: "Pâte à Tartiner Pistache Framboise",
  category: "Confiserie",
  subCategory: ["Autres Confiseries"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "10 MIN",
  difficulty: "MOYEN",
  description: "L'association vibrante de la pistache verte et de l'acidité de la framboise croustillante. Une gourmandise de luxe.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2024/07/Pate-a-tartiner-framboise-pistache.jpg",
  baseServings: 500, // g (environ 2 pots de 250g)
  
  ingredients: [
    { name: "Pistaches vertes émondées", amount: 250, unit: "g" },
    { name: "Chocolat blanc 34%", amount: 180, unit: "g" },
    { name: "Sucre glace", amount: 100, unit: "g" },
    { name: "Huile de pépin de raisin", amount: 40, unit: "g" },
    { name: "Framboises crispy (lyophilisées)", amount: 25, unit: "g" },
    { name: "Fleur de sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "PÂTE DE PISTACHE MAISON", 
      text: "Torréfier légèrement les pistaches (10 min à 140°C) pour ne pas brunir la couleur verte. Laisser refroidir. Mixer les pistaches avec le sucre glace et l'huile dans un robot coupe jusqu'à obtention d'une pâte très fine et presque liquide." 
    },
    { 
      title: "MÉLANGE", 
      text: "Faire fondre le chocolat blanc à 40°C. Verser le chocolat fondu sur la pâte de pistache dans le robot (ou mélanger au fouet vigoureusement). Ajouter la fleur de sel. Vérifier la température : le mélange doit être autour de 28-30°C." 
    },
    { 
      title: "AJOUT DES FRAMBOISES", 
      text: "Incorporer les brisures de framboises lyophilisées (crispy) à la spatule (ne plus mixer, sinon on perd le croquant et la couleur vire au grisâtre)." 
    },
    { 
      title: "CONDITIONNEMENT", 
      text: "Mettre en pot immédiatement. Conserver à température ambiante à l'abri de la lumière pour préserver la belle couleur verte et le rouge des framboises." 
    }
  ],

  advices: [
    "Il est crucial de torréfier vos pistaches à très basse température (140°C maximum) pour développer leurs arômes sans détruire leur chlorophylle et préserver un vert éclatant."
  ],
  chefQuote: "Ne mixez surtout pas les brisures de framboise ! Intégrez-les toujours délicatement à la fin avec une maryse pour garder tout le croustillant sous la dent.",
  equipment: ["Four", "Robot coupe", "Maryse / Spatule", "Pots en verre"]
};

export default pateTartinerPistacheFramboise;