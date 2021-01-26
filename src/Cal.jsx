//cal.jsx
function add(a, b) {
    let add = a + b;
    return add;
}
function sub(a, b) {
    let sub = a - b;
    return sub;
}
function mul(a, b) {
    let add = a * b;
    return add;
}
function div(a, b) {
    let div = a / b;
    div = div.toFixed(2);
    return div;
}

export { add, sub, mul,div };
