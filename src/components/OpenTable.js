import React from "react";
import "../assets/scss/OpenTable.scss";
import Menus from "../menu-data.json";
import Reservation from "../assets/images/reservation-table.png";
import Table from "../assets/images/table.png";
import Waiter from "../assets/images/waiter.png";

class OpenTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table1order1: false,
      table1order2: false,
      table2order1: false,
      table2order2: false,

      orderan: {
        meja: {
          starter: '',
          main: '',
          desert: ''
        }
      },

      table1starter1: "",
      table1main1: "",
      table1dessert1: "",

      table1starter2: "",
      table1main2: "",
      table1dessert2: "",

      table2starter1: "",
      table2main1: "",
      table2dessert1: "",

      table2starter2: "",
      table2main2: "",
      table2dessert2: "",

      orderLeft1: [],
      orderLeft2: [],
      orderRight1: [],
      orderRight2: [],
      totalOrderTable1: 0,
      totalOrderTable2: 0,
      errorOrder1: false,
      errorOrder2: false,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    
    // if(this.state.orderLeft1.includes(e.target.value)===true){
    //   this.setState({orderLeft1: this.state.orderLeft1.filter(orderan => orderan !== e.target.value)})
    // }

  }
  onOrder = e => {
    this.setState({
      table1order1: true,
    })
  }
  onOrder2 = e => {
    this.setState({
      table1order2: true,
    })
  }
  onOrder3 = e => {
    this.setState({
      table2order1: true,
    })
  }
  onOrder4 = e => {
    this.setState({
      table2order2: true,
    })
  }
  onHandleArr1 = e => {
    let arr1 = [];
    arr1.push(e.value)
  }
  onSubmitOrder1 = e => {
    e.preventDefault();
    this.setState({
      orderLeft1: [this.state.table1starter1, this.state.table1main1, this.state.table1dessert1],
    })
  }
  render() {
    console.log(this.state.orderLeft1)
    return (
      <section className="sec-opentable">
        <h1 className="title">Fresly's Restaurant</h1>
        <div className="div--table-waiter">
          <img src={Reservation} className="img--reservation" alt="" />
          <img src={Waiter} className="img--waiter" alt="" />
          {
            (this.state.table1starter1 || this.state.table1main1 || this.state.table1dessert1 || this.state.table1starter2 || this.state.table1main2 || this.state.table1dessert2 ) ? 
            <div className="display--table1">
              <h2>Order Table 1:</h2>
                <div className="order--table1">
                  {
                    (this.state.table1starter1 || this.state.table1main1 || this.state.table1dessert1) ? 
                      <div className="left">
                        <h4>Order 1:</h4>
                        <p>{this.state.table1starter1}</p>
                        <p>{this.state.table1main1}</p>
                        <p>{this.state.table1dessert1}</p>
                      </div>
                      : null
                  }
                  {
                    (this.state.table1starter2 || this.state.table1main2 || this.state.table1dessert2) ? 
                      <div className="right">
                        <h4>Order 2:</h4>
                        <p>{this.state.table1starter2}</p>
                        <p>{this.state.table1main2}</p>
                        <p>{this.state.table1dessert2}</p>
                      </div>
                      : null
                  }
                </div>
              <div className="price--table1">
                <h2>Price Table 1</h2>
                <p>US$ <span>{this.state.totalOrderTable1}</span></p>
              </div>
            </div>
            : null
          }
          {
            (this.state.table2starter1 || this.state.table2main1 || this.state.table2dessert1 || this.state.table2starter2 || this.state.table2main2 || this.state.table2dessert2 ) ? 
            <div className="display--table2">
              <h2>Order Table 2:</h2>
                <div className="order--table2">
                  {
                    (this.state.table2starter1 || this.state.table2main1 || this.state.table2dessert1) ? 
                      <div className="left">
                        <h4>Order 1:</h4>
                        <p>{this.state.table2starter1}</p>
                        <p>{this.state.table2main1}</p>
                        <p>{this.state.table2dessert1}</p>
                      </div>
                      : null
                  }
                  {
                    (this.state.table2starter2 || this.state.table2main2 || this.state.table2dessert2) ? 
                      <div className="right">
                        <h4>Order 2:</h4>
                        <p>{this.state.table2starter2}</p>
                        <p>{this.state.table2main2}</p>
                        <p>{this.state.table2dessert2}</p>
                      </div>
                      : null
                  }
                </div>
              <div className="price--table2">
                <h2>Price Table 2</h2>
                <p>US$ <span>{this.state.totalOrderTable2}</span></p>
              </div>
            </div>
            : null
          }
        </div>
        <div className="div--table">
          <div className="div--table1">
            <img src={Table} className="table-1" alt="" />
            <button className="btn-order1" onClick={this.onOrder}>Order</button>
            {
              (this.state.table1order1) ? 
              <button className="btn-order2" onClick={this.onOrder2}>Second Order</button>
              : null
            }

            {
              (this.state.table1order1) ? 
              <div className="order--list">
                <form onSubmit={this.onSubmitOrder1}>
                  <div className="div--form-starters">
                    <h3>Starters</h3>
                    {
                      Menus.starters.map((starter, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table1starter1list"+starter.id} type="radio" name={"table1starter1"} onChange={this.onChange} value={starter.name}/>
                            <label htmlFor={"table1starter1list"+starter.id}>{starter.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-mains">
                    <h3>Mains</h3>
                    {
                      Menus.mains.map((main, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table1main1list"+main.id} type="radio" name={"table1main1"} onChange={this.onChange} value={main.name}/>
                            <label htmlFor={"table1main1list"+main.id}>{main.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-desserts">
                    <h3>Desserts</h3>
                    {
                      Menus.desserts.map((dessert, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table1dessert1list"+dessert.id} type="radio" name={"table1dessert1"} onChange={this.onChange} value={dessert.name}/>
                            <label htmlFor={"table1dessert1list"+dessert.id}>{dessert.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <button disabled={(!this.state.table1main1 || (!this.state.table1dessert1 && !this.state.table1starter1) || (this.state.table1starter1 === "Prawn cocktail" && this.state.table1main1 === "Salmon fillet") || (!(this.state.table1main1 !== this.state.table1main2)) ) ? true : false} className="btn-submit">Submit Order</button>
                </form>
              </div> : 
              null
            }
            {
              (this.state.table1order2) ? 
              <div className="order--list">
                <form>
                  <div className="div--form-starters">
                    <h3>Starters</h3>
                    {
                      Menus.starters.map((starter, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table1starter2list"+starter.id} type="radio" name={"table1starter2"} onChange={this.onChange} value={starter.name}/>
                            <label htmlFor={"table1starter2list"+starter.id}>{starter.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-mains">
                    <h3>Mains</h3>
                    {
                      Menus.mains.map((main, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table1main2list"+main.id} type="radio" name={"table1main2"} onChange={this.onChange} value={main.name}/>
                            <label htmlFor={"table1main2list"+main.id}>{main.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-desserts">
                    <h3>Desserts</h3>
                    {
                      Menus.desserts.map((dessert, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table1dessert2list"+dessert.id} type="radio" name={"table1dessert2"} onChange={this.onChange} value={dessert.name}/>
                            <label htmlFor={"table1dessert2list"+dessert.id}>{dessert.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <button disabled={(!this.state.table1main2 || (!this.state.table1dessert2 && !this.state.table1starter2) || (this.state.table1starter2 === "Prawn cocktail" &&this.state.table1main2 === "Salmon fillet")) ? true : false} className="btn-submit">Submit Second Order</button>
                </form>
              </div> : 
              null
            }
          </div>


          <div className="div--table2">
            <img src={Table} className="table-2" alt="" />
            <button className="btn-order1" onClick={this.onOrder3}>Order</button>
            {
              (this.state.table2order1) ? 
              <button className="btn-order2" onClick={this.onOrder4}>Second Order</button>
              : null
            }
            {
              (this.state.table2order1) ? 
              <div className="order--list">
                <form>
                  <div className="div--form-starters">
                    <h3>Starters</h3>
                    {
                      Menus.starters.map((starter, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table2starter1list"+starter.id} type="radio" name={"table2starter1"} onChange={this.onChange} value={starter.name}/>
                            <label htmlFor={"table2starter1list"+starter.id}>{starter.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-mains">
                    <h3>Mains</h3>
                    {
                      Menus.mains.map((main, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table2main1list"+main.id} type="radio" name={"table2main1"} onChange={this.onChange} value={main.name}/>
                            <label htmlFor={"table2main1list"+main.id}>{main.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-desserts">
                    <h3>Desserts</h3>
                    {
                      Menus.desserts.map((dessert, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table2dessert1list"+dessert.id} type="radio" name={"table2dessert1"} onChange={this.onChange} value={dessert.name}/>
                            <label htmlFor={"table2dessert1list"+dessert.id}>{dessert.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <button disabled={(!this.state.table2main1 || (!this.state.table2dessert1 && !this.state.table2starter1) || (this.state.table2starter1 === "Prawn cocktail" &&this.state.table2main1 === "Salmon fillet")) ? true : false} className="btn-submit">Submit Order</button>
                </form>
              </div> : 
              null
            }
            {
              (this.state.table2order2) ? 
              <div className="order--list">
                <form>
                  <div className="div--form-starters">
                    <h3>Starters</h3>
                    {
                      Menus.starters.map((starter, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table2starter2list"+starter.id} type="radio" name={"table2starter2"} onChange={this.onChange} value={starter.name}/>
                            <label htmlFor={"table2starter2list"+starter.id}>{starter.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-mains">
                    <h3>Mains</h3>
                    {
                      Menus.mains.map((main, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table2main2list"+main.id} type="radio" name={"table2main2"} onChange={this.onChange} value={main.name}/>
                            <label htmlFor={"table2main2list"+main.id}>{main.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="div--form-desserts">
                    <h3>Desserts</h3>
                    {
                      Menus.desserts.map((dessert, i) => {
                        return (
                          <div key={i} className="div--form">
                            <input id={"table2dessert2list"+dessert.id} type="radio" name={"table2dessert2"} onChange={this.onChange} value={dessert.name}/>
                            <label htmlFor={"table2dessert2list"+dessert.id}>{dessert.name}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                  <button disabled={(!this.state.table2main2 || (!this.state.table2dessert2 && !this.state.table2starter2) || (this.state.table2starter2 === "Prawn cocktail" &&this.state.table2main2 === "Salmon fillet")) ? true : false} className="btn-submit">Submit Second Order</button>
                </form>
              </div> : 
              null
            }
          </div>
        </div>
      </section>
    )
  }
}

export default OpenTable;
