var history ="";
var innerElement = "";

var routes = {
    '#':'index.html',
    '#create':'/files/regform.html',
    '#login':'/files/loginform.html',
    '#userdata':'/files/userdata.html',
    '#deposit':'/files/deposit.html'
};

function router(){
  console.log(location.hash);
  var link = window.location.hash;
  console.log(link);
  var count = (link.split("/").length -1);
   if(count>1){
      innerElement = link.split("/")[2];
      link = '#/' + link.split("/")[1]
     }
    if (history === link && innerElement){
      scrollIntoView(innerElement);
       history = link;
       return;
    }
     history = link;
     var route = routes[link];
     if(route)loadPage(route, innerElement);
}
function scrollIntoView(id){
  document.getElementById(id).scrollIntoView();
}

async function loadPage(url, innerElement){
   const response = await fetch(url);
   const html = await response.text();
   console.log("test1");
   console.log(html);
   const trgt = document.getElementById("maincontent");
   trgt.innerHTML= html;
  
}
router();
window.addEventListener('hashchange', router);
