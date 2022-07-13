const identita = { nome: 'Mara', cognome: 'Maionchi', eta: '81' };
const musica = 'Rock';

const ImgProfile = function (attributi) {
    return (
        <div class="prifile_component">
            <img src="/assets/img/mara.png" title={attributi.configImg.titolo} alt={attributi.configImg.titolo} width={attributi.configImg.larghezza} />
        </div>
    );
}

class Persona extends React.Component {
    constructor(attribute) {
        super(attribute);

        this.state = { peso: '75', occupazione: 'Dipendente' };
        this.inputPesoRef = React.createRef();
        this.inputOccRef = React.createRef();
    }

    sendFrom(event) {
        var newKg = this.inputPesoRef.current.value;
        this.setState({ peso: newKg })

        var newOcc = this.inputOccRef.current.value;
        this.setState({ occupazione: newOcc })

        event.preventDefault();
    }

    // getTitle(){
    //     return this.props.anagrafica.nome+' '+this.props.anagrafica.nome;
    // }

    render() {
        const nomeCognome = this.props.anagrafica.nome + ' ' + this.props.anagrafica.cognome;
        return (
            <div class="persona_component">
                <ImgProfile id="image_form" configImg={{ titolo: nomeCognome, larghezza: '400' }} />
                <h1>Anagrafica persona</h1>
                <h2>Nome: {this.props.anagrafica.nome}</h2>
                <h2>Cognome: {this.props.anagrafica.cognome}</h2>
                <h2>Età: {this.props.anagrafica.eta}</h2>
                <h2>Genere: {this.props.genere}</h2>
                <h2>Peso: {this.state.peso}</h2>
                <h2>Occupazione: {this.state.occupazione}</h2>
                <hr />
                <form class="form_component" onSubmit={this.sendFrom.bind(this)}>
                    <label>Peso</label>
                    <input type="text" placeholder="Peso in kg" name="peso" ref={this.inputPesoRef} />
                    <label>Occupazione</label>
                    <input type="text" placeholder="Inserisci il tuo impiego" name="occupazzione" ref={this.inputOccRef} />
                    <button type="submit">Invia</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Persona anagrafica={identita} genere={musica} />, document.getElementById('root'))