const t = {
    de: {
        t1: "📊 Schnittdaten", t2: "⏱️ Hauptnutzungszeit", t3: "⚖️ Gewicht", t4: "🌀 Kompressor",
        st1: "🔄 Drehen", st2: "⚙️ Fräsen", st3: "🎯 Bohren",
        h_time: "⏱️ Hauptnutzungszeit", h_weight: "⚖️ Gewichtsberechnung", h_comp: "🌀 Auslegung von Kompressoren",
        l_d: "Durchmesser d (mm)", l_vc: "vc (m/min)", l_f: "Vorschub f (mm/U)", l_z: "Zähnezahl z",
        l_l: "Schnittlänge L (mm)", l_la: "Anlauf la (mm)", l_lu: "Überlauf lu (mm)", l_n: "Drehzahl n (1/min)", l_i: "Anzahl Schnitte i",
        l_mat: "Material (g/cm³)", l_form: "Form", l_wd: "Ø d (mm)", l_wb: "Breite B (mm)", l_wh: "Höhe H (mm)", l_wl: "Länge L (mm)",
        btn: "🚀 Berechnen", opt_r: "Rund", opt_f: "Flach", sel_comp: "Berechnung wählen",
        comp: {
            a: "Kopffläche A", h: "Kolbenhub H", f: "Kolbenbelastung F", p: "Flächenpressung p", 
            mmax: "Max. Drehmoment Mmax", mm: "Mittl. Drehmoment Mm", pow: "Antriebsleistung P",
            q: "Luftmenge Q", v: "Strömungsgeschw. v"
        }
    },
    it: {
        t1: "📊 Dati di taglio", t2: "⏱️ Tempo di lavorazione", t3: "⚖️ Peso", t4: "🌀 Compressore",
        st1: "🔄 Tornitura", st2: "⚙️ Fresatura", st3: "🎯 Foratura",
        h_time: "⏱️ Tempo di lavorazione", h_weight: "⚖️ Calcolo del peso", h_comp: "🌀 Dimensionamento compressori",
        l_d: "Diametro d (mm)", l_vc: "vc (m/min)", l_f: "Avanzamento f (mm/g)", l_z: "Numero denti z",
        l_l: "Lunghezza L (mm)", l_la: "Entrata la (mm)", l_lu: "Uscita lu (mm)", l_n: "Giri n (1/min)", l_i: "Passate i",
        l_mat: "Materiale (g/cm³)", l_form: "Profilo", l_wd: "Ø d (mm)", l_wb: "Larghezza B (mm)", l_wh: "Altezza H (mm)", l_wl: "Lunghezza L (mm)",
        btn: "🚀 Calcolare", opt_r: "Tondo", opt_f: "Piatto", sel_comp: "Seleziona calcolo",
        comp: {
            a: "Area testa A", h: "Corsa H", f: "Carico pistone F", p: "Pressione superf. p", 
            mmax: "Coppia max Mmax", mm: "Coppia media Mm", pow: "Potenza P",
            q: "Portata aria Q", v: "Velocità flusso v"
        }
    },
    en: {
        t1: "📊 Cutting Data", t2: "⏱️ Machining Time", t3: "⚖️ Weight", t4: "🌀 Compressor",
        st1: "🔄 Turning", st2: "⚙️ Milling", st3: "🎯 Drilling",
        h_time: "⏱️ Machining Time", h_weight: "⚖️ Weight Calculation", h_comp: "🌀 Compressor Sizing",
        l_d: "Diameter d (mm)", l_vc: "vc (m/min)", l_f: "Feed f (mm/rev)", l_z: "Teeth z",
        l_l: "Length L (mm)", l_la: "Approach la (mm)", l_lu: "Overrun lu (mm)", l_n: "Speed n (RPM)", l_i: "Passes i",
        l_mat: "Material (g/cm³)", l_form: "Shape", l_wd: "Ø d (mm)", l_wb: "Width B (mm)", l_wh: "Height H (mm)", l_wl: "Length L (mm)",
        btn: "🚀 Calculate", opt_r: "Round", opt_f: "Flat", sel_comp: "Select calculation",
        comp: {
            a: "Head Area A", h: "Stroke H", f: "Piston Load F", p: "Surface Pressure p", 
            mmax: "Max Torque Mmax", mm: "Mean Torque Mm", pow: "Power P",
            q: "Air Flow Q", v: "Flow Velocity v"
        }
    }
};

let currentLang = 'de';
let subMode = 'turn'; 
let thMode = 'turn';

function changeLanguage(lang) {
    currentLang = lang;
    const cur = t[lang];
    document.getElementById('t1').innerText = cur.t1;
    document.getElementById('t2').innerText = cur.t2;
    document.getElementById('t3').innerText = cur.t3;
    document.getElementById('t4').innerText = cur.t4;
    document.getElementById('st1').innerText = cur.st1;
    document.getElementById('st2').innerText = cur.st2;
    document.getElementById('st3').innerText = cur.st3;
    document.getElementById('h-time').innerText = cur.h_time;
    document.getElementById('h-weight').innerText = cur.h_weight;
    document.getElementById('h-comp').innerText = cur.h_comp;
    document.getElementById('lbl-d').innerText = cur.l_d;
    document.getElementById('lbl-vc').innerText = cur.l_vc;
    document.getElementById('lbl-f').innerText = cur.l_f;
    document.getElementById('lbl-z').innerText = cur.l_z;
    document.getElementById('lbl-l').innerText = cur.l_l;
    document.getElementById('lbl-la').innerText = cur.l_la;
    document.getElementById('lbl-lu').innerText = cur.l_lu;
    document.getElementById('lbl-tn').innerText = cur.l_n;
    document.getElementById('lbl-tf').innerText = cur.l_f;
    document.getElementById('lbl-ti').innerText = cur.l_i;
    document.getElementById('lbl-mat').innerText = cur.l_mat;
    document.getElementById('lbl-form').innerText = cur.l_form;
    document.getElementById('opt-r').innerText = cur.opt_r;
    document.getElementById('opt-f').innerText = cur.opt_f;
    document.getElementById('lbl-wd').innerText = cur.l_wd;
    document.getElementById('lbl-wb').innerText = cur.l_wb;
    document.getElementById('lbl-wh').innerText = cur.l_wh;
    document.getElementById('lbl-wl').innerText = cur.l_wl;
    document.getElementById('lbl-sel-comp').innerText = cur.sel_comp;
    document.getElementById('btn-c').innerText = cur.btn;
    document.getElementById('btn-th').innerText = cur.btn;
    document.getElementById('btn-w').innerText = cur.btn;
    document.getElementById('btn-comp').innerText = cur.btn;
    renderCompDropdown();
}

function openTab(evt, id) {
    document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function openSubTab(evt, mode) {
    subMode = mode;
    document.querySelectorAll('#tab-cutting .sub-btn').forEach(b => b.classList.remove('active'));
    evt.currentTarget.classList.add('active');
    document.querySelector('.mill-only').style.display = (mode === 'cut-milling') ? 'block' : 'none';
}

function setThMode(mode) {
    thMode = mode;
    document.querySelectorAll('#tab-time .sub-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function toggleWeightInputs() {
    const isFlat = document.getElementById('w-form').value === 'flat';
    document.getElementById('w-d-box').style.display = isFlat ? 'none' : 'block';
    document.querySelectorAll('.w-flat-box').forEach(el => el.style.display = isFlat ? 'block' : 'none');
}

// BERECHNUNGEN
function calculateCutting() {
    const d = parseFloat(document.getElementById('c-d').value);
    const vc = parseFloat(document.getElementById('c-vc').value);
    const f = parseFloat(document.getElementById('c-f').value);
    const n = (vc * 1000) / (Math.PI * d);
    let vf = n * f;
    if (subMode === 'cut-milling') vf *= parseFloat(document.getElementById('c-z').value);
    
    const res = document.getElementById('res-cut');
    res.innerHTML = `n = ${n.toFixed(0)} min⁻¹ | vf = ${vf.toFixed(1)} mm/min`;
    res.style.display = 'block';
}

function calculateTh() {
    const L = parseFloat(document.getElementById('th-l').value);
    const la = parseFloat(document.getElementById('th-la').value);
    const lu = parseFloat(document.getElementById('th-lu').value);
    const n = parseFloat(document.getElementById('th-n').value);
    const f = parseFloat(document.getElementById('th-f').value);
    const i = parseFloat(document.getElementById('th-i').value);
    const th = ((L + la + lu) * i) / (n * f);
    const res = document.getElementById('res-time');
    res.innerHTML = `th = ${th.toFixed(2)} min`;
    res.style.display = 'block';
}

function calculateWeight() {
    const rho = parseFloat(document.getElementById('w-rho').value);
    const L = parseFloat(document.getElementById('w-l').value);
    const form = document.getElementById('w-form').value;
    let vol = 0;
    if (form === 'round') {
        const d = parseFloat(document.getElementById('w-d').value);
        vol = (Math.PI * Math.pow(d, 2) / 4) * L;
    } else {
        const b = parseFloat(document.getElementById('w-b').value);
        const h = parseFloat(document.getElementById('w-h').value);
        vol = b * h * L;
    }
    const mass = (vol * rho) / 1000000;
    const res = document.getElementById('res-weight');
    res.innerHTML = `m = ${mass.toFixed(3)} kg`;
    res.style.display = 'block';
}

// KOMPRESSOR LOGIK
function renderCompDropdown() {
    const s = document.getElementById('comp-mode');
    const cur = t[currentLang].comp;
    s.innerHTML = `
        <option value="A">${cur.a}</option><option value="H">${cur.h}</option>
        <option value="F">${cur.f}</option><option value="p">${cur.p}</option>
        <option value="Mmax">${cur.mmax}</option><option value="Mm">${cur.mm}</option>
        <option value="P">${cur.pow}</option><option value="Q">${cur.q}</option>
        <option value="v">${cur.v}</option>`;
    renderCompInputs();
}

function renderCompInputs() {
    const mode = document.getElementById('comp-mode').value;
    const container = document.getElementById('comp-inputs');
    container.innerHTML = "";
    const add = (id, lbl, val=50) => container.innerHTML += `<div class="form-group"><label>${lbl}</label><input type="number" id="cp-${id}" value="${val}"></div>`;

    if(mode === 'A') add('d', 'Ø d (mm)');
    if(mode === 'H') add('r', 'Kurbelradius r (mm)');
    if(mode === 'F') { add('p', 'Druck p (bar)', 10); add('a', 'Fläche A (mm²)', 2000); }
    if(mode === 'p') { add('f', 'Kraft F (N)', 5000); add('a', 'Fläche A (mm²)', 2000); }
    if(mode === 'Mmax') { add('f', 'Kraft F (N)', 5000); add('l', 'Hebelarm l (mm)', 40); }
    if(mode === 'Mm') { add('f', 'Kraft F (N)', 5000); add('r', 'Radius r (mm)', 40); }
    if(mode === 'P') { add('m', 'Drehmoment (Nm)', 100); add('n', 'Drehzahl (min⁻¹)', 1500); add('eta', 'η Wirkungsgrad', 0.85); }
    if(mode === 'Q') { add('vh', 'Hubvolumen Vh (cm³)', 250); add('n', 'Drehzahl (min⁻¹)', 1500); }
    if(mode === 'v') { add('vh', 'Hubvolumen (cm³)', 250); add('n', 'Drehzahl (min⁻¹)', 1500); add('a', 'Fläche A (cm²)', 50); }
}

function calculateComp() {
    const mode = document.getElementById('comp-mode').value;
    const res = document.getElementById('res-comp');
    const get = id => parseFloat(document.getElementById('cp-'+id).value);
    let out = "";

    if(mode === 'A') out = `A = ${(Math.PI * Math.pow(get('d'), 2) / 4).toFixed(2)} mm²`;
    if(mode === 'H') out = `H = ${(2 * get('r') / 10).toFixed(2)} cm`;
    if(mode === 'F') out = `F = ${(get('p') * 0.1 * get('a')).toFixed(1)} N`;
    if(mode === 'p') out = `p = ${(get('f') / get('a')).toFixed(2)} N/mm²`;
    if(mode === 'Mmax') out = `Mmax = ${(get('f') * get('l') / 1000).toFixed(2)} Nm`;
    if(mode === 'Mm') out = `Mm = ${(2 * get('f') * get('r') / 1000 / Math.PI).toFixed(2)} Nm`;
    if(mode === 'P') out = `P = ${( (get('m') * get('n')) / (9550 * get('eta')) ).toFixed(2)} kW`;
    if(mode === 'Q') out = `Q = ${(get('vh') * get('n') / 1000).toFixed(1)} l/min`;
    if(mode === 'v') out = `v = ${( (get('vh') * get('n')) / (get('a') * 6000) ).toFixed(3)} m/s`;

    res.innerHTML = out;
    res.style.display = 'block';
}

window.onload = () => changeLanguage('de');