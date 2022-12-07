// Write your code here

import './index.css'

const DenominationItem = props => {
  const {withdrawlAmount, denominationDetails} = props
  const {value} = denominationDetails
  const onWithdrawl = () => {
    withdrawlAmount(value)
  }

  return (
    <li className="btn-container">
      <button type="button" onClick={onWithdrawl} className="val-btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
