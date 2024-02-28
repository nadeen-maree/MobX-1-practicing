import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    const newLocation = prompt('Enter new location:')
    if (newLocation !== null) {
        this.props.store.editItem(this.props.item.name, newLocation)
    }
  }
  deleteItem = () => {
    const itemName = this.props.item.name
    this.props.store.deleteItem(itemName)
  }
  render() {
    let item = this.props.item
    return (
      <div className = {item.completed ? "crossed": null}>
      <input 
        type="checkbox"
        onClick = {this.checkItem} 
        value={item.name}
      /> 
      {item.name} {item.location}
      <button className="editButton" onClick={this.editItem}>Edit</button>
      <button className="deleteButton" onClick={this.deleteItem}>Delete</button>
    </div>)
  }
}

export default observer(Item)