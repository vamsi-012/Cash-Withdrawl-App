// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawl extends Component {
  state = {amount: 2000}

  withdrawlAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="app-container">
        <div className="page-container">
          <div className="profile-container">
            <div className="dp-container">
              <p className="dp-text">S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="balance-in-account">{amount}</p>
              <p className="balance-in-rs">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-amount">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-container">
              {denominationsList.map(each => (
                <DenominationItem
                  withdrawlAmount={this.withdrawlAmount}
                  key={each.id}
                  denominationDetails={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
