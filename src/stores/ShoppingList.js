/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0

        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem: action
        })

    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    addItem = (name) => {
        this.list.push(new Item(name))
    }
    editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name === itemName)
        if (item) {
            item.location = newLocation
        }
    }
    deleteItem = (itemName) => {
        this.list = this.list.filter(item => item.name !== itemName)
    }
}

