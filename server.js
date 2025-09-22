const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

const EMAIL_PATH = "/justinasbliujus_gmail_com";

function gcd(a, b) {
    for (let temp = b; b !== 0;) {
        b = a % b;
        a = temp;
        temp = b;
    }
    return a;
}

function lcm(a, b) {
    const gcdValue = gcd(a, b);
    return (a * b) / gcdValue;
}

function isNaturalNumber(n) {
  return Number.isInteger(n) && n > 0;
}

app.get(EMAIL_PATH, (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
    res.type("text/plain").send("NaN");
    return;
  }

  const result = lcm(x, y);
  res.type("text/plain").send(String(result));
});


app.listen(port, () => {
    console.log('started on 8080')
})

