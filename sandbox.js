let answer = document.getElementById('calculator');

function display(num){
    answer.value += num;
}

function clear1(){
    answer.value = "";
}

function del(){
    answer.value = answer.value.slice(0, -1);
}

function calc(){
    try {
        answer.value= eval(answer.value);
    }
    catch(err) {
        answer.value= '';
    }
}
