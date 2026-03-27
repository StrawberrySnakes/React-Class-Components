const React = require('react');
const { createRoot } = require('react-dom/client');

class SongContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: props.songs,
        };

        this.loadSongsFromServer();
    }

    loadSongsFromServer = async () => {
        const response = await fetch('/getSongs')
        const songs = await response.json();
        this.setState({songs: songs});
    }

    render() {
        if(this.state.songs.length === 0) {
            return (
                <div><h3>No Songs Yet!</h3></div>
            )
        }

        // { artist: 'Tame Impala',title: 'The Less I Know The Better'},


        const songList = this.state.songs.map(song => {
            return (
                <div key={song.title}>
                    <h2>{song.artist}</h2> - <i>{song.title}</i>
                </div>
            );
        });

        return (
            <div>
                <h1>My Favorite Songs!</h1>
                {songList}
            </div>
        );
    }
}

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<SongContainer songs={[]} />);
};

window.onload = init;