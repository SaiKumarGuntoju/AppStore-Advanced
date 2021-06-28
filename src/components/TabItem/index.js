import './index.css'

const TabItem = props => {
  const {eachTab} = props
  const {displayText} = eachTab
  return (
    <li>
      <h1 className="tab-item">{displayText}</h1>
    </li>
  )
}
export default TabItem
