// Script to replace all maroon colors with blue colors
// Run this to update all files at once

const replacements = {
    '#800000': '#1e3a8a',  // maroon -> blue
    '#600000': '#1e293b',  // dark maroon -> dark blue  
    '#A00000': '#3b82f6',  // light maroon -> light blue
};

console.log('Color replacement mappings:');
Object.entries(replacements).forEach(([old, newColor]) => {
    console.log(`${old} → ${newColor}`);
});

console.log('\nPlease use find-and-replace in your editor to update all .tsx files with these replacements.');
