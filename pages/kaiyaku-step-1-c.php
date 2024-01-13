<!DOCTYPE html>
<html lang="ja">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="">
  <meta name="format-detection" content="telephone=no">
  <meta name="robots" content="noindex , nofollow" />
  <title>解約対象情報の入力 | エイブル保証管理建物 ご契約者様向け 契約更新専用サイト</title>
  <link rel="stylesheet" type="text/css" href="../../common/css/common.css">
  <link rel="stylesheet" type="text/css" href="../../common/css/kaiyaku.css">
  <script type="text/javascript" src="../../common/js/jquery-3.5.1.min.js"></script>
  <script type="text/javascript" src="../../common/js/function.js"></script>
  <script type="text/javascript" src="../../common/js/fixedBack.js"></script>
  <!-- DatePicker ここから-->
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>
<!-- Moment ここから-->
<script type="text/javascript" src="../../common/js/moment-with-locales.js"></script>
  <!-- validateionEngine ここから-->
<link rel="stylesheet" href="../../common/ve/validationEngine.jquery.css" type="text/css"/>
<script src="../../common/ve/jquery.validationEngine-ja.js" type="text/javascript" charset="utf-8"></script>
<script src="../../common/ve/jquery.validationEngine.min.js" type="text/javascript" charset="utf-8"></script>

<script>
    $(function(){


	/**
	 * 月の日数を取得
	 */
	function daysInMonthCount(date, month) {
		let count =  moment(date).month(month).daysInMonth();
		return count;
	}

	<!-- 今日の日付取得して、1ヶ月後（-日)をカレンダーにセット --> 
	  var date = new Date();
        /* var date = new Date("2022/10/01 00:00:00"); 日付を指定したいとき*/
/*	  var date = new Date(2024, 1 - 1, 30);*/


	/* 当月の日数をカウント */
        var day_in_month_count = daysInMonthCount(date, moment(date).month() + 1);
	/* 今日の日付とカウントした日数を比較 */
        if (date.getDate() > day_in_month_count) {
          date.setDate(day_in_month_count);
          date.setMonth(moment(date).month() + 1);
        } else {
          date.setMonth(moment(date).month() + 1);
          date.setDate(date.getDate() - 1);
        }
	/* 退去日カレンダー表示 */ 
	$('#date').datepicker({
	 
	    dateFormat: 'yy/mm/dd',
	 
	});
	$('#date').datepicker('setDate', date);

	/* 解約日カレンダー表示 */ 
	$('#date2').datepicker({
	 
	    dateFormat: 'yy/mm/dd',
	 
	});
	$('#date2').datepicker('setDate', date);
	
    });
</script>
<script type="text/javascript">
$(function(){
    $(".zentohan").blur(function(){
        charChange($(this));
    });
 
 
    charChange = function(e){
        var val = e.val();
        var str = val.replace(/[Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
 
        if(val.match(/[Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g)){
            $(e).val(str);
        }
    }
});
</script>
  <!-- こっから当該のスクリプト -->
  <script>
    // バリデーションエンジン走
    $(document).ready(function(){
        $("#form").validationEngine('attach', {
	    promptPosition: "inline" 
	});
    });

    // 日付バリデーション関数
    function checkDate(field, rules, i, options){
      const inputted_dates = field.val().match(/(\d{4})\/(\d{2})\/(\d{2})/); // 日付のパース(yyyy/mm/dd 形式のみ対応)
      // const inputted_dates = field.val().match(/(\d{4})[/\-]{1}(\d{2})[/\-]{1}(\d{2})/); // 日付のパース(yyyy/mm/dd + yyyy-mm-dd 形式対応)
      if(!inputted_dates || !isValidDate(inputted_dates[1], inputted_dates[2], inputted_dates[3])) {
        return '<img src="/common/img/exclamation_err.gif" width="22"> 退去日は YYYY/MM/DD (例：2021/08/01) の形式で入力するかカレンダーより選択してください'; // チェック結果をreturn
      }
    }

    // 日付バリデーション関数
    function checkDate2(field, rules, i, options){
      const inputted_dates = field.val().match(/(\d{4})\/(\d{2})\/(\d{2})/); // 日付のパース(yyyy/mm/dd 形式のみ対応)
      // const inputted_dates = field.val().match(/(\d{4})[/\-]{1}(\d{2})[/\-]{1}(\d{2})/); // 日付のパース(yyyy/mm/dd + yyyy-mm-dd 形式対応)
      if(!inputted_dates || !isValidDate(inputted_dates[1], inputted_dates[2], inputted_dates[3])) {
        return '<img src="/common/img/exclamation_err.gif" width="22"> 解約日は YYYY/MM/DD (例：2021/08/01) の形式で入力するかカレンダーより選択してください'; // チェック結果をreturn
      }
    }

    // 日付の整合性チェック関数
    function isValidDate(y, m, d) {
      dt = new Date(y, m-1, d);
      // 日付として正しければtrueが返る
      return (dt.getFullYear() == y && dt.getMonth() == m-1 && dt.getDate() == d);
    }
  </script>
<style>
.form__radio {
	display:block;
	opacity:0;
	position:absolute;
}

</style>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script type="text/javascript" src="/common/js/analytics.js"></script>
</head>

<body>

  <div class="commonforms">
<div id="floating_back">
  <a href="./?token=6dba7ff7a266855b81541fd1084b4315523ea3d695e4b78dfa8a039dd19fa8e5">前ページへ戻る<span><br>ブラウザの戻るボタン（画面左上の「←」ボタン）を使わないでください。</span></a>
</div>
    <header id="pageHeader" class="kaiyaku_pages pageHeader_flow">
      <div class="pageHeaderInner">
        <h2>ご入居者様専用 解約申込みサイト</h2>
      </div>
    </header>
    <div class="formflow">
      <div class="inner">
        <ul class="flowlist flowlist_orange">
          <li>
            <div class="flownum flownum_current"><span>1</span></div>
            <p class="flownum_text flownum_text_current">解約対象情報の入力</p>
          </li>
          <li>
            <div class="flownum"><span>2</span></div>
            <p class="flownum_text">解約申込者情報の<br class="pc">入力</p>
          </li>
          <li>
            <div class="flownum"><span>3</span></div>
            <p class="flownum_text">入力内容の確認</p>
          </li>
          <li>
            <div class="flownum"><span>4</span></div>
            <p class="flownum_text">解約申込み完了</p>
          </li>
        </ul>
      </div>
    </div>

	<form action="./conf.php" method="post" id="form">
	<input type="hidden" name="token" value="6dba7ff7a266855b81541fd1084b4315523ea3d695e4b78dfa8a039dd19fa8e5">
    <section class="block1">
      <div class="inner">
	<div class="e_check">
	</div>

        <div class="bgbeige_text">解約対象と退去日を入力してください。</div>

        <div class="columnbox">
          <div class="columntitle">
            <img src="../../common/img/column_orange.png" class="column_img">解約対象
            <span class="inquiryTag">必須</span>
          </div>
          <div id="layer_1_1" class="layer_1">
            <p>
              <input type="radio" name="cancel_target_l" class="validate[required] form__radio" id="radio0-1" value="お部屋をご契約しているお客様">
              <label for="radio0-1" class="form__label-radio">お部屋または付帯設備を解約したいお客様</label>
            </p>
            <div id="layer_2_1" class="layer_2">
              <p>
                <input type="radio" name="cancel_target_m" class="validate[required] form__radio" id="radio1-1" value="お部屋を解約する">
                <label for="radio1-1" class="form__label-radio">お部屋を解約する</label>
              </p>
              <div id="layer_3_1" class="layer_3">
                <p><span class="bold">駐車場などの付帯設備の有無を選択ください</span>　<br class="sp_br"><span class="columntitle_notes2">※付帯設備の有無がわからない場合は不明をご選択ください</span></p>
                <div class="inputblock">
                  <p>
                    <input type="radio" name="incidental_contract_exist" class="validate[required] form__radio" id="radio2-1" value="無し">
                    <label for="radio2-1" class="form__label-radio">無し</label>
                  </p>
                  <p>
                    <input type="radio" name="incidental_contract_exist" class="validate[required] form__radio" id="radio2-2" value="有り">
                    <label for="radio2-2" class="form__label-radio">有り</label>
                  </p>
                  <div class="inputblock
" id="err_cancel_parking1">
                    <p>ご契約されている駐車場などの付帯設備番号</p>
                    <p><input type="text" name="cancel_parking1" value="" placeholder="" class="validate[condRequired[radio2-2]] inputt_orange input_size8" ></p>
                    <p class="columntitle_notes2 marginT05 marginB05">※ご契約されている全ての設備をご記入ください。<br>
                      ※付帯設備も同時にご解約となります。<br>
                      ※番号が不明な場合は具体的な位置をご記入ください。</p>
                  </div>
                  <p>
                    <input type="radio" name="incidental_contract_exist" class="validate[required] form__radio" id="radio2-3" value="不明">
                    <label for="radio2-3" class="form__label-radio">不明</label>
                  </p>
            <!-- Radioボタンのエラーメッセージ表示位置対策 -->            
              <p>
              <input type="radio" name="incidental_contract_exist" class="validate[required] form__radio" id="radio2-4"  style="display:none;" readonly>
              </p>
                </div>
              </div>
            </div>
            <div id="layer_2_2" class="layer_2">
              <p class="marginT10">
                <input type="radio" name="cancel_target_m" class="validate[required] form__radio" id="radio1-2" value="駐車場などの付帯設備のみを解約する">
                <label for="radio1-2" class="form__label-radio">駐車場などの付帯設備のみを解約する</label>
              </p>
              <div class="layer_3">
                <div class="inputblock">
                  <p>
                    <input type="radio" name="cancel_target_s1" class="validate[required] form__radio" id="radio3-1" value="駐車場を解約する">
                    <label for="radio3-1" class="form__label-radio">駐車場を解約する</label>
                  </p>
                  <p class="marginT10">
                    <input type="radio" name="cancel_target_s1" class="validate[required] form__radio" id="radio3-2" value="駐輪場（バイク置き場含む）を解約する">
                    <label for="radio3-2" class="form__label-radio">駐輪場（バイク置き場含む）を解約する</label>
                  </p>
                  <p class="marginT10">
                    <input type="radio" name="cancel_target_s1" class="validate[required] form__radio" id="radio3-3" value="トランクルームを解約する">
                    <label for="radio3-3" class="form__label-radio">トランクルームを解約する</label>
                  </p>
            <!-- Radioボタンのエラーメッセージ表示位置対策 -->            
              <p>
              <input type="radio" name="cancel_target_s1" class="validate[required] form__radio" id="radio3-4"  style="display:none;" readonly>
              </p>
                  <div class="inputblock
" id="err_cancel_parking2">
                    <p>
                      解約する設備番号　<input type="text" name="cancel_parking2" value="" placeholder="" class="validate[required] inputt_orange input_size8" >
                    </p>
                    <p class="columntitle_notes2">※複数まとめての解約は受付できません。解約される1件のみをご記入ください</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Radioボタンのエラーメッセージ表示位置対策 -->            
              <p>
              <input type="radio" name="cancel_target_m" class="validate[required] form__radio" id="radio1-3"  style="display:none;" readonly>
              </p>
          </div>
          <div id="layer_1_2" class="layer_1 marginT25">
            <p>
              <input type="radio" name="cancel_target_l" class="validate[required] form__radio" id="radio0-2" value="駐車場・駐輪場">
              <label for="radio0-2" class="form__label-radio">お部屋の契約が無い単独の駐車場・駐輪場（バイク置き場含む）・トランクルームを解約したいお客様</label>
            </p>
            <div id="layer_2_3" class="layer_2">
              <p>
                <input type="radio" name="cancel_target_s2" class="validate[required] form__radio" id="radio4-1" value="駐車場を解約する">
                <label for="radio4-1" class="form__label-radio">駐車場を解約する</label>
              </p>
              <p class="marginT10">
                <input type="radio" name="cancel_target_s2" class="validate[required] form__radio" id="radio4-2" value="駐輪場（バイク置き場含む）を解約する">
                <label for="radio4-2" class="form__label-radio">駐輪場（バイク置き場含む）を解約する</label>
              </p>
              <p class="marginT10">
                <input type="radio" name="cancel_target_s2" class="validate[required] form__radio" id="radio4-3" value="トランクルームを解約する">
                <label for="radio4-3" class="form__label-radio">トランクルームを解約する</label>
              </p>
            <!-- Radioボタンのエラーメッセージ表示位置対策 -->            
              <p>
              <input type="radio" name="cancel_target_s2" class="validate[required] form__radio" id="radio4-4"  style="display:none;" readonly>
              </p>
            </div>
          </div>
            
            <!-- Radioボタンのエラーメッセージ表示位置対策 -->            
              <p>
              <input type="radio" name="cancel_target_l" class="validate[required] form__radio" id="radio0-3"  style="display:none;" readonly>
              </p>
            
        </div>

        <!-- 退去日 -->
        <div class="columnbox columnbox_taikyo
" id="err_departure_date">
          <div class="columntitle">
            <img src="../../common/img/column_orange.png" class="column_img">退去日
            <span class="inquiryTag">必須</span>
<!--            <span class="columntitle_notes">&#x203B;一度ご通知いただいた退去日は変更できません。※本日以降の日付でご指定ください。</span>-->
          </div>
          <span class="columntitle_notes2">　&#x203B;一度ご通知いただいた退去日は変更できません。※明日以降の日付でご指定ください。</span>
          <div class="inputblock block_focus">
            <input  id="date" type="text" name="departure_date" value="" placeholder="2021/01/01" class="validate[required,future[NOW],funcCall[checkDate]] inputt_orange input_size9 zentohan">
          </div>
        </div>

        <!-- 解約日 -->
        <div class="columnbox columnbox_kaiyaku
" id="err_departure_date">
          <div class="columntitle">
            <img src="../../common/img/column_orange.png" class="column_img">解約日
            <span class="inquiryTag">必須</span>
<!--            <span class="columntitle_notes">&#x203B;一度ご通知いただいた解約日は変更できません。※本日以降の日付でご指定ください。</span>-->
          </div>
          <span class="columntitle_notes2">　&#x203B;一度ご通知いただいた解約日は変更できません。※明日以降の日付でご指定ください。</span>
          <div class="inputblock block_focus">
            <input  id="date2" type="text" name="departure_date" value="" placeholder="2021/01/01" class="validate[required,future[NOW],funcCall[checkDate2]] inputt_orange input_size9 zentohan">
          </div>
        </div>

      </div>
    </section>

    <section class="block1">
      <div class="inner">
        <!-- 【初期表示】 -->
        <div id="kaiyaku_1">
        <div class="bgbeige_text marginB15">解約される建物の情報をご入力ください。</div>
	  <p class="columntitle_notes2 marginB15"> ※付帯設備のみをご解約される場合もご契約されている建物名・部屋番号をご入力ください</p>
          <div class="columnbox
" id="err_building_mei_1">

            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">建物名<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されている建物名をご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されている建物名をご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="building_mei_1" value="" placeholder="（例：エイブル保証マンション）" class="validate[required] inputt_orange input_size10">
            </div>
          </div>
          <div class="columnbox
" id="err_room_name_1">
            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">部屋番号<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されている部屋番号をご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されている部屋番号をご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="room_name_1" value="" placeholder="（例：1001）" class="validate[required] inputt_orange input_size1">
              号室
            </div>
          </div>
        </div>
        <!-- 【駐車場を解約を選択している場合】 -->
        <div id="kaiyaku_2">
        <div class="bgbeige_text">解約されるご契約情報をご入力ください。</div>
          <div class="columnbox
" id="err_building_mei_2">
            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">駐車場名<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されている駐車場名をご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されている駐車場名をご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="building_mei_2" value="" placeholder="（例：エイブル保証駐車場）" class="validate[required] inputt_orange input_size10">
            </div>
          </div>
          <div class="columnbox
" id="err_room_name_2">
            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">区画名<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されている区画をご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されている区画をご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="room_name_2" value="" placeholder="（例：1001）" class="validate[required] inputt_orange input_size1">
            </div>
          </div>
        </div>
        <!-- 【駐輪場(バイク置き場含む)を解約を選択している場合】 -->
        <div id="kaiyaku_3">
        <div class="bgbeige_text">解約されるご契約情報をご入力ください。</div>
          <div class="columnbox
" id="err_building_mei_3">
            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">駐輪場（バイク置き場含む）名<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されている駐輪場名をご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されている駐輪場（バイク置き場含む）名をご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="building_mei_3" value="" placeholder="（例：エイブル保証駐輪場）" class="validate[required] inputt_orange input_size10">
            </div>
          </div>
          <div class="columnbox
" id="err_room_name_3">
            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">区画名<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されている区画をご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されている区画をご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="room_name_3" value="" placeholder="（例：1001）" class="validate[required] inputt_orange input_size1">
            </div>
          </div>
        </div>
        <!-- 【トランクルームを解約を選択している場合】 -->
        <div id="kaiyaku_4">
        <div class="bgbeige_text">解約されるご契約情報をご入力ください。</div>
          <div class="columnbox
" id="err_building_mei_4">
            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">トランクルーム名<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されているトランクルームをご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されているトランクルームをご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="building_mei_4" value="" placeholder="（例：エイブル保証トランクルーム）" class="validate[required] inputt_orange input_size10">
            </div>
          </div>
          <div class="columnbox
" id="err_room_name_4">
            <div class="columntitle">
              <img src="../../common/img/column_orange.png" class="column_img">区画名<span class="inquiryTag">必須</span>
<!--              <span class="columntitle_notes">&#x203B;ご契約書に記載されている区画をご入力ください。</span>-->
            </div>
            <span class="columntitle_notes2">　&#x203B;ご契約書に記載されている区画をご入力ください。</span>
            <div class="inputblock block_focus">
              <input type="text" name="room_name_4" value="" placeholder="（例：1001）" class="validate[required] inputt_orange input_size1">
            </div>
          </div>
        </div>

        <div class="columnbox columnbox_code
" id="err_zipcode">
          <div class="columntitle">
            <img src="../../common/img/column_orange.png" class="column_img">郵便番号<span class="inquiryTag">必須</span>
          </div>
          <div class="inputblock block_focus">
            <span class="input_while">〒</span>
            <input type="text" id="building_zip_1" name="building_zip_1" value="" placeholder="（例：110）" class="validate[condRequired[building_zip_2],maxSize[3]] inputt_orange input_size5">
            <span class="input_while">-</span>
            <input type="text" id="building_zip_2" name="building_zip_2" value="" placeholder="（例：0013）" class="validate[required,maxSize[4]] inputt_orange input_size5 input_second"><button type="button" class="searchbtn btn-search_addr">検索</button>
          </div>
        </div>

        <div class="columnbox
" id="err_building_address">
          <div class="columntitle">
            <img src="../../common/img/column_orange.png" class="column_img">所在地<span class="inquiryTag">必須</span>
          </div>
          <div class="inputblock block_focus">
            <label class="selectarrow">
              <select name="building_address_pref" id="building_address_pref" class="validate[required] inputselect inputselect_orange input_size6">
                <option value="">都道府県</option>
                <option value="北海道">北海道</option>
                <option value="青森県">青森県</option>
                <option value="岩手県">岩手県</option>
                <option value="宮城県">宮城県</option>
                <option value="秋田県">秋田県</option>
                <option value="山形県">山形県</option>
                <option value="福島県">福島県</option>
                <option value="茨城県">茨城県</option>
                <option value="栃木県">栃木県</option>
                <option value="群馬県">群馬県</option>
                <option value="埼玉県">埼玉県</option>
                <option value="千葉県">千葉県</option>
                <option value="東京都">東京都</option>
                <option value="神奈川県">神奈川県</option>
                <option value="新潟県">新潟県</option>
                <option value="富山県">富山県</option>
                <option value="石川県">石川県</option>
                <option value="福井県">福井県</option>
                <option value="山梨県">山梨県</option>
                <option value="長野県">長野県</option>
                <option value="岐阜県">岐阜県</option>
                <option value="静岡県">静岡県</option>
                <option value="愛知県">愛知県</option>
                <option value="三重県">三重県</option>
                <option value="滋賀県">滋賀県</option>
                <option value="京都府">京都府</option>
                <option value="大阪府">大阪府</option>
                <option value="兵庫県">兵庫県</option>
                <option value="奈良県">奈良県</option>
                <option value="和歌山県">和歌山県</option>
                <option value="鳥取県">鳥取県</option>
                <option value="島根県">島根県</option>
                <option value="岡山県">岡山県</option>
                <option value="広島県">広島県</option>
                <option value="山口県">山口県</option>
                <option value="徳島県">徳島県</option>
                <option value="香川県">香川県</option>
                <option value="愛媛県">愛媛県</option>
                <option value="高知県">高知県</option>
                <option value="福岡県">福岡県</option>
                <option value="佐賀県">佐賀県</option>
                <option value="長崎県">長崎県</option>
                <option value="熊本県">熊本県</option>
                <option value="大分県">大分県</option>
                <option value="宮崎県">宮崎県</option>
                <option value="鹿児島県">鹿児島県</option>
                <option value="沖縄県">沖縄県</option>
              </select>
            </label>
            <input type="text" name="building_address1" value="" placeholder="（例：○○○市1-2-34）" class="validate[condRequired[building_address_pref]] inputt_orange input_size7 input_second" >
          </div>
        </div>

      </div>
    </section>

    <div class="inner">
      <div class="btncenter btncenters">
        <a href="./?token=6dba7ff7a266855b81541fd1084b4315523ea3d695e4b78dfa8a039dd19fa8e5" class="btn3">戻る</a>
        <button type="submit"  class="btn1 btn1_w" style="display: inline-block;cursor: pointer;">STEP②「解約申込者情報の入力」に進む</button>
      </div>
    </div>
    </form>

    <div class="ssl_seal">  
          <div class="left_img">
<!-- DigiCert Seal HTML -->
<!-- Place HTML on your site where the seal should appear -->
<div id="DigiCertClickID_RsZ2TMoe"></div>
<!-- DigiCert Seal Code -->
<!-- Place with DigiCert Seal HTML or with other scripts -->
<script type="text/javascript">
    var __dcid = __dcid || [];
    __dcid.push({"cid":"DigiCertClickID_RsZ2TMoe","tag":"RsZ2TMoe"});
    (function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
</script>
    
        </div>
        <div class="right_txt">
        	        <p>ご記入いただいた個人情報は、SSL（暗号化通信）にて保護された状態で送信されます。<br><a href="https://www.websecurity.digicert.com/ja/jp/security-topics/what-is-ssl-tls-https" target="_blank" >SSL/TLSサーバ証明書とは</a></p>
        </div>    

    </div>    
    <footer class="formfooter">
      <div class="inner">
        <figure class="logoimg"><img src="../../common/img/logo.png" alt="エイブル保証株式会社"></figure>
        <p class="address">〒100-0013 東京都千代田区霞が関1-4-1 日土地ビル3階</p>
        <p class="copy">Copyright &copy; エイブル保証株式会社, All Rights Reserved.</p>
      </div>
    </footer>

  </div>

  <script type="text/javascript" src="../../common/js/kaiyaku_input_01.js"></script>
<script>
function ZenNum2HanNum(str) {
    return str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}
/**
 * 郵便番号から住所を取得
 *
 *
 *
 */
var getAddressForZip = function(zip, pref_element, address1_element){
    if(zip){
        var zip_list = zip.split('-');
        if(zip_list.length == 2 && zip_list[0] && zip_list[1]){
            var data = {
                zip1: zip_list[0],
                zip2: zip_list[1],
            };

            $.ajax({
                type: 'get',
                url: './ajax/get_postal_code.php',
                data: data,
                cache: false,
                async: true,
                timeout: 3000,
                dataType: 'json'
            }).done(function(data, status, xhr){
                if(data.status == 'success'){
                    var address_data = data.data.data[0];
                    var d = address_data.ja;
                    pref_element.val(d.prefecture);
                    address1_element.val(d.address1 + d.address2);
                }
            }).fail(function(xhr, status, error){

            }).always(function(xhr, status){

            });

        }else{
            alert('郵便番号を正しく入力してください');
        }
    }else{
        alert('郵便番号を入力してください');
    }
}
$(function(){
	$("[name=cancel_target_l]").change(function(){
		switch ($(this).val()) {
			case "お部屋をご契約しているお客様":
//				$("[name=cancel_target_s2]").prop("required", false);
				break;
			case "駐車場・駐輪場":
//				$("[name=cancel_target_s2]").prop("required", true);
				break;
		}
		//$("[name=incidental_contract_exist]").change();
	});
	$("[name=cancel_target_m]").change(function(){
//		if ($(this).val()=="駐車場などの付帯設備のみを解約する") {
//			$("[name=cancel_target_s1]").prop("required",true);
//			$("[name=incidental_contract_exist]").prop("required",false);
//		} else {
//			$("[name=cancel_target_s1]").prop("required",false);
//			$("[name=incidental_contract_exist]").prop("required",true);
//		}
		$("[name=incidental_contract_exist]").change();
	});
	$("[name=incidental_contract_exist]").change(function(){
		switch ($(this).val()) {
			case "有り":
//				$("[name=cancel_parking1]").prop("required",true);
//				$("[name=cancel_parking1]").prop("disabled",false);
				break;
			default:
//				$("[name=cancel_parking1]").prop("required",false);
//				$("[name=cancel_parking1]").prop("disabled",true);
		}
	});
	
	var building_address_pref='';
	if (building_address_pref!='') {
		$("[name=building_address_pref]").val(building_address_pref);
	}
	$('.btn-search_addr').click(function () {
		let parent = $(this).closest('.inputblock');
		let zip = parent.find('[name$="_zip_1"], [name$="_zip_2"]').map(function (k, v) {
			$(v).val(ZenNum2HanNum($(v).val()));
			return $(v).val();
		}).get().join('-');
		let parent2 = $(this).closest('.columnbox').next();
		getAddressForZip(zip, parent2.find('[name$="_address_pref"]'), parent2.find('[name$="_address1"]'));
	});
	var cancel_target_l='';
	var cancel_target_m='';
	var incidental_contract_exist='';
	var cancel_target_s1='';
	var cancel_target_s2='';
	
	if (cancel_target_l!="") {
		$('input[name="cancel_target_l"]').val([cancel_target_l]);
		$('input[name="cancel_target_l"]:checked').change();
	}
	if (cancel_target_m!="") {
		$('input[name="cancel_target_m"]').val([cancel_target_m]);
		$('input[name="cancel_target_m"]:checked').change();
	}
	if (incidental_contract_exist!="") {
		$('input[name="incidental_contract_exist"]').val([incidental_contract_exist]);
		$('input[name="incidental_contract_exist"]:checked').change();
	}
	if (cancel_target_s1!="") {
		$('input[name="cancel_target_s1"]').val([cancel_target_s1]);
		$('input[name="cancel_target_s1"]:checked').change();
	}
	if (cancel_target_s2!="") {
		$('input[name="cancel_target_s2"]').val([cancel_target_s2]);
		$('input[name="cancel_target_s2"]:checked').change();
	}
	var cancel_parking1='';
	$('input[name="cancel_parking1"]').val(cancel_parking1);
	var cancel_parking2='';
	$('input[name="cancel_parking2"]').val(cancel_parking2);

	$("[type=submit]").on("click", function(){
		$(".errortext,.errorborder").remove();
	});
});
</script>
</body>

</html>