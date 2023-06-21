export class List {
    heading: string = "List App";
    item: string = "";
    itemList: string[] = []

    private refocus() {
        document.getElementById("inputItem").focus();
    }

    addItem(): void {
        this.itemList.push(this.item);
        this.item = "";
        this.refocus();
    }

    removeItem(index: number): void {
        this.itemList.splice(index, 1);
    }
}