document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});

var routes = {
    404: {
        filepath: "/files/404.html",
        title: "404",
        description: "Page not found"
    },
    "/": {
        filepath: "/files/index.html",
        title: "About Us",
        description: "This is the home page"
    },
    "/deposit": {
        filepath: "/files/deposit.html",
        title: "Home",
        description: "This is the deposit form",
    },  
    "/loginform": {
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
        filepath: "./files/userdata.html",
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
    const location = window.location.pathname;
     console.log(location);
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes["404"];
    const html = await fetch(route.filepath).then((response) => response.text());
    document.getElementById("maincontent").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description);
};

window.onpopstate = locationHandler;
window.route = route;
locationHandler();

