function dest(string) {
    let pattern = /([=|\/])[A-Z][A-Za-z]{2,}\1/g;
    let points = 0;
    let result = [];
    let matches = string.match(pattern);
    if (matches != null) {
        for (let destination of matches) {
            let dest = destination.slice(1, -1);
            points += dest.length;
            result.push(dest);
        }
    }
    console.log(`Destinations: ${result.join(', ')} `);
    console.log(`Travel Points: ${points}`);
}

dest('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
dest('ThisIs some InvalidInput');