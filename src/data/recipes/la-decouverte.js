const laDecouverte = {
  id: "la-decouverte",
  title: "La Découverte",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "4H 30",
  cookTime: "45 MIN",
  difficulty: "EXPERT",
  description: "Une aventure gustative audacieuse. La chaleur du caramel au beurre salé rencontre la subtilité épicée du cumin, sur un fond croustillant praliné-sésame. Un équilibre parfait entre douceur et caractère.",
  image: "https://images.unsplash.com/photo-1606807286281-3aa6a8e7d7a9",
  baseServings: 3, // "3 entremets (16cm, 18cm, 20cm)"
  
  ingredients: [
    { name: "Blancs d'œufs", amount: 150, unit: "g", note: "Biscuit" },
    { name: "Sucre semoule", amount: 50, unit: "g", note: "Biscuit" },
    { name: "Poudre d'amande", amount: 100, unit: "g", note: "Biscuit" },
    { name: "Sucre glace", amount: 100, unit: "g", note: "Biscuit" },
    { name: "Praliné sésame", amount: 80, unit: "g", note: "Biscuit" },
    { name: "Graines de sésame torréfiées", amount: 30, unit: "g", note: "Biscuit" },
    { name: "Farine T55", amount: 40, unit: "g", note: "Biscuit" },
    { name: "Praliné noisette 60%", amount: 200, unit: "g", note: "Croustillant" },
    { name: "Chocolat lait 40%", amount: 80, unit: "g", note: "Croustillant" },
    { name: "Feuilletine (crêpes dentelles)", amount: 100, unit: "g", note: "Croustillant" },
    { name: "Fleur de sel", amount: 2, unit: "g", note: "Croustillant" },
    { name: "Zeste d'orange", amount: 1, unit: "pièce", note: "Croustillant" },
    { name: "Sucre semoule", amount: 250, unit: "g", note: "Crémeux Caramel" },
    { name: "Crème liquide 35% (chaude)", amount: 300, unit: "g", note: "Crémeux Caramel" },
    { name: "Purée de coco", amount: 100, unit: "g", note: "Crémeux Caramel" },
    { name: "Beurre demi-sel", amount: 80, unit: "g", note: "Crémeux Caramel" },
    { name: "Jaunes d'œufs", amount: 100, unit: "g", note: "Crémeux Caramel" },
    { name: "Gélatine (feuilles)", amount: 7, unit: "g", note: "Crémeux Caramel" },
    { name: "Lait entier", amount: 500, unit: "g", note: "Crème Cumin" },
    { name: "Graines de cumin torréfiées", amount: 10, unit: "g", note: "Crème Cumin" },
    { name: "Jaunes d'œufs", amount: 100, unit: "g", note: "Crème Cumin" },
    { name: "Sucre semoule", amount: 80, unit: "g", note: "Crème Cumin" },
    { name: "Maïzena", amount: 40, unit: "g", note: "Crème Cumin" },
    { name: "Beurre doux", amount: 200, unit: "g", note: "Crème Cumin" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g", note: "Crème Cumin" },
    { name: "Crème fouettée 35%", amount: 300, unit: "g", note: "Crème Cumin" },
    { name: "Nappage miroir neutre", amount: 300, unit: "g", note: "Finition" },
    { name: "Colorant brun (optionnel)", amount: 2, unit: "g", note: "Finition" },
    { name: "Graines de sésame doré", amount: 20, unit: "g", note: "Finition" },
    { name: "Tuiles caramel fines", amount: 3, unit: "pièces", note: "Finition" }
  ],

  steps: [
    { 
      title: "1. Biscuit Praliné Sésame", 
      text: "Monter les blancs en neige en serrant avec le sucre semoule. Tamiser ensemble la poudre d'amande, le sucre glace et la farine. Incorporer délicatement aux blancs. Prélever une petite partie de la masse et la mélanger au praliné sésame pour détendre ce dernier, puis réincorporer au mélange principal. Ajouter les graines de sésame torréfiées. Dresser dans 3 cercles (14cm, 16cm, 18cm) beurrés. Cuire à 170°C pendant 15-18 min. Laisser refroidir." 
    },
    { 
      title: "2. Croustillant Lait Noisette", 
      text: "Fondre le chocolat au lait à 45°C. Mélanger avec le praliné noisette. Ajouter la feuilletine émiettée, la fleur de sel et le zeste d'orange fraîchement râpé. Mélanger délicatement pour bien enrober la feuilletine sans l'écraser. Étaler immédiatement une fine couche sur chaque disque de biscuit froid. Réserver au frais pour cristalliser." 
    },
    { 
      title: "3. Crémeux Caramel Beurre Salé & Coco", 
      text: "Réaliser un caramel à sec avec le sucre (couleur ambrée soutenue). Déglacer avec la crème chaude et la purée de coco préalablement mélangées. Ajouter le beurre demi-sel. Verser sur les jaunes d'œufs battus. Remettre à cuire à la nappe (84°C). Ajouter la gélatine hydratée et essorée hors du feu. Mixer pour lisser. Couler dans 3 inserts (12cm, 14cm, 16cm) chemisés. Surgeler à cœur." 
    },
    { 
      title: "4. Crème Onctueuse Cumin", 
      text: "Torréfier les graines de cumin à la poêle. Infuser dans le lait chaud pendant 20 min. Chinoiser. Réaliser une crème pâtissière avec le lait infusé, les jaunes, le sucre et la maïzena. Ajouter la gélatine hydratée hors du feu. Refroidir à 35°C. Incorporer le beurre pommade au mixeur plongeant pour émulsionner. Incorporer délicatement la crème fouettée mousseuse." 
    },
    { 
      title: "5. Montage et Finition", 
      text: "Montage à l'envers : Dans les cercles filmés (16cm, 18cm, 20cm), pocher une couche de crème onctueuse cumin au fond et sur les bords. Insérer le palet de crémeux caramel coco surgelé. Recouvrir d'un peu de crème. Terminer par le biscuit avec son croustillant (côté croustillant contre la crème). Lisser à ras. Surgeler. Démouler, glacer avec le nappage neutre (coloré brun clair si désiré). Décorer la base avec des graines de sésame doré et planter une tuile caramel fine." 
    }
  ],

  advices: ["Le cumin doit être dosé avec subtilité, l'infusion permet un parfum diffus sans agresser le palais."],
  chefQuote: "L'association coco-caramel-cumin fonctionne par contraste : le gras du coco porte les arômes du cumin.",
  equipment: ["Cercles entremets (16/18/20cm)", "Cercles inserts (12/14/16cm)", "Mixeur plongeant", "Batteur"]
};

export default laDecouverte;