import React from 'react';
import './index.css';
import './App.css';



class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchText: props.query
    }}

onLoad(){
      this.props.onSearch(this.state.searchText);

}

//Updates and Sends Search Box Infor to App
onSearchChange = e => {
      this.setState({searchText: e.target.value});

    }
handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.state.searchText);
      e.target.reset();
}


render() {

  return (
    <div >
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search"
               onChange={this.onSearchChange}
               name="search"
               placeholder="Search..." />
        <button type="submit" ></button>
      </form>



    </div>
  );
}
}






export default FormSearch;
