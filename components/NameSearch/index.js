
class NameSearch extends React.Component {

    getPokeName(event) {
        event.preventDefault();
      let input = document.querySelector("#pokemonNameInput");

      fetch("http://localhost:3000/api/pokemon/name/" + input.value)
      .then((res) => { return res.json(); })
      .then((result) => {
        
        let resultElement = document.querySelector("#pokemonResult");
  
        if(result.error) {
          resultElement.innerHTML = "Couldn't find that Pokemon!";
        } else {
          resultElement.innerHTML = "Your pokemon is a " + result.name + "! And the ID is #" + result.id;
        }
      });
    }

    render() {
      return (
        <form onSubmit={this.getPokeName}>
          <p>Input a Pokemon Name</p>
          <input type="text" id="pokemonNameInput" />
          <br />
          <button>SUBMIT</button>
        </form>
      );
    };
}

export default NameSearch;