import createInput from "./createInput.js"

export default function mainRoom(
  scene,
  place = "main",
  leftWall = 2,
  rightWall = 2,
  height = 2.5,
  thickness = 0.1,

) {
  // room layout
  const smallWall = 0.1
  let shiftX = 0
  let shiftZ = 0
  switch (place) {
    case "rearLeft": {
      shiftX = 2 + thickness;
      break
    }
    case "rearRight": {
      shiftZ = -2 - thickness;
      break
    }
    case "frontLeft": {
      shiftZ = 2 + thickness;
      break
    }
    case "frontRight": {
      shiftX = -2 - thickness;
      break
    }
  }


  // Floor option
  const optionsFloor = {
    width: rightWall,
    height: leftWall,
    subdivisions: 4,
    subdivisionsX: 2,
    subdivisionsY: 2
  }

  let floorMat = new BABYLON.StandardMaterial("floorMaterial", scene);
  if (place === "main") {
    floorMat.diffuseTexture = new BABYLON.Texture("http://127.0.0.1:5500/wiring_calc/img/floor.jpg", scene);
  }
  // Create floor
  const floor = BABYLON.MeshBuilder.CreateGround("ground", optionsFloor, scene);
  floor.material = floorMat;
  floor.position.x = shiftX
  floor.position.z = shiftZ

  // Wall options
  const matWall = new BABYLON.StandardMaterial("bricks");
  if (place === "main") {
    matWall.diffuseTexture = new BABYLON.Texture("http://127.0.0.1:5500/wiring_calc/img/bricktile.jpg");
  }

  const optionsWalls = (width, depth, isSmallWall) => {
    return {
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      pattern: BABYLON.Mesh.FLIP_TILE,
      alignVertical: BABYLON.Mesh.TOP,
      alignHorizontal: BABYLON.Mesh.LEFT,
      tileSize: 0.045,
      tileWidth: 0.2,
      wrap: true,
      width: width,
      height: isSmallWall ? smallWall : height,
      depth: depth
    }
  }
  // Create rear right wall
  const rearRightWall = BABYLON.MeshBuilder.CreateTiledBox("rearRightWall", optionsWalls(rightWall, thickness));
  rearRightWall.material = matWall;

  rearRightWall.position.y = height / 2;
  rearRightWall.position.z = -((leftWall / 2) + (thickness / 2)) + shiftZ
  rearRightWall.position.x = shiftX

  // Create rear left wall
  const rearLeftWall = BABYLON.MeshBuilder.CreateTiledBox("rearLeftWall", optionsWalls(thickness, leftWall));
  rearLeftWall.material = matWall;

  rearLeftWall.position.y = height / 2;
  rearLeftWall.position.x = (rightWall / 2) + (thickness / 2) + shiftX
  rearLeftWall.position.z = shiftZ


  // Front wall
  if (place === "main") {
    // Create front right wall
    const frontRightWall = BABYLON.MeshBuilder.CreateTiledBox(
        "frontRightWall", 
        optionsWalls(thickness, rightWall, true)
      )
    frontRightWall.material = matWall;
    
    frontRightWall.position.y = smallWall / 2
    frontRightWall.position.x = -( leftWall / 2 + (thickness / 2) )

    // Create front left wall
    const frontLeftWall = BABYLON.MeshBuilder.CreateTiledBox(
      "frontLeftWall", 
      optionsWalls(leftWall, thickness, true)
    )
    frontLeftWall.material = matWall;
  
    // frontLeftWall.position.y = smallWall / 2
    // frontLeftWall.position.z = -( leftWall / 2 + (thickness / 2) )
    frontLeftWall.position.y = smallWall / 2
    frontLeftWall.position.x = 0
    frontLeftWall.position.z = leftWall / 2 + (thickness / 2)
    
  }

  // rearLeftWall.actionManager = new BABYLON.ActionManager(scene);
  // rearLeftWall.actionManager.registerAction(
  //   new BABYLON.SetValueAction(
  //     BABYLON.ActionManager.OnPickUpTrigger,
  //     rearLeftWall,
  //     'scaling',
  //     new BABYLON.Vector3(1.2, 1.2, 1.2)
  //   )
  // );

  

  
  if (place === "main") {
    createInput("right", rightWall, height, rearRightWall, rearLeftWall, floor)
    createInput("left", leftWall, height, rearRightWall, rearLeftWall, floor)
    createInput("height", height, height, rearRightWall, rearLeftWall, floor)
    createInput("thickness", thickness, height, rearRightWall, rearLeftWall, floor)
  }
}
