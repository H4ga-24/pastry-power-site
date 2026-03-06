const kouignAmann = {
  id: "kouign-amann",
  title: "Le Kouign-Amann (Bretagne)",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"], // Catégorie appropriée
  isVip: false,
  prepTime: "45 MIN",
  cookTime: "30 MIN",
  difficulty: "DIFFICILE", // Difficile car technique de tourage
  description: "Littéralement 'Gâteau au beurre'. Une pâte à pain feuilletée généreusement garnie de beurre demi-sel et de sucre, créant une croûte caramélisée irrésistible.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/8eb2478d08f155364300cb7c90791297.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Farine (T55)", amount: 300, unit: "g" },
    { name: "Levure boulangère fraîche", amount: 10, unit: "g" },
    { name: "Eau tiède", amount: 180, unit: "ml" },
    { name: "Sel (pour la pâte)", amount: 5, unit: "g" },
    { name: "Beurre demi-sel", amount: 250, unit: "g" },
    { name: "Sucre en poudre", amount: 250, unit: "g" }
  ],

  steps: [
    { 
      title: "1. La Détrempe (La Pâte)", 
      text: "Dans un saladier ou la cuve du robot, mélangez la farine et le sel. Faites un puits, ajoutez la levure émiettée et l'eau tiède. Pétrissez jusqu'à obtenir une pâte homogène, souple mais non collante (environ 10 minutes). Laissez reposer la boule de pâte à température ambiante pendant 1 heure (elle doit doubler de volume). Ensuite, placez-la 30 minutes au réfrigérateur pour la raffermir." 
    },
    { 
      title: "2. Le Beurrage", 
      text: "Tapez le beurre demi-sel au rouleau pour lui donner une forme carrée et une consistance identique à celle de la pâte (ni trop dur, ni trop mou)." 
    },
    { 
      title: "3. Le Tourage (L'Incorporation)", 
      text: "Étalez la pâte en croix ou en rectangle sur un plan de travail fariné. Placez le beurre au centre. Rabattez les bords de la pâte pour enfermer hermétiquement le beurre. Étalez ce pâton en un long rectangle. Pliez-le en trois (comme une lettre). Faites pivoter la pâte d'un quart de tour. (C'est le 1er tour simple)." 
    },
    { 
      title: "4. Le Sucrage", 
      text: "Étalez de nouveau la pâte en longueur. Saupoudrez généreusement la surface avec un tiers du sucre. Pliez en trois (comme une lettre). (2ème tour). Tournez d'un quart de tour. Étalez de nouveau. Saupoudrez avec le deuxième tiers du sucre. Pliez en trois. (3ème tour)." 
    },
    { 
      title: "5. Le Façonnage", 
      text: "Étalez la pâte une dernière fois pour former un carré ou un cercle de la taille de votre moule. Saupoudrez le reste du sucre sur le plan de travail et posez la pâte dessus pour l'enrober. Repliez les 4 coins vers le centre pour former une boule grossière. Placez la pâte (côté pliures vers le haut) dans un moule généreusement beurré et sucré." 
    },
    { 
      title: "6. La Pousse", 
      text: "Laissez pousser environ 30 à 45 minutes à température ambiante. La pâte doit gonfler légèrement et le feuilletage s'écarter." 
    },
    { 
      title: "7. La Cuisson", 
      text: "Préchauffez le four à 180°C. Déposez quelques noisettes de beurre sur le dessus. Enfournez pour 30 à 35 minutes. Le gâteau doit être bien doré et le sucre doit avoir caramélisé sur les bords." 
    },
    { 
      title: "8. Finition", 
      text: "Démoulez immédiatement à la sortie du four en retournant le gâteau sur une assiette (sinon le caramel va durcir et coller le gâteau au moule). Laissez tiédir." 
    }
  ],

  advices: ["Le secret est d'avoir le beurre et la pâte à la même consistance.", "Ne laissez pas le gâteau refroidir dans le moule, c'est impossible à démouler après."],
  chefQuote: "Le Kouign-Amann doit être caramélisé à l'extérieur et fondant à l'intérieur.",
  equipment: ["Rouleau à pâtisserie", "Moule à manqué", "Pinceau"]
};

export default kouignAmann;