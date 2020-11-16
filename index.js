/*global $*/
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"]');
let localVoices = null;
var msg = new SpeechSynthesisUtterance();
let voices = [];
var slider1 = document.getElementById("rate");
var slider2 = document.getElementById("pitch");
slider1.value = localStorage.getItem('rate');
msg.rate = slider1.value;
slider2.value = localStorage.getItem('pitch');
msg.pitch = slider2.value;
//msg.voice = voices.find(voice => voice.name === voicesDropdown.value);
//voicesDropdown.value = localStorage.getItem('voice');
$(document).ready(function(){
  $("#speak").click(function(){
    msg.text = $("#toSpeech").val();
    window.speechSynthesis.speak(msg);
  });
  $("#clear").click(function(){
    $("#toSpeech").val("");
  });
});
function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang}) </option>`).join('');
  voicesDropdown.innerHTML = voiceOptions;
  localVoices = document.querySelectorAll('option');
  localVoices.forEach(localVoice => {
    if(localStorage.getItem('voice')===localVoice.value) {
      localVoice.setAttribute('selected',true);
      msg.voice = voices.find(voice => voice.name === localVoice.value);
    }
  });
}
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  localStorage.setItem('voice',this.value);
  //toggle();
}
function toggle() {
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}
function setOption() {
  msg[this.name] = this.value;
  localStorage.setItem(this.name,this.value);
}
speechSynthesis.addEventListener('voiceschanged',populateVoices);
voicesDropdown.addEventListener('change',setVoice);
options.forEach(option => option.addEventListener('change',setOption));