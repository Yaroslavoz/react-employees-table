import './search-panel.css';

export default function SearchPanel({ onSearch }) {

  const handleChange = (e) => {
    onSearch(e.target.value);
  }
  return (
    <input 
        type="text"
        className="form-control search-input"
        placeholder="Find employee" 
        onChange={handleChange}
        />
  )
}
