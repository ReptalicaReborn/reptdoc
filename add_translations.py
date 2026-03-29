
import json
import os

translations = {
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
}

locales_dir = r'c:\Users\null_rainfield\Desktop\slop\locales'

for filename in os.listdir(locales_dir):
    if filename.endswith('.json') and filename != 'de@informal.json':
        lang_code = filename.split('.')[0]
        # Some are like hi_Latn, extract prefix
        simple_code = lang_code.split('_')[0]
        
        text = translations.get(lang_code) or translations.get(simple_code)
        if text:
            file_path = os.path.join(locales_dir, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                try:
                    data = json.load(f)
                except json.JSONDecodeError:
                    continue
            
            # Place after partNumber
            if "partNumber" in data:
                # To maintain order (dict in 3.7+ is ordered)
                new_data = {}
                for k, v in data.items():
                    new_data[k] = v
                    if k == "partNumber":
                        new_data["partNumber_desc"] = text
                data = new_data
            else:
                data["partNumber_desc"] = text
                
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            print(f"Updated {filename}")
