const eForm = document.getElementById('formReg');
const eCity = document.getElementById('city');
const eDescription = document.getElementById('description');
const eOutput = document.getElementById('output');

function sendYourOpinion(event){
    // Taking input from the form
    const cityName = eCity.value;
    const description = eDescription.value;

    console.log("Textfiled works " + cityName + description);

    eOutput.textContent = "Thanks for sharing your opinion!";

    // Submittar inte formuläret
    event.preventDefault(); //
}

eForm.addEventListener('submit', sendYourOpinion);



