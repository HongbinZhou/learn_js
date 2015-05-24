// Exercise from http://eloquentjavascript.net/04_data.html

// sum of range
function sum(list){
    var result = 0.0;
    var cnt = 0;
    while (cnt < list.length){
	result += list[cnt++]
    }
    console.log("The sum of list [%s] is: %d", list, result)
    return result
}

function range(start, end, step){
    var list = [];
    step = (step == undefined) ? Math.sign(end-start) : step;

    value = start;
    while(Math.abs(value-end) >= Math.abs(step)){
	list.push(value);
	value += step;
    }
    list.push(end);

    console.log("Range from %d to %d with step %d is: %s", start, end, step, list)
    return list
}

var list = [1,2,3]
sum(list)
range(1, 10)
sum(range(1, 10))
range(5, 2, -1);
range(5, 2, -2);
range(5, 5, 10);


