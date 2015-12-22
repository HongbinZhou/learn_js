function longRunOperation(cb) {
    // simulate a 3 second operation
    setTimeout(cb, 3000);
}

function webRequest(request){
    console.log("starting a long operation for request: ", request.id);
    longRunOperation(function () {
	console.log("end a long operation for request: ", request.id);
    })
}

// one request
webRequest({id: 1});

// another request
webRequest({id: 2});
