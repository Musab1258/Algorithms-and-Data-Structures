function winningCard(multiArray) {
    let map = new Set();

    multiArray.forEach(item => {
        for (let i = 0; i < item.length; i++) {
            if (map.has(item[i])) {
                map.delete(item[i]);
            } else map.add(item[i])
        }
    })

    if (map.size === 0) return -1

    let highest = 0;
    for (let i of map) {
        if (i > highest) {
            highest = i
        }
    }

    return highest;
}