active_caso_estudio_link = ''
function footheadMaker(){
	httpGetAsync("https://geolocarti.net/0_home.html",
		setContentREQUEST,"home");

	httpGetAsync("https://geolocarti.net/0_footercontent.html",
		setContentREQUEST,"footercontent");

}

function mainpageMaker() {
	httpGetAsync("https://geolocarti.net/0_0.html",
		setContentREQUEST,"mytruebody");

	if (arguments[0] == true) {
		
		const mainpage_interval = setInterval(function () {

        if (
        	typeof document.getElementById("index_link") != null) { //It returns a list of affiliations ids
        	classChanger("caso_estudio_link", "index_link", "active", true);
        	clearInterval(mainpage_interval)

    	} else {
    		console.log('waiting')
    	}
        }, 20);

		
		try{
		window.history.pushState("object or string", "Title", "/");
		} 
		catch(err) {
		console.log('DESARROLLO LOCAL')
		}
	} else {
		classChanger("caso_estudio_link", "index_link", "active", true);
	}
}

function caso_estudio_link() {

	classChanger("index_link", "caso_estudio_link", "active", true);
	httpGetAsync("https://geolocarti.net/0_100_.html",
		setContentREQUEST,"mytruebody");

	try{
		window.history.pushState("object or string", "Title", "/caso_estudio/");
	} catch(err) {
		console.log('DESARROLLO LOCAL')
	}
};

function caso_estudio_(page, htmlFile) {

	classChanger(active_caso_estudio_link, `enlace_${page}`, "active_work_link", true);
	httpGetAsync(`https://geolocarti.net/${htmlFile}.html`,
		setContentREQUEST,"caso_estudio_content");
	try{
		window.history.pushState("object or string", "Title", `/caso_estudio/${page}/`);
	} 
	catch(err) {
		console.log('DESARROLLO LOCAL')
	}


};


function httpGetAsync(theUrl, callback, additional){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            if (typeof additional != 'undefined'){
                callback(xmlHttp.responseText, additional);
            } else {
                callback(xmlHttp.responseText);

            }
    }

    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);

}


function classChanger(actual_elem, future_elem, className, single) {

	if (single) {
		document.getElementById(actual_elem).classList.remove(className);
	} else {
		document.getElementById(actual_elem).className = "";	
	}
	document.getElementById(future_elem).classList.add(className);
	active_caso_estudio_link = future_elem
}

function setContentREQUEST(content, elementId) {
	console.log(content)

	document.getElementById(elementId).innerHTML = content



}

function setContent(elementId, contentId) {
	console.log(contentId)

	document.getElementById(elementId).innerHTML = contentDict[contentId]
	window.history.pushState("object or string", "Title", `/${contentId}`);

}