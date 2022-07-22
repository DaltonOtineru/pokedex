// Reusable utility function which takes in the pokemon type as an argument and returns the correct color to apply as the background

export const setBg = (type) => {
  switch (type) {
    case 'rock':
      return 'bg-[#bbaa66]/70';
    case 'ghost':
      return 'bg-[#6666ba]/70';
    case 'steel':
      return 'bg-[#aaaabb]/70';
    case 'water':
      return 'bg-[#3399FE]/70';
    case 'grass':
      return 'bg-[#74CB48]/70';
    case 'psychic':
      return 'bg-[#ff5599]/70';
    case 'ice':
      return 'bg-[#65ccff]/70';
    case 'dark':
      return 'bg-[#775444]/70';
    case 'fairy':
      return 'bg-[#ee99ee]/70';
    case 'normal':
      return 'bg-[#aaaa9b]/70';
    case 'fighting':
      return 'bg-[#ba5544]/70';
    case 'flying':
      return 'bg-[#8799ff]/70';
    case 'poison':
      return 'bg-[#aa5599]/70';
    case 'ground':
      return 'bg-[#ddbb54]/70';
    case 'bug':
      return 'bg-[#A9BB22]/70';
    case 'fire':
      return 'bg-[#f57d31]/70';
    case 'electric':
      return 'bg-[#ffcc33]/70';
    case 'dragon':
      return 'bg-[#6666ba]/70';
    default:
      return '';
  }
};
