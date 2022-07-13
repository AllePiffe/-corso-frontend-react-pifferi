const identita = { nome: 'Mara', cognome: 'Maionchi', eta: 81 }
var musica = 'metal';


const ImProfile = function () {
    return (
        <div class="profile_componentet">
            <img scr="asset/imags/Mara Maionchi Crust Punk.png" alt="Foto Profilo" with={attri8buti.configIm.tito.lopg}>
        </div>
    );
}


class Person extends React.Component {
    constructor(attributi) {
        super(attributi)
        //con this.state dichiaro una proprietà mutevole a differenza delle altre proprietà
        this.state = { peso: 75, occupazione: "agitatrice della masse" }
        this.inputRef = React.createRef();
        this.inputProfessione = React.createRef();

    }

    inviaForm(event) {
        var valore = this.inputRef.current.value
        var lavoro = this.inputProfessione.current.value
        this.setState({ peso: valore, occupazione: lavoro })
        event.preventDefault()
    }

    render() {
        return (
            <div className="persona_component">
                <ImgProfile configimg={{ titolo: nomeCognome, larghezza: '400' }} />
                <h1>Anagrafica Persona</h1>
                <h2>{this.props.anagrafica.nome}</h2>
                <h2>{this.props.anagrafica.cognome}</h2>
                <h2>Anni {this.props.anagrafica.eta}</h2>
                <p>Ascolta {this.props.genere}</p>
                {/* qua reinderizzo lo stato di questo componente mutevole */}
                <h2>pesa kili {this.state.peso}</h2>
                <p>Professione {this.state.occupazione}</p>
                <hr />
                <form onSubmit={this.inviaForm.bind(this)}>
                    <label>Peso</label>
                    <input type="text" ref={this.inputRef} /><br />
                    <label>Professione</label>
                    <input type="text" ref={this.inputProfessione} /><br />
                    <button type="submit">Click me</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Person anagrafica={identita} genere={musica} />, document.getElementById('root'))