export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {
    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
    ) {}

    //id getter and setter
    get id(): string {
        return this._id
    }
    set id(id: string) {
        this._id = id
    }

    //item getter and setter
    get item(): string {
        return this._item
    }
    set item(item: string) {
        this._item = item
    }

    //checked getter and setter
    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }
}