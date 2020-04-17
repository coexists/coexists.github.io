
class TypeSearch extends React.Component {

   
  getType = () => {
       
    let input = document.querySelector("#pokeTypeInput");

    fetch("http://localhost:3000/api/pokemon/type/" + input.value)
    .then((res) => { return res.json(); } )
    .then((result) => {
      
      this.props.callback(result);
    });
  }

  render() {
    return (
      <div>
        <input type="text" id="pokeTypeInput" />
        <button onClick={this.getType}>SUBMIT</button>
      </div>
    );
  };
}

export default TypeSearch;