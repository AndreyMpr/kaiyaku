<!DOCTYPE html>
<html lang="jp">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>解約受付フォーム</title>
        <link rel="stylesheet" href="kaiyaku-form.css" />
        <!--<script src="https://unpkg.com/htmx.org@1.9.10"></script>-->
    </head>

    <body>
        <div class="lang">
            <a id="langJp">日本語</a>
            <a id="langEn">English</a>
            <a id="langCh">中文​</a>
            <a id="langVn">Tiếng Việt</a>
        </div>

        <h1 id="formTitle">解約受付フォーム</h1>

        <div class="inner explanation">
            <p id="explanation-top">
                解約をご希望の際は、当フォームより解約申請をお願い致します。
                <br>   
                転居先のご住所等、未定の項目は「未定」とご記入ください。
                <br>
                解約を受付後、ご入力いただいたお電話番号へ弊社より、ご連絡をさせていただきます。
            </p>
        </div>

        <div class="inner explanation">
            <p id="explanation-bottom">
                最短解約日：2ヶ月　or　1ヶ月　（契約書をご確認ください）。
                <br>
                例）7/21受付→9/21（2か月前）or　8/21（1ヶ月前）。
            </p>
        </div>

        <section class="inner">
            <form action="kaiyaku-handler.php" method="post">

                <div class="question">
                    <p class="number">1.</p>
                    <label class="wide-label" id="contractor-name-label" for="contractor-name">契約者氏名</label>
                    <input class="wide-input" type="text" id="contractor-name" name="contractorName" required placeholder="例：山田太郎">
                    <p class="comment" id="contractor-name-comment">
                        ※ご契約書に記載されている契約者名をご入力ください。
                    </p>
                </div>

                <div class="question">
                    <p class="number">2.</p>
                    <label class="wide-label" id="property-name-label" for="property-name">物件名</label>
                    <input class="wide-input" type="text" id="property-name" name="propertyName" required placeholder="例：桜木マンション" hx-get="property_names.php" hx-trigger="keyup delay:500ms" hx-indicator="#loading-indicator">
                    <p class="comment" id="property-name-comment">
                        ※ご契約書に記載されている建物名をご入力ください。
                    </p>
                </div>

                <!--<div id="loading-indicator" style="display: none;">少々お待ちください　Loading...</div>-->
                
                <div class="question">
                    <p class="number">3.</p>
                    <label class="wide-label" id="room-number-label" for="room-number">号室</label>
                    <input class="wide-input" type="text" id="room-number" name="roomNumber" required placeholder="例：101">
                    <p class="comment" id="room-number-comment">
                        ※ご契約書に記載されている部屋番号をご入力ください。
                    </p>
                </div>

                <div class="question">
                    <p class="number">4.</p>
                    <label class="wide-label" id="parking-number-label" for="parking-number">駐車場・№</label>
                    <input class="wide-input" type="text" id="parking-number" name="parkingNumber" placeholder="例：01">
                    <p class="comment" id="parking-number-comment">
                        ※お部屋の契約が無い単独の駐車場・駐輪場（バイク置き場含む）・トランクルームを解約したいお客様。
                    </p>
                </div class="question">

                <div class="question">
                    <p class="number">5.</p>
                    <label class="wide-label" id="phone-number-label" for="phone-number">電話番号</label>
                    <input class="wide-input" type="tel" id="phone-number" name="phoneNumber" required placeholder="例：048-729-8661">
                    <p class="comment" id="phone-number-comment">
                            
                    </p>
                </div>

                <div class="question">
                    <p class="number">6.</p>
                    <label class="wide-label" id="move-out-date-label" for="move-out-date">退去予定日（立会日）</label>
                    <input class="wide-input" type="date" id="move-out-date" required name="moveOutDate">
                    <p class="comment" id="move-out-date-comment">
                        ※借主・貸主が退去する部屋の状態を一緒に確認することです。
                        <br>
                        部屋の汚れやキズをチェックし、修繕が必要な場合はどちらが修繕費用を負担するのかを話し合います。
                    </p>
                </div>

                <div class="question">
                    <p class="number">7.</p>
                    <label class="wide-label" id="move-out-time-label" for="move-out-time">立会希望時間</label>
                    <input class="wide-input" type="time" id="move-out-time" name="moveOutTime">
                    <p class="comment" id="move-out-time-comment">
                        ※可能であれば、退去立会の時間をご指定ください。 現時点で時間がわからない場合は、このフィールドを空白のままにしておいてください。後ほど時間を確認するために連絡させていただきます。
                    </p>
                </div>

                <div class="question">
                    <fieldset>
                        <legend class="radio-legend" id="reason-legend"><p class="number">8.</p><span id="reason-legend-text">退去理由</span></legend>
                        <p class="comment" id="reason-comment">
                            ※差し支えなければ、転居の理由をお聞かせください。
                        </p>
                        <input type="radio" id="work" name="reason">
                        <label for="work">仕事都合</label>
                        <br>
                        <input type="radio" id="school" name="reason">
                        <label for="school">卒業・進学</label>
                        <br>
                        <input type="radio" id="house" name="reason">
                        <label for="house">自宅購入</label>
                        <br>
                        <input type="radio" id="small" name="reason">
                        <label for="small">手狭</label>
                        <br>
                        <input type="radio" id="parents" name="reason">
                        <label for="parents">実家へ戻る</label>
                        <br>
                        <input type="radio" id="marriage" name="reason">
                        <label for="marriage">結婚</label>
                        <br>
                        <input type="radio" id="malfunction" name="reason">
                        <label for="malfunction">設備・管理に不満</label>
                        <br>
                        <input type="radio" id="far" name="reason">
                        <label for="far">交通の便</label>
                        <br>
                        <input type="radio" id="neighbour" name="reason">
                        <label for="neighbour">近隣トラブル</label>
                        <br>
                        <label id="fieldset-other-label" for="fieldset-other">その他</label>
                        <input type="text" id="fieldset-other" name="reason" placeholder="県外への転勤の為">
                    </fieldset>
                </div>

                <div class="question">
                    <p class="number">9.</p>
                    <label class="wide-label" id="address-label" for="address">転居先住所</label>
                    <input class="wide-input" type="text" id="address" name="address" placeholder="埼玉県さいたま市大宮区大成町1-518-2">
                    <p class="comment" id="address-comment">
                        ※書類の送付や敷金・日割り決済などの振込に利用される場合がございます。
                    </p>
                </div>

                <div class="question">
                    <p class="number">10.</p>
                    <label class="wide-label" id="bank-account-label" for="bank-account">敷金等返金先口座</label>
                    <input class="wide-input" type="text" id="bank-account" name="bankAccount" required placeholder="例：埼玉りそな銀行　大宮西支店　普通　1474654">
                    <p class="comment"  id="bank-account-comment">
                        ※ご契約書に記載されている建物名をご入力ください。
                    </p>
                </div>
                
                <div class="question">
                    <p class="number">11.</p>
                    <label class="wide-label" id="bank-name-label" for="bank-name">口座名義</label>
                    <input class="wide-input" type="text" id="bank-name" name="bankAccountName" required placeholder="例：カ）サイタママルヤマコウムショ">
                    <p class="comment" id="bank-name-comment">
                        ※ご契約書に記載されている建物名をご入力ください。
                    </p>
                </div>

                <div class="question">
                    <p class="number">12.</p>
                    <label class="wide-label" id="comment-label" for="comment">お住まいいただいていた期間に何か不具合がございましたか。</label>
                    <textarea class="wide-input" id="comment" name="comment"></textarea>
                    <p class="comment" id="comment-comment">
                        ※ご契約書に記載されている建物名をご入力ください。
                    </p>
                </div>

                <div class="question">
                    <fieldset>
                        <legend class="radio-legend" id="satisfaction-legend"><p class="number">13.</p>管理会社丸山マンションセンターの対応について満足度をお教えください。</legend>
                        <input type="radio" id="terrible" name="satisfaction">
                        <label for="terrible">不満足</label>
                        <br>
                        <input type="radio" id="bad" name="satisfaction">
                        <label for="bad">やや不満足</label>
                        <br>
                        <input type="radio" id="ok" name="satisfaction">
                        <label for="ok">普通</label>
                        <br>
                        <input type="radio" id="good" name="satisfaction">
                        <label for="good">やや満足</label>
                        <br>
                        <input type="radio" id="great" name="satisfaction">
                        <label for="great">大変満足</label>
                    </fieldset>
                </div>

                <div class="question">
                    <p class="number">14.</p>
                    <label class="wide-label" id="explanation-label" for="explanation">上記設問にてやや不満足、不満足とお答えされた方はその理由をお聞かせください。</label>
                    <input class="wide-input" type="text" id="explanation" name="explanation">
                    <p class="comment" id="explanation-comment">
                        ※ご契約書に記載されている建物名をご入力ください。
                    </p>
                </div>

                <div class="question">
                    <p class="number">15.</p>
                    <label class="wide-label" id="wishes-label" for="wishes">希望する設備やサービスは何かございましたか。</label>
                    <input class="wide-input" type="text" id="wishes" name="wishes">
                    <p class="comment" id="wishes-comment">
                        ※ご契約書に記載されている建物名をご入力ください。
                    </p>
                </div>

                <div class="question">
                    <p class="number">16.</p>
                    <label class="wide-label" id="other-label" for="other">その他ご質問等がございましたら、ご自由にご記入ください。</label>
                    <input class="wide-input" type="text" id="other" name="other">
                    <p class="comment" id="other-comment">
                        ※ご契約書に記載されている建物名をご入力ください。
                    </p>
                </div>

                <div class="submit-block">
                    <button class="submit-button" - type="submit">登録</button>
                </div>

            </form>
        </section>

        <section> <!--Hidden confirmation block-->

            <div class="confirmation-parent" style="display: qnone;">

                <h1 class="confirmation-title">入力確認</h1>
                <p class="confirmation-subtitle">ご入力を確認してください。</p>

                <div class="confirmation-child">

                    <div class="confirmation-question">
                        <p class="confirmation-number">1.</p>
                        <p class="conformation-label">契約者氏名</p>
                        <p class="conformation-input" id="confirmation-contractor-name">モロゾフ　アンドレイ</p>
                    </div>

                    <hr class="devider">    

                    <div class="confirmation-question">
                        <p class="confirmation-number">2.</p>
                        <p class="conformation-label">物件名</p>
                        <p class="conformation-input" id="confirmation-property-name">ルミエール</p>
                    </div>

                    <hr class="devider"> 

                    <div class="confirmation-question">
                        <p class="confirmation-number">3.</p>
                        <p class="conformation-label">号室</p>
                        <p class="conformation-input" id="confirmation-room-number">105</p>
                    </div>

                    <hr class="devider"> 

                    <div class="confirmation-question">
                        <p class="confirmation-number">4.</p>
                        <p class="conformation-label">駐車場・№</p>
                        <p class="conformation-input" id="confirmation-parking-number">P01</p>
                    </div>

                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">5.</p>
                        <p class="conformation-label">電話番号</p>
                        <p class="conformation-input" id="confirmation-phone-number">0487298661</p>
                    </div>

                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">5.</p>
                        <p class="conformation-label">号室</p>
                        <p class="conformation-input" id="confirmation-room-number">105</p>
                    </div>

                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">6.</p>
                        <p class="conformation-label">退去予定日（立会日）</p>
                        <p class="conformation-input" id="confirmation-move-out-date">03/18</p>
                    </div>

                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">7.</p>
                        <p class="conformation-label">立会希望時間</p>
                        <p class="conformation-input" id="confirmation-move-out-time">12:00</p>
                    </div>

                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">8.</p>
                        <p class="conformation-label">退去理由</p>
                        <p class="conformation-input" id="confirmation-reason">県外への転勤の為</p>
                    </div>

                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">9.</p>
                        <p class="conformation-label">転居先住所</p>
                        <p class="conformation-input" id="confirmation-address">埼玉県さいたま市大宮区大成町1-518-2</p>
                    </div>

                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">10.</p>
                        <p class="conformation-label">敷金等返金先口座</p>
                        <p class="conformation-input" id="confirmation-bank-account">埼玉りそな銀行　大宮西支店　普通　1474654</p>
                    </div>
                    
                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">11.</p>
                        <p class="conformation-label">口座名義</p>
                        <p class="conformation-input" id="confirmation-bank-name">サイタママルヤマコウムショ</p>
                    </div>
                    
                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">12.</p>
                        <p class="conformation-label">お住まいいただいていた期間に何か不具合がございましたか。</p>
                        <p class="conformation-input" id="confirmation-comment">Comment</p>
                    </div>
                    
                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">13.</p>
                        <p class="conformation-label">管理会社丸山マンションセンターの対応について満足度をお教えください。</p>
                        <p class="conformation-input" id="confirmation-satisfaction">埼玉りそな銀行　大宮西支店　普通　1474654</p>
                    </div>
                    
                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">14.</p>
                        <p class="conformation-label">上記設問にてやや不満足、不満足とお答えされた方はその理由をお聞かせください。</p>
                        <p class="conformation-input" id="confirmation-explanation">Explanation</p>
                    </div>
                    
                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">15.</p>
                        <p class="conformation-label">希望する設備やサービスは何かございましたか。</p>
                        <p class="conformation-input" id="confirmation-wishes">Wishes</p>
                    </div>
                    
                    <hr class="devider"> 
                    
                    <div class="confirmation-question">
                        <p class="confirmation-number">16.</p>
                        <p class="conformation-label">その他ご質問等がございましたら、ご自由にご記入ください。</p>
                        <p class="conformation-input" id="confirmation-other">Other</p>
                    </div>

                </div>
            </div>

        </section>

        <div id="privacy-policy">
            <a id="privacy-policy-link" href="https://saitama-life.com/privacy/">個人情報保護方針</a>
        </div>
        
        <!--Hidden lifeline information section-->

        <section>

            <div class="lifeline-parent" style="display: qnone;">

                <h2 id="lifeline-title">移転解約の手続き</h2>

                <h3>1．明け渡しの準備について</h3>

                <p id="lifeline-subtitle">
                    電気・ガス・水道の精算のご連絡をご入居者様よりお願いいたします。
                    <br>
                    退居日の4～5日前に連絡し、退去日にお部屋に来てもらい使用料を精算してください。
                    <br>
                    ※先方がすぐわかるよう、領収書または検針票の番号をご用意ください。
                    <br>
                    ※2～4月は混み合いますので、お早めにご連絡をお願いいたします。
                </p>

                <div class="lifeline-child">

                    <div class="lifeline-block">


                            <p class="utility">電気</p>
                            <div class="utility-contacts" id="lifeline-electricity">
                                <p class="provider-name" id="electricity-provider">東京電力㈱ カスタマーセンター</p>
                                <p class="lifeline-phone" id="electricity-phone">0120-995-001</p>
                                <p id="lifeline-note">※ユーミーエナジーをご利用の場合は、解約のお手続きは不要です。</p>
                            </div>

                            <hr class="devider"> 


                            <p class="utility">ガス</p>
                            <div class="utility-contacts" id="-lifeline-gas">
                                <p class="provider-name" id="gas-provider">東京ガス お客様センター</p>
                                <p class="lifeline-phone" id="gas-phone">0570-002-211</p>
                            </div>

                            <hr class="devider"> 


                            <p class="utility">水道</p>
                            <div class="utility-contacts" id="-lifeline-water">
                                <p class="provider-name" id="water-provider">さいたま市水道局</p>
                                <p class="lifeline-phone" id="water-phone">048-665-3220</p>
                            </div>

                            <hr class="devider"> 


                            <p class="utility">電話</p>
                            <div class="utility-contacts" id="-lifeline-phone">
                                <p class="provider-name" id="phone-provider">NTT</p>
                                <p class="lifeline-phone" id="phone-phone">116</p>
                            </div>

                            <hr class="devider"> 


                            <p class="utility">郵便局</p>
                            <div class="utility-contacts" id="-lifeline-post">
                                <p class="provider-name" id="post-provider">転居の手続きを最寄りの郵便局窓口にて行ってください。</p>
                                <a class="lifeline-phone" id="post-phone" href="https://www.post.japanpost.jp/service/tenkyo/" target="_blank">オンライン申込（外部サイト）</a>
                            </div>
                    </div>
                </div>

                <div class="lifeline-block">
                    <h3>2．家賃のお支払い・敷金の返還について</h3>
                    <p>
                        退居する月の分まで前月末にお支払いください。敷金返還時に精算いたします。
                        <br>
                        敷金より、メンテナンス費用等の負担基準に基づき精算し、後日銀行振込にて返還いたします。
                    </p>
                </div>

                <div class="lifeline-block">
                    <h3>3．退去の際にご用意いただくもの</h3>
                    <p>
                        ① 転居先（住所・電話番号）
                        <br>
                        ② 振込先口座情報
                        <br>
                        ③ 鍵（スペアキーも含む）
                        <br>
                        ④ 入居のしおり
                    </p>
                </div>

                <div class="lifeline-block">
                    <h3>４．CHUBB（エース）保険加入の方</h3>
                    <p>ご契約者様ご自身で保険解約のお手続きをご依頼ください。</p>
                    <div class="lifeline-child">
                        <div class="lifeline-block">
                            <p class="utility">保険</p>
                                <div class="utility-contacts" id="lifeline-guarantor">
                                    <p class="provider-name" id="guarantor-provider">CHUBB保険サポートセンター</p>
                                    <p class="lifeline-phone" id="guarantor-phone">0120-327-332</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="lifeline-block">
                    <h3>5．自転車をお持ちの方</h3>
                    <p>自転車は転居先へお持ちいただくか、ご自身で適切に処分して頂くようお願いいたします。</p>
                </div>

                <div class="lifeline-block">
                    <p>※ 立会日時の確認が業者より入りますのでご対応よろしくお願い致します。</p>
                </div>

            </div>
        </section>

        <script src="translations/jp.js"></script>
        <script src="translations/en.js"></script>
        <script src="translations/ch.js"></script>
        <script src="translations/vn.js"></script>

    </body>
</html>