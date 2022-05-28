import { NGL } from 'react-ngl';

const ModelOfProtein = (props) => {
    const stage = new NGL.Stage("apphere")
    window.addEventListener("resize", function (event) {
        stage.handleResize();

    }, false);
    stage.loadFile(props.fileLink, { defaultRepresentation: true });
    stage.backgroundColor = "white";

    return (
        <p></p>
    )
}

export default ModelOfProtein;
