
function array_callbacks() {

    const gold_bricks = [];

    for (let i = 0; i < 100; ++i) {
        const gold = {
            weight: Math.floor(Math.random() * 10) + 1,
            width: Math.floor(Math.random() * 10) + 1,
            height: Math.floor(Math.random() * 10) + 1,
            depth: Math.floor(Math.random() * 10) + 1,
        }
        gold_bricks.push(gold);
    }

    let result = gold_bricks.filter(gold => gold.weight > 5);
    console.log(result);

    //* just golds with volumes over 100
    gold_bricks.filter(g => (g.width * g.height) * g.depth > 100)
        .map(g => JSON.stringify(g))
        .forEach(g => document.write(g + "<br>"));

    document.write("<hr>");


    //* just volumes with weight under 5
    gold_bricks.filter(g => g.weight < 5)
        .map(g => (g.width * g.height) * g.depth)
        .forEach(v => document.write(v + "<br>"));


}

array_callbacks();