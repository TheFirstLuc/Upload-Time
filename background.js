function addTime(){
    var checkbox = document.getElementById("input");
    if (!checkbox.checked) 
        return;
    
    //create new Element
    var exactTimeDiv = document.createElement("div");
    var exactTime = document.createTextNode("Time: 21.05.2022");

    //get YouTube date to insert new time
    var parentDate = document.querySelector('#info-strings');
    var date = parentDate.querySelector('.style-scope ytd-video-primary-info-renderer');
    date.style.color = "#f12626";	

    alert(date.sytle.color);

    exactTimeDiv.appendChild(exactTime);
}