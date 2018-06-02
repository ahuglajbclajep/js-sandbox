# koa-passport-github
GitHubアカウントでログインできるWebページ

## How to use
### 1. Set OAuth app
https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/

`url`: http://localhost:3000/  
`callback URL`: http://localhost:3000/login/callback

`Client ID` と `Client Secret` を控えておく


### 2. Run
```sh
GITHUB_CLIENT_ID=... GITHUB_CLIENT_SECRET=... node app
```


## ページ構成
- /  
メインページ
- /app  
ログインできていれば「ようこそ」が出る
- /login  
GitHubにリダイレクトする
- /login/callback  
GitHubからリダイレクトされる  
ログインできていれば */* にリダイレクトする
- /logout  
ログアウトして */* にリダイレクトする
