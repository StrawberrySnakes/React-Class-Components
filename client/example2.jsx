const React = require('react');
const { createRoot } = require('react-dom/client');

class HelloUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
        };
    }

    handleNameChange = (e) => {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div>
                <p>Hello {this.state.username}</p>
                <label>Change Name:</label>
                <input type="text" value={this.state.username} 
                onChange={this.handleNameChange} />
            </div>
        );
    }
}


const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<HelloUser username='Dessa' />);
};

window.onload = init;