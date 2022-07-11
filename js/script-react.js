
let HelloWord = () => {
    let pianeta = "Mondo";
    let plutone = "Plutone";

    return (
        <div>
            <p className="backgroundColorRed">Hello {pianeta}</p>
            <p className="backgroundColorCyan">Il nome del pianeta é {plutone}</p>
        </div>);
}
ReactDOM.render(<HelloWord />, document.getElementById('root'));