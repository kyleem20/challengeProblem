
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
  mermaid: {
    name: 'Mermaid',
    count: 0,
    price: 100000,
    increase: 400,
    multiplier: 10
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
    let fishIncrease = totalFish.count * totalFish.price
    bubbles -= fishIncrease
    increaseofFish = (increaseofFish * costMultiplier)

    let bubblesIncrease = totalFish.count * totalFish.multiplier
    // console.log('count', totalFish.count)
    // console.log('bubble increase', bubbleIncrease)

    document.getElementById('totalFish').innerText = `Total Fish: ${totalFish.count}`
    document.getElementById('buyFish').innerText = `Fish: ${increaseofFish} Bubbles (+${bubblesIncrease + 40} every 3 seconds)`
    setInterval(drawAutos, 3000)

    drawAutos()
    update()
    update2()
  } else {

  }
}

function buyMermaid() {

  let totalMermaid = automaticUpgrades['mermaid']
  let increaseofMermaid = ((totalMermaid.count + 1) * totalMermaid.price)
  console.log('Mermaid increase', increaseofMermaid)

  if (bubbles >= increaseofMermaid) {

    totalMermaid.count++
    let MermaidIncrease = totalMermaid.count * totalMermaid.price
    bubbles -= MermaidIncrease
    increaseofMermaid = (increaseofMermaid * costMultiplier)

    let bubblesIncrease = totalMermaid.count * totalMermaid.multiplier
    // console.log('count', totalMermaid.count)
    // console.log('bubble increase', bubbleIncrease)

    document.getElementById('totalMermaid').innerText = `Total Mermaid: ${totalMermaid.count}`
    document.getElementById('buyMermaid').innerText = `Mermaid: ${increaseofMermaid} Bubbles (+${bubblesIncrease + 40} every 3 seconds)`
    setInterval(drawAutos, 3000)

    drawAutos()
    update()
    update2()
  } else {

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

function drawAutos() {
  for (let key in automaticUpgrades) {
    let itemUpgraded = automaticUpgrades[key]
    multiplierIncreased = itemUpgraded.multiplier * itemUpgraded.count * itemUpgraded.increase
    // bubbleIncrease += multiplierIncreased
    bubbleIncrease += itemUpgraded.increase
    bubbles += itemUpgraded.increase
    update()
  }
  console.log(bubbles)
}
