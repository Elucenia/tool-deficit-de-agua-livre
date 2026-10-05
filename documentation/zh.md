<!-- ELUCENIA technical documentation · deficit-de-agua-livre · zh · no clinical/professional/rights approval -->

# 自由水缺失

[条件、来源与许可](https://elucenia.org/zh/tools/deficit-de-agua-livre)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 钠

`na`

mEq/L · 范围: 120–200

### 体重

`peso`

kg · 范围: 30–300

### 估计全身水分比例

`grupo`

- `0.6` — 0.60
- `0.5` — 0.50
- `0.45` — 0.45

### 年龄

`idade`

年 · 范围: 18–110

## 方法版本

Adrogué–Madias 2000；成人静态估算

## 已记录的公式

估算缺失量 = 总体水 ×（Na/140 − 1）；总体水 = 体重 × 输入比例。

## 限制与适用人群

这不是可直接处方的容量。不模拟血容量、异常持续时间、丢失或监测。Na\<140时不适用此缺失量表达式。

## 参考文献

- [University of Pittsburgh · Water replacement · 缺失量示例和表达式](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
