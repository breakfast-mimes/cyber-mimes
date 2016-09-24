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