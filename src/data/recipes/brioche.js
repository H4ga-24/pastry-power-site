const brioche = {
  id: "brioche",
  title: "Pâte à Brioche",
  category: "Pâtisserie",
  subCategory: ["Pâtes"],
  isVip: true,
  prepTime: "30 MIN",
  restTime: "12 HEURES",
  cookTime: "25-30 MIN",
  difficulty: "EXPERT",
  description: "La pure tradition boulangère française. Une mie filante, beurrée et légère, qui demande du temps, du froid et un pétrissage maîtrisé.",
  image: "https://www.meilleurduchef.com/images/recettes/brioche-tressee/brioche-tressee-1200x800.jpg",
  baseServings: 2, // 2 brioches
  
  ingredients: [
    { name: "Farine de gruau (T45)", amount: 500, unit: "g" },
    { name: "Sel fin", amount: 10, unit: "g" },
    { name: "Sucre semoule", amount: 60, unit: "g" },
    { name: "Levure fraîche de boulanger", amount: 20, unit: "g" },
    { name: "Œufs entiers (froids)", amount: 300, unit: "g" },
    { name: "Beurre doux (froid)", amount: 250, unit: "g" },
    { name: "Œuf", amount: 1, unit: "pièce", note: "Pour la dorure" }
  ],

  steps: [
    { 
      title: "Le frasage", 
      text: "Dans la cuve du batteur muni du crochet, placer le sel, le sucre et la farine. Émietter la levure d'un côté (sans contact direct avec le sel). Ajouter les œufs froids." 
    },
    { 
      title: "Le pétrissage (Le corps)", 
      text: "Pétrir en première vitesse pendant 5 minutes pour amalgamer les ingrédients, puis passer en deuxième vitesse pendant 10 à 15 minutes. La pâte doit se décoller des parois de la cuve." 
    },
    { 
      title: "L'incorporation du beurre", 
      text: "Couper le beurre froid en petits cubes. L'incorporer progressivement en première vitesse. Une fois le beurre absorbé, repasser en deuxième vitesse jusqu'à ce que la pâte claque contre les parois de la cuve et soit parfaitement lisse." 
    },
    { 
      title: "Le pointage", 
      text: "Laisser la pâte lever (pointer) à température ambiante pendant 1 heure, recouverte d'un linge humide." 
    },
    { 
      title: "Le rabat et le blocage", 
      text: "Dégazer la pâte en appuyant dessus (le rabat). La filmer au contact et la placer au réfrigérateur pendant au moins 12 heures. C'est crucial pour développer les arômes et figer le beurre." 
    },
    { 
      title: "Le façonnage et l'apprêt", 
      text: "Détailler et façonner la brioche selon la forme désirée (Nanterre, tresse, etc.). Dorer une première fois. Laisser pousser (l'apprêt) à 25-27°C maximum pendant 2h à 2h30." 
    },
    { 
      title: "La cuisson", 
      text: "Dorer une seconde fois. Cuire à 160°C pendant 25 à 30 minutes selon la taille." 
    }
  ],

  advices: [
    "La température de la pâte en fin de pétrissage ne doit jamais dépasser 24°C, sinon le beurre fond et la mie sera lourde. C'est pour cela qu'il faut utiliser des œufs froids."
  ],
  chefQuote: "Une vraie brioche ne se presse pas. Le passage d'une nuit au froid est non négociable : il permet à la levure de travailler lentement pour créer les acides organiques qui donneront ce goût si caractéristique.",
  equipment: [
    "Robot pâtissier avec crochet",
    "Corne de pâtissier",
    "Pinceau (pour la dorure)",
    "Moule à cake ou plaque"
  ]
};

export default brioche;