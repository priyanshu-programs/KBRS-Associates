const fs = require('fs');
let c = fs.readFileSync('components/Footer.tsx', 'utf8');

c = c.replace(/"use client";\r?\n\r?\n"use client";\r?\n/, '"use client";\n');
c = c.replace(/import { motion } from "framer-motion";\r?\nimport { motion } from "framer-motion";\r?\n/, 'import { motion } from "framer-motion";\n');

fs.writeFileSync('components/Footer.tsx', c);
