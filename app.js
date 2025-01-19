var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 10,
  });

$(".btn-hold_1").click(function(){
    $(".option_text_1").toggle('show_text')
})
$(".btn-hold_2").click(function(){
    $(".option_text_2").toggle('show_text')
})
$(".btn-hold_3").click(function(){
    $(".option_text_3").toggle('show_text')
})
$(".btn-hold_4").click(function(){
    $(".option_text_4").toggle('show_text')
})
$(".btn-hold_5").click(function(){
    $(".option_text_5").toggle('show_text')
})
$(".btn-hold_6").click(function(){
    $(".option_text_6").toggle('show_text')
})


var button= document.getElementById('btn_scroll_1'),
defaultButtonTxt = button.textContent;

button.onclick = function() {
  this.textContent = (this.classList.toggle('btn-alt-color')) ? this.dataset.textSwap : defaultButtonTxt;
}
var button= document.getElementById('btn_scroll_2'),
defaultButtonTxt = button.textContent;

button.onclick = function() {
  this.textContent = (this.classList.toggle('btn-alt-color')) ? this.dataset.textSwap : defaultButtonTxt;
}

var button =document.getElementById('btn_scroll_3'),
defaultButtonTxt = button.textContent;

button.onclick = function(){
    this.textContent = (this.classList.toggle('btn-alt-color')) ? this.dataset.textSwap : defaultButtonTxt;
}
var button =document.getElementById('btn_scroll_4'),
defaultButtonTxt = button.textContent;

button.onclick = function(){
    this.textContent = (this.classList.toggle('btn-alt-color')) ? this.dataset.textSwap : defaultButtonTxt;
}
var button =document.getElementById('btn_scroll_5'),
defaultButtonTxt = button.textContent;

button.onclick = function(){
    this.textContent = (this.classList.toggle('btn-alt-color')) ? this.dataset.textSwap : defaultButtonTxt;
}
var button =document.getElementById('btn_scroll_6'),
defaultButtonTxt = button.textContent;

button.onclick = function(){
    this.textContent = (this.classList.toggle('btn-alt-color')) ? this.dataset.textSwap : defaultButtonTxt;
}