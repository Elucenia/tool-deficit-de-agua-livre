<!-- ELUCENIA technical documentation · deficit-de-agua-livre · pt-BR · no clinical/professional/rights approval -->

# Déficit de água livre

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/deficit-de-agua-livre)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sódio

`na`

mEq/L · intervalo: 120–200

### Peso

`peso`

kg · intervalo: 30–300

### Fração estimada de água corporal total

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Idade

`idade`

anos · intervalo: 18–110

## Edição do método

Adrogué–Madias 2000; estimativa estática em adultos

## Fórmula documentada

Déficit estimado = água corporal total × (Na/140 − 1); água corporal total = peso × fração informada.

## Limites e população

Não é volume a prescrever. Não modela volemia, duração da alteração, perdas nem monitorização. Com Na \< 140 esta expressão de déficit não é aplicável.

## Referências

- [University of Pittsburgh · Water replacement · exemplo e expressão do déficit](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
