//Q1 変数
let name = '松本妃茉梨';

let age = 23;
let greet = '私のニックネームは' + name + 'です。' + '年齢は' + age + '歳です。';
console.log(greet);

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templatetext = `私の好きな言語は ${languages[0]} です。次は${languages[3]} を勉強してみたいです。`;
console.log(templatetext);  
//配列番号＝index番号

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);
//キーとバリュー合わせてプロパティ


//Q4 配列×オブジェクト 関連するデータや機能（メソッド）をまとめて格納
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5四則計算
let index = [playerList[0].age + playerList[1].age + playerList[2].age];
let average = index / playerList.length;


console.log(average);

//Q6 関数
function sayHello(){
  
  let hello = 'Hello';
  
  console.log(hello);
}
sayHello();

let sayWorld = function(){
  let world = 'World';

  console.log(world);
}
sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';

user.sayHello = function(){ //宿題　メソッド　オブジェクトの中にある関数
  console.log('Hello!'); 
};

console.log(user.birthday);
user.sayHello(); //.はオブジェクトから中身を呼び出す時に使う

//Q8 引数 テキストでプッシュ

let calc = {};

calc.add = function(x,y){
  console.log(x + y);
}
calc.add(3,4);


calc.subtract = function(x,y){
  console.log(x - y);
}
calc.subtract(12,2)


calc.multiply = function(x,y){
   console.log(x * y);
}
calc.multiply(7,7)


calc.divide = function(x,y){
  console.log(x / y);
}
calc.divide(10,2)

//Q9 返り値
function remainder(num1 , num2){ //returnでnumが返っているので2が入っている状態

  let num = (num1 % num2);//%で余りを出す。
  return num;
}

let x = 5;//letで定義すれば、xとyの値を変えたいとき楽
let y = 3;
console.log(x + 'を' + y + 'で割った余りは' + remainder(x , y) + 'です。');

//Q10 スコープ
function foo() {
  let x = 1;
}
console.log(x);

//上記でエラーが出る理由
//function関数内で定義したものは関数内でのみ参照でき、スコープが有効である為、｛｝の外でも定義する必要がある。スコープ＝変数の有効範囲


//Q1 標準組み込みオブジェクト
let randomNumber = Math.floor(Math.random() * 10);
//Mathオブジェクトは数値を操作する時に便利
console.log(randomNumber);



//Q2 コールバック関数
setTimeout(function() {　 //指定した時間（ミリ秒単位）後に関数を一度だけ実行するためのメソッド 無名関数で3秒後に実行したい処理を入れる
  console.log("Hello World！");
}, 3000);

//callback関数は引数に渡される関数

function funcA(){
  return 'ABC'

}
function funcB(func){
  // 何か処理
  // 何か処理
  // 何か処理
  console.log(func());
}
//funcB(funcA());// コールバック関数ではない　後で実行したいから
funcB(funcA);//コールバック関数

//Q3 if
let num = 5;
if (num >= 0) {
  console.log('num is greater than 0');
}else if (num <= 0) {
  console.log('num is less than 0')
}else if (num === 0){
  console.log('num is 0')
}
//else if条件を追加

//Q4 for
let numbers = [];
// i++
// i = i + 1

// for (初期値; for文を続ける条件; 後処理) {
//   // 繰り返したい処理
// }

for (let i = 0; i < 100; i++) {
    numbers.push(i);
}
console.log(numbers);//配列の内容を格納

//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {  //(初期値、条件式、後処理)の順
  //iは変数で、i++は配列の長さ（数）だけ処理が繰り返される。
    let element = mixed[i];

    if (typeof element === 'number') {  //要素が number 型（数値）かどうかをチェック ===は厳密に等しい　　typeofは値のデータ型を返す演算子。elementー要素
        if (element % 2 === 0) {
            console.log('even');// 数字で偶数の場合
        } else {
          
            console.log('odd'); // 数字で奇数の場合
        }
    } else {
        
        console.log('not number');// 数字以外の場合
    }
}
//forは繰り返し処理　　else ifを使うことで条件を追加
