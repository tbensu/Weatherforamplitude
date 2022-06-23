import React from 'react';
import a from './SearchBar.module.css';



export default function SearchBar({onSearch}) {
  
  const [search, setSearch] = React.useState('');

  const handleOnSearch = () => {
    onSearch(search);
    setSearch('');
}

  return <div className={a.barraBusqueda}>
    <button className={a.botonBusqueda} onClick={handleOnSearch}> + </button>
    <input 
    className={a.inputBusqueda} 
    id='searchInput' 
    placeholder="Search City" 
    autoComplete="off" 
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
  </div>
};