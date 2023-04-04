export default function mainRoom (
  scene,
  textBlock,
  leftWall = 2,
  rightWall = 2,
  height = 2.5,
  thickness = 0.1,
)  {

  // Simple floor
  const optionsFloor = {
    width: rightWall,
    height: leftWall,
    subdivisions: 4,
    subdivisionsX: 2,
    subdivisionsY: 2
  }

  let floorMat = new BABYLON.StandardMaterial("floorMaterial", scene);
  // floorMat.diffuseTexture = new BABYLON.Texture( floorJpg, scene);

  const floor = BABYLON.MeshBuilder.CreateGround("ground", optionsFloor, scene);
  floor.material = floorMat;


  // Walls
  const matWall = new BABYLON.StandardMaterial("bricks");
  matWall.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/bricktile.jpg");

  const pat = BABYLON.Mesh.FLIP_TILE;
  const av = BABYLON.Mesh.TOP;
  const ah = BABYLON.Mesh.LEFT;

  const optionsWalls = (width, depth) => {
    return  {
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      pattern: pat,
      alignVertical: av,
      alignHorizontal: ah,
      tileSize: 0.045,
      tileWidth: 0.2,
      wrap: true,
      width: width,
      height: height,
      depth: depth
    }
  }
  const rearRightWall = BABYLON.MeshBuilder.CreateTiledBox("rearRightWall", optionsWalls(rightWall, thickness));
  rearRightWall.material = matWall;

  rearRightWall.position.y = height / 2;
  rearRightWall.position.z = -( (leftWall / 2) + (thickness / 2) )

  rearRightWall.actionManager = new BABYLON.ActionManager(scene);
  rearRightWall.actionManager.registerAction(
    new BABYLON.SetValueAction(
      BABYLON.ActionManager.OnPickUpTrigger,
      rearRightWall,
      'scaling',
      new BABYLON.Vector3(1.2, 1.2, 1.2)
    )
  );

  const rearLeftWall = BABYLON.MeshBuilder.CreateTiledBox("rearLeftWall", optionsWalls(thickness, leftWall));
  rearLeftWall.material = matWall;

  rearLeftWall.position.y = height / 2;
  rearLeftWall.position.x = (rightWall / 2) + (thickness / 2)


  rearLeftWall.actionManager = new BABYLON.ActionManager(scene);
  rearLeftWall.actionManager = new BABYLON.ActionManager(scene);
  rearLeftWall.actionManager.registerAction(
    new BABYLON.SetValueAction(
      BABYLON.ActionManager.OnPickUpTrigger,
      rearLeftWall,
      'scaling',
      new BABYLON.Vector3(1.2, 1.2, 1.2)
    )
  );
  // console.log( rearLeftWall  )
}
