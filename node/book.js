
// var bname = "";
// exports.setName = function(name){
//     bname = name;
//     console.log("name is: ", bname)
// }
// exports.getName = function (){
//     console.log("name is: ", bname)
//     return bname;
// }

module.exports = function(){
    var bname = "";
    return {
	setName: function(name){
	    bname = name;
	},
	getName: function(){
	    return bname;
	},
    }
}
