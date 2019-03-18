# koa-passport-github

GitHub アカウントでログインできる Web ページの例。

## 使い方

1. GitHub の OAuth App を設定する。  
   <https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/>  
   「Homepage URL」には http://localhost:3000/ を、「Authorization callback URL」には http://localhost:3000/login/callback を指定する。
   「Client ID」と「Client Secret」を控えておく。

2. 「Client ID」と「Client Secret」を使って以下のコマンドを実行する。

```sh
$ GITHUB_CLIENT_ID=... GITHUB_CLIENT_SECRET=... node app
```

## ページの構成

- [/](http://localhost:3000)  
  トップページ。
- [/app](http://localhost:3000/app)  
  ログインできていれば「ようこそ」が出る。
- [/login](http://localhost:3000/login)  
  OAuth App でのログイン画面にリダイレクトする。
- [/login/callback](http://localhost:3000/login/callback)  
  OAuth App からリダイレクトされる。
  ログインできていればトップページにリダイレクトする。
- [/logout](http://localhost:3000/logout)  
  ログアウトしてトップページにリダイレクトする。
