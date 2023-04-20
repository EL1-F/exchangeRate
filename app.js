//api key >> https://app.exchangerate-api.com/
const api_key ="";
const url ="https://v6.exchangerate-api.com/v6/"+ api_key;

//elements

const currencyOne = document.getElementById('currency_one');
const currencyTwo = document.getElementById('currency_two');
const listOne = document.getElementById('list_one');
const listTwo = document.getElementById('list_two');
const amount = document.getElementById('amount');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

//codes

fetch(url + "/codes")
    .then(res=> res.json())
    .then(data=>{
        const items = data.supported_codes;

        let options;
        for (let item of items) {
            options +=`
                <option value =${item[0]}>${item[1]}</option>
            `;
        }

        listOne.innerHTML = options;
        listTwo.innerHTML= options;
    });

calculate.addEventListener('click',()=>{
    const doviz1 = currencyOne.value;
    const doviz2 = currencyTwo.value;

    const miktar = amount.value;

    fetch(url+"/latest/"+doviz1)
        .then(res=>res.json())
        .then(data=>{
            hesaplanan = (data.conversion_rates[doviz2]*miktar).toFixed(2);

            result.innerHTML=`
            <div class="card border-dark">
                <div class="card-body text-center" style="font-size: 25px;font-weight: 600;">
                    ${miktar} ${doviz1} = ${hesaplanan} ${doviz2}
                </div>
            </div> 
            `;
        })
});


