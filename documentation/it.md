<!-- ELUCENIA technical documentation · deficit-de-agua-livre · it · no clinical/professional/rights approval -->

# Deficit di acqua libera

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/deficit-de-agua-livre)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sodio

`na`

mEq/L · intervallo: 120–200

### Peso

`peso`

kg · intervallo: 30–300

### Frazione stimata di acqua corporea totale

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Età

`idade`

anni · intervallo: 18–110

## Edizione del metodo

Adrogué–Madias 2000; stima statica negli adulti

## Formula documentata

Deficit stimato = acqua corporea totale × (Na/140 − 1); acqua corporea totale = peso × frazione inserita.

## Limiti e popolazione

Non è un volume da prescrivere. Non modella volemia, durata dell’alterazione, perdite o monitoraggio. Con Na \< 140 questa espressione del deficit non è applicabile.

## Riferimenti

- [University of Pittsburgh · Water replacement · esempio ed espressione del deficit](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
