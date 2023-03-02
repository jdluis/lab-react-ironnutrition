import { Input, Divider } from 'antd';

function Search(props) {
  const handleSearch = (event) => {
    props.setSearch(event.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        name="search"
        value={props.search}
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
