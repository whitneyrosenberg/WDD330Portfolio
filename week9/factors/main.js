const btn = document.getElementById('rainbow');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change() {      
    document.body.style.background = rainbow[Math.floor(7*
    Math.random())];
}
btn.addEventListener('click', change);


const workerData = new Blob(
	[`function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) =>  a - b);
}

self.addEventListener('message', (event) => {
    const factors = String(factorsOf(Number(event.data)));
    self.postMessage(factors);
    self.close();
}, false);`], {type: "text/javascript"}
	);
const form = document.forms[0];
form.addEventListener('submit', factorize, false);
function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();   
    document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
    const number = Number(form.number.value);
    if(window.Worker) {
        const worker = new Worker(window.URL.createObjectURL(workerData));
        worker.postMessage(number);
        worker.addEventListener('message', (event) => {
        document.getElementById('output').innerHTML = event.data;
        }, false);
    }
}
