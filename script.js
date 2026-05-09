const translations = {
    it: {
        t1: "📊 Dati di Taglio", t2: "⏱️ th Tempo", t3: "⚖️ Peso", t4: "🌀 Compressore",
        st1: "🔄 Tornitura", st2: "🚜 Fresatura",
        h_time: "⏱️ Tempo di lavorazione th", h_weight: "⚖️ Calcolo del Peso", h_comp: "🌀 Dimensionamento dei compressori",
        l_d: "Diametro d (mm)", l_vc: "vc (m/min)", l_f: "Avanzamento f (mm/g)",
        l_l: "Lunghezza L (mm)", l_n: "Giri n (1/min)", l_i: "Passate i",
        l_mat: "Materiale", l_form: "Profilo", l_wd: "Ø d (mm)", l_wl: "Lunghezza L (mm)",
        l_sel_comp: "Tipo di calcolo",
        opt_vh: "📏 Cilindrata Vh", opt_p: "🔋 Potenza P", opt_q: "💨 Portata d'aria Qth",
        btn: "🚀 Calcolare", btn_th: "⏱️ th Calcolare", btn_comp: "🌀 Calcolare",
        comp_d: "Pezzo Ø d (mm)", comp_r: "Raggio manovella r (mm)"
    },
    de: {
        t1: "📊 Schnittdaten", t2: "⏱️ th Zeit", t3: "⚖️ Gewicht", t4: "🌀 Kompressor",
        st1: "🔄 Drehen", st2: "🚜 Fräsen",
        h_time: "⏱️ Hauptnutzungszeit th", h_weight: "⚖️ Gewichtsberechnung", h_comp: "🌀 Auslegung von Kompressoren",
        l_d: "Durchmesser d (mm)", l_vc: "vc (m/min)", l_f: "Vorschub f (mm/U)",
        l_l: "Eingriffslänge L (mm)", l_n: "Drehzahl n (1/min)", l_i: "Schnitte i",
        l_mat: "Material", l_form: "Profilform", l_wd: "Ø d (mm)", l_wl: "Länge L (mm)",
        l_sel_comp: "Berechnungstyp wählen",
        opt_vh: "📏 Hubvolumen Vh", opt_p: "🔋 Antriebsleistung P", opt_q: "💨 Luftmenge Qth",
        btn: "🚀 Berechnen", btn_th: "⏱️ th Berechnen", btn_comp: "🌀 Berechnen",
        comp_d: "Kolben Ø d (mm)", comp_r: "Kurbelradius r (mm)"
    },
    en: {
        t1: "📊 Cutting Data", t2: "⏱️ th Time", t3: "⚖️ Weight", t4: "🌀 Compressor",
        st1: "🔄 Turning", st2: "🚜 Milling",
        h_time: "⏱️ Machining Time th", h_weight: "⚖️ Weight Calculation", h_comp: "🌀 Compressor Sizing",
        l_d: "Diameter d (mm)", l_vc: "vc (m/min)", l_f: "Feed f (mm/rev)",
        l_l: "Length L (mm)", l_n: "Speed n (RPM)", l_i: "Passes i",
        l_mat: "Material", l_form: "Profile", l_wd: "Ø d (mm)", l_wl: "Length L (mm)",
        l_sel_comp: "Select Calculation",
        opt_vh: "📏 Displacement Vh", opt_p: "🔋 Power P", opt_q: "💨 Air Flow Qth",
        btn: "🚀 Calculate", btn_th: "⏱️ th Calculate", btn_comp: "🌀 Calculate",
        comp_d: "Piston Ø d (mm)", comp_r: "Crank radius r (mm)"
    }
};

let currentLang = 'it';

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Nav & Titles
    document.getElementById('btn-t1').innerText = t.t1;
    document.getElementById('btn-t2').innerText = t.t2;
    document.getElementById('btn-t3').innerText = t.t3;
    document.getElementById('btn-t4').innerText = t.t4;
    document.getElementById('sbtn-turn').innerText = t.st1;
    document.getElementById('sbtn-mill').innerText = t.st2;
    document.getElementById('h-time').innerText = t.h_time;
    document.getElementById('h-weight').innerText = t.h_weight;
    document.getElementById('h-comp').innerText = t.h_comp;

    // Labels
    document.getElementById('lbl-d').innerText = t.l_d;
    document.getElementById('lbl-vc').innerText = t.l_vc;
    document.getElementById('lbl-f').innerText = t.l_f;
    document.getElementById('lbl-l').innerText = t.l_l;
    document.getElementById('lbl-n').innerText = t.l_n;
    document.getElementById('lbl-ft').innerText = t.l_f;
    document.getElementById('lbl-i').innerText = t.l_i;
    document.getElementById('lbl-mat').innerText = t.l_mat;
    document.getElementById('lbl-form').innerText = t.l_form;
    document.getElementById('lbl-wd').innerText = t.l_wd;
    document.getElementById('lbl-wl').innerText = t.l_wl;
    document.getElementById('lbl-comp-sel').innerText = t.l_sel_comp;

    // Buttons
    document.getElementById('btn-calc1').innerText = t.btn;
    document.getElementById('btn-calc2').innerText = t.btn_th;
    document.getElementById('btn-calc3').innerText = t.btn;
    document.getElementById('btn-calc4').innerText = t.btn_comp;

    // Redraw Compressor Dropdown
    const sel = document.getElementById('comp-selector');
    const lastVal = sel.value || "Vh";
    sel.innerHTML = `
        <option value="Vh">${t.opt_vh}</option>
        <option value="P">${t.opt_p}</option>
        <option value="Qth">${t.opt_q}</option>
    `;
    sel.value = lastVal;
    renderCompInputs();
}

function renderCompInputs() {
    const type = document.getElementById('comp-selector').value;
    const container = document.getElementById('comp-inputs');
    const t = translations[currentLang];
    container.innerHTML = "";

    const addField = (id, label) => {
        container.innerHTML += `<div class="form-group"><label>${label}</label><input type="number" id="cp-${id}" value="50"></div>`;
    };

    if (type === "Vh") {
        addField("d", t.comp_d);
        addField("r", t.comp_r);
    } else if (type === "P") {
        addField("m", "Torque M (Nm)");
        addField("n", t.l_n);
    } else if (type === "Qth") {
        addField("vh", "Vh (cm³)");
        addField("n", t.l_n);
    }
}

function openTab(evt, tabId) {
    document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function openSubTab(evt, type) {
    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
    evt.currentTarget.classList.add('active');
}

function calculateCompressor() {
    const type = document.getElementById('comp-selector').value;
    const resDiv = document.getElementById('res-comp');
    let resText = "";

    if (type === "Vh") {
        const d = parseFloat(document.getElementById('cp-d').value);
        const r = parseFloat(document.getElementById('cp-r').value);
        const vh = ((Math.PI * Math.pow(d, 2) / 4) * (2 * r)) / 1000;
        resText = `Vh = ${vh.toFixed(2)} cm³`;
    }
    resDiv.innerText = resText;
    resDiv.style.display = "block";
}

// Initialisierung
window.onload = () => changeLanguage('it');