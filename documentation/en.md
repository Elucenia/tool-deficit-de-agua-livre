<!-- ELUCENIA technical documentation · deficit-de-agua-livre · en · no clinical/professional/rights approval -->

# Free water deficit

[conditions, sources and permissions](https://elucenia.org/en/tools/deficit-de-agua-livre)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Sodium

`na`

mEq/L · range: 120–200

### Weight

`peso`

kg · range: 30–300

### Estimated total body water fraction

`grupo`

- `0.6` — 0.60
- `0.5` — 0.50
- `0.45` — 0.45

### Age

`idade`

years · range: 18–110

## Method edition

Adrogué–Madias 2000; static estimate in adults

## Documented formula

Estimated deficit = total body water × (Na/140 − 1); total body water = weight × entered fraction.

## Limits and population

This is not a volume to prescribe. Does not model intravascular volume, duration of the abnormality, losses or monitoring. This deficit expression does not apply when Na \< 140.

## References

- [University of Pittsburgh · Water replacement · deficit example and expression](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
