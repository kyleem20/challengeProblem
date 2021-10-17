
let bubbles = 0;


let clickUpgrades = {
  smallBag: {
    name: 'Small Bag',
    count: 0,
    price: 3,
    increase: 2,
    multiplier: 1
  },
  largeBag: {
    name: 'Large Bag',
    count: 0,
    price: 5,
    increase: 10,
    multiplier: 1
  }
}

let automaticUpgrades = {
  fish: {
    name: 'Single Fish',
    count: 0,
    price: 15,
    increase: 4,
    multiplier: 2
  },
  schoolFish: {
    name: '5 Fish',
    count: 0,
    price: 50,
    increase: 20,
    multiplier: 4
  },
  mermaid: {
    name: 'Mermaid',
    count: 0,
    price: 100,
    increase: 40,
    multiplier: 15
  }
}


function mine() {
  bubbles++
  // alert(bubbles)
  console.log(bubbles)

  update()
}

function update() {
  document.getElementById('totalBubbles').innerText = `Total Bubbles: ${bubbles}`
}

function draw() {
  let upgradedItem = ''
  for (let key in clickUpgrades) {
    let clickUpgradedto = clickUpgrades[key]
  }
}



function buySmallBag() {

  if (bubbles >= 3) {

    bubbles -= 3
    let totalSmallBags = clickUpgrades['smallBag']
    console.log(totalSmallBags)
    totalSmallBags.count++
    document.getElementById('totalSmallBags').innerText = `Total Small Bags: ${totalSmallBags.count}`
    console.log(bubbles)
  } else {

  }
}

function buyItem() {
  let purchaseItem = 
}