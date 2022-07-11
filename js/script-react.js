
let HelloWord = () => {
    let pianeta = "Mondo";
    let plutone = "Plutone";
    let paragrafo = "Esempio di paragrafo creato in react";
    return (
        <div className="backgroundColorOrange">
            <p className="backgroundColorRed">Hello {pianeta}</p>
            <p className="backgroundColorCyan">Il nome del pianeta é {plutone}</p>
        </div>
    );
}
ReactDOM.render(<HelloWord />, document.getElementById('root'));

/*let HelloWord1 = () => {
    let pianeta1 = "Mondo";
    let plutone1 = "Plutone";
    let paragrafo1 = "Esempio di paragrafo creato in react";
    return (
        <div className="backgroundColor1">
            <p className="backgroundColorRed1">Hello {pianeta1}</p>
            <p className="backgroundColorCyan1">Il nome del pianeta é {plutone1}</p>
        </div>
    );
}
ReactDOM.render(<HelloWord1 />, document.getElementById('root'));*/