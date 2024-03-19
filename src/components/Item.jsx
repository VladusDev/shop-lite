import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt={this.props.item.title} onClick={() => this.props.onShowItem(this.props.item)}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price} $</b>
        <div onClick={() => this.props.onAdd(this.props.item)} className="add-to-cart">+</div>
      </div>
    )
  }
}

export default Item