
const fs = require('fs');
const path = require('path');

const translations = {
    "ar": "معرف فريد معين من قبل الشركة المصنعة لطراز SoC أو متغير معين.",
    "bg": "Уникален идентификатор, зададен от производителя на конкретен SoC модел или вариант.",
    "de": "Eine eindeutige Kennung, die vom Hersteller einem bestimmten SoC-Modell oder einer Variante zugewiesen wird.",
    "fr": "Un identifiant unique attribué par le fabricant à un modèle ou une variante SoC spécifique.",
    "hi": "निर्माता द्वारा एक विशिष्ट SoC मॉडल या संस्करण को सौंपा गया एक विशिष्ट पहचानकर्ता।",
    "hu": "A gyártó által egy adott SoC modellhez vagy változathoz rendelt egyedi azonosító.",
    "id": "Pengidentifikasi unik yang diberikan oleh produsen untuk model atau varian SoC tertentu.",
    "km": "អត្តសញ្ញាណតែមួយគត់ដែលត្រូវបានចាត់តាំងដោយក្រុមហ៊ុនផលិតទៅនឹងម៉ូដែល SoC ឬវ៉ារ្យ៉ង់ជាក់លាក់មួយ។",
    "ms": "Pengecam unik yang diberikan oleh pengilang untuk model atau varian SoC tertentu.",
    "pl": "Unikalny identyfikator przypisany przez producenta do konkretnego modelu lub wariantu SoC.",
    "ro": "Un identificator unic atribuit de producător unui anumit model sau variantă de SoC.",
    "ru": "Уникальный идентификатор, присваиваемый производителем конкретной модели или варианту SoC.",
    "tl": "Isang natatanging identifier na itinalaga ng tagagawa sa isang partikular na modelo o variant ng SoC.",
    "vi": "Mã định danh duy nhất do nhà sản xuất gán cho một mẫu SoC hoặc biến thể cụ thể.",
    "zh_MO": "製造商分配給特定 SoC 模型或變體的唯一識別碼。"
};

const localesDir = 'c:/Users/null_rainfield/Desktop/slop/locales';

fs.readdirSync(localesDir).forEach(filename => {
    if (filename.endsWith('.json') && filename !== 'de@informal.json') {
        const langCode = filename.split('.')[0];
        const simpleCode = langCode.split('_')[0];
        const text = translations[langCode] || translations[simpleCode];
        
        if (text) {
            const filePath = path.join(localesDir, filename);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            
            const newData = {};
            let added = false;
            for (const key in content) {
                newData[key] = content[key];
                if (key === 'partNumber') {
                    newData['partNumber_desc'] = text;
                    added = true;
                }
            }
            if (!added) newData['partNumber_desc'] = text;
            
            fs.writeFileSync(filePath, JSON.stringify(newData, null, 4), 'utf8');
            console.log(`Updated ${filename}`);
        }
    }
});
