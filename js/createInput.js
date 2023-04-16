export default function createInput (side, value, height, rearRightWall, rearLeftWall, floor ) {
    //input
    const input = new BABYLON.GUI.InputText();
    input.width = 1;
    input.maxWidth = 1;
    input.height = 0.3;
    input.text = value
    input.color = "white";
    input.background = "green";
    
    //position plane with input
    const plane = BABYLON.Mesh.CreatePlane("plane", 2);
    plane.parent = floor
    plane.position.y = height + 0.3;
    switch (side) {
      case "left": {
        plane.position.x = rearLeftWall.position.x
        plane.rotation.y = Math.PI / 2
        break
      }
      case "right": {
        plane.position.z = rearRightWall.position.z
        plane.rotation.y = Math.PI
        break
      }
      case "height": {
        plane.position.x = rearLeftWall.position.x
        plane.position.z = -rearRightWall.position.z + 0.3
        plane.rotation.z = Math.PI * 1.5
        plane.rotation.y = Math.PI / 2 
        plane.position.y = height / 2
        break
      }
      case "thickness": {
        plane.position.x = -rearLeftWall.position.x - 0.3
        plane.position.z = rearRightWall.position.z 
        plane.rotation.z = Math.PI * 1.5
        plane.rotation.x = Math.PI / 2
        plane.position.y = height / 2
        input.width = 0.5;
        break
      }
    }

    //style input
    const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
    const style = advancedTexture.createStyle();
    style.fontSize = 240;
    style.fontStyle = "italic";
    style.fontFamily = "Verdana";
    input.style = style;
    advancedTexture.addControl(input);
  }