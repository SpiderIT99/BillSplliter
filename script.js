const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const count = document.querySelector('#count'); 
const error = document.querySelector('#error');
const costInfo = document.querySelector('#cost-info');
const cost = document.querySelector('#cost');


const showBill = () => {
    
    if(price.value == "" | people.value == "" | tip.value == "0"){

        error.textContent = "uzupełnij wszystkie pola!";

        seeError();
    }
   
    else{
        if(costBill()>0){
            cost.textContent = costBill();
            seeFinalText();
        }
        else
        {
            error.textContent = "nie oszukuj :)";
            seeError();
        }
    }
}

const seeError = () => {
    error.style.display = 'block';
    costInfo.style.display = 'none';
}
const seeFinalText = () => {
    error.style.display = 'none';
    costInfo.style.display = 'block';
}
const costBill = () => {
    const nwePrice = parseFloat(price.value); 
    const nwePeople = parseFloat(people.value); 
    const newTip = parseFloat(tip.value); 
    return (((nwePrice + (nwePrice*newTip)) / nwePeople).toFixed(2));
}

count.addEventListener('click', showBill);
