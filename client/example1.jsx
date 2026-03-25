const React = require('react');
const { createRoot } = require('react-dom/client');

class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World 1</div>
        );
    }
}

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<HelloWorld />);
};

window.onload = init;