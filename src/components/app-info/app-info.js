import './app-info.css'

export default function AppInfo({ totalAmount, lucky }) {
  let luckyList = lucky.map(it => it.name).join(', ');
  return (
    <div className="app-info">
      <h1>Companie's employees</h1>
      <h2>Total employees amount: {totalAmount}</h2>
      <h2>Will get benefits: {luckyList}</h2>
      
    </div>
  )
}
