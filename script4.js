document.getElementById('btn1').addEventListener('click',()=>{
  document.getElementById('btn1').classList.add('active');
  document.getElementById('btn2').classList.remove('active');
  document.getElementById('btn3').classList.remove('active');
  document.getElementById('img').src = '1.jpg';
});
document.getElementById('btn2').addEventListener('click',()=>{
  document.getElementById('btn1').classList.remove('active');
  document.getElementById('btn2').classList.add('active');
  document.getElementById('btn3').classList.remove('active');
  document.getElementById('img').src = '2.jpg';

});
document.getElementById('btn3').addEventListener('click',()=>{
  document.getElementById('btn1').classList.remove('active');
  document.getElementById('btn2').classList.remove('active');
  document.getElementById('btn3').classList.add('active');
  document.getElementById('img').src = '3.jpg';

});


document.getElementById('dec').addEventListener('click',()=>{
  document.getElementById('qty').value = parseInt(document.getElementById('qty').value) - 1;
})
document.getElementById('inc').addEventListener('click',()=>{
  document.getElementById('qty').value = parseInt(document.getElementById('qty').value) + 1;
})


var countDown = new Date('Jan 25, 2026 00:00:00').getTime();
var x = setInterval(()=>{
  var now = new Date().getTime();
  var distance = countDown - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('days').innerHTML = days + ':';
  document.getElementById('hrs').innerHTML = hrs + ':';
  document.getElementById('mins').innerHTML = mins + ':';
  document.getElementById('secs').innerHTML = secs;

},1000)

