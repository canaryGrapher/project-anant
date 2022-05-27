import { NGL } from 'react-ngl';

const ModelOfProtein = (props) => {
    const stage = new NGL.Stage("apphere")
    window.addEventListener("resize", function (event) {
        stage.handleResize();

    }, false);
    stage.loadFile(props.fileLink, { defaultRepresentation: true });
    stage.backgroundColor = "white";

    // const camera = {
    //     "position": {
    //         "x": 0,
    //         "y": 0,
    //         "z": 0
    //     },
    //     "rotation": {
    //         "_x": 0,
    //         "_y": 0,
    //         "_z": 0,
    //         "_w": 1
    //     },
    //     "distance": -89.3083303712002
    // }

    return (
        <p></p>
    )
}

export default ModelOfProtein;
