const fs = require('fs');
let c = fs.readFileSync('components/Footer.tsx', 'utf8');

const target = `                    animate={{ x: ["0%", "-25%"] }}\r?\n\\s*transition={{`;
const replacement = `                    initial={{ x: "0%" }}\n                    whileInView={{ x: ["0%", "-25%"] }}\n                    viewport={{ once: false, amount: 0.1 }}\n                    transition={{`;
c = c.replace(new RegExp(target), replacement);

fs.writeFileSync('components/Footer.tsx', c);
