// Fonctions utilitaires partagées pour la gestion du temps de cuisson.
// Utilisées par RecipeLayout.jsx et CookingMode.jsx — ne pas dupliquer ailleurs.

export const parseCookTime = (timeStr) => {
  if (!timeStr) return 0;
  const str = timeStr.toLowerCase().trim();
  let minutes = 0;

  if (str.includes('h')) {
    const parts = str.split('h');
    minutes += (parseInt(parts[0]) || 0) * 60;
    const mins = parts[1].replace(/[^0-9]/g, '');
    if (mins) minutes += parseInt(mins);
  } else if (str.includes('min')) {
    minutes += parseInt(str.replace(/[^0-9]/g, '')) || 0;
  }
  return minutes * 60;
};

export const formatTime = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};