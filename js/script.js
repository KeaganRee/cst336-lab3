//event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

shuffleQ1Choices();
let count = localStorage.getItem("formCount");
if(count == null){
    count = 0;
}
document.querySelector("#counter").textContent = count;


function shuffleQ1Choices(){
    let q1Choices = ["Fire", "Water", "Earth", "Air"];
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);

    for( let i of q1Choices){
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i

        labelElement.prepend(radioElement);

        document.querySelector("#q1ChoicesDiv").append(labelElement);

        console.log(labelElement);
    }
}

function gradeQuiz(){
    let score = 0;
    let answer1 = document.querySelector("input[name=q1]:checked").value;
    if(answer1 == "Fire"){
        document.querySelector("#image1C").style.display = "block";
        document.querySelector("#image1X").style.display = "none";
        score+=20;
    }
    else{
        document.querySelector("#image1X").style.display = "block";
        document.querySelector("#image1C").style.display = "none";
    }

    let answer2 = document.querySelector("#q2").value;

    if(answer2 == "Toph" || answer2 == "toph"){
        document.querySelector("#image2C").style.display = "block";
        document.querySelector("#image2X").style.display = "none";
        score+=20;
    }
    else{
        document.querySelector("#image2X").style.display = "block";
        document.querySelector("#image2C").style.display = "none";
    }

    let answer3 = document.querySelector("#q3").value;
    console.log(answer3)

    if(answer3 == "Sokka"){
        document.querySelector("#image3C").style.display = "block";
        document.querySelector("#image3X").style.display = "none";
        score+=20;
    }
    else{
        document.querySelector("#image3X").style.display = "block"
        document.querySelector("#image3C").style.display = "none"
    }

    let answer4 = document.querySelector("#q4").value;
    if(answer4 == 4){
        document.querySelector("#image4C").style.display = "block"
        document.querySelector("#image4X").style.display = "none"
        score+=20;
    }
    else{
        document.querySelector("#image4X").style.display = "block"
        document.querySelector("#image4C").style.display = "none"
    }

    //checkbox taken from youtuber: OpenJavaScript tutorial
    let check = document.querySelector(".checks");
    let q5Answers = [];
    let q5A = ["zuko", "iroh", "azula"];
    document.querySelectorAll('[type="checkbox"]').forEach(item =>{
        if(item.checked === true){
            q5Answers.push(item.value);
        }
    })
    if(JSON.stringify(q5Answers) === JSON.stringify(q5A)){
        document.querySelector("#image5C").style.display = "block"
        document.querySelector("#image5X").style.display = "none"
        score+=20;
    }
    else{
        document.querySelector("#image5X").style.display = "block"
        document.querySelector("#image5C").style.display = "none"
    }

    count++;
    localStorage.setItem("formCount",count);
    document.querySelector("#counter").textContent = count;





    if(score >= 16){
        document.querySelector("#congrats").textContent = "Congratulations! You scored " + score + "%!"
    }
    else{
        document.querySelector("#congrats").textContent = "Better luck next time! You scored " + score + "%!"
    }


}

