export class Router{

  navLinks=[
    document.getElementById("home"),
    document.getElementById("universo"),
    document.getElementById("exploracao"),
  ]

  routes = {};

add(routeName, page) {
    this.routes[routeName] = page;
  }

route(event){
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    for(let element of this.navLinks){
      element.classList.remove("active")
    }
    event.target.classList.add("active")
  
    this.handle();
}

handle() {
  const { pathname } = window.location;
  const route = this.routes[pathname] || this.routes[404];

  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector("#app").innerHTML = html;
  })
}

}