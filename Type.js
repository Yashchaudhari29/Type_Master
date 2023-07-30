let Timer = document.getElementById('Timer');
Timer.style.visibility = "hidden";
let seconds = 0;
let minutes = 0;
let Start_Time;
let End_Time;
let TextArea = document.getElementById('TextArea')
let array = ["As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text. There isn't much meaning to it, other than to get some simple practice. A lot of the texts that have been created are rather short, and don't give a good representation of actual typing speed and accuracy. They lack the length to gauge where your strengths and weaknesses are when typing."];
let Counter = 0;
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let Dynamic_Words = document.getElementById('Dynamic_Words');
let textarea = document.getElementById('textarea');
let random;
textarea.disabled = true;
btn.addEventListener('click', function () {
     if (btn.innerHTML == "START") {
          random = Math.floor(Math.random() * array.length);
          Dynamic_Words.innerText = array[random];
          seconds = 0;
          minutes = 0;
          btn.innerHTML = "DONE";
          textarea.disabled = false;
          Timer.classList.add("animate__backInDown");
          Timer.classList.remove("animate__backOutLeft");
          Timer.style.visibility = "visible";
          Start_Time = new Date();
     }
     else if (btn.innerHTML == "DONE") {
          btn.innerHTML = "START";
          textarea.disabled = true;
          Timer.classList.remove("animate__backInDown");
          setTimeout(() => {
               Timer.classList.add("animate__backOutLeft");
          }, 1000);
          Timer.style.visibility = "visible";
          End_Time = new Date();
          let Total_Time = Math.round(((End_Time - Start_Time) / 1000));
          let Total_Words = textarea.value.split(" ").length;
          let Speed = Math.round(((Total_Words / Total_Time)) * 60);
          console.log("Total_Words " + Total_Words);
          console.log("Total_Time " + Total_Time);
          // console.log("Speed " + Speed);
          Dynamic_Words.innerHTML = `Your Typing Speed Is ${Speed} Words per Minute, and ` + Correction(textarea.value, array[random]);
          textarea.value = "";
     }
});
function Correction(string1, string2) {
     let words1 = string1.split(" ");
     let words2 = string2.split(" ");
     let Count = 0;
     let Index = 0;
     words1.forEach(function (elements, Index) {
          if (elements == words2[Index]) {
               Count++;
               Index++;
          }
     });
     let Error = words2.length - Count;
     return `You Typed ${words1.length} Words Out Of ${words2.length} And The Total Number Of Errors Are ${Error}`;
};
btn2.addEventListener('click', function () {
     location.reload();

});
let Watch = document.getElementById('Watch');
Maximum = () => {

     Watch.innerHTML = `${minutes} Minutes : ${seconds} second`;
     seconds++;
     if (seconds == 60) {
          minutes++;
          seconds = 0;
     }
};
setInterval(Maximum, 1000);
