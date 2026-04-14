# Prompt Claude Code — Landing Page Fast Permis

Crée une landing page complète en HTML/CSS/JS pur (un seul fichier `index.html`) pour une auto-école appelée **Fast Permis**, située à **Roubaix**.

---

## OBJECTIF DE LA PAGE

L'objectif n'est PAS de collecter des formulaires — c'est de **qualifier les prospects et les pousser à réserver un appel téléphonique** via Calendly. Les personnes qui arrivent sur la page viennent d'une publicité Meta. Elles doivent comprendre exactement ce qu'elles achètent, comment ça se passe, et avoir envie de réserver un appel avant de quitter la page.

---

## IDENTITÉ VISUELLE

- **Couleurs** : rouge vif `#e8130a`, noir profond `#0a0a0a`, blanc `#ffffff`, gris sombre `#1c1c1c`
- **Style** : dynamique, moderne, sombre. Inspiré des visuels publicitaires de la marque : fond noir, accents rouges lumineux, typographie condensée et impactante
- **Typographie** : Barlow Condensed (titres, gras, uppercase) + Barlow (corps de texte) — Google Fonts
- **Ambiance** : confiance, rapidité, sérieux. Pas cheap, pas trop luxe — efficace et rassurant

---

## LIEN CALENDLY

```
https://calendly.com/fastpermis-rdv/30min?month=2026-04
```

Tous les boutons CTA de la page pointent vers ce lien. Ouvrir dans un nouvel onglet (`target="_blank"`).

---

## STRUCTURE DE LA PAGE (dans l'ordre)

### 1. NAV FIXE
- Logo texte : "Fast**Permis**" (Fast en blanc, Permis en rouge)
- Bouton à droite : "Réserver mon appel gratuit" → lien Calendly
- Fond noir semi-transparent avec blur, bordure rouge subtile en bas
- Sticky, toujours visible au scroll

---

### 2. HERO
- Badge animé en haut : point rouge pulsant + "Auto-école · Roubaix"
- Titre principal (très grand, uppercase, Barlow Condensed Black) :
  ```
  TON PERMIS
  DÈS 699€
  ```
  Le "699€" en rouge avec glow rouge
- Sous-titre : "Réserve un appel gratuit avec un conseiller. Il répond à toutes tes questions et t'inscrit directement au téléphone — en 10 minutes."
- Gros bouton CTA rouge : "Je réserve mon appel gratuit →"
- Note sous le bouton : "Gratuit · Sans engagement · 7j/7"
- 3 chips/badges en bas du hero :
  - 🚀 Dates d'examen rapides
  - 💳 Paiement 3x ou 4x sans frais
  - 📞 Conseillers disponibles 7j/7
- Fond : noir avec radial gradient rouge subtil en arrière-plan

---

### 3. COMMENT ÇA MARCHE
- Titre section : "Comment ça se passe ?"
- 3 étapes en cards horizontales (grid) :
  1. **Tu réserves un créneau** — "Choisis le jour et l'heure qui te convient. L'appel dure environ 10 minutes."
  2. **Un conseiller t'appelle** — "Notre équipe est disponible du lundi au dimanche. Il répond à toutes tes questions sur la formation, les délais, le paiement."
  3. **Tu t'inscris au téléphone** — "Si Fast Permis correspond à ce que tu cherches, l'inscription se fait directement pendant l'appel. Simple et rapide."
- Numéros d'étapes très grands en arrière-plan (style watermark), couleur rouge très opaque
- Bouton CTA centré sous les 3 étapes : "Je réserve mon appel gratuit →"

---

### 4. LES FORMULES
- Titre section : "Choisis ta formule"
- 2 cards côte à côte (responsive : empilées sur mobile) :

**Card 1 — Boîte Automatique**
- Badge : "Le plus populaire" (rouge)
- Prix : **699€**
- Sous-prix : "Paiement en 3x = 233€/mois"
- Contenu de la formule :
  - ✅ 13h de conduite
  - ✅ dont 2h sur simulateur
  - ✅ Dates d'examen rapides
  - ✅ Paiement 3x ou 4x sans frais via Alma
  - ✅ Accompagnement du début à la fin
- CTA sous la card : "Je réserve mon appel — Boîte Auto →" → Calendly

**Card 2 — Boîte Manuelle**
- Prix : **990€**
- Sous-prix : "Paiement en 3x = 330€/mois"
- Contenu de la formule :
  - ✅ 20h de conduite
  - ✅ dont 3h sur simulateur
  - ✅ Dates d'examen rapides
  - ✅ Paiement 3x ou 4x sans frais via Alma
  - ✅ Accompagnement du début à la fin
- CTA sous la card : "Je réserve mon appel — Boîte Manuelle →" → Calendly

- Les deux cards ont une bordure rouge en haut au hover
- Les boutons CTA sont de couleur rouge, style "parallélogramme" (clip-path skewed)

---

### 5. POURQUOI FAST PERMIS
- Titre : "Pourquoi choisir Fast Permis ?"
- 4 blocs en grille 2x2 :
  1. **Dates d'examen rapides** — "On t'obtient une date d'examen rapidement. Pas d'attente inutile."
  2. **Paiement flexible** — "3x ou 4x sans frais grâce à Alma. Tu commences sans tout payer d'un coup."
  3. **Disponibles 7j/7** — "Nos conseillers répondent du lundi au dimanche sur de larges créneaux horaires."
  4. **Accompagnement complet** — "Du premier appel jusqu'au jour de l'examen, on est là à chaque étape."
- Icônes simples (emoji ou SVG inline)
- Fond légèrement différent pour contraster avec les sections autour (ex: `#111111`)

---

### 6. AVIS GOOGLE
- Titre : "Ce que disent nos élèves"
- Sous-titre : "⭐⭐⭐⭐⭐ 5/5 sur Google"
- 4 cards d'avis :

  **Ilane** ⭐⭐⭐⭐⭐
  "Très bonne auto-école, sérieuse et professionnelle. On est bien accompagné du début à la fin. Les moniteurs sont à l'écoute et mettent en confiance (merci à Salah). Je recommande sans hésiter."

  **Gadrey** ⭐⭐⭐⭐⭐
  "Super auto-école ! Grâce à leur sérieux et leur patience, j'ai obtenu mon permis rapidement. Une pensée spéciale à toute l'équipe et à Salah, excellent moniteur."

  **Selma** ⭐⭐⭐⭐⭐
  "Super auto-école ! Permis en seulement 3 mois. Les moniteurs gentils, patients et pédagogues. Je recommande sans hésiter !"

  **Nassim** ⭐⭐⭐⭐⭐
  "Très bonne expérience avec Fast Permis ! Équipe professionnelle, réactive et à l'écoute. Formation efficace et accompagnement sérieux du début à la fin. Je recommande sans hésiter."

- Cards avec fond sombre, bordure subtile, initiale du prénom en avatar rouge
- Scroll horizontal sur mobile

---

### 7. FAQ
- Titre : "Questions fréquentes"
- Accordion interactif (click pour ouvrir/fermer) :

  **Q : L'appel est vraiment gratuit et sans engagement ?**
  R : Oui, totalement. L'appel dure environ 10 minutes. Notre conseiller répond à toutes tes questions. Tu t'inscris seulement si tu le souhaites.

  **Q : Comment se passe l'inscription ?**
  R : Tout se fait par téléphone pendant l'appel. Pas besoin de te déplacer pour commencer. Notre conseiller s'occupe de tout.

  **Q : Le paiement en 3x ou 4x, comment ça marche ?**
  R : On utilise Alma, une solution de paiement sans frais. Tu paies en 3 ou 4 fois par carte. Notre conseiller t'explique tout pendant l'appel.

  **Q : Combien de temps pour avoir son permis ?**
  R : Ça dépend de ta progression, mais on obtient des dates d'examen rapidement. Beaucoup de nos élèves obtiennent leur permis en 3 mois.

  **Q : Quelle formule choisir, auto ou manuelle ?**
  R : Notre conseiller t'aidera à choisir pendant l'appel selon ton profil et tes besoins.

- Animation smooth d'ouverture/fermeture
- Icône + / × qui tourne

---

### 8. CTA FINAL
- Bloc pleine largeur, fond rouge `#e8130a`
- Titre grand : "Prêt à passer ton permis ?"
- Sous-titre : "Réserve ton appel gratuit maintenant. Un conseiller te rappelle et t'inscrit en 10 minutes."
- Bouton blanc avec texte rouge : "Je réserve mon appel gratuit →"
- Note : "Disponible 7j/7 · Gratuit · Sans engagement"

---

### 9. FOOTER
- Logo Fast Permis
- "© 2026 Fast Permis – Auto-école à Roubaix"
- Mention légale minimaliste

---

## EMPLACEMENT PIXEL META (commentaire dans le code)

Dans le `<head>`, ajouter un bloc commenté :
```html
<!-- META PIXEL CODE — À ACTIVER PLUS TARD -->
<!--
<script>
  // Coller ici le code du Pixel Meta fourni par Meta Business Suite
  // Remplacer YOUR_PIXEL_ID par votre identifiant
</script>
-->
```

---

## CONTRAINTES TECHNIQUES

- **Un seul fichier** `index.html` — tout inline (CSS dans `<style>`, JS dans `<script>`)
- Responsive mobile-first — la majorité du trafic vient de Meta sur mobile
- Animations CSS légères : fadeUp au scroll (IntersectionObserver), pulse sur le badge hero, shimmer sur les boutons CTA
- Boutons CTA en forme de parallélogramme (clip-path skewed) — cohérent avec le style des visuels pub
- Pas de dépendances externes sauf Google Fonts
- Performance : pas d'images lourdes, tout en CSS/SVG
- Tous les CTA ouvrent Calendly dans un nouvel onglet

---

## RÉSULTAT ATTENDU

Un fichier `index.html` complet, prêt à déposer sur Vercel. La page doit donner envie de réserver un appel, pas juste de "voir les prix". Le visiteur doit comprendre en 10 secondes : ce que c'est, combien ça coûte, et comment s'inscrire.
