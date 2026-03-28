# 🦎 ReptDoc

> **"Chip and stuff. Created by a dude who hates having to search through 4 websites trying to find information."**

ReptDoc is a lightweight, responsive web application serving as a comprehensive database for mobile & desktop SoC (System on Chip) specifications. It eliminates the need to cross-check multiple hardware websites varying in accuracy by providing a single, unified interface for all your silicon data needs.

## ✨ Features
* **Detailed Specifications:** Explore granular details for chips across various manufacturers (Apple, Qualcomm, MediaTek, Exynos, HiSilicon, Unisoc, Google Tensor, and more).
  * *Architecture, Process Nodes, Die Sizes*
  * *CPU Topologies, Frequencies, and L2/L3/SLC Caches*
  * *GPU & NPU (AI Accelerator) Configurations*
  * *Modems & Max Memory Specifications*
* **Side-by-Side Comparisons:** Use the dedicated comparison tool to pit two SoCs directly against each other.
* **Benchmark Scores:** Built-in results for core metrics like *Geekbench 6*, *3DMark Wild Life Extreme*, and *Steel Nomad Lite*.
* **Customizable UI:** Full Dark / Light mode support with personalized accent colors.
* **Search Functionality:** Quickly pinpoint the exact silicon you are looking for.

## 🚀 Running Locally
Because ReptDoc is built as a static client-side web application using HTML, CSS, and Vanilla JavaScript, there are absolutely no build steps or package managers required.
1. Clone the repository: `git clone https://github.com/ReptalicaReborn/reptdoc.git`
2. Open `index.html` in your favorite web browser.
3. Enjoy! (Note: Due to strict browser CORS policies, fetching local `.json` translation files using a `file:///` address may fail on some browsers. Running a simple local live server is recommended).

## 🌍 Translations (Weblate)
ReptDoc fully supports community-driven translations. You don't need to know how to code to help translate the interface! 

Head over to the localization setup connected via **Weblate** or submit a direct Pull Request to the `/locales/` directory.
Currently supported languages out-of-the-box:
- 🇺🇸 English (`en`) 
- 🇻🇳 Tiếng Việt (`vi`)

### Translation Credits 💖
Massive thanks to the awesome community members helping bringing ReptDoc to their local languages!
* *(Your name could be here! Check out our Weblate space to contribute!)*

## 🤝 Contributing
Contributions are highly welcomed, especially when it comes to keeping benchmark scores and specification data accurate. If you notice an error in the data or have newly released chip data to add:
1. Fork the repository
2. Edit `script.js` to modify or add the JSON entries describing the chip data
3. Open a Pull Request!

If you'd like to reach out directly regarding contributions or suggestions, contact **thatReppy** on Discord.

## 📝 License
This project operates under the **MIT License**. Feel free to tinker with it.
