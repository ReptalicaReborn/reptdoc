const aSeriesData = [
    {
        name: "A19 Pro",
        geekbench6: { single: "4019", multi: "11054" },
        wildlifeExtreme: "6557",
        steelNomadLite: "3004",
        codename: "Thera",
        partNumber: "APL1V12 / T8150",
        releaseDate: "2025.09",
        process: "TSMC N3P (3nm)",
        dieSize: "98.69 mm²",
        cpu: {
            specs: "2x 4.26 GHz (Everest V4) + 4x 2.59 GHz (Sawtooth V4)",
            l2Cache: "16 MB (P-Core) + 6 MB (E-Core)"
        },
        slc: "32 MB",

        memory: "LPDDR5X-8533/9600",
        gpu: "Apple 6-core (G18P) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (Gen 8)",
        architecture: "64-bit ARMv9.x-A"
    },
    {
        name: "A19",
        geekbench6: { single: "3849", multi: "10307" },
        wildlifeExtreme: "5736",
        steelNomadLite: "2598",
        codename: "Tilos",
        partNumber: "APL1V12 / T8150",
        releaseDate: "2025.09",
        process: "TSMC N3P (3nm)",
        dieSize: "83 mm²",
        cpu: {
            specs: "2x 4.26 GHz (Everest V4) + 4x 2.59 GHz (Sawtooth V4)",
            l2Cache: "8 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "12 MB",
        memory: "LPDDR5X-8533",
        gpu: "Apple 5-core (G18P) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (35 TOPS)",
        architecture: "64-bit ARMv9.2-A"
    },
    {
        name: "A18 Pro",
        geekbench6: { single: "3429", multi: "8790" },
        wildlifeExtreme: "5148",
        steelNomadLite: "2132",
        codename: "Tahiti",
        partNumber: "APL1V07 / T8140",
        releaseDate: "2024.09",
        process: "TSMC N3E (3nm)",
        dieSize: "109.72 mm²",
        cpu: {
            specs: "2x 4.04 GHz (Everest V3) + 4x 2.44 GHz (Sawtooth V3)",
            l2Cache: "16 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "24 MB",
        memory: "LPDDR5X-7500",
        gpu: "Apple 6-core (G17P) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (35 TOPS)",
        architecture: "64-bit ARMv9.2-A"
    },
    {
        name: "A18",
        geekbench6: { single: "3300", multi: "8000" },
        wildlifeExtreme: "4500",
        codename: "Tupai",
        partNumber: "APL1V08 / T8140",
        releaseDate: "2024.09",
        process: "TSMC N3E (3nm)",
        dieSize: "92.43 mm²",
        cpu: {
            specs: "2x 4.04 GHz (Everest V3) + 4x 2.20 GHz (Sawtooth V3)",
            l2Cache: "8 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "12 MB",
        memory: "LPDDR5X-7500",
        gpu: "Apple 5-core (G17P) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (35 TOPS)",
        architecture: "64-bit ARMv9.2-A"
    },
    {
        name: "A17 Pro",
        geekbench6: { single: "2950", multi: "7258" },
        wildlifeExtreme: "4389",
        codename: "Coll",
        partNumber: "APL1V02 / T8130",
        releaseDate: "2023.09",
        process: "TSMC N3B (3nm)",
        dieSize: "103.8 mm²",
        cpu: {
            specs: "2x 3.78 GHz (Everest) + 4x 2.11 GHz (Sawtooth)",
            l2Cache: "16 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "24 MB",
        memory: "LPDDR5-6400",
        gpu: "Apple 6-core (G16P) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (35 TOPS)",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "A16 Bionic",
        geekbench6: { single: "2560", multi: "6450" },
        wildlifeExtreme: "3360",
        codename: "Crete",
        partNumber: "APL1W10 / T8120",
        releaseDate: "2022.09",
        process: "TSMC N4 (4nm)",
        dieSize: "115.4 mm²",
        cpu: {
            specs: "2x 3.46 GHz (Everest) + 4x 2.02 GHz (Sawtooth)",
            l2Cache: "16 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "24 MB",
        memory: "LPDDR5-6400",
        gpu: "Apple 5-core (G15P)",
        npu: "16-core Neural Engine (17 TOPS)",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "A15 Bionic",
        geekbench6: { single: "2340", multi: "5800" },
        wildlifeExtreme: "2960",
        codename: "Ellis",
        partNumber: "APL1W07 / T8110",
        releaseDate: "2021.09",
        process: "TSMC N5P (5nm)",
        dieSize: "107.7 mm²",
        cpu: {
            specs: "2x 3.23 GHz (Avalanche) + 4x 2.01 GHz (Blizzard)",
            l2Cache: "12 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "32 MB",
        memory: "LPDDR4X-4266",
        gpu: "Apple 5-core (G14P)",
        npu: "16-core Neural Engine (15.8 TOPS)",
        architecture: "64-bit ARMv8.5-A"
    },
    {
        name: "A14 Bionic",
        geekbench6: { single: "2120", multi: "5000" },
        wildlifeExtreme: "2180",
        codename: "Sicily",
        partNumber: "APL1W01 / T8101",
        releaseDate: "2020.09",
        process: "TSMC N5 (5nm)",
        dieSize: "88.0 mm²",
        cpu: {
            specs: "2x 3.09 GHz (Firestorm) + 4x 1.82 GHz (Icestorm)",
            l2Cache: "8 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "16 MB",
        memory: "LPDDR4X-4266",
        gpu: "Apple 4-core (G13P)",
        npu: "16-core Neural Engine (11 TOPS)",
        architecture: "64-bit ARMv8.4-A"
    },
    {
        name: "A13 Bionic",
        geekbench6: { single: "1750", multi: "4200" },
        wildlifeExtreme: "1884",
        codename: "Cebu",
        partNumber: "APL1W85 / T8030",
        releaseDate: "2019.09",
        process: "TSMC N7P (7nm+)",
        dieSize: "98.48 mm²",
        cpu: {
            specs: "2x 2.65 GHz (Lightning) + 4x 1.73 GHz (Thunder)",
            l2Cache: "8 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "16 MB",
        memory: "LPDDR4X-4266",
        gpu: "Apple 4-core (G12P)",
        npu: "8-core Neural Engine (6 TOPS)",
        architecture: "64-bit ARMv8.4-A"
    },
    {
        name: "A12 Bionic",
        geekbench6: { single: "1480", multi: "3300" },
        wildlifeExtreme: "1414",
        codename: "Cyprus",
        partNumber: "APL1W81 / T8020",
        releaseDate: "2018.09",
        process: "TSMC N7 (7nm)",
        dieSize: "83.27 mm²",
        cpu: {
            specs: "2x 2.49 GHz (Vortex) + 4x 1.59 GHz (Tempest)",
            l2Cache: "8 MB (P-Core) + 2 MB (E-Core)"
        },
        slc: "8 MB",
        memory: "LPDDR4X-4266",
        gpu: "Apple 4-core (G11P)",
        npu: "8-core Neural Engine (5 TOPS)",
        architecture: "64-bit ARMv8.3-A"
    },
    {
        name: "A12X / A12Z Bionic",
        geekbench6: { single: "1490", multi: "4800" },
        wildlifeExtreme: "2100",
        codename: "Vortex / Tempest",
        partNumber: "APL1083 (X) / APL1087 (Z)",
        releaseDate: "2018.10 / 2020.03",
        process: "TSMC N7 (7nm)",
        dieSize: "122 mm²",
        cpu: {
            specs: "8-core (4x 2.49 GHz Vortex + 4x 1.59 GHz Tempest)",
            l2Cache: "8 MB (P-Core) + 2 MB (E-Core)"
        },
        slc: "8 MB",
        memory: "LPDDR4X-4266",
        gpu: "Apple 7-core (X) / 8-core (Z)",
        npu: "8-core Neural Engine (5 TOPS)",
        architecture: "64-bit ARMv8.3-A"
    },
    {
        name: "A11 Bionic",
        codename: "Skye",
        partNumber: "APL1W72 / T8015",
        releaseDate: "2017.09",
        process: "TSMC 10FF (10nm)",
        dieSize: "87.66 mm²",
        cpu: {
            specs: "2x 2.39 GHz (Monsoon) + 4x 1.19 GHz (Mistral)",
            l2Cache: "8 MB (P-Core)"
        },
        slc: "4 MB",
        memory: "LPDDR4X-4266",
        gpu: "Apple 3-core (G10P)",
        npu: "2-core Neural Engine (0.6 TOPS)",
        architecture: "64-bit ARMv8.2-A"
    },
    {
        name: "A10X Fusion",
        geekbench6: { single: "950", multi: "2100" },
        wildlifeExtreme: "1135",
        codename: "Myst",
        partNumber: "APL1071 / T8011",
        releaseDate: "2017.06",
        process: "TSMC 10nm FinFET",
        dieSize: "96.4 mm²",
        cpu: {
            specs: "6-core (3x 2.38 GHz Hurricane + 3x 1.3 GHz Zephyr)",
            l2Cache: "8 MB"
        },
        slc: "N/A (8 MB L2 Cache)",
        memory: "LPDDR4-3200",
        gpu: "PowerVR GT7600 Plus (12-core)",
        npu: "N/A",
        architecture: "64-bit ARMv8.1-A"
    },
    {
        name: "A10 Fusion",
        codename: "Cayman",
        partNumber: "APL1W24 / T8010",
        releaseDate: "2016.09",
        process: "TSMC 16FFC (16nm)",
        dieSize: "125 mm²",
        cpu: {
            specs: "2x 2.34 GHz (Hurricane) + 2x 1.05 GHz (Zephyr)",
            l2Cache: "3 MB"
        },
        slc: "N/A",
        memory: "LPDDR4-3200",
        gpu: "PowerVR GT7600 Plus (6-core)",
        npu: "N/A",
        architecture: "64-bit ARMv8.1-A"
    },
    {
        name: "A9X",
        codename: "Elba",
        partNumber: "APL1021 / S8001",
        releaseDate: "2015.11",
        process: "TSMC 16nm FinFET+",
        dieSize: "147 mm²",
        cpu: {
            specs: "2-core (2.26 GHz Twister)",
            l2Cache: "3 MB"
        },
        slc: "N/A (No L3/SLC present)",
        memory: "LPDDR4-3200",
        gpu: "PowerVR Series 7XT (12-core)",
        npu: "N/A",
        architecture: "64-bit ARMv8-A"
    },
    {
        name: "A9",
        codename: "Maui",
        partNumber: "APL0898 (Samsung) / APL1022 (TSMC)",
        releaseDate: "2015.09",
        process: "Samsung 14nm LPE / TSMC 16nm FinFET",
        dieSize: "96 mm² (Samsung) / 104.5 mm² (TSMC)",
        cpu: {
            specs: "2x 1.85 GHz (Twister)",
            l2Cache: "3 MB"
        },
        slc: "N/A",
        memory: "LPDDR4-3200",
        gpu: "PowerVR GT7600 (6-core)",
        npu: "N/A",
        architecture: "64-bit ARMv8-A"
    },
    {
        name: "A8X",
        codename: "Capri",
        partNumber: "APL1012 / T7001",
        releaseDate: "2014.10",
        process: "TSMC 20nm HKMG",
        dieSize: "128 mm²",
        cpu: {
            specs: "3-core (1.5 GHz Typhoon)",
            l2Cache: "2 MB"
        },
        slc: "4 MB (L3 Cache)",
        memory: "LPDDR3-1600",
        gpu: "PowerVR GXA6850 (8-core)",
        npu: "N/A",
        architecture: "64-bit ARMv8-A"
    },
    {
        name: "A8",
        codename: "Fiji",
        partNumber: "APL1011 / T7000",
        releaseDate: "2014.09",
        process: "TSMC 20nm HKMG",
        dieSize: "89 mm²",
        cpu: {
            specs: "2x 1.4 GHz (Typhoon)",
            l2Cache: "1 MB"
        },
        slc: "N/A",
        memory: "LPDDR3-1600",
        gpu: "PowerVR GX6450 (4-core)",
        npu: "N/A",
        architecture: "64-bit ARMv8-A"
    },
    {
        name: "A7",
        codename: "Alcatraz",
        partNumber: "APL0698 / S5L8960",
        releaseDate: "2013.09",
        process: "Samsung 28nm HKMG",
        dieSize: "102 mm²",
        cpu: {
            specs: "2x 1.3 GHz (Cyclone)",
            l2Cache: "1 MB"
        },
        slc: "N/A",
        memory: "LPDDR3-1600",
        gpu: "PowerVR G6430 (4-core)",
        npu: "N/A",
        architecture: "64-bit ARMv8-A (First 64-bit Mobile SoC)"
    },
    {
        name: "A6X",
        codename: "H5G",
        partNumber: "APL5598 / S5L8955",
        releaseDate: "2012.11",
        process: "Samsung 32nm HKMG",
        s: "N/A",
        dieSize: "123 mm²",
        cpu: {
            specs: "2-core (1.4 GHz Swift)",
            l2Cache: "1 MB"
        },
        slc: "N/A",
        memory: "LPDDR2-1066",
        gpu: "PowerVR SGX554MP4 (4-core)",
        npu: "N/A",
        architecture: "32-bit ARMv7s"
    },
    {
        name: "A6",
        codename: "Bali",
        partNumber: "APL0598 / S5L8950",
        releaseDate: "2012.09",
        process: "Samsung 32nm HKMG",
        dieSize: "96.7 mm²",
        cpu: {
            specs: "2x 1.3 GHz (Swift)",
            l2Cache: "1 MB"
        },
        slc: "N/A",
        memory: "LPDDR2-1066",
        gpu: "PowerVR SGX543MP3 (3-core)",
        npu: "N/A",
        architecture: "32-bit ARMv7s"
    },
    {
        name: "A5X",
        codename: "S5L8945",
        partNumber: "APL5498 / S5L8945",
        releaseDate: "2012.03",
        process: "Samsung 45nm LP",
        s: "N/A",
        dieSize: "165 mm²",
        cpu: {
            specs: "2-core (1.0 GHz Cortex-A9)",
            l2Cache: "1 MB"
        },
        slc: "N/A",
        memory: "LPDDR2-800",
        gpu: "PowerVR SGX543MP4 (4-core)",
        npu: "N/A",
        architecture: "32-bit ARMv7"
    },
    {
        name: "A5",
        codename: "N/A",
        partNumber: "APL0498 / S5L8940",
        releaseDate: "2011.03",
        process: "Samsung 45nm / 32nm",
        dieSize: "122 mm² (45nm) / 69 mm² (32nm)",
        cpu: {
            specs: "2x 0.8-1.0 GHz (ARM Cortex-A9)",
            l2Cache: "1 MB"
        },
        slc: "N/A",
        memory: "LPDDR2-800",
        gpu: "PowerVR SGX543MP2 (2-core)",
        npu: "N/A",
        architecture: "32-bit ARMv7"
    },
    {
        name: "A4",
        codename: "N/A",
        partNumber: "APL0398 / S5L8930",
        releaseDate: "2010.04",
        process: "Samsung 45nm",
        dieSize: "53.3 mm²",
        cpu: {
            specs: "1x 0.8-1.0 GHz (ARM Cortex-A8)",
            l2Cache: "512 KB"
        },
        slc: "N/A",
        memory: "LPDDR-400",
        gpu: "PowerVR SGX535",
        npu: "N/A",
        architecture: "32-bit ARMv7"
    }
];

const mSeriesData = [
    {
        name: "M5 Max",
        codename: "Unknown",
        partNumber: "T6051",
        releaseDate: "2026.03",
        process: "TSMC N3P (3nm)",
        dieSize: "Unknown",
        geekbench6: { single: "4268", multi: "29216" },
        wildlifeExtreme: "43222",
        steelNomadLite: "17853",
        cpu: {
            specs: "6x 4.61 GHz pCore + 12x 4.38 GHz mCore",
            l2Cache: "12x 1MB (P-core private) + 16 MB (P-Core shared) + 16 MB (E-Core)"
        },
        slc: "48 MB",
        gpu: "Apple 40-core (G17C Family)",
        npu: "16-core Neural Engine (Gen 10)",
        memory: "512-bit LPDDR5X-9600",
        architecture: "64-bit ARMv9.x-A"
    },
    {
        name: "M5 Pro",
        codename: "Unknown",
        partNumber: "T6050",
        releaseDate: "2026.03",
        process: "TSMC N3P (3nm)",
        dieSize: "Unknown",
        geekbench6: { single: "4295", multi: "28436" },
        wildlifeExtreme: "23757",
        steelNomadLite: "10018",
        cpu: {
            specs: "6x 4.61 GHz pCore + 12x 4.38 GHz mCore",
            l2Cache: "12x 1MB (P-core private) + 16 MB (P-Core shared) + 16 MB (E-Core)"
        },
        slc: "24 MB",
        gpu: "Apple 20-core (G17S Family)",
        npu: "16-core Neural Engine (Gen 10)",
        memory: "256-bit LPDDR5X-9600",
        architecture: "64-bit ARMv9.x-A"
    },
    {
        name: "M5",
        codename: "Hidra",
        geekbench6: { single: "4326", multi: "18043" },
        wildlifeExtreme: "12059",
        steelNomadLite: "5335",
        partNumber: "T8142",
        releaseDate: "2025.10",
        process: "TSMC N3P (3nm)",
        dieSize: "Unknown",
        cpu: {
            specs: "4x 4.40 GHz pCore + 6x 2.80 GHz eCore",
            l2Cache: "4x 1MB (P-core private) + 16 MB (P-Core shared) + 4 MB (E-Core)"
        },
        gpu: "Apple 10-core (G17G Family) - Neural Accelerator, Ray Tracing Gen 3",
        npu: "16-core Neural Engine (Gen 10)",
        memory: "LPDDR5X-8533",
        architecture: "64-bit ARMv9.x-A"
    },
    {
        name: "M4 Max",
        geekbench6: { single: "4060", multi: "26675" },
        wildlifeExtreme: "37430",
        codename: "Brava D",
        partNumber: "T6041",
        releaseDate: "2024.10",
        process: "TSMC N3E (3nm)",
        dieSize: "454.27 mm²",
        cpu: {
            specs: "12x 4.51 GHz Everest V3 + 4x 2.89 GHz Sawtooth V3",
            l2Cache: "32 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "48 MB",
        gpu: "Apple 40-core (G16S Family) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (Gen 9)",
        memory: "LPDDR5X-8533",
        architecture: "64-bit ARMv9.2-A"
    },
    {
        name: "M4 Pro",
        geekbench6: { single: "3925", multi: "22669" },
        wildlifeExtreme: "16140",
        codename: "Brava S",
        partNumber: "T6040",
        releaseDate: "2024.10",
        process: "TSMC N3E (3nm)",
        dieSize: "‰ˆ320-330 mm²",
        cpu: {
            specs: "10x 4.51 GHz Everest V3 + 4x 2.89 GHz Sawtooth V3",
            l2Cache: "Unspecified"
        },
        slc: "24 MB",
        gpu: "Apple 20-core (G16S Family) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (Gen 9)",
        memory: "LPDDR5X-8533",
        architecture: "64-bit ARMv9.2-A"
    },
    {
        name: "M4",
        geekbench6: { single: "3781", multi: "14858" },
        wildlifeExtreme: "9133",
        codename: "Donan",
        partNumber: "T8132",
        releaseDate: "2024.05",
        process: "TSMC N3E (3nm)",
        dieSize: "169.35 mm²",
        cpu: {
            specs: "4x 4.51 GHz Everest V3 + 6x 2.89 GHz Sawtooth V3",
            l2Cache: "16 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "8 MB",
        gpu: "Apple 10-core (G16G Family) - Hardware Ray Tracing",
        npu: "16-core Neural Engine (38 TOPS)",
        memory: "LPDDR5X-7500",
        architecture: "64-bit ARMv9.2-A"
    },
    {
        name: "M3 Ultra",
        codename: "Palma D",
        partNumber: "T6032",
        releaseDate: "2025.03",
        process: "TSMC N3B (3nm)",
        dieSize: "894.18 mm²",
        cpu: {
            specs: "32-core (24x 4.05 GHz Everest + 8x 2.75 GHz Sawtooth)",
            l2Cache: "Unspecified"
        },
        slc: "96 MB",
        gpu: "Apple 80-core (Apple9 Family, G15D)",
        npu: "32-core Neural Engine",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M3 Max",
        geekbench6: { single: "3128", multi: "20925" },
        wildlifeExtreme: "16300",
        codename: "Palma",
        partNumber: "T6031",
        releaseDate: "2023.11",
        process: "TSMC N3B (3nm)",
        dieSize: "447.09 mm²",
        cpu: {
            specs: "12x 4.05 GHz Everest + 4x 2.75 GHz Sawtooth",
            l2Cache: "24 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "48 MB",
        gpu: "Apple 40-core (Apple9 Family, G15D)",
        npu: "16-core Neural Engine",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M3 Pro",
        geekbench6: { single: "3090", multi: "15100" },
        wildlifeExtreme: "14540",
        codename: "Lobos",
        partNumber: "T6030",
        releaseDate: "2023.11",
        process: "TSMC N3B (3nm)",
        dieSize: "219.22 mm²",
        cpu: {
            specs: "6x 4.05 GHz Everest + 6x 2.75 GHz Sawtooth",
            l2Cache: "16 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "12 MB",
        gpu: "Apple 18-core (Apple9 Family, G15D)",
        npu: "16-core Neural Engine",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M3",
        geekbench6: { single: "3050", multi: "11700" },
        wildlifeExtreme: "8250",
        codename: "Ibiza",
        partNumber: "APL1201 / T8122",
        releaseDate: "2023.11",
        process: "TSMC N3B (3nm)",
        dieSize: "152.53 mm²",
        cpu: {
            specs: "4x 4.05 GHz Everest + 4x 2.75 GHz Sawtooth",
            l2Cache: "16 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "8 MB",
        gpu: "Apple 10-core (Apple9 Family, G15G)",
        npu: "16-core Neural Engine (18 TOPS)",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M2 Ultra",
        geekbench6: { single: "2800", multi: "21500" },
        wildlifeExtreme: "18500",
        codename: "Rhodes 2C",
        partNumber: "APL1W12 / T6022",
        releaseDate: "2023.06",
        process: "TSMC N5P (5nm)",
        dieSize: "910 mm²",
        cpu: {
            specs: "16x 3.50 GHz Avalanche + 8x 2.42 GHz Blizzard",
            l2Cache: "64 MB (P-Core) + 8 MB (E-Core)"
        },
        slc: "96 MB",
        gpu: "Apple 76-core (Apple8 Family, G14D)",
        npu: "32-core Neural Engine (31.6 TOPS)",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M2 Max",
        geekbench6: { single: "2750", multi: "14600" },
        wildlifeExtreme: "13600",
        codename: "Rhodes",
        partNumber: "T6021",
        releaseDate: "2023.01",
        process: "TSMC N5P (5nm)",
        dieSize: "485.62 mm²",
        cpu: {
            specs: "8x 3.50 GHz Avalanche + 4x 2.42 GHz Blizzard",
            l2Cache: "32 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "48 MB",
        gpu: "Apple 38-core (Apple8 Family, G14G)",
        npu: "16-core Neural Engine",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M2 Pro",
        geekbench6: { single: "2650", multi: "14200" },
        wildlifeExtreme: "10200",
        codename: "Rhodes 1C",
        partNumber: "T6020",
        releaseDate: "2023.01",
        process: "TSMC N5P (5nm)",
        dieSize: "294.73 mm²",
        cpu: {
            specs: "8x 3.50 GHz Avalanche + 4x 2.42 GHz Blizzard",
            l2Cache: "32 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "24 MB",
        gpu: "Apple 19-core (Apple8 Family, G14G)",
        npu: "16-core Neural Engine",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M2",
        geekbench6: { single: "2600", multi: "10000" },
        wildlifeExtreme: "6900",
        codename: "Staten",
        partNumber: "APL1109 / T8112",
        releaseDate: "2022.06",
        process: "TSMC N5P (5nm)",
        dieSize: "153.22 mm²",
        cpu: {
            specs: "4x 3.50 GHz Avalanche + 4x 2.42 GHz Blizzard",
            l2Cache: "16 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "8 MB",
        gpu: "Apple 10-core (Apple8 Family, G14G)",
        npu: "16-core Neural Engine (15.8 TOPS)",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.6-A"
    },
    {
        name: "M1 Ultra",
        geekbench6: { single: "2400", multi: "17500" },
        wildlifeExtreme: "15000",
        codename: "Jade 4C",
        partNumber: "T6002",
        releaseDate: "2022.03",
        process: "TSMC N5 (5nm)",
        dieSize: "864.7 mm²",
        cpu: {
            specs: "16x 3.20 GHz Firestorm + 4x 2.06 GHz Icestorm",
            l2Cache: "48 MB (P-Core) + 8 MB (E-Core)"
        },
        slc: "96 MB",
        gpu: "Apple 64-core (Apple7 Family, G13D)",
        npu: "32-core Neural Engine (22 TOPS)",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.5-A"
    },
    {
        name: "M1 Max",
        geekbench6: { single: "2390", multi: "12500" },
        wildlifeExtreme: "10600",
        codename: "Jade 2C",
        partNumber: "T6001",
        releaseDate: "2021.10",
        process: "TSMC N5 (5nm)",
        dieSize: "432.3 mm²",
        cpu: {
            specs: "8x 3.20 GHz Firestorm + 2x 2.06 GHz Icestorm",
            l2Cache: "24 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "48 MB",
        gpu: "Apple 32-core (Apple7 Family, G13G)",
        npu: "16-core Neural Engine",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.5-A"
    },
    {
        name: "M1 Pro",
        geekbench6: { single: "2380", multi: "12300" },
        wildlifeExtreme: "9400",
        codename: "Jade C",
        partNumber: "T6000",
        releaseDate: "2021.10",
        process: "TSMC N5 (5nm)",
        dieSize: "253.17 mm²",
        cpu: {
            specs: "8x 3.20 GHz Firestorm + 2x 2.06 GHz Icestorm",
            l2Cache: "24 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "24 MB",
        gpu: "Apple 16-core (Apple7 Family, G13G)",
        npu: "16-core Neural Engine",
        memory: "LPDDR5-6400",
        architecture: "64-bit ARMv8.5-A"
    },
    {
        name: "M1",
        geekbench6: { single: "2350", multi: "8600" },
        wildlifeExtreme: "5000",
        codename: "Tonga",
        partNumber: "APL1102 / T8103",
        releaseDate: "2020.11",
        process: "TSMC N5 (5nm)",
        dieSize: "123.04 mm²",
        cpu: {
            specs: "4x 3.20 GHz Firestorm + 4x 2.06 GHz Icestorm",
            l2Cache: "12 MB (P-Core) + 4 MB (E-Core)"
        },
        slc: "8 MB",
        gpu: "Apple 8-core (Apple7 Family, G13G)",
        npu: "16-core Neural Engine (11 TOPS)",
        memory: "LPDDR4X-4266",
        architecture: "64-bit ARMv8.5-A"
    }
];

const snapdragon8Data = [
    {
        name: "Snapdragon 8 Elite Gen 6 Pro (tentative name)",
        codename: "Unknown",
        partNumber: "SM8975",
        releaseDate: "2026.09",
        process: "TSMC N2P (2nm)",
        dieSize: "Unknown",
        cpu: {
            specs: "2x (Oryon-P V4) + 3x (Oryon-M V4) + 3x (Oryon-E V4)",
            l2Cache: "Unknown",
            l3Cache: "N/A"
        },
        slc: "8MB",
        gpu: "Adreno 850 (18MB GMEM)",
        npu: "Hexagon V85 NPU",
        dsp: "Hexagon DSP",
        memory: "24-bit Quad-channel LPDDR6-10667",
    },
    {
        name: "Snapdragon 8 Elite Gen 6 (tentative name)",
        codename: "Unknown",
        partNumber: "SM8950",
        releaseDate: "2026.09",
        process: "TSMC N2P (2nm)",
        dieSize: "unknown",
        cpu: {
            specs: "2x (Oryon-P V4) + 3x (Oryon-M V4) + 3x (Oryon-E V4)",
            l2Cache: "Unknown",
            l3Cache: "N/A"
        },
        slc: "6MB",
        gpu: "Adreno 845 (12MB GMEM)",
        npu: "Hexagon V85 NPU",
        dsp: "Hexagon DSP",
        memory: "16-bit Quad-channel LPDDR5-10667",
    },
    {
        name: "Snapdragon 8 Gen 5",
        geekbench6: { single: "2957", multi: "10236" },
        wildlifeExtreme: "5681",
        steelNomadLite: "2088",
        codename: "Molokai",
        partNumber: "SM8845",
        releaseDate: "2025.11",
        process: "TSMC N3P (3nm)",
        dieSize: "103.5 mm²",
        cpu: {
            specs: "2x 3.80 GHz (Oryon-P V3) + 6x 3.32 GHz (Oryon-M V3)",
            l2Cache: "4MB (P-cluster) + 12MB (M-cluster)",
            l3Cache: "N/A"
        },
        slc: "6MB",
        gpu: "Adreno 829 (1225 MHz)",
        npu: "Hexagon V85 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X80 5G",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "Snapdragon 8 Elite Gen 5",
        geekbench6: { single: "3831", multi: "12459" },
        wildlifeExtreme: "8492",
        steelNomadLite: "3143",
        codename: "canoe/kaanapali",
        partNumber: "SM8850-AC",
        releaseDate: "2025.09",
        process: "TSMC N3P (3nm)",
        dieSize: "126.2 mm²",
        cpu: {
            specs: "2x 4.61 GHz (Oryon-P V3) + 6x 3.63 GHz (Oryon-M V3)",
            l2Cache: "12MB (P-cluster) + 12MB (M-cluster)",
            l3Cache: "N/A"
        },
        slc: "8MB",
        gpu: "Adreno 840 (1200 MHz)",
        npu: "Hexagon V85 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X85 5G",
        memory: "16-bit Quad-Channel LPDDR5X 10667"
    },
    {
        name: "Snapdragon 8s Gen 4",
        geekbench6: { single: "2171", multi: "6834" },
        wildlifeExtreme: "4805",
        partNumber: "SM8735",
        releaseDate: "2025.04",
        process: "TSMC N4P (4nm)",
        dieSize: "Unknown",
        cpu: {
            specs: "1x 3.21 GHz (X4) + 3x 3.21GHz (A720) + 2x 2.8GHz (A720) + 2x (A520)",
            l2Cache: "1MB (X4) + 7x 256KB (A720)",
            l3Cache: "8MB"
        },
        slc: "6MB",
        gpu: "Adreno 825 (1150 MHz)",
        npu: "Hexagon V75 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X75 5G",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "Snapdragon 8 Elite",
        geekbench6: { single: "3221", multi: "10426" },
        wildlifeExtreme: "6949",
        steelNomadLite: "2583",
        codename: "sun/pakala",
        partNumber: "SM8750-AB",
        releaseDate: "2024.10",
        process: "TSMC N3E (3nm)",
        dieSize: "124.1 mm²",
        cpu: {
            specs: "2x 4.32 GHz (Oryon-P V2) + 6x 3.53 GHz (Oryon-M V2)",
            l2Cache: "12MB (P-cluster) + 12MB (M-cluster)",
            l3Cache: "N/A"
        },
        slc: "8MB",
        gpu: "Adreno 830 (1100 MHz)",
        npu: "Hexagon V79 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X80 5G",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "Snapdragon 8s Gen 3",
        geekbench6: { single: "2000", multi: "5400" },
        wildlifeExtreme: "3250",
        steelNomadLite: "1025",
        codename: "cliffs/palawan",
        partNumber: "SM8635",
        releaseDate: "2024.03",
        process: "TSMC N4P (4nm)",
        dieSize: "89.54 mm²",
        cpu: {
            specs: "1x 3 GHz (X4) + 4x 2.8 GHz (A720) + 3x 2 GHz (A520)",
            l2Cache: "1MB (X4) + 4x 256KB (A720) + 128KB (2x A510) + 128KB (A510)",
            l3Cache: "4MB"
        },
        slc: "2MB",
        gpu: "Adreno 735 (1100 MHz)",
        npu: "Hexagon V73 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X70 5G",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "Snapdragon 8 Gen 3",
        geekbench6: { single: "2200", multi: "7000" },
        wildlifeExtreme: "5060",
        codename: "lanai/pineapple",
        partNumber: "SM8650-AB",
        releaseDate: "2023.10",
        process: "TSMC N4P (4nm)",
        dieSize: "137.32 mm²",
        cpu: {
            specs: "1x 3.3 GHz (Cortex-X4) + 3x 3.15 GHz (Cortex-A720) + 2x 2.96 GHz (Cortex-A720) + 2x 2.27 GHz (Cortex-A520)",
            l2Cache: "2MB (X4) + 5x 512KB (A720) + 512KB (2x A520)",
            l3Cache: "12MB"
        },
        slc: "8MB",
        gpu: "Adreno 750 (903 MHz)",
        npu: "Hexagon V75 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X75 5G",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "Snapdragon 8 Gen 2",
        geekbench6: { single: "2000", multi: "5500" },
        wildlifeExtreme: "3750",
        steelNomadLite: "1062",
        codename: "kalama/kailua",
        partNumber: "SM8550-AB",
        releaseDate: "2022.11",
        process: "TSMC N4 (4nm)",
        dieSize: "120.9 mm²",
        cpu: {
            specs: "1x 3.2 GHz (Cortex-X3) + 2x 2.8 GHz (Cortex-A715) + 2x 2.8 GHz (Cortex-A710) + 3x 2.0 GHz (Cortex-A510)",
            l2Cache: "1MB (X3) + 2x 512KB (A715) + 2x 512KB (A710) + 256KB (2x A520) + 128KB (A510)",
            l3Cache: "8MB"
        },
        slc: "6MB",
        gpu: "Adreno 740 (680 MHz)",
        npu: "Hexagon V73 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X70 5G",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "Snapdragon 8+ Gen 1",
        geekbench6: { single: "1750", multi: "4600" },
        wildlifeExtreme: "2800",
        codename: "taro/waipio",
        partNumber: "SM8475",
        releaseDate: "2022.05",
        process: "TSMC N4 (4nm)",
        dieSize: "102.8 mm²",
        cpu: {
            specs: "1x 3.2 GHz (Cortex-X2) + 3x 2.75 GHz (Cortex-A710) + 4x 2.0 GHz (Cortex-A510)",
            l2Cache: "1MB (X2) + 3x 512KB (A710) + 2x 256KB (4x A510)",
            l3Cache: "6MB"
        },
        slc: "4MB",
        gpu: "Adreno 730 (900 MHz)",
        npu: "Hexagon V69 NPU",
        dsp: "Hexagon 790 DSP",
        modem: "Snapdragon X65 5G",
        memory: "16-bit Quad-Channel LPDDR5X 7500"
    },
    {
        name: "Snapdragon 8 Gen 1",
        geekbench6: { single: "1650", multi: "4000" },
        wildlifeExtreme: "2600",
        codename: "taro/waipio",
        partNumber: "SM8450",
        releaseDate: "2021.11",
        process: "Samsung 4LPX (4nm)",
        dieSize: "128.3 mm²",
        cpu: {
            specs: "1x 3.0 GHz (Cortex-X2) + 3x 2.5 GHz (Cortex-A710) + 4x 1.8 GHz (Cortex-A510)",
            l2Cache: "1MB (X2) + 3x 512KB (A710) + 2x 256KB (4x A510)",
            l3Cache: "6MB"
        },
        slc: "4MB",
        gpu: "Adreno 730 (818 MHz)",
        npu: "Hexagon V69 NPU",
        dsp: "Hexagon 790 DSP",
        modem: "Snapdragon X65 5G",
        memory: "16-bit Quad-Channel LPDDR5 6400"
    },
    {
        name: "Snapdragon 888+",
        geekbench6: { single: "1500", multi: "3800" },
        wildlifeExtreme: "1550",
        steelNomadLite: "510",
        codename: "lahaina",
        partNumber: "SM8350-AC",
        releaseDate: "2021.06",
        process: "Samsung 5LPE (5nm)",
        dieSize: "112.2 mm²",
        cpu: {
            specs: "1x 3 GHz (Cortex-X1) + 3x 2.42 GHz (Cortex-A78) + 4x 1.8 GHz (Cortex-A55)",
            l2Cache: "1MB (X1) + 3x 512KB (A78) + 4x 128KB (A55)",
            l3Cache: "4MB"
        },
        slc: "3MB",
        gpu: "Adreno 660 (840 MHz)",
        npu: "Hexagon 780 Fused AI Accelerator",
        dsp: "Hexagon 780 DSP",
        modem: "Snapdragon X60 5G",
        memory: "16-bit Quad-Channel LPDDR5 6400"
    },
    {
        name: "Snapdragon 888",
        geekbench6: { single: "1400", multi: "3600" },
        wildlifeExtreme: "1500",
        steelNomadLite: "503",
        codename: "lahaina",
        partNumber: "SM8350",
        releaseDate: "2020.12",
        process: "Samsung 5LPE (5nm)",
        dieSize: "112.2 mm²",
        cpu: {
            specs: "1x 2.84 GHz (X1) + 3x 2.42 GHz (A78) + 4x 1.8 GHz (A55)",
            l2Cache: "1MB (X1) + 3x 512KB (A78) + 4x 128KB (A55)",
            l3Cache: "4MB"
        },
        slc: "3MB",
        gpu: "Adreno 660 (840 MHz)",
        npu: "Hexagon 780 Fused AI Accelerator",
        dsp: "Hexagon 780 DSP",
        modem: "Snapdragon X60 5G",
        memory: "16-bit Quad-Channel LPDDR5 6400"
    },
    {
        name: "Snapdragon 870",
        geekbench6: { single: "1250", multi: "3300" },
        wildlifeExtreme: "1250",
        codename: "kona",
        partNumber: "SM8250-AC",
        releaseDate: "2021.01",
        process: "TSMC N7P (7nm)",
        dieSize: "86.9 mm²",
        cpu: {
            specs: "1x 3.2 GHz (Cortex-A77) + 3x 2.42 GHz (Cortex-A77) + 4x 1.8 GHz (Cortex-A55)",
            l2Cache: "512KB (A77) + 3x 256KB (A77) + 4x 128KB (A55)",
            l3Cache: "4MB"
        },
        slc: "3MB",
        gpu: "Adreno 650 (670 MHz)",
        npu: "Hexagon 698 DSP via HVX and HTA",
        dsp: "Hexagon 698 DSP",
        modem: "Snapdragon X55 5G (External)",
        memory: "16-bit Quad-Channel LPDDR5 5500"
    },
    {
        name: "Snapdragon 865+",
        geekbench6: { single: "1150", multi: "3200" },
        wildlifeExtreme: "1120",
        codename: "kona",
        partNumber: "SM8250-AB",
        releaseDate: "2020.07",
        process: "TSMC N7P (7nm)",
        dieSize: "86.9 mm²",
        cpu: {
            specs: "1x 3.1 GHz (Cortex-A77) + 3x 2.42 GHz (Cortex-A77) + 4x 1.8 GHz (Cortex-A55)",
            l2Cache: "512KB (A77) + 3x 256KB (A77) + 4x 128KB (A55)",
            l3Cache: "4MB"
        },
        slc: "3MB",
        gpu: "Adreno 650 (670 MHz)",
        npu: "Hexagon 698 DSP via HVX and HTA",
        dsp: "Hexagon 698 DSP",
        modem: "Snapdragon X55 5G (External)",
        memory: "16-bit Quad-Channel LPDDR5 5500"
    },
    {
        name: "Snapdragon 865",
        geekbench6: { single: "1100", multi: "3100" },
        wildlifeExtreme: "1100",
        codename: "kona",
        partNumber: "SM8250",
        releaseDate: "2019.12",
        process: "TSMC N7P (7nm)",
        dieSize: "86.9 mm²",
        cpu: {
            specs: "1x 2.84 GHz (Cortex-A77) + 3x 2.42 GHz (Cortex-A77) + 4x 1.8 GHz (Cortex-A55)",
            l2Cache: "512KB (A77) + 3x 256KB (A77) + 4x 128KB (A55)",
            l3Cache: "4MB"
        },
        slc: "3MB",
        gpu: "Adreno 650 (587 MHz)",
        npu: "Hexagon 698 DSP via HVX and HTA",
        dsp: "Hexagon 698 DSP",
        modem: "Snapdragon X55 5G (External)",
        memory: "16-bit Quad-Channel LPDDR5 5500"
    },
    {
        name: "Snapdragon 860",
        geekbench6: { single: "950", multi: "2800" },
        wildlifeExtreme: "1050",
        codename: "msmnile/hana",
        partNumber: "SM8150-AC",
        releaseDate: "2021.03",
        process: "TSMC N7 (7nm)",
        dieSize: "76.53 mm²",
        cpu: {
            specs: "1x 2.96 GHz (Cortex-A76) + 3x 2.42 GHz (Cortex-A76) + 4x 1.78 GHz (Cortex-A55)",
            l2Cache: "512KB (A76) + 3x 256KB (A76) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "3MB",
        gpu: "Adreno 640 (675 MHz)",
        npu: "Hexagon 690 DSP via HVX and HTA",
        dsp: "Hexagon 690 DSP",
        modem: "Snapdragon X24 LTE (X50 5G Optional)",
        memory: "16-bit Quad-Channel LPDDR4X 4266"
    },
    {
        name: "Snapdragon 855+",
        geekbench6: { single: "989", multi: "3036" },
        wildlifeExtreme: "936",
        codename: "msmnile/hana",
        partNumber: "SM8150-AC",
        releaseDate: "2019.07",
        process: "TSMC N7 (7nm)",
        dieSize: "76.53 mm²",
        cpu: {
            specs: "1x 2.96 GHz (Cortex-A76) + 3x 2.42 GHz (Cortex-A76) + 4x 1.78 GHz (Cortex-A55)",
            l2Cache: "512KB (A76) + 3x 256KB (A76) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "3MB",
        gpu: "Adreno 640 (675 MHz)",
        npu: "Hexagon 690 DSP via HVX and HTA",
        dsp: "Hexagon 690 DSP",
        modem: "Snapdragon X24 LTE (X50 5G Optional)",
        memory: "16-bit Quad-Channel LPDDR4X 4266"
    },
    {
        name: "Snapdragon 855",
        codename: "msmnile/hana",
        partNumber: "SM8150",
        geekbench6: { single: "975", multi: "3002" },
        wildlifeExtreme: "887",
        releaseDate: "2018.12",
        process: "TSMC N7 (7nm)",
        dieSize: "76.53 mm² (8.48 x 8.64 mm)",
        cpu: {
            specs: "1x 2.84 GHz (Cortex-A76) + 3x 2.42 GHz (Cortex-A76) + 4x 1.78 GHz (Cortex-A55)",
            l2Cache: "512KB (A76) + 3x 256KB (A76) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "3MB",
        gpu: "Adreno 640 (585 MHz)",
        npu: "Hexagon 690 DSP via HVX and HTA",
        dsp: "Hexagon 690 DSP",
        modem: "Snapdragon X24 LTE (X50 5G Optional)",
        memory: "16-bit Quad-Channel LPDDR4X 4266"
    },
    {
        name: "Snapdragon 845",
        codename: "napali",
        partNumber: "SDM845",
        releaseDate: "2017.12",
        process: "Samsung 10LPP (10nm)",
        dieSize: "95 mm²",
        cpu: {
            specs: "4x 2.8 GHz (Cortex-A75) + 4x 1.8 GHz (Cortex-A55)",
            l2Cache: "4x 256KB (A75) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "3MB",
        gpu: "Adreno 630 (710 MHz)",
        npu: "Hexagon 685 DSP via HVX",
        dsp: "Hexagon 685 DSP",
        modem: "Snapdragon X20 LTE",
        memory: "16-bit Quad-Channel LPDDR4X 3733"
    },
    {
        name: "Snapdragon 835",
        codename: "msmcobalt/apqcobalt",
        partNumber: "MSM8998",
        geekbench6: { single: "388", multi: "1452" },
        wildlifeExtreme: "364",
        releaseDate: "2016.11",
        process: "Samsung 10LPE (10nm)",
        dieSize: "72.3 mm²",
        cpu: {
            specs: "4x 2.45 GHz (Cortex-A73) + 4x 1.9 GHz (Cortex-A53)",
            l2Cache: "2MB (A73 cluster) + 1MB (A53 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 540 (710 MHz)",
        npu: "Hexagon 682 DSP via HVX",
        dsp: "Hexagon 682 DSP",
        modem: "Snapdragon X16 LTE",
        memory: "16-bit Quad-Channel LPDDR4X 3733"
    },
    {
        name: "Snapdragon 821",
        codename: "msmthulium/apqthulium",
        partNumber: "MSM8996 Pro",
        releaseDate: "2016.07",
        process: "Samsung 14LPP (14nm)",
        dieSize: "113.7 mm²",
        cpu: {
            specs: "2x 2.35 GHz (Kryo) + 2x 1.6/2.19 GHz (Kryo)",
            l2Cache: "1MB (Kryo Gold cluster) + 512KB (Kryo Silver cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 530 (653 MHz)",
        npu: "Hexagon 680 DSP via HVX",
        dsp: "Hexagon 680 DSP",
        modem: "Snapdragon X12 LTE",
        memory: "16-bit Quad-Channel LPDDR4 3733"
    },
    {
        name: "Snapdragon 820",
        codename: "msmthulium/apqthulium",
        partNumber: "MSM8996",
        releaseDate: "2015.11",
        process: "Samsung 14LPP (14nm)",
        dieSize: "113.7 mm²",
        cpu: {
            specs: "2x 2.15 GHz (Kryo) + 2x 1.59 GHz (Kryo)",
            l2Cache: "1MB (Kryo Gold cluster) + 512KB (Kryo Silver cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 530 (624 MHz)",
        npu: "Hexagon 680 DSP via HVX",
        dsp: "Hexagon 680 DSP",
        modem: "Snapdragon X12 LTE",
        memory: "16-bit Quad-Channel LPDDR4 3733"
    },
    {
        name: "Snapdragon 810",
        partNumber: "MSM8994",
        releaseDate: "2014.04",
        process: "TSMC 20nm",
        dieSize: "142 mm²",
        cpu: {
            specs: "4x 1.96 GHz (Cortex-A57) + 4x 1.56 GHz (Cortex-A53)",
            l2Cache: "2MB (A57 cluster) + 512KB (A53 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 430 (650 MHz)",
        npu: "N/A",
        dsp: "Hexagon V56 DSP",
        modem: "Snapdragon X10 LTE",
        memory: "16-bit Quad-Channel LPDDR4 3200"
    },
    {
        name: "Snapdragon 808",
        partNumber: "MSM8992",
        releaseDate: "2014.04",
        process: "TSMC 20nm",
        dieSize: "94.2 mm²",
        cpu: {
            specs: "2x 1.82 GHz (Cortex-A57) + 4x 1.44 GHz (Cortex-A53)",
            l2Cache: "1MB (A57 cluster) + 512KB (A53 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 418 (600 MHz)",
        npu: "N/A",
        dsp: "Hexagon V56 DSP",
        modem: "Snapdragon X10 LTE",
        memory: "32-bit Dual-Channel LPDDR3 1866"
    },
    {
        name: "Snapdragon 805",
        partNumber: "APQ8084",
        releaseDate: "2013.11",
        process: "TSMC 28nm HPm",
        dieSize: "134.7 mm²",
        cpu: {
            specs: "4x 2.7 GHz (Krait 450)",
            l2Cache: "2MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 420 (600 MHz)",
        npu: "N/A",
        dsp: "Hexagon V50 DSP",
        modem: "External (Usually Gobi 9x35)",
        memory: "32-bit Dual-Channel LPDDR3 1866"
    },
    {
        name: "Snapdragon 801",
        partNumber: "MSM8974AC",
        releaseDate: "2014.02",
        process: "TSMC 28nm HPm",
        dieSize: "118.6 mm²",
        cpu: {
            specs: "4x 2.45 GHz (Krait 400)",
            l2Cache: "2MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 330 (578 MHz)",
        npu: "N/A",
        dsp: "Hexagon QDSP6 V5 DSP",
        modem: "Snapdragon X5 LTE",
        memory: "32-bit Dual-Channel LPDDR3 1866"
    },
    {
        name: "Snapdragon 800",
        partNumber: "MSM8974",
        releaseDate: "2013.01",
        process: "TSMC 28nm HPm",
        dieSize: "118.6 mm²",
        cpu: {
            specs: "4x 2.26 GHz (Krait 400)",
            l2Cache: "2MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 330 (450 MHz)",
        npu: "N/A",
        dsp: "Hexagon QDSP6 V5 DSP",
        modem: "Snapdragon X5 LTE",
        memory: "32-bit Dual-Channel LPDDR3 1600"
    }
];



const snapdragon7Data = [
    {
        name: "Snapdragon 7 Gen 4",
        geekbench6: { single: "1361", multi: "4306" },
        wildlifeExtreme: "2143",
        codename: "unknown",
        partNumber: "SM7750-AB",
        releaseDate: "2025.05",
        process: "TSMC 4nm (N4)",
        dieSize: "unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A720 @ 2.80 GHz + 3x Cortex-A720 @ 2.40 GHz + 4x Cortex-A520 @ 1.84 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Qualcomm Adreno 722 (1.15 GHz)",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X63 5G",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5X 4200 (8400 MT/s)"
    },
    {
        name: "Snapdragon 7s Gen 4",
        geekbench6: { single: "1236", multi: "3060" },
        wildlifeExtreme: "1111",
        codename: "volcano",
        partNumber: "SM7635-AC",
        releaseDate: "2025.08",
        process: "TSMC 4nm (N4)",
        dieSize: "unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A720 @ 2.71 GHz + 3x Cortex-A720 @ 2.40 GHz + 4x Cortex-A520 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Qualcomm Adreno 810 (1150MHz)",
        npu: "Qualcomm Hexagon V73 NPU",
        modem: "Snapdragon X62 5G",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5 3200"
    },
    {
        name: "Snapdragon 7+ Gen 3",
        geekbench6: { single: "1906", multi: "5330" },
        wildlifeExtreme: "3050",
        codename: "cliffs/palawan7",
        partNumber: "SM7675",
        releaseDate: "2024.03",
        process: "TSMC N4P (4nm)",
        dieSize: "89.54 mm²",
        cpu: {
            specs: "1x 2.8 GHz (X4) + 4x 2.6 GHz (A720) + 3x 1.9 GHz (A520)",
            l2Cache: "1MB (X4) + 4x 256KB (A720) + 128KB (2x A510) + 128KB (A510)",
            l3Cache: "4MB"
        },
        slc: "2MB",
        gpu: "Adreno 732 (950 MHz)",
        npu: "Hexagon V73 NPU",
        dsp: "Hexagon DSP",
        modem: "Snapdragon X63 5G",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "Snapdragon 7s Gen 3",
        geekbench6: { single: "1189", multi: "3356" },
        wildlifeExtreme: "1101",
        codename: "volcano",
        partNumber: "SM7635",
        releaseDate: "2024.08",
        process: "TSMC 4nm (N4P)",
        dieSize: "Unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A720 @ 2.50 GHz + 3x Cortex-A720 @ 2.40 GHz + 4x Cortex-A520 @ 1.80 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "Adreno 810 (1050MHz)",
        npu: "Hexagon NPU",
        modem: "Snapdragon X63 5G",
        dsp: "Hexagon DSP",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 7 Gen 3",
        geekbench6: { single: "1150", multi: "3350" },
        wildlifeExtreme: "1420",
        codename: "pinecone",
        partNumber: "SM7550",
        releaseDate: "2023.11",
        process: "TSMC 4nm (N4)",
        dieSize: "55.16mm²",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-A715 @ 2.63 GHz + 3x Cortex-A715 @ 2.40 GHz + 4x Cortex-A510 @ 1.80 GHz",
            l2Cache: "512KB (A715) + 2x 256KB (A510)",
            l3Cache: "4 MB"
        },
        slc: "N/A",
        gpu: "Adreno 720 (975 MHz)",
        npu: "Hexagon NPU",
        modem: "Snapdragon X63 5G",
        dsp: "Hexagon DSP",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "Snapdragon 7+ Gen 2",
        geekbench6: { single: "1680", multi: "4470" },
        wildlifeExtreme: "1950",
        codename: "taro/waipio",
        partNumber: "SM7475",
        releaseDate: "2023.03",
        process: "TSMC N4 (4nm)",
        dieSize: "102.8 mm²",
        cpu: {
            specs: "1x 2.91 GHz (Cortex-X2) + 3x 2.49 GHz (Cortex-A710) + 4x 1.8 GHz (Cortex-A510)",
            l2Cache: "1MB (X2) + 3x 512KB (A710) + 2x 256KB (4x A510)",
            l3Cache: "6MB"
        },
        slc: "4MB",
        gpu: "Adreno 725 (580 MHz)",
        npu: "Hexagon V69 NPU",
        dsp: "Hexagon 790 DSP",
        modem: "Snapdragon X62 5G",
        memory: "16-bit Quad-Channel LPDDR5 6400"
    },
    {
        name: "Snapdragon 7s Gen 2",
        geekbench6: { single: "1010", multi: "2916" },
        wildlifeExtreme: "800",
        codename: "parrot",
        partNumber: "SM7435",
        releaseDate: "2023.09",
        process: "Samsung 4nm (4LPX)",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.40 GHz + 4x Cortex-A55 @ 1.95 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "Adreno 710 (940 MHz)",
        npu: "Hexagon NPU",
        modem: "Snapdragon X62 5G",
        dsp: "Hexagon DSP",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 7 Gen 1",
        geekbench6: { single: "946", multi: "2744" },
        wildlifeExtreme: "829",
        codename: "fillmore",
        partNumber: "SM7450",
        releaseDate: "2022.05",
        process: "Samsung 4nm (4LPE)",
        dieSize: "77.8mm²",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-A710 @ 2.40 GHz / 2.50 GHz (AE) + 3x Cortex-A710 @ 2.36 GHz + 4x Cortex-A510 @ 1.80 GHz",
            l2Cache: "Unknown",
            l3Cache: "2 MB"
        },
        slc: "2MB",
        gpu: "Adreno 644 (660 MHz)",
        npu: "Hexagon Tensor Accelerator",
        modem: "Snapdragon X62 5G",
        dsp: "Hexagon DSP",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "Snapdragon 782G",
        geekbench6: { single: "1108", multi: "2906" },
        wildlifeExtreme: "806",
        codename: "kodiak",
        partNumber: "SM7325-AF",
        releaseDate: "2022.11",
        process: "TSMC 6nm (N6)",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A78 @ 2.70 GHz + 3x Cortex-A78 @ 2.40 GHz + 4x Cortex-A55 @ 1.80 GHz",
            l2Cache: "512KB (A78) + 3x 256KB (A78) + 4x 128KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "N/A",
        gpu: "Adreno 642L (719GHz)",
        npu: "Hexagon 770",
        modem: "Snapdragon X53 5G",
        dsp: "Hexagon 770",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 778G / 778G+",
        geekbench6: { single: "1000", multi: "2897" },
        wildlifeExtreme: "692",
        codename: "kodiak",
        partNumber: "SM7325 / SM7325-AE",
        releaseDate: "2021.05 (778G) / 2021.10 (778G+)",
        process: "TSMC 6nm (N6)",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A78 @ 2.40/2.50 GHz + 3x Cortex-A78 @ 2.20/2.40 GHz + 4x Cortex-A55 @ 1.90 GHz",
            l2Cache: "512KB (A78) + 3x 256KB (A78) + 4x 128KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "N/A",
        gpu: "Adreno 642L (550 MHz / 608 MHz for Plus)",
        npu: "Hexagon 770 (12 TOPS)",
        modem: "Snapdragon X53 5G",
        dsp: "Hexagon 770",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 780G",
        geekbench6: { single: "1058", multi: "2906" },
        wildlifeExtreme: "842",
        codename: "molokini",
        partNumber: "SM7350",
        releaseDate: "2021.03",
        process: "Samsung 5nm (5LPE)",
        dieSize: "107.2 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A78 @ 2.40 GHz + 3x Cortex-A78 @ 2.20 GHz + 4x Cortex-A55 @ 1.90 GHz",
            l2Cache: "512KB (A78) + 3x 256KB (A78) + 4x 128KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "N/A",
        gpu: "Adreno 642 (490 MHz)",
        npu: "Hexagon 770 (12 TOPS)",
        modem: "Snapdragon X53 5G",
        dsp: "Hexagon 770",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 765 / 765G / 768G",
        geekbench6: { single: "800", multi: "2000" },
        wildlifeExtreme: "380",
        codename: "saipan",
        partNumber: "SM7250 / SM7250-AB / SM7250-AC",
        releaseDate: "2019.12 / 2020.05 (768G)",
        process: "Samsung 7nm (7LPP)",
        dieSize: "85.39 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A76 @ 2.3/2.4/2.8 GHz + 1x Cortex-A76 @ 2.2/2.4 GHz (768G) + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "512KB (A76) + 256KB (A76) + 6x 64KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "N/A",
        gpu: "Adreno 620 (625 MHz / 750 MHz for 768G)",
        npu: "Hexagon 696 (5.4 TOPS)",
        modem: "Snapdragon X52 5G",
        dsp: "Hexagon 696",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 750G",
        geekbench6: { single: "830", multi: "2000" },
        wildlifeExtreme: "380",
        codename: "lagoon",
        partNumber: "SM7225",
        releaseDate: "2020.09",
        process: "Samsung 8nm (8LPP)",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A77 @ 2.20 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "2x 256KB (A77), 6x 64KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "N/A",
        gpu: "Adreno 619 (800 MHz)",
        npu: "Hexagon 694 (4.7 TOPS)",
        modem: "Snapdragon X52 5G",
        dsp: "Hexagon 694",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 730 / 730G / 732G",
        geekbench6: { single: "700", multi: "1800" },
        wildlifeExtreme: "330",
        codename: "moorea",
        partNumber: "SM7150-AA / SM7150-AB",
        releaseDate: "2019.04",
        process: "Samsung 8nm (8LPP)",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.2 GHz / 2.3 GHz (732G) + 6x Cortex-A55 @ 1.8 GHz",
            l2Cache: "2x 256KB (A76) + 6x 64KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "N/A",
        gpu: "Adreno 618 (610MHz / 700MHz / 800MHz)",
        npu: "Hexagon 688 (3.6 TOPS)",
        modem: "Snapdragon X15 LTE",
        dsp: "Hexagon 688",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Snapdragon 720G",
        geekbench6: { single: "700", multi: "1750" },
        wildlifeExtreme: "330",
        codename: "rennell / atoll (family)",
        partNumber: "SM7125",
        releaseDate: "2020.01",
        process: "8nm LPP (Samsung)",
        dieSize: "unknown",
        cpu: {
            specs: "2x Cortex-A76 @ 2.3 GHz + 6x Cortex-A55 @ 1.8 GHz",
            l2Cache: "2x 256 KB (A76) + 6x 64 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "N/A",
        gpu: "Qualcomm Adreno 618 (750 MHz)",
        npu: "Hexagon 692",
        modem: "Snapdragon X15 LTE",
        dsp: "Qualcomm Hexagon 692",
        memory: "16-bit Dual-channel LPDDR4X 1866 (3733 MT/s)",
        architecture: "ARMv8.2-A"
    },
    {
        name: "Snapdragon 710 / 712",
        codename: "napaliQ",
        partNumber: "SDM710 / SDM712",
        releaseDate: "2018.05 / 2019.02",
        process: "Samsung 10nm (10LPP)",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.2/2.3 GHz + 6x Cortex-A55 @ 1.70 GHz",
            l2Cache: "2x 256KB (A75) + 6x 64KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "N/A",
        gpu: "Adreno 616 (504 MHz / 610 MHz)",
        npu: "Hexagon 685",
        modem: "Snapdragon X15 LTE",
        dsp: "Hexagon 685",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    }
];

const snapdragon6Data = [
    {
        name: "Snapdragon 6 Gen 5 (tentative name)",
        process: "4nm",
        codename: "Skyros",
        partNumber: "SM6850",
        cpu: {
            specs: "4x Kryo Gold + 4x Kryo Silver",
            slc: "N/A",
            gpu: "Adreno",
            npu: "Qualcomm Hexagon NPU",
            modem: "Snapdragon 5G sub-6 Rel.17",
            dsp: "Qualcomm Hexagon",
            memory: "16-bit Dual-channel LPDDR5 6400mt"
        }
    },
    {
        name: "Snapdragon 6 Gen 4",
        geekbench6: { single: "1113", multi: "3324" },
        wildlifeExtreme: "1059",
        codename: "volcano",
        partNumber: "SM6650",
        releaseDate: "2025.02",
        process: "TSMC 4nm (N4)",
        dieSize: "unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A720 @ 2.30 GHz + 3x Cortex-A720 @ 2.20 GHz + 4x Cortex-A520 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Adreno 810 (895 MHz)",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X51 5G (Up to 2.9 Gbps)",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 6s Gen 4",
        geekbench6: { single: "1004", multi: "2858" },
        wildlifeExtreme: "789",
        codename: "parrot",
        partNumber: "SM6435-AA",
        releaseDate: "2024.10",
        process: "Samsung 4nm (4LPX)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.40 GHz + 4x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Adreno 710 (940 MHz)",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X62 5G",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 6 Gen 3",
        geekbench6: { single: "1020", multi: "2950" },
        wildlifeExtreme: "1250",
        codename: "parrot",
        partNumber: "SM6475-AB",
        releaseDate: "2024.08",
        process: "Samsung 4nm (4LPX)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.40 GHz + 4x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Adreno 710 (940 MHz)",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X62 5G",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 6 Gen 1",
        geekbench6: { single: "930", multi: "2750" },
        wildlifeExtreme: "613",
        codename: "parrot",
        partNumber: "SM6450",
        releaseDate: "2022.09",
        process: "Samsung 4nm (4LPX)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.21 GHz + 4x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Adreno 710 (676 MHz)",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X62 5G",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5 2750 MHz"
    },
    {
        name: "Snapdragon 6s 4G Gen 2",
        geekbench6: { single: "490", multi: "1519" },
        wildlifeExtreme: "134",
        codename: "divar",
        partNumber: "SM6225-AF",
        releaseDate: "2025.12",
        process: "TSMC 6nm (N6)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.90 GHz + 4x Cortex-A53 @ 1.90 GHz (Kryo 265)",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 610 (1114 MHz)",
        npu: "Qualcomm Hexagon 686",
        modem: "Snapdragon X11 LTE",
        dsp: "Qualcomm Hexagon 686",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 6s 4G Gen 1",
        geekbench6: { single: "310", multi: "1332" },
        wildlifeExtreme: "112",
        codename: "bengal",
        partNumber: "SM6115",
        releaseDate: "2024.05",
        process: "Samsung 11nm (11LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.10 GHz + 4x Cortex-A53 @ 1.80 GHz (Kryo 260)",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 610 (1050 MHz)",
        npu: "Qualcomm Hexagon 662",
        modem: "Snapdragon X11 LTE",
        dsp: "Qualcomm Hexagon 662",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Snapdragon 695 5G",
        geekbench6: { single: "910", multi: "2149" },
        wildlifeExtreme: "361",
        codename: "blair",
        partNumber: "SM6375",
        releaseDate: "2021.10",
        process: "TSMC 6nm (N6)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.20 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Adreno 619 (840 MHz)",
        npu: "Qualcomm Hexagon 686",
        modem: "Snapdragon X51 5G",
        dsp: "Qualcomm Hexagon 686",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 690 5G",
        geekbench6: { single: "850", multi: "1900" },
        wildlifeExtreme: "350",
        codename: "lagoon",
        partNumber: "SM6350",
        releaseDate: "2020.06",
        process: "Samsung 8nm (8LPP)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A77 @ 2.00 GHz + 6x Cortex-A55 @ 1.70 GHz (Kryo 560)",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Adreno 619L (565 MHz)",
        npu: "Qualcomm Hexagon 692 (5 TOPS)",
        modem: "Snapdragon X51 5G",
        dsp: "Qualcomm Hexagon 692",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Snapdragon 680 / 685",
        geekbench6: { single: "417", multi: "1454" },
        wildlifeExtreme: "122",
        codename: "Bengal / Khaje",
        partNumber: "SM6225",
        releaseDate: "2021.10 / 2023.3",
        process: "TSMC 6nm (N6)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.40 / 2.80 GHz + 4x Cortex-A53 @ 1.90 GHz (Kryo 265)",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 610 (1114 MHz/ 1260MHz)",
        npu: "Qualcomm Hexagon 686",
        modem: "Snapdragon X11 LTE",
        dsp: "Qualcomm Hexagon 686",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 675 / 678",
        codename: "trinket",
        partNumber: "SM6150(-AC)",
        releaseDate: "2018.10 / 2020.12",
        process: "Samsung 11nm (11LPP)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.02 / 2.2 GHz + 6x Cortex-A55 @ 1.71 GHz",
            l2Cache: "2x 256 KB (A76) + 6x 64 KB (A55)",
            l3Cache: "1 MB"
        },
        geekbench6: { single: "671", multi: "1695" },
        wildlifeExtreme: "120",
        slc: "N/A",
        gpu: "Adreno 612 (845 MHz / 895 MHz)",
        npu: "Qualcomm Hexagon 685",
        modem: "Snapdragon X12 LTE",
        dsp: "Qualcomm Hexagon 685",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Snapdragon 670",
        codename: "sdmbat",
        partNumber: "SDM670",
        releaseDate: "2018.08",
        process: "Samsung 10nm (10LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.70 GHz (Kryo 360)",
            l2Cache: "2x 256 KB (A75) + 6x 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "N/A",
        gpu: "Adreno 615 (430 MHz)",
        npu: "Qualcomm Hexagon 685",
        modem: "Snapdragon X12 LTE",
        dsp: "Qualcomm Hexagon 685",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Snapdragon 665 / 662",
        geekbench6: { single: "337", multi: "1190" },
        wildlifeExtreme: "108",
        codename: "trinket",
        partNumber: "SM6125",
        releaseDate: "2019.04 / 2020.01",
        process: "Samsung 11nm (11LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.00 GHz + 4x Cortex-A53 @ 1.80 GHz (Kryo 260)",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 610 (950 MHz)",
        npu: "Qualcomm Hexagon 686",
        modem: "Snapdragon X12 / X11 LTE",
        dsp: "Qualcomm Hexagon 686",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Snapdragon 660",
        codename: "msmtriton",
        partNumber: "SDM660",
        releaseDate: "2017.05",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.20 GHz + 4x Cortex-A53 @ 1.84 GHz (Kryo 260)",
            l2Cache: "1 MB (A73 cluster), 1 MB (A53 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 512 (647 MHz)",
        npu: "Qualcomm Hexagon 680",
        modem: "Snapdragon X12 LTE",
        dsp: "Qualcomm Hexagon 680",
        memory: "16-bit Dual-channel LPDDR4 1866 MHz"
    },
    {
        name: "Snapdragon 650 / 652 / 653",
        codename: "eldarion",
        partNumber: "MSM8956 (Pro)",
        releaseDate: "2015.02 / 2016.10 (653)",
        process: "TSMC 28nm (28HPM)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "2x (650) / 4x Cortex A72 @ 1.8 GHz / 1.95 GHz (653) + 4x Cortex A53 @ 1.4 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 510 (600 MHz / 621 MHz (653))",
        npu: "N/A",
        modem: "X8 LTE / X9 LTE (653)",
        dsp: "Qualcomm Hexagon V56",
        memory: "32-bit Single-channel LPDDR3 933 MHz"
    },
    {
        name: "Snapdragon 636",
        codename: "unknown",
        partNumber: "SDM636",
        releaseDate: "2017.10",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 1.80 GHz + 4x Cortex-A53 @ 1.61 GHz (Kryo 260)",
            l2Cache: "1 MB (A73 cluster), 1 MB (A53 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 509 (430 MHz)",
        npu: "Qualcomm Hexagon 680",
        modem: "Snapdragon X12 LTE",
        dsp: "Qualcomm Hexagon 680",
        memory: "16-bit Dual-channel LPDDR4 1333 MHz"
    },
    {
        name: "Snapdragon 632",
        codename: "unknown",
        partNumber: "SDM632",
        releaseDate: "2018.06",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 1.80 GHz + 4x Cortex-A53 @ 1.80 GHz (Kryo 250)",
            l2Cache: "1 MB (A73 cluster), 1 MB (A53 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 506 (725 MHz)",
        npu: "Qualcomm Hexagon 546",
        modem: "Snapdragon X9 LTE",
        dsp: "Qualcomm Hexagon 546",
        memory: "16-bit Single-channel LPDDR3 933 MHz"
    },
    {
        name: "Snapdragon 625/626",
        codename: "msmtitanium",
        partNumber: "MSM8953",
        releaseDate: "2016.02 / 2016.10",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "8x Cortex-A53 @ 2.02 GHz",
            l2Cache: "1 MB (Shared)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 506 (650 MHz)",
        npu: "unknown",
        modem: "Snapdragon X9 LTE",
        dsp: "Qualcomm Hexagon 546",
        memory: "16-bit Single-channel LPDDR3 933 MHz"
    },
    {
        name: "Snapdragon 615 / 616",
        codename: "unknown",
        partNumber: "MSM8936",
        releaseDate: "2014.02 / 2015.07",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.70 GHz + 4x Cortex-A53 @ 1.10 / 1.20 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 405 (550 MHz)",
        npu: "N/A",
        modem: "X5 LTE",
        dsp: "Qualcomm Hexagon V50",
        memory: "32-bit Single-channel LPDDR3 800 MHz"
    },
    {
        name: "Snapdragon 610",
        codename: "unknown",
        partNumber: "MSM8936",
        releaseDate: "2014.02",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.70 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 405 (550 MHz)",
        npu: "N/A",
        modem: "X5 LTE",
        dsp: "Qualcomm Hexagon V50",
        memory: "32-bit Single-channel LPDDR3 800 MHz"
    },
    {
        name: "Snapdragon 600",
        codename: "N/A",
        partNumber: "APQ8064T",
        releaseDate: "2013.01",
        process: "TSMC 28nm (28LP)",
        dieSize: "88.1mm²",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Krait 300 @ 1.50 / 1.70 / 1.90 GHz",
            l2Cache: "2 MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 320 (400 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Qualcomm Hexagon QDSP6 V4",
        memory: "32-bit Dual-channel LPDDR3 533 MHz"
    }
];

const snapdragon4Data = [
    {
        name: "Snapdragon 4 Gen 5 (tentative name)",
        codename: "unknown",
        process: "Samsung 4nm (4LPX)",
        partNumber: "SM4875",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 + 6x Cortex-A55",
            l2Cache: "2x 256KB (A78) + 6x 64KB (A55)",
            l3Cache: "1MB"
        },
        slc: "N/A",
        gpu: "Adreno",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon 5G sub-6 Rel.17",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 4s Gen 5 (tentative name)",
        codename: "Aldabra",
        process: "Samsung 4nm (4LPX)",
        partNumber: "SM4850",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 + 6x Cortex-A55",
            l2Cache: "2x 256KB (A78) + 6x 64KB (A55)",
            l3Cache: "1MB"
        },
        slc: "N/A",
        gpu: "Adreno",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon 5G sub-6 Rel.17",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 4 Gen 4",
        geekbench6: { single: "1035", multi: "2232" },
        wildlifeExtreme: "371",
        codename: "Clarence / Ravelin",
        partNumber: "SM4450-AF",
        releaseDate: "2025.12",
        process: "Samsung 4nm (4LPX)",
        dieSize: "40mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.30 GHz + 6x Cortex-A55 @ 2.00 GHz (Kryo)",
            l2Cache: "2x 256KB (A78) + 6x 64KB (A55)",
            l3Cache: "1MB"
        },
        slc: "N/A",
        gpu: "Adreno 613",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X61 5G",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR5 3200 MHz"
    },
    {
        name: "Snapdragon 4s Gen 2",
        geekbench6: { single: "857", multi: "1911" },
        wildlifeExtreme: "360",
        codename: "Kalpeni",
        partNumber: "SM4635",
        releaseDate: "2024.07",
        process: "Samsung 4nm (4LPX)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz (Kryo)",
            l2Cache: "2x 256KB (A78) + 6x 64KB (A55)",
            l3Cache: "1MB"
        },
        slc: "N/A",
        gpu: "Adreno 611",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon 5G Modem-RF (1 Gbps DL)",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 4 Gen 2",
        geekbench6: { single: "927", multi: "2128" },
        wildlifeExtreme: "366",
        codename: "Clarence / Ravelin",
        partNumber: "SM4450",
        releaseDate: "2023.06",
        process: "Samsung 4nm (4LPX)",
        dieSize: "40mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.20 GHz / 2.30GHz (AE) + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "2x 256KB (A78) + 6x 64KB (A55)",
            l3Cache: "1MB"
        },
        slc: "N/A",
        gpu: "Adreno 613 (955 MHz / 1010MHz AE)",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X61 5G",
        dsp: "Qualcomm Hexagon",
        memory: "Dual-channel LPDDR5 3200 / LPDDR4X 2133"
    },
    {
        name: "Snapdragon 4 Gen 1",
        geekbench6: { single: "844", multi: "2087" },
        wildlifeExtreme: "350",
        codename: "Baikal",
        partNumber: "SM4375",
        releaseDate: "2022.09",
        process: "TSMC 6nm (N6)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "2x 256KB (A78) + 6x 64KB (A55)",
            l3Cache: "1MB"
        },
        slc: "N/A",
        gpu: "Adreno 619 (700 MHz)",
        npu: "Qualcomm Hexagon NPU",
        modem: "Snapdragon X51 5G",
        dsp: "Qualcomm Hexagon",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 480+ 5G",
        geekbench6: { single: "750", multi: "1950" },
        wildlifeExtreme: "280",
        codename: "Holi",
        partNumber: "SM4350-AC",
        releaseDate: "2021.10",
        process: "Samsung 8nm (8LPP)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.20 GHz + 6x Cortex-A55 @ 1.90 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "Adreno 619 (650 MHz)",
        npu: "Qualcomm Hexagon 686",
        modem: "Snapdragon X51 5G",
        dsp: "Qualcomm Hexagon 686",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 480 5G",
        geekbench6: { single: "740", multi: "1900" },
        wildlifeExtreme: "280",
        codename: "Holi",
        partNumber: "SM4350",
        releaseDate: "2021.01",
        process: "Samsung 8nm (8LPP)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "Adreno 619 (650 MHz)",
        npu: "Qualcomm Hexagon 686",
        modem: "Snapdragon X51 5G",
        dsp: "Qualcomm Hexagon 686",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Snapdragon 460",
        geekbench6: { single: "300", multi: "1200" },
        wildlifeExtreme: "70",
        codename: "bengal",
        partNumber: "SM4250-AA",
        releaseDate: "2020.01",
        process: "Samsung 11nm (11LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 1.80 GHz + 4x Cortex-A53 @ 1.6 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 610 (600 MHz)",
        npu: "Qualcomm Hexagon 683",
        modem: "Snapdragon X11 LTE",
        dsp: "Qualcomm Hexagon 683",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Snapdragon 450",
        codename: "msmtitanium",
        partNumber: "SDM450",
        releaseDate: "2017.06",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "8x Cortex-A53 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 506 (600 MHz)",
        npu: "N/A",
        modem: "Snapdragon X9 LTE",
        dsp: "Qualcomm Hexagon 546",
        memory: "16-bit Single-channel LPDDR3 933 MHz"
    },
    {
        name: "Snapdragon 439",
        codename: "unknown",
        partNumber: "SDM439",
        releaseDate: "2018.06",
        process: "TSMC 12nm (FinFET)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.00 GHz + 4x Cortex-A53 @ 1.45 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 505 (650 MHz)",
        npu: "N/A",
        modem: "Snapdragon X6 LTE",
        dsp: "Qualcomm Hexagon 536",
        memory: "16-bit Single-channel LPDDR3 800 MHz"
    },
    {
        name: "Snapdragon 435",
        codename: "MSM8940",
        partNumber: "MSM8940",
        releaseDate: "2016.02",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.40 GHz + 4x Cortex-A53 @ 1.10 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 505 (450 MHz)",
        npu: "N/A",
        modem: "Snapdragon X9 LTE",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 800 MHz"
    },
    {
        name: "Snapdragon 430",
        codename: "MSM8937",
        partNumber: "MSM8937",
        releaseDate: "2015.09",
        process: "TSMC 28nm (28LP)",
        dieSize: "65.95mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.40 GHz + 4x Cortex-A53 @ 1.10 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 505 (450 MHz)",
        npu: "N/A",
        modem: "Snapdragon X6 LTE",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 800 MHz"
    },
    {
        name: "Snapdragon 429",
        codename: "SDA429 / SDM429",
        partNumber: "SDM429",
        releaseDate: "2018.06",
        process: "TSMC 12nm (FinFET)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.02 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 504 (320 MHz)",
        npu: "N/A",
        modem: "Snapdragon X6 LTE",
        dsp: "Qualcomm Hexagon 536",
        memory: "16-bit Single-channel LPDDR3 800 MHz"
    },
    {
        name: "Snapdragon 427",
        codename: "MSM8920",
        partNumber: "MSM8920",
        releaseDate: "2016.10",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.40 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 308 (598 MHz)",
        npu: "N/A",
        modem: "Snapdragon X9 LTE",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 667 MHz"
    },
    {
        name: "Snapdragon 425",
        codename: "MSM8917",
        partNumber: "MSM8917",
        releaseDate: "2016.02",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.40 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 308 (598 MHz)",
        npu: "N/A",
        modem: "Snapdragon X6 LTE",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 667 MHz"
    },
    {
        name: "Snapdragon 415",
        codename: "MSM8929",
        partNumber: "MSM8929",
        releaseDate: "2015.02",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.36 GHz + 4x Cortex-A53 @ 1 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 405 (465 MHz)",
        npu: "N/A",
        modem: "Snapdragon X5 LTE",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 667 MHz"
    },
    {
        name: "Snapdragon 412",
        codename: "MSM8916 v2",
        partNumber: "MSM8916-v2",
        releaseDate: "2015.08",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.40 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 306 (450 MHz)",
        npu: "N/A",
        modem: "Snapdragon X5 LTE",
        dsp: "Qualcomm Hexagon QDSP6 V5",
        memory: "32-bit Single-channel LPDDR3 600 MHz"
    },
    {
        name: "Snapdragon 410",
        codename: "MSM8916",
        partNumber: "MSM8916",
        releaseDate: "2013.12",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.20 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 306 (450 MHz)",
        npu: "N/A",
        modem: "Snapdragon X5 LTE",
        dsp: "Qualcomm Hexagon QDSP6 V5",
        memory: "32-bit Single-channel LPDDR2/3 533 MHz"
    },
    {
        name: "Snapdragon 400",
        codename: "MSM8226 / MSM8926",
        partNumber: "MSM8926",
        releaseDate: "2013.12",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A7 @ 1.20 to 1.6 GHz",
            l2Cache: "2MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 305/306 (400 to 450 MHz)",
        npu: "N/A",
        modem: "Qualcomm Gobi / Snapdragon X5 LTE",
        dsp: "Qualcomm Hexagon QDSP6 V4",
        memory: "32-bit Single-channel LPDDR3 533 MHz"
    }
];

const snapdragon2Data = [
    {
        name: "Snapdragon 215",
        codename: "unknown",
        partNumber: "QM215",
        releaseDate: "2019.07",
        process: "TSMC 28nm (28LP)",
        dieSize: "49.75mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.30 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 308 (485 MHz)",
        npu: "N/A",
        modem: "Snapdragon X5 LTE (Cat 4)",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 672 MHz"
    },
    {
        name: "Snapdragon 212",
        codename: "unknown",
        partNumber: "MSM8909 v2",
        releaseDate: "2015.08",
        process: "TSMC 28nm (28LP)",
        dieSize: "52.8mm²",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A7 @ 1.30 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 304 (409 MHz)",
        npu: "N/A",
        modem: "Snapdragon X5 LTE (Cat 4)",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 533 MHz"
    },
    {
        name: "Snapdragon 210",
        codename: "unknown",
        partNumber: "MSM8909",
        releaseDate: "2014.09",
        process: "TSMC 28nm (28LP)",
        dieSize: "52.8mm²",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A7 @ 1.10 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 304 (409 MHz)",
        npu: "N/A",
        modem: "Snapdragon X5 LTE (Cat 4)",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 533 MHz"
    },
    {
        name: "Snapdragon 208",
        codename: "unknown",
        partNumber: "MSM8208",
        releaseDate: "2014.09",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "2x Cortex-A7 @ 1.10 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 304 (300 MHz)",
        npu: "N/A",
        modem: "Gobi 3G (HSPA+)",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 400 MHz"
    },
    {
        name: "Snapdragon 205",
        codename: "unknown",
        partNumber: "MSM8905",
        releaseDate: "2017.03",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "2x Cortex-A7 @ 1.10 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 304 (400 MHz)",
        npu: "N/A",
        modem: "Snapdragon X5 LTE (Cat 4)",
        dsp: "Qualcomm Hexagon 536",
        memory: "32-bit Single-channel LPDDR3 384 MHz"
    },
    {
        name: "Snapdragon 200",
        codename: "MSM8212",
        partNumber: "MSM8212",
        releaseDate: "2013.06",
        process: "TSMC 28nm (28LP)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A7 @ 1.20 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Adreno 302 (400 MHz)",
        npu: "N/A",
        modem: "Gobi 3G (HSPA+)",
        dsp: "Qualcomm Hexagon QDSP6 V4",
        memory: "32-bit Single-channel LPDDR2 333 MHz"
    }
];
const snapdragonXData = [
    {
        name: "Snapdragon X2 Elite Extreme (X2E-96-100)",
        geekbench6: { single: "4080", multi: "23491" },
        steelNomadLite: "5687",
        partNumber: "X2E-96-100",
        releaseDate: "2025.09",
        process: "TSMC 3nm (N3P + N3X)",
        cpu: {
            specs: "6x Oryon-P 5GHz (1c), 4.8GHz (2c), 4.47GHz (3c), 4.4GHz (4-6c) + 6x Oryon-P 5GHz (1c), 4.8GHz (2c), 4.47GHz (3c), 4.4GHz (4-6c) + 6x Oryon-M 3.6GHz",
            l2Cache: "16MB (cluster 1) + 16MB (cluster 2) + 12MB (cluster 3)"
        },
        slc: "8MB",
        gpu: "Qualcomm Adreno X2-90 (4-slice) 1.85 GHz",
        modem: "Snapdragon X75 5G",
        npu: "Qualcomm Hexagon (80 TOPS)",
        memory: "192-bit LPDDR5X-9523",
    },
    {
        name: "Snapdragon X2 Elite (X2E-88-100)",
        geekbench6: { single: "3838", multi: "20320" },
        steelNomadLite: "4123",
        partNumber: "X2E-88-100",
        releaseDate: "2025.09",
        process: "TSMC 3nm (N3P)",
        cpu: {
            specs: "6x Oryon-P 4.7 GHz (dual-core boost), 4.4GHz (all core) + 6x Oryon-M 4.4GHz + 6x Oryon-M 3.6GHz",
            l2Cache: "16MB (cluster 1) + 16MB (cluster 2) + 12MB (cluster 3)"
        },
        slc: "8MB",
        gpu: "Qualcomm Adreno X2-90 (4-slice) 1.70 GHz",
        npu: "Qualcomm Hexagon (80 TOPS)",
        modem: "Snapdragon X75 5G",
        memory: "128-bit LPDDR5X-9523 (152 GB/s)",
    },
    {
        name: "Snapdragon X2 Elite (X2E-80-100)",
        geekbench6: { single: "3770", multi: "15971" },
        steelNomadLite: "4123",
        partNumber: "X2E-80-100",
        releaseDate: "2025.09",
        process: "TSMC 3nm (N3P)",
        cpu: {
            specs: "6x Oryon-P 4.7 GHz (single-core boost), 4.4GHz (all core) + 6x Oryon-M 3.6GHz",
            l2Cache: "16MB (cluster 1) + 12MB (cluster 2)"
        },
        slc: "8MB",
        gpu: "Qualcomm Adreno X2-85 1.70 GHz",
        npu: "Qualcomm Hexagon (80 TOPS)",
        modem: "Snapdragon X75 5G",
        memory: "128-bit LPDDR5X-9523 (152 GB/s)",
    },
    {
        name: "Snapdragon X Elite (X1E-00-1DE)",
        geekbench6: { single: "3020", multi: "15969" },
        wildlifeExtreme: "6139",
        steelNomadLite: "2080",
        dieSize: "173mm²",
        partNumber: "X1E-00-1DE",
        releaseDate: "2024.06",
        process: "TSMC 4nm (N4P)",
        cpu: {
            specs: "4x Oryon 4.3GHz (dual-core boost) 3.8 GHz (all core) + 4x Oryon 3.8 GHz + 4x Oryon 3.8 GHz",
            l2Cache: "12MB (cluster 1) + 12MB (cluster 1) + 12MB (cluster 1)"
        },
        gpu: "Qualcomm Adreno X1-85 1.50 GHz",
        npu: "Qualcomm Hexagon (45 TOPS)",
        memory: "128-bit LPDDR5X-8448 (135 GB/s)",
    },
    {
        name: "Snapdragon X Elite (X1E-84-100)",
        geekbench6: { single: "2882", multi: "15412" },
        wildlifeExtreme: "6139",
        steelNomadLite: "2080",
        dieSize: "173mm²",
        partNumber: "X1E-84-100",
        releaseDate: "2024.06",
        process: "TSMC 4nm (N4P)",
        cpu: {
            specs: "4x Oryon 4.2GHz (dual-core boost) 3.8 GHz (all core) + 4x Oryon 3.8 GHz + 4x Oryon 3.8 GHz",
            l2Cache: "12MB (cluster 1) + 12MB (cluster 1) + 12MB (cluster 1)"
        },
        slc: "6MB",
        gpu: "Qualcomm Adreno X1-85 1.50 GHz",
        npu: "Qualcomm Hexagon (45 TOPS)",
        memory: "128-bit LPDDR5X-8448 (135 GB/s)",
    },
    {
        name: "Snapdragon X Elite (X1E-80-100)",
        geekbench6: { single: "2805", multi: "14390" },
        wildlifeExtreme: "5020",
        steelNomadLite: "1702",
        dieSize: "173mm²",
        partNumber: "X1E-80-100",
        releaseDate: "2024.06",
        process: "TSMC 4nm (N4P)",
        cpu: {
            specs: "4x Oryon 4GHz (dual-core boost) 3.4 GHz (all core) + 4x Oryon 3.4 GHz + 4x Oryon 3.4 GHz",
            l2Cache: "12MB (cluster 1) + 12MB (cluster 1) + 12MB (cluster 1)"
        },
        slc: "6MB",
        gpu: "Qualcomm Adreno X1-85 1.25 GHz",
        npu: "Qualcomm Hexagon (45 TOPS)",
        memory: "128-bit LPDDR5X-8448 (135 GB/s)",
    },
    {
        name: "Snapdragon X Elite (X1E-78-100)",
        geekbench6: { single: "2400", multi: "14050" },
        wildlifeExtreme: "5020",
        steelNomadLite: "1702",
        partNumber: "X1E-78-100",
        releaseDate: "2024.06",
        dieSize: "173mm²",
        process: "TSMC 4nm (N4P)",
        cpu: {
            specs: "4x Oryon 3.4 GHz + 4x Oryon 3.4 GHz + 4x Oryon 3.4 GHz",
            l2Cache: "12MB (cluster 1) + 12MB (cluster 1) + 12MB (cluster 1)"
        },
        gpu: "Qualcomm Adreno X1-85 1.25 GHz",
        npu: "Qualcomm Hexagon (45 TOPS)",
        memory: "128-bit LPDDR5X-8448 (135 GB/s)",
    },
];

const dimensity9000Data = [
    {
        name: "MediaTek Dimensity 9600",
        releaseDate: "2026.09",
        process: "TSMC 2nm (N3P)",
        cpu: {
            specs: "2x C2-Ultra + 3x C2-Pro + 3x C1-Pro",
        },
        gpu: "arm Mali-G2-Ultra",
        memory: "24-bit Quad-channel LPDDR6-10667"
    },
    {
        name: "MediaTek Dimensity 9500s",
        geekbench6: { single: "2910", multi: "8930" },
        wildlifeExtreme: "6432",
        steelNomadLite: "2683",
        partNumber: "MT6991",
        releaseDate: "2026.01",
        process: "TSMC 3nm (N3E)",
        dieSize: "126.26mm²",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-X925 @ 3.73 GHz + 3x Cortex-X4 @ 3.30 GHz + 4x Cortex-A720 @ 2.40 GHz",
            l2Cache: "2 MB (X925), 1 MB (X4), 512 KB (A720)",
            l3Cache: "12 MB"
        },
        slc: "10 MB",
        gpu: "ARM Immortalis-G925 MC11 (Poco) / MC12 (1612 MHz)",
        npu: "MediaTek NPU 890",
        dsp: "MediaTek Imagiq 1090",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "MediaTek Dimensity 9500",
        geekbench6: { single: "3635", multi: "10941" },
        wildlifeExtreme: "8251",
        steelNomadLite: "3386",
        partNumber: "MT6993",
        releaseDate: "2025.09",
        process: "TSMC 3nm (N3P)",
        dieSize: "140.79mm²",
        architecture: "ARMv9.3-A",
        cpu: {
            specs: "1x C1-Ultra @ 4.21 GHz + 3x C1-Premium @ 3.50 GHz + 4x C1-Pro @ 2.70 GHz",
            l2Cache: "2 MB (C1-Ultra) + 3x 1 MB (C1-Premium)+ 3x 512 KB (C1-Pro)",
            l3Cache: "16 MB"
        },
        slc: "10 MB",
        gpu: "ARM Mali-G1 Ultra MC12 (1716 MHz)",
        modem: "MediaTek M90 5G",
        npu: "MediaTek NPU 990",
        dsp: "MediaTek Imagiq 1190",
        memory: "LPDDR5X 10667 Mbps"
    },
    {
        name: "MediaTek Dimensity 9400+",
        geekbench6: { single: "2910", multi: "8930" },
        wildlifeExtreme: "6432",
        steelNomadLite: "2683",
        partNumber: "MT6991Z",
        releaseDate: "2025.04",
        process: "TSMC 3nm (N3E)",
        dieSize: "126.26mm²",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-X925 @ 3.73 GHz + 3x Cortex-X4 @ 3.30 GHz + 4x Cortex-A720 @ 2.40 GHz",
            l2Cache: "2 MB (X925), 1 MB (X4), 512 KB (A720)",
            l3Cache: "12 MB"
        },
        slc: "10 MB",
        gpu: "ARM Immortalis-G925 MC12 (1612 MHz)",
        modem: "MediaTek 5G",
        npu: "MediaTek NPU 890",
        dsp: "MediaTek Imagiq 1090",
        memory: "16-bit Quad-Channel LPDDR5X 10667"
    },
    {
        name: "MediaTek Dimensity 9400",
        geekbench6: { single: "2878", multi: "8823" },
        wildlifeExtreme: "6383",
        steelNomadLite: "2683",
        partNumber: "MT6991",
        releaseDate: "2024.10",
        process: "TSMC 3nm (N3E)",
        dieSize: "126.26mm²",
        architecture: "ARMv9.2-A",
        modem: "MediaTek 5G",
        cpu: {
            specs: "1x Cortex-X925 @ 3.63 GHz + 3x Cortex-X4 @ 3.30 GHz + 4x Cortex-A720 @ 2.40 GHz",
            l2Cache: "2 MB (X925), 1 MB (X4), 512 KB (A720)",
            l3Cache: "12 MB"
        },
        slc: "10 MB",
        gpu: "ARM Immortalis-G925 MC12 (1612 MHz)",
        npu: "MediaTek NPU 890",
        dsp: "MediaTek Imagiq 1090",
        memory: "16-bit Quad-Channel LPDDR5X 10667"
    },
    {
        name: "MediaTek Dimensity 9400e",
        geekbench6: { single: "2250", multi: "7600" },
        wildlifeExtreme: "5812",
        steelNomadLite: "2341",
        partNumber: "MT6989E",
        releaseDate: "2025.05",
        process: "TSMC 4nm (N4P)",
        dieSize: "140.3 mm²",
        architecture: "ARMv9.2-A",
        modem: "MediaTek 5G",
        cpu: {
            specs: "1x Cortex-X4 @ 3.40 GHz + 3x Cortex-X4 @ 2.85 GHz + 4x Cortex-A720 @ 2.00 GHz",
            l2Cache: "1 MB (Prime X4), 3x 512 KB (X4), 256 KB (A720)",
            l3Cache: "8 MB"
        },
        slc: "10 MB",
        gpu: "ARM Immortalis-G720 MC12 (1300 MHz)",
        npu: "MediaTek APU 790",
        dsp: "MediaTek Imagiq 990",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "MediaTek Dimensity 9300+",
        geekbench6: { single: "2250", multi: "7600" },
        wildlifeExtreme: "5812",
        steelNomadLite: "2341",
        partNumber: "MT6989Z",
        releaseDate: "2024.05",
        process: "TSMC 4nm (N4P)",
        dieSize: "140.3 mm²",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-X4 @ 3.40 GHz + 3x Cortex-X4 @ 2.85 GHz + 4x Cortex-A720 @ 2.00 GHz",
            l2Cache: "1 MB (Prime X4), 3x 512 KB (X4), 256 KB (A720)",
            l3Cache: "8 MB"
        },
        slc: "10 MB",
        modem: "MediaTek 5G",
        gpu: "ARM Immortalis-G720 MC12 (1300 MHz)",
        npu: "MediaTek APU 790",
        dsp: "MediaTek Imagiq 990",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "MediaTek Dimensity 9300",
        geekbench6: { single: "2197", multi: "7389" },
        wildlifeExtreme: "5822",
        steelNomadLite: "2321",
        partNumber: "MT6989",
        releaseDate: "2023.11",
        process: "TSMC 4nm (N4P)",
        dieSize: "140.3 mm²",
        architecture: "ARMv9.2-A",
        modem: "MediaTek M80 5G",
        cpu: {
            specs: "1x Cortex-X4 @ 3.25 GHz + 3x Cortex-X4 @ 2.85 GHz + 4x Cortex-A720 @ 2.00 GHz",
            l2Cache: "1 MB (Prime X4), 512 KB (X4), 256 KB (A720)",
            l3Cache: "8 MB (Shared)"
        },
        slc: "10 MB",
        gpu: "ARM Immortalis-G720 MC12 (1300 MHz)",
        npu: "MediaTek APU 790",
        dsp: "MediaTek Imagiq 990",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "MediaTek Dimensity 9200+",
        geekbench6: { single: "2100", multi: "5550" },
        wildlifeExtreme: "3976",
        partNumber: "MT6985Z",
        releaseDate: "2023.05",
        process: "TSMC 4nm (N4P)",
        dieSize: "120.5 mm²",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-X3 @ 3.35 GHz + 3x Cortex-A715 @ 3.00 GHz + 4x Cortex-A510 @ 2.00 GHz",
            l2Cache: "1 MB (X3) + 3x 512 KB (A715) + 2x 512 KB (4x A510)",
            l3Cache: "8 MB"
        },
        slc: "6 MB",
        modem: "MediaTek M80 5G",
        gpu: "ARM Immortalis-G715 MC11 (1150 MHz)",
        npu: "MediaTek APU 690",
        dsp: "MediaTek Imagiq 890",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "MediaTek Dimensity 9200",
        geekbench6: { single: "1950", multi: "5400" },
        wildlifeExtreme: "3900",
        partNumber: "MT6985",
        releaseDate: "2022.11",
        process: "TSMC 4nm (N4P)",
        dieSize: "120.5 mm²",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-X3 @ 3.05 GHz + 3x Cortex-A715 @ 2.85 GHz + 4x Cortex-A510 @ 1.80 GHz",
            l2Cache: "1 MB (X3) + 3x 512 KB (A715) + 2x 512 KB (4x A510)",
            l3Cache: "8 MB"
        },
        slc: "6 MB",
        gpu: "ARM Immortalis-G715 MC11 (981 MHz)",
        modem: "MediaTek M80 5G",
        npu: "MediaTek APU 690",
        dsp: "MediaTek Imagiq 890",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "MediaTek Dimensity 9000+",
        geekbench6: { single: "1700", multi: "4500" },
        wildlifeExtreme: "2460",
        partNumber: "MT6983",
        releaseDate: "2022.06",
        process: "TSMC 4nm (N4)",
        dieSize: "112.78 mm²",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-X2 @ 3.20 GHz + 3x Cortex-A710 @ 2.85 GHz + 4x Cortex-A510 @ 1.80 GHz",
            l2Cache: "1 MB (X2) + 3x 512 KB (A710) + 2x 512 KB (4x A510)",
            l3Cache: "8 MB"
        },
        slc: "6 MB",
        modem: "MediaTek 5G",
        gpu: "ARM Mali-G710 MC10 (955 MHz)",
        npu: "MediaTek APU 590",
        dsp: "MediaTek Imagiq 790",
        memory: "16-bit Quad-Channel LPDDR5X 7500"
    },
    {
        name: "MediaTek Dimensity 9000",
        geekbench6: { single: "1600", multi: "4300" },
        wildlifeExtreme: "2360",
        partNumber: "MT6983",
        releaseDate: "2021.11",
        process: "TSMC 4nm (N4)",
        dieSize: "112.78 mm²",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-X2 @ 3.05 GHz + 3x Cortex-A710 @ 2.85 GHz + 4x Cortex-A510 @ 1.80 GHz",
            l2Cache: "1 MB (X2) + 3x 512 KB (A710) + 2x 512 KB (4x A510)",
            l3Cache: "8 MB"
        },
        slc: "6 MB",
        modem: "MediaTek 5G",
        gpu: "ARM Mali-G710 MC10 (848 MHz)",
        npu: "MediaTek APU 590",
        dsp: "MediaTek Imagiq 790",
        memory: "LPDDR5X 7500 Mbps"
    }
];

const dimensity8000Data = [
    {
        name: "MediaTek Dimensity 8500",
        partNumber: "MT6899Z",
        geekbench6: { single: "1776", multi: "7024s" },
        wildlifeExtreme: "4717",
        steelNomadLite: "1502",
        releaseDate: "2026.01",
        process: "TSMC N4P",
        dieSize: "Unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A725 @ 3.4 GHz + 3x Cortex-A725 @ 3.2 GHz + 4x Cortex-A725 @ 2.2 GHz",
            l2Cache: "1 MB (A725) + 3x 512 KB (A725) + 4x 256 KB (A725)",
            l3Cache: "6 MB"
        },
        slc: "5 MB",
        gpu: "ARM Mali-G720 MC8 (1.3 GHz)",
        npu: "MediaTek NPU 880",
        modem: "MediaTek T800 Modem",
        memory: "16-bit Quad-Channel LPDDR5X 9600"
    },
    {
        name: "MediaTek Dimensity 8400/8450",
        partNumber: "MT6899",
        geekbench6: { single: "1722", multi: "6906" },
        wildlifeExtreme: "4128",
        steelNomadLite: "1446",
        releaseDate: "2024.12.24",
        process: "TSMC N4P",
        dieSize: "Unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A725 @ 3.25 GHz + 3x Cortex-A725 @ 3.0 GHz + 4x Cortex-A725 @ 2.1 GHz",
            l2Cache: "1 MB (A725) + 3x 512 KB (A725) + 4x 256 KB (A725)",
            l3Cache: "6 MB"
        },
        slc: "5 MB",
        gpu: "ARM Mali-G720 MC7 (1.3 GHz)",
        npu: "MediaTek NPU 880",
        modem: "MediaTek T800 Modem",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "MediaTek Dimensity 8300 / 8350",
        geekbench6: { single: "1450", multi: "4700" },
        wildlifeExtreme: "3251",
        partNumber: "MT6897",
        releaseDate: "2023.11.21",
        process: "TSMC N4P",
        dieSize: "Unknown",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-A715 @ 3.35 GHz + 3x Cortex-A715 @ 3.20 GHz + 4x Cortex-A510 @ 2.20 GHz",
            l2Cache: "4x 512KB (A715) + 4x 128KB (A510)",
            l3Cache: "4 MB"
        },
        slc: "4MB",
        gpu: "ARM Mali-G615 MC6 / MC5 (Lenovo) (1400 MHz)",
        npu: "MediaTek APU 780",
        modem: "MediaTek T800 Modem",
        memory: "16-bit Quad-Channel LPDDR5X 8533"
    },
    {
        name: "MediaTek Dimensity 8200",
        geekbench6: { single: "1250", multi: "3900" },
        wildlifeExtreme: "1603",
        partNumber: "MT6896",
        releaseDate: "2022.Q4",
        process: "TSMC N4",
        dieSize: "84.93mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A78 @ 3.10 GHz + 3x Cortex-A78 @ 3.00 GHz + 4x Cortex-A55 @ 2.00 GHz",
            l2Cache: "4x 512 KB (A78) + 4x 128 KB (A55)",
            l3Cache: "4 MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G610 MC6 (950 MHz)",
        npu: "MediaTek NPU 580",
        modem: "MediaTek M70 5G Modem (Sub-6)",
        memory: "LPDDR5 3200 MHz"
    },
    {
        name: "MediaTek Dimensity 8100",
        geekbench6: { single: "1150", multi: "3700" },
        wildlifeExtreme: "1587",
        partNumber: "MT6895Z",
        releaseDate: "2022.03.01",
        process: "TSMC N5P",
        dieSize: "84.93mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.85 GHz + 4x Cortex-A55 @ 2.00 GHz",
            l2Cache: "4x 512 KB (A78) + 4x 128 KB (A55)",
            l3Cache: "4 MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G610 MC6 (852 MHz)",
        npu: "MediaTek NPU 580",
        modem: "MediaTek M70 5G Modem (Sub-6)",
        memory: "LPDDR5 3200 MHz"
    },
    {
        name: "MediaTek Dimensity 8050",
        geekbench6: { single: "1105", multi: "3252" },
        wildlifeExtreme: "1325",
        partNumber: "MT6983Z",
        releaseDate: "2023",
        process: "TSMC N6",
        dieSize: "95.78mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A78 @ 3.0 GHz + 3x Cortex-A78 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512KB (A78) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MP9 (886 MHz)",
        npu: "MediaTek APU 570",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 8020",
        geekbench6: { single: "1043", multi: "3103" },
        wildlifeExtreme: "1228",
        partNumber: "MT6981Z",
        releaseDate: "2023",
        process: "TSMC N6",
        dieSize: "95.78mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512KB (A78) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MP9 (836 MHz)",
        npu: "MediaTek APU 570",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 8000",
        geekbench6: { single: "1080", multi: "3600" },
        wildlifeExtreme: "1500",
        partNumber: "MT6895",
        releaseDate: "2022.03.01",
        process: "TSMC N5P",
        dieSize: "84.93mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.75 GHz + 4x Cortex-A55 @ 2.00 GHz",
            l2Cache: "4x 512 KB (A78) + 4x 128 KB (A55)",
            l3Cache: "4 MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G610 MC6 (700 MHz)",
        npu: "MediaTek NPU 580",
        modem: "MediaTek M70 5G Modem (Sub-6)",
        memory: "LPDDR5 3200 MHz"
    }
];
const dimensity7000Data = [
    {
        name: "MediaTek Dimensity 7100",
        partNumber: "MT6858",
        releaseDate: "2025.Q4",
        process: "TSMC N6",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        geekbench6: { single: "984", multi: "2877" },
        wildlifeExtreme: "709",
        cpu: {
            specs: "4x Cortex-A78 @ 2.4 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "Mali-G610 MC2 1GHz",
        npu: "MediaTek NPU 550",
        modem: "MediaTek 5G Modem",
        memory: "16-bit Dual-channel LPDDR5 5500"
    },
    {
        name: "MediaTek Dimensity 7400 / 7400X",
        partNumber: "MT6878V/TZA / MT6878V/TFZA",
        releaseDate: "2024",
        process: "TSMC N4",
        geekbench6: { single: "1080", multi: "3071" },
        wildlifeExtreme: "902",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G615 MC2 (1.3GHz)",
        npu: "MediaTek NPU 655",
        modem: "MediaTek 5G Modem",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "MediaTek Dimensity 7350",
        geekbench6: { single: "1220", multi: "3100" },
        wildlifeExtreme: "1212",
        partNumber: "MT6886V/TCZA",
        releaseDate: "2024",
        process: "TSMC N4P",
        dieSize: "Unknown",
        architecture: "ARMv9-A",
        cpu: {
            specs: "2x Cortex-A715 @ 3.0 GHz + 6x Cortex-A510 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "2 MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G610 MC4 (1300 MHz)",
        npu: "MediaTek NPU 650",
        modem: "MediaTek M70 5G Modem",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "MediaTek Dimensity 7300 / 7300X",
        partNumber: "MT6878",
        releaseDate: "2024",
        process: "TSMC N4",
        dieSize: "Unknown",
        geekbench6: { single: "1041", multi: "3031" },
        wildlifeExtreme: "892",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.5 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G615 MC2 (1047MHz)",
        npu: "MediaTek NPU 655",
        modem: "MediaTek 5G Modem (Sub-6 3.27 Gbps)",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "MediaTek Dimensity 7200",
        geekbench6: { single: "1239", multi: "2621" },
        wildlifeExtreme: "1150",
        partNumber: "MT6886",
        releaseDate: "2023.02",
        process: "TSMC N4P",
        dieSize: "Unknown",
        architecture: "ARMv9-A",
        cpu: {
            specs: "2x Cortex-A715 @ 2.80 GHz + 6x Cortex-A510 @ 2.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "2 MB"
        },
        slc: "Not specified",
        gpu: "ARM Mali-G610 MC4 (1130 MHz)",
        npu: "MediaTek NPU 650",
        modem: "MediaTek M70 5G Modem (Sub-6 4.77 Gbps)",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "MediaTek Dimensity 7060",
        partNumber: "MT6855B",
        releaseDate: "2025.06",
        process: "TSMC 6nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.60 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "IMG BXM-8-256 @ 950 MHz",
        npu: "MediaTek NPU 550",
        modem: "MediaTek 5G Modem (Sub-6 2.77 Gbps)",
        memory: "16-bit Dual-channel LPDDR5 5500"
    },
    {
        name: "MediaTek Dimensity 7050",
        geekbench6: { single: "967", multi: "2271" },
        wildlifeExtreme: "636",
        partNumber: "MT6877",
        releaseDate: "2023",
        process: "TSMC 6nm",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.6 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G68 MC4 (950MHz)",
        npu: "MediaTek NPU 550",
        modem: "MediaTek 5G Modem",
        memory: "16-bit Dual-channel LPDDR5 5500"
    },
    {
        name: "MediaTek Dimensity 7030",
        geekbench6: { single: "1050", multi: "2500" },
        wildlifeExtreme: "680",
        partNumber: "MT6855 (Renamed Dimensity 1050)",
        releaseDate: "2023",
        process: "TSMC 6nm",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.5 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G610 MC3 (1GHz)",
        npu: "MediaTek APU 550",
        modem: "MediaTek 5G Modem (mmWave + Sub-6)",
        memory: "16-bit Dual-channel LPDDR5 5500"
    },
    {
        name: "MediaTek Dimensity 7025",
        geekbench6: { single: "1020", multi: "2450" },
        wildlifeExtreme: "327",
        partNumber: "MT6855V/ATZA",
        releaseDate: "2024",
        process: "TSMC 6nm",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.5 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "IMG BXM-8-256 (950MHz)",
        npu: "MediaTek APU 550",
        modem: "MediaTek 5G Modem",
        memory: "16-bit Dual-channel LPDDR5 5500"
    },
    {
        name: "MediaTek Dimensity 7020 / 930",
        partNumber: "MT6855",
        releaseDate: "2023",
        process: "TSMC 6nm",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.2 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Not specified",
        gpu: "IMG BXM-8-256",
        npu: "Not specified",
        modem: "MediaTek 5G Modem",
        memory: "16-bit Dual-channel LPDDR5 5500"
    }
];

const dimensity6000Data = [
    {
        name: "MediaTek Dimensity 6500",
        geekbench6: { single: "875", multi: "2176" },
        wildlifeExtreme: "380",
        partNumber: "MT6835",
        releaseDate: "2026.04",
        process: "TSMC N6",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.6 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "arm Mali-G57 MC2",
        npu: "MediaTek NPU",
        modem: "MediaTek 5G Modem (Sub-6 3.3 Gbps)",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 6400",
        geekbench6: { single: "854", multi: "2176" },
        wildlifeExtreme: "380",
        partNumber: "MT6835",
        releaseDate: "2025.Q1",
        process: "TSMC N6",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.5 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "arm Mali-G57 MC2 1.07 GHz",
        npu: "MediaTek NPU",
        modem: "MediaTek 5G Modem (Sub-6 3.3 Gbps)",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 6300",
        geekbench6: { single: "840", multi: "2123" },
        wildlifeExtreme: "370",
        partNumber: "MT6835",
        releaseDate: "2024.Q2",
        process: "TSMC N6",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.4 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "2x ARM Mali-G57 (1.07 GHz)",
        npu: "MediaTek NPU",
        modem: "MediaTek 5G Modem (Sub-6 3.3 Gbps)",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 6100+",
        geekbench6: { single: "830", multi: "1950" },
        wildlifeExtreme: "360",
        partNumber: "MT6835",
        releaseDate: "2023.Q3",
        process: "TSMC N6",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.2 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "2x ARM Mali-G57 (962 MHz)",
        npu: "MediaTek NPU",
        modem: "MediaTek 5G Modem (Sub-6 3.3 Gbps)",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 6080",
        geekbench6: { single: "796", multi: "1918" },
        wildlifeExtreme: "483",
        partNumber: "MT6833",
        releaseDate: "2023.Q3",
        process: "TSMC N6",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.4 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G57 MC2 (1068 MHz)",
        npu: "Unknown",
        modem: "MediaTek 5G Modem (Sub-6)",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 6020",
        geekbench6: { single: "702", multi: "1821" },
        wildlifeExtreme: "328",
        partNumber: "MT6833",
        releaseDate: "2023",
        process: "TSMC 7nm",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.2 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G57 MC2 (950 MHz)",
        npu: "N/A",
        modem: "MediaTek 5G Modem (Sub-6)",
        memory: "LPDDR4X 2133 MHz"
    }
];

const dimensity1000Data = [
    {
        name: "MediaTek Dimensity 1300",
        partNumber: "MT6893Z",
        releaseDate: "2022.04",
        process: "TSMC 6nm (N6)",
        dieSize: "95.78mm²",
        architecture: "ARMv8.2-A",
        geekbench6: { single: "1105", multi: "3252" },
        wildlifeExtreme: "1325",
        cpu: {
            specs: "1x Cortex-A78 @ 3.0 GHz + 3x Cortex-A78 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512 KB (A78) + 4x 128 KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MC9 (886 MHz)",
        npu: "MediaTek APU 3.0",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 1200",
        partNumber: "MT6893",
        releaseDate: "2021.01",
        process: "TSMC 6nm (N6)",
        dieSize: "95.78mm²",
        geekbench6: { single: "1105", multi: "3252" },
        wildlifeExtreme: "1325",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A78 @ 3.0 GHz + 3x Cortex-A78 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512 KB (A78) + 4x 128 KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MC9 (886 MHz)",
        npu: "MediaTek APU 3.0",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 1100 / Kompanio 1300T",
        partNumber: "MT6891Z",
        releaseDate: "2021.01",
        geekbench6: { single: "1043", multi: "3103" },
        wildlifeExtreme: "1228",
        process: "TSMC 6nm (N6)",
        dieSize: "95.78mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512 KB (A78) + 4x 128 KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MC9 (836 MHz)",
        npu: "MediaTek APU 3.0",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 1080",
        geekbench6: { single: "967", multi: "2271" },
        wildlifeExtreme: "636",
        partNumber: "MT6877",
        releaseDate: "2023",
        process: "TSMC 6nm",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.6 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G68 MC4 (950MHz)",
        npu: "MediaTek NPU 550",
        modem: "MediaTek 5G Modem",
        memory: "16-bit Dual-channel LPDDR5 5500"
    },
    {
        name: "MediaTek Dimensity 1000+",
        partNumber: "MT6889Z",
        releaseDate: "2020.05",
        geekbench6: { single: "992", multi: "3053" },
        wildlifeExtreme: "1228",
        process: "TSMC 7nm (N7)",
        dieSize: "95.78mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A77 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512 KB (A77) + 4x 128 KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MC9 (836 MHz)",
        npu: "MediaTek APU 3.0",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 1000L",
        partNumber: "MT6885Z",
        releaseDate: "2019.12",
        process: "TSMC 7nm (N7)",
        dieSize: "95.78mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A77 @ 2.2 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512 KB (A77) + 4x 128 KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MC7 (695 MHz)",
        npu: "MediaTek APU 3.0",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Dimensity 1000",
        partNumber: "MT6889",
        releaseDate: "2019.11",
        process: "TSMC 7nm (N7)",
        dieSize: "95.78mm²",
        geekbench6: { single: "992", multi: "3053" },
        wildlifeExtreme: "1228",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A77 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512 KB (A77) + 4x 128 KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G77 MC9 (836 MHz)",
        npu: "MediaTek APU 3.0",
        modem: "MediaTek M70 5G Modem",
        memory: "LPDDR4X 2133 MHz"
    }
];

const dimensity900Data = [
    {
        name: "MediaTek Dimensity 930",
        partNumber: "MT6855",
        releaseDate: "2022.05",
        process: "TSMC N6",
        dieSize: "45mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.2 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "IMG BXM-8-256 (950 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    },
    {
        name: "MediaTek Dimensity 920",
        partNumber: "MT6877T",
        releaseDate: "2021.05",
        geekbench6: { single: "911", multi: "2304" },
        wildlifeExtreme: "635",
        process: "TSMC N6",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.5 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G68 MC4 (950 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    },
    {
        name: "MediaTek Dimensity 900",
        partNumber: "MT6877",
        releaseDate: "2021.05",
        process: "TSMC N6",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.4 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G68 MC4 (902 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    }
];

const dimensity800Data = [
    {
        name: "MediaTek Dimensity 820",
        partNumber: "MT6875",
        releaseDate: "2020.05",
        process: "TSMC 7nm",
        geekbench6: { single: "843", multi: "2574" },
        dieSize: "67.12mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A76 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G57 MC5 (900 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    },
    {
        name: "MediaTek Dimensity 810",
        partNumber: "MT6833P/T",
        releaseDate: "2021.08",
        geekbench6: { single: "759", multi: "1963" },
        wildlifeExtreme: "369",
        process: "TSMC N6",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.4 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G57 MC2 (1068 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    },
    {
        name: "MediaTek Dimensity 800U",
        partNumber: "MT6853",
        releaseDate: "2020.08",
        geekbench6: { single: "796", multi: "1918" },
        wildlifeExtreme: "483",
        process: "TSMC N6",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.4 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G57 MC3 (850 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    }
];

const dimensity700Data = [
    {
        name: "MediaTek Dimensity 720",
        partNumber: "MT6853V/NZA",
        releaseDate: "2020.07",
        process: "TSMC 7nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.0 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G57 MC3 (730 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    },
    {
        name: "MediaTek Dimensity 700",
        partNumber: "MT6833",
        releaseDate: "2020.11",
        geekbench6: { single: "702", multi: "1821" },
        wildlifeExtreme: "328",
        process: "TSMC N7",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.2 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G57 MC2 (950 MHz)",
        npu: "unknown",
        modem: "MediaTek 5G Modem",
        memory: "LPDDR4X"
    }
];

const helioGData = [
    {
        name: "MediaTek Helio G200",
        geekbench6: { single: "812", multi: "2121" },
        wildlifeExtreme: "370",
        partNumber: "MT6789T",
        releaseDate: "2025.05",
        process: "TSMC 6nm (N6)",
        dieSize: "29mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.20 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "2 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G57 MC2 (1100 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-13",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Helio G100",
        geekbench6: { single: "792", multi: "2028" },
        wildlifeExtreme: "360",
        partNumber: "MT6789H",
        releaseDate: "2024.08",
        process: "TSMC 6nm (N6)",
        dieSize: "29mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.20 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "2 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G57 MC2 (1000 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-13",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Helio G99",
        geekbench6: { single: "732", multi: "1984" },
        wildlifeExtreme: "347",
        partNumber: "MT6789",
        releaseDate: "2022.05",
        process: "TSMC 6nm (N6)",
        dieSize: "29mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.20 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "512 KB (A76), 128 KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G57 MC2 (950 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-13",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Helio G96",
        geekbench6: { single: "700", multi: "1900" },
        wildlifeExtreme: "320",
        partNumber: "MT6781",
        releaseDate: "2021.06",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.05 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "512 KB (A76), 128 KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G57 MC2 (950 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-13",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Helio G95",
        geekbench6: { single: "680", multi: "1850" },
        wildlifeExtreme: "420",
        partNumber: "MT6785V/CD",
        releaseDate: "2020.09",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.05 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "512 KB (A76), 128 KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G76 MC4 (900 MHz)",
        npu: "MediaTek APU 2.0 (1 TMACs)",
        modem: "Integrated 4G LTE Cat-12",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Helio G90T",
        geekbench6: { single: "650", multi: "1750" },
        wildlifeExtreme: "400",
        partNumber: "MT6785V/CC",
        releaseDate: "2019.07",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.05 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "512 KB (A76), 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G76 MC4 (800 MHz)",
        npu: "MediaTek APU 2.0 (1 TMACs)",
        modem: "Integrated 4G LTE Cat-12",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Helio G90",
        geekbench6: { single: "640", multi: "1700" },
        wildlifeExtreme: "380",
        partNumber: "MT6785",
        releaseDate: "2019.07",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.00 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "512 KB (A76), 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G76 MC4 (720 MHz)",
        npu: "MediaTek APU 2.0 (1 TMACs)",
        modem: "Integrated 4G LTE Cat-12",
        memory: "LPDDR4X 2133 MHz"
    },
    {
        name: "MediaTek Helio G91",
        geekbench6: { single: "430", multi: "1400" },
        wildlifeExtreme: "180",
        partNumber: "Unknown",
        releaseDate: "2024.02",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "256 KB (A75), 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G52 MC2 (1000 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio G88",
        geekbench6: { single: "420", multi: "1350" },
        wildlifeExtreme: "180",
        partNumber: "MT6769H",
        releaseDate: "2021.07",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "256 KB (A75), 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G52 MC2 (1000 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio G85",
        geekbench6: { single: "413", multi: "1402" },
        wildlifeExtreme: "183",
        partNumber: "MT6769Z",
        releaseDate: "2020.05",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "256 KB (A75), 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G52 MC2 (1000 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio G80",
        geekbench6: { single: "400", multi: "1300" },
        wildlifeExtreme: "170",
        partNumber: "MT6769V/CU",
        releaseDate: "2020.02",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "256 KB (A75), 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G52 MC2 (950 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio G70",
        geekbench6: { single: "390", multi: "1250" },
        wildlifeExtreme: "160",
        partNumber: "MT6769V/CB",
        releaseDate: "2020.01",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.70 GHz",
            l2Cache: "256 KB (A75), 128 KB (A55)",
            l3Cache: "1 MB"
        },
        slc: "Unknown",
        gpu: "ARM Mali-G52 MC2 (820 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio G36/G50",
        partNumber: "MT6765V/XAA",
        releaseDate: "2023.02",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.2 GHz + 4x Cortex-A53 @ 1.6/1.7 GHz",
            l2Cache: "512 KB",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GE8320 (680 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio G35",
        partNumber: "MT6765G",
        releaseDate: "2020.06",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.30 GHz + 4x Cortex-A53 @ 1.80 GHz",
            l2Cache: "512 KB",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GE8320 (680 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio G25",
        partNumber: "MT6762G",
        releaseDate: "2020.06",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.00 GHz + 4x Cortex-A53 @ 1.50 GHz",
            l2Cache: "512 KB",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GE8320 (650 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-4",
        memory: "LPDDR4X 1600 MHz"
    }
];

const helioXData = [
    {
        name: "MediaTek Helio X30",
        partNumber: "MT6799",
        releaseDate: "2017.02",
        process: "TSMC 10nm",
        dieSize: "75.715mm²",
        cpu: {
            specs: "2x A73 (2.6GHz) + 4x A53 (2.2GHz) + 4x A35 (1.9GHz)",
            l2Cache: "1MB (A73 cluster) + 512KB (A53 cluster) + 512KB (A35 cluster)",
            l3Cache: "75mm²"
        },
        slc: "N/A",
        gpu: "PowerVR 7XTP-MT4 (800MHz)",
        npu: "N/A",
        modem: "4G LTE Cat-10",
        memory: "LPDDR4X quad-channel 16-bit 1866 MHz"
    },
    {
        name: "MediaTek Helio X20 / X23 / X25 / X27",
        partNumber: "MT6797/D/T/X",
        releaseDate: "2016",
        process: "TSMC 20nm",
        dieSize: "103.93mm²",
        cpu: {
            specs: "2x A72 (2.1GHz-2.5GHz) + 4x A53 (1.85GHz) + 4x A53 (1.4GHz)",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "Mali-T880 MP4 (780MHz-850MHz)",
        npu: "N/A",
        modem: "4G LTE Cat-6",
        memory: "LPDDR3 32-bit 800MHz"
    },
    {
        name: "MediaTek X10",
        partNumber: "MT6795",
        releaseDate: "2015",
        process: "TSMC 28nm",
        dieSize: "91.75mm²",
        cpu: {
            specs: "4x Cortex-A53 @ 2.0/2.2 GHz + 4x Cortex-A53 @ 1.2 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "PowerVR G6200 @ 550/700 MHz",
        npu: "N/A",
        modem: "4G LTE",
        memory: "LPDDR3 32-bit 933MHz"
    }
];

const helioPData = [
    {
        name: "MediaTek Helio P95",
        partNumber: "MT6779V",
        releaseDate: "2020.02",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.20 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "512 KB (A75), 128 KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GM9446 (970 MHz)",
        npu: "MediaTek APU 2.0",
        modem: "Integrated 4G LTE Cat-12 DL / Cat-13 UL",
        memory: "LPDDR4X 1866 MHz"
    },
    {
        name: "MediaTek Helio P90",
        partNumber: "MT6779",
        releaseDate: "2018.12",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.20 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "512 KB (A75), 128 KB (A55)",
            l3Cache: "2 MB"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GM9446 (970 MHz)",
        npu: "MediaTek APU 2.0 (1127 GMACs)",
        modem: "Integrated 4G LTE Cat-12 DL / Cat-13 UL",
        memory: "LPDDR4X 1866 MHz"
    },
    {
        name: "MediaTek Helio P70",
        partNumber: "MT6771T",
        releaseDate: "2018.10",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.10 GHz + 4x Cortex-A53 @ 2.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G72 MP3 (900 MHz)",
        npu: "MediaTek Multi-core APU (525 GMACs)",
        modem: "Integrated 4G LTE Cat-7 DL / Cat-13 UL",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio P65",
        partNumber: "MT6768",
        releaseDate: "2019.06",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.70 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G52 2EEMC2 (820 MHz)",
        npu: "MediaTek APU",
        modem: "Integrated 4G LTE Cat-7 DL / Cat-13 UL",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio P60",
        partNumber: "MT6771",
        releaseDate: "2018.02",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.00 GHz + 4x Cortex-A53 @ 2.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G72 MP3 (800 MHz)",
        npu: "MediaTek Multi-core APU (280 GMACs)",
        modem: "Integrated 4G LTE Cat-7 DL / Cat-13 UL",
        memory: "LPDDR4X 1800 MHz"
    },
    {
        name: "MediaTek Helio P35",
        partNumber: "MT6765",
        releaseDate: "2018.12",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.30 GHz + 4x Cortex-A53 @ 1.80 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "IMG PowerVR GE8320 (680 MHz)",
        npu: "MediaTek NeuroPilot",
        modem: "Integrated 4G LTE Cat-7 DL / Cat-13 UL",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio P30",
        partNumber: "MT6758",
        releaseDate: "2017.08",
        process: "TSMC 16nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.30 GHz + 4x Cortex-A53 @ 1.65 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G71 MP2 (950 MHz)",
        npu: "Vision Processing Unit (VPU)",
        modem: "Integrated 4G LTE Cat-7 DL / Cat-13 UL",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio P25",
        partNumber: "MT6757CD",
        releaseDate: "2017.02",
        process: "TSMC 16nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.60 GHz + 4x Cortex-A53 @ 1.60 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-T880 MP2 (1000 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-6",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio P23",
        partNumber: "MT6763T",
        releaseDate: "2017.08",
        process: "TSMC 16nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.30 GHz + 4x Cortex-A53 @ 1.65 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G71 MP2 (770 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-7 DL / Cat-13 UL",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio P22",
        partNumber: "MT6762",
        releaseDate: "2018.05",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.00 GHz + 4x Cortex-A53 @ 1.50 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GE8320 (650 MHz)",
        npu: "MediaTek NeuroPilot",
        modem: "Integrated 4G LTE Cat-7 DL / Cat-13 UL",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio P20",
        partNumber: "MT6757",
        releaseDate: "2016.09",
        process: "TSMC 16nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.30 GHz + 4x Cortex-A53 @ 1.60 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "ARM Mali-T880 MP2 (900 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-6",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio P18",
        partNumber: "MT6755S",
        releaseDate: "Unknown",
        process: "TSMC 28nm HPC+",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "8x Cortex-A53 @ 2.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "ARM Mali-T860 MP2 (800 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-6",
        memory: "LPDDR3 933 MHz"
    },
    {
        name: "MediaTek Helio P15",
        partNumber: "MT6755T",
        releaseDate: "2016.10",
        process: "TSMC 28nm HPC+",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.20 GHz + 4x Cortex-A53 @ 1.10 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "ARM Mali-T860 MP2 (800 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-6",
        memory: "LPDDR3 933 MHz"
    },
    {
        name: "MediaTek Helio P10",
        partNumber: "MT6755",
        releaseDate: "2015.06",
        process: "TSMC 28nm HPC+",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.00 GHz + 4x Cortex-A53 @ 1.00 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "ARM Mali-T860 MP2 (700 MHz)",
        npu: "Unknown",
        modem: "Integrated 4G LTE Cat-6",
        memory: "LPDDR3 933 MHz"
    }
];

const helioAData = [
    {
        name: "MediaTek Helio A25",
        partNumber: "MT6762V",
        releaseDate: "2020.02",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.8 GHz + 4x Cortex-A53 @ 1.5 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GE8320 (600 MHz)",
        npu: "MediaTek NeuroPilot",
        modem: "4G LTE Cat-4",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio A22",
        partNumber: "MT6761 / MT6762M",
        releaseDate: "2018.06",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.0 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GE8320 (650 MHz)",
        npu: "MediaTek NeuroPilot",
        modem: "4G LTE Cat-7 (DL) / Cat-13 (UL)",
        memory: "LPDDR4X 1600 MHz"
    },
    {
        name: "MediaTek Helio A20",
        partNumber: "MT6761D",
        releaseDate: "2020.02",
        process: "TSMC 12nm FinFET",
        dieSize: "Unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.8 GHz",
            l2Cache: "Unknown",
            l3Cache: "Unknown"
        },
        slc: "Unknown",
        gpu: "IMG PowerVR GE8300 (550 MHz)",
        npu: "MediaTek NeuroPilot",
        modem: "4G LTE Cat-6 (DL) / Cat-5 (UL)",
        memory: "LPDDR4X 1200 MHz"
    }
];


const kirin9000Data = [
    {
        name: "HiSilicon Kirin 9030 Pro",
        partNumber: "Hi3D60 GFCV120",
        releaseDate: "2025.11",
        process: "SMIC N+3 (6nm+)",
        geekbench6: { single: "1856", multi: "6115" },
        wildlifeExtreme: "3263",
        steelNomadLite: "1004",
        dieSize: "137mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x 2.75GHz (Taishan Prime) + 4x 2.27GHz (Taishan Large) + 4x 1.72GHz (Taishan Little)",
            l2Cache: "2 MB (TP) + 4 MB (4x Little)",
            l3Cache: "12 MB"
        },
        slc: "12 MB",
        gpu: "Huawei Maleoon 935 6CUs (933 MHz) 1MB GMEM",
        npu: "Ascend NPU (4x Tensor + 2x Vector)",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5X 9600"
    },
    {
        name: "HiSilicon Kirin 9030",
        partNumber: "unknown",
        releaseDate: "2025.11",
        process: "SMIC N+3 (6nm+)",
        dieSize: "Unknown",
        architecture: "ARMv8-A compatible",
        geekbench6: { single: "1808", multi: "5124" },
        wildlifeExtreme: "2932",
        cpu: {
            specs: "1x 2.695GHz (Taishan Prime) + 3x 2.27GHz (Taishan Large) + 4x 1.72GHz (Taishan Little)",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Huawei Maleoon 935A 5CUs (933 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5X 9600"
    },
    {
        name: "HiSilicon Kirin 9020",
        geekbench6: { single: "1477", multi: "4487" },
        wildlifeExtreme: "1894",
        steelNomadLite: "548",
        partNumber: "Hi36B0",
        releaseDate: "2024.11",
        process: "SMIC N+2 (7nm)",
        dieSize: "140.5 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x 2.5 GHz (Taishan Prime) + 3x 2.15 GHz (Taishan Large) + 4x 1.6 GHz (Taishan Little)",
            l2Cache: "1 MB (TP) + 3x 1 MB (TL) + 1 MB (4x Little)",
            l3Cache: "10 MB"
        },
        slc: "8 MB",
        gpu: "Huawei Maleoon 920 4CUs (840 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    },
    {
        name: "HiSilicon Kirin 9010S",
        partNumber: "unknown",
        releaseDate: "2025.06",
        process: "SMIC N+2 (7nm)",
        dieSize: "unknown",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x 2.5GHz (Taishan Prime) + 3x 2.05GHz (Taishan Large) + 4x 1.5GHz (Taishan Little)",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Huawei Maleoon 920C 2CUs (840 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    },
    {
        name: "HiSilicon Kirin 9010",
        geekbench6: { single: "1446", multi: "4524" },
        wildlifeExtreme: "1578",
        partNumber: "Hi36A0 V121",
        releaseDate: "2024.04",
        process: "SMIC N+2 (7nm)",
        dieSize: "136.6 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x 2.3 GHz (Taishan Prime) + 3x 2.18 GHz (Taishan Large) + 4x 1.55 GHz (A510)",
            l2Cache: "1 MB (TP) + 3x 512 KB (TL) + 2x 256 KB (4x A510)",
            l3Cache: "8 MB"
        },
        slc: "4 MB (System Level Cache)",
        gpu: "Huawei Maleoon 910 4CUs (750 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    },
    {
        name: "HiSilicon Kirin 9010L",
        partNumber: "Hi36A0V121",
        releaseDate: "2024.Q2",
        process: "SMIC N+2 (7nm)",
        dieSize: "136.6 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Prime 2.19GHz + 2x Taishan Large 2.18 GHz + 3x Cortex-A510 1.4 GHz",
            l2Cache: "1MB (Taishan Prime) + 2x 512KB (Taishan Large) + 2x 256KB (3x A510)",
            l3Cache: "8 MB"
        },
        slc: "4 MB (System Level Cache)",
        gpu: "Huawei Maleoon 910 4CUs (750 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    },
    {
        name: "HiSilicon Kirin 9000S1",
        partNumber: "Hi36A0V120",
        releaseDate: "2024.04",
        process: "SMIC N+2 (7nm)",
        dieSize: "111.28 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Large 2.49GHz + 3x Taishan Large 2.15GHz + 4x Cortex-A510 1.53GHz",
            l2Cache: "1MB (Taishan Large) + 3x 512KB (Taishan Large) + 2x 256KB (4x A510)",
            l3Cache: "4 MB"
        },
        slc: "4 MB",
        gpu: "Huawei Maleoon 910 4CUs (750 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5 6400"
    },
    {
        name: "HiSilicon Kirin 9000S",
        geekbench6: { single: "1350", multi: "4200" },
        wildlifeExtreme: "1532",
        partNumber: "Hi36A0 V120",
        releaseDate: "2023.08",
        process: "SMIC N+2 (7nm)",
        dieSize: "111.28 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x 2.62 GHz (Taishan Large) + 3x 2.15 GHz (Taishan Large) + 4x 1.53 GHz (Cortex-A510)",
            l2Cache: "1 MB (TL) + 3x 512 KB (TL) + 2x 256 KB (4x A510)",
            l3Cache: "4 MB"
        },
        slc: "4 MB",
        gpu: "Huawei Maleoon 910 4CUs (750 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Integrated Modem",
        memory: "16-bit Quad-channel LPDDR5 6400"
    },
    {
        name: "HiSilicon Kirin 9000",
        geekbench6: { single: "1250", multi: "3600" },
        wildlifeExtreme: "1800",
        partNumber: "Hi36A0",
        releaseDate: "2020.10",
        process: "TSMC 5nm (N5 EUV)",
        dieSize: "108 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x 3.13 GHz (A77) + 3x 2.54 GHz (A77) + 4x 2.05 GHz (A55)",
            l2Cache: "1x 512KB + 3x 256KB + 4x 128KB",
            l3Cache: "4 MB"
        },
        slc: "8 MB",
        gpu: "Mali-G78 MP24 (759 MHz)",
        npu: "2 Big + 1 Tiny Core (Da Vinci 2.0)",
        modem: "Balong 8000",
        memory: "16-bits Quad-channel LPDDR5 5500"
    },
    {
        name: "HiSilicon Kirin 9000E",
        geekbench6: { single: "1150", multi: "3500" },
        wildlifeExtreme: "1600",
        partNumber: "Hi36A0",
        releaseDate: "2020.10",
        process: "TSMC 5nm (N5 EUV)",
        dieSize: "108 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x 3.13 GHz (A77) + 3x 2.54 GHz (A77) + 4x 2.05 GHz (A55)",
            l2Cache: "1x 512KB + 3x 256KB + 4x 128KB",
            l3Cache: "4 MB"
        },
        slc: "8 MB",
        gpu: "Mali-G78 MP22 (759 MHz)",
        npu: "1 Big + 1 Tiny Core (Da Vinci 2.0)",
        modem: "Balong 8000",
        memory: "16-bits Quad-channel LPDDR5 5500"
    },
    {
        name: "HiSilicon Kirin 9000L",
        partNumber: "Hi36A0",
        releaseDate: "2020.10",
        process: "TSMC 5nm (N5 EUV)",
        dieSize: "108 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x 2.86 GHz (A77) + 2x 2.54 GHz (A77) + 3x 2.05 GHz (A55)",
            l2Cache: "1x 512KB + 2x 256KB + 3x 128KB",
            l3Cache: "4 MB"
        },
        slc: "8 MB",
        gpu: "Mali-G78 MP20 (759 MHz)",
        npu: "1 Big + 2 Tiny Cores (Da Vinci 2.0)",
        modem: "Balong 8000",
        memory: "16-bits Quad-channel LPDDR5 5500"
    },
    {
        name: "HiSilicon Kirin 990 / 990 5G",
        geekbench6: { single: "950", multi: "2900" },
        wildlifeExtreme: "1050",
        partNumber: "Hi3690",
        releaseDate: "2019.09",
        process: "TSMC N7 (7nm) (4G) / TSMC N7+ (7nm+) (5G)",
        dieSize: "99.04 mm² (4G) / 107.07 mm² (5G)",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x 2.86 GHz (A76) + 2x 2.09/2.36 GHz (A76) + 4x 1.86/1.95 GHz (A55)",
            l2Cache: "4x 512KB (A76), 4x 128KB (A55)",
            l3Cache: "4MB"
        },
        slc: "4MB",
        gpu: "Mali-G76 MP16 (600-700 MHz)",
        npu: "1/2 Big + 1 Tiny Core (Da Vinci)",
        modem: "Balong 765 (4G) /Balong 5000 (5G)",
        memory: "16-bit Quad-channel LPDDR4X 4266"
    },
    {
        name: "HiSilicon Kirin 985",
        geekbench6: { single: "900", multi: "2500" },
        wildlifeExtreme: "900",
        partNumber: "Hi6290",
        releaseDate: "2020.04",
        process: "TSMC 7nm (N7)",
        dieSize: "71.5mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x 2.58 GHz (A76) + 3x 2.40 GHz (A76) + 4x 1.84 GHz (A55)",
            l2Cache: "512KB (A76) + 3x 256KB (A76) 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "2MB",
        gpu: "Mali-G77 MP8 (700 MHz)",
        npu: "Dual-core (Da Vinci)",
        modem: "Balong 5000",
        memory: "16-bit Quad-channel LPDDR4X 4266"
    },
    {
        name: "HiSilicon Kirin 980",
        partNumber: "Hi3680",
        releaseDate: "2018.08",
        geekbench6: { single: "906", multi: "2848" },
        wildlifeExtreme: "728",
        process: "TSMC 7nm (N7)",
        dieSize: "77.8 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x 2.6 GHz (A76) + 2x 1.92 GHz (A76) + 4x 1.8 GHz (A55)",
            l2Cache: "4x 512KB (A76), 4x 128KB (A55)",
            l3Cache: "4 MB"
        },
        slc: "N/A",
        gpu: "Mali-G76 MP10 (720 MHz)",
        modem: "Balong 4G",
        npu: "Dual-core (Cambricon)",
        memory: "16-bit Quad-channel LPDDR4X 4266"
    },
    {
        name: "HiSilicon Kirin 970",
        partNumber: "Hi3670",
        releaseDate: "2017.09",
        process: "TSMC 10nm",
        dieSize: "107 mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x 2.36 GHz (A73) + 4x 1.84 GHz (A53)",
            l2Cache: "2MB (A73 cluster) + 1MB (A53 cluster)",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "Mali-G72 MP12 (746 MHz)",
        modem: "Balong 750",
        npu: "Cambricon-1A",
        memory: "16-bit Quad-channel LPDDR4X 3732"
    },
    {
        name: "HiSilicon Kirin 960",
        partNumber: "Hi3660",
        releaseDate: "2016.10",
        process: "TSMC 16nm",
        dieSize: "117.22 mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x 2.36 GHz (A73) + 4x 1.84 GHz (A53)",
            l2Cache: "2MB (A73 cluster) + 1MB (A53 cluster)",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "Mali-G71 MP8 (1037 MHz)",
        npu: "N/A",
        modem: "Balong 4G modem",
        memory: "16-bit Quad-channel LPDDR4X 3732"
    },
    {
        name: "HiSilicon Kirin 950 / 955",
        partNumber: "Hi3650",
        releaseDate: "2015.11",
        process: "TSMC 16nm",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x 2.3-2.5 GHz (A72) + 4x 1.8 GHz (A53)",
            l2Cache: "2MB (A72 cluster) + 512KB (A53 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Mali-T880 MP4 (900 MHz)",
        npu: "N/A",
        modem: "Balong 4G modem",
        memory: "LPDDR4"
    },
    {
        name: "HiSilicon Kirin 930 / 935",
        partNumber: "Hi3635",
        releaseDate: "2015.03",
        process: "TSMC 28nm",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x 2.0-2.2 GHz (A53e) + 4x 1.5 GHz (A53)",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "Mali-T628 MP4 (680 MHz)",
        npu: "N/A",
        modem: "Balong 4G modem",
        memory: "LPDDR3 1600 MHz"
    },
    {
        name: "HiSilicon Kirin 920 / 925 / 928",
        partNumber: "Hi3630",
        releaseDate: "2014.06",
        process: "TSMC 28nm",
        dieSize: "125mm²",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x 1.7-2.0 GHz (A15) + 4x 1.3 GHz (A7)",
            l2Cache: "2MB (A15 cluster) + 512KB (A7 cluster)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Mali-T628 MP4 (600 MHz)",
        npu: "N/A",
        modem: "Balong 4G modem",
        memory: "32-bit LPDDR3 1600 MHz"
    },
    {
        name: "HiSilicon Kirin 910 / 910T",
        partNumber: "Hi6620",
        releaseDate: "2014.01",
        process: "TSMC 28nm",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A9 1.6-1.8 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Mali-450 MP4 (533-700 MHz)",
        npu: "N/A",
        modem: "Balong 4G modem",
        memory: "LPDDR3"
    }
];

const kirin800Data = [
    {
        name: "HiSilicon Kirin 8020",
        partNumber: "unknown",
        releaseDate: "2025.05",
        process: "SMIC N+2 (7nm)",
        dieSize: "unknown",
        geekbench6: { single: "1284", multi: "4112" },
        wildlifeExtreme: "956",
        steelNomadLite: "277",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Prime @ 2.29 GHz + 3x Taishan Large @ 2.05 GHz + 4x Taishan Little @ 1.3 GHz",
            l2Cache: "1MB (TP) + 1MB L2 (4x TLi)",
            l3Cache: "4MB"
        },
        slc: "unknown",
        gpu: "Huawei Maleoon 920C 2CUs (840 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G Modem",
        memory: "LPDDR5X"
    },
    {
        name: "HiSilicon Kirin 8000",
        partNumber: "Hi6290V110",
        releaseDate: "2023.12",
        process: "SMIC N+2 (7nm)",
        dieSize: "70 mm²",
        architecture: "ARMv8.2-A",
        geekbench6: { single: "984", multi: "2882" },
        wildlifeExtreme: "1025",
        cpu: {
            specs: "1x Cortex-A77 @ 2.40 GHz + 3x Cortex-A77 @ 2.19 GHz + 4x Cortex-A55 @ 1.84 GHz",
            l2Cache: "512KB (A77) + 3x 256KB (A77) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G610 MP4 (864 MHz)",
        npu: "Da Vinci",
        modem: "Balong 5G",
        memory: "16-bits Dual-channel LPDDR5 6400"
    },
    {
        name: "HiSilicon Kirin 820",
        geekbench6: { single: "850", multi: "2400" },
        wildlifeExtreme: "650",
        partNumber: "Hi6920(L)V100/V110",
        releaseDate: "2020.03",
        process: "TSMC 7nm (N7)",
        dieSize: "71.5mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A76 @ 2.36 GHz + 3x Cortex-A76 @ 2.22 GHz + 4x Cortex-A55 @ 1.84 GHz",
            l2Cache: "512KB (A76) + 3x 256KB (A76) + 4x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "2MB",
        gpu: "ARM Mali-G57 MP6 (850MHz)",
        npu: "Dual-core (Da Vinci)",
        modem: "Balong 5000",
        memory: "16-bit Quad-channel LPDDR4X 4266"
    },
    {
        name: "HiSilicon Kirin 810",
        geekbench6: { single: "750", multi: "2000" },
        wildlifeExtreme: "450",
        partNumber: "Hi6280V100",
        releaseDate: "2019.06",
        process: "TSMC 7nm (N7)",
        dieSize: "46.2mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.27 GHz + 6x Cortex-A55 @ 1.88 GHz",
            l2Cache: "2x 256KB (A76) + 6x 128KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G52 MP6 (820 MHz)",
        npu: "Da Vinci",
        modem: "Balong 750 4G",
        memory: "16-bits Dual-channel LPDDR4X 4266"
    }
];

const kirin700Data = [
    {
        name: "HiSilicon Kirin 710 / 710F",
        partNumber: "Hi6260",
        releaseDate: "2018.07",
        process: "TSMC 12nm (N12)",
        dieSize: "59.9mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.2 GHz + 4x Cortex-A53 @ 1.7 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G51 MP4 (1 GHz)",
        npu: "N/A",
        modem: "4G LTE Cat.12/13",
        memory: "16-bits Dual-channel LPDDR4"
    },
    {
        name: "HiSilicon Kirin 710A",
        partNumber: "Hi6260",
        releaseDate: "unknown",
        process: "SMIC N+1 (14nm)",
        dieSize: "59.9mm²",
        architecture: "unknown",
        cpu: {
            specs: "4x Cortex-A73 @ 2.0 GHz + 4x Cortex-A53 @ 1.7 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G51 MP4 (1 GHz)",
        npu: "None",
        modem: "Balong 4G LTE Cat.12/13",
        memory: "16-bits Dual-channel LPDDR4"
    }
];

const kirin600Data = [
    {
        name: "HiSilicon Kirin 659",
        partNumber: "Hi6250",
        releaseDate: "unknown",
        process: "TSMC 16nm FinFET+",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.36 GHz + 4x Cortex-A53 @ 1.7 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "unknown",
        gpu: "ARM Mali-T830 MP2 (900 MHz)",
        npu: "N/A",
        modem: "Balong 4G LTE Cat.6",
        memory: "32-bits Dual-channel LPDDR3 933 MHz"
    },
    {
        name: "HiSilicon Kirin 658",
        partNumber: "Q4 2016",
        releaseDate: "unknown",
        process: "TSMC 16nm FinFET+",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.35 GHz + 4x Cortex-A53 @ 1.7 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "unknown",
        gpu: "ARM Mali-T830 MP2 (900 MHz)",
        npu: "N/A",
        modem: "Balong 4G LTE Cat.6",
        memory: "32-bits Dual-channel LPDDR3 933 MHz"
    },
    {
        name: "HiSilicon Kirin 655",
        partNumber: "Hi6250",
        releaseDate: "Q4 2016",
        process: "TSMC 16nm FinFET+",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.1 GHz + 4x Cortex-A53 @ 1.7 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T830 MP2 (900 MHz)",
        npu: "N/A",
        modem: "Balong 4G LTE Cat.6",
        memory: "32-bits Dual-channel LPDDR3 933 MHz"
    },
    {
        name: "HiSilicon Kirin 650",
        partNumber: "Hi6250",
        releaseDate: "Q2 2016",
        process: "TSMC 16nm FinFET+",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 2.0 GHz + 4x Cortex-A53 @ 1.7 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T830 MP2 (900 MHz)",
        npu: "N/A",
        modem: "Balong 4G LTE Cat.6",
        memory: "32-bits Dual-channel LPDDR3 933 MHz"
    },
    {
        name: "HiSilicon Kirin 620",
        partNumber: "Hi6620",
        releaseDate: "Q1 2015",
        process: "TSMC 28nm HPM",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "8x Cortex-A53 @ 1.2 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-450 MP4 (533 MHz)",
        npu: "N/A",
        modem: "Balong 4G LTE Cat.4",
        memory: "32-bits Single-Channel LPDDR3 800MHz"
    }
];

const kirinTabletData = [
    {
        name: "HiSilicon Kirin X90",
        partNumber: "Hi9600 GFCV100",
        releaseDate: "2025.5",
        process: "SMIC N+2 (7nm)",
        dieSize: "208 mm²",
        geekbench6: { single: "1241", multi: "3592" },
        wildlifeExtreme: "1000",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "4x Taishan Prime @ 2.32 GHz + 4x Taishan Large @ 2.01 GHz + 1x Taishan Medium @ 2.05 GHz",
            l2Cache: "4x 1MB (TP) + 4x 1MB (TL) + 2x 512KB (TM)",
            l3Cache: "16MB"
        },
        slc: "8MB",
        gpu: "Huawei Maleoon 916 6CUs (950 MHz)",
        npu: "Ascend (4x Tensor)",
        modem: "N/A",
        memory: "16-bit Octa-channel LPDDR5X"
    },
    {
        name: "HiSilicon Kirin 9000W/9000WL/9000WE/T90/T90A",
        partNumber: "Hi36A0V120",
        releaseDate: "2023.08",
        process: "SMIC N+2 (7nm)",
        dieSize: "111.28 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Large 2.49GHz + 3x Taishan Large 2.15GHz + 4x Cortex-A510 1.53GHz",
            l2Cache: "1MB (Taishan Large) + 3x 512KB (Taishan Large) + 2x 256KB (4x A510)",
            l3Cache: "4 MB"
        },
        slc: "4 MB",
        gpu: "Huawei Maleoon 910 4CUs (750 MHz)",
        npu: "Da Vinci",
        modem: "N/A",
        memory: "16-bit Quad-channel LPDDR5 6400"
    },
    {
        name: "HiSilicon Kirin 9000SL/9000WM",
        partNumber: "Hi36A0V120",
        releaseDate: "2023.08",
        process: "SMIC N+2 (7nm)",
        dieSize: "111.28 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Large 2.49GHz + 2x Taishan Large 2.15GHz + 3x Cortex-A510 1.53GHz",
            l2Cache: "1MB (Taishan Large) + 3x 512KB (Taishan Large) + 2x 256KB (4x A510)",
            l3Cache: "4 MB"
        },
        slc: "4 MB",
        gpu: "Huawei Maleoon 910 4CUs (750 MHz)",
        npu: "Da Vinci",
        modem: "N/A",
        memory: "16-bit Quad-channel LPDDR5 6400"
    },
    {
        name: "HiSilicon Kirin 9010E/9010A/9010W/T91",
        partNumber: "Hi36A0V121",
        releaseDate: "unknown",
        process: "SMIC N+2 (7nm)",
        dieSize: "136.6 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Prime 2.19GHz + 3x Taishan Large 2.18 GHz + 4x Cortex-A510 1.55 GHz",
            l2Cache: "1MB (Taishan Prime) + 3x 512KB (Taishan Large) + 2x 256KB (4x A510)",
            l3Cache: "8 MB"
        },
        slc: "4 MB (System Level Cache)",
        gpu: "Huawei Maleoon 910 4CUs (750 MHz)",
        npu: "Da Vinci",
        modem: "N/A",
        memory: "LPDDR5/LPDDR5X"
    },
    {
        name: "HiSilicon Kirin T92",
        partNumber: "Hi36C0V110",
        releaseDate: "2024.11",
        process: "SMIC N+2 (7nm)",
        dieSize: "140.5 mm²",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Prime 2.5GHz + 3x Taishan Large 2.15GHz + 4x Taishan Little 1.6GHz",
            l2Cache: "1 MB (Taishan Prime) + 3x 1MB (Taishan Large) + 1MB (4x Taishan Little)",
            l3Cache: "10 MB"
        },
        slc: "8 MB",
        gpu: "Huawei Maleoon 920 4CUs (840 MHz)",
        npu: "Da Vinci",
        modem: "N/A",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    },
    {
        name: "HiSilicon Kirin T82",
        partNumber: "unknown",
        releaseDate: "2025",
        process: "SMIC N+2 (7nm)",
        dieSize: "unknown",
        architecture: "ARMv8-A compatible",
        cpu: {
            specs: "1x Taishan Prime 2.29GHz + 3x Taishan Large 2.05GHz + 4x Taishan Little 1.3GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Huawei Maleoon 920C 2CUs (840 MHz)",
        npu: "Da Vinci",
        modem: "N/A",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    }
];

const pastSoCs = [
    {
        name: "HiSilicon K3V2",
        partNumber: "Hi3620",
        releaseDate: "2012.Q1",
        process: "TSMC 40nm",
        dieSize: "70.6mm²",
        architecture: "ARMv7",
        cpu: {
            specs: "4x Cortex-A9 @ 1.4 GHz",
            l2Cache: "1MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Vivante GC4000 (240MHz)",
        npu: "N/A",
        modem: "Balong 4G LTE Cat.6",
        memory: "32-bits Dual-channel LPDDR2 1066"
    },
    {
        name: "HiSilicon K3V2E",
        partNumber: "Hi3620",
        releaseDate: "2012.Q1",
        process: "TSMC 40nm",
        dieSize: "70.6mm²",
        architecture: "ARMv7",
        cpu: {
            specs: "4x Cortex-A9 @ 1.5 GHz",
            l2Cache: "1MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "Vivante GC4000 (240MHz)",
        npu: "N/A",
        modem: "Balong 4G LTE Cat.6",
        memory: "32-bits Dual-channel LPDDR2 1066"
    }
];


const exynos2000Data = [
    {
        name: "Exynos 2800",
        codename: "Vanguard",
        process: "Samsung SF2P (2nm+)",
    },
    {
        name: "Exynos 2700",
        codename: "Ulysses",
        partNumber: "S5E9975",
        process: "Samsung 2nm (SF2)",
        dieSize: "Unknown",
        architecture: "ARMv9.3-A",
        cpu: {
            specs: "1x C2-Ultra + 5x C2-Pro High Clock + 4x C2-Pro Low Clock",
        },
        gpu: "Samsung Xclipse 970 (AMD RDNA, 8WGP)"
    },
    {
        name: "Exynos 2600",
        codename: "thetis",
        geekbench6: { single: "3189", multi: "10921" },
        wildlifeExtreme: "6868",
        partNumber: "S5E9965",
        releaseDate: "2025.12",
        process: "Samsung 2nm (SF2)",
        dieSize: "Unknown",
        architecture: "ARMv9.3-A",
        cpu: {
            specs: "1x C1-Ultra @ 3.80 GHz + 3x C1-Pro @ 3.25 GHz + 3x C1-Pro @ 0.672 - 2.75 GHz + 3x C1-Pro @ 0.4 - 2.75 GHz",
            l2Cache: "3MB (C1-Ultra) + 9x 1MB (C1-Pro)",
            l3Cache: "16MB"
        },
        slc: "Unknown",
        gpu: "Samsung Xclipse 960 (AMD RDNA 4, 8WGP 980 MHz)",
        npu: "Samsung Dual core NPU (1.2GHz)",
        modem: "N/A",
        memory: "16-bit Quad-channel LPDDR5X 10667"
    },
    {
        name: "Exynos 2500",
        geekbench6: { single: "2444", multi: "8359" },
        wildlifeExtreme: "5212",
        codename: "solomon",
        partNumber: "S5E9955",
        releaseDate: "2025.07",
        process: "Samsung 3nm (SF3)",
        dieSize: "Unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-X925 @ 3.30 GHz + 2x Cortex-A725 @ 2.74 GHz + 5x Cortex-A725 @ 2.36 GHz + 2x Cortex-A520 @ 1.80 GHz",
            l2Cache: "2 MB (X925) + 7x 512KB (A725) + 512 KB (2x A520)",
            l3Cache: "12 MB"
        },
        slc: "Unknown",
        gpu: "Samsung Xclipse 950 (AMD RDNA 3.5, 8WGP, 999 MHz)",
        npu: "Samsung NPU",
        modem: "Exynos Shannon 5400",
        memory: "16-bit Quad-channel LPDDR5X 9600"
    },
    {
        name: "Exynos 2400e",
        geekbench6: { single: "2000", multi: "6400" },
        wildlifeExtreme: "4100",
        codename: "root",
        partNumber: "S5E9945",
        releaseDate: "2024.09",
        process: "Samsung 4nm (SF4P)",
        dieSize: "137.4 mm²",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-X4 @ 3.11 GHz + 2x Cortex-A720 @ 2.90 GHz + 3x Cortex-A720 @ 2.59 GHz + 4x Cortex-A520 @ 1.96 GHz",
            l2Cache: "2 MB (X4) + 5x 512 KB (A720) + 2x 512 KB (4x A520)",
            l3Cache: "8 MB"
        },
        slc: "8 MB",
        gpu: "Samsung Xclipse 940 (AMD RDNA 3, 1000 MHz)",
        npu: "Samsung NPU (44 TOPS)",
        modem: "Exynos Shannon 5400",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    },
    {
        name: "Exynos 2400",
        geekbench6: { single: "2067", multi: "6520" },
        wildlifeExtreme: "4259",
        codename: "root",
        partNumber: "S5E9945",
        releaseDate: "2023.10",
        process: "Samsung 4nm (SF4P)",
        dieSize: "137.4 mm²",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-X4 @ 3.21 GHz + 2x Cortex-A720 @ 2.90 GHz + 3x Cortex-A720 @ 2.59 GHz + 4x Cortex-A520 @ 1.96 GHz",
            l2Cache: "2 MB (X4) + 5x 512 KB (A720) + 2x 512 KB (4x A520)",
            l3Cache: "8 MB"
        },
        slc: "8 MB",
        gpu: "Samsung Xclipse 940 (AMD RDNA 3, 1095 MHz)",
        npu: "Samsung NPU (44 TOPS)",
        modem: "Exynos Shannon 5400",
        memory: "16-bit Quad-channel LPDDR5X 8533"
    },
    {
        name: "Exynos 2200",
        geekbench6: { single: "1550", multi: "3700" },
        wildlifeExtreme: "2300",
        codename: "pamir",
        partNumber: "S5E9925",
        releaseDate: "2022.01",
        process: "Samsung 4nm (SF4E)",
        dieSize: "104.65 mm²",
        architecture: "ARMv9-A",
        cpu: {
            specs: "1x Cortex-X2 @ 2.80 GHz + 3x Cortex-A710 @ 2.52 GHz + 4x Cortex-A510 @ 1.82 GHz",
            l2Cache: "2 MB (X2) + 3x 512 KB (A710) + 2x 512 KB (4x A510)",
            l3Cache: "4 MB"
        },
        slc: "8 MB",
        gpu: "Samsung Xclipse 920 (AMD RDNA 2, 1306 MHz)",
        npu: "Samsung Dual-core NPU",
        modem: "Exynos Shannon 5300",
        memory: "16-bit Quad-channel LPDDR5 6400"
    },
    {
        name: "Exynos 2100",
        geekbench6: { single: "1400", multi: "3500" },
        wildlifeExtreme: "1800",
        codename: "olympus",
        partNumber: "S5E9840",
        releaseDate: "2021.01",
        process: "Samsung 5nm (SF5E)",
        dieSize: "128.01 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-X1 @ 2.91 GHz + 3x Cortex-A78 @ 2.81 GHz + 4x Cortex-A55 @ 2.21 GHz",
            l2Cache: "512 KB (X1) + 3x 512 KB (A78) + 4x 64 KB (A55)",
            l3Cache: "4 MB"
        },
        slc: "8 MB",
        gpu: "ARM Mali-G78 MP14 (854 MHz)",
        npu: "Samsung Triple-core NPU (26 TOPS)",
        modem: "Exynos Shannon 5123",
        memory: "16-bit Quad-channel LPDDR5 6400"
    }
];

const exynos1000Data = [
    {
        name: "Exynos 1780",
        process: "Samsung SF4P (4nm+)",
    },
    {
        name: "Exynos 13xx (unknown)",
        codename: "telos",
        partNumber: "S5E8365"
    },
    {
        name: "Exynos 1680",
        codename: "terra",
        partNumber: "S5E8865",
        releaseDate: "2026.03",
        process: "Samsung 4nm (4LPP+)",
        dieSize: "unknown",
        geekbench6: { single: "1408", multi: "4540" },
        wildlifeExtreme: "1751",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A720 @ 2.91 GHz + 4x Cortex-A720 @ 2.6 GHz + 3x Cortex-A520 @ 1.95 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Samsung Xclipse 550 RNDA 3 2WGP 1.2GHz",
        npu: "Samsung 1 core NPU (1.2GHz)",
        modem: "Exynos Shannon",
        memory: "16-bit Dual-channel LPDDR5",
    },
    {
        name: "Exynos 1580",
        geekbench6: { single: "1360", multi: "3855" },
        wildlifeExtreme: "1503",
        codename: "santa",
        partNumber: "S5E8855",
        releaseDate: "2024.10",
        process: "Samsung 4nm (4LPP+)",
        dieSize: "unknown",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "1x Cortex-A720 @ 2.91 GHz + 3x Cortex-A720 @ 2.6 GHz + 4x Cortex-A520 @ 1.95 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "Samsung Xclipse 540 RDNA2 2WGP 1.2GHz",
        npu: "Samsung NPU (2MB cache 14.7TOPS)",
        modem: "Exynos Shannon 5338",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "Exynos 1480",
        geekbench6: { single: "1170", multi: "3050" },
        wildlifeExtreme: "1100",
        codename: "rose",
        partNumber: "S5E8845",
        releaseDate: "2024.03",
        process: "Samsung 4nm (4LPP)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.75 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512KB (A78) + 4x 64KB (A55)",
            l3Cache: "4MB"
        },
        slc: "N/A",
        gpu: "Samsung Xclipse 530 (AMD RDNA 2)",
        npu: "1 core NPU 6K MAC",
        modem: "Exynos Shannon 5328",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "Exynos 1380",
        geekbench6: { single: "1000", multi: "2800" },
        wildlifeExtreme: "800",
        codename: "quartz",
        partNumber: "S5E8835",
        releaseDate: "2023.02",
        process: "Samsung 5nm (5LPE)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A78 @ 2.4 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512KB (A78) + 4x 64KB (A55)",
            l3Cache: "4MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G68 MP5 (950 MHz)",
        npu: "1 core NPU (4.9 TOPS)",
        modem: "Samsung Shannon 5318",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "Exynos 1330",
        codename: "rice",
        partNumber: "S5E8535",
        releaseDate: "2023.02",
        process: "Samsung 5nm (5LPE)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.4 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "ARM Mali-G68 MP2 (949 MHz)",
        npu: "1 core NPU",
        modem: "Samsung Shannon 5308",
        memory: "16-bit Dual-channel LPDDR5 6400"
    },
    {
        name: "Exynos 1280",
        geekbench6: { single: "880", multi: "2050" },
        wildlifeExtreme: "600",
        codename: "papaya",
        partNumber: "S5E8825",
        releaseDate: "2022.04",
        process: "Samsung 5nm (5LPE)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.4 GHz + 6x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G68 MP4 (1000 MHz)",
        npu: "1 core NPU",
        modem: "Samsung Shannon 5308",
        memory: "16-bit Dual-channel LPDDR4X 4266"
    },
    {
        name: "Exynos 1080",
        geekbench6: { single: "920", multi: "2800" },
        wildlifeExtreme: "1150",
        codename: "orange",
        partNumber: "S5E9815",
        releaseDate: "2020.11",
        process: "Samsung 5nm (SF5E)",
        dieSize: "95.5mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A78 @ 2.81 GHz + 3x Cortex-A78 @ 2.6 GHz + 4x Cortex-A55 @ 2.0 GHz",
            l2Cache: "4x 512KB (A78) + 4x 64KB (A55)",
            l3Cache: "2MB"
        },
        slc: "N/A",
        gpu: "ARM Mali-G78 MP10 (850MHz)",
        npu: "5.7 TOPS",
        modem: "5G (5.1 Gbps DL)",
        memory: "16-bit Quad-channel LPDDR5 5500"
    }
];

const exynos900Data = [
    {
        name: "Exynos 990",
        geekbench6: { single: "950", multi: "2700" },
        wildlifeExtreme: "1050",
        codename: "unknown",
        partNumber: "S5E9830",
        releaseDate: "2019.10",
        process: "Samsung 7nm (SF7)",
        dieSize: "91.83 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Mongoose M5 @ 2.73 GHz + 2x Cortex-A76 @ 2.50 GHz + 4x Cortex-A55 @ 2.00 GHz",
            l2Cache: "2x 512KB (M5) + 2x 256KB (A76) + 4x 64KB (A55)",
            l3Cache: "3 MB (M5) + 1 MB (A76+A55)"
        },
        slc: "4 MB",
        gpu: "ARM Mali-G77 MP11 (832 MHz)",
        npu: "Dual-Core NPU (15 TOPS)",
        modem: "N/A",
        memory: "16-bit Quad-channel LPDDR5 5500"
    },
    {
        name: "Exynos 980",
        geekbench6: { single: "800", multi: "1900" },
        wildlifeExtreme: "550",
        codename: "neus",
        partNumber: "S5E980",
        releaseDate: "2019.09",
        process: "Samsung 8nm (SF8)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A77 @ 2.21 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G76 MP5 (728 MHz)",
        npu: "Single Core NPU",
        modem: "Shannon 5188",
        memory: "16-bit Dual-channel LPDDR4X 4266"
    }
];

const exynos800Data = [
    {
        name: "Exynos 880",
        geekbench6: { single: "780", multi: "1900" },
        wildlifeExtreme: "540",
        partNumber: "S5E880",
        releaseDate: "2020.05",
        process: "Samsung 8nm (FinFET)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A77 @ 2.0 GHz + 6x Cortex-A55 @ 1.8 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G76 MP5 (unknown MHz)",
        npu: "Integrated NPU",
        modem: "Integrated 5G (sub-6GHz)",
        memory: "LPDDR4X"
    },
    {
        name: "Exynos 850",
        partNumber: "S5E3830",
        releaseDate: "2020.05",
        process: "Samsung 8nm (LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A (64-bit)",
        cpu: {
            specs: "8x Cortex-A55 @ 2.0 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G52 MP1 (unknown MHz)",
        npu: "N/A",
        modem: "4G LTE Cat.7",
        memory: "LPDDR4X"
    }
];

const exynos9Data = [
    {
        name: "Exynos 9825",
        geekbench6: { single: "830", multi: "2300" },
        wildlifeExtreme: "850",
        codename: "DaVinci",
        partNumber: "S5E9825",
        releaseDate: "2019.08",
        process: "Samsung 7nm EUV (7LPP)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Mongoose M4 @ 2.73 GHz + 2x Cortex-A75 @ 2.40 GHz + 4x Cortex-A55 @ 1.95 GHz",
            l2Cache: "2x 512KB (M4) + 2x 256KB (A75) + 4x 64KB (A55)",
            l3Cache: "3MB (M4 cluster) + 1MB (A75 + A55 cluster)"
        },
        slc: "2 MB",
        gpu: "ARM Mali-G76 MP12 (754 MHz)",
        npu: "Samsung NPU (1.9 TOPS)",
        modem: "Shannon 5000 LTE / Exynos Modem 5100 (External 5G)",
        dsp: "Exynos DSP",
        memory: "16-bit Quad-channel LPDDR4X 2093 MHz"
    },
    {
        name: "Exynos 9820",
        codename: "makalu",
        partNumber: "S5E9820",
        releaseDate: "2018.11",
        process: "Samsung 8nm (8LPP)",
        dieSize: "127 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Mongoose M4 @ 2.73 GHz + 2x Cortex-A75 @ 2.31 GHz + 4x Cortex-A55 @ 1.95 GHz",
            l2Cache: "2x 512KB (M4) + 2x 256KB (A75) + 4x 64KB (A55)",
            l3Cache: "3MB (M4 cluster) + 1MB (A75 + A55 cluster)"
        },
        slc: "2 MB",
        gpu: "ARM Mali-G76 MP12 (702 MHz)",
        npu: "Samsung NPU (1.9 TOPS)",
        modem: "Shannon 5000 LTE (2.0 Gbps DL)",
        dsp: "Exynos DSP",
        memory: "16-bit Quad-channel LPDDR4X 2093 MHz"
    },
    {
        name: "Exynos 9810",
        codename: "lhotse",
        partNumber: "S5E9810",
        releaseDate: "2018.01",
        process: "Samsung 10nm (10LPP)",
        dieSize: "118.9 mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Mongoose M3 @ 2.90 GHz + 4x Cortex-A55 @ 1.90 GHz",
            l2Cache: "4x 512KB (M3) + 4x 64KB (A55)",
            l3Cache: "4 MB (M3 cluster) + 512KB (A55 cluster)"
        },
        slc: "N/A",
        gpu: "ARM Mali-G72 MP18 (572 MHz)",
        npu: "N/A",
        modem: "Shannon 360 LTE (1.2 Gbps DL)",
        dsp: "Exynos DSP",
        memory: "16-bit Quad-channel LPDDR4X 1794 MHz"
    },
    {
        name: "Exynos 8895",

        codename: "Kanchen",
        partNumber: "S5E8895",
        releaseDate: "2017.02",
        process: "Samsung 10nm (10LPE)",
        dieSize: "103.6 mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Mongoose M2 @ 2.30 GHz + 4x Cortex-A53 @ 1.70 GHz",
            l2Cache: "2x 512KB (M2) + 512KB (A53 cluster)",
            l3Cache: "2x 1MB (M2) cluster"
        },
        slc: "N/A",
        gpu: "ARM Mali-G71 MP20 (546 MHz)",
        npu: "Vision Processing Unit (VPU)",
        modem: "Shannon 355 LTE (1.0 Gbps DL)",
        dsp: "Exynos DSP",
        memory: "16-bit Quad-channel LPDDR4X 1794 MHz"
    }
];

const exynos7Data = [
    {
        name: "Exynos 7885 / 7884A/B",
        codename: "Lassen",
        partNumber: "S5E7885",
        releaseDate: "2017.12 / 2018.06",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A73 @ 2.2 / 1.56 (B) / 1.35 (A) GHz + 6x Cortex-A53 @ 1.60 / 1.35 (A/B) GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-G71 MP2 (1300 MHz / 450MHz (A) / 770MHz (B))",
        npu: "N/A",
        modem: "LTE Cat.12",
        dsp: "Exynos DSP",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Exynos 7904",
        codename: "Lassen",
        partNumber: "S5E7904",
        releaseDate: "2019.01",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A73 @ 1.77 GHz + 6x Cortex-A53 @ 1.59 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-G71 MP2 (770MHz)",
        npu: "N/A",
        modem: "LTE Cat.12",
        dsp: "Exynos DSP",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Exynos 9609 / 9610 / 9611",
        codename: "ramen",
        partNumber: "S5E9609/9610/9611",
        releaseDate: "2018.03 / 2019.05 / 2019.09",
        process: "Samsung 10nm (10LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A73 @ 2.30 / 2.20 (9609) GHz + 4x Cortex-A53 @ 1.70 / 1.60 (9609) GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-G72 MP3 (850 MHz / 1.05GHz (9611))",
        npu: "N/A",
        modem: "Shannon 337 LTE (600 Mbps DL)",
        dsp: "Exynos DSP",
        memory: "16-bit Dual-channel LPDDR4X 1600 MHz"
    },
    {
        name: "Exynos 7 Octa 7870",
        codename: "unknown",
        partNumber: "S5E7870",
        releaseDate: "2016.02",
        process: "Samsung 14nm (FinFET)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "8x Cortex-A53 @ 1.6 GHz",
            l2Cache: "2 MB",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-T830 MP1 (700 MHz)",
        npu: "N/A",
        modem: "LTE Cat.6 (300 Mbps DL)",
        memory: "LPDDR3 1866 MHz"
    },
    {
        name: "Exynos 7 Octa 7580 / 7578",
        partNumber: "S5E7570",
        releaseDate: "2015.10",
        process: "Samsung 28nm HKMG",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "8x Cortex-A53 @ 1.6 / 1.5 GHz (4 cores disabled on 7578)",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T720 MP1 (800 MHz / 700 MHz 7578)",
        npu: "N/A",
        modem: "LTE Cat.6",
        dsp: "Exynos DSP",
        memory: "32-bit Single-channel LPDDR3 933 MHz"
    },
    {
        name: "Exynos 7 Quad 7570",
        partNumber: "S5E7570",
        releaseDate: "2016.09",
        process: "Samsung 14nm",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A53 @ 1.43 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T720 MP1 (700 MHz)",
        npu: "N/A",
        modem: "LTE Cat.6",
        dsp: "Exynos DSP",
        memory: "32-bit Single-channel LPDDR3 933 MHz"
    },
    {
        name: "Exynos 7 Octa 7420",
        codename: "Istor",
        partNumber: "S5E7420",
        releaseDate: "2015.02",
        process: "Samsung 14nm (14LPE)",
        dieSize: "80.37 mm²",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A57 @ 2.10 GHz + 4x Cortex-A53 @ 1.50 GHz",
            l2Cache: "2 MB (A57), 256 KB (A53)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T760 MP8 (772 MHz)",
        npu: "N/A",
        modem: "N/A",
        dsp: "Exynos DSP",
        memory: "16-bit Quad-channel LPDDR4 1552 MHz"
    },
    {
        name: "Exynos 7 Octa 5433",
        codename: "Helsinki Prime",
        partNumber: "S5E5433",
        releaseDate: "2014.09",
        process: "Samsung 20nm (20HKMG)",
        dieSize: "113 mm²",
        architecture: "ARMv8-A (running in AArch32 mode)",
        cpu: {
            specs: "4x Cortex-A57 @ 1.90 GHz + 4x Cortex-A53 @ 1.30 GHz",
            l2Cache: "2 MB (A57), 256 KB (A53)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T760 MP6 (700 MHz)",
        npu: "unknown",
        modem: "N/A",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 825 MHz"
    }
];

const exynos5Data = [
    {
        name: "Exynos 5 Dual 5250",
        codename: "Arndale",
        partNumber: "S5E5250",
        releaseDate: "2012.08",
        process: "Samsung 32nm (32HKMG)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "2x Cortex-A15 @ 1.70 GHz",
            l2Cache: "1 MB",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T604 MP4 (533 MHz)",
        npu: "unknown",
        modem: "N/A",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 800 MHz"
    },
    {
        name: "Exynos 5 Octa 5422 / 5800",
        codename: "Adonis Prime 2",
        partNumber: "S5E5422",
        releaseDate: "2014.02",
        process: "Samsung 28nm (28HKMG)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A15 @ 1.9 / 2.10 GHz + 4x Cortex-A7 @ 1.3 / 1.50 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-T628 MP6 (533 MHz)",
        npu: "unknown",
        modem: "N/A",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 933 MHz"
    },
    {
        name: "Exynos 5 Hexa 5260",
        codename: "unknown",
        partNumber: "S5E5260",
        releaseDate: "2014.01",
        process: "Samsung 28nm (28HKMG)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "2x Cortex-A15 @ 1.70 GHz + 4x Cortex-A7 @ 1.30 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T624 MP4 (600 MHz)",
        npu: "unknown",
        modem: "N/A",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 800 MHz"
    },
    {
        name: "Exynos 5 Octa 5410",
        codename: "Adonis",
        partNumber: "S5E5410",
        releaseDate: "2013.01",
        process: "Samsung 28nm (28HKMG)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A15 @ 1.60 GHz + 4x Cortex-A7 @ 1.20 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "3x PowerVR SGX544 (533 MHz)",
        npu: "N/A",
        modem: "N/A",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 933 MHz"
    },
    {
        name: "Exynos 5 Octa 5420",
        codename: "Adonis Prime",
        partNumber: "S5E5420",
        releaseDate: "2013.07",
        process: "Samsung 28nm (28HKMG)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A15 @ 1.90 GHz + 4x Cortex-A7 @ 1.30 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-T628 MP6 (533 MHz)",
        npu: "N/A",
        modem: "N/A",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 933 MHz"
    },
    {
        name: "Exynos 5 Octa 5430",
        codename: "Helsinki",
        partNumber: "S5E5430",
        releaseDate: "2014.08",
        process: "Samsung 20nm (20HKMG)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A15 @ 1.80 / 2.0 GHz + 4x Cortex-A7 @ 1.30 / 1.50 GHz",
            l2Cache: "2 MB (A15), 512 KB (A7)",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-T628 MP6 (600 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 1066 MHz"
    },
    {
        name: "Exynos 7872",
        codename: "unknown",
        partNumber: "S5E7872",
        releaseDate: "2018.01",
        process: "Samsung 14nm",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A73 @ 2 GHz + 4x Cortex-A53 @ 1.6 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-G71 MP1 (1.22 GHz)",
        npu: "N/A",
        modem: "LTE Cat.6",
        dsp: "Shannon 325",
        memory: "32-bit Single-channel LPDDR3 1066 MHz"
    }
];

const exynos4Data = [
    {
        name: "Exynos 4 Quad 4415",
        codename: "unknown",
        partNumber: "S5E4415",
        releaseDate: "2014.09",
        process: "Samsung 28nm",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A9 @ 1.5 GHz",
            l2Cache: "2 MB",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-400 MP4 (533 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR2 400 MHz"
    },
    {
        name: "Exynos 4 Quad 4412",
        codename: "Pegasus",
        partNumber: "S5E4412",
        releaseDate: "2012.05",
        process: "Samsung 32nm (32HKMG)",
        dieSize: "84 mm²",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A9 @ 1.40 - 1.60 GHz",
            l2Cache: "2 MB",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-400 MP4 (440 - 533 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR2 400 MHz"
    },
    {
        name: "Exynos 4 Dual 4212",
        codename: "unknown",
        partNumber: "S5E4212",
        releaseDate: "2011.09",
        process: "Samsung 32nm (32HKMG)",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "2x Cortex-A9 @ 1.50 GHz",
            l2Cache: "1 MB",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-400 MP4 (400 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR2 400 MHz"
    },
    {
        name: "Exynos 4 Dual 4210",
        codename: "Orion",
        partNumber: "S5PC210",
        releaseDate: "2011.01",
        process: "Samsung 45nm",
        dieSize: "118 mm²",
        architecture: "ARMv7-A",
        cpu: {
            specs: "2x Cortex-A9 @ 1.20 GHz",
            l2Cache: "1 MB",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-400 MP4 (266 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR2 400 MHz"
    }
];

const exynos8Data = [
    {
        name: "Exynos 8 Octa 8890",
        codename: "Jungfrau",
        partNumber: "S5E8890",
        releaseDate: "2016.02",
        process: "Samsung 14nm (14LPP)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Mongoose M1 @ 2.60 GHz + 4x Cortex-A53 @ 1.6 GHz",
            l2Cache: "2MB (M1) + 256KB (A53)",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "ARM Mali-T880 MP12 (650 MHz)",
        npu: "N/A",
        modem: "LTE Cat.6",
        dsp: "Exynos DSP",
        memory: "16-bit Single-channel LPDDR3 933 MHz"
    }
];

const exynos3Data = [
    {
        name: "Exynos 3 Quad 3470",
        codename: "Garda",
        partNumber: "S5E3470",
        releaseDate: "2014.07",
        process: "Samsung 28nm HKMG",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "4x Cortex-A7 @ 1.4 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-400 MP4 (440 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR3 533 MHz"
    },
    {
        name: "Exynos 3 Single 3110 / Hummingbird",
        codename: "Hummingbird",
        partNumber: "S5PC110",
        releaseDate: "2010.06",
        process: "Samsung 45nm",
        dieSize: "unknown",
        architecture: "ARMv7-A",
        cpu: {
            specs: "1x Cortex-A8 @ 1.00 GHz",
            l2Cache: "512 KB",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "PowerVR SGX540 (200 MHz)",
        npu: "unknown",
        modem: "unknown (External)",
        dsp: "Exynos DSP",
        memory: "32-bit Dual-channel LPDDR2 200 MHz"
    }
];


const tensorData = [
    {
        name: "Google Tensor G6 (unreleased)",
        codename: "Malibu",
        partNumber: "unknown",
        releaseDate: "unknown",
        process: "unknown",
        dieSize: "unknown",
        architecture: "unknown",
        cpu: {
            specs: "1x C1-Ultra @ 4.11GHz + 4x C1-Pro @ 3.38GHz + 2x C1-Pro @ 2.65GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "PowerVR C-series CXTP-48-1536",
        npu: "unknown",
        dsp: "unknown",
        memory: "unknown"
    },
    {
        name: "Google Tensor G5",
        geekbench6: { single: "2421", multi: "6191" },
        wildlifeExtreme: "3252",
        codename: "Laguna",
        partNumber: "unknown",
        releaseDate: "2025.08",
        process: "TSMC N3P (3nm)",
        dieSize: "~121 mm²",
        architecture: "ARMv9.2",
        cpu: {
            specs: "1x 3.78 GHz Cortex-X4 + 5x 3.05 GHz Cortex-A725 + 2x 2.25 GHz Cortex-A520",
            l2Cache: "2MB (X4) + 5x 512KB (A725) + 256KB (2x A520)",
            l3Cache: "8MB"
        },
        slc: "16MB",
        gpu: "PowerVR DXT-48-1536 (1.10 GHz)",
        npu: "4th Gen EdgeTPU",
        dsp: "GXP",
        memory: "LPDDR5X"
    },
    {
        name: "Google Tensor G4",
        geekbench6: { single: "1958", multi: "4638" },
        wildlifeExtreme: "2576",
        steelNomadLite: "970",
        codename: "Zuma Pro (GS401)",
        partNumber: "S5P9875",
        releaseDate: "2024.08",
        process: "Samsung 4nm (4LPP+)",
        dieSize: "135.16 mm²",
        architecture: "ARMv9.2",
        cpu: {
            specs: "1x 3.10 GHz Cortex-X4 + 3x 2.60 GHz Cortex-A720 + 4x 1.92 GHz Cortex-A520",
            l2Cache: "2MB (X4) + 3x 256KB (A720) + 2x 256KB (4x A520)",
            l3Cache: "8 MB"
        },
        slc: "16 MB",
        gpu: "Mali-G715 MC7 (940 MHz)",
        npu: "TPU \"Rio\"",
        dsp: "GXP \"Callisto\"",
        memory: "16-bits Quad-channel LPDDR5X 8533"
    },
    {
        name: "Google Tensor G3",
        geekbench6: { single: "1767", multi: "4668" },
        wildlifeExtreme: "2455",
        steelNomadLite: "965",
        codename: "Zuma (GS301)",
        partNumber: "S5P9865",
        releaseDate: "2023.10",
        process: "Samsung 4nm (4LPP+)",
        dieSize: "135.16 mm²",
        architecture: "ARMv9",
        cpu: {
            specs: "1x 2.91 GHz Cortex-X3 + 4x 2.37 GHz Cortex-A715) + 4x 1.70 GHz Cortex-A510",
            l2Cache: "1MB (X3) + 4x 256KB (A715) + 2x 256KB (4x A510)",
            l3Cache: "8 MB"
        },
        slc: "16 MB",
        gpu: "Mali-G715 MP7 (890 MHz)",
        npu: "TPU \"Rio\"",
        dsp: "GXP \"Callisto\" (3rd Gen)",
        memory: "16-bits Quad-channel LPDDR5X 8533"
    },
    {
        name: "Google Tensor G2",
        geekbench6: { single: "1450", multi: "3300" },
        wildlifeExtreme: "1923",
        codename: "Cloudripper (GS201)",
        partNumber: "S5P9855",
        releaseDate: "2022.10",
        process: "Samsung 5nm (5LPP)",
        dieSize: "114.27 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x 2.85 GHz Cortex-X1 + 2x 2.35 GHz Cortex-A78 + 4x 1.80 GHz Cortex-A55",
            l2Cache: "2x 1MB (X1) + 2x 256KB (A78) + 4x 128KB (A55)",
            l3Cache: "4 MB"
        },
        slc: "8 MB",
        gpu: "Mali-G710 MP7 (890 MHz)",
        npu: "4x TPU \"Janeiro\"",
        dsp: "4x GXP \"Amalthea\" (1st Gen)",
        memory: "16-bits Quad-channel LPDDR5 6400"
    },
    {
        name: "Google Tensor G1",
        geekbench6: { single: "1425", multi: "3167" },
        wildlifeExtreme: "2088",
        codename: "Whitechapel (GS101)",
        partNumber: "S5P9845",
        releaseDate: "2021.10",
        process: "Samsung 5nm (5LPE)",
        dieSize: "112.66 mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x 2.80 GHz Cortex-X1 + 2x 2.25 GHz Cortex-A76 + 4x 1.80 GHz Cortex-A55",
            l2Cache: "2x 1MB (X1) + 2x 256KB (A76) + 4x 128KB (A55)",
            l3Cache: "4 MB"
        },
        slc: "8 MB",
        gpu: "Mali-G78 MP20 (848 MHz)",
        npu: "Edge TPU \"Abrolhos\"",
        dsp: "GXP 1st Gen",
        memory: "16-bits Quad-channel LPDDR5 6400"
    }
];

const tableStructure = [
    {
        category: "category_basic", rows: [
            { label: "codename", key: "codename" },
            { label: "partNumber", key: "partNumber" },
            { label: "releaseDate", key: "releaseDate" },
            { label: "process", key: "process" },
            { label: "dieSize", key: "dieSize" },
        ]
    },
    {
        category: "category_benchmarks", rows: [
            { label: "geekbench6_single", key: "geekbench6.single" },
            { label: "geekbench6_multi", key: "geekbench6.multi" },
            { label: "wildlifeExtreme", key: "wildlifeExtreme" },
            { label: "steelNomadLite", key: "steelNomadLite" },
        ]
    },
    {
        category: "category_cpu", rows: [
            { label: "cpu_specs", key: "cpu.specs" },
            { label: "l2Cache", key: "cpu.l2Cache" },
            { label: "l3Cache", key: "cpu.l3Cache" },
            { label: "slc", key: "slc" },
        ]
    },
    {
        category: "category_gpu", rows: [
            { label: "gpu", key: "gpu" },
        ]
    },
    {
        category: "category_npu", rows: [
            { label: "npu", key: "npu" },
            { label: "dsp", key: "dsp" },
        ]
    },
    {
        category: "category_connectivity", rows: [
            { label: "modem", key: "modem" },
        ]
    },
    {
        category: "category_memory", rows: [
            { label: "memory", key: "memory" },
        ]
    },
    {
        category: "category_arch", rows: [
            { label: "architecture", key: "architecture" },
        ]
    }
];

// Helper to access nested object properties by string 'cpu.specs'
function getNestedValue(obj, path) {
    const val = path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
    return (val !== undefined && val !== null) ? val : '-';
}

function formatValue(val) {
    if (!val) return val;
    let text = String(val);
    const lower = text.toLowerCase();
    if (lower === 'unknown') return t('value_unknown');
    if (lower === 'n/a') return t('value_na');

    // Dynamically translate the word "cluster"
    if (lower.includes('cluster')) {
        const clusterTrans = t('cluster');
        text = text.replace(/cluster/gi, clusterTrans);
    }

    return text;
}

/**
 * Intelligent CPU Spec Splitter
 * Detects "+" separators and returns a clustered HTML structure
 */
function formatCpuSpecs(specString) {
    if (typeof specString !== 'string') {
        return specString;
    }

    const clusters = specString.includes('+') ? specString.split('+').map(s => s.trim()) : [specString.trim()];
    let html = '<div class="cpu-cluster-container">';

    clusters.forEach((cluster, index) => {
        // Simple numeric labeling as requested
        const label = `${t('cluster')} ${index + 1}`;
        const badgeClass = `badge-c${index + 1}`;

        html += `
            <div class="cpu-cluster">
                <span class="cluster-badge ${badgeClass}">${label}</span>
                <span class="cluster-text">${cluster}</span>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

/**
 * GPU Spec Formatter
 * Wraps the GPU string in a single cluster-style box
 */
function formatGpuSpec(specString) {
    if (!specString || typeof specString !== 'string') return specString;
    return `
        <div class="cpu-cluster-container">
            <div class="cpu-cluster gpu-cluster">
                <span class="cluster-badge badge-gpu">GPU</span>
                <span class="cluster-text">${specString}</span>
            </div>
        </div>
    `;
}

// Current active series
let currentSeries = 'a-series';
let isWelcomeState = false; // Will be set to true on load if renderWelcomePage is called

window.activeGpuBenchmark = 'wildlife';
window.toggleGpuBenchmark = function () {
    window.activeGpuBenchmark = (window.activeGpuBenchmark === 'wildlife') ? 'steel_nomad' : 'wildlife';
    if (document.getElementById('comparison-table-wrapper')) {
        updateComparisonTable();
    }
};


function renderTable(dataRaw) {
    const container = document.getElementById('soc-table-container');

    // Clone and sort the data by releaseDate descending (newest first)
    const data = [...dataRaw].sort((a, b) => {
        const dateA = a.releaseDate || '';
        const dateB = b.releaseDate || '';

        const nullish = ['N/A', 'Unknown', ''];
        const aIsNull = nullish.includes(dateA);
        const bIsNull = nullish.includes(dateB);

        if (aIsNull && bIsNull) return 0;
        if (aIsNull) return -1; // Push unknown to top
        if (bIsNull) return 1;

        return dateB.localeCompare(dateA);
    });

    if (data.length === 0) {
        container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: var(--md-sys-color-on-surface-variant);">
                <span class="material-icons-round" style="font-size: 48px; opacity: 0.5;">search_off</span>
                <p style="margin-top: 16px; font-size: 16px;">${t('no_chips_found')}</p>
            </div>
        `;
        return;
    }

    // Use global logo helper
    const getBrandLogoHtml = getBrandLogoGlobal;
    const manufacturer = seriesDataMap[currentSeries].manufacturer;

    let gridHtml = '<div class="chip-grid">';

    data.forEach((chip, index) => {
        const fileManufacturer = manufacturer === 'Global' ? chip.manufacturer : manufacturer;
        const localLogoHtml = getBrandLogoHtml(fileManufacturer);

        let iconHtml = localLogoHtml
            ? `<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">${localLogoHtml.replace('width: 28px;', 'width: 32px;').replace('height: 28px;', 'height: 32px;')}</div>`
            : `<span class="material-icons-round">memory</span>`;

        // Determine if there are key specs to show on the card face
        const cpuSpec = chip.cpu ? (typeof chip.cpu === 'object' ? chip.cpu.specs : chip.cpu) : null;
        let quickSpecsHtml = '';

        const specRows = [
            { label: t('mobile_release') || 'Release', value: chip.releaseDate, isCpu: false, isGpu: false },
            { label: t('mobile_process') || 'Process', value: chip.process, isCpu: false, isGpu: false },
            { label: 'CPU', value: cpuSpec, isCpu: true, isGpu: false },
            { label: 'GPU', value: chip.gpu, isCpu: false, isGpu: true }
        ];

        let hasSpecs = false;
        specRows.forEach(row => {
            if (row.value && row.value !== 'N/A' && row.value !== 'Unknown') {
                hasSpecs = true;
                let displayValue;
                let extraClass = '';
                if (row.isCpu) {
                    displayValue = formatCpuSpecs(row.value);
                    extraClass = ' card-quick-spec-cpu';
                } else if (row.isGpu) {
                    displayValue = formatGpuSpec(row.value);
                    extraClass = ' card-quick-spec-cpu'; // reuse same column layout
                } else {
                    displayValue = row.value;
                }
                quickSpecsHtml += `
                    <div class="card-quick-spec-row${extraClass}">
                        <span class="card-quick-spec-label">${row.label}</span>
                        <span class="card-quick-spec-value">${displayValue}</span>
                    </div>`;
            }
        });

        let quickHtmlOut = '';
        if (hasSpecs) {
            quickHtmlOut = `<div class="card-quick-specs">${quickSpecsHtml}</div>`;
        }


        const cardHtml = `
            <div class="chip-card" id="card-${index}" style="animation: fadeIn 0.4s ease both; animation-delay: ${index * 0.05}s;" onclick="toggleCardDetails(${index})">
                <div class="chip-card-header">
                    <div class="chip-card-icon">${iconHtml}</div>
                    <div class="chip-card-title-group">
                        <div class="chip-card-title">${chip.name}</div>
                        <div class="chip-card-subtitle tooltip-container tooltip-bottom" style="display: inline-flex; cursor: help;">
                            ${['MediaTek', 'HiSilicon', 'Unisoc'].includes(manufacturer) ? (chip.partNumber || t('value_na')) : (chip.partNumber || chip.codename || t('value_na'))}
                            <div class="tooltip-content" style="font-weight: 400; text-transform: none;">${t('partNumber_desc')}</div>
                        </div>
                    </div>
                    <button class="chip-card-compare-btn" onclick="event.stopPropagation(); goToCompare('${encodeURIComponent(chip.name)}')" title="${t('compare_btn') || 'Compare'}">
                        <span class="material-icons-round">compare_arrows</span>
                    </button>
                </div>
                ${quickHtmlOut}
                <div class="chip-card-action-bar">
                    <span class="view-specs-text">${t('view_full_specs') || 'View Full Specs'}</span>
                    <span class="material-icons-round expand-icon" id="icon-expand-${index}">expand_more</span>
                </div>
                <div class="chip-card-body">
                     ${generateMobileDetails(chip)}
                </div>
            </div>
        `;

        gridHtml += cardHtml;
    });

    gridHtml += '</div>';

    container.innerHTML = gridHtml;
}

function generateMobileDetails(chip) {
    let html = '';
    const duplicateKeys = ['releaseDate', 'process', 'cpu.specs', 'cpu', 'gpu'];

    tableStructure.forEach(group => {
        if (group.category === "category_benchmarks") return;
        const hideConn = ['m-series', 'a-series', 'tensor', 'snapdragon-x', 'exynos-5', 'exynos-4', 'exynos-3'];
        if (group.category === "category_connectivity" && hideConn.includes(currentSeries)) return;

        const visibleRows = group.rows.filter(row => {
            const val = getNestedValue(chip, row.key);
            let activeManufacturer = seriesDataMap[currentSeries].manufacturer;
            if (activeManufacturer === 'Global') activeManufacturer = chip.manufacturer || 'Global';

            const isKirinHidden = (row.key === 'dsp' || row.key === 'codename') && activeManufacturer === 'HiSilicon';
            return val && val !== '-' && val !== 'N/A' && !duplicateKeys.includes(row.key) && !isKirinHidden;
        });

        if (visibleRows.length === 0) return;

        html += `<div style="grid-column: 1 / -1; margin-top: 12px; margin-bottom: 4px;">
            <h4 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--md-sys-color-primary);">${t(group.category)}</h4>
        </div>`;

        visibleRows.forEach(row => {
            // Exclude Part Number from expansion as it's already shown in the card subtitle/header
            if (row.key === 'partNumber') return;

            const val = getNestedValue(chip, row.key);
            const formattedVal = row.key === 'cpu.specs' ? formatCpuSpecs(val) : formatValue(val);
            const extraStyle = row.key === 'cpu.specs' ? ' style="grid-column: 1 / -1;"' : '';

            let labelHtml = t(row.label);
            html += `
                <div class="spec-item"${extraStyle}>
                    <span class="spec-label">${labelHtml}</span>
                    <span class="spec-value">${formattedVal}</span>
                </div>
            `;
        });
    });
    return html;
}

window.toggleCardDetails = function (index) {
    const card = document.getElementById(`card-${index}`);
    if (!card) return;

    const isExpanded = card.classList.contains('expanded');

    // Accordion: Close all other cards in the same grid
    const container = card.closest('.chip-grid');
    if (container) {
        container.querySelectorAll('.chip-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
    }

    // Toggle current card
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
    }
};

// Dropdown Toggle Logic
window.toggleNavGroup = function (header) {
    const group = header.parentElement;
    group.classList.toggle('expanded');
};

// Update breadcrumb text
// Update breadcrumb text
function updateBreadcrumb(manufacturer, seriesName) {
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.innerHTML = `
            <a href="#" onclick="renderWelcomePage(); return false;" style="text-decoration: none; color: inherit;">${t('home')}</a>
            <span class="material-icons-round separator">chevron_right</span>
            <span>${manufacturer}</span>
            <span class="material-icons-round separator">chevron_right</span>
            <span class="current">${seriesName}</span>
        `;
    }
}

const unisocData = [
    {
        name: "Unisoc T8300",
        partNumber: "unknown",
        releaseDate: "2025.05",
        process: "TSMC 6nm (EUV)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A78 @ 2.20 GHz + 4x Cortex-A55 @ 2 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MC2 (950 MHz)",
        npu: "UNISOC NPU (3.2 TOPS)",
        modem: "UNISOC 5G Modem (Sub-6GHz)",
        memory: "32-bit Quad-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Unisoc T820",
        geekbench6: { single: "850", multi: "2400" },
        wildlifeExtreme: "574",
        partNumber: "UMS9620",
        releaseDate: "2022.11",
        process: "TSMC N6 (6nm)",
        dieSize: "67mm²",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A76 @ 2.7 GHz + 3x Cortex-A76 @ 2.3 GHz + 4x Cortex-A55 @ 2.1 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "N/A",
        gpu: "Mali-G57 MC4 (850 MHz)",
        npu: "8.0 TOPS NPU",
        dsp: "Integrated",
        modem: "Unisoc 5G",
        memory: "16-bits Dual-channel LPDDR4X 4266"
    },
    {
        name: "Unisoc T770 / T7520",
        partNumber: "T7520",
        releaseDate: "2021.02",
        wildlifeExtreme: "448",
        process: "TSMC 6nm (EUV)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "1x Cortex-A76 @ 2.50 GHz + 3x Cortex-A76 @ 2.20 GHz + 4x Cortex-A55 @ 2.00 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MC4 (780 MHz)",
        npu: "UNISOC NPU (4.8 TOPS)",
        modem: "UNISOC 5G Modem",
        memory: "32-bit Quad-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Unisoc T765 / T8200",
        geekbench6: { single: "741", multi: "1973" },
        wildlifeExtreme: "307",
        partNumber: "unknown",
        releaseDate: "2024.01",
        process: "TSMC 6nm (EUV)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.30 GHz + 6x Cortex-A55 @ 2.10 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MC2 (850 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC 5G Modem (Sub-6GHz)",
        memory: "16-bit Dual-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Unisoc T760 / T8100",
        geekbench6: { single: "744", multi: "2390" },
        wildlifeExtreme: "448",
        partNumber: "UMS9611",
        releaseDate: "2021.12",
        process: "TSMC 6nm (EUV)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A76 @ 2.20 GHz + 4x Cortex-A55 @ 2.00 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MC4 (650 MHz)",
        npu: "UNISOC NPU (2.4 TOPS)",
        modem: "UNISOC 5G Modem",
        memory: "32-bit Quad-channel LPDDR4X 2133 MHz"
    },
    {
        name: "Unisoc T750",
        partNumber: "UMS9610",
        releaseDate: "2023.04",
        process: "TSMC 6nm (EUV)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A76 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MC2 (680 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC 5G Modem",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T740 (V510)",
        partNumber: "T7510",
        releaseDate: "2020.02",
        process: "TSMC 12nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "4x Cortex-A75 @ 1.80 GHz + 4x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "PowerVR GM9446 (800 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC 5G Modem",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T620 / T7280",
        partNumber: "UMS9230-AC",
        releaseDate: "2024.08",
        process: "TSMC 12nm (FinFET)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.20 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MP1 (850 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T619",
        partNumber: "unknown",
        releaseDate: "2023.08",
        process: "TSMC 12nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.20 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MP1 (850 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T618",
        geekbench6: { single: "490", multi: "1550" },
        wildlifeExtreme: "140",
        partNumber: "UMS512T",
        releaseDate: "2019.08",
        process: "TSMC 12nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 2.00 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G52 MP2 (850 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T616 / T7255",
        geekbench6: { single: "450", multi: "1500" },
        wildlifeExtreme: "120",
        partNumber: "UMS9230T",
        releaseDate: "2022.01",
        process: "TSMC 12nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 2.00 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MP1 (750 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T615 / T7250",
        partNumber: "UMS9230-AB",
        releaseDate: "2024.07",
        process: "TSMC 12nm (FinFET)",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 1.80 GHz + 6x Cortex-A55 @ 1.60 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MC1 (850 MHz)",
        npu: "unknown",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T612 / T7225",
        geekbench6: { single: "430", multi: "1480" },
        wildlifeExtreme: "120",
        partNumber: "UMS9230H",
        releaseDate: "2022.05",
        process: "TSMC 12nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 1.80 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MP1 (650 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1866 MHz"
    },
    {
        name: "Unisoc T610",
        geekbench6: { single: "400", multi: "1350" },
        wildlifeExtreme: "120",
        partNumber: "UMS512",
        releaseDate: "2019.11",
        process: "TSMC 12nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 1.80 GHz + 6x Cortex-A55 @ 1.80 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G52 MP2 (614 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1600 MHz"
    },
    {
        name: "Unisoc T606 / T7200",
        geekbench6: { single: "380", multi: "1350" },
        wildlifeExtreme: "110",
        partNumber: "UMS9230",
        releaseDate: "2021.09",
        process: "TSMC 12nm",
        dieSize: "unknown",
        architecture: "ARMv8.2-A",
        cpu: {
            specs: "2x Cortex-A75 @ 1.60 GHz + 6x Cortex-A55 @ 1.60 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "ARM Mali-G57 MP1 (650 MHz)",
        npu: "UNISOC NPU",
        modem: "UNISOC LTE Cat.7",
        memory: "16-bit Dual-channel LPDDR4X 1600 MHz"
    },
    {
        name: "Unisoc T603 / T7100",
        partNumber: "unknown",
        releaseDate: "2023.10",
        process: "28nm (HPC+)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "2x Cortex-A75 @ 1.80 GHz + 6x Cortex-A55 @ 1.20 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "PowerVR GE8322 (550 MHz)",
        npu: "unknown",
        modem: "UNISOC LTE Cat.4",
        memory: "LPDDR4X / LPDDR3"
    },
    {
        name: "Unisoc SC9863A",
        partNumber: "SC9863A",
        releaseDate: "2018.11",
        process: "28nm (HPC+)",
        dieSize: "unknown",
        architecture: "ARMv8-A",
        cpu: {
            specs: "4x Cortex-A55 @ 1.60 GHz + 4x Cortex-A55 @ 1.20 GHz",
            l2Cache: "unknown",
            l3Cache: "unknown"
        },
        slc: "unknown",
        gpu: "PowerVR GE8322 (550 MHz)",
        npu: "unknown",
        modem: "UNISOC LTE Cat.4",
        memory: "16-bit Dual-channel LPDDR4X 1200 MHz"
    }
];

const xiaomiData = [
    {
        name: "Xiaomi XRing o1",
        codename: "Franklin1",
        partNumber: "V10100A/B/C",
        releaseDate: "2026.01",
        process: "TSMC N3E",
        dieSize: "109mm²",
        architecture: "ARMv9.2-A",
        cpu: {
            specs: "2x Cortex-X925 @ 3.9 GHz + 4x Cortex-A725 @ 3.34 GHz + 2x Cortex-A725 @ 1.90 GHz + 2x Cortex-A520 @ 1.8GHz",
            l2Cache: "2x 2MB (X925) + 6x 1MB (A725) + 512KB (2x A520)",
            l3Cache: "16MB"
        },
        geekbench6: {
            single: "3125",
            multi: "9671"
        },
        wildlifeExtreme: "6604",
        steelNomadLite: "2682",
        slc: "N/A",
        gpu: "ARM Mali-G925 MC16 @ 1392MHz",
        npu: "Xiaomi Hexa-core NPU (10MB cache)",
        modem: "N/A (T800 external)",
        memory: "16-bit Quad-Channel 9600"
    },
    {
        name: "Xiaomi Surge S1",
        codename: "Pinecone",
        partNumber: "TPP189.BP",
        releaseDate: "2017.02",
        process: "TSMC 28nm HPC+",
        dieSize: "86mm²",
        architecture: "ARMv8",
        cpu: {
            specs: "4x Cortex-A53 @ 2.2 GHz + 4x Cortex-A53 @ 1.4 GHz",
            l2Cache: "unknown",
            l3Cache: "N/A"
        },
        slc: "N/A",
        gpu: "arm Mali-T860 MP4 @ 992MHz",
        npu: "N/A",
        modem: "4G Modem",
        memory: "32-bit Dual-Channel LPDDR3-1866"
    }
];



const changelogData = [
    {
        version: "stable-v1.0.0",
        date: "2026-03-31",
        changes: {
            en: [
                "WE HAVE A SHIT TON OF LANGUAGE",
            ],
            vi: [
                "CÓ MỘT ĐỐNG NGÔN NGỮ",
            ],
        }
    },
    {
        version: "Release Canidate 2",
        date: "2026-03-28",
        changes: {
            en: [
                "bug fix"
            ],
            vi: [
                "bug fix"
            ],
        }
    },
    {
        version: "Release Canidate 1",
        date: "2026-03-27",
        changes: {
            en: [
                "UI revamp babyyyyyyy"
            ],
            vi: [
                "Chỉnh sửa lại UI"
            ],
        }
    },
    {
        version: "beta-v1.4.0",
        date: "2026-03-19",
        changes: {
            en: [
                "Added Steel Nomad Lite benchmark for selected SoC"
            ],
            vi: [
                "Thêm benchmark Steel Nomad Lite cho một số chip nhất định"
            ],
        }
    },
    {
        version: "beta-v1.3.0",
        date: "2026-03-17",
        changes: {
            en: [
                "I forgot to write changelogs.",
                "Added Kirin 9030 series benchmarks, added some eggs",
                "There are definitely more changes I just can't remember it all."
            ],
            vi: [
                "Quên không ghi Changelogs.",
                "Thêm benchmarks cho Kirin 9030 và 9030 Pro",
                "Chắc là có nhiều cái đã được thay đổi nhưng tôi không nhớ được"
            ]
        }
    },
    {
        version: "beta-v1.2.0",
        date: "2026-01-31",
        changes: {
            en: [
                "nothing is changed trust",
                "general bug fix",
            ],
            vi: [
                "ko co gi thay doi ca tin toi di",
                "fix bug",

            ]
        }
    },
    {
        version: "beta-v1.1.0",
        date: "2026-01-15",
        changes: {
            en: [
                "New UI for Desktop",
                "Removed 'Samsung' prefix for Exynos SoCs.",
                "Fixed long SoC names overflowing the UI.",
                "Fixed benchmark bars clipping issues for long chip names.",
            ],
            vi: [
                "Giao diện mới cho Desktop",
                "Xóa chữ 'Samsung' cho các SoC Exynos.",
                "Sửa lỗi tên SoC dài quá làm tràn khung giao diện.",
                "Sửa lỗi thanh benchmark bị đè chữ khi tên chip quá dài.",
            ]
        }
    },
    {
        version: "beta-v1.0.0",
        date: "2026-01-13",
        changes: {
            en: [
                "MASSIVE UI update.",
                "Revamped Light Mode for better contrast and aesthetics.",
                "Added Custom Accent Color support (check Settings).",
                "Code cleanup and performance optimizations.",
            ],
            vi: [
                "UI được cải thiện đáng kể.",
                "Làm lại giao diện Sáng (Light Mode) nhìn cho đàng hoàng hơn.",
                "Thêm tính năng chỉnh màu chủ đạo (trong Cài đặt).",
                "Dọn dẹp mã nguồn giúp web chạy mượt hơn.",
            ]
        }
    },
    {
        version: "alpha-v1.4.0",
        date: "2026-01-09",
        changes: {
            en: [
                "Replaced 'Chipset' with 'SoC' cause I am fucking dumb.",
                "Added a small easter egg. Try to find it!",
            ],
            vi: [
                "Thay thế toàn bộ 'Chipset' bằng 'SoC' cho nó chuẩn xác (và nghe ngầu hơn).",
                "Thêm một cái easter egg nhỏ. Thử tìm xem!",
            ]
        }
    },
    {
        version: "alpha-v1.3.2.hotfix",
        date: "2026-01-08",
        changes: {
            en: [
                "Fixed VN translation",
            ],
            vi: [
                "Sửa lỗi dịch thuật tiếng Việt",
            ]
        }
    },
    {
        version: "alpha-v1.3.1.hotfix",
        date: "2026-01-08",
        changes: {
            en: [
                "Fixed SoC search suggestions clipping through other elements on mobile.",
                "Improved search box visibility on mobile (font size and padding adjustments).",
                "Fixed Vietnamese placeholder text truncation in comparison search.",
                "Added smooth text truncation for long SoC names in search results.",
                "Optimized mobile stacking context for search dropdowns,ugh, too serious."
            ],
            vi: [
                "Sửa lỗi gợi ý tìm kiếm SoC bị đè bởi các thành phần khác trên điện thoại.",
                "Cải thiện hiển thị thanh tìm kiếm trên điện thoại (chỉnh kích thước chữ và padding).",
                "Sửa lỗi mất chữ trong ô tìm kiếm khi dùng tiếng Việt ở trang so sánh.",
                "Thêm hiệu ứng cắt chữ cho các SoC có tên dài trong kết quả tìm kiếm.",
                "Tối ưu hóa thứ tự hiển thị của các bảng gợi ý trên điện thoại, mé, lâu lâu làm căng một tí."
            ]
        }
    },
    {
        version: "alpha-v1.3.0",
        date: "2026-01-07",
        changes: {
            en: [
                "UI, UI, UI, UI, UI.",
                "something is added and it isnt the home button.",
                "fixed a shit ton of bugs on mobile.",
                "animations, yay",
                "added a favicon and embed"
            ],
            vi: [
                "UI, UI, UI, UI, UI.",
                "tui thêm cái gì quên mẹ r chắc ko phải cái nút trang chủ đâu ha",
                "sửa cả đống lỗi trên trang web cho điện thoại, hehehee.",
                "thêm hoạt ảnh, yay",
                "thêm một cái favicon và embed"
            ]
        }
    },
    {
        version: "alpha-v1.2.0",
        date: "2026-01-06",
        changes: {
            en: [
                "Added Mediatek 9500s and 8500 SoC details.",
                "Added Xiaomi XRing o1 and Surge S1 SoC details.",
                "Added the Xiaomi logo.",
                "Added Changelog section.",
                "Added Snapdragon 675 benchmarks (requested)"
            ],
            vi: [
                "Thêm chi tiết SoC Mediatek 9500s và 8500.",
                "Thêm chi tiết SoC Xiaomi XRing o1 và Surge S1.",
                "Thêm logo Xiaomi.",
                "Thêm mục Nhật ký thay đổi (rất quan trọng).",
                "Thêm benchmarks cho Snapdragon 675 (theo yêu cầu)"
            ]
        }
    },
    {
        version: "alpha-v1.0.0",
        date: "2026-01-04",
        changes: {
            en: [
                "First alpha release",
                "Added Comparison page with Geekbench 6 as CPU bench and 3DMark Wildlife Extreme as GPU bench.",
                "Renamed to ReptDoc."
            ],
            vi: [
                "Bản đầu tiên mà trang web này chấp nhận được",
                "Thêm trang So sánh với Geekbench 6 (CPU) và 3DMark Wildlife Extreme (GPU).",
                "Đổi tên thành ReptDoc."
            ]
        }
    },
    {
        version: "pre-Alpha v0.1",
        date: "2025-12-28",
        changes: {
            en: [
                "Initial release with Apple, Qualcomm, MediaTek, Exynos SoCs.",
                "Dark/Light mode support.",
                "Search functionality."
            ],
            vi: [
                "Bản PoC với các SoC từ Apple, Qualcomm, MediaTek, Samsung.",
                "Hỗ trợ chế độ Sáng/Tối.",
                "Tìm kiếm (rất quan trọng)."
            ]
        }
    }
];

let currentLang = localStorage.getItem('reptdoc_lang');
if (!currentLang) {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('vi')) currentLang = 'vi';
    else if (userLang.startsWith('tl') || userLang.startsWith('fil')) currentLang = 'tl';
    else if (userLang.startsWith('id')) currentLang = 'id';
    else if (userLang.startsWith('hu')) currentLang = 'hu';
    else if (userLang.startsWith('zh')) currentLang = 'zh_MO';
    else if (userLang.startsWith('hi')) currentLang = 'hi';
    else if (userLang.startsWith('tr')) currentLang = 'tr';
    else if (userLang.startsWith('ml')) currentLang = 'ml';
    else currentLang = 'en';
}

let loadedTranslations = {};

async function loadLocales() {
    try {
        const response = await fetch(`locales/${currentLang}.json`);
        if (!response.ok) throw new Error('Locale not found');
        loadedTranslations = await response.json();
    } catch (e) {
        console.error('Failed to load locale:', e);
        try {
            const fallbackResponse = await fetch(`locales/en.json`);
            loadedTranslations = await fallbackResponse.json();
        } catch (e2) {
            console.error('Failed to load fallback locale:', e2);
        }
    }
}

function t(key) {
    return loadedTranslations[key] || key;
}
window.t = t;

const seriesDataMap = {
    'a-series': { data: aSeriesData, manufacturer: 'Apple Silicon', label: 'A Series' },
    'm-series': { data: mSeriesData, manufacturer: 'Apple Silicon', label: 'M Series' },
    'snapdragon-8': { data: snapdragon8Data, manufacturer: 'Qualcomm', label: 'Snapdragon 8 Series' },
    'snapdragon-7': { data: snapdragon7Data, manufacturer: 'Qualcomm', label: 'Snapdragon 7 Series' },
    'snapdragon-6': { data: snapdragon6Data, manufacturer: 'Qualcomm', label: 'Snapdragon 6 Series' },
    'snapdragon-4': { data: snapdragon4Data, manufacturer: 'Qualcomm', label: 'Snapdragon 4 Series' },
    'snapdragon-2': { data: snapdragon2Data, manufacturer: 'Qualcomm', label: 'Snapdragon 2 Series' },
    'snapdragon-x': { data: snapdragonXData, manufacturer: 'Qualcomm', label: 'Snapdragon X Series' },
    'dimensity-9000': { data: dimensity9000Data, manufacturer: 'MediaTek', label: 'Dimensity 9000 Series' },
    'dimensity-8000': { data: dimensity8000Data, manufacturer: 'MediaTek', label: 'Dimensity 8000 Series' },
    'dimensity-7000': { data: dimensity7000Data, manufacturer: 'MediaTek', label: 'Dimensity 7000 Series' },
    'dimensity-6000': { data: dimensity6000Data, manufacturer: 'MediaTek', label: 'Dimensity 6000 Series' },
    'dimensity-1000': { data: dimensity1000Data, manufacturer: 'MediaTek', label: 'Dimensity 1000 Series' },
    'dimensity-900': { data: dimensity900Data, manufacturer: 'MediaTek', label: 'Dimensity 900 series' },
    'dimensity-800': { data: dimensity800Data, manufacturer: 'MediaTek', label: 'Dimensity 800 series' },
    'dimensity-700': { data: dimensity700Data, manufacturer: 'MediaTek', label: 'Dimensity 700 series' },
    'helio-g': { data: helioGData, manufacturer: 'MediaTek', label: 'Helio G Series' },
    'helio-x': { data: helioXData, manufacturer: 'MediaTek', label: 'Helio X Series' },
    'helio-p': { data: helioPData, manufacturer: 'MediaTek', label: 'Helio P Series' },
    'helio-a': { data: helioAData, manufacturer: 'MediaTek', label: 'Helio A Series' },
    'kirin-9000': { data: kirin9000Data, manufacturer: 'HiSilicon', label: 'Kirin 9 series' },
    'kirin-800': { data: kirin800Data, manufacturer: 'HiSilicon', label: 'Kirin 8 series' },
    'kirin-700': { data: kirin700Data, manufacturer: 'HiSilicon', label: 'Kirin 7 series' },
    'kirin-600': { data: kirin600Data, manufacturer: 'HiSilicon', label: 'Kirin 6 series' },
    'kirin-tablet': { data: kirinTabletData, manufacturer: 'HiSilicon', label: 'Tablet-only SoCs' },
    'kirin-past': { data: pastSoCs, manufacturer: 'HiSilicon', label: 'pre-Kirins' },
    'exynos-2000': { data: exynos2000Data, manufacturer: 'Exynos', label: 'Exynos 2000 series' },
    'exynos-1000': { data: exynos1000Data, manufacturer: 'Exynos', label: 'Exynos 1000 series' },
    'exynos-900': { data: exynos900Data, manufacturer: 'Exynos', label: 'Exynos 900 series' },
    'exynos-800': { data: exynos800Data, manufacturer: 'Exynos', label: 'Exynos 800 series' },
    'exynos-9': { data: exynos9Data, manufacturer: 'Exynos', label: 'Exynos 9 series' },
    'exynos-8': { data: exynos8Data, manufacturer: 'Exynos', label: 'Exynos 8 series' },
    'exynos-7': { data: exynos7Data, manufacturer: 'Exynos', label: 'Exynos 7 series' },
    'exynos-5': { data: exynos5Data, manufacturer: 'Exynos', label: 'Exynos 5 series' },
    'exynos-4': { data: exynos4Data, manufacturer: 'Exynos', label: 'Exynos 4 series' },
    'exynos-3': { data: exynos3Data, manufacturer: 'Exynos', label: 'Exynos 3 series' },
    'tensor': { data: tensorData, manufacturer: 'Google', label: 'Google Tensors' },
    'unisoc': { data: unisocData, manufacturer: 'Unisoc', label: 'Unisoc' },
    'xiaomi': { data: xiaomiData, manufacturer: 'Xiaomi', label: 'Xiaomi' },
    'global': { data: [], manufacturer: 'Global', label: 'Search Results' }
};

// Language Initialization
function initLang() {
    // Apply Language-Specific Classes for Smart Typography (e.g. Inter for RU/ARZ)
    document.body.className = document.body.className.replace(/\blang-\S+/g, '');
    document.body.classList.add(`lang-${currentLang}`);
    document.documentElement.lang = currentLang;

    // Translate Page Title
    if (document.title.includes('Compare') || document.title.includes('So sánh')) {
        document.title = `ReptDoc - ${t('compare_breadcrumb')}`;
    } else {
        document.title = t('welcome_title');
    }

    // Translate All Search Placeholders
    document.querySelectorAll('input[placeholder]').forEach(input => {
        const ph = input.placeholder.toLowerCase();
        if (ph.includes('search chips')) input.placeholder = t('search_placeholder');
        if (ph.includes('first soc')) input.placeholder = t('search_first');
        if (ph.includes('second soc')) input.placeholder = t('search_second');
    });

    // Translate Compare Button in Top Bar
    document.querySelectorAll('.top-bar button').forEach(btn => {
        const text = btn.textContent.trim().toLowerCase();
        if (text === 'compare' || text === 'so sánh') {
            btn.textContent = t('compare_btn');
        }
    });


    const settingsLabel = document.querySelector('.settings-label');
    if (settingsLabel) settingsLabel.textContent = t('settings');

    const homeLabel = document.querySelector('.home-label');
    if (homeLabel) homeLabel.textContent = t('back_to_home');

    const changelogLabel = document.querySelector('.changelog-label');
    if (changelogLabel) changelogLabel.textContent = t('changelog');

    // Compare Page Statics
    const compareTitle = document.querySelector('.compare-header h1');
    if (compareTitle) compareTitle.textContent = t('compare_socs');
    const compareDesc = document.querySelector('.compare-header p');
    if (compareDesc) compareDesc.textContent = t('compare_desc');

    // Breadcrumbs on compare page
    const breadcrumbCurrent = document.querySelector('.breadcrumbs .current');
    if (breadcrumbCurrent && document.getElementById('comparison-container')) {
        breadcrumbCurrent.textContent = t('compare_breadcrumb');
    }

    document.querySelectorAll('.remove-chip-btn').forEach(btn => btn.textContent = t('remove'));

    const langThemeLabel = document.querySelector('.lang-theme-btn-label');
    if (langThemeLabel) langThemeLabel.textContent = t('lang_theme_btn');

    const shareBtnText = document.getElementById('share-comparison');
    if (shareBtnText) {
        // The button has an icon and text, we only want to translate the text node
        const textNode = Array.from(shareBtnText.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
        if (textNode) {
            textNode.textContent = ' ' + (t('compare_share') || 'Share') + ' ';
        }
    }
}

window.changeLanguage = function (newLang) {
    if (newLang !== currentLang) {
        currentLang = newLang;
        localStorage.setItem('reptdoc_lang', currentLang);
        location.reload();
    }
};

function initSettings() {
    const settingsBtn = document.getElementById('nav-settings');
    if (!settingsBtn) return;

    settingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSettingsModal();
    });
}

function showSettingsModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('settings-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'settings-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    // Get saved accent color or default
    const savedAccent = localStorage.getItem('reptdoc_accent') || '#E6C275';
    const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
    const isLightMode = document.body.classList.contains('light-mode');

    let displaySavedAccent = savedAccent;
    if (savedAccent === 'trans-pride') {
        displaySavedAccent = 'linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%)';
    } else if (isLightMode && savedAccent.toUpperCase() === '#FFFFFF') {
        displaySavedAccent = '#000000';
    } else if (!isLightMode && savedAccent === '#000000') {
        displaySavedAccent = '#FFFFFF';
    }

    // Determine the trans awareness date label (display-only decorative)
    let transDateLabel = '';
    if (typeof isTransAwarenessDate === 'function' && isTransAwarenessDate()) {
        const now = new Date();
        const month = now.getMonth();
        const day = now.getDate();
        if (month === 2) transDateLabel = 'Happy Trans Day of Visibility! 🏳️‍⚧️';
        else if (day === 20) transDateLabel = 'Transgender Day of Remembrance 🕯️';
        else transDateLabel = 'Transgender Awareness Week 🏳️‍⚧️';
    }

    modal.innerHTML = `
        <div class="modal-content settings-content">
            <div class="modal-header">
                <h2>${t('settings')}</h2>
                <button class="btn-icon modal-close-btn" onclick="document.getElementById('settings-modal').classList.remove('active')">
                    <span class="material-icons-round">close</span>
                </button>
            </div>
            <div class="modal-body" style="padding-top: 8px;">
                ${transDateLabel ? `<div style="text-align: center; padding: 10px 16px; background: linear-gradient(135deg, rgba(85, 205, 252, 0.12), rgba(247, 168, 184, 0.12)); border-radius: 14px; font-size: 14px; font-weight: 600; color: var(--md-sys-color-on-surface); margin-bottom: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;"><span style="display: inline-block; width: 22px; height: 14px; border-radius: 3px; background: linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%); flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"></span>${transDateLabel}</div>` : ''}
                <div class="setting-item">
                    <div class="setting-info">
                        <h3>${t('theme_title') || 'Theme'}</h3>
                    </div>
                    <div class="setting-control">
                        <button class="btn-tonal" id="modal-theme-toggle" onclick="window.toggleTheme(this)" style="height: 36px; padding: 0 20px; border-radius: 999px; background: var(--md-sys-color-secondary-container); color: var(--md-sys-color-on-secondary-container); display: flex; align-items: center; gap: 8px; border: none; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <span class="material-icons-round" style="font-size: 20px;">${isLightMode ? 'light_mode' : 'dark_mode'}</span>
                            <span style="font-size: 14px;">${isLightMode ? (t('light_mode') || 'Light') : (t('dark_mode') || 'Dark')}</span>
                        </button>
                    </div>
                </div>
                <div class="setting-item">
                    <div class="setting-info">
                        <h3 style="margin-bottom: 0;">${t('language')}</h3>
                    </div>
                    <div class="setting-control">
                        <select id="lang-select" style="background-color: var(--md-sys-color-surface-container-low); color: var(--md-sys-color-on-surface); border: 1px solid var(--md-sys-color-outline-variant); border-radius: 8px; padding: 6px 12px; font-weight: 500; font-family: inherit; cursor: pointer; outline: none; transition: border-color 0.2s;">
                            <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                            <option value="vi" ${currentLang === 'vi' ? 'selected' : ''}>Tiếng Việt</option>
                            <option value="id" ${currentLang === 'id' ? 'selected' : ''}>Bahasa Indonesia</option>
                            <option value="tl" ${currentLang === 'tl' ? 'selected' : ''}>Tagalog</option>
                            <option value="km" ${currentLang === 'km' ? 'selected' : ''}>ភាសាខ្មែរ</option>
                            <option value="ru" ${currentLang === 'ru' ? 'selected' : ''}>Русский</option>
                            <option value="ro" ${currentLang === 'ro' ? 'selected' : ''}>Română</option>
                            <option value="de" ${currentLang === 'de' ? 'selected' : ''}>Deutsch</option>
                            <option value="hu" ${currentLang === 'hu' ? 'selected' : ''}>Magyar</option>
                            <option value="zh_MO" ${currentLang === 'zh_MO' ? 'selected' : ''}>简体中文</option>
                            <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>हिन्दी</option>
                            <option value="arz" ${currentLang === 'arz' ? 'selected' : ''}>العربية (مصر)</option>
                            <option value="ar_SA" ${currentLang === 'ar_SA' ? 'selected' : ''}>العربية (السعودية)</option>
                            <option value="bg" ${currentLang === 'bg' ? 'selected' : ''}>Български</option>
                            <option value="tr" ${currentLang === 'tr' ? 'selected' : ''}>Türkçe</option>
                            <option value="ml" ${currentLang === 'ml' ? 'selected' : ''}>മലയാളം</option>
                            <option value="pl" ${currentLang === 'pl' ? 'selected' : ''}>Polski</option>
                            ${currentLang === 'de@informal' ? `<option value="de@informal" selected>Bayerisch</option>` : ''}
                        </select>
                    </div>
                </div>
                <div class="setting-item">
                    <div class="setting-info">
                        <h3>${t('accent_color') || 'Accent Color'}</h3>
                        <p class="setting-desc" style="margin-top: 2px;">${t('accent_color_desc') || 'Customize the primary color to match your style'}</p>
                    </div>
                    <div class="setting-control">
                        <label class="toggle-switch">
                            <input type="checkbox" id="accent-toggle" ${isAccentEnabled ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
                <div class="setting-item accent-presets" style="display: flex; flex-wrap: wrap; gap: 14px; padding: 12px 16px 20px 16px; justify-content: center; align-items: center; opacity: ${isAccentEnabled ? '1' : '0.4'}; pointer-events: ${isAccentEnabled ? 'auto' : 'none'}; transition: opacity 0.3s; margin-top: -12px;">
                    <div class="custom-color-picker" title="Pick a custom color">
                        <div id="accent-preview" style="background: ${displaySavedAccent.startsWith('linear-gradient') ? displaySavedAccent : displaySavedAccent}; background-color: ${displaySavedAccent.startsWith('linear-gradient') ? 'transparent' : displaySavedAccent};"></div>
                        <input type="color" id="accent-picker" value="${savedAccent === 'trans-pride' ? '#55CDFC' : (displaySavedAccent.startsWith('linear-gradient') ? '#55CDFC' : displaySavedAccent)}" ${!isAccentEnabled ? 'disabled' : ''}>
                        <span class="material-icons-round picker-icon" style="font-size: 16px;">palette</span>
                    </div>
                    <button class="accent-preset" data-color="#4CAF50" style="background: #4CAF50; flex-shrink: 0;" title="Green"></button>
                    <button class="accent-preset" data-color="#2196F3" style="background: #2196F3; flex-shrink: 0;" title="Blue"></button>
                    <button class="accent-preset" data-color="#9C27B0" style="background: #9C27B0; flex-shrink: 0;" title="Purple"></button>
                    <button class="accent-preset" data-color="#FF5722" style="background: #FF5722; flex-shrink: 0;" title="Deep Orange"></button>
                    <button class="accent-preset" data-color="#FFFFFF" style="background: #FFFFFF; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.3);" title="White"></button>
                    <button class="accent-preset" data-color="#E91E63" style="background: #E91E63; flex-shrink: 0;" title="Pink"></button>
                    <button class="accent-preset" data-color="#FFEB3B" style="background: #FFEB3B; flex-shrink: 0;" title="Yellow"></button>
                    <button class="accent-preset" data-color="#B71C1C" style="background: linear-gradient(135deg, #C62828, #B71C1C); flex-shrink: 0;" title="Deep Red"></button>
                    <button class="accent-preset" data-color="trans-pride" style="background: linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%); flex-shrink: 0; border: 1px solid rgba(255,255,255,0.2);" title="Trans Pride Theme 🏳️‍⚧️"></button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Handle language change
    const langSelect = document.getElementById('lang-select');
    langSelect.addEventListener('change', (e) => window.changeLanguage(e.target.value));

    // Handle accent toggle
    const accentToggle = document.getElementById('accent-toggle');
    const accentPicker = document.getElementById('accent-picker');
    const accentPreview = document.getElementById('accent-preview');
    const accentPresets = modal.querySelector('.accent-presets');

    accentToggle.addEventListener('change', (e) => {
        const enabled = e.target.checked;
        localStorage.setItem('reptdoc_accent_enabled', enabled);

        accentPicker.disabled = !enabled;
        accentPresets.style.opacity = enabled ? '1' : '0.4';
        accentPresets.style.pointerEvents = enabled ? 'auto' : 'none';

        if (enabled) {
            const saved = localStorage.getItem('reptdoc_accent');
            if (saved === 'trans-pride') {
                applyTransPrideTheme();
                localStorage.setItem('reptdoc_trans_pride', 'true');
            } else {
                applyCustomAccent(accentPicker.value);
                localStorage.setItem('reptdoc_trans_pride', 'false');
            }
        } else {
            removeCustomAccent();
            removeTransPrideTheme();
            localStorage.setItem('reptdoc_trans_pride', 'false');
        }
    });

    // Handle color picker change
    accentPicker.addEventListener('input', (e) => {
        const color = e.target.value;
        localStorage.setItem('reptdoc_accent', color);
        localStorage.setItem('reptdoc_trans_pride', 'false');
        accentPreview.style.background = 'none';
        accentPreview.style.backgroundColor = color;
        removeTransPrideTheme();
        applyCustomAccent(color);
    });

    // Handle preset buttons
    modal.querySelectorAll('.accent-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            localStorage.setItem('reptdoc_accent', color);

            if (color === 'trans-pride') {
                localStorage.setItem('reptdoc_trans_pride', 'true');
                accentPreview.style.background = 'linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%)';
                applyTransPrideTheme();
            } else {
                localStorage.setItem('reptdoc_trans_pride', 'false');
                const isLight = document.body.classList.contains('light-mode');
                let displayColor = color;
                if (isLight && color.toUpperCase() === '#FFFFFF') displayColor = '#000000';
                else if (!isLight && color === '#000000') displayColor = '#FFFFFF';

                accentPicker.value = (color === '#FFFFFF' || color === '#000000') ? displayColor : color;
                accentPreview.style.background = 'none';
                accentPreview.style.backgroundColor = displayColor;
                removeTransPrideTheme();
                applyCustomAccent(color);
            }
        });
    });

    // Close on overlay click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

function initChangelog() {
    const changelogBtn = document.getElementById('nav-changelog');
    if (!changelogBtn) return;

    changelogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showChangelogModal();
    });
}

function showChangelogModal() {
    let modal = document.getElementById('changelog-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'changelog-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    let changelogHtml = '<div class="changelog-timeline">';
    changelogData.forEach(item => {
        changelogHtml += `
            <div class="changelog-item">
                <div class="changelog-marker"></div>
                <div class="changelog-content-wrap">
                    <div class="changelog-header">
                        <span class="changelog-version-badge">${item.version}</span>
                        <span class="changelog-date">${item.date}</span>
                    </div>
                    <ul class="changelog-list">
                        ${(item.changes[currentLang] || item.changes['en']).map(change => `<li>${change}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    changelogHtml += '</div>';

    modal.innerHTML = `
        <div class="modal-content settings-content">
            <div class="modal-header">
                <h2>${t('changelog')}</h2>
                <button class="btn-icon modal-close-btn" onclick="document.getElementById('changelog-modal').classList.remove('active')">
                    <span class="material-icons-round">close</span>
                </button>
            </div>
            <div class="modal-body">
                ${changelogHtml}
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Close on overlay click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

// Render Welcome Page
function renderWelcomePage() {
    isWelcomeState = true;
    const container = document.getElementById('soc-table-container');

    // Clear Active Nav State
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    // Update Breadcrumbs
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.innerHTML = `
            <span>${t('home')}</span>
            <span class="material-icons-round separator">chevron_right</span>
            <span class="current">${t('welcome')}</span>
        `;
    }

    container.innerHTML = `
        <div class="welcome-container">
            <div class="welcome-hero">
                <h1 class="welcome-title">${t('welcome_title')}</h1>
                <p class="welcome-subtitle">${t('welcome_subtitle')}</p>
            </div>
            
            <div class="welcome-actions" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 32px; flex-wrap: wrap; padding: 0 16px;">
                <button class="btn-contained" onclick="window.location.href='compare.html'" style="display: flex; align-items: center; gap: 8px; padding: 10px 24px; min-height: 44px; height: auto; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); white-space: normal; text-align: center; justify-content: center; flex: 0 1 auto; max-width: 100%;">
                    <span class="material-icons-round" style="font-size: 20px; flex-shrink: 0;">compare_arrows</span>
                    <span style="font-weight: 600;">${t('compare_btn') || 'Compare'}</span>
                </button>
                <button class="btn-contained" onclick="showSettingsModal()" style="display: flex; align-items: center; gap: 8px; padding: 10px 24px; min-height: 44px; height: auto; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); white-space: normal; text-align: center; justify-content: center; flex: 0 1 auto; max-width: 100%;">
                    <div style="display: flex; gap: 2px; flex-shrink: 0;">
                        <span class="material-icons-round" style="font-size: 20px;">translate</span>
                        <span class="material-icons-round" style="font-size: 20px;">dark_mode</span>
                    </div>
                    <span style="font-weight: 600;">${t('lang_theme_btn') || 'Language & Theme'}</span>
                </button>
                <button class="btn-contained" onclick="showChangelogModal()" style="display: flex; align-items: center; gap: 8px; padding: 10px 24px; min-height: 44px; height: auto; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); white-space: normal; text-align: center; justify-content: center; flex: 0 1 auto; max-width: 100%;">
                    <span class="material-icons-round" style="font-size: 20px; flex-shrink: 0;">history</span>
                    <span style="font-weight: 600;">${t('changelog') || 'Changelog'}</span>
                </button>
            </div>

            <div class="welcome-credits" style="margin: 0 auto 48px; padding: 24px 32px; background: var(--md-sys-color-surface-variant); border: 2px solid var(--md-sys-color-primary); border-radius: 24px; text-align: center; max-width: 800px; box-shadow: 0 16px 40px -8px rgba(0,0,0,0.15);">
                <h3 style="display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 22px; font-weight: 700; margin-bottom: 12px; color: var(--md-sys-color-on-surface);">
                    <span class="material-icons-round" style="color: var(--md-sys-color-primary); font-size: 28px;">volunteer_activism</span> 
                    ${t('translation_credits') || 'Translation Credits 💖'}
                </h3>
                <p style="color: var(--md-sys-color-on-surface-variant); margin-bottom: 24px; font-size: 16px;">
                    ${t('translation_desc') || 'Massive thanks to our community translators! Want to help translate ReptDoc into your language?'}
                </p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 28px;">
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/hu.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Magyar">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Magyar</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">mackovaok (Kris)</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/in.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="हिन्दी">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">हिन्दी</span>
                        <a href="https://github.com/Egapboi" target="_blank" style="color: var(--md-sys-color-on-surface-variant); text-decoration: none; display: flex; align-items: center; gap: 4px;">egapboi <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/cn.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="简体中文">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">简体中文</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">syobe</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/kh.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="ភាសាខ្មែر">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">ភាសាខ្មែរ</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">Kenzi</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/ph.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Tagalog">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Tagalog</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">Riley</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px; cursor: pointer;" onclick="window.changeLanguage(currentLang === 'de@informal' ? 'de' : 'de@informal')">
                        ${currentLang === 'de@informal' ?
            `<svg viewBox="0 0 72 72" style="width: 28px; height: 22px; border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="color"><rect x="5" y="17" width="62" height="38" fill="#fff"/><path transform="translate(6,18)" fill="#61B2E4" d="M 57.81375,0 L 44.5425,0 60,34.2 60,36 47.5425,36 31.27125,0 18,0 34.27125,36 21,36 9,9.45 0,7.155 0,18.9 7.72875,36 21,36 0,30.645 0,18.9 60,34.2 60,22.455 9,9.45 4.72875,0 18,0 60,10.71 60,4.8375 z"/></g>
                                <g id="line"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 17H5V55H67V17Z"/></g>
                            </svg>` :
            `<img src="https://flagcdn.com/w40/de.png" width="28" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Deutsch">`
        }
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">${currentLang === 'de@informal' ? 'Bayerisch' : 'Deutsch'}</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">SnitchPikachu</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/ro.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Română">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Română</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">fro0st</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/ru.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Русский">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Русский</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">fro0st, MaxSpec</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/id.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Bahasa Indonesia">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Bahasa Indonesia</span>
                        <a href="https://bsky.app/profile/edibletomb.bsky.social" target="_blank" style="color: var(--md-sys-color-on-surface-variant); text-decoration: none; display: flex; align-items: center; gap: 4px;">edibletomb <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 600 531"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/></svg></a>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/eg.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="العربية (مصر)">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">العربية (مصر)</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">1x0</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/sa.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="العربية (السعودية)">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">العربية (السعودية)</span>
                        <a href="https://www.instagram.com/1gzzt/" target="_blank" style="color: var(--md-sys-color-on-surface-variant); text-decoration: none; display: flex; align-items: center; gap: 4px;">ryan<svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/bg.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Български">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Български</span>
                        <span style="color: var(--md-sys-color-on-surface-variant); cursor: pointer; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" onclick="navigator.clipboard.writeText('dumbass.cat'); showToast('Discord copied: dumbass.cat')" onmouseover="this.style.color='var(--md-sys-color-primary)'" onmouseout="this.style.color='var(--md-sys-color-on-surface-variant)'">Lyuuu <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.156 2.419 0 1.334-.945 2.419-2.156 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg></span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/tr.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Türkçe">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Türkçe</span>
                        <span style="color: var(--md-sys-color-on-surface-variant); cursor: pointer; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" onclick="navigator.clipboard.writeText('emitra'); showToast('Discord copied: emitra')" onmouseover="this.style.color='var(--md-sys-color-primary)'" onmouseout="this.style.color='var(--md-sys-color-on-surface-variant)'">emitra <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.156 2.419 0 1.334-.945 2.419-2.156 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg></span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/in.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="മലയാളം">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">മലയാളം</span>
                        <span style="color: var(--md-sys-color-on-surface-variant); cursor: pointer; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" onclick="navigator.clipboard.writeText('daemonxyz'); showToast('Discord copied: daemonxyz')" onmouseover="this.style.color='var(--md-sys-color-primary)'" onmouseout="this.style.color='var(--md-sys-color-on-surface-variant)'">Junkler <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.156 2.419 0 1.334-.945 2.419-2.156 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg></span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/pl.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Polski">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Polski</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">abys</span>
                    </div>
                </div>
                <button class="btn-contained" onclick="window.open('https://hosted.weblate.org/projects/reptdoc/', '_blank')" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 8px; font-size: 15px; padding: 10px 24px; border-radius: 999px;">
                    ${t('translation_join') || 'Join us on Weblate'}
                    <span class="material-icons-round" style="font-size: 18px;">open_in_new</span>
                </button>
            </div>
        </div>
    `;
}

// Switch series and re-render table
function switchSeries(series) {
    isWelcomeState = false;
    currentSeries = series;

    // Update nav item active state
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`.nav-item[data-series="${series}"]`);
    if (activeItem) activeItem.classList.add('active');

    // Clear search input
    const searchInput = document.getElementById('chip-search');
    if (searchInput) searchInput.value = '';

    const seriesInfo = seriesDataMap[series];
    if (seriesInfo) {
        renderTable(seriesInfo.data);
        updateBreadcrumb(seriesInfo.manufacturer, seriesInfo.label);
    }
}

// Code extracted to theme.js

// Initialize navigation
function initNavigation() {
    document.querySelectorAll('.nav-item[data-series]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchSeries(item.getAttribute('data-series'));
        });
    });

    // Make logo click go to welcome page
    const logoArea = document.querySelector('.logo-area');
    if (logoArea) {
        logoArea.style.cursor = 'pointer';
        logoArea.addEventListener('click', () => {
            renderWelcomePage();
        });
    }
}


// Navigation and Menu Toggle Logic
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (!menuBtn || !sidebar) return;

    function toggleMenu() {
        if (window.innerWidth <= 768) {
            // Mobile behavior: toggle 'open' class to slide in
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
        } else {
            // Desktop behavior: toggle 'collapsed' class to hide sidebar
            sidebar.classList.toggle('collapsed');
        }
    }

    function closeMenu() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close sidebar when clicking any nav item (mobile UX)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
}

// Search Logic
function initSearch() {
    const searchInput = document.getElementById('chip-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        // If currently in welcome state (or was when search started), prepare context
        if (isWelcomeState) {
            // Switch to global context if not already
            if (currentSeries !== 'global') {
                currentSeries = 'global';
                // Update breadcrumbs to show Global Search
                updateBreadcrumb("ReptDoc", t('search_results'));

                // Deselect nav items
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            }
        }

        // Handle Empty Query -> Go back to state
        if (!query) {
            if (isWelcomeState) {
                renderWelcomePage();
            } else {
                const seriesInfo = seriesDataMap[currentSeries];
                if (seriesInfo) renderTable(seriesInfo.data);
            }
            return;
        }

        // Prepare Data for Search
        let dataToFilter = [];
        if (currentSeries === 'global') {
            // Aggregate ALL data
            Object.keys(seriesDataMap).forEach(key => {
                if (key === 'global') return;
                const info = seriesDataMap[key];
                // Add manufacturer info to each chip for the global view logic
                const chipsWithMeta = info.data.map(chip => ({
                    ...chip,
                    manufacturer: info.manufacturer,
                    seriesKey: key // optional, helpful for debugging
                }));
                dataToFilter = dataToFilter.concat(chipsWithMeta);
            });
        } else {
            const seriesInfo = seriesDataMap[currentSeries];
            if (!seriesInfo) return;
            dataToFilter = seriesInfo.data;
        }
        const filteredData = dataToFilter.filter(chip =>
            (chip.name && chip.name.toLowerCase().includes(query)) ||
            (chip.codename && chip.codename.toLowerCase().includes(query))
        );

        // Sort by relevance
        filteredData.sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            if (aName === query) return -1;
            if (bName === query) return 1;
            const aStarts = aName.startsWith(query);
            const bStarts = bName.startsWith(query);
            if (aStarts && !bStarts) return -1;
            if (bStarts && !aStarts) return 1;
            return aName.length - bName.length;
        });

        renderTable(filteredData);
    });
}

/* Comparison Logic */
let comparisonState = { 1: null, 2: null };
window.allChipsFlat = null; // Prepare variable

// Global helper for logos using high-fidelity brand icons
function getBrandLogoGlobal(manufacturer, size) {
    const iconSize = size || "28px";
    if (!manufacturer) return `<span class="material-icons-round" style="font-size: ${iconSize}; color: var(--md-sys-color-primary);">memory</span>`;

    const m = manufacturer.toLowerCase().trim();
    const simpleIconsBase = "https://cdn.simpleicons.org";
    const imgStyle = `width: ${iconSize}; height: ${iconSize}; object-fit: contain;`;

    // Logos mapped to official Simple Icons / Local files
    const logos = {
        'apple silicon': `<img src="${simpleIconsBase}/apple/white" alt="Apple" style="${imgStyle}" class="brand-logo-apple">`,
        'qualcomm': `<img src="${simpleIconsBase}/qualcomm/E2E2E2" alt="Qualcomm" style="${imgStyle}">`,
        'mediatek': `<img src="${simpleIconsBase}/mediatek/color" alt="MediaTek" style="${imgStyle}">`,
        'exynos': `<img src="${simpleIconsBase}/samsung/1428A0" alt="Samsung" style="${imgStyle}">`,
        'google': `<svg viewBox="0 0 24 24" style="width: ${iconSize}; height: ${iconSize};" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`,
        'unisoc': `<img src="unisoc-logo.png" alt="Unisoc" style="${imgStyle}">`,
        'xiaomi': `<img src="${simpleIconsBase}/xiaomi/FF6900" alt="Xiaomi" style="${imgStyle}">`,
        'hisilicon': `<img src="${simpleIconsBase}/huawei/C20E1A" alt="HiSilicon" style="${imgStyle}">`
    };

    return logos[m] || `<span class="material-icons-round" style="font-size: ${iconSize}; color: var(--md-sys-color-primary);">memory</span>`;
}


function goToCompare(chipName) {
    window.location.href = `compare.html?chip=${chipName}`;
}

function initComparison() {
    initCompareSearch(1);
    initCompareSearch(2);

    // Sidebar home link override for compare page
    const logoLink = document.getElementById('logo-home-link');
    if (logoLink) logoLink.onclick = (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    };

    // Initialize Share Button
    const shareBtn = document.getElementById('share-comparison');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            copyComparisonLink();
        });
    }

    // Auto-select chips from URL params
    const params = new URLSearchParams(window.location.search);
    const preselect1 = params.get('chip1') || params.get('chip');
    const preselect2 = params.get('chip2');

    const waitForDataAndSelect = (slot, chipName) => {
        if (!chipName) return;
        const checkData = () => {
            if (window.allChipsFlat && window.allChipsFlat.length > 0) {
                const name = decodeURIComponent(chipName).toLowerCase();
                const chipIndex = window.allChipsFlat.findIndex(c => c.name.toLowerCase() === name);
                if (chipIndex !== -1) {
                    selectChip(slot, chipIndex, false);
                }
            } else {
                setTimeout(checkData, 50);
            }
        };
        checkData();
    };

    waitForDataAndSelect(1, preselect1);
    waitForDataAndSelect(2, preselect2);
}

function syncURLWithState() {
    const params = new URLSearchParams();
    if (comparisonState[1]) params.set('chip1', comparisonState[1].name);
    if (comparisonState[2]) params.set('chip2', comparisonState[2].name);

    const qs = params.toString();
    const newURL = window.location.pathname + (qs ? '?' + qs : '');
    window.history.replaceState({ path: newURL }, '', newURL);
}

function copyComparisonLink() {
    // Current URL is kept in sync with state
    const url = window.location.href;
    const btn = document.getElementById('share-comparison');
    const icon = btn ? btn.querySelector('.material-icons-round') : null;

    navigator.clipboard.writeText(url).then(() => {
        if (icon) {
            const originalIcon = icon.textContent;
            icon.textContent = 'check';
            setTimeout(() => {
                icon.textContent = originalIcon;
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy link:', err);
        // Fallback or legacy copy method could go here
    });
}

function initCompareSearch(id) {
    const input = document.getElementById(`input-chip-${id}`);
    const results = document.getElementById(`results-chip-${id}`);

    // Prepare flattened data (cached)
    if (window.allChipsFlat === null || window.allChipsFlat === undefined) {
        window.allChipsFlat = [];
        Object.keys(seriesDataMap).forEach(key => {
            if (key === 'global') return;
            const info = seriesDataMap[key];
            const chipsWithMeta = info.data.map(chip => ({
                ...chip,
                manufacturer: info.manufacturer, // Ensure manufacturer is set
                seriesLabel: info.label
            }));
            window.allChipsFlat = window.allChipsFlat.concat(chipsWithMeta);
        });
    }

    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();

        if (val === 'kenzi') {
            alert("are u a gay furry");
        }
        if (val === 'bdtech') {
            alert("boodoo galala s25 ultra");
        }
        if (val === 'bojangles') {
            alert("u suck");
        }
        if (val === 'synz') {
            alert("synz synz synz synz synz synz synz synz");
        }
        if (val === 'yeetdom') {
            alert("yeetdom is the best");
        }
        if (val === 'bluein') {
            alert("blublublublublublublublu");
        }
        if (val === 'val') {
            alert("valvalvalvalvalvalvalvalvalvalval");
        }
        if (val === 'riley') {
            alert("riley riley riley riley riley riley riley riley");
        }
        if (val === 'inf') {
            alert("honesly i think you should go touch some grass");
        }
        if (val === 'nagara') {
            alert("nagara nagara nagara nagara nagara nagara nagara nagara");
        }
        if (val === 'kietlak') {
            alert("kietlak l?c dít di");
        }
        if (val === 'wil') {
            alert("pls maid");
        }
        if (val === 'mortician') {
            alert("u are such a nerd i love it")
        }

        if (!val) {
            results.classList.remove('active');
            return;
        }

        const matches = window.allChipsFlat.filter(chip =>
            (chip.name && chip.name.toLowerCase().includes(val)) ||
            (chip.codename && chip.codename.toLowerCase().includes(val))
        ).slice(0, 10); // Limit to 10

        if (matches.length > 0) {
            results.innerHTML = matches.map((chip, idx) => `
                <div class="result-item" onclick="selectChip(${id}, ${window.allChipsFlat.indexOf(chip)})">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div class="result-item-icon" style="flex-shrink: 0; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 8px;">
                            ${getBrandLogoGlobal(chip.manufacturer).replace('width: 28px; height: 28px;', 'width: 20px; height: 20px;')}
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <strong>${chip.name}</strong>
                            <small>${chip.manufacturer} - ${chip.releaseDate || ''}</small>
                        </div>
                    </div>
                </div>
            `).join('');
            results.classList.add('active');
            // Ensure card is on top when active
            document.getElementById(`selector-${id}`).style.zIndex = '1000';
        } else {
            results.classList.remove('active');
            document.getElementById(`selector-${id}`).style.zIndex = '';
        }
    });

    // Hide results on click outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !results.contains(e.target)) {
            results.classList.remove('active');
            document.getElementById(`selector-${id}`).style.zIndex = '';
        }
    });
}

window.selectChip = function (slot, chipIndex, updateURL = true) {
    const chip = window.allChipsFlat[chipIndex];
    comparisonState[slot] = chip;

    // Update UI
    document.getElementById(`selector-${slot}`).querySelector('.selector-search-box').style.display = 'none';
    document.getElementById(`results-chip-${slot}`).classList.remove('active');

    const display = document.getElementById(`display-chip-${slot}`);
    display.classList.add('active');

    // Set Icon
    const displayIcon = getBrandLogoGlobal(chip.manufacturer, "64px");

    document.getElementById(`icon-chip-${slot}`).innerHTML = displayIcon;
    document.getElementById(`name-chip-${slot}`).innerHTML = chip.name;
    document.getElementById(`detail-chip-${slot}`).innerHTML = chip.partNumber || chip.codename || '';

    // Update URL if needed
    if (updateURL) {
        syncURLWithState();
    }

    // Defer table update to next animation frame to prevent layout thrashing/jitter
    requestAnimationFrame(() => {
        updateComparisonTable();
    });
}


window.clearChip = function (slot) {
    comparisonState[slot] = null;
    document.getElementById(`selector-${slot}`).querySelector('.selector-search-box').style.display = 'flex';
    document.getElementById(`input-chip-${slot}`).value = '';
    document.getElementById(`display-chip-${slot}`).classList.remove('active');

    syncURLWithState();

    // Defer update to smooth out removal animation
    requestAnimationFrame(() => {
        updateComparisonTable();
    });
}


function updateComparisonTable() {
    const container = document.getElementById('comparison-table-wrapper');
    const chip1 = comparisonState[1];
    const chip2 = comparisonState[2];

    if (!chip1 && !chip2) {
        container.innerHTML = '';
        return;
    }

    let html = '<table class="comparison-table">';
    html += `<thead><tr><th>${t('specs')}</th>`;
    html += `<th>${chip1 ? chip1.name : t('select_soc')}</th>`;
    html += `<th>${chip2 ? chip2.name : t('select_soc')}</th>`;
    html += '</tr></thead><tbody>';

    tableStructure.forEach(group => {
        // Skip benchmarks in table - we'll render them separately
        if (group.category === "category_benchmarks") return;

        html += `<tr><td colspan="3" class="comparison-category">${t(group.category)}</td></tr>`;

        group.rows.forEach(row => {
            let v1 = chip1 ? getNestedValue(chip1, row.key) : '-';
            let v2 = chip2 ? getNestedValue(chip2, row.key) : '-';

            if (v1 === undefined || v1 === 'undefined') v1 = 'unknown';
            if (v2 === undefined || v2 === 'undefined') v2 = 'unknown';

            if ((!v1 || v1 === '-' || v1 === 'N/A' || v1 === 'unknown') && (!v2 || v2 === '-' || v2 === 'N/A' || v2 === 'unknown')) return;

            let labelHtml = t(row.label);

            html += `<tr>`;
            html += `<td class="feature-label">${labelHtml}</td>`;
            html += `<td class="val-col">${row.key === 'cpu.specs' ? formatCpuSpecs(v1) : formatValue(v1)}</td>`;
            html += `<td class="val-col">${row.key === 'cpu.specs' ? formatCpuSpecs(v2) : formatValue(v2)}</td>`;
            html += `</tr>`;
        });
    });

    html += '</tbody></table>';

    // Add visual benchmark comparison at the TOP
    const benchmarkHtml = renderBenchmarkComparison(chip1, chip2);

    container.innerHTML = benchmarkHtml + html;
}

function renderBenchmarkComparison(chip1, chip2) {
    const name1 = chip1 ? chip1.name : 'Chip 1';
    const name2 = chip2 ? chip2.name : 'Chip 2';

    // Get CPU benchmark values
    const gb6Single1 = chip1 && chip1.geekbench6 ? parseInt(chip1.geekbench6.single) || 0 : 0;
    const gb6Single2 = chip2 && chip2.geekbench6 ? parseInt(chip2.geekbench6.single) || 0 : 0;
    const gb6Multi1 = chip1 && chip1.geekbench6 ? parseInt(chip1.geekbench6.multi) || 0 : 0;
    const gb6Multi2 = chip2 && chip2.geekbench6 ? parseInt(chip2.geekbench6.multi) || 0 : 0;

    // Get GPU benchmark values
    const wildlife1 = chip1 ? parseInt(chip1.wildlifeExtreme) || 0 : 0;
    const wildlife2 = chip2 ? parseInt(chip2.wildlifeExtreme) || 0 : 0;
    const steelNomad1 = chip1 ? parseInt(chip1.steelNomadLite) || 0 : 0;
    const steelNomad2 = chip2 ? parseInt(chip2.steelNomadLite) || 0 : 0;

    const gpuMode = window.activeGpuBenchmark || 'wildlife';
    const hasSteel = steelNomad1 || steelNomad2;
    const hasWildlife = wildlife1 || wildlife2;
    const canToggleGpu = hasSteel && hasWildlife;

    // Check if we have any benchmark data
    if (!gb6Single1 && !gb6Single2 && !gb6Multi1 && !gb6Multi2 && !hasWildlife && !hasSteel) {
        return '';
    }

    let html = '<div class="benchmark-comparison">';

    // Geekbench 6 Section
    if (gb6Single1 || gb6Single2 || gb6Multi1 || gb6Multi2) {
        html += `
        <div class="benchmark-section">
            <div class="benchmark-header">
                <span class="material-icons-round" style="color: var(--md-sys-color-primary); margin-right: 8px;">speed</span>
                <h3>${t('geekbench_title')}</h3>
            </div>
            <p class="benchmark-desc">${t('geekbench_desc')}</p>
            <div class="benchmark-grid">
                <div class="benchmark-column">
                    <h4>${t('single_core')}</h4>
                    ${renderBenchmarkBar(name1, gb6Single1, name2, gb6Single2)}
                </div>
                <div class="benchmark-column">
                    <h4>${t('multi_core')}</h4>
                    ${renderBenchmarkBar(name1, gb6Multi1, name2, gb6Multi2)}
                </div>
            </div>
        </div>`;
    }

    // Determine which GPU benchmark to show based on toggle and availability
    const showSteelNomad = (gpuMode === 'steel_nomad' && hasSteel) || (hasSteel && !hasWildlife);
    const activeGpu1 = showSteelNomad ? steelNomad1 : wildlife1;
    const activeGpu2 = showSteelNomad ? steelNomad2 : wildlife2;

    if (activeGpu1 || activeGpu2 || canToggleGpu) {
        const toggleLabel = showSteelNomad ? t('switch_to_wildlife') : t('switch_to_steel');
        const toggleHtml = canToggleGpu ?
            `<button class="btn-text tooltip" style="display: inline-flex !important; align-items: center; justify-content: center; padding: 4px 8px; font-size: 13px; align-self: flex-start;" onclick="toggleGpuBenchmark()">
                 <span class="material-icons-round" style="font-size: 16px; margin-right: 4px;">swap_horiz</span>
                 ${toggleLabel}
             </button>` : '';

        const curGpuTitle = showSteelNomad ? t('steel_nomad_title') : t('wildlife_title');

        html += `
        <div class="benchmark-section">
            <div class="benchmark-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center;">
                    <span class="material-icons-round" style="color: var(--md-sys-color-primary); margin-right: 8px;">videogame_asset</span>
                    <h3>${curGpuTitle}</h3>
                </div>
                ${toggleHtml}
            </div>
            <p class="benchmark-desc">${t('wildlife_desc')}</p>
            <div class="benchmark-grid single">
                <div class="benchmark-column">
                    <h4>${t('graphics_score')}</h4>
                    ${renderBenchmarkBar(name1, activeGpu1, name2, activeGpu2)}
                </div>
            </div>
        </div>`;
    }

    html += '</div>';
    return html;
}

function renderBenchmarkBar(name1, val1, name2, val2) {
    const maxVal = Math.max(val1, val2);
    const pct1 = maxVal > 0 ? (val1 / maxVal) * 100 : 0;
    const pct2 = maxVal > 0 ? (val2 / maxVal) * 100 : 0;

    // Calculate percentage difference
    let diff1 = '', diff2 = '';
    if (val1 > 0 && val2 > 0) {
        if (val1 > val2) {
            const pctDiff = Math.round(((val1 - val2) / val2) * 100);
            diff1 = `<span class="benchmark-diff positive">+${pctDiff}%</span>`;
        } else if (val2 > val1) {
            const pctDiff = Math.round(((val2 - val1) / val1) * 100);
            diff2 = `<span class="benchmark-diff positive">+${pctDiff}%</span>`;
        }
    }

    // Determine bar colors based on win/loss
    const color1 = val1 >= val2 ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline)';
    const color2 = val2 >= val1 ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline)';

    return `
        <div class="benchmark-bar-group">
            <div class="benchmark-bar-row">
                <div class="benchmark-bar-label"><span class="chip-name-text">${name1}</span> ${diff1}</div>
                <div class="benchmark-bar-value">${val1 > 0 ? val1.toLocaleString() : '-'}</div>
            </div>
            <div class="benchmark-bar-container">
                <div class="benchmark-bar" style="width: ${pct1}%; background-color: ${color1};"></div>
            </div>
            <div class="benchmark-bar-row" style="margin-top: 16px;">
                <div class="benchmark-bar-label"><span class="chip-name-text">${name2}</span> ${diff2}</div>
                <div class="benchmark-bar-value">${val2 > 0 ? val2.toLocaleString() : '-'}</div>
            </div>
            <div class="benchmark-bar-container">
                <div class="benchmark-bar" style="width: ${pct2}%; background-color: ${color2};"></div>
            </div>
        </div>
    `;
}

// Toast Notification
function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-container';
        toast.innerHTML = `
            <span class="material-icons-round toast-icon">check_circle</span>
            <span class="toast-message"></span>
        `;
        document.body.appendChild(toast);
    }

    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Init
document.addEventListener('DOMContentLoaded', async () => {
    await loadLocales();
    initLang();
    initTheme();

    initMobileMenu();
    initSettings();
    initChangelog();

    if (document.getElementById('comparison-container')) {
        initComparison();
    } else {
        renderWelcomePage();
        initNavigation();
        initSearch();
    }
});
