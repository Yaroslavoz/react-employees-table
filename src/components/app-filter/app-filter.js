import './app-filter.css';

export default function AppFilter({ onFilter, filterType }) {
  const buttonsData = [
    {name: 'All', label: 'All employees'},
    {name: 'Up', label: 'Level up'},
    {name: 'Rich', label: 'Outcome up to 1000$'},
  ]
  const buttons = buttonsData.map(({ name, label }) => {
    const active = filterType === name;
    const classes = active ? "btn btn-light" : "btn btn-outline-light";
    return (
      <button 
        type="button" 
        key={name}
        className={classes}
        onClick={() => onFilter(name)}
        >
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}
