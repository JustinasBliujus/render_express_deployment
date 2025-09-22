const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const EMAIL_PATH = "/justinasbliujus_gmail_com";

function gcd(a, b) {
  while (b !== 0n) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  if (a === 0n || b === 0n) return 0n;
  return (a * b) / gcd(a, b);
}

function isNaturalNumberString(s) {
  return typeof s === "string" && /^\d+$/.test(s);
}

app.get("/", (req, res) => {
  res.type("text/plain").send("Deployed!");
});

app.get(EMAIL_PATH, (req, res) => {
  const xStr = req.query.x;
  const yStr = req.query.y;

  if (!isNaturalNumberString(xStr) || !isNaturalNumberString(yStr)) {
    res.type("text/plain").send("NaN");
    return;
  }

  const x = BigInt(xStr);
  const y = BigInt(yStr);

  const result = lcm(x, y);
  res.type("text/plain").send(result.toString());
});

app.listen(port, () => {
  console.log(`started on ${port}`);
});
