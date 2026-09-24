/* ==============================================
   1. 完整資料庫定義 (110 - 115 年度)
   ============================================== */

// 第二分頁：四大達成率可編輯資料庫
let targetConfig = {
    techLicense:   { target: 37, actual: 10, unit: "件" },
    techItem:      { target: 45, actual: 12, unit: "項" },
    ad:            { target: 20, actual: 8,  unit: "件" },
    grantProject:  { target: 60, actual: 25, unit: "件" }
};

// 第一分頁：110-115 資助計畫
const sponsoredData = [
    { year: "110年度", amount: 3200, cases: 42, monthlyCases: [3, 2, 4, 3, 5, 4, 3, 4, 3, 4, 4, 3], monthlyAmount: [220, 180, 310, 240, 380, 290, 210, 320, 250, 300, 310, 190] },
    { year: "111年度", amount: 3850, cases: 50, monthlyCases: [4, 3, 5, 4, 5, 4, 4, 5, 4, 4, 5, 3], monthlyAmount: [280, 210, 390, 310, 410, 320, 290, 380, 300, 330, 400, 230] },
    { year: "112年度", amount: 4500, cases: 58, monthlyCases: [4, 4, 6, 5, 6, 5, 4, 6, 5, 5, 5, 3], monthlyAmount: [310, 290, 480, 390, 490, 410, 320, 450, 380, 390, 370, 220] },
    { year: "113年度", amount: 5200, cases: 65, monthlyCases: [5, 4, 7, 6, 7, 6, 5, 6, 5, 6, 5, 3], monthlyAmount: [380, 310, 560, 480, 590, 490, 390, 510, 420, 460, 410, 200] },
    { year: "114年度", amount: 5800, cases: 72, monthlyCases: [6, 5, 7, 6, 8, 6, 6, 7, 6, 7, 5, 3], monthlyAmount: [420, 360, 610, 520, 650, 540, 450, 580, 480, 510, 430, 250] },
    { year: "115年度", amount: 6300, cases: 78, monthlyCases: [6, 6, 8, 7, 8, 7, 7, 8, 7, 6, 5, 3], monthlyAmount: [460, 410, 680, 590, 720, 610, 510, 640, 530, 480, 420, 250] }
];

// 第一分頁：110-115 科技移轉及產學合作
const revenueData = [
    { year: "110年度", techTransfer: 1200, industryCoop: 2800 },
    { year: "111年度", techTransfer: 1450, industryCoop: 3100 },
    { year: "112年度", techTransfer: 1680, industryCoop: 3500 },
    { year: "113年度", techTransfer: 1950, industryCoop: 4100 },
    { year: "114年度", techTransfer: 2200, industryCoop: 4600 },
    { year: "115年度", techTransfer: 2500, industryCoop: 5100 }
];

// 第二分頁：5. 權利金 (110 - 115)
const royaltyData = [
    { year: "110年度", amount: 480 },
    { year: "111年度", amount: 620 },
    { year: "112年度", amount: 850 },
    { year: "113年度", amount: 1100 },
    { year: "114年度", amount: 1350 },
    { year: "115年度", amount: 1600 }
];

// 第二分頁：6. 110-115 科技移轉件數明細
const techTransferBreakdownData = [
    { year: "110年度", exclusive: 1, nonExclusive: 22, material: 85 },
    { year: "111年度", exclusive: 1, nonExclusive: 26, material: 92 },
    { year: "112年度", exclusive: 2, nonExclusive: 29, material: 101 },
    { year: "113年度", exclusive: 2, nonExclusive: 31, material: 105 },
    { year: "114年度", exclusive: 2, nonExclusive: 34, material: 111 }, // 符合範例需求
    { year: "115年度", exclusive: 3, nonExclusive: 38, material: 118 }
];

// 第二分頁：7. 110-115 授權合約總價值及科技移轉總收入 (現金+股票)
const contractAndIncomeData = [
    { year: "110年度", contractValue: 2400, incomeValue: 1550 },
    { year: "111年度", contractValue: 2800, incomeValue: 1820 },
    { year: "112年度", contractValue: 3100, incomeValue: 2100 },
    { year: "113年度", contractValue: 3600, incomeValue: 2450 },
    { year: "114年度", contractValue: 4100, incomeValue: 2800 },
    { year: "115年度", contractValue: 4600, incomeValue: 3200 }
];

// 第一分頁：2. YoY 比對資料庫
const yoyHistoricalDatabase = {
    "2026-09-24": {
        currDateLabel: "115 年 09 月 24 日",
        prevDateLabel: "114 年 09 月 24 日",
        cases: { techLicense: 48, materialTransfer: 52, sponsoredProject: 68 },
        casesPrev: { techLicense: 40, materialTransfer: 45, sponsoredProject: 60 },
        amounts: { techRevenueTotal: 2150, royalty: 1350, contractValueTotal: 3400, techRevenueCashStock: 2250, sponsoredRealized: 4800 },
        amountsPrev: { techRevenueTotal: 1800, royalty: 1100, contractValueTotal: 2900, techRevenueCashStock: 1900, sponsoredRealized: 4200 }
    },
    "2026-09-19": {
        currDateLabel: "115 年 09 月 19 日",
        prevDateLabel: "114 年 09 月 18 日",
        cases: { techLicense: 45, materialTransfer: 50, sponsoredProject: 65 },
        casesPrev: { techLicense: 38, materialTransfer: 43, sponsoredProject: 58 },
        amounts: { techRevenueTotal: 2080, royalty: 1300, contractValueTotal: 3250, techRevenueCashStock: 2150, sponsoredRealized: 4650 },
        amountsPrev: { techRevenueTotal: 1720, royalty: 1050, contractValueTotal: 2800, techRevenueCashStock: 1820, sponsoredRealized: 4050 }
    }
};

// Chart Instances 暫存
let doughnutInstances = {};
let royaltyChartInstance = null;
let sponsoredYearlyChartInstance = null;
let sponsoredMonthlyChartInstance = null;
let revenueYearlyChartInstance = null;
let yoyCasesChartInstance = null;
let yoyAmountChartInstance = null;
let techTransferBreakdownChartInstance = null;
let contractAndIncomeChartInstance = null;

/* ==============================================
   2. 初始化與主 Tab 切換邏輯
   ============================================== */
window.addEventListener('DOMContentLoaded', () => {
    // 渲染第一分頁圖表
    renderSponsoredYearlyChart();
    renderRevenueYearlyChart();
    document.getElementById('yoy-date-input').value = "2026-09-24";
    handleYoyDateChange("2026-09-24");

    // 預先繪製第二分頁圖表 (隱藏狀態)
    renderAllDoughnuts();
    renderRoyaltyChart();
    renderTechTransferBreakdownChart();
    renderContractAndIncomeChart();
});

function switchMainTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    if (tabId === 'tab-1') {
        document.getElementById('tab-btn-1').classList.add('active');
        document.getElementById('tab-1').classList.add('active');
    } else if (tabId === 'tab-2') {
        document.getElementById('tab-btn-2').classList.add('active');
        document.getElementById('tab-2').classList.add('active');
    }
}

/* ==============================================
   3. 第二分頁圖表繪製邏輯 (達成率 + 件數 + 總價值)
   ============================================== */

function createGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 170, 170);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

function renderSingleDoughnut(canvasId, textContainerId, itemKey, colorStart, colorEnd) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const cfg = targetConfig[itemKey];

    const actual = cfg.actual;
    const target = cfg.target;
    const rate = Math.min(100, ((actual / target) * 100)).toFixed(1);
    const remain = Math.max(0, target - actual);

    const centerEl = document.getElementById(textContainerId);
    centerEl.querySelector('.rate-val').textContent = `${rate}%`;
    centerEl.querySelector('.count-val').textContent = `${actual}/${target} ${cfg.unit}`;

    if (doughnutInstances[canvasId]) doughnutInstances[canvasId].destroy();

    const gradient = createGradient(ctx, colorStart, colorEnd);

    doughnutInstances[canvasId] = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['已達成', '未達成'],
            datasets: [{
                data: [actual, remain],
                backgroundColor: [gradient, '#f1f5f9'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            cutout: '76%',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: { label: (context) => ` ${context.label}: ${context.raw} ${cfg.unit}` }
                }
            }
        }
    });
}

function renderAllDoughnuts() {
    renderSingleDoughnut('techLicenseDoughnut',  'techLicenseCenterText',  'techLicense',  '#0d6e63', '#2dd4bf');
    renderSingleDoughnut('techItemDoughnut',     'techItemCenterText',     'techItem',     '#0284c7', '#38bdf8');
    renderSingleDoughnut('adDoughnut',           'adCenterText',           'ad',           '#7e22ce', '#c084fc');
    renderSingleDoughnut('grantProjectDoughnut', 'grantProjectCenterText', 'grantProject', '#d97706', '#fbbf24');
}

// 5. 權利金
function renderRoyaltyChart() {
    const ctx = document.getElementById('royaltyYearlyChart').getContext('2d');
    royaltyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: royaltyData.map(item => item.year),
            datasets: [{
                label: '權利金 (萬元)',
                data: royaltyData.map(item => item.amount),
                backgroundColor: 'rgba(217, 119, 6, 0.85)',
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, title: { display: true, text: '金額 (萬元)' } } }
        }
    });
}

// 6. 110-115 每年度科技移轉件數 (專屬授權 + 非專屬授權 + 有償材料移轉)
function renderTechTransferBreakdownChart() {
    const ctx = document.getElementById('techTransferBreakdownChart').getContext('2d');
    techTransferBreakdownChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: techTransferBreakdownData.map(item => item.year),
            datasets: [
                { label: '專屬授權', data: techTransferBreakdownData.map(item => item.exclusive), backgroundColor: '#0d6e63', borderRadius: 4 },
                { label: '非專屬授權', data: techTransferBreakdownData.map(item => item.nonExclusive), backgroundColor: '#0284c7', borderRadius: 4 },
                { label: '有償材料移轉', data: techTransferBreakdownData.map(item => item.material), backgroundColor: '#d97706', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true },
                y: { stacked: true, beginAtZero: true, title: { display: true, text: '件數 (件)' } }
            }
        }
    });
}

// 7. 110-115 授權合約總價值及科技移轉總收入 (現金＋股票)
function renderContractAndIncomeChart() {
    const ctx = document.getElementById('contractAndIncomeChart').getContext('2d');
    contractAndIncomeChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: contractAndIncomeData.map(item => item.year),
            datasets: [
                { type: 'bar', label: '授權合約總價值 (現金＋股票)', data: contractAndIncomeData.map(item => item.contractValue), backgroundColor: 'rgba(2, 132, 199, 0.85)', borderRadius: 6 },
                { type: 'bar', label: '科技移轉總收入 (現金＋股票)', data: contractAndIncomeData.map(item => item.incomeValue), backgroundColor: 'rgba(13, 110, 99, 0.85)', borderRadius: 6 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, title: { display: true, text: '金額 (萬元)' } } }
        }
    });
}

/* Modal 表單編輯邏輯 */
function openTargetModal() {
    document.getElementById('input-tech-target').value  = targetConfig.techLicense.target;
    document.getElementById('input-tech-actual').value  = targetConfig.techLicense.actual;

    document.getElementById('input-item-target').value  = targetConfig.techItem.target;
    document.getElementById('input-item-actual').value  = targetConfig.techItem.actual;

    document.getElementById('input-ad-target').value    = targetConfig.ad.target;
    document.getElementById('input-ad-actual').value    = targetConfig.ad.actual;

    document.getElementById('input-grant-target').value = targetConfig.grantProject.target;
    document.getElementById('input-grant-actual').value = targetConfig.grantProject.actual;

    document.getElementById('target-modal-overlay').classList.add('active');
}

function closeTargetModal() {
    document.getElementById('target-modal-overlay').classList.remove('active');
}

function closeTargetModalOnOutside(e) {
    if (e.target.id === 'target-modal-overlay') closeTargetModal();
}

function handleTargetSubmit(e) {
    e.preventDefault();

    targetConfig.techLicense.target  = parseInt(document.getElementById('input-tech-target').value) || 1;
    targetConfig.techLicense.actual  = parseInt(document.getElementById('input-tech-actual').value) || 0;

    targetConfig.techItem.target     = parseInt(document.getElementById('input-item-target').value) || 1;
    targetConfig.techItem.actual     = parseInt(document.getElementById('input-item-actual').value) || 0;

    targetConfig.ad.target           = parseInt(document.getElementById('input-ad-target').value) || 1;
    targetConfig.ad.actual           = parseInt(document.getElementById('input-ad-actual').value) || 0;

    targetConfig.grantProject.target = parseInt(document.getElementById('input-grant-target').value) || 1;
    targetConfig.grantProject.actual = parseInt(document.getElementById('input-grant-actual').value) || 0;

    renderAllDoughnuts();
    closeTargetModal();
}

/* ==============================================
   4. 第一分頁圖表邏輯 (同前)
   ============================================== */
function renderSponsoredYearlyChart() {
    const ctx = document.getElementById('sponsoredYearlyChart').getContext('2d');
    sponsoredYearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sponsoredData.map(item => item.year),
            datasets: [
                { type: 'bar', label: '簽約金額 (萬元)', data: sponsoredData.map(item => item.amount), backgroundColor: 'rgba(13, 110, 99, 0.85)', borderRadius: 6, yAxisID: 'yAmount' },
                { type: 'line', label: '簽約件數 (件)', data: sponsoredData.map(item => item.cases), borderColor: '#0284c7', borderWidth: 2.5, pointRadius: 5, yAxisID: 'yCases' }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                if (elements.length > 0) openMonthlyDrawer(elements[0].index);
            },
            scales: {
                yAmount: { type: 'linear', position: 'left', beginAtZero: true, title: { display: true, text: '金額 (萬元)' } },
                yCases: { type: 'linear', position: 'right', beginAtZero: true, grid: { drawOnChartArea: false }, title: { display: true, text: '件數 (件)' } }
            }
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
                { type: 'bar', label: '每月金額 (萬元)', data: yearObj.monthlyAmount, backgroundColor: 'rgba(2, 132, 199, 0.75)', borderRadius: 5, yAxisID: 'yMonthAmount' },
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
                { type: 'bar', label: '科技移轉收入 (萬元)', data: revenueData.map(item => item.techTransfer), backgroundColor: 'rgba(13, 110, 99, 0.85)', borderRadius: 5 },
                { type: 'bar', label: '產學合作實收經費 (萬元)', data: revenueData.map(item => item.industryCoop), backgroundColor: 'rgba(2, 132, 199, 0.85)', borderRadius: 5 },
                { type: 'line', label: '總金額 (科技移轉＋產學合作)', data: revenueData.map(item => item.techTransfer + item.industryCoop), borderColor: '#d97706', borderWidth: 2.5, pointRadius: 5, tension: 0.3 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, title: { display: true, text: '金額 (萬元)' } } }
        }
    });
}

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

    updateYoyTopBadges(dataObj);
    renderYoyCharts(dataObj);
}

function updateYoyTopBadges(dataObj) {
    const totalCasesCurr = dataObj.cases.techLicense + dataObj.cases.materialTransfer + dataObj.cases.sponsoredProject;
    const totalCasesPrev = dataObj.casesPrev.techLicense + dataObj.casesPrev.materialTransfer + dataObj.casesPrev.sponsoredProject;
    const diffCases = totalCasesCurr - totalCasesPrev;
    const percentCases = ((Math.abs(diffCases) / totalCasesPrev) * 100).toFixed(1);

    const casesBadgeEl = document.getElementById('cases-summary-badge');
    if (diffCases >= 0) {
        casesBadgeEl.className = 'summary-badge badge-up';
        casesBadgeEl.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> 本期 ${totalCasesCurr} 件 (較去年 +${diffCases}件, +${percentCases}%)`;
    } else {
        casesBadgeEl.className = 'summary-badge badge-down';
        casesBadgeEl.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> 本期 ${totalCasesCurr} 件 (較去年 -${Math.abs(diffCases)}件, -${percentCases}%)`;
    }

    const totalAmtCurr = dataObj.amounts.techRevenueTotal + dataObj.amounts.sponsoredRealized;
    const totalAmtPrev = dataObj.amountsPrev.techRevenueTotal + dataObj.amountsPrev.sponsoredRealized;
    const diffAmt = totalAmtCurr - totalAmtPrev;
    const percentAmt = ((Math.abs(diffAmt) / totalAmtPrev) * 100).toFixed(1);

    const amtBadgeEl = document.getElementById('amounts-summary-badge');
    if (diffAmt >= 0) {
        amtBadgeEl.className = 'summary-badge badge-up';
        amtBadgeEl.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> 本期實收 ${totalAmtCurr.toLocaleString()} 萬 (較去年 +${diffAmt.toLocaleString()}萬, +${percentAmt}%)`;
    } else {
        amtBadgeEl.className = 'summary-badge badge-down';
        amtBadgeEl.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> 本期實收 ${totalAmtCurr.toLocaleString()} 萬 (較去年 -${Math.abs(diffAmt).toLocaleString()}萬, -${percentAmt}%)`;
    }
}

function renderYoyCharts(dataObj) {
    const ctxCases = document.getElementById('yoyCasesChart').getContext('2d');
    if (yoyCasesChartInstance) yoyCasesChartInstance.destroy();

    const casesCurrArray = [dataObj.cases.techLicense, dataObj.cases.materialTransfer, dataObj.cases.sponsoredProject];
    const casesPrevArray = [dataObj.casesPrev.techLicense, dataObj.casesPrev.materialTransfer, dataObj.casesPrev.sponsoredProject];

    yoyCasesChartInstance = new Chart(ctxCases, {
        type: 'bar',
        data: {
            labels: ['技術授權件數', '材料移轉件數', '資助研究計畫件數'],
            datasets: [
                { label: '本期件數', data: casesCurrArray, backgroundColor: '#0d6e63', borderRadius: 4 },
                { label: '去年同期件數', data: casesPrevArray, backgroundColor: '#cbd5e1', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        afterBody: (tooltipItems) => {
                            const index = tooltipItems[0].dataIndex;
                            const curr = casesCurrArray[index];
                            const prev = casesPrevArray[index];
                            const diff = curr - prev;
                            const percent = ((Math.abs(diff) / prev) * 100).toFixed(1);
                            const sign = diff >= 0 ? '+' : '-';
                            return `\n-------------------\n較去年同期: ${diff >= 0 ? '↑ 攀升' : '↓ 下滑'} ${sign}${Math.abs(diff)} 件 (${sign}${percent}%)`;
                        }
                    }
                }
            },
            scales: { y: { beginAtZero: true, title: { display: true, text: '件數 (件)' } } }
        }
    });

    const ctxAmount = document.getElementById('yoyAmountChart').getContext('2d');
    if (yoyAmountChartInstance) yoyAmountChartInstance.destroy();

    const amtCurrArray = Object.values(dataObj.amounts);
    const amtPrevArray = Object.values(dataObj.amountsPrev);

    yoyAmountChartInstance = new Chart(ctxAmount, {
        type: 'bar',
        data: {
            labels: ['科技移轉總收入', '權利金', '合約總價值(現+股)', '科移收入(現+股)', '資助計畫實收'],
            datasets: [
                { label: '本期金額 (萬元)', data: amtCurrArray, backgroundColor: '#0284c7', borderRadius: 4 },
                { label: '去年同期金額 (萬元)', data: amtPrevArray, backgroundColor: '#94a3b8', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        afterBody: (tooltipItems) => {
                            const index = tooltipItems[0].dataIndex;
                            const curr = amtCurrArray[index];
                            const prev = amtPrevArray[index];
                            const diff = curr - prev;
                            const percent = ((Math.abs(diff) / prev) * 100).toFixed(1);
                            const sign = diff >= 0 ? '+' : '-';
                            return `\n-------------------\n較去年同期: ${diff >= 0 ? '↑ 攀升' : '↓ 下滑'} ${sign}${Math.abs(diff).toLocaleString()} 萬元 (${sign}${percent}%)`;
                        }
                    }
                }
            },
            scales: { y: { beginAtZero: true, title: { display: true, text: '金額 (萬元)' } } }
        }
    });
}
