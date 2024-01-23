// Fact Generator
var factList = [
  "Over 2.7 billion women don’t have the same work opportunities as men, with laws restricting the types of jobs they can do (Source: World Bank 2018).",
  "Nearly 82 million women around the world don’t have any legal protection against discrimination in the workplace (Source: World Policy Analysis Centre, 2017).",
  "In 2018, the estimated global gender pay gap was 22%, with women earning around 78% of what men are paid (Source: ILO, 2018)."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}


//quiz functionality
var secretContainer = $('.secretContainer');
$(document).ready(function() {

  // event listener
  $("input[type='button']").click(chooseBarbie)

  function chooseBarbie() {
    secretContainer.empty()

    var questionOneValue = $("input[name='q1']:checked").val()
    var questionTwoValue = $("input[name='q2']:checked").val()
    var questionThreeValue = $("input[name='q3']:checked").val()
    var questionFourValue = $("input[name='q4']:checked").val()


    var result;

    if(questionOneValue === "english" && (questionTwoValue === "womensRights" || questionTwoValue === "education") && questionThreeValue === "nobelPrize" && (questionFourValue === "creative" || questionFourValue === "curious")) {
      result = "Writer Barbie"
    }
    else if ((questionOneValue === "science" || questionOneValue === "math") && (questionTwoValue === "climateChange" || questionTwoValue === "newTech") && (questionThreeValue === "coding" || questionThreeValue === "cure") && (questionFourValue === "analytical" || questionFourValue === "creative")) {
      result = "Physicist Barbie"
    }
    else if (questionOneValue === "history" && questionTwoValue === "womensRights" && questionThreeValue === "president" && (questionFourValue === "analytical" || questionFourValue === "curious" || questionFourValue === "chill")) {
  result = "President Barbie"
}
    else if (questionOneValue === "science" && (questionTwoValue === "climateChange" || questionTwoValue === "newTech") && questionThreeValue === "cure" && questionFourValue === "analytical") {
  result = "Doctor Barbie"
}
else {
  result = "Stereotypical Barbie"
}

var description;
if (result === "Stereotypical Barbie") {
  description = "You are your own Barbie! You may or may not have an existential crisis but I know you can figure things out at your own pace! The world is your oyster and I hope you find something that makes you happy! <3"
}
else if (result === "Writer Barbie") {
  description = "Okay Writer! The creativity flows within you and hopefully, you can publish your first piece of text into the world! I wonder what could happen!"
}
else if (result === "Physicist Barbie") {
  description = "STEM girlies rise up! Determined since you have gotten your first cellphone, you love to enjoy the techie side of the future. You most defintetly love to code in your free time or interested in learning a lot more than what is known!"
}
else if (result === "President Barbie") {
  description = "PRESIDENT OF THE WORLD! You are passionate about social and global issues! You demand changes to be in action for a better future! Beyonce and Ariana Grande would be very proud of you right now! Now, go take action! Love ya<3"
}
else {
  description = "Save me, my heart cant take it! You love saving lives or making your friends laugh because laughter is the best medicine! Studying medicine will take lots of determination and love, take sometime to enjoy life while it lasts!"
}



secretContainer.append(`<h2>You are ${result}!</h2>`)
secretContainer.append(`<h3>${description}</h3>`)
secretContainer.append(`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0BaIaHcyBXuOWeM4Aas4EW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`)
  }
  
})

