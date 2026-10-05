<!-- ELUCENIA technical documentation · deficit-de-agua-livre · es · no clinical/professional/rights approval -->

# Déficit de agua libre

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/deficit-de-agua-livre)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Sodio

`na`

mEq/L · intervalo: 120–200

### Peso

`peso`

kg · intervalo: 30–300

### Fracción estimada de agua corporal total

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Edad

`idade`

años · intervalo: 18–110

## Edición del método

Adrogué–Madias 2000; estimación estática en adultos

## Fórmula documentada

Déficit estimado = agua corporal total × (Na/140 − 1); agua corporal total = peso × fracción introducida.

## Límites y población

No es un volumen para prescribir. No modela la volemia, la duración de la alteración, las pérdidas ni la monitorización. Con Na \< 140 esta expresión de déficit no es aplicable.

## Referencias

- [University of Pittsburgh · Water replacement · ejemplo y expresión del déficit](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
