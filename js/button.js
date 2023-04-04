export const button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "1. Click Me")
button1.width = "15%"
button1.height = "6%"
button1.color = "white"
button1.cornerRadius = 20
button1.background = "green"
button1.left = "-1%"
button1.top = "1%"
button1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
button1.onPointerUpObservable.add( () => {
  alert("you did it!")
});

export default button1

export const button2 = BABYLON.GUI.Button.CreateSimpleButton("but2", "2. don't click");
button2.width = "15%"
button2.height = "6%"
button2.color = "white"
button2.cornerRadius = 20
button2.background = "green"
button2.left = "-1%"
button2.top = "8%"
button2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
button2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
button2.onPointerUpObservable.add( () => {
  alert("nine!")
});


