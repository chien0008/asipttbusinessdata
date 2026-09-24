/* ==============================================
   1. 數據庫：第一與第二模組 (110-115)
   ============================================== */

const sponsoredData = [
    { year: "110年度", amount: 3200, cases: 42, monthlyCases: [3, 2, 4, 3, 5, 4, 3, 4, 3, 4, 4, 3], monthlyAmount: [220, 180, 310, 240, 380, 290, 210, 320, 250, 300, 310, 190] },
    { year: "111年度", amount: 3850, cases: 50, monthlyCases: [4, 3, 5, 4, 5, 4, 4, 5, 4, 4, 5, 3], monthlyAmount: [280, 210, 390, 310, 410, 320, 290, 380, 300, 330, 400, 230] },
    { year: "112年度", amount: 4500, cases: 58, monthlyCases: [4, 4, 6, 5, 6, 5, 4, 6, 5, 5, 5, 3], monthlyAmount: [310, 290, 480, 390, 490, 410, 320, 450, 380, 390, 370, 220] },
    { year: "113年度", amount: 5200, cases: 65, monthlyCases: [5, 4, 7, 6, 7, 6, 5, 6, 5, 6, 5, 3], monthlyAmount: [380, 310, 560, 480, 590, 490, 390, 510, 420, 460, 410, 200] },
    { year: "114年度", amount: 5800, cases: 72, monthlyCases: [6, 5, 7, 6, 8, 6, 6, 7, 6, 7, 5, 3], monthlyAmount: [420, 360, 610, 520, 650, 540, 450, 580, 480, 510, 430, 250] },
    { year: "115年度", amount: 6300, cases: 78, monthlyCases: [6, 6, 8, 7, 8, 7, 7, 8, 7, 6, 5, 3], monthlyAmount: [460, 410, 680, 590, 720, 610, 510, 640, 530, 480, 420, 250] }
];

const revenueData = [
    { year: "110年度", techTransfer: 1200, industryCoop: 2800 },
    { year: "111年度", techTransfer: 1450, industryCoop: 3100 },
    { year: "112年度", techTransfer: 1680, industryCoop: 3500 },
    { year: "113年度", techTransfer: 1950, industryCoop: 4100 },
    { year: "114年度", techTransfer: 2200, industryCoop: 4600 },
    { year: "115年度", techTransfer: 2500, industryCoop: 5100 }
];

/* ==============================================
   2. 第三模組：同期 YoY 資料庫 (含 115.09.24 與 115.09.19)
   ============================================== */

const yoyHistoricalDatabase = {
    // 今日預設：115.09.24 vs 114.09.24
    "2026-09-24": {
        currDateLabel: "115 年 09 月 24 日",
        prevDateLabel: "114 年 09 月 24 日",
        cases: { techLicense: 48, materialTransfer: 52, sponsoredProject: 68 },
        casesPrev: { techLicense: 40, materialTransfer: 45, sponsoredProject: 60 },
        amounts: { techRevenueTotal: 2150, royalty: 1350, contractValueTotal: 3400, techRevenueCashStock: 2250, sponsoredRealized: 4800 },
        amountsPrev: { techRevenueTotal: 1800, royalty: 1100, contractValueTotal: 2900, techRevenueCashStock: 1900, sponsoredRealized: 4200 }
    },
    // 範例測試：115.09.19 vs 114.09.18
    "2026-09-19": {
        currDateLabel: "115 年 09 月 19 日",
        prevDateLabel: "114 年 09 月 18 日",
        cases: { techLicense: 45, materialTransfer: 50, sponsoredProject: 65 },
        casesPrev: { techLicense: 38, materialTransfer: 43, sponsoredProject: 58 },
        amounts: { techRevenueTotal: 2080, royalty: 1300, contractValueTotal: 3250, techRevenueCashStock: 2150, sponsoredRealized: 4650 },
        amountsPrev: { techRevenueTotal: 1720, royalty: 1050, contractValueTotal: 2800, techRevenueCashStock: 1820, sponsoredRealized: 4050 }
    }
};

let yoyCasesChartInstance = null;
let yoyAmountChartInstance = null;
let sponsoredYearlyChartInstance = null;
let sponsoredMonthlyChartInstance = null;
let revenueYearlyChartInstance = null;

/* ==============================================
   3. 初始化與事件監聽
   ============================================== */
window.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('yoy-date-input');
    dateInput.value = "2026-09-24";

    handleYoyDateChange("2026-09-24");

    renderSponsoredYearlyChart();
    renderRevenueYearlyChart();
});

function setQuickDate(type) {
    const dateInput = document.getElementById('yoy-date-input');
    if (type === 'today') {
        dateInput.value = "2026-09-24";
        handleYoyDateChange("2026-09-24");
    } else if (type === '115-09-19') {
        dateInput.value = "2026-09-19";
        handleYoyDateChange("2026-09-19");
    }
}

// 處理日期選擇器觸發
function handleYoyDateChange(selectedDateStr) {
    let dataObj = yoyHistoricalDatabase[selectedDateStr];

    if (!dataObj) {
        const dateObj = new Date(selectedDateStr);
        const currYearRoc = dateObj.getFullYear() - 1911;
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');

        const prevYearRoc = currYearRoc - 1;
        let prevDayStr = day;
        if(selectedDateStr === "2026-09-19") prevDayStr = "18";

        dataObj = {
            currDateLabel: `${currYearRoc} 年 ${month} 月 ${day} 日`,
            prevDateLabel: `${prevYearRoc} 年 ${month} 月 ${prevDayStr} 日`,
            cases: { techLicense: 46, materialTransfer: 51, sponsoredProject: 66 },
            casesPrev: { techLicense: 39, materialTransfer: 44, sponsoredProject: 59 },
            amounts: { techRevenueTotal: 2100, royalty: 1320, contractValueTotal: 3300, techRevenueCashStock: 2200, sponsoredRealized: 4700 },
            amountsPrev: { techRevenueTotal: 1750, royalty: 1080, contractValueTotal: 2850, techRevenueCashStock: 1860, sponsoredRealized: 4100 }
        };
    }

    document.getElementById('label-curr-date').textContent = dataObj.currDateLabel;
    document.getElementById('label-prev-date').textContent = dataObj.prevDateLabel;

    renderYoyCasesGrid(dataObj.cases, dataObj.casesPrev);
    renderYoyAmountsGrid(dataObj.amounts, dataObj.amountsPrev);
    renderYoyCharts(dataObj);
}

/* ==============================================
   4. 渲染同期件數與金額卡片 (一眼掌控差額與%數)
   ============================================== */

function renderYoyCasesGrid(curr, prev) {
    const grid = document.getElementById('yoy-cases-grid');
    grid.innerHTML = '';

    const items = [
        { key: 'techLicense', title: '技術授權件數' },
        { key: 'materialTransfer', title: '材料移轉件數' },
        { key: 'sponsoredProject', title: '資助研究計畫件數' }
    ];

    let totalCurr = 0;
    let totalPrev = 0;

    items.forEach(item => {
        const cVal = curr[item.key] || 0;
        const pVal = prev[item.key] || 0;
        totalCurr += cVal;
        totalPrev += pVal;

        grid.appendChild(createYoyCardHtml(item.title, cVal, pVal, '件'));
    });

    // 總計卡片
    grid.appendChild(createYoyCardHtml('件數總計 (三大業務)', totalCurr, totalPrev, '件', true));
}

function renderYoyAmountsGrid(curr, prev) {
    const grid = document.getElementById('yoy-amount-grid');
    grid.innerHTML = '';

    const items = [
        { key: 'techRevenueTotal', title: '科技移轉總收入' },
        { key: 'royalty', title: '權利金' },
        { key: 'contractValueTotal', title: '授權合約總價值<br><small>(現金＋股票)</small>' },
        { key: 'techRevenueCashStock', title: '科技移轉總收入<br><small>(現金＋股票)</small>' },
        { key: 'sponsoredRealized', title: '資助計劃實收經費' }
    ];

    items.forEach(item => {
        const cVal = curr[item.key] || 0;
        const pVal = prev[item.key] || 0;
        grid.appendChild(createYoyCardHtml(item.title, cVal, pVal, '萬元'));
    });
}

// ✨ 四項關鍵指標一目了然的卡片產生器
function createYoyCardHtml(title, currVal, prevVal, unit, isTotal = false) {
    const diff = currVal - prevVal;
    const isUp = diff >= 0;
    const percent = prevVal > 0 ? ((Math.abs(diff) / prevVal) * 100).toFixed(1) : "0.0";

    const card = document.createElement('div');
    card.className = `yoy-card-item ${isTotal ? 'total-item' : ''}`;

    let badgeClass = 'badge-flat';
    let iconTag = '<i class="fa-solid fa-minus"></i>';
    let signStr = '';

    if (diff > 0) {
        badgeClass = 'badge-up';
        iconTag = '<i class="fa-solid fa-arrow-trend-up"></i>';
        signStr = '+';
    } else if (diff < 0) {
        badgeClass = 'badge-down';
        iconTag = '<i class="fa-solid fa-arrow-trend-down"></i>';
        signStr = '-';
    }

    const diffAbs = Math.abs(diff).toLocaleString();

    card.innerHTML = `
        <div class="item-title">${title}</div>
        <div class="item-curr-val">${currVal.toLocaleString()} <small>${unit}</small></div>
        
        <div class="item-diff-badge ${badgeClass}">
            <span>${iconTag} ${signStr}${diffAbs} ${unit}</span>
            <span>(${signStr}${percent}%)</span>
        </div>

        <div class="item-prev-val">去年同期: ${prevVal.toLocaleString()} ${unit}</div>
    `;
    return card;
}

/* ==============================================
   5. 圖表繪製與其它邏輯
   ============================================== */
function renderYoyCharts(dataObj) {
    const ctxCases = document.getElementById('yoyCasesChart').getContext('2d');
    if (yoyCasesChartInstance) yoyCasesChartInstance.destroy();

    yoyCasesChartInstance = new Chart(ctxCases, {
        type: 'bar',
        data: {
            labels: ['技術授權', '材料移轉', '資助計畫'],
            datasets: [
                { label: '本期件數', data: [dataObj.cases.techLicense, dataObj.cases.materialTransfer, dataObj.cases.sponsoredProject], backgroundColor: '#0d6e63', borderRadius: 4 },
                { label: '去年同期件數', data: [dataObj.casesPrev.techLicense, dataObj.casesPrev.materialTransfer, dataObj.casesPrev.sponsoredProject], backgroundColor: '#cbd5e1', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true } }
        }
    });

    const ctxAmount = document.getElementById('yoyAmountChart').getContext('2d');
    if (yoyAmountChartInstance) yoyAmountChartInstance.destroy();

    yoyAmountChartInstance = new Chart(ctxAmount, {
        type: 'bar',
        data: {
            labels: ['科移總收入', '權利金', '合約總價值', '科移(現金+股)', '資助實收'],
            datasets: [
                { label: '本期金額 (萬)', data: Object.values(dataObj.amounts), backgroundColor: '#0284c7', borderRadius: 4 },
                { label: '去年同期金額 (萬)', data: Object.values(dataObj.amountsPrev), backgroundColor: '#94a3b8', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

function openMonthlyDrawer(yearIndex) {
    const drawer = document.getElementById('monthly-drawer');
    drawer.classList.add('open');
    updateSponsoredMonthlyChart(yearIndex);
    drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeMonthlyDrawer() {
    document.getElementById('monthly-drawer').classList.remove('open');
}

function renderSponsoredYearlyChart() {
    const ctx = document.getElementById('sponsoredYearlyChart').getContext('2d');
    sponsoredYearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sponsoredData.map(item => item.year),
            datasets: [
                { type: 'bar', label: '簽約金額 (萬元)', data: sponsoredData.map(item => item.amount), backgroundColor: 'rgba(13, 110, 99, 0.85)', borderRadius: 8, yAxisID: 'yAmount' },
                { type: 'line', label: '簽約件數 (件)', data: sponsoredData.map(item => item.cases), borderColor: '#0284c7', borderWidth: 3, pointRadius: 6, yAxisID: 'yCases' }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                if (elements.length > 0) openMonthlyDrawer(elements[0].index);
            },
            scales: {
                yAmount: { type: 'linear', position: 'left', beginAtZero: true },
                yCases: { type: 'linear', position: 'right', beginAtZero: true, grid: { drawOnChartArea: false } }
            }
        }
    });
}

function updateSponsoredMonthlyChart(yearIndex) {
    const yearObj = sponsoredData[yearIndex];
    document.getElementById('drilldown-year-title').textContent = yearObj.year;

    const ctx = document.getElementById('sponsoredMonthlyChart').getContext('2d');
    if (sponsoredMonthlyChartInstance) sponsoredMonthlyChartInstance.destroy();

    sponsoredMonthlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            datasets: [
                { type: 'bar', label: '每月金額 (萬元)', data: yearObj.monthlyAmount, backgroundColor: 'rgba(2, 132, 199, 0.75)', borderRadius: 6, yAxisID: 'yMonthAmount' },
                { type: 'line', label: '每月件數 (件)', data: yearObj.monthlyCases, borderColor: '#0d6e63', borderWidth: 2, pointRadius: 4, yAxisID: 'yMonthCases' }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yMonthAmount: { type: 'linear', position: 'left', beginAtZero: true },
                yMonthCases: { type: 'linear', position: 'right', beginAtZero: true, grid: { drawOnChartArea: false } }
            }
        }
    });
}

function renderRevenueYearlyChart() {
    const ctx = document.getElementById('revenueYearlyChart').getContext('2d');
    revenueYearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: revenueData.map(item => item.year),
            datasets: [
                { type: 'bar', label: '科技移轉收入 (萬元)', data: revenueData.map(item => item.techTransfer), backgroundColor: 'rgba(13, 110, 99, 0.85)', borderRadius: 6 },
                { type: 'bar', label: '產學合作實收經費 (萬元)', data: revenueData.map(item => item.industryCoop), backgroundColor: 'rgba(2, 132, 199, 0.85)', borderRadius: 6 },
                { type: 'line', label: '總金額 (科技移轉＋產學合作)', data: revenueData.map(item => item.techTransfer + item.industryCoop), borderColor: '#d97706', borderWidth: 3, pointRadius: 6, tension: 0.3 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });
}

