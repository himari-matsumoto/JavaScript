
//Q1 変数
let name = '松本妃茉梨';
let age = '23'
let greet = '私のニックネームは' + name + 'です。' + '年齢は' + age + '歳です。';
console.log(greet);

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templatetext = `私の好きな言語は ${languages[0]} です。次は${languages[3]} を勉強してみたいです。`;
console.log(templatetext);  

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


//Q4 配列×オブジェクト
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
let average = index / 3;

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

user.sayHello = 'Hello!';

console.log(user.birthday);
console.log(user.sayHello);


//Q8 引数
function add (x , y){
  console.log(x + y);
}
add(3,4)

function subtract (x , y){
  console.log(x - y);
}
subtract(12,2)

function multiply (x , y){
  console.log(x * y);
}
multiply(7,7)

function divide (x , y){
  console.log(x / y);
}
divide(10,2)

//Q9 返り値
function remainder (x , y){ //returnでnumが返っているので2が入っている状態

  let num = (x % y);//%で余りを出す。
  return num;
}
let x = 5;//letで定義すれば、xとyの値を変えたいとき楽
let y = 3;
console.log(x + 'を' + y + 'で割った余りは' + remainder (x , y) + 'です。');

//Q10 スコープ
function foo() {
  let x = 1;
}
console.log(x);

//上記でエラーが出る理由
//function関数内で定義したものは関数内でのみ参照でき、スコープが有効である為、｛｝の外でも定義する必要がある。スコープ＝関数の有効範囲

