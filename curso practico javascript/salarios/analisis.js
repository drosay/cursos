const salaried_colombians_sorted = salaried_colombians.sort(comparer);
const top_salaried_colombians = topSalariedPeople(salaried_colombians_sorted,30);
//FUNCIONES

//Comparador
function comparer (valueA,valueB){
    return valueA.salary - valueB.salary;
}

//Filtro del top de asalariados
function topSalariedPeople(salaried_people_sorted, percent = 20){
    const top_salaried_quantity = Math.round((salaried_people_sorted.length*percent)/100);
    const top_salaried_people_reversed = salaried_people_sorted.map(
        function(item){
            return item;
        }
        ).reverse();
    const top_salaried_people = top_salaried_people_reversed.slice(0,top_salaried_quantity);
    return top_salaried_people;
}


//Promedio
function average(elements){
    const quantity_elements = elements.length;
    const total_value = elements.reduce(reducer);
    const average = [];
    function reducer (accumulator = 0,actual_value){
        if(typeof accumulator != "number")accumulator = accumulator.salary;
        return accumulator + actual_value.salary;
    }
    average[0] = (total_value/quantity_elements).toFixed(2);
    return average;
}

//Mediana
function median(elements){
    let mid_element = elements.length-1;
    let median = [];
    if(mid_element%2===0){
        mid_element = mid_element/2;
        median[0] = elements[mid_element].salary.toFixed(2);
    }
    else{
        mid_element = (mid_element-1)/2;
        const down_value = elements[mid_element].salary;
        const up_value = elements[mid_element+1].salary;
        median[0] = ((down_value+up_value)/2).toFixed(2);
    }
    return median;
}

document.getElementById("ouput").innerText+=`

    Promedio de salarios colombianos: ${average(salaried_colombians_sorted)}
    Mediana de salarios colombianos: ${median(salaried_colombians_sorted)}

    Promedio de top 30% salarios colombianos: ${average(top_salaried_colombians)}
    Mediana de top 30% salarios colombianos: ${median(top_salaried_colombians)}
    `;