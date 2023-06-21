interface IArticle {
    title: string,
    contents: string
}

export class Article {
    articles: IArticle[] = [
        {title: "Shopping List", contents: "10 eggs, 1 loaf of bread, 2 packs of beer, some meat."},
        {title: "Holocaust", contents: "There is still some unfinished business to do..."},
        {title: "Aurelia", contents: "Frameworks should not contain any implementation, just workflow description."}
    ];

    defaultArticle: IArticle = {title: "Not found", contents: "The requested article offended some butt-hurt liberal."};
    activeArticle: IArticle;

    activate(params) {
        if(!params.id || isNaN(params.id)) return;
        if(params.id < this.articles.length) this.activeArticle = this.articles[params.id];
        if(params.id >= this.articles.length) this.activeArticle = this.defaultArticle;
    }
}