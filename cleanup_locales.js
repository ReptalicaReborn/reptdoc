const fs = require('fs');
const path = require('path');

const localesDir = 'c:/Users/null_rainfield/Desktop/slop/locales';
const files = fs.readdirSync(localesDir);

files.forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(localesDir, file);
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const json = JSON.parse(content);
            let changed = false;

            for (const key in json) {
                if (key.startsWith('card_')) {
                    delete json[key];
                    changed = true;
                }
            }

            if (changed) {
                fs.writeFileSync(filePath, JSON.stringify(json, null, 4), 'utf8');
                console.log(`Cleaned ${file}`);
            }
        } catch (e) {
            console.error(`Error processing ${file}:`, e);
        }
    }
});
