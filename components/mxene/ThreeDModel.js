import { NGL } from 'react-ngl';

const ModelOfProtein = (props) => {
    const stage = new NGL.Stage("apphere")
    window.addEventListener("resize", function (event) {
        stage.handleResize();
    }, true);
    stage.loadFile(new Blob([props.fileContents], { type: 'text/plain' }), { ext: 'pdb', defaultRepresentation: true });
    stage.backgroundColor = "white";
    return (
        <p></p>
    )
}

export default ModelOfProtein;
