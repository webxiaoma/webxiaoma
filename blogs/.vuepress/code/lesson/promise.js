async function async1() {
  console.log('async1 start'); // 3  2
  await async2();
  console.log('async1 end'); // 5  6
}

async function async2() {
  console.log('async2'); // 4  3
}

console.log('script start');  // 1   1            


setTimeout(function() {
  console.log('setTimeout'); // 8   8
}, 0)


async1();


new Promise(function(resolve) {
  console.log('promise1'); // 6   4
  resolve();
}).then(function() {
  console.log('promise2'); // 7   7
});


console.log('script end'); // 2    5
