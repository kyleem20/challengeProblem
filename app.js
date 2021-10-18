
let bubbles = 0;
let bubbleIncrease = 1
let cost = 3
let costMultiplier = 2
let collecting = 3

let clickUpgrades = {
  smallBag: {
    name: 'Small Bag',
    count: 0,
    price: 3,
    multiplier: 1
  },
  largeBag: {
    name: 'Large Bag',
    count: 0,
    price: 5,
    multiplier: 1
  }
}

let automaticUpgrades = {
  fish: {
    name: 'Single Fish',
    count: 0,
    price: 150,
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
    price: 1000,
    increase: 40,
    multiplier: 15
  }
}


function mine() {
  bubbles += bubbleIncrease
  // alert(bubbles)
  console.log(bubbles)

  update()
}

function update() {
  document.getElementById('totalBubbles').innerText = `Total Bubbles: ${bubbles}`

}

function update2() {
  document.getElementById('totalBubbleIncrease').innerText = `Total Additional Bubbles Collected: ${bubbleIncrease}`
}

function buySmallBag() {
  let totalSmallBags = clickUpgrades['smallBag']

  let increaseofSmallBags = (totalSmallBags.count + 1) * totalSmallBags.price
  console.log('increase', increaseofSmallBags)
  if (bubbles >= increaseofSmallBags) {

    totalSmallBags.count++
    let newIncreaseSmallBag = totalSmallBags.count + 1
    bubbles -= increaseofSmallBags
    increaseofSmallBags = (increaseofSmallBags * costMultiplier)


    document.getElementById('totalSmallBags').innerText = `Total Small Bags: ${totalSmallBags.count}`
    document.getElementById('buySmallBags').innerText = `Small Bag: ${increaseofSmallBags} Bubbles (+${newIncreaseSmallBag + 2})`
    bubbleIncrease += newIncreaseSmallBag
    update()
    update2()
  } else {

  }

}

function buyLargeBag() {
  let totalLargeBags = clickUpgrades['largeBag']

  let increaseofLargeBags = ((totalLargeBags.count + 1) * totalLargeBags.price)
  console.log('increase', increaseofLargeBags)
  if (bubbles >= increaseofLargeBags) {

    totalLargeBags.count++
    let newIncreaseLargeBag = totalLargeBags.count + 2
    bubbles -= increaseofLargeBags
    increaseofLargeBags = (increaseofLargeBags * costMultiplier)
    document.getElementById('totalLargeBags').innerText = `Total Large Bags: ${totalLargeBags.count}`
    document.getElementById('buyLargeBags').innerText = `Large Bag: ${increaseofLargeBags} Bubbles (+${newIncreaseLargeBag + 3})`
    bubbleIncrease += newIncreaseLargeBag
    update()
    update2()
  } else {

  }

}


function buyFish() {
  let totalFish = automaticUpgrades['fish']
  let increaseofFish = ((totalFish.count + 1) * totalFish.price)
  console.log('fish increase', increaseofFish)

  if (bubbles >= increaseofFish) {

    totalFish.count++
    bubbles -= increaseofFish
    increaseofFish = (increaseofFish * costMultiplier)

    bubbleIncrease = increaseofFish + totalFish.multiplier
    console.log('count', totalFish.count)
    console.log('bubble increase', bubbleIncrease)

    document.getElementById('totalFish').innerText = `Total Fish: ${totalFish.count}`
    document.getElementById('buyFish').innerText = `Fish: ${increaseofFish} Bubbles`
    collecting = 3
    update()
    console.log(bubbles)
  } else {

  }
}

function buyMermaid() {
  let totalMermaid = automaticUpgrades['Mermaid']
  let increaseofMermaid = ((totalMermaid.count + 1) * totalMermaid.price)
  console.log('Mermaid increase', increaseofMermaid)

  if (bubbles >= increaseofMermaid) {

    totalMermaid.count++
    bubbles -= increaseofMermaid
    increaseofMermaid = (increaseofMermaid * costMultiplier)

    bubbleIncrease = increaseofMermaid + totalMermaid.multiplier
    console.log('count', totalMermaid.count)
    console.log('bubble increase', bubbleIncrease)

    document.getElementById('totalMermaid').innerText = `Total Mermaid: ${totalMermaid.count}`
    document.getElementById('buyMermaid').innerText = `Mermaid: ${increaseofMermaid} Bubbles`
    collecting = 3
    update()
    console.log(bubbles)
  } else {

  }
  let interval = setInterval(3000)
  collecting--
  if (automaticUpgrades['Mermaid'].count > 0) {
    if (collecting < 0) {
      bubbles += automaticUpgrades['Mermaid'].increase
    } else {

    }
  }
}



function draw() {

  // for (let key in clickUpgrades) {
  //   let upgradedTo = clickUpgrades[key];
  //   if (upgradedTo.name) {
  //     let upgradedItem = upgradedTo.name
  //   }

  // }
}

// function purchasedItem() {
//   for (let key in clickUpgrades) {
//     var upgradedTo = clickUpgrades[key]
//   }
//   let upgradedItem = upgradedTo[key]
//   let increaseofItem = ((upgradedItem.count + 1) * upgradedItem.price)
//   console.log('increase', increaseofItem)
//   if (bubbles >= increaseofItem) {

//     upgradedItem.count++
//     bubbles -= increaseofItem
//     increaseofItem = (increaseofItem * costMultiplier)

//     bubbleIncrease = increaseofItem + upgradedItem.multiplier
//     console.log('count', upgradedItem.count)
//     console.log('bubble increase', bubbleIncrease)


//     console.log(bubbles)
//   } else {

//   }
//   updateDraw()
// }


// function buyItem() {
//   let purchaseItem = 
// }

function drawAutos() {
  for (increase in automaticUpgrades) {


  }
  console.log(bubbles)
}

setInterval(drawAutos, 3000)