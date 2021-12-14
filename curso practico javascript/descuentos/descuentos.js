const coupons = [
    {coupon:"Hornet", discount:30},
    {coupon:"kofee", discount:70},
    {coupon:"weekEND", discount:40},
    {coupon:"arrosScito", discount:15.2},
    {coupon:"noBebe", discount:100}
]


function validate_coupon(coupon){
    const real_coupon = coupons.find(function (item){
        return item.coupon === coupon;
    });
    if(real_coupon !== undefined){
        return real_coupon.discount;
    }
    alert("El cupon no existe!");
    return 0;
}

function discount_calculation(price,discount){
    const inverse_discount = 100-discount;
    const final_price = (price*(inverse_discount))/100;
    return final_price;
}


document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    const price = Number(document.getElementById("price").value);
    const coupon = document.getElementById("coupon").value;
    const result = document.getElementById("result");
    const coupon_price = validate_coupon(coupon);
    const final_price = discount_calculation(price,coupon_price);
    result.innerText = `El precio con descuento es de: ${final_price.toFixed(2)} COP`;
});

document.getElementById("trap").addEventListener("click",function(){
    let coupon_list = "Listado oficial de cupones\n";
    for(let index in coupons){
        index = Number(index);
        coupon_list+=
            `
            ${index+1} ${coupons[index].coupon}: ${coupons[index].discount}%
            `;
    }
    alert(coupon_list);
});