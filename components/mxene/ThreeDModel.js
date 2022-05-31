import { NGL } from 'react-ngl';

const ModelOfProtein = (props) => {
    const stage = new NGL.Stage("apphere")
    window.addEventListener("resize", function (event) {
        stage.handleResize();
    }, true);
    stage.loadFile(props.fileLink, { defaultRepresentation: true });
    stage.backgroundColor = "white";
    // alert("Here here")
    return (
        <p></p>
    )
}

export default ModelOfProtein;
