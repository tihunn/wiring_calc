import {prevOffsetCol2, setPrevOffsetCol2} from "../store/state.js"

export default function createButton (name, column = 1, row = 1, height = 1) {
  function offsetCalc(row) { 
    if (column > 1) {
      let offset = prevOffsetCol2 + 1
      setPrevOffsetCol2(offset + height * 6)
      return offset + "%"
    } else {
      return "1%"
    }
  }

  const button1 = BABYLON.GUI.Button.CreateSimpleButton(name, name)
  const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  advancedTexture.addControl(button1);
  button1.width = "15%"
  button1.height = (height * 6) + "%"
  button1.color = "white"
  button1.cornerRadius = 20
  button1.background = "green"
  button1.left = column < 2 ? "-1%" : "-17%"
  button1.top = offsetCalc(row)
  button1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
  button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
  button1.onPointerDownObservable.add( () => {
    if (name === "Menu") {
      isHidden ? button1.background = "darkgreen" : button1.background = "green"
      isHidden = !isHidden
    }
  });
}



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


