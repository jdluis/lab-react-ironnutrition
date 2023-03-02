import { Input } from 'antd';
import { useState } from 'react';

function Search(props) {
    const [ searchInput, setSearchInput ] = useState("")

    const handleSearch = (event) => {
      setSearchInput(event.target.value)
      props.filterFoods(event.target.value)
    }
  return (
    <div>
      <Input type="text" name="search" value={searchInput} onChange={handleSearch} />
    </div>
  );
}

export default Search;
