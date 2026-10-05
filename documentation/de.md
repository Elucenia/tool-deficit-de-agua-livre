<!-- ELUCENIA technical documentation · deficit-de-agua-livre · de · no clinical/professional/rights approval -->

# Freies Wasserdefizit

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/deficit-de-agua-livre)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Natrium

`na`

mEq/L · Bereich: 120–200

### Gewicht

`peso`

kg · Bereich: 30–300

### Geschätzter Anteil des Gesamtkörperwassers

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Alter

`idade`

Jahre · Bereich: 18–110

## Fassung der Methode

Adrogué–Madias 2000; statische Schätzung bei Erwachsenen

## Dokumentierte Formel

Geschätztes Defizit = Gesamtkörperwasser × (Na/140 − 1); Gesamtkörperwasser = Gewicht × eingegebener Anteil.

## Grenzen und Population

Kein zu verordnendes Volumen. Modelliert weder Blutvolumen, Dauer der Störung, Verluste noch Überwachung. Bei Na \< 140 ist dieser Defizitausdruck nicht anwendbar.

## Referenzen

- [University of Pittsburgh · Water replacement · Beispiel und Formel des Defizits](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
