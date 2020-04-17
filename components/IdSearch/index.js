class IdSearch extends React.Component {

    getPokeID(event) {
      event.preventDefault();

      let input = document.getElementById("pokeIdInput").value;
    
      fetch("/api/pokemon/id/" + input)
      .then((res) => { 
        return res.json()
       })
      .then((result) => {
        let resultId = document.getElementById("pokemonResult");
        if(result.error) {
          resultId.innerHTML = "Couldn't find that Pokemon!";
        } else {
          resultId.innerHTML = "ID #" + result.id + " is a " + result.name;
        }
  
      });
    }

  
  
    render() {
      return (
         <form>
           <p>Input a Pokemon ID #</p>
          <input type="text" id="pokeIdInput" />
          <br />
          <button onClick={this.getPokeID}>SUBMIT</button>
        </form>
        
      );
    }
}

export default IdSearch;