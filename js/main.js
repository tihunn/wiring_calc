import createScene from "./createScene.js";
import room from "./room.js";
import createButton, {button2} from "./button.js";

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
const scene = createScene(engine, canvas); //Call the createScene function

window.addEventListener( "resize",  () => engine.resize() ); // Watch for browser/canvas resize events

createButton("Menu")
createButton("Новый дом", 2, 1, 1)
createButton("Cохранённые дома", 2, 2, 2)
createButton("Удалить запись дома", 2, 3, 2)
createButton("Изменить название записи", 2, 4, 2)


room(scene, )
room(scene, "rearLeft")
room(scene, "rearRight")
// room(scene, textblock, "frontLeft")
// room(scene, textblock, "frontRight")


engine.runRenderLoop( () => scene.render() ); // Register a render loop to repeatedly render the scene


