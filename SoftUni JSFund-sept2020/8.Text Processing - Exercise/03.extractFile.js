function words(string) {
    let words = string.split('\\')
    let fileIndex = words.length - 1;
    let file = words[fileIndex];
    let lastIndexDot = file.lastIndexOf('.');
    let extension = file.substring(lastIndexDot + 1);
    let fileName = file.substring(0, lastIndexDot)
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}