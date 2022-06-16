let form = document.querySelector('.form');
let input = document.querySelector('.form input');
let card = document.querySelector('.card')
let Name = document.querySelector('.name p');

//Number's card
let shabaNumber = document.querySelector('.number-shaba');
let CardNum = document.querySelector('.number');
let Cvv2 = document.querySelector('#cvv2 span');
let Branch = document.querySelector('#code span');
let date = document.querySelector('#date span');
let Err = document.querySelector('.error')


let arry = [
    {
        NaMe : "راضیه شط زاده" ,
        CardNumBer : '1244 5562 2744 6037' ,
        ShabaNumBer : 'IR 0121 2000 0000 0005 2102 3215' ,
        CVV2 : '4745' ,
        DATe : '1405/07' ,
        ShoBe : '5021'
    } 
    ,
    {
        NaMe : "محمدرضا مرادی" ,
        CardNumBer : '8244 6572 9704 6037' ,
        ShabaNumBer : 'IR 0221 8000 0000 0001 8142 0845' ,
        CVV2 : '8245' ,
        DATe : '1405/07' ,
        ShoBe : '5021'
    }
    ,
    {
        NaMe : "پارسا افخمی" ,
        CardNumBer : '9214 1052 9707 6037' ,
        ShabaNumBer : 'IR 0331 8000 0000 0007 0232 0845' ,
        CVV2 : '0215' ,
        DATe : '1405/07' ,
        ShoBe : '5021'
    }
    ,
    {
        NaMe : "مرضیه شط زاده" ,
        CardNumBer : '0824 2052 8807 6037' ,
        ShabaNumBer : 'IR 0220 0000 0000 0007 7212 8845' ,
        CVV2 : '0012' ,
        DATe : '1405/07' ,
        ShoBe : '5021'
    }
    ,
    {
        NaMe : "سهام شط زاده" ,
        CardNumBer : '1478 3225 4715 6037' ,
        ShabaNumBer : 'IR 0411 7000 0000 0001 4111 2332' ,
        CVV2 : '8778' ,
        DATe : '1405/07' ,
        ShoBe : '5021'
    }
    ,
    {
        NaMe : "نسیم شط زاده" ,
        CardNumBer : '7998 1852 4114 6037' ,
        ShabaNumBer : 'IR 0102 4000 0000 0004 0741 4171' ,
        CVV2 : '1021' ,
        DATe : '1405/07' ,
        ShoBe : '5021'
    }
];

let [razie , mohamdreza , parsa , marzie , saham , nasim] = arry;

function Cheack () {
    if(input.value !== razie.NaMe || mohamdreza.NaMe || parsa.NaMe || marzie.NaMe || saham.NaMe || nasim.NaMe){
        Err.innerHTML = 'نام نا معتبر میباشد';
    }
   
    if(input.value === razie.NaMe) {
        card.style.marginRight = '17px'
        Err.style.display = 'none'
        shabaNumber.innerHTML = razie.ShabaNumBer;
        Cvv2.innerHTML = razie.CVV2;
        Branch.innerHTML = razie.ShoBe;
        date.innerHTML = razie.DATe;
        CardNum.innerHTML = razie.CardNumBer;
        Name.innerHTML = razie.NaMe;  
    }
    if(input.value === mohamdreza.NaMe) {
        card.style.marginRight = '17px'
        Err.style.display = 'none'
        shabaNumber.innerHTML = mohamdreza.ShabaNumBer;
        Cvv2.innerHTML = mohamdreza.CVV2;
        Branch.innerHTML = mohamdreza.ShoBe;
        date.innerHTML = mohamdreza.DATe;
        CardNum.innerHTML = mohamdreza.CardNumBer;
        Name.innerHTML = mohamdreza.NaMe;
    } 
    if(input.value === parsa.NaMe) {
        card.style.marginRight = '17px'
        Err.style.display = 'none'
        shabaNumber.innerHTML = parsa.ShabaNumBer;
        Cvv2.innerHTML = parsa.CVV2;
        Branch.innerHTML = parsa.ShoBe;
        date.innerHTML = parsa.DATe;
        CardNum.innerHTML = parsa.CardNumBer;
        Name.innerHTML = parsa.NaMe;
    }
    if(input.value === parsa.NaMe) {
        card.style.marginRight = '17px'
        Err.style.display = 'none'
        shabaNumber.innerHTML = parsa.ShabaNumBer;
        Cvv2.innerHTML = parsa.CVV2;
        Branch.innerHTML = parsa.ShoBe;
        date.innerHTML = parsa.DATe;
        CardNum.innerHTML = parsa.CardNumBer;
        Name.innerHTML = parsa.NaMe;
    }
    if(input.value === marzie.NaMe) {
        card.style.marginRight = '17px'
        Err.style.display = 'none'
        shabaNumber.innerHTML = marzie.ShabaNumBer;
        Cvv2.innerHTML = marzie.CVV2;
        Branch.innerHTML = marzie.ShoBe;
        date.innerHTML = marzie.DATe;
        CardNum.innerHTML = marzie.CardNumBer;
        Name.innerHTML = marzie.NaMe;
    }
    if(input.value === saham.NaMe) {
        card.style.marginRight = '17px'
        Err.style.display = 'none'
        shabaNumber.innerHTML = saham.ShabaNumBer;
        Cvv2.innerHTML = saham.CVV2;
        Branch.innerHTML = saham.ShoBe;
        date.innerHTML = saham.DATe;
        CardNum.innerHTML = saham.CardNumBer;
        Name.innerHTML = saham.NaMe;
    }
    if(input.value === nasim.NaMe) {
        card.style.marginRight = '17px'
        Err.style.display = 'none'
        shabaNumber.innerHTML = nasim.ShabaNumBer;
        Cvv2.innerHTML = nasim.CVV2;
        Branch.innerHTML = nasim.ShoBe;
        date.innerHTML = nasim.DATe;
        CardNum.innerHTML = nasim.CardNumBer;
        Name.innerHTML = nasim.NaMe;
    }
    
}      


form.addEventListener('submit' , e => {
    e.preventDefault();
    Cheack();
    input.value = "";
    
});

setTimeout(() => {
    input.addEventListener('click' , e => {
        e.preventDefault();
        window.location.reload();
    });
}, 5000);





