<!-- ELUCENIA technical documentation · deficit-de-agua-livre · fr · no clinical/professional/rights approval -->

# Déficit en eau libre

[conditions, sources et autorisations](https://elucenia.org/fr/outils/deficit-de-agua-livre)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Sodium

`na`

mEq/L · intervalle: 120–200

### Poids

`peso`

kg · intervalle: 30–300

### Fraction estimée d’eau corporelle totale

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Âge

`idade`

ans · intervalle: 18–110

## Édition de la méthode

Adrogué–Madias 2000 ; estimation statique chez l’adulte

## Formule documentée

Déficit estimé = eau corporelle totale × (Na/140 − 1) ; eau corporelle totale = poids × fraction renseignée.

## Limites et population

Ce n’est pas un volume à prescrire. Ne modélise pas la volémie, la durée de l’anomalie, les pertes ou la surveillance. Avec Na \< 140, cette expression du déficit ne s’applique pas.

## Références

- [University of Pittsburgh · Water replacement · exemple et expression du déficit](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
