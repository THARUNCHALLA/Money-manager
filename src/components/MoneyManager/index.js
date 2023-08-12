import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    Title: '',
    Amount: '',
    Type: 'INCOME',
    final: [],
    YourExpenses: 0,
    YourIncome: 0,
    total: 0,
  }

  title = event => {
    this.setState({Title: event.target.value})
  }

  amount = event => {
    this.setState({Amount: event.target.value})
  }

  type = event => {
    this.setState({Type: event.target.value})
  }

  onAddContact = event => {
    event.preventDefault()
    const {Title, Amount, Type} = this.state

    const contact = {
      Title,
      Amount,
      Type,
      id: uuidv4(),
    }
    if (Title !== '' && Amount !== '') {
      this.setState(prevState => ({
        final: [...prevState.final, contact],
        Title: '',
        Amount: '',
        Type: 'INCOME',
      }))
      if (Type === 'INCOME') {
        this.setState(prevState => ({
          YourIncome: prevState.YourIncome + parseInt(Amount),
          total: prevState.total + parseInt(Amount),
        }))
      }
      if (Type === 'EXPENSES') {
        this.setState(prevState => ({
          YourExpenses: prevState.YourExpenses + parseInt(Amount),
          total: prevState.total - parseInt(Amount),
        }))
      }
    }
  }

  onDelete = id => {
    const {final} = this.state

    const filter = final.filter(each => each.id !== id)
    const filter1 = final.filter(each => each.id === id)
    console.log(filter1)
    if (filter1[0].Type !== 'EXPENSES') {
      this.setState(prevState => ({
        YourIncome: prevState.YourIncome - parseInt(filter[0].Amount),
        total: prevState.total - parseInt(filter[0].Amount),
      }))
    } else {
      this.setState(prevState => ({
        YourExpenses: prevState.YourIncome - parseInt(filter[0].Amount),
        total: prevState.total + parseInt(filter[0].Amount),
      }))
    }

    this.setState({final: filter})
  }

  render() {
    const {
      Title,
      Amount,
      Type,
      final,
      YourIncome,
      YourExpenses,
      total,
    } = this.state

    return (
      <div>
        <div className="container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="paragraph">
            Welcome back to your <span className="span"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          user12={YourIncome}
          user123={YourExpenses}
          user1234={total}
        />

        <div className="bothContainer">
          <div className="containerForForm">
            <h1 className="formhead">Add Transaction</h1>
            <form onSubmit={this.onAddContact}>
              <div className="labelContainer">
                <label htmlFor="unique">TITLE</label>
                <input
                  type="text"
                  id="unique"
                  placeholder="TITLE"
                  value={Title}
                  onChange={this.title}
                />
              </div>
              <div className="labelContainer">
                <label htmlFor="unique1">AMOUNT</label>
                <input
                  type="text"
                  id="unique1"
                  placeholder="AMOUNT"
                  value={Amount}
                  onChange={this.amount}
                />
              </div>
              <div className="labelContainer">
                <label htmlFor="unique2">TYPE</label>
                <select id="unique2" onChange={this.type} value={Type}>
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="buttonForm">
                Add
              </button>
            </form>
          </div>
          <div className="lastContainer">
            <h1 className="formhead">History</h1>
            <div>
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>

                {final.map(each => (
                  <TransactionItem
                    user1={each}
                    key={each.id}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
