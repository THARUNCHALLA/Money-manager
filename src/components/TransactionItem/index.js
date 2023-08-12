import './index.css'

const TransactionItem = props => {
  const {user1, onDelete} = props
  const {Title, Amount, Type, id} = user1
  let auth
  if (Type === 'INCOME') {
    auth = <p className="lastValue31">Income</p>
  } else {
    auth = <p className="lastValue31">Expenses</p>
  }
  const onclick = () => {
    onDelete(id)
  }

  return (
    <li className="AKK">
      <p className="lastValue11">{Title}</p>
      <p className="lastValue21">Rs {Amount}</p>
      {auth}
      <button type="button" onClick={onclick} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="delete-Button"
        />
      </button>
    </li>
  )
}

export default TransactionItem
