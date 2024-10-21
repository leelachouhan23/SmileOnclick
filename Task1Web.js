// function changeHeading(){
//     var heading = document.getElementById("Nav");
//     heading.src = "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093"
//     heading.style.src = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";
// }




function changeHeading() {
    var heading = document.getElementById("Nav");
    // If "Nav" is an <img> element, change its source like this:
    heading.src = "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
    
    // If "Nav" is a heading (e.g., <h1>), you might want to change its background image:
    // heading.style.backgroundImage = "url('https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png')";
    
    // Alternatively, if you meant to change an image within the heading, you need to target the image inside the heading:
    var imageInHeading = heading.querySelector("img");
    if (imageInHeading) {
        imageInHeading.src = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";
    }
}
