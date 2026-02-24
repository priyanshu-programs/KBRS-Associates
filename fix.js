const fs = require('fs');
let c = fs.readFileSync('c:\\Users\\rijup\\OneDrive\\Documents\\1abcd- CLIENT WORK\\KBRS\\components\\Footer.tsx', 'utf8');

c = c.replace('import Image from "next/image";\r\nimport { Instagram, Twitter, Facebook } from "lucide-react";', '"use client";\r\n\r\nimport Image from "next/image";\r\nimport { Instagram, Twitter, Facebook } from "lucide-react";\r\nimport { motion } from "framer-motion";');

// Let's use regex that allows \r?\n so it works regardless of endings
c = c.replace(/import Image from "next\/image";\r?\nimport { Instagram, Twitter, Facebook } from "lucide-react";/g, '"use client";\n\nimport Image from "next/image";\nimport { Instagram, Twitter, Facebook } from "lucide-react";\nimport { motion } from "framer-motion";');

c = c.replace(/KBRS & ASSOCIATES/g, 'KBRS AND ASSOCIATES.');

const tsOld = /className="flex w-max"\r?\n\s*style={{ animation: 'ticker 40s linear infinite' }}\r?\n\s*>/;
const tsNew = `className="flex w-max"
                    initial={{ x: 0 }}
                    whileInView={{ x: "calc(-100% / 4)" }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                >`;

c = c.replace(tsOld, tsNew);

c = c.replace(/<div\r?\n\s*className="flex w-max"/, '<motion.div\n                    className="flex w-max"');
c = c.replace(/<\/div>\r?\n\s*<\/div>\r?\n\s*{\/\* Inline styles for the animation since standard Tailwind v4 might need it configured in globals \*\//, '</motion.div>\n            </div>\n            {/* Inline styles for the animation since standard Tailwind v4 might need it configured in globals */');

fs.writeFileSync('c:\\Users\\rijup\\OneDrive\\Documents\\1abcd- CLIENT WORK\\KBRS\\components\\Footer.tsx', c);
