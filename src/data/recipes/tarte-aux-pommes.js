const tarteAuxPommes = {
  id: "tarte-aux-pommes",
  title: "Tarte aux Pommes Fine",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "40 MIN",
  difficulty: "FACILE",
  description: "La tarte fine de boulangerie par excellence : une pâte feuilletée croustillante, une fine couche de compote et des lamelles de pommes caramélisées au four.",
  image: "https://www.meilleurduchef.com/mdc/photo/recette/tarte-fine-pommes/tarte-fine-pommes-1200.jpg", // Note: fallback image added as the one in the snippet wasn't parsed properly
  baseServings: 6, // 1 tarte 24cm
  
  ingredients: [
    { name: "Pâte feuilletée", amount: 300, unit: "g" },
    { name: "Pommes Golden", amount: 4, unit: "pièces" },
    { name: "Compote de pommes (lisse)", amount: 150, unit: "g" },
    { name: "Beurre demi-sel", amount: 30, unit: "g" },
    { name: "Cassonade ou Sucre", amount: 30, unit: "g" },
    { name: "Nappage neutre (ou confiture)", amount: 50, unit: "g" }
  ],

  steps: [
    { 
      title: "Préparation du fond", 
      text: "Abaisser la pâte feuilletée en un disque fin de 24cm. La poser sur une plaque recouverte de papier cuisson. Piquer généreusement à la fourchette pour éviter qu'elle ne gonfle trop. Réserver au frais." 
    },
    { 
      title: "Découpe des pommes", 
      text: "Éplucher, vider et couper les pommes en deux. Émincer chaque moitié en lamelles très fines et régulières (2mm)." 
    },
    { 
      title: "Montage", 
      text: "Étaler une fine couche de compote sur le fond de pâte en laissant 1cm de bord libre. Disposer les lamelles de pommes en rosace, bien serrées, en commençant par l'extérieur." 
    },
    { 
      title: "Finition avant cuisson", 
      text: "Faire fondre le beurre et badigeonner les pommes au pinceau. Saupoudrer de cassonade." 
    },
    { 
      title: "Cuisson", 
      text: "Enfourner à 200°C (four chaud) pendant 30 à 40 minutes. Les bords de la pâte doivent être bien dorés et les pommes légèrement caramélisées." 
    },
    { 
      title: "Brillance", 
      text: "À la sortie du four, lustrer la tarte avec le nappage neutre ou la confiture d'abricot chauffée pour la faire briller." 
    }
  ],

  advices: ["Ne pas trop charger en compote, sinon le feuilletage ne cuira pas en dessous (détrempe)."],
  chefQuote: "Une vraie tarte fine se cuit à four très chaud pour que le feuilletage 'saisisse' et développe tout son croustillant.",
  equipment: ["Pinceau", "Plaque de cuisson", "Couteau d'office ou Mandoline"]
};

export default tarteAuxPommes;