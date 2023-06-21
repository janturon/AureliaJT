import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {

    configureRouter(config: RouterConfiguration, router: Router): void {
        config.title = "Demo App";
        config.options.pushState = true;
        config.options.root = "/";
        config.map([
            {route: "", title: "Home", moduleId: PLATFORM.moduleName("index")},
            {route: "list", title: "List", moduleId: PLATFORM.moduleName("list")},
            {route: "article", title: "Article", moduleId: PLATFORM.moduleName("article")},
            {route: "article/:id", title: "Article", moduleId: PLATFORM.moduleName("article")}
        ]);
    }

}

