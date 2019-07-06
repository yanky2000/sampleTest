// let s = 0;
function sum(n) {
    var s = 0;
    if (n === undefined) s;
    
    function ss(n) {
        s = s + n
        console.log(s, n);
        return sum
    }

	// s = s + n;
	return s;
}

const l = sum(1)();
console.log(l);
