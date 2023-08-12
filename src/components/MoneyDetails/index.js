import './index.css'

const MoneyDetails = props => {
  const {user12, user123, user1234} = props

  return (
    <div className="moneyContainer">
      <div className="balanceAmount12">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balanceAmount"
          className="image1"
        />
        <div className="containerList">
          <p className="listpara">Your Balance</p>
          <p className="heading1" data-testid="balanceAmount">
            Rs {user1234}
          </p>
        </div>
      </div>
      <div className="incomeAmount12 ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="Your Income"
          className="image1"
        />
        <div className="containerList">
          <p className="listpara">Your Income</p>
          <p className="heading1" data-testid="incomeAmount">
            Rs {user12}
          </p>
        </div>
      </div>
      <div className="expensesAmount12">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expensesAmount"
          className="image1"
        />
        <div className="containerList">
          <p className="listpara">Your Expenses</p>
          <p className="heading1" data-testid="expensesAmount">
            Rs {user123}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
