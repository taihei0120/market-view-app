# アプリケーション概要
金融情報のキュレーションアプリ。  
FXチャート、ニュース、ツイートの3つの情報を表示。いずれの情報もWeb APIから取得。  
（DBは存在せず、全ての情報は外部のWeb APIからその都度取得）  
フロントエンドをReactで、サーバーサイドはRails（APIモード）で実装。  

# 制作した背景  
テーマは、投資に必要な情報を「一箇所でまとめて見られる」事です。  
自分で投資をしていると、チャートは証券会社のウェブサイトに、ニュースはそれぞれのメディアのウェブサイトに、ツイートはツイッターのウェブサイトにそれぞれ見に行っており手間でした。見たい情報を一箇所にまとめることで、より重要な事（投資の意思決定など）に時間や手間を注げられると思い、本アプリケーションを作成しました。  

# アプリケーション・イメージ
[![Image from Gyazo](https://i.gyazo.com/3788b965efa8246a6bbe4484f261aced.png)](https://gyazo.com/3788b965efa8246a6bbe4484f261aced)

# 使用したAPI
FXチャート: Alpha Vantage API  
ニュース: NEWS API  
ツイート: Twitter API  
  
※注意点：いずれのAPIも無料枠のためAPIコールに制限あり。  
FXチャート: 1分あたり5回まで、1日あたり500回まで。  
ニュース: 1日あたり100回まで。  
ツイート: 15分あたり180回まで。  

# ページ構成
ページ数は2ページ  
・「Top Page」には、3つの情報（FXチャート、ニュース、ツイート）をコンパクトに表示。  
[![Image from Gyazo](https://i.gyazo.com/add6d1b1b5b6141e8fa3fd31835aa458.png)](https://gyazo.com/add6d1b1b5b6141e8fa3fd31835aa458)  
・「Dashboard」ページには、3つの情報を詳細に表示。  
[![Image from Gyazo](https://i.gyazo.com/ad476a729481fba6a074e24a37de2332.gif)](https://gyazo.com/ad476a729481fba6a074e24a37de2332)  

# 実装機能（Top Page における）
・Box内のスクロール機能  
[![Image from Gyazo](https://i.gyazo.com/2020d5db59208fc1f4c9c0b7b2acd655.gif)](https://gyazo.com/2020d5db59208fc1f4c9c0b7b2acd655)  
・Modalウィンドウによる詳細情報を表示
[![Image from Gyazo](https://i.gyazo.com/37c08fec99a964f3ad50e359a3a87916.gif)](https://gyazo.com/37c08fec99a964f3ad50e359a3a87916)  

# 実装機能（Dashboard における）
・自動スクロール機能  
[![Image from Gyazo](https://i.gyazo.com/5164796a6f62b853f2abd4419ecb07eb.gif)](https://gyazo.com/5164796a6f62b853f2abd4419ecb07eb)  
  
・検索機能  
<a href="https://gyazo.com/38b585700ce62b112ef82017035d69c7"><img src="https://i.gyazo.com/38b585700ce62b112ef82017035d69c7.gif" alt="Image from Gyazo" width="1000"/></a>  

# バージョン情報  
ruby 2.6.5  
Rails 6.0.4  
React 17.0.2  
Docker 20.10.8  
Docker Compose 2.0.0

# Railsにて使用した主要なGem  
alphavantagerb: API（FXチャートの情報源）にリクエストを送るため  
news-api: API（ニュース記事の情報源）にリクエストを送るため  
twitter: API（ツイートの情報源）にリクエストを送るため

# Reactにて使用した主要なライブラリ  
chakra-ui: UI/UXツール  
axios: ReactからRailsにリクエストを送るため  
lightweight-charts: FXチャート作図  
react-twitter-embed: ツイートをtwitter社の規約通りに表現するため
