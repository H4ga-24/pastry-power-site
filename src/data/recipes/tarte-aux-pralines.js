const tarteAuxPralines = {
  id: "tarte-aux-pralines",
  title: "Tarte aux Pralines Roses",
  category: "Pâtisserie",
  subCategory: ["Tartes"],
  isVip: false,
  prepTime: "25 MIN",
  cookTime: "40 MIN (Total)",
  difficulty: "MOYEN",
  description: "La grande spécialité lyonnaise : un fond de tarte sablé croustillant garni d'un appareil rouge rubis fondant et ultra gourmand (Tant pour Tant crème et pralines concassées).",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/0fb7f65352bad271f01f7ef59f4fea8d.jpg",
  baseServings: 6, // 1 tarte 22cm
  
  ingredients: [
    { name: "Farine", amount: 200, unit: "g", note: "Pâte sucrée" },
    { name: "Beurre mou", amount: 100, unit: "g", note: "Pâte sucrée" },
    { name: "Sucre glace", amount: 80, unit: "g", note: "Pâte sucrée" },
    { name: "Poudre d'amandes", amount: 25, unit: "g", note: "Pâte sucrée" },
    { name: "Œuf entier", amount: 1, unit: "pce", note: "Pâte sucrée" },
    { name: "Sel", amount: 1, unit: "pincée", note: "Pâte sucrée" },
    { name: "Pralines Roses (spécialité de Lyon)", amount: 300, unit: "g", note: "Garniture" },
    { name: "Crème liquide entière (30% MG min.)", amount: 300, unit: "g", note: "Garniture" }
  ],

  steps: [
    { 
      title: "La Pâte Sucrée", 
      text: "Dans un saladier, mélangez le beurre mou avec le sucre glace, le sel et la poudre d'amandes jusqu'à obtenir une texture crémeuse. Ajoutez l'œuf, mélangez, puis versez la farine. Travaillez la pâte brièvement juste pour amalgamer les ingrédients. Formez une boule, filmez et laissez reposer 1 heure au frais." 
    },
    { 
      title: "La Cuisson à Blanc", 
      text: "Étalez la pâte et foncez votre cercle ou moule à tarte. Piquez le fond. Placez une feuille de papier cuisson et lestez avec des billes de cuisson. Enfournez à 170°C pendant 20 à 25 minutes. Retirez les billes et le papier 5 minutes avant la fin pour dorer le fond. Laissez refroidir sur grille." 
    },
    { 
      title: "L'Appareil aux Pralines", 
      text: "Concassez grossièrement les pralines. Dans une casserole, versez la crème liquide et les pralines concassées. Portez à ébullition sur feu moyen en remuant constamment. Laissez réduire en bouillonnant environ 15 minutes. Température idéale : 110°C-112°C." 
    },
    { 
      title: "Le Montage", 
      text: "Versez l'appareil aux pralines chaud directement dans le fond de tarte cuit et refroidi. Lissez la surface si nécessaire en secouant doucement la tarte." 
    },
    { 
      title: "La Prise (Le Repos)", 
      text: "Laissez refroidir à température ambiante, puis placez la tarte au réfrigérateur pendant au moins 2 heures. La garniture va durcir légèrement tout en restant fondante." 
    }
  ],

  advices: ["Il est crucial de bien cuire le fond de tarte à blanc car l'appareil à pralines est très humide.", "Ne sautez pas l'étape de concassage des pralines, sinon elles fondront très mal dans la crème."],
  chefQuote: "Le secret d'une tarte aux pralines réussie réside dans la cuisson de l'appareil à 112°C. En dessous ça coule, au-dessus ça devient dur comme du caramel.",
  equipment: ["Cercle à tarte", "Billes de cuisson", "Thermomètre à sucre"]
};

export default tarteAuxPralines;