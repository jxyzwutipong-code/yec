// Data for 6 Players Recap for 3 Games
let scrimGameRecaps = {
    1: {
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        players: [
            { name: "YE.Neko", role: "Dark Slayer Lane", hero: "Yena", kda: "5 / 1 / 6", mvpRating: "8.9", note: "คุมเลนได้เปรียบ โซนดักทางเข้าเลนป่าศัตรูได้สมบูรณ์แบบ", isMvp: false },
            { name: "YE.Linina", role: "Mid Lane", hero: "Liliana", kda: "8 / 0 / 9", mvpRating: "9.8", note: "MVP ประจำเกม จ่ายสเปเชียลดาเมจแม่นยำ 100% ในไฟต์มังกร", isMvp: true },
            { name: "YE.Kira", role: "Jungle", hero: "Aoi", kda: "6 / 2 / 5", mvpRating: "8.5", note: "สไนป์คิลป่าฝั่งตรงข้ามตัดจังหวะได้ 3 ครั้งซ้อน", isMvp: false },
            { name: "YE.Bella", role: "Abyssal Dragon", hero: "Violet", kda: "3 / 1 / 8", mvpRating: "8.2", note: "ยิงทำระยะได้ปลอดภัย ไม่หลุดตำแหน่งเลยตลอดเกม", isMvp: false },
            { name: "YE.Momo", role: "Support / Roamer", hero: "Thane", kda: "0 / 4 / 14", mvpRating: "8.7", note: "ผลักโซนสร้างจังหวะให้เพื่อนปิดสกอร์สวยงาม", isMvp: false },
            { name: "YE.Fai", role: "Sub / Sixth Player", hero: "Observing/Coach", kda: "Analyst", mvpRating: "Coach", note: "วิเคราะห์จังหวะเข้าทำแผน early game ช่วยบรีฟระหว่างพักแมตช์", isSub: true }
        ]
    },
    2: {
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        players: [
            { name: "YE.Neko", role: "Dark Slayer Lane", hero: "Charlotte", kda: "2 / 4 / 3", mvpRating: "6.5", note: "โดน Gank เลนช่วง 4 นาทีแรก ทำให้เดินเกมยาก", isMvp: false },
            { name: "YE.Linina", role: "Mid Lane", hero: "Krixi", kda: "4 / 3 / 4", mvpRating: "7.1", note: "พยายามจ่ายความเสียหายโซนหน้า แต่ขาดตัวรับดาเมจ", isMvp: false },
            { name: "YE.Kira", role: "Jungle", hero: "Nakroth", kda: "3 / 3 / 2", mvpRating: "7.0", note: "พยายามแยกดันเลนข้างเพื่อดึงเวลา แต่พลาดเสียบัฟฟ้า", isMvp: false },
            { name: "YE.Bella", role: "Abyssal Dragon", hero: "Capheny", kda: "2 / 3 / 3", mvpRating: "6.8", note: "โดนโฟกัสในไฟต์ใหญ่เนื่องจากขาดสกิลหนี", isMvp: false },
            { name: "YE.Momo", role: "Support / Roamer", hero: "Helen", kda: "0 / 5 / 7", mvpRating: "7.5", note: "ซัพพอร์ตเติมเลือดเต็มที่ แต่ต้านทานดาเมจระเบิดไม่ไหว", isMvp: false },
            { name: "YE.Fai", role: "Sub / Sixth Player", hero: "Sub Roamer", kda: "Standby", mvpRating: "Sub", note: "เตรียมพร้อมลงสลับไลน์อัพเพื่อปรับแทกติกแผนเกม 3", isSub: true }
        ]
    },
    3: {
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        players: [
            { name: "YE.Neko", role: "Dark Slayer Lane", hero: "Florentino", kda: "7 / 1 / 5", mvpRating: "9.4", note: "รำเก็บ 3 สวยงามตอนไฟต์หน้า Dark Slayer 10 นาที", isMvp: false },
            { name: "YE.Linina", role: "Mid Lane", hero: "Iggy", kda: "5 / 1 / 10", mvpRating: "9.1", note: "กดอัลติเมตเคลียร์ไฟต์ตัดเลือดฝั่งตรงข้ามเด็ดขาด", isMvp: false },
            { name: "YE.Kira", role: "Jungle", hero: "Keera", kda: "9 / 0 / 4", mvpRating: "9.9", note: "MVP แมตช์ตัดสิน ลอบสังหารแนวหลังฝั่งตรงข้ามคนเดียว 4 ครั้ง", isMvp: true },
            { name: "YE.Bella", role: "Abyssal Dragon", hero: "Elsu", kda: "3 / 1 / 7", mvpRating: "8.6", note: "วางสไนป์เปิดวิชั่น คุมเลนได้อย่างมีประสิทธิภาพ", isMvp: false },
            { name: "YE.Momo", role: "Support / Roamer", hero: "Zip", kda: "1 / 2 / 12", mvpRating: "9.0", note: "อมเพื่อนช่วยชีวิตในจังหวะคีย์ไฟต์ได้ถูกเวลาเสมอ", isMvp: false },
            { name: "YE.Fai", role: "Sub / Sixth Player", hero: "Analyst", kda: "Analyst", mvpRating: "Coach", note: "เก็บบันทึกข้อมูลการเดินป่าศัตรูทำลงไฟล์ Tactical Note", isSub: true }
        ]
    }
};

// Global Chart Instances
let perfChartInstance = null;
let sideChartInstance = null;

// --- CHARTS INITIALIZATION ---
function initCharts() {
    // 1. Performance Chart
    const ctxPerf = document.getElementById('performanceChart');
    if (ctxPerf) {
        if (perfChartInstance) perfChartInstance.destroy();
        perfChartInstance = new Chart(ctxPerf, {
            type: 'line',
            data: {
                labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
                datasets: [
                    {
                        label: 'Kills',
                        data: [18, 22, 11, 25, 19, 21, 15, 24, 20, 23],
                        borderColor: '#EC4899',
                        backgroundColor: 'rgba(236, 72, 153, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Deaths',
                        data: [6, 10, 15, 8, 9, 7, 12, 6, 8, 5],
                        borderColor: '#F59E0B',
                        backgroundColor: 'transparent',
                        borderDash: [5, 5],
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#9CA3AF', font: { family: 'Kanit' } } }
                },
                scales: {
                    x: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(255,255,255,0.05)' } }
                }
            }
        });
    }

    // 2. Side Winrate Doughnut Chart
    const ctxSide = document.getElementById('sideChart');
    if (ctxSide) {
        if (sideChartInstance) sideChartInstance.destroy();
        sideChartInstance = new Chart(ctxSide, {
            type: 'doughnut',
            data: {
                labels: ['Blue Side Win', 'Red Side Win'],
                datasets: [{
                    data: [81, 75],
                    backgroundColor: ['#3B82F6', '#EF4444'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#9CA3AF', font: { family: 'Kanit' } } }
                },
                cutout: '70%'
            }
        });
    }
}

// --- SCRIM REPLAY MODAL LOGIC ---
// Roster template used when creating new scrims (taken from the sample data)
const PLAYER_TEMPLATE = Object.values(scrimGameRecaps)[0].players.map(p => ({ name: p.name, role: p.role, isSub: !!p.isSub }));

let scrimGameMeta = {
    1: { result: 'WIN', duration: '13:40' },
    2: { result: 'LOSS', duration: '16:15' },
    3: { result: 'WIN', duration: '14:10' }
};

// ---- Admin state + storage (demo: data is kept in this browser only) ----
const STORE_KEY = 'ye_rov_recaps_v1';
let isAdmin = false;
let editingPlayer = null;
let storeLoaded = false;

function esc(v) {
    return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function defaultSessions() {
    return [{ id: 1, date: '2026-10-31', time: '21:00', opponent: 'Bacon Time (Academy)', recaps: scrimGameRecaps, meta: scrimGameMeta }];
}
let sessions = null;
let currentSessionIdx = 0;
function useSession(i) {
    currentSessionIdx = i;
    const s = sessions[i];
    scrimGameRecaps = s ? s.recaps : {};
    scrimGameMeta = s ? s.meta : {};
    editingPlayer = null;
}
function loadStore() {
    if (storeLoaded) return;
    storeLoaded = true;
    sessions = defaultSessions();
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) {
            const d = JSON.parse(raw);
            if (Array.isArray(d.sessions)) sessions = d.sessions;
            else if (d.recaps && d.meta) { sessions[0].recaps = d.recaps; sessions[0].meta = d.meta; }
        }
    } catch (e) {}
    useSession(0);
}
function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ sessions: sessions })); } catch (e) {}
}
// Accepts youtube.com/watch?v=, youtu.be/, /embed/, /shorts/ -> embed URL. '' = clear, null = invalid
function toEmbedUrl(url) {
    url = (url || '').trim();
    if (!url) return '';
    const m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return m ? 'https://www.youtube-nocookie.com/embed/' + m[1] : null;
}
function hasRealVideo(data) {
    return !!data.videoUrl && data.videoUrl.indexOf('dQw4w9WgXcQ') === -1;
}
function videoToLink(data) {
    const m = hasRealVideo(data) ? data.videoUrl.match(/embed\/([A-Za-z0-9_-]{11})/) : null;
    return m ? 'https://youtu.be/' + m[1] : '';
}

function fmtDate(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? m[3] + '/' + m[2] + '/' + m[1] : (iso || '-');
}
function sessionScore(s) {
    let w = 0, l = 0;
    Object.keys(s.meta).forEach(k => { if (s.meta[k].result === 'WIN') w++; else if (s.meta[k].result === 'LOSS') l++; });
    return { w: w, l: l };
}
// Modal title for the session being viewed, then the Scrim boxes on the Dashboard
function renderHighlight() {
    if (!sessions) loadStore();
    const cur = sessions[currentSessionIdx] || sessions[0];
    if (!cur) { renderBoxes(); return; }
    const sc = sessionScore(cur);
    const dt = document.getElementById('md-datetime');
    if (dt) dt.textContent = cur.time + ' น. | ' + fmtDate(cur.date);
    const title = document.getElementById('md-title');
    if (title) title.innerHTML = 'YalaEsports (Women) <span class="text-pink-500">' + sc.w + ' - ' + sc.l + '</span> ' + esc(cur.opponent);
    renderBoxes();
}

let armedDelete = null;
function boxHtml(s, i) {
    const n = Object.keys(s.recaps).length;
    const sc = sessionScore(s);
    const label = i === 0 ? 'Highlight Scrim' : 'Scrim ' + (i + 1);
    const scorePill = (sc.w + sc.l) > 0
        ? `<span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">ผล ${sc.w} - ${sc.l}</span>`
        : `<span class="text-xs font-semibold text-gray-400 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-full">รอบันทึกผล</span>`;
    const del = isAdmin
        ? `<button onclick="deleteScrim(${i})" class="text-xs font-bold px-3 py-2 rounded-xl border ${armedDelete === i ? 'bg-rose-600 border-rose-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-rose-400'}"><i class="fa-solid fa-trash mr-1"></i> ${armedDelete === i ? 'กดอีกครั้งเพื่อยืนยันลบ' : 'ลบการซ้อม'}</button>` : '';
    return `
    <div class="glass-card rounded-2xl border-2 border-pink-500/40 p-6 relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-950/20 to-gray-900 shadow-xl">
        <div class="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div class="space-y-2">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                        <i class="fa-solid fa-circle text-[8px] animate-ping"></i> ${label}
                    </span>
                    <span class="text-xs font-semibold text-gray-400 bg-gray-800/80 border border-gray-700 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <i class="fa-solid fa-clock text-pink-400"></i> ${esc(s.time)} น. | ${fmtDate(s.date)}
                    </span>
                    <span class="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                        <i class="fa-solid fa-gamepad mr-1"></i> Scrim ${n} Games
                    </span>
                    ${scorePill}
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-white tracking-wide">YalaEsports (Women) vs ${esc(s.opponent)}</h3>
                <p class="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">ดูคลิปรีเพลย์ย้อนหลังและบทวิเคราะห์ฟอร์ม 6 ผู้เล่นของทุกเกมในการซ้อมครั้งนี้</p>
            </div>
            <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <button onclick="openReplayModal(${i})" class="w-full md:w-auto bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-pink-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5">
                    <i class="fa-solid fa-circle-play text-lg"></i> ดูคลิปรีเพลย์ & Recap 6 นักกีฬา
                </button>
                ${del}
            </div>
        </div>
    </div>`;
}
function renderBoxes() {
    const c = document.getElementById('scrim-boxes');
    if (!c || !sessions) return;
    if (!sessions.length) {
        c.innerHTML = '<div class="glass-card rounded-2xl border border-dashed border-gray-700 p-8 text-center text-sm text-gray-400"><i class="fa-solid fa-inbox text-2xl mb-2 block text-gray-500"></i>ยังไม่มีการซ้อม' + (isAdmin ? ' — กด "เพิ่มการซ้อมใหม่" เพื่อเริ่มบันทึก' : '') + '</div>';
        return;
    }
    c.innerHTML = sessions.map((s, i) => boxHtml(s, i)).join('');
}
function deleteScrim(i) {
    if (!isAdmin) return;
    if (armedDelete !== i) {
        armedDelete = i; renderBoxes();
        setTimeout(() => { if (armedDelete === i) { armedDelete = null; renderBoxes(); } }, 3000);
        return;
    }
    armedDelete = null;
    sessions.splice(i, 1);
    useSession(0);
    saveStore(); renderBoxes();
}

// ---- Login (demo: accounts are checked in the browser only) ----
const ACCOUNTS = [
    { user: 'admin', pass: 'admin1234', role: 'admin', name: 'Admin' },
    { user: 'neko', pass: 'neko1234', role: 'player', name: 'YE.Neko' },
    { user: 'linina', pass: 'linina1234', role: 'player', name: 'YE.Linina' },
    { user: 'kira', pass: 'kira1234', role: 'player', name: 'YE.Kira' },
    { user: 'bella', pass: 'bella1234', role: 'player', name: 'YE.Bella' },
    { user: 'momo', pass: 'momo1234', role: 'player', name: 'YE.Momo' },
    { user: 'fai', pass: 'fai1234', role: 'player', name: 'YE.Fai' }
];
const SESSION_KEY = 'ye_rov_session_v1';
let currentUser = null;

function applyLogin(acc) {
    currentUser = acc;
    isAdmin = acc.role === 'admin';
    document.body.classList.remove('locked');
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('user-name').textContent = acc.name;
    const role = document.getElementById('user-role');
    role.textContent = isAdmin ? 'Admin' : 'Player';
    role.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full ' + (isAdmin ? 'bg-pink-600 text-white' : 'bg-gray-700 text-gray-200');
    updateAdminUI();
    renderHighlight();
    initCharts();
}
function doLogin(event) {
    event.preventDefault();
    const u = document.getElementById('login-user').value.trim().toLowerCase();
    const p = document.getElementById('login-pass').value;
    const acc = ACCOUNTS.find(a => a.user === u && a.pass === p);
    const msg = document.getElementById('login-msg');
    if (!acc) { msg.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'; return; }
    msg.textContent = '';
    try { sessionStorage.setItem(SESSION_KEY, acc.user); } catch (e) {}
    document.getElementById('loginForm').reset();
    applyLogin(acc);
}
function logout() {
    try { sessionStorage.removeItem(SESSION_KEY); } catch (e) {}
    currentUser = null; isAdmin = false; editingPlayer = null;
    closeReplayModal(); closeNewScrim();
    updateAdminUI();
    document.body.classList.add('locked');
    document.getElementById('loginScreen').style.display = 'flex';
}
function restoreSession() {
    let u = null;
    try { u = sessionStorage.getItem(SESSION_KEY); } catch (e) {}
    const acc = ACCOUNTS.find(a => a.user === u);
    if (acc) applyLogin(acc);
}

function updateAdminUI() {
    const add = document.getElementById('add-scrim-btn');
    if (add) add.classList.toggle('hidden', !isAdmin);
    renderBoxes();
}

// ---- Add a new scrim session (Admin) ----
function todayLocal() {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}
function openNewScrim() {
    if (!isAdmin) return;
    loadStore();
    document.getElementById('ns-date').value = todayLocal();
    document.getElementById('ns-msg').textContent = '';
    document.getElementById('newScrimModal').classList.remove('hidden');
}
function closeNewScrim() { document.getElementById('newScrimModal').classList.add('hidden'); }
function createScrim(event) {
    event.preventDefault();
    if (!isAdmin) return;
    const date = document.getElementById('ns-date').value;
    const time = document.getElementById('ns-time').value || '00:00';
    const opponent = document.getElementById('ns-opponent').value.trim();
    const n = parseInt(document.getElementById('ns-games').value, 10);
    const msg = document.getElementById('ns-msg');
    if (!date || !opponent || !(n >= 1 && n <= 7)) { msg.textContent = 'กรุณากรอกวันที่ คู่แข่ง และจำนวนเกม (1-7)'; return; }
    const template = PLAYER_TEMPLATE;
    const recaps = {}, meta = {};
    for (let g = 1; g <= n; g++) {
        recaps[g] = { videoUrl: '', players: template.map(p => ({ name: p.name, role: p.role, hero: '-', kda: '-', mvpRating: '-', note: '', isMvp: false, isSub: !!p.isSub })) };
        meta[g] = { result: '', duration: '-' };
    }
    sessions.push({ id: Date.now(), date: date, time: time, opponent: opponent, recaps: recaps, meta: meta });
    saveStore();
    document.getElementById('newScrimForm').reset();
    closeNewScrim();
    renderBoxes();
    const boxes = document.getElementById('scrim-boxes');
    if (boxes && boxes.lastElementChild) boxes.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function saveGameAdmin(g) {
    const link = document.getElementById('replay-input-' + g).value;
    const msg = document.getElementById('replay-msg-' + g);
    const embed = toEmbedUrl(link);
    if (embed === null) { msg.textContent = 'ลิงก์ไม่ถูกต้อง กรุณาวางลิงก์ YouTube'; return; }
    scrimGameRecaps[g].videoUrl = embed;
    scrimGameMeta[g] = {
        result: document.getElementById('res-' + g).value,
        duration: document.getElementById('dur-' + g).value.trim() || '-'
    };
    saveStore(); renderAllGames();
}
function editPlayer(g, i) { editingPlayer = { g: g, i: i }; renderAllGames(); }
function cancelEdit() { editingPlayer = null; renderAllGames(); }
function savePlayer(g, i) {
    const players = scrimGameRecaps[g].players;
    const p = players[i];
    p.hero = document.getElementById('ep-hero').value.trim() || '-';
    p.kda = document.getElementById('ep-kda').value.trim() || '-';
    p.mvpRating = document.getElementById('ep-rating').value.trim() || '-';
    p.note = document.getElementById('ep-note').value.trim();
    if (document.getElementById('ep-mvp').checked) {
        players.forEach(x => { x.isMvp = false; });
        p.isMvp = true;
    } else { p.isMvp = false; }
    editingPlayer = null;
    saveStore(); renderAllGames();
}
function addGame() {
    const keys = Object.keys(scrimGameRecaps).map(Number);
    const n = (keys.length ? Math.max.apply(null, keys) : 0) + 1;
    const template = keys.length ? scrimGameRecaps[keys[0]].players : [];
    scrimGameRecaps[n] = {
        videoUrl: '',
        players: template.map(p => ({ name: p.name, role: p.role, hero: '-', kda: '-', mvpRating: '-', note: '', isMvp: false, isSub: !!p.isSub }))
    };
    scrimGameMeta[n] = { result: document.getElementById('new-game-result').value, duration: document.getElementById('new-game-duration').value.trim() || '-' };
    saveStore(); renderAllGames();
}

function openReplayModal(i) {
    loadStore();
    useSession(typeof i === 'number' ? i : 0);
    document.getElementById('replayModal').classList.remove('hidden');
    updateAdminUI();
    renderAllGames();
}

function closeReplayModal() {
    document.getElementById('replayModal').classList.add('hidden');
}

const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-pink-500';

function playerCardHtml(g, i, p) {
    if (isAdmin && editingPlayer && editingPlayer.g == g && editingPlayer.i === i) {
        return `
            <div class="p-4 rounded-xl border border-pink-500/50 bg-pink-500/5 space-y-2">
                <div class="font-extrabold text-white text-sm">${esc(p.name)} <span class="text-xs text-pink-400 font-semibold">${esc(p.role)}</span></div>
                <input id="ep-hero" class="${inputCls}" placeholder="ฮีโร่ที่ใช้" value="${esc(p.hero)}">
                <div class="grid grid-cols-2 gap-2">
                    <input id="ep-kda" class="${inputCls}" placeholder="KDA เช่น 5 / 1 / 6" value="${esc(p.kda)}">
                    <input id="ep-rating" class="${inputCls}" placeholder="Rating" value="${esc(p.mvpRating)}">
                </div>
                <textarea id="ep-note" rows="3" class="${inputCls}" placeholder="Recap / โน้ตของโค้ช">${esc(p.note)}</textarea>
                <label class="flex items-center gap-2 text-xs text-amber-400 font-semibold"><input id="ep-mvp" type="checkbox" ${p.isMvp ? 'checked' : ''}> MVP ของเกมนี้</label>
                <div class="flex gap-2">
                    <button onclick="savePlayer(${g}, ${i})" class="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold py-2 rounded-lg">บันทึก</button>
                    <button onclick="cancelEdit()" class="px-3 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-semibold py-2 rounded-lg">ยกเลิก</button>
                </div>
            </div>`;
    }
    const borderClass = p.isMvp ? 'border-amber-500 bg-amber-500/5' : p.isSub ? 'border-gray-700 bg-gray-900/40' : 'border-gray-800 bg-gray-900/80';
    return `
        <div class="p-4 rounded-xl border ${borderClass} relative flex flex-col justify-between gap-2">
            ${p.isMvp ? '<span class="absolute top-2 right-2 bg-amber-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full"><i class="fa-solid fa-crown mr-1"></i>MVP</span>' : ''}
            <div>
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h5 class="font-extrabold text-white text-base">${esc(p.name)}</h5>
                        <span class="text-xs text-pink-400 font-semibold block">${esc(p.role)}</span>
                    </div>
                    <span class="text-xs font-mono bg-gray-800 text-gray-300 px-2 py-1 rounded-lg border border-gray-700 ${p.isMvp ? 'mr-12' : ''}">${esc(p.hero)}</span>
                </div>
                <div class="flex items-center gap-3 my-2 text-xs">
                    <span class="font-mono text-emerald-400 font-bold">KDA: ${esc(p.kda)}</span>
                    <span class="text-amber-400 font-bold">Rating: ${esc(p.mvpRating)}</span>
                </div>
                <p class="text-xs leading-relaxed mt-2 bg-gray-950/50 p-2.5 rounded-lg border border-gray-800/50 ${p.note ? 'text-gray-300' : 'text-gray-500 italic'}">${p.note ? '"' + esc(p.note) + '"' : 'ยังไม่มี Recap'}</p>
            </div>
            ${isAdmin ? `<button onclick="editPlayer(${g}, ${scrimGameRecaps[g].players.indexOf(p)})" class="text-xs font-semibold text-pink-400 hover:text-pink-300 border border-pink-500/30 rounded-lg py-1.5"><i class="fa-solid fa-pen mr-1"></i> เพิ่ม/แก้ไข Recap</button>` : ''}
        </div>`;
}

// Render every game (Game 1, 2, 3 ...) one after another in the same view
function renderAllGames() {
    const container = document.getElementById('all-games-container');
    if (!container) return;
    const scroller = document.querySelector('#replayModal > div');
    const prevScroll = scroller ? scroller.scrollTop : 0;
    let html = '';

    Object.keys(scrimGameRecaps).forEach(gameNum => {
        const data = scrimGameRecaps[gameNum];
        const meta = scrimGameMeta[gameNum] || { result: '', duration: '-' };
        const isWin = meta.result === 'WIN';
        const badge = isWin ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            : meta.result === 'LOSS' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            : 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        const playerCards = data.players.map((p, i) => playerCardHtml(gameNum, i, p)).join('');
        const video = hasRealVideo(data)
            ? `<iframe class="w-full h-full" src="${esc(data.videoUrl)}" title="ROV Replay Game ${gameNum}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            : `<div class="w-full h-full flex flex-col items-center justify-center text-gray-500 text-sm gap-2"><i class="fa-solid fa-film text-3xl"></i>ยังไม่มีคลิปรีเพลย์ของเกมนี้</div>`;
        const adminBox = isAdmin ? `
            <div class="rounded-xl border border-pink-500/30 bg-pink-500/5 p-4 space-y-2">
                <div class="text-xs font-bold text-pink-400"><i class="fa-solid fa-user-shield mr-1"></i> Admin: จัดการเกม ${gameNum}</div>
                <div class="grid grid-cols-1 sm:grid-cols-[1fr_100px_100px_auto] gap-2">
                    <input id="replay-input-${gameNum}" class="${inputCls}" placeholder="วางลิงก์ YouTube ของ Replay" value="${esc(videoToLink(data))}">
                    <select id="res-${gameNum}" class="${inputCls}"><option value="" ${!meta.result ? 'selected' : ''}>รอผล</option><option value="WIN" ${meta.result === 'WIN' ? 'selected' : ''}>WIN</option><option value="LOSS" ${meta.result === 'LOSS' ? 'selected' : ''}>LOSS</option></select>
                    <input id="dur-${gameNum}" class="${inputCls}" placeholder="13:40" value="${esc(meta.duration)}">
                    <button onclick="saveGameAdmin(${gameNum})" class="bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold px-4 py-2 rounded-lg">บันทึก Replay</button>
                </div>
                <p id="replay-msg-${gameNum}" class="text-xs text-rose-400"></p>
            </div>` : '';

        html += `
            <section class="space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800/60">
                    <h4 class="text-lg font-extrabold text-white flex items-center gap-2">
                        <span class="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">GAME ${gameNum}</span>
                        สรุปเกมที่ ${gameNum}
                    </h4>
                    <div class="flex items-center gap-2 text-xs">
                        <span class="px-3 py-1 rounded-full font-bold border ${badge}">${esc(meta.result || 'รอผล')}</span>
                        <span class="text-gray-400 font-mono">${esc(meta.duration)}</span>
                    </div>
                </div>
                ${adminBox}
                <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-gray-800 shadow-2xl">${video}</div>
                <div class="flex items-center justify-between">
                    <h5 class="text-sm font-bold text-white flex items-center gap-2"><i class="fa-solid fa-users-viewfinder text-pink-500"></i> สรุปฟอร์มการเล่น 6 นักกีฬา (Player Recap)</h5>
                    <span class="text-xs text-gray-400">ประเมินโดย Coach &amp; Analyst</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${playerCards}</div>
            </section>`;
    });

    if (isAdmin) {
        html += `
            <div class="rounded-xl border border-dashed border-pink-500/40 p-4 flex flex-wrap items-center gap-2">
                <span class="text-xs font-bold text-pink-400"><i class="fa-solid fa-plus mr-1"></i> เพิ่มเกมใหม่</span>
                <select id="new-game-result" class="${inputCls} !w-24"><option value="">รอผล</option><option value="WIN">WIN</option><option value="LOSS">LOSS</option></select>
                <input id="new-game-duration" class="${inputCls} !w-28" placeholder="ระยะเวลา 14:30">
                <button onclick="addGame()" class="bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold px-4 py-2 rounded-lg">เพิ่มเกม</button>
            </div>`;
    }
    container.innerHTML = html;
    renderHighlight();
    if (scroller) scroller.scrollTop = prevScroll;
}

// --- INITIALIZATION ON PAGE LOAD ---
window.onload = function() {
    loadStore();
    renderHighlight();
    restoreSession();
};
    
