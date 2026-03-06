const leMarbrePistacheChocolatLait = {
  id: "le-marbre-pistache-chocolat-lait",
  title: "Le Marbré Pistache Chocolat Lait",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "5H 00",
  cookTime: "40 MIN",
  difficulty: "EXPERT",
  description: "Une création visuelle et gustative saisissante. L'alliance douce et réconfortante du chocolat au lait rencontre la finesse de la pistache dans un jeu de textures aériennes, le tout reposant sur un croustillant praliné addictif.",
  image: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
  baseServings: 3, // "3 entremets"
  
  ingredients: [
    { name: "Pâte d'amande 50%", amount: 260, unit: "g", note: "Biscuit Pistache" },
    { name: "Pâte de pistache", amount: 85, unit: "g", note: "Biscuit Pistache" },
    { name: "Oeufs entiers", amount: 220, unit: "g", note: "Biscuit Pistache" },
    { name: "Jaunes d'oeufs", amount: 45, unit: "g", note: "Biscuit Pistache" },
    { name: "Fécule de maïs", amount: 45, unit: "g", note: "Biscuit Pistache" },
    { name: "Beurre doux", amount: 85, unit: "g", note: "Biscuit Pistache" },
    { name: "Blancs d'oeufs", amount: 160, unit: "g", note: "Biscuit Pistache" },
    { name: "Sucre semoule", amount: 65, unit: "g", note: "Biscuit Pistache" },
    { name: "Praliné noisette 60%", amount: 300, unit: "g", note: "Croustillant" },
    { name: "Chocolat lait 40%", amount: 120, unit: "g", note: "Croustillant" },
    { name: "Feuilletine (crêpes dentelles)", amount: 150, unit: "g", note: "Croustillant" },
    { name: "Fleur de sel", amount: 3, unit: "g", note: "Croustillant" },
    { name: "Lait entier", amount: 500, unit: "g", note: "Anglaise" },
    { name: "Crème liquide 35%", amount: 500, unit: "g", note: "Anglaise" },
    { name: "Jaunes d'oeufs", amount: 200, unit: "g", note: "Anglaise" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Anglaise" },
    { name: "Anglaise de base (chaude)", amount: 600, unit: "g", note: "Bavaroise Lait" },
    { name: "Gélatine (feuilles)", amount: 10, unit: "g", note: "Bavaroise Lait" },
    { name: "Chocolat lait 40%", amount: 280, unit: "g", note: "Bavaroise Lait" },
    { name: "Crème fouettée 35%", amount: 450, unit: "g", note: "Bavaroise Lait" },
    { name: "Anglaise de base (chaude)", amount: 600, unit: "g", note: "Bavaroise Pistache" },
    { name: "Gélatine (feuilles)", amount: 12, unit: "g", note: "Bavaroise Pistache" },
    { name: "Pâte de pistache pure", amount: 100, unit: "g", note: "Bavaroise Pistache" },
    { name: "Crème fouettée 35%", amount: 450, unit: "g", note: "Bavaroise Pistache" },
    { name: "Eau", amount: 150, unit: "g", note: "Glaçage Lait" },
    { name: "Sucre semoule", amount: 300, unit: "g", note: "Glaçage Lait" },
    { name: "Sirop de glucose", amount: 300, unit: "g", note: "Glaçage Lait" },
    { name: "Lait concentré sucré", amount: 200, unit: "g", note: "Glaçage Lait" },
    { name: "Gélatine (feuilles)", amount: 20, unit: "g", note: "Glaçage Lait" },
    { name: "Chocolat lait 40%", amount: 300, unit: "g", note: "Glaçage Lait" },
    { name: "Nappage neutre", amount: 100, unit: "g", note: "Glaçage Lait" },
    { name: "Pistaches hachées", amount: 50, unit: "g", note: "Finition" },
    { name: "Feuille d'or", amount: 3, unit: "feuilles", note: "Finition" }
  ],

  steps: [
    { 
      title: "1. Biscuit Pistache", 
      text: "Dans la cuve du batteur avec la feuille, détendre la pâte d'amande et la pâte de pistache avec les œufs entiers ajoutés petit à petit. Une fois le mélange lisse, foisonner au fouet en ajoutant les jaunes. Monter les blancs en neige avec le sucre. Incorporer une partie des blancs au premier mélange, ajouter la fécule tamisée, puis le reste des blancs délicatement. Terminer par le beurre fondu froid. Couler dans 3 cercles de diamètre 14, 16 et 18 cm. Cuire à 170°C environ 15-20 min." 
    },
    { 
      title: "2. Croustillant Lait Noisette", 
      text: "Fondre le chocolat au lait à 45°C. Mélanger avec le praliné noisette. Ajouter la feuilletine émiettée et la fleur de sel. Mélanger délicatement. Étaler immédiatement une fine couche sur chaque disque de biscuit pistache refroidi. Réserver au congélateur." 
    },
    { 
      title: "3. Anglaise de Base", 
      text: "Porter le mélange lait et crème à ébullition. Verser sur les jaunes d'oeufs préalablement blanchis avec le sucre. Reverser le tout dans la casserole et cuire à la nappe (84°C) en vannant constamment. Chinoiser immédiatement et diviser la masse en deux parts égales (environ 600g chacune) pour les deux bavaroises." 
    },
    { 
      title: "4. Bavaroise Lait", 
      text: "Dans la première moitié d'anglaise chaude (600g), ajouter la gélatine hydratée et essorée. Verser sur le chocolat au lait haché (ou pistoles). Émulsionner au mixeur plongeant. Refroidir à 25°C/30°C. Incorporer délicatement la crème fouettée mousseuse." 
    },
    { 
      title: "5. Bavaroise Pistache", 
      text: "Dans la seconde moitié d'anglaise chaude (600g), ajouter la gélatine hydratée et essorée, ainsi que la pâte de pistache. Mixer pour bien lisser. Refroidir à 25°C/30°C. Incorporer délicatement la crème fouettée mousseuse." 
    },
    { 
      title: "6. Glaçage Lait", 
      text: "Cuire l'eau, le sucre et le glucose à 103°C. Verser sur le lait concentré, la gélatine hydratée et essorée, le chocolat au lait et le nappage neutre. Mixer sans incorporer d'air (mixeur plongeant immergé). Filmer au contact et réserver 24h au frais. Utiliser à 30-32°C." 
    },
    { 
      title: "7. Montage et Finition", 
      text: "Montage à l'envers dans des cercles de 16, 18 et 20 cm chemisés de rhodoïd. Technique du marbrage : Mettre les deux mousses en poche sans douille. Pocher simultanément les deux mousses en spirale ou en points aléatoires dans le fond du cercle, puis passer brièvement une petite spatule pour créer l'effet marbré sans tout mélanger. Remplir aux 3/4. Déposer l'insert biscuit/croustillant (croustillant vers la mousse). Lisser à ras. Surgeler à cœur. Démouler, glacer avec le glaçage lait à 32°C. Décorer la base de pistaches hachées." 
    }
  ],

  advices: ["Le marbrage doit rester subtil, ne mélangez pas trop les deux mousses."],
  chefQuote: "Le nappage neutre dans le glaçage apporte un brillant incomparable.",
  equipment: ["3 cercles entremets", "Mixeur plongeant", "Poches à douille"]
};

export default leMarbrePistacheChocolatLait;