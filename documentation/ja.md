<!-- ELUCENIA technical documentation · deficit-de-agua-livre · ja · no clinical/professional/rights approval -->

# 自由水欠乏量

[条件・出典・許諾](https://elucenia.org/ja/tools/deficit-de-agua-livre)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### ナトリウム

`na`

mEq/L · 範囲: 120–200

### 体重

`peso`

kg · 範囲: 30–300

### 推定総体水分割合

`grupo`

- `0.6` — 0.60
- `0.5` — 0.50
- `0.45` — 0.45

### 年齢

`idade`

年 · 範囲: 18–110

## 方法の版

Adrogué–Madias 2000；成人における静的推定

## 記載された計算式

推定不足量 = 総体水分量 ×（Na/140 − 1）；総体水分量 = 体重 × 入力した割合。

## 限界・対象集団

処方すべき輸液量ではありません。循環血液量、異常の持続期間、喪失、モニタリングはモデル化しません。Na\<140ではこの不足量の式は適用できません。

## 参考文献

- [University of Pittsburgh · Water replacement · 欠乏量の例と式](https://meded.dom.pitt.edu/wp-content/uploads/2018/12/UIM18_Tandukar_FINAL.pdf)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
