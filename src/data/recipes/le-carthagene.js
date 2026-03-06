const leCarthagene = {
  id: "le-carthagene",
  title: "Le Carthagène",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: false, // Non spécifié, false par défaut
  prepTime: "4H 00",
  cookTime: "45 MIN",
  difficulty: "AVANCÉ",
  description: "Entremet élégant associant la douceur tropicale de la mangue au peps vivifiant du gingembre, avec un crémeux caramel onctueux et un biscuit financier doré au beurre noisette.",
  image: "https://images.unsplash.com/photo-1564327767378-abddd68f287d",
  baseServings: 3, // "3 Entremets (16, 18, 20cm)"
  
  ingredients: [
    { name: "Blancs d'œufs", amount: 300, unit: "g", note: "Biscuit Financier" },
    { name: "Sucre glace", amount: 300, unit: "g", note: "Biscuit Financier" },
    { name: "Poudre d'amande", amount: 120, unit: "g", note: "Biscuit Financier" },
    { name: "Farine T55", amount: 120, unit: "g", note: "Biscuit Financier" },
    { name: "Gingembre frais râpé", amount: 30, unit: "g", note: "Biscuit Financier" },
    { name: "Gingembre en poudre", amount: 8, unit: "g", note: "Biscuit Financier" },
    { name: "Beurre noisette (tiède)", amount: 200, unit: "g", note: "Biscuit Financier" },
    { name: "Miel liquide", amount: 40, unit: "g", note: "Biscuit Financier" },
    { name: "Sel fin", amount: 2, unit: "g", note: "Biscuit Financier" },
    { name: "Sucre semoule", amount: 200, unit: "g", note: "Crémeux Caramel" },
    { name: "Crème liquide 35% (chaude)", amount: 250, unit: "g", note: "Crémeux Caramel" },
    { name: "Beurre demi-sel", amount: 60, unit: "g", note: "Crémeux Caramel" },
    { name: "Jaunes d'œufs", amount: 80, unit: "g", note: "Crémeux Caramel" },
    { name: "Gingembre frais râpé", amount: 20, unit: "g", note: "Crémeux Caramel" },
    { name: "Gélatine (feuilles)", amount: 6, unit: "g", note: "Crémeux Caramel" },
    { name: "Jus de citron", amount: 10, unit: "g", note: "Crémeux Caramel" },
    { name: "Purée de mangue", amount: 400, unit: "g", note: "Mousse Mangue" },
    { name: "Meringue italienne", amount: 150, unit: "g", note: "Mousse Mangue" },
    { name: "Crème fouettée 35%", amount: 400, unit: "g", note: "Mousse Mangue" },
    { name: "Gélatine (feuilles)", amount: 10, unit: "g", note: "Mousse Mangue" },
    { name: "Mangue fraîche", amount: 1, unit: "pièce", note: "Décor" },
    { name: "Gingembre confit", amount: 50, unit: "g", note: "Décor" },
    { name: "Tuiles caramel", amount: 6, unit: "pièces", note: "Décor" },
    { name: "Feuille d'or", amount: 3, unit: "pièces", note: "Décor" },
    { name: "Nappage neutre", amount: 100, unit: "g", note: "Décor" }
  ],

  steps: [
    { 
      title: "1. Biscuit Financier Gingembre", 
      text: "Préparer un beurre noisette en cuisant le beurre jusqu'à obtenir une belle couleur ambrée et un parfum de noisette. Filtrer et laisser tiédir. Dans un bol, tamiser ensemble le sucre glace, la poudre d'amande et la farine. Ajouter le gingembre en poudre et le sel. Incorporer les blancs d'œufs non montés en mélangeant délicatement. Ajouter le gingembre frais râpé et le miel. Verser le beurre noisette tiède en filet en mélangeant constamment. Répartir l'appareil dans 3 cercles beurrés et farinés (16cm, 18cm, 20cm) sur environ 1,5cm d'épaisseur. Cuire à 170°C pendant 18-22 minutes selon la taille. Le biscuit doit être doré et légèrement bombé. Laisser refroidir complètement avant démoulage." 
    },
    { 
      title: "2. Crémeux Caramel au Gingembre", 
      text: "Hydrater la gélatine dans l'eau froide. Réaliser un caramel à sec avec le sucre dans une casserole à fond épais. Cuire jusqu'à obtenir une belle couleur ambrée (attention, ne pas brûler). Déglacer délicatement avec la crème chaude (attention aux projections). Ajouter le beurre demi-sel et le gingembre frais râpé. Porter à ébullition. Dans un bol, blanchir les jaunes d'œufs. Verser progressivement le mélange caramel-gingembre chaud sur les jaunes en fouettant. Remettre dans la casserole et cuire à 83°C en remuant constamment (nappe). Hors du feu, ajouter la gélatine essorée et le jus de citron. Mixer pour lisser. Couler dans 3 cercles filmés (14cm, 16cm, 18cm) sur 1cm d'épaisseur. Surgeler." 
    },
    { 
      title: "3. Mousse Mangue", 
      text: "Hydrater la gélatine dans l'eau froide. Chauffer 1/3 de la purée de mangue (environ 130g). Ajouter la gélatine essorée et bien dissoudre. Incorporer le reste de purée froide. Mélanger. Laisser refroidir à température ambiante sans que la gélatine ne fige. Préparer une meringue italienne (cuire 240g de sucre avec 80g d'eau à 121°C, verser sur 90g de blancs montés). Monter la crème en chantilly mousseuse (pas trop ferme). Incorporer délicatement la meringue italienne à la purée de mangue gélatinée. Puis incorporer la crème fouettée en soulevant la masse. Utiliser immédiatement." 
    },
    { 
      title: "4. Montage et Finition", 
      text: "Chemiser 3 cercles (16cm, 18cm, 20cm) avec des bandes de rhodoïd. Placer un disque de biscuit financier au fond de chaque cercle. Pocher une couche de mousse mangue (environ 1/3 de hauteur). Déposer au centre l'insert de crémeux caramel-gingembre congelé (bien centré). Recouvrir du reste de mousse mangue jusqu'en haut du cercle. Lisser la surface à la spatule. Réfrigérer 6h minimum (ou congeler 4h puis décongeler au frais 4h). Au moment du service : démouler délicatement. Disposer harmonieusement des tranches de mangue fraîche disposées en éventail, des morceaux de gingembre confit, et une tuile caramel verticale. Napper les fruits au pinceau avec le nappage neutre tiède. Poser délicatement une pointe de feuille d'or pour la touche finale." 
    }
  ],

  advices: ["Le gingembre frais apporte du piquant, dosez-le selon votre goût."],
  chefQuote: "L'acidité du citron dans le crémeux caramel casse le sucre et réhausse le gingembre.",
  equipment: ["Cercles entremets", "Mixeur plongeant", "Batteur"]
};

export default leCarthagene;