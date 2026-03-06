const gateauBasque = {
  id: "gateau-basque",
  title: "Gâteau basque",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"], // Catégorie adaptée
  isVip: false,
  prepTime: "45 MIN",
  cookTime: "40 MIN",
  difficulty: "MOYEN",
  description: "Le gâteau basque est un mets sucré traditionnel, composé d'une pâte sablée croustillante fourrée soit de crème pâtissière (souvent parfumée au rhum/vanille), soit de confiture de cerises noires.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/1630facada9f0e9bd1ed39781dd85155.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Beurre (Pâte)", amount: 200, unit: "g" },
    { name: "Sucre (Pâte)", amount: 200, unit: "g" },
    { name: "Oeufs (Pâte)", amount: 100, unit: "g" },
    { name: "Farine (Pâte)", amount: 400, unit: "g" },
    { name: "Levure chimique (Pâte)", amount: 6, unit: "g" },
    { name: "Sel (Pâte)", amount: 3, unit: "g" },
    { name: "Lait entier (Crème)", amount: 500, unit: "g" },
    { name: "Sucre (Crème)", amount: 100, unit: "g" },
    { name: "Jaunes d'oeufs (Crème)", amount: 60, unit: "g" },
    { name: "Poudre à crème/Maïzena", amount: 40, unit: "g" },
    { name: "Rhum (facultatif)", amount: 20, unit: "g" }
  ],

  steps: [
    { 
      title: "RÉALISATION DE LA PÂTE", 
      text: "Crémer le beurre avec le sel et le sucre. Ajouter les oeufs. Incorporer la farine tamisée avec la levure chimique. Fraser rapidement pour homogénéiser. Filmer et laisser reposer au frais au moins 1 heure." 
    },
    { 
      title: "RÉALISATION DE LA CRÈME", 
      text: "Faire chauffer le lait avec la vanille. Blanchir les jaunes avec le sucre, puis ajouter la poudre à crème. Verser une partie du lait chaud sur le mélange, reverser le tout dans la casserole et cuire à ébullition pendant 2 minutes en fouettant. Ajouter le rhum hors du feu. Filmer au contact et refroidir." 
    },
    { 
      title: "MONTAGE", 
      text: "Abaisser la pâte en deux disques (l'un plus grand pour le fond et les bords, l'autre pour le couvercle). Foncer un cercle ou un moule beurré avec le grand disque. Garnir généreusement de crème pâtissière froide (ou confiture de cerise). Recouvrir avec le second disque de pâte. Bien souder les bords." 
    },
    { 
      title: "FINITION ET CUISSON", 
      text: "Dorer la surface au jaune d'oeuf. Rayé à la fourchette (motifs croisés typiques). Cuire à 180°C pendant 35 à 40 minutes. Laisser refroidir avant de démouler." 
    }
  ],

  advices: ["La pâte est fragile, n'hésitez pas à la remettre au frais si elle ramollit trop pendant le fonçage."],
  chefQuote: "Traditionnellement, on utilise de la confiture de cerises noires d'Itxassou.",
  equipment: ["Cercle à tarte (20-22cm)", "Rouleau à pâtisserie", "Casserole", "Pinceau"]
};

export default gateauBasque;