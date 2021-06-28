import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {imageUrl, appName} = eachApp
  return (
    <li className="app-item">
      <img className="app-icon" src={imageUrl} alt="imsjf" />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
