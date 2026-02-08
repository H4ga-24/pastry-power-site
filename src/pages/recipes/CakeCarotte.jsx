import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, ChefHat, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CakeCarotte = () => {
  // 👇 C'EST CE BLOC QUI PERMET AU SITE DE TROUVER LA RECETTE
  // Il faut que tu aies ce bloc dans TOUTES tes recettes de cakes salés.
  const recipeData = {
    title: "Cake Salé Carotte & Cumin",
    category: "CAKE-SALE", // C'est ce mot-clé magique qui le range dans la bonne catégorie
    description: "Un cake moelleux et parfumé, idéal pour l'apéritif ou un dîner léger.",
    image: "https://fourneauxetfourchettes.fr/wp-content/uploads/2020/12/32C3B9E8-FC30-43BC-B346-CFFA6A6A92CB-scaled.jpeg"
  };

  const ingredients = [
    { name: "Oeufs", amount: "3" },
    { name: "Farine", amount: "180g" },
    { name: "Levure chimique", amount: "1 sachet" },
    { name: "Huile d'olive", amount: "10cl" },
    { name: "Lait tiède", amount: "10cl" },
    { name: "Carottes râpées", amount: "200g" },
    { name: "Gruyère râpé", amount: "100g" }, // Ajouté pour la texture
    { name: "Cumin en poudre", amount: "1 c.à.c" }, // Remplace la cannelle
    { name: "Sel", amount: "1 pincée" },
    { name: "Poivre", amount: "2 pincées" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans pt-32 pb-20">
      <Helmet><title>{recipeData.title} - Maison Dorée</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* J'ai mis un lien de retour plus générique pour éviter les erreurs 404 */}
        <Link to="/cuisine">
          <Button variant="ghost" className="text-[#D4AF37] hover:text-white mb-8 pl-0"><ArrowLeft className="w-4 h-4 mr-2" /> Retour à la Cuisine</Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img className="w-full h-96 object-cover rounded-sm mb-8" alt={recipeData.title} src={recipeData.image} />
            <h1 className="text-4xl font-serif mb-6 text-white">{recipeData.title}</h1>
            <div className="flex gap-6 text-sm text-gray-400 mb-8 border-y border-white/10 py-4">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 1H</div>
              <div className="flex items-center gap-2"><ChefHat className="w-4 h-4 text-[#D4AF37]" /> FACILE</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#D4AF37]" /> 6 PERS</div>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-sm border border-white/5">
              <h3 className="text-xl font-serif mb-6 text-[#D4AF37]">Ingrédients</h3>
              <ul className="space-y-3 text-gray-300">
                {ingredients.map((ing, i) => (
                  <li key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                    <span>{ing.name}</span>
                    <span className="font-medium text-[#D4AF37]">{ing.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-white">Préparation</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p><span className="text-[#D4AF37] font-bold">1.</span> Préchauffez le four à 180°C. Épluchez et râpez finement les carottes.</p>
              <p><span className="text-[#D4AF37] font-bold">2.</span> Dans un saladier, fouettez les œufs, la farine, la levure, le sel, le poivre et le cumin.</p>
              <p><span className="text-[#D4AF37] font-bold">3.</span> Incorporez petit à petit l'huile et le lait tiède jusqu'à obtenir une pâte lisse.</p>
              <p><span className="text-[#D4AF37] font-bold">4.</span> Ajoutez les carottes râpées et le gruyère râpé. Mélangez à la spatule.</p>
              <p><span className="text-[#D4AF37] font-bold">5.</span> Versez dans un moule à cake huilé ou chemisé. Enfournez pour 45 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeCarotte;