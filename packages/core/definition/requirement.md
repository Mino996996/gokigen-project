##作りたいもの: 自分の気分を記録できるアプリ

###目的 (ユーザーに何を達成させたいのか):
自分の機嫌を自分で取れるようになるために、出来事と自分の気持ちを記録と可視化することで、1日、一ヶ月、一年と過ごした時間の価値を自発的に積み上げていけるようにするアプリ。

構想として、ユーザーが記録を継続することで、ユーザー個人の影響を受けやすいポジティブシーンとネガティブシーンを見つけられるようになっていく。
その結果として、毎日を好きなもので埋めたり、 気分をコントロールしやすくなるのがベスト。
- プラットフォーム:Web / ネイティブ (学習の都合上Web)
  

##ユースケース
- ペルソナ
    - 20代前半から30代
    - 既婚未婚問わず
    - やることが多く、1日が早く過ぎてしまうと思っている
    - 多忙で自分のことを考える時間が少なくなった
    - 主体的に生きている実感が欲しい
    - スマートフォンを所持
    - 日記みたいな生活記録を残したいと思っている
    - だが筆不精
    - 瞬間的なエモさを残すけど、言語化に時間を取りたくない
    - 男性
    - 論理思考が好き


- タッチポイント
    - instagramで人が公開した行動管理を見て、「簡単にライフログが残せそう」「シンプルで良い感じ」と感じて試し始める
    - 友人から「これ便利」とスマホを見せてもらって、ログの積み重ねを見て「なんかかっこいい」と思って始める
    
### ユーザーストーリー
> 
> why: ユーザーは1日を「いい日にしたい」と思っている。
> 
> how: 昨日の振り返りができていないので、前日の価値がなかったように感じている
> 
> what: 簡単に出来事と気分を記録できて:input、視覚的にすぐ振り返りができるもの:outputを必要としている

> why: user want to "protect his log"
> 
> how: user use registration, use original account, and logout system
> 
> what: user login & password
> what: logout button
> 
>> given: having account and correct account and password
>> 
>> if not: move to create account page
> 
>> given: show logout button while user is login
>>
>> if not: hidden logout button

> why: ユーザーは良い日を自分から作りたいと思う
> 
> how: しかし、具体的にどうすれば良い1日になるか自分の傾向がわかっていないので何をすれば良いか決められない
> 
> what: 出来事の情報と自分の感情記録を蓄積して、自分自身の傾向を知りたい 

> why: ユーザーは簡単に気持ちを「快く」「長時間維持したい」
> 
> how: しかし、それがどんなことなのかわからない
> 
> what: set the check-box items which are "by outside-event" / "by self-action" 外部影響・自発的影響
> 
> what: set the check-box items. "happen" or "keeping" [発生」と「継続」の項目
> 
>>given: in outside-inside, "user can check both".
>>
>>given: in happen-keeping, "user can't check both".
>>
>>if not: "appear an information" when user didn't select their or "can't push record button"

> why: user want to "classify the event" by score of his feeling
> 
> how: user don't define the score 
> 
> what: set a "marks" that "match his feeling" and "have a feeling score"

> why: user want to know his "past history" to remember positive-event and confirm his feeling score of one range.
>
> how: user want to check a "daily/weekly/yearly average score" , "events" and "their numbers"
> 
> what: set a time-log.
> 
> what: set calculate system which "create feeling average score of daily/weekly/monthly/yearly".
> 
> what: "input the event name by manual" and system can "count the same names"
> 
> what: "set a liner-graph" of feeling average of month.
> 
> what: "set a list" which shows his event, and contains their numbers
> 
> what: "input a place-information by manual"
> 
> what: "set a list" which shows place and numbers
> 
> what: "set a two circle graph" which show the ratio of inside-outside and happen-keeping 
> 
>>given: must log score and information data
>>
>>if not: showing "no record" each area.

> why: user want to show his history on SNS(Twitter/instagram/facebook)
> 
> how: user want to export his history easily
> 
> what: set export button to SNS
> 
>> given: setted his SNS account
>> if not: can't push export button

日々の価値を確認したい。とは、 Connextra Format に代表されるフォーマットで描かれる、利用者のプロダクトへのタッチポイント〜利益を得るまでのストーリー。

初心者ユーザー

アプリケーションをTwitter で知り、初めて利用するユーザー。成人。
玄人ユーザー

アプリケーションをTwitterで知り、何度も活用しているユーザー。
ユーザー

初心者ユーザー + 玄人ユーザー

Connextra Format

As a <Role> I want <Feature> So that <Business Value>
In Order to <Business value>, a <Role> wants to <Feature>.

〜として、〜がほしい。なぜならば〜を実現するためである。

ユーザーは心が動いたタイミングでその気持ちを記録したい。なぜならばある出来事に対する主観的価値を定量的に評価したいから。

何のイベントに対して心が動いたのか、記録する必要
イベントをタグとして記録するのかなど要件詰める
ユーザーは会員機能がほしい。なぜならば自身の感情をレコードしたいからである。

ユーザーは気分を記録した日付を記録・閲覧したい。
なぜならばその一日の価値を可視化したいからだ。

グラフ？数値？
ユーザーは週・月・年ごとの平均スコアを閲覧したい。なぜならばその単位の価値を可視化したいからだ。

グラフ？数値？

受け入れ条件
ユーザーストーリーに複数対応する。 Given (前提条件。「ログインしている状態」), When (アクション。「ログアウトボタンを押すと」), Then (結果。「ログアウトする」)
上記に加えて、複数のGivenがある場合、あるいは失敗ケース (ID/Passが間違っていたらログインできないなど)を定義する場合は、But, And といった接続詞も必要に応じて使用する。

