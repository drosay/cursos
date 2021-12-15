//FUNCIONES

//Promedio
function average(elements){
    const quantity_elements = elements.length;
    const reducer = function(accumulator = 0,actual_value){
        return Number(accumulator) + Number(actual_value);
    }
    const total_value = elements.reduce(reducer);
    const average = [];
    average[0] = (total_value/quantity_elements).toFixed(2);
    return average;
}

//Mediana
function median(elements){
    const compare = function(element1,element2){
        element1 = Number(element1);
        element2 = Number(element2);
        return element1 - element2;
    }
    const sort_elements = elements.sort(compare);
    let mid_element = elements.length-1;
    let median = [];
    if(mid_element%2===0){
        mid_element = mid_element/2;
        median[0] = (Number(sort_elements[mid_element])).toFixed(2);
    }
    else{
        mid_element = (mid_element-1)/2;
        const down_value = Number(sort_elements[mid_element]);
        const up_value = Number(sort_elements[mid_element+1]);
        median[0] = ((down_value+up_value)/2).toFixed(2);
    }
    return median;
}

//Moda
function mode(elements){
    const data = {
        temporal: 0
    };
    elements.forEach(element => {
        if(!data[`${element}`])data[`${element}`]=0;
        data[`${element}`]++;
    });
    let final_data = ['temporal'];
    for(let item in data){
        if(data[item]>data[final_data[0]]){
            final_data = [];
            final_data[0] = item;
        }else if(data[item] === data[final_data[0]]){
            final_data[final_data.length] = item;
        }
    }
    final_data = final_data.map(function(item,index){
        if(index === 0)return item;
        return ` - ${item}`;
    })
    return final_data;
}

const forms = document.getElementsByTagName("form");

for(let form in forms){
    forms[form].addEventListener("submit",function(e){
        e.preventDefault();
        const calculation_name = this.id;
        const values = document.getElementById(`${calculation_name}_values`).value.split(",");
        const result_box = document.getElementById(`${calculation_name}_result`);
        let result = 0;
        switch(calculation_name){
            case "average":
                result = average(values);
                result_box.innerText = "El promedio es >>";
                break;
            case "median":
                result = median(values);
                result_box.innerText = "La mediana es >>";
                break;
            case "mode":
                result = mode(values);
                result_box.innerText = "La moda es >>";
                break;
        }
        for(const item in result ){
            result_box.innerText+=result[item];
        }
        
    });
}