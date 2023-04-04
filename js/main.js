import createScene from "./createScene.js";
import mainRoom from "./mainRoom.js";
import button1, {button2} from "./button.js";

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
const scene = createScene(engine, canvas); //Call the createScene function

window.addEventListener( "resize",  () => engine.resize() ); // Watch for browser/canvas resize events
const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

advancedTexture.addControl(button1);
advancedTexture.addControl(button2);

var panel = new BABYLON.GUI.StackPanel();
advancedTexture.addControl(panel);


var textblock = new BABYLON.GUI.TextBlock("textblock", "");
textblock.width = 0.2;
textblock.height = "40px";
textblock.color = "white";
panel.addControl(textblock);


mainRoom(scene, textblock)

var box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, scene);

// Register an event handler for the mesh's pointer down event
box.actionManager = new BABYLON.ActionManager(scene);
box.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
    BABYLON.ActionManager.OnPickUpTrigger,
    (evt) => console.log("click x: ", evt.pointerX, " click y: ", evt.pointerX)
  )
);


console.log(box)


engine.runRenderLoop( () => scene.render() ); // Register a render loop to repeatedly render the scene


