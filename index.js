const generateBtnEl = document.getElementById('generateBtn');

const singleHexColorGenerator = ()=>{
    const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];
    }
    return hexColor;
};

const colorPaletteGenerator = ()=>{
    const colorPalette = [];
    for(let i=0;i<4;i++){
        colorPalette.push(singleHexColorGenerator());
    }
    return colorPalette;
}

const renderColorPalette = ()=>{
    const colorsContainer = document.querySelector('.colors_container');
    colorsContainer.innerHTML = "";

    const colorPalette = colorPaletteGenerator();
    colorPalette.forEach((color,idx)=>{
        const colorDiv = document.createElement('div');
        colorDiv.id = `color${idx+1}`;
        colorDiv.className = "colorBox";
        colorDiv.style.backgroundColor = color;

        const colorTag = document.createElement('p');
        colorTag.id = `color${idx+1}Tag`;
        colorTag.className = 'colorTag';
        colorTag.innerHTML = color;
        colorDiv.appendChild(colorTag);
        colorsContainer.appendChild(colorDiv);
    });

    const copytoClipBoard = (id) => {
        const el = document.getElementById(id);

        navigator.clipboard
          .writeText(el.innerText)
          .then(() => {
            alert("Copied to clipboard");
          })
          .catch((error) => {
            alert("Could not copy");
          });
      };

    const colorTags = document.querySelectorAll('.colorTag');
    colorTags.forEach((colorTag, idx)=>{
        colorTag.addEventListener('click',()=>
            copytoClipBoard(`color${idx+1}Tag`));
    });
};
renderColorPalette();
generateBtnEl.addEventListener('click', renderColorPalette);