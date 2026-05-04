const translations = {
    de: {
        home_title: "Wählen Sie einen Rechner",
        nav_bohren_vc: "Schnittdaten Bohren",
        nav_drehen_vc: "Schnittdaten Drehen",
        nav_fraesen_vc: "Schnittdaten Fräsen",
        nav_bohren_th: "Hauptnutzungszeit Bohren",
        nav_drehen_th: "Hauptnutzungszeit Drehen",
        btn_back: "← Zurück",
        btn_calc: "Berechnen",
        title_results: "Ergebnisse:",
        lbl_d: "Werkzeug-Ø D (mm)",
        lbl_d_work: "Werkstück-Ø D (mm)",
        lbl_vc: "Schnittgeschw. vc (m/min)",
        lbl_f: "Vorschub f (mm/U)",
        lbl_fz: "Zahnvorschub fz (mm)",
        lbl_z: "Anzahl Schneiden z",
        lbl_anschnitt: "Anschnitt (mm)",
        lbl_ueberlauf: "Überlauf (mm)",
        lbl_l: "Tiefe/Länge L (mm)",
        lbl_i: "Anzahl Schnitte i",
        lbl_n: "Drehzahl n (U/min)",
        res_n: "Drehzahl n",
        res_vf: "Vorschubgeschw. vf",
        res_th: "Hauptnutzungszeit th",
        unit_min: "min",
        unit_mmpm: "mm/min",
        unit_upm: "U/min"
    },
    en: {
        home_title: "Choose a Calculator",
        nav_bohren_vc: "Drilling Data",
        nav_drehen_vc: "Turning Data",
        nav_fraesen_vc: "Milling Data",
        nav_bohren_th: "Machining Time Drilling",
        nav_drehen_th: "Machining Time Turning",
        btn_back: "← Back",
        btn_calc: "Calculate",
        title_results: "Results:",
        lbl_d: "Tool Diameter D (mm)",
        lbl_d_work: "Workpiece Dia. D (mm)",
        lbl_vc: "Cutting Speed vc (m/min)",
        lbl_f: "Feed Rate f (mm/rev)",
        lbl_fz: "Feed per Tooth fz (mm)",
        lbl_z: "Number of Teeth z",
        lbl_anschnitt: "Lead-in (mm)",
        lbl_ueberlauf: "Overrun (mm)",
        lbl_l: "Length/Depth L (mm)",
        lbl_i: "No. of Cuts i",
        lbl_n: "RPM n (U/min)",
        res_n: "Rotational Speed n",
        res_vf: "Feed Velocity vf",
        res_th: "Machining Time th",
        unit_min: "min",
        unit_mmpm: "mm/min",
        unit_upm: "RPM"
    },
    it: {
        home_title: "Scegli un Calcolatore",
        nav_bohren_vc: "Dati Foratura",
        nav_drehen_vc: "Dati Tornitura",
        nav_fraesen_vc: "Dati Fresatura",
        nav_bohren_th: "Tempo di Foratura",
        nav_drehen_th: "Tempo di Tornitura",
        btn_back: "← Indietro",
        btn_calc: "Calcola",
        title_results: "Risultati:",
        lbl_d: "Diametro D (mm)",
        lbl_d_work: "Diametro Pezzo D (mm)",
        lbl_vc: "Velocità taglio vc (m/min)",
        lbl_f: "Avanzamento f (mm/giro)",
        lbl_fz: "Avanzamento dente fz (mm)",
        lbl_z: "Numero denti z",
        lbl_anschnitt: "Imbocco (mm)",
        lbl_ueberlauf: "Oltrepasso (mm)",
        lbl_l: "Lunghezza L (mm)",
        lbl_i: "Numero passate i",
        lbl_n: "Giri n (U/min)",
        res_n: "Velocità rotazione n",
        res_vf: "Velocità avanzamento vf",
        res_th: "Tempo lavorazione th",
        unit_min: "min",
        unit_mmpm: "mm/min",
        unit_upm: "giri/min"
    }
};

let currentLang = 'de';
let currentCalc = '';

function showSection(id) {
    if (id === 'home') {
        document.getElementById('home').classList.add('active');
        document.getElementById('calculator-view').classList.add('hidden');
    } else {
        document.getElementById('home').classList.remove('active');
        document.getElementById('calculator-view').classList.remove('hidden');
        setupCalculator(id);
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerText = translations[lang][el.getAttribute('data-i18n')];
    });
    if (currentCalc) setupCalculator(currentCalc);
}

function setupCalculator(type) {
    currentCalc = type;
    const container = document.getElementById('input-fields');
    const title = document.getElementById('calc-title');
    container.innerHTML = '';
    const t = translations[currentLang];

    let fields = [];
    // Schnittdaten: Nur n und vf relevante Felder
    if (type === 'calc-bohren' || type === 'calc-drehen') {
        title.innerText = type === 'calc-bohren' ? t.nav_bohren_vc : t.nav_drehen_vc;
        fields = [{ id: 'd', label: type === 'calc-bohren' ? t.lbl_d : t.lbl_d_work }, { id: 'vc', label: t.lbl_vc }, { id: 'f', label: t.lbl_f }];
    } else if (type === 'calc-fraesen') {
        title.innerText = t.nav_fraesen_vc;
        fields = [{ id: 'd', label: t.lbl_d }, { id: 'vc', label: t.lbl_vc }, { id: 'fz', label: t.lbl_fz }, { id: 'z', label: t.lbl_z }];
    } 
    // Hauptnutzungszeit: Mit i für beide
    else if (type === 'th-bohren' || type === 'th-drehen') {
        title.innerText = type === 'th-bohren' ? t.nav_bohren_th : t.nav_drehen_th;
        fields = [
            { id: 'l', label: t.lbl_l }, 
            { id: 'i', label: t.lbl_i }, 
            { id: 'f', label: t.lbl_f }, 
            { id: 'n', label: t.lbl_n }, 
            { id: 'anschnitt', label: t.lbl_anschnitt }, 
            { id: 'ueberlauf', label: t.lbl_ueberlauf }
        ];
    }

    fields.forEach(f => {
        container.innerHTML += `<div class="input-group"><label>${f.label}</label><input type="number" id="inp-${f.id}" step="any" value="0"></div>`;
    });
    document.getElementById('results-display').innerHTML = '';
}

function calculate() {
    const getVal = (id) => parseFloat(document.getElementById(`inp-${id}`)?.value) || 0;
    const t = translations[currentLang];
    let results = '';

    if (currentCalc === 'calc-bohren' || currentCalc === 'calc-drehen') {
        const n = getVal('d') !== 0 ? (1000 * getVal('vc')) / (Math.PI * getVal('d')) : 0;
        const vf = n * getVal('f');
        results = renderRes(t.res_n, n.toFixed(0), t.unit_upm) + renderRes(t.res_vf, vf.toFixed(0), t.unit_mmpm);
    } else if (currentCalc === 'calc-fraesen') {
        const n = getVal('d') !== 0 ? (1000 * getVal('vc')) / (Math.PI * getVal('d')) : 0;
        const vf = n * getVal('fz') * getVal('z');
        results = renderRes(t.res_n, n.toFixed(0), t.unit_upm) + renderRes(t.res_vf, vf.toFixed(0), t.unit_mmpm);
    } else if (currentCalc === 'th-bohren' || currentCalc === 'th-drehen') {
        // Formel: th = (L * i + Anlauf + Überlauf) / (n * f)
        const l_total = (getVal('l') * (getVal('i') || 1)) + getVal('anschnitt') + getVal('ueberlauf');
        const divisor = getVal('n') * getVal('f');
        const th = divisor !== 0 ? l_total / divisor : 0;
        results = renderRes(t.res_th, th.toFixed(3), t.unit_min);
    }

    document.getElementById('results-display').innerHTML = results;
}

function renderRes(label, val, unit) {
    return `<div class="res-row"><span>${label}:</span> <span class="res-val">${val} ${unit}</span></div>`;
}

window.onload = () => changeLanguage('de');