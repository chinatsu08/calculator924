/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var previousSimbol="";    //入力した記号
    var nowNumber=0;   //記号が入力された後の数値
    var previous="";//ひとつ前に入力された値
    var show=0; //記号が入力される前の数値
//クリアボタンの処理
function Clear(){
    //すべて初期化して表示する
    nowNumber=0; 
    previous="";
    previousSimbol="";
    show=0;
    document.getElementById("past").innerHTML=nowNumber;
    document.getElementById("hukidasi").innerHTML="計算するよ。";
    document.getElementById("current").innerHTML=previousSimbol;
    $("img").attr("src","./dog1_smile.png");
}


//入力された値を処理
function myCalc(num){
    $("img").attr("src","./dog1_smile.png");
    //入力された値が、数値だった時true
    if(!isNaN(num)){
        
     
        //前に＝が入力されていたら初期化
        if(previousSimbol=="="){
                
                show=0;
                previousSimbol="";
        }
     
        //もし、一つ前に入力された値が数値だった時true
        if(!isNaN(previous)){
                   
                //入力した数値に０しかない時true
                if(nowNumber=="0"){
                    //nowNumberを上書きする
                    nowNumber=""+num;
                //０以外があった時true 
                }else{
                    //上書きせず追加する
                    nowNumber+=""+num;
                    
                }
                
            //ひとつ前に入力された値が記号だった時true
        }else{ 
                    //nowNumberを上書きする
                    nowNumber=""+num;


        }
            //入力した文字を画面に出力
            document.getElementById("past").innerHTML=nowNumber;
            
    //入力された値が記号だった時true
    }else {
            //一つ前に入力された値が数値だったらtrue
            if(!isNaN(previous)){
                //ピリオドを入力するとtrue
               if(previousSimbol==""){ 
                   //値を代入
                   show=nowNumber;
               //ピリオド以外が入力された時
               }else{
                //showに計算結果を代入
                show=eval(show+previousSimbol+nowNumber);}
                //初期化    
                nowNumber="0";
               
                //を画面に出力
                document.getElementById("past").innerHTML=show;
              
            }
                //入力された記号をpreviousSimbolに代入
                previousSimbol=num;
 
              
            //記号を画面に表示
            document.getElementById("current").innerHTML=previousSimbol;
            /*入力された値が記号で一つ前に入力された値が記号だったら、
             * previosSimbolに上書きする
             */
    }
    //入力された値をpreviousに代入
    previous=num; 
}      
   
//「.」の処理
function period(){
        
    /*記号が入力されるまでのすべての数値に「.」が含まれているか検索
     * 「.」があればtrue
     */
    
    if(nowNumber.indexOf(".")<0){
            //nowNumberに「.」を追加
            nowNumber+=".";
           // parseFlat(nowNumber);
           
            //画面に表示
            document.getElementById("past").innerHTML=nowNumber;
            document.getElementById("current").innerHTML=previousSimbol;
            
           
    }else{
        
    }
    
}

//「＝」の処理
function equal(){
        
    //=が前にも押されていたとき
    
    //入力されたひとつ前の値が「=」の時true
    if(previous=="="){
        //showに０を代入
        show=0;
        //一つ前の値に空白を上書きする
        previous="";
      
            
        
    //＝が前に押されていない時true
    }else{
        
        //showに計算結果
        show=eval(show+previousSimbol+nowNumber);
        
        //計算後はcurrentに何も表示しない
        previous="";
        
    }
    //＝が押されたら初期化
    nowNumber="0";
   
    //previousSimbol=previous;
    $("img").attr("src","./dog4_laugh.png");
     document.getElementById("past").innerHTML=show.toFixed(0);
     document.getElementById("hukidasi").innerHTML=(show.toFixed(0)+"だよ。");
     document.getElementById("current").innerHTML=previous;
     //初期化して次の計算へ
    show=0;
    previousSimbol="";
     
}

function percent(){
       
    nowNumber=nowNumber*0.01;
   
    document.getElementById("past").innerHTML=nowNumber;
}

//★
$(function(){
$('.nu').click(function(){
    $('.go').show();
});

});

function fortune(){
  document.getElementById("hukidasi").innerHTML=("今日の運勢を占うよ。<br>占うを押してね。");
  
    $('.go').on('click',function(){
        
    var i=Math.floor(Math.random()*5);
        switch(i){
        case 0:
            document.getElementById("hukidasi").innerHTML=("大吉だよ。<br>※戻るなら「C」を押してね。");
            $("img").attr("src","./dog4_laugh.png");
            break;
        case 1:
            document.getElementById("hukidasi").innerHTML=("中吉だよ。<br>※戻るなら「C」を押してね。");
            $("img").attr("src","./dog4_laugh.png");
            break;
        case 2:
            document.getElementById("hukidasi").innerHTML=("吉だよ。<br>※戻るなら「C」を押してね。");
            $("img").attr("src","./dog4_laugh.png");
            
            break;
        case 3:
            document.getElementById("hukidasi").innerHTML=("小吉だよ。<br>※戻るなら「C」を押してね。");
            $("img").attr("src","./dog3_cry.png");
            break;
        case 4:
            document.getElementById("hukidasi").innerHTML=("凶だよ。<br>※戻るなら「C」を押してね。");
            $("img").attr("src","./dog3_cry.png");
            break;
        }    
    });

    $('.numb').on('click',function(){
        document.getElementById("hukidasi").innerHTML=("計算するよ。");
        $("img").attr("src","./dog1_smile.png");
        $('.go').hide();
    });

}

    
  
    





