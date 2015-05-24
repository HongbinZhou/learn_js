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

// reverse
function reverse_pure(list){
    // copy the list first
    var new_list = [];
    for (i=0; i<list.length; i++){
	new_list.push(list[i]);
    }

    // then reverse it by modifing it.
    return reverse_sideeffect(new_list);
}

function reverse_sideeffect(list){
    for (i = 0, j = list.length-1; i<j; i++, j--){
	var tmp = list[i];
	// console.log("i=%d, j=%d, tmp=%d", i, j, tmp)
	list[i] = list[j];
	list[j] = tmp;
    }
    return list;
}

function test(list){
    console.log("before reverse_sideeffect, list is: ", list)
    reverse_sideeffect(list)
    console.log("after reverse_sideeffect, list is: ", list)

    console.log("before reverse_pure, list is: ", list)
    var new_list = reverse_pure(list)
    console.log("after reverse_pure, list is: ", list)
    console.log("after reverse_pure, new list is: ", new_list)

    console.log("test done!")

}
console.log("--------------------------------------------------")
console.log(">>> test1...")
list = [1,2,3]
test(list)
console.log(">>> test2...")
list = [1,2,3,4]
test(list)
