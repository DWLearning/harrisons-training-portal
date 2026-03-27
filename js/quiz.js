
const questions=[
["What three elements are required for fire?",["Heat Fuel Oxygen","Water Air Wood","Smoke Heat Air","Fuel Air Sand"],0],
["Colour of water extinguisher?",["Red","Blue","Black","Cream"],0],
["CO2 extinguisher used for?",["Electrical fires","Wood fires","Paper fires","Cloth fires"],0],
["First action if fire discovered?",["Raise alarm","Run away","Call friend","Ignore"],0],
["Fire safety law?",["Fire Safety Order 2005","Road Act","Health Act","None"],0],
["Blocked exits are?",["Fire hazard","Safe","Normal","Allowed"],0],
["Poor housekeeping causes?",["Fire risk","Cold","Water leak","Noise"],0],
["Foam extinguisher used for?",["Flammable liquids","Wood","Paper","Gas"],0],
["Powder extinguisher used for?",["Multiple fire types","Wood only","Oil only","Paper"],0],
["After alarm staff should?",["Evacuate building","Sit down","Ignore","Hide"],0],
["Assembly point is?",["Safe meeting area","Kitchen","Office","Bar"],0],
["Wet chemical extinguisher used for?",["Cooking oils","Wood","Plastic","Metal"],0],
["Staff should report?",["Fire hazards","Music","Lighting","Tables"],0],
["Goal of fire safety training?",["Prevent fires","Start fires","Ignore fires","Hide fires"],0]
]

function buildQuiz(){
let html=""
questions.forEach((q,i)=>{
html+=`<p>${i+1}. ${q[0]}</p>`
q[1].forEach((a,j)=>{
html+=`<input type="radio" name="q${i}" value="${j}">${a}<br>`
})
})
quiz.innerHTML=html
}

function submitQuiz(){
let score=0
questions.forEach((q,i)=>{
let r=document.querySelector('input[name="q'+i+'"]:checked')
if(r && parseInt(r.value)==q[2]) score++
})

let percent=(score/questions.length)*100

if(percent>=80){

let user=JSON.parse(localStorage.getItem("currentUser"))
let date=new Date().toLocaleDateString()

document.body.innerHTML=`
<div class="certificate">
<img src="images/Logo.jpeg" width="180"><br><br>
<h2>Certificate of Completion</h2>
<p>This certifies that</p>
<h3>${user.username}</h3>
<p>has successfully completed</p>
<h3>Fire Safety Awareness Training</h3>
<p>Date: ${date}</p>
<br>
<button onclick="window.print()">Print / Save Certificate</button>
<button onclick="window.location='index.html'">Return to Home</button>
</div>`
setTimeout(()=>window.print(),500);

}else{

result.innerText="Score "+percent+"% (80% required to pass)"

}

}
