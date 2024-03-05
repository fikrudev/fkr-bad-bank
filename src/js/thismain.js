
/*var location;
document.addEventListener("click", (e) => {
const { target } = e;
if (!target.matches("nav a")) {
    return;
}
e.preventDefault();
route();
});   
const routes = {
  "/": {
      filepath: "../files/index.html",
      title: "home",
      description: "Page not found"
  },
  404: {
      filepath: "/files/404.html",
      title: "404",
      description: "Page not found"
  },
  "/deposit": {
      filepath: "/files/deposit.html",
      title: "About Us",
      description: "This is the home page"
  },
  "/login": {
      filepath: "/files/loginform.html",
      title: "Login",
      description: "This is login form"
  },
"/create": {
      filepath: "/files/regform.html",
      title: "Registration",
      description: "This is registration form"
  },
"/userdata": {
      filepath: "/files/userdata.html",
      title: "userdata",
      description: "User data"
  }
};

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = async () => {
     location = window.location.hash.replace("#", "");
    console.log("testing location address");
    console.log(location);
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes["404"];
    const rsp = await fetch(route.filepath).then((response) => response.text());
    document.getElementById("maincontent").innerHTML = rsp;
    console.log(rsp);
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description);
 };
  window.addEventListener("hashchange", locationHandler);
  locationHandler();*/