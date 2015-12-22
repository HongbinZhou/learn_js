// ref: https://www.safaribooksonline.com/library/view/beginning-nodejs/9781484201879/9781484201886_Ch02.xhtml
function outerF(arg){
    var varInOuterF = arg;
    function bar(){
	console.log(varInOuterF); // inner function has access to a variable fromt he outer scope
    }
    bar();
}
outerF("Hello closure!");
