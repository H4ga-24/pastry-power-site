const leKouglofAlsacien = {
  id: "le-kouglof-alsacien",
  title: "Le Kouglof Alsacien",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"], // Catégorie adaptée
  isVip: false,
  prepTime: "40 MIN + repos",
  cookTime: "45-50 MIN",
  difficulty: "MOYEN", // "Moyenne" dans le fichier
  description: "Le symbole gourmand de l'Alsace. Une brioche haute, aérée et parfumée, reconnaissable entre mille par sa forme cannelée et ses amandes entières incrustées.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/0de5337a547ec8337189e88cf1292af1.jpg",
  baseServings: 8, // "1 gros moule"
  
  ingredients: [
    { name: "Farine (T45 ou Gruau)", amount: 500, unit: "g" },
    { name: "Levure de boulanger fraîche", amount: 25, unit: "g" },
    { name: "Lait tiède", amount: 200, unit: "ml" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Œufs entiers", amount: 2, unit: "pièces" },
    { name: "Beurre mou", amount: 175, unit: "g" },
    { name: "Sel", amount: 10, unit: "g" },
    { name: "Raisins secs", amount: 100, unit: "g" },
    { name: "Kirsch (ou eau tiède)", amount: 3, unit: "c.à.s" },
    { name: "Amandes entières (brutes)", amount: 20, unit: "pièces" },
    { name: "Beurre (pour le moule)", amount: 1, unit: "QS" },
    { name: "Sucre glace", amount: 1, unit: "QS" }
  ],

  steps: [
    { 
      title: "1. Préparation", 
      text: "Faites tremper les raisins secs dans le Kirsch et un peu d'eau tiède pendant 1 heure. Égouttez-les bien avant utilisation. Beurrez généreusement le moule à Kouglof. Placez une amande entière dans chaque cannelure au fond du moule." 
    },
    { 
      title: "2. Pétrissage", 
      text: "Dans la cuve du batteur, versez la farine, le sel d'un côté, le sucre de l'autre. Ajoutez la levure émiettée, les œufs et le lait tiède. Pétrissez au crochet 4 minutes en vitesse lente, puis 6 minutes en vitesse moyenne. Incorporez le beurre mou en morceaux. Pétrissez de nouveau jusqu'à ce que la pâte se décolle des parois (environ 5-8 minutes)." 
    },
    { 
      title: "3. Pointage (1ère Pousse)", 
      text: "Couvrez la cuve. Laissez lever la pâte 1h30 à température ambiante (25°C). Elle doit doubler de volume." 
    },
    { 
      title: "4. Façonnage", 
      text: "Rompez la pâte avec le poing pour chasser le gaz. Incorporez les raisins égouttés en repliant la pâte. Formez une boule, percez un trou au centre avec le coude ou les doigts pour créer une couronne. Déposez la pâte dans le moule préparé." 
    },
    { 
      title: "5. Apprêt (2ème Pousse)", 
      text: "Laissez lever dans le moule environ 1h30. La pâte doit remonter jusqu'au bord du moule." 
    },
    { 
      title: "6. Cuisson", 
      text: "Enfournez à 180°C pendant 45 à 50 minutes. Si le dessus colore trop vite, couvrez d'aluminium après 30 minutes. Vérifiez la cuisson avec la lame d'un couteau (elle doit ressortir sèche)." 
    },
    { 
      title: "7. Finition", 
      text: "Démoulez immédiatement sur une grille. Laissez refroidir complètement avant de saupoudrer de sucre glace." 
    }
  ],

  advices: ["Le moule en terre cuite doit être 'culotté' (beurré et chauffé plusieurs fois) avant la première utilisation."],
  chefQuote: "Un Kouglof rassis de quelques jours fait un excellent pain perdu.",
  equipment: ["Moule à Kouglof", "Robot pétrisseur"]
};

export default leKouglofAlsacien;