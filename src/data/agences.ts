export interface Agence {
  ville: string;
  path: string;
  panneau: string;
  adresse?: string;
  prix: { auto: number; manuelle: number; accelere: number };
}

export const agences: Agence[] = [
  {
    ville: 'Roubaix',
    path: '/',
    panneau: '/panneau-roubaix.png',
    adresse: '3 rue du Chemin de Fer, 59100 Roubaix',
    prix: { auto: 699, manuelle: 990, accelere: 1499 },
  },
  {
    ville: 'Lille',
    path: '/lille',
    panneau: '/panneau-lille.png',
    adresse: "36 Façade de l'Esplanade, 59800 Lille",
    // Offre de lancement -100€ ; prix normaux : 799 / 1090 / 1599
    prix: { auto: 699, manuelle: 990, accelere: 1499 },
  },
];

export const getAgence = (ville: string) => agences.find((a) => a.ville === ville)!;
