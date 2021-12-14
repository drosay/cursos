function discount_calculation(price,discount){
    const inverse_discount = 100-discount;
    const final_price = (price*(inverse_discount))/100;
    return final_price;
}


document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    const price = Number(document.getElementById("price").value);
    const discount = Number(document.getElementById("discount").value);
    const result = document.getElementById("result");
    const final_price = discount_calculation(price,discount);
    result.value = final_price;
})