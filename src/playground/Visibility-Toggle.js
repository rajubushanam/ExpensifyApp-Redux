class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggleVisibility: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);

    }

    toggleVisibility(){
        console.log(this.state.toggleVisibility);
        
        this.setState((prevState) => {
            console.log(prevState);
            return {
                toggleVisibility : prevState.toggleVisibility == false ? true : false
            };
        });
    }
    
    render(){
        return(
        <div>
            {this.state.toggleVisibility && (<p>This is a text</p>)}
            <button onClick={this.toggleVisibility}>Toggle</button>
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));