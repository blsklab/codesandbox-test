/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能

// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数をさいう宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// // const変数は再宣言できない
// const val3 = "const変数を再宣言";

// constで定義したオブジェクト(連想配列)はプロパティの変更が可能
// const val4 = {
//   name: "青",
//   age: 28
// };
// val4.name = "あか";
// val4.adress = "Tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 27;

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。名前は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// // 従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

// アロー関する
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

// アロー関するは引数が一つでも動くが、基本的にカッコが必要
// 単一出力の場合はreturnを省略できる。基本は省略しない。
const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
