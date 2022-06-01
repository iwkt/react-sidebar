styled-components を利用してサイドバーの製作

# プロジェクト作成とパッケージの追加について

create-react-app を使用してプロジェクト作成。

## styled-components の読み込み

```
import styled from 'styled-components';
```

## アイコンには Material-UI を使用

https://mui.com/

```
npm install @mui/material @emotion/react @emotion/styled
```

SVG icons を使えるようにする

```
npm install @mui/icons-material

```

## 整形されるファイル

App.jsx などのコンポーネントの拡張子は js から jsx にすることで保存時に整形される。

## 回避できないエラー

ERROR in Failed to load parser 'babel-eslint' declared in 'src/.eslintrc.js': Cannot find module 'babel-eslint'

これを回避しようと babel-eslint を下記コマンドでインストールすると

```
npm install eslint babel-eslint --save-dev
```

逆にさらなるエラーが発生する。現状では修正法がわからない！！

# 使用方法

## プロジェクトをクローン

```
git clone https://github.com/iwkt/react-test.git

cd react-test

npm install

```

## VS Code に ESLint の拡張機能の追加

Vscode で Eslint を使えるように拡張機能をインストールする。 ググったらすぐにでます。

## Vscode の設定を変更

ディレクトリ.VSCODE にある settins.json を エディター VS CODE の settins.json にコピペする。
VS CODE の settins.json 設定へは CODE > 基本設定 > 設定とたどる。

```
#settings.json
{
  "javascript.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#　ローカルサーバー起動

```
npm start
```
