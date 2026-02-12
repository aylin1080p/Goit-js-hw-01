function getElementWidth(content, padding, border) {

    const contentW = parseFloat(content);
    const paddingW = parseFloat(padding);
    const borderW = parseFloat(border);

    const total = paddingW * 2 + borderW * 2 + contentW;

    return total;
}




function runHomework3() {
    console.log(getElementWidth("50px", "8px", "4px")); // 74
    console.log(getElementWidth("60px", "12px", "8.5px")); // 101
    console.log(getElementWidth("200px", "0px", "0px")); // 200

}
