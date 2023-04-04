export default function createScene (engine, canvas) {
  // Creates a basic Babylon Scene object
  const scene = new BABYLON.Scene(engine);
  // Creates and positions a free camera
  const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 8, BABYLON.Vector3.Zero());
  // Targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);
  // Creates a light, aiming 0,1,0 - to the sky
  const light = new BABYLON.HemisphericLight("light",
    new BABYLON.Vector3(0, 1, 0), scene);
  // Dim the light a small amount - 0 to 1
  light.intensity = 0.7;

  return scene;

}
