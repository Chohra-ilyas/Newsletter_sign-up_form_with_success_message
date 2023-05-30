const success = document.getElementById('subbmet');
const dimiss = document.getElementById('dimiss');
let home = document.getElementById('homepage');
let next = document.getElementById('nextpage');
let email = document.getElementById('gmail');
let newemail = document.getElementById('youremail');
let feild = document.getElementById('feild');
success.addEventListener('click',function(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    feild.style.display='block';
    email.style.background='rgba(252, 103, 103, 0.336)';
    }
    else{
        home.style.display='none';
        next.style.display='flex';
        newemail.textContent = email.value;
    }
});
dimiss.addEventListener('click',function(){
    home.style.display='flex';
    next.style.display='none';
    feild.style.display='none';
});