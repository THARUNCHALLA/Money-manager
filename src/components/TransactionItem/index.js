import './index.css'

const TransactionItem = props => {
  const {user1, onDelete} = props
  const {Title, Amount, Type, id} = user1

  let auth
  if (Type === 'INCOME') {
    auth = <p className="table-header-cell">Income</p>
  } else {
    auth = <p className="table-header-cell">Expenses</p>
  }
  const onclick = () => {
    onDelete(id)
  }

  return (
    <li className="table-header">
      <p className="table-header-cell">{Title}</p>
      <p className="table-header-cell">Rs {Amount}</p>
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
