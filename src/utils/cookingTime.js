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

// Sonnerie de fin de minuteur — générée en code, aucun fichier audio nécessaire.
// 3 bips espacés. Compatible avec le mode silencieux iOS coupé (l'utilisateur doit
// avoir le son activé, comme pour toute alarme web).
let alarmAudioCtx = null;

export const playTimerAlarm = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!alarmAudioCtx || alarmAudioCtx.state === 'closed') {
      alarmAudioCtx = new AudioCtx();
    }
    const ctx = alarmAudioCtx;
    if (ctx.state === 'suspended') ctx.resume();

    const beepCount = 3;
    const beepDuration = 0.18;
    const gapDuration = 0.18;

    for (let i = 0; i < beepCount; i++) {
      const startTime = ctx.currentTime + i * (beepDuration + gapDuration);
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, startTime);

      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.35, startTime + 0.02);
      gainNode.gain.linearRampToValueAtTime(0, startTime + beepDuration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(startTime);
      oscillator.stop(startTime + beepDuration);
    }

    // Vibration en complément sur mobile, si disponible
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  } catch (err) {
    console.error('Alarme minuteur indisponible:', err);
  }
};