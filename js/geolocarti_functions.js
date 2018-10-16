active_caso_estudio_link = ''


function mainpageMaker() {
	httpGetAsync("http://geolocarti.net/0_0.html",
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
	httpGetAsync("http://geolocarti.net/0_100_.html",
		setContentREQUEST,"mytruebody");

	try{
		window.history.pushState("object or string", "Title", "/GeolocartiVIS/caso_estudio/");
	} catch(err) {
		console.log('DESARROLLO LOCAL')
	}
};

function caso_estudio_(page, htmlFile) {

	classChanger(active_caso_estudio_link, `enlace_${page}`, "active_work_link", true);
	httpGetAsync(`http://geolocarti.net/${htmlFile}.html`,
		setContentREQUEST,"caso_estudio_content");
	try{
		window.history.pushState("object or string", "Title", `/GeolocartiVIS/caso_estudio/${page}/`);
	} 
	catch(err) {
		console.log('DESARROLLO LOCAL')
	}


};

function caso_estudio_100() {

	classChanger(active_caso_estudio_link, "enlace_presentacion", "active_work_link", true);
	httpGetAsync("https://ramosvacca.github.io/GeolocartiVIS/0_100_100.html",
		setContentREQUEST,"caso_estudio_content");
	try{
		window.history.pushState("object or string", "Title", "/GeolocartiVIS/caso_estudio/presentacion/");
		} 
		catch(err) {
		console.log('DESARROLLO LOCAL')
		}


};

function caso_estudio_101() {

	classChanger(active_caso_estudio_link, "enlace_introduccion", "active_work_link", true);
	httpGetAsync("https://ramosvacca.github.io/GeolocartiVIS/0_100_101.html",
		setContentREQUEST,"caso_estudio_content");
	try{
		window.history.pushState("object or string", "Title", "/GeolocartiVIS/caso_estudio/introduccion/");
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