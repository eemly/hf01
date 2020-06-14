function countArea() {
    // catch input values
    let widthValue = parseInt(document.querySelector("input[id='idIsWidth']").value);
    let heightValue = parseInt(document.querySelector("input[name='height']").value);
    
    // calculate
    let area = widthValue * heightValue;

    // modify DOM

    let drawPlaceholder = document.querySelector("div[id='draw-placeholder']");
    let drawPlaceholderStyle = drawPlaceholder.style;
    drawPlaceholderStyle.width = widthValue + 'px'; 
    drawPlaceholderStyle.height = heightValue + 'px';

    let resultPlaceholder = document.querySelector("div[id='result-placeholder']");
    resultPlaceholder.innerHTML = `${widthValue} x ${heightValue} = ${area}`;
}

