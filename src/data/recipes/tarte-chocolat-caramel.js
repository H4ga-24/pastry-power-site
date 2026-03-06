const tarteChocolatCaramel = {
  id: "tarte-chocolat-caramel",
  title: "Tarte Chocolat Lait & Caramel Beurre Salé",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "45 MIN",
  cookTime: "20 MIN",
  difficulty: "AVANCÉ",
  description: "Un duo indémodable : un fond de tarte croquant, garni d'un caramel mou au beurre salé et surmonté d'une ganache montée ultra-légère au chocolat au lait.",
  image: "https://cleliafoodphoto.fr/wp-content/uploads/2020/12/tarte-caramel-choclat.png",
  baseServings: 6, // 1 tarte 22cm
  
  ingredients: [
    { name: "Pâte sucrée", amount: 300, unit: "g" },
    { name: "Sucre", amount: 150, unit: "g", note: "Caramel" },
    { name: "Crème liquide", amount: 150, unit: "g", note: "Caramel" },
    { name: "Beurre demi-sel", amount: 40, unit: "g", note: "Caramel" },
    { name: "Chocolat lait 40%", amount: 150, unit: "g", note: "Ganache" },
    { name: "Crème liquide chaude", amount: 100, unit: "g", note: "Ganache" },
    { name: "Crème liquide froide", amount: 200, unit: "g", note: "Ganache" },
    { name: "Gélatine", amount: 2, unit: "g", note: "Ganache" }
  ],

  steps: [
    { 
      title: "Ganache montée (J-1)", 
      text: "Hydrater la gélatine. Chauffer les 100g de crème, ajouter la gélatine essorée hors du feu. Verser sur le chocolat fondu en 3 fois. Mixer. Ajouter les 200g de crème froide liquide. Filmer au contact et réserver au frais toute la nuit." 
    },
    { 
      title: "Fond de tarte", 
      text: "Foncer un cercle de 22cm. Cuire à blanc à 160°C pendant environ 20 min. Le fond doit être doré et sec. Laisser refroidir." 
    },
    { 
      title: "Caramel beurre salé", 
      text: "Cuire le sucre à sec dans une casserole jusqu'à une belle couleur ambrée. Déglacer (hors du feu) avec les 150g de crème chaude. Remettre sur le feu et cuire à 108°C. Hors du feu, ajouter le beurre demi-sel. Laisser tiédir." 
    },
    { 
      title: "Montage - Étape 1", 
      text: "Couler le caramel dans le fond de tarte refroidi (sur environ 1cm d'épaisseur). Faire figer au réfrigérateur 1h." 
    },
    { 
      title: "Finition", 
      text: "Sortir la ganache du frigo (elle doit être bien froide). La monter au batteur comme une chantilly, jusqu'à ce qu'elle tienne bien au fouet. Pocher généreusement la ganache montée sur le caramel figé avec une douille Saint-Honoré ou cannelée." 
    }
  ],

  advices: ["Attention au foisonnement de la ganache montée : si vous la battez trop longtemps, elle va trancher et grainer."],
  chefQuote: "Le secret pour déglacer un caramel sans risque d'éclaboussure et sans faire de bloc de sucre, c'est de toujours utiliser une crème bouillante, jamais froide.",
  equipment: ["Batteur (fouet)", "Cercle à tarte", "Poche à douille"]
};

export default tarteChocolatCaramel;