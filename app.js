function updateProductNumber( product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber   = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update  total
    const productTotal = document.getElementById( product + '-total');
    productTotal.innerText = productNumber * price;
    // calculatTotal
    calculatorTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product +  '-number');
    const productNumber = parseInt(productInput.value); 
    return productNumber;
}

function calculatorTotal(){
const phoneTotal = getInputValue('phone') * 1219;
const caseTotal = getInputValue('case')* 59;
const subTotal = phoneTotal + caseTotal;
const taxAmount = subTotal / 10;
const totalPrice = subTotal + taxAmount;
// update on the html
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-amount').innerText = taxAmount;
document.getElementById('total-price').innerText = totalPrice;
}

// phone case increase decrease event
document.getElementById('phone-pluse').addEventListener('click', function (){
    updateProductNumber('phone', 1219,true);
});
document.getElementById('phone-minus').addEventListener('click', function (){
    updateProductNumber('phone',1219,false)
})




// handle case increase decrease event
document.getElementById('case-pluse').addEventListener('click',function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function (){
    updateProductNumber('case', 59, false);
})
