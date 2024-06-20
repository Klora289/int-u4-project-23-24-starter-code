// JavaScript goes here.
//page 1//
let mainPage = document.querySelector(".title");
//page 2: question 1//
let questionOne = document.querySelector(".questionOne"); //Q1//
let networkButton = document.querySelector(".network");//network//
let q1Response = document.querySelector(".hiddenValue1").value
let physicalButton= document.querySelector(".physical"); //physical//
let oneToTwo = document.querySelector(".oneToTwo");//1->2 screen//
//page 3: question 2//
let questionTwo = document.querySelector(".questionTwo"); //Q2//
let teamButton = document.querySelector(".team");//teamwork//
let q2Response = document.querySelector(".hiddenValue3").value
let loneButton= document.querySelector(".lone"); //alone//
let twoToThree = document.querySelector(".twoToThree");//2->3 screen//
//page 4: question 3//
let questionThree = document.querySelector(".questionThree"); //Q3//
let mileYesButton = document.querySelector(".mileYes");//can run mile//
let q3Response = document.querySelector(".hiddenValue5").value;
let mileNoButton= document.querySelector(".physical"); //can't run mile//
let threeToFour = document.querySelector(".threeToFour");//3 -> 4 screen//
//page 5: question 4//
let questionFour = document.querySelector(".questionFour"); //Q4//
let heightFeetButton = document.querySelector(".heightFeet");//height feet//
let heightInchButton= document.querySelector(".heightInch"); //height inch//
let finalButton = document.querySelector(".finalButton");//final result//
//page 6: final page//
let resultScreen = document.querySelector(".resultScreen");
let result = document.querySelector(".result");



networkButton.addEventListener("click",function(){
    q1Response = document.querySelector(".hiddenValue1").value;
    return value;
});


physicalButton.addEventListener("click",function(){
    q1Response = document.querySelector(".hiddenValue2").value;
    return value;
});

oneToTwo.addEventListener("click",function(){
    mainPage.style.display = "none";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});

teamButton.addEventListener("click",function(){
    q2Response = document.querySelector(".hiddenValue3").value;
    return value;
});

physicalButton.addEventListener("click",function(){
    q2Response = document.querySelector(".hiddenValue4").value;
    return value;
});

twoToThree.addEventListener("click",function(){
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
});

mileYesButton.addEventListener("click",function(){
    q3Response = document.querySelector(".hiddenValue5").value;
    return value;
});

mileNoButton.addEventListener("click",function(){
    q3Response = document.querySelector(".hiddenValue6").value;
    return value;
});

threeToFour.addEventListener("click",function(){
    questionThree.style.display = "none";
    questionFour.style.display = "block";
});

heightFeetButton.addEventListener("click",function(){
    q4AResponse = document.querySelector(".heightFeet").value;
    return value;
});

heightInchButton.addEventListener("click",function(){
    q4BResponse = document.querySelector(".heightInch").value;
    return value;
});

finalButton.addEventListener("click",function(){
    questionFour.style.display = "none";
    resultScreen.style.display = "block";
});


if (q1Response === "network" && q2Response === "team"){
    document.querySelector(".result").innerHTML = "You should learn how to play Tennis";
}else if (q1Response === "network" && q2Response === "lone"){
    document.querySelector(".result").innerHTML = "You should learn how to play gold or billiards";
}else if (q2Response === "team" && q3Response === "mileYes" && q4AResponse === "6"){
    document.querySelector(".result").innerHTML = "You should learn how to play basketball";
}else if (q2Response === "team" && q3Response === "mileYes" ){
    document.querySelector(".result").innerHTML = "You should learn how to play football or soccer";
}else{
    document.querySelector(".result").innerHTML = "Maybe pick up an ESport!";
}
