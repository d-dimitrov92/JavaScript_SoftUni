function solve(arg1, arg2, arg3) {
    let flowerType = arg1;
    let flowers = Number(arg2);
    let season = arg3;
    let totalHoney = 0;

    switch (flowerType) {
        case "Sunflower": {
            switch (season) {
                case "Spring": totalHoney += 10 * flowers; break;
                case "Summer": totalHoney += 8 * flowers * 1.10; break;
                case "Autumn": totalHoney += 12 * flowers * 0.95; break;
            }
        }break;
        case "Daisy": {
            switch (season) {
                case "Spring": totalHoney += 12 * flowers * 1.10; break;
                case "Summer": totalHoney += 8 * flowers * 1.10; break;
                case "Autumn": totalHoney += 6 * flowers * 0.95; break;
            }
        } break;
        case "Lavender": {
            switch (season) {
                case "Spring": totalHoney += 12 * flowers; break;
                case "Summer": totalHoney += 8 * flowers * 1.10; break;
                case "Autumn": totalHoney += 6 * flowers * 0.95; break;
            }
        }break;
        case "Mint": {
            switch (season) {
                case "Spring": totalHoney += 10 * flowers * 1.10; break;
                case "Summer": totalHoney += 12 * flowers * 1.10; break;
                case "Autumn": totalHoney += 6 * flowers * 0.95; break;
            }
        }break;
    }
    console.log(`Total honey harvested: ${totalHoney.toFixed(2)}`)
}
solve(
    "Daisy",
    "15",
    "Spring"
)