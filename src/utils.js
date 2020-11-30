//function to turn monsters' names to snake case
export function toSnakeCase(string) {
    if (string)
    return (string
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_'));
}

//create an object where key is the image's name and value is a module containing the path
function importAll(r) {
    let images = {};
    r.keys().map((item, i) => { images[item.replace('./', '')] = r(item); });
    return images;
}

//import images in the folder thumbnails making use of webpack functionalities
export const thumbnails = importAll(require.context('./thumbnails', false, /\.(png|jpe?g|svg)$/));

//import images in the folder images making use of webpack functionalities
export const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

//import images in the folder weaknesses making use of webpack functionalities
export const weaknesses = importAll(require.context('./weaknesses', false, /\.(png|jpe?g|svg)$/));