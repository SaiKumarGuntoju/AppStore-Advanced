import './index.css'

const TabItem = props => {
  const {eachTab, updateTabId, isActive} = props
  const {displayText, tabId} = eachTab
  const onClickTab = () => {
    updateTabId(tabId)
  }
  const activeTab = isActive ? 'style' : ''
  return (
    <li>
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-item ${activeTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
