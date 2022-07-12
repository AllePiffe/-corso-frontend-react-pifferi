const identità = { nome: "Mara", cognome: "Maionchi", eta: "81" };
const musica = 'Crust punk';

class Person extends React.Component {
  constructor(attributi) {
    super(attributi);
    debugger
    this.state = { peso: 75 }
  }
  render() {
    return (
      <div>
        <h1>Anagrafica persona</h1>
        <h2>Nome: {this.props.anagrafica.nome}</h2>
        <h2>Cognome: {this.props.anagrafica.cognome}</h2>
        <h2>Eta:{this.props.anagrafica.eta}</h2>
        <h2>Peso:{this.state.peso}</h2>
        <h2> Ascolta {this.props.genere}</h2>
        <hr />
        {/* <form onSubmit={this.cambiapeso.bind(this)}> */}
        <form>
          <input type="text" name="peso" />
          <input type="Submit" />
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Person anagrafica={identità} genere={musica} />, document.getElementById('root'));
