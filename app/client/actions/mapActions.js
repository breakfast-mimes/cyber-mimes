export function goSouth() {
  return {
    type: 'GO_SOUTH',
  }
}

export function goNorth() {
  return {
    type: 'GO_NORTH',
  }
}

export function goEast() {
  return {
    type: 'GO_EAST',
  }
}

export function goWest() {
  return {
    type: 'GO_WEST',
  }
}

export function pickUp(item) {
  return {
    type: 'PICK_UP',
    item
  }
}

export function pickUpFeature(feature){
  console.log("picking up feature")
  return{
    type:'PICK_UP_FEATURE',
    feature
  }
}