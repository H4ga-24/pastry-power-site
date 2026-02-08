// On dit à Vite : "Cherche tous les fichiers .js dans le dossier recipes"
const modules = import.meta.glob('./recipes/*.js', { eager: true });

// On les transforme en une liste propre
export const recipes = Object.values(modules).map((module) => module.default);