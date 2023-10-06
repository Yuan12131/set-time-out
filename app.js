// setTimeout(function(){
//   console.log('첫번째 소사');
// }, 3000);

// setTimeout(function(){
//   console.log('두번째 뭉기');
// }, 2000);

// setTimeout(function(){
//   console.log('세번째 밍구');
// }, 1000);
// settimeout은 스크립트 순서를 무시 : 밍구-> 뭉기-> 소사 순으로 출력 (순서대로 : 동기)


// setTimeout(function(){
//   console.log('첫번째 소사');

//   setTimeout(function(){
//   console.log('두번째 뭉기');

//       setTimeout(function(){
//       console.log('세번째 밍구');
//     }, 1000);

//   }, 2000);

// }, 3000);
// callback으로 settimeout 사용해서 순서 변경 : 소사 -> 뭉기 -> 밍구 (시간 단위로 : 비동기)

// const sosa = setTimeout(function(){
//   sosa();
// }, 1000)
// sosa();

// function sosa() {
//   setTimeout(function() {
//     sosa();
//   }, 1000);
// };
// sosa();

setInterval(function(){}, 1000);
setInterval(function(){
  console.log("소사 이따 향마루 ㄱ?")
}, 1000);
