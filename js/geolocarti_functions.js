function mainpageMaker() {
	httpGetAsync("https://ramosvacca.github.io/GeolocartiVIS/pages/0_0.txt",
		setContentREQUEST,"mytruebody");

	if (arguments[0] == true) {
		classChanger("caso_estudio_link", "index_link", "active", true);
		try{
		window.history.pushState("object or string", "Title", "/GeolocartiVIS/index.html");
		} 
		catch(err) {
		console.log('DESARROLLO LOCAL')
		}
	}
}

function caso_estudio_link() {

	classChanger("index_link", "caso_estudio_link", "active", true);
	httpGetAsync("https://ramosvacca.github.io/GeolocartiVIS/pages/0_100_.txt",
		setContentREQUEST,"mytruebody");
	try{
		window.history.pushState("object or string", "Title", "/GeolocartiVIS/caso_estudio.html");
	} catch(err) {
		console.log('DESARROLLO LOCAL')
	}
};

function caso_estudio_100() {

	classChanger("enlace_presentacion", "enlace_presentacion", "active_work_link", true);
	httpGetAsync("https://ramosvacca.github.io/GeolocartiVIS/pages/0_100_100.txt",
		setContentREQUEST,"caso_estudio_content");


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