export function getUniqueMechanics(data) {
  let mechanics = new Array();
  Object.keys(data).map(function (key, index) {
    data[key].map((item) => {
      if (item.mechanics) {
        item.mechanics.forEach((element) => {
          mechanics.push(element.name);
        });
      }
    });
  });

  mechanics = [...new Set(mechanics)];

  return mechanics;
}

export function getCardsByMechanic(cards, mechanic) {
  let cardsByMechanics = new Array();
  Object.keys(cards).map(function (key, index) {
    cards[key].map((item) => {
      if (item.mechanics) {
        item.mechanics.forEach((element) => {
          if (element.name == mechanic) {
            cardsByMechanics.push(item);
          }
        });
      }
    });
  });
  return cardsByMechanics;
}
