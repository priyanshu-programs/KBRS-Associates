const fs = require('fs');
let content = fs.readFileSync('components/Footer.tsx', 'utf8');
content = content.replace(/whileInView={{ x: "calc\(-100% \/ 4\)" }}/g, 'animate={{ x: ["0%", "-25%"] }}');
fs.writeFileSync('components/Footer.tsx', content);
