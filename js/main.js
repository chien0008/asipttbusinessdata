/* ==============================================
   1. 完整資料庫定義 (已更新圖片最新數據)
   ============================================== */

let targetConfig = {
    techLicense:   { target: 37, actual: 10, unit: "件" },
    techItem:      { target: 45, actual: 12, unit: "項" },
    ad:            { target: 20, actual: 8,  unit: "件" },
    grantProject:  { target: 60, actual: 25, unit: "件" }
};

// 1. 資助研究計畫數據 (含 15,337, 15,246, 7,615 等真實金額)
const sponsoredData = [
    { year: "110年度", amount: 15337, cases: 63, monthlyCases: [5, 4, 6, 5, 7, 6, 5, 6, 5, 5, 5, 4], monthlyAmount: [1200, 1100, 1500, 1300, 1600, 1400, 1100, 1300, 1200, 1400, 1237, 1000] },
    { year: "111年度", amount: 15246, cases: 64, monthlyCases: [5, 5, 6, 5, 7, 6, 5, 6, 5, 5, 5, 4], monthlyAmount: [1246, 1100, 1400, 1300, 1500, 1400, 1200, 1300, 1100, 1300, 1200, 1200] },
    { year: "112年度", amount: 7615,  cases: 41, monthlyCases: [3, 3, 4, 3, 5, 4, 3, 4, 3, 3, 3, 3], monthlyAmount: [600, 500, 800, 650, 900, 700, 550, 750, 600, 650, 515, 400] },
    { year: "113年度", amount: 4047,  cases: 35, monthlyCases: [2, 2, 4, 3, 4, 3, 3, 3, 3, 3, 3, 2], monthlyAmount: [300, 250, 450, 350, 500, 400, 300, 400, 300, 350, 247, 200] },
    { year: "114年度", amount: 5132,  cases: 30, monthlyCases: [2, 2, 3, 3, 4, 3, 2, 3, 2, 2, 2, 2], monthlyAmount: [400, 300, 550, 450, 600, 500, 350, 500, 400, 450, 382, 250] },
    { year: "115年度", amount: 5452,  cases: 20, monthlyCases: [1, 1, 2, 2, 3, 2, 2, 2, 2, 1, 1, 1], monthlyAmount: [450, 350, 600, 500, 700, 550, 400, 550, 450, 450, 252, 150] }
];

// 3. ✨ 科技移轉收入及產學合作實收經費 (依圖片更新完整數據)
const revenueData = [
    { year: "110年度", techTransfer: 12717, industryCoop: 15436 },
    { year: "111年度", techTransfer: 6185,  industryCoop: 11196 },
    { year: "112年度", techTransfer: 4653,  industryCoop: 14335 },
    { year: "113年度", techTransfer: 4271,  industryCoop: 7187  },
    { year: "114年度", techTransfer: 39358, industryCoop: 8206  },
    { year: "115年度", techTransfer: 2708,  industryCoop: 4274  }
];

const royaltyData = [
    { year: "110年度", amount: 480 },
    { year: "111年度", amount: 620 },
    { year: "112年度", amount: 850 },
    { year: "113年度", amount: 1100 },
    { year: "114年度", amount: 1350 },
    { year: "115年度", amount: 1600 }
];

const techTransferBreakdownData = [
    { year: "110年度", exclusive: 1, nonExclusive: 22, material: 85 },
    { year: "111年度", exclusive: 1, nonExclusive: 26, material: 92 },
    { year: "112年度", exclusive: 2, nonExclusive: 29, material: 101 },
    { year: "113年度", exclusive: 2, nonExclusive: 31, material: 105 },
    { year: "114年度", exclusive: 2, nonExclusive: 34, material: 111 },
    { year: "115年度", exclusive: 3, nonExclusive: 38, material: 118 }
];

const contractAndIncomeData = [
    { year: "110年度", contractValue: 2400, incomeValue: 12717 },
    { year: "111年度", contractValue: 2800, incomeValue: 6185  },
    { year: "112年度", contractValue: 3100, incomeValue: 4653  },
    { year: "113年度", contractValue: 3600, incomeValue: 4271  },
    { year: "114年度", contractValue: 4100, incomeValue: 39358 },
    { year: "115年度", contractValue: 4600, incomeValue: 2708  }
];

const yoyHistoricalDatabase = {
    "2026-09-24": {
        currDateLabel: "115 年 09 月 24 日",
        prevDateLabel: "114 年 09 月 24 日",
        cases: { techLicense: 48, materialTransfer: 52, sponsoredProject: 20 },
        casesPrev: { techLicense: 40, materialTransfer: 45, sponsoredProject: 30 },
        amounts: { techRevenueTotal: 2708, royalty: 1350, contractValueTotal: 3400, techRevenueCashStock: 2708, sponsoredRealized: 5452 },
        amountsPrev: { techRevenueTotal: 39358, royalty: 1100, contractValueTotal: 2900, techRevenueCashStock: 39358, sponsoredRealized: 5132 }
    },
    "2026-09-19": {
        currDateLabel: "115 年 09 月 19 日",
        prevDateLabel: "114 年 09 月 18 日",
        cases: { techLicense: 45, materialTransfer: 50, sponsoredProject: 18 },
        casesPrev: { techLicense: 38, materialTransfer: 43, sponsoredProject: 28 },
        amounts: { techRevenueTotal: 2500, royalty: 1300, contractValueTotal: 3250, techRevenueCashStock: 2500, sponsoredRealized: 5000 },
        amountsPrev: { techRevenueTotal: 38000, royalty: 1050, contractValueTotal: 2800, techRevenueCashStock: 38000, sponsoredRealized: 4800 }
    }
};

// Chart Instances
let doughnutInstances = {};
let royaltyChartInstance = null;
let sponsoredYearlyChartInstance = null;
let sponsoredMonthlyChartInstance = null;
let revenueYearlyChartInstance = null;
let yoyCasesChartInstance = null;
let yoyAmountChartInstance = null;
let techTransferBreakdownChartInstance = null;
let contractAndIncomeChartInstance = null;

Chart.defaults.font.family = "'Plus Jakarta Sans', 'Noto Sans TC', sans-serif";
Chart.defaults.color = '#64748B';

/* 💎 工具函式：產生透明質感漸層 */
function getTranslucentGradient(ctx, colorTopHex, opacityTop, opacityBottom) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 320);
    const rgb = hexToRgb(colorTopHex);
    gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacityTop})`);
    gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacityBottom})`);
    return gradient;
}

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

/* ==============================================
   2. 初始化與 Tab 切換邏輯
   ============================================== */
window.addEventListener('DOMContentLoaded', () => {
    renderSponsoredYearlyChart();
    renderRevenueYearlyChart();
    document.getElementById('yoy-date-input').value = "2026-09-24";
    handleYoyDateChange("2026-09-24");

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
   3. 第二分頁圖表繪製
   ============================================== */

function renderSingleDoughnut(canvasId, textContainerId, itemKey, hexColor) {
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

    const gradient = ctx.createLinearGradient(0, 0, 160, 160);
    const rgb = hexToRgb(hexColor);
    gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.9)`);
    gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`);

    doughnutInstances[canvasId] = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['已達成', '未達成'],
            datasets: [{
                data: [actual, remain],
                backgroundColor: [gradient, 'rgba(241, 245, 249, 0.6)'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            cutout: '80%',
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
    renderSingleDoughnut('techLicenseDoughnut',  'techLicenseCenterText',  'techLicense',  '#0284C7');
    renderSingleDoughnut('techItemDoughnut',     'techItemCenterText',     'techItem',     '#0F766E');
    renderSingleDoughnut('adDoughnut',           'adCenterText',           'ad',           '#7E22CE');
    renderSingleDoughnut('grantProjectDoughnut', 'grantProjectCenterText', 'grantProject', '#D97706');
}

function renderRoyaltyChart() {
    const ctx = document.getElementById('royaltyYearlyChart').getContext('2d');
    const glassGradient = getTranslucentGradient(ctx, '#3B82F6', 0.8, 0.2);

    royaltyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: royaltyData.map(item => item.year),
            datasets: [{
                label: '權利金 (萬元)',
                data: royaltyData.map(item => item.amount),
                backgroundColor: glassGradient,
                borderColor: 'rgba(59, 130, 246, 0.6)',
                borderWidth: 1,
                borderRadius: 8,
                barPercentage: 0.55
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, grid: { color: '#F1F5F9' }, title: { display: true, text: '金額 (萬元)' } }
            }
        }
    });
}

function renderTechTransferBreakdownChart() {
    const ctx = document.getElementById('techTransferBreakdownChart').getContext('2d');
    
    const grad1 = getTranslucentGradient(ctx, '#38BDF8', 0.85, 0.35);
    const grad2 = getTranslucentGradient(ctx, '#34D399', 0.85, 0.35);
    const grad3 = getTranslucentGradient(ctx, '#FBBF24', 0.85, 0.35);

    techTransferBreakdownChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: techTransferBreakdownData.map(item => item.year),
            datasets: [
                { label: '專屬授權', data: techTransferBreakdownData.map(item => item.exclusive), backgroundColor: grad1, borderRadius: 4, barPercentage: 0.6 },
                { label: '非專屬授權', data: techTransferBreakdownData.map(item => item.nonExclusive), backgroundColor: grad2, borderRadius: 4, barPercentage: 0.6 },
                { label: '有償材料移轉', data: techTransferBreakdownData.map(item => item.material), backgroundColor: grad3, borderRadius: 4, barPercentage: 0.6 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, grid: { display: false } },
                y: { stacked: true, beginAtZero: true, grid: { color: '#F1F5F9' }, title: { display: true, text: '件數 (件)' } }
            }
        }
    });
}

function renderContractAndIncomeChart() {
    const ctx = document.getElementById('contractAndIncomeChart').getContext('2d');
    const grad1 = getTranslucentGradient(ctx, '#6366F1', 0.8, 0.25);
    const grad2 = getTranslucentGradient(ctx, '#38BDF8', 0.8, 0.25);

    contractAndIncomeChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: contractAndIncomeData.map(item => item.year),
            datasets: [
                { type: 'bar', label: '授權合約總價值 (現金＋股票)', data: contractAndIncomeData.map(item => item.contractValue), backgroundColor: grad1, borderColor: 'rgba(99, 102, 241, 0.5)', borderWidth: 1, borderRadius: 6 },
                { type: 'bar', label: '科技移轉總收入 (現金＋股票)', data: contractAndIncomeData.map(item => item.incomeValue), backgroundColor: grad2, borderColor: 'rgba(56, 189, 248, 0.5)', borderWidth: 1, borderRadius: 6 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, grid: { color: '#F1F5F9' }, title: { display: true, text: '金額 (萬元)' } }
            }
        }
    });
}

/* Modal 表單邏輯 */
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
   4. 第一分頁圖表 (1. 資助研究計畫 & 2. YoY & 3. 科技移轉)
   ============================================== */

function renderSponsoredYearlyChart() {
    const ctx = document.getElementById('sponsoredYearlyChart').getContext('2d');
    const barGradient = getTranslucentGradient(ctx, '#3B82F6', 0.75, 0.2);
    const lineAreaGradient = getTranslucentGradient(ctx, '#10B981', 0.25, 0.02);

    sponsoredYearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sponsoredData.map(item => item.year),
            datasets: [
                { 
                    type: 'line', 
                    label: '簽約件數 (件)', 
                    data: sponsoredData.map(item => item.cases), 
                    borderColor: '#10B981', 
                    backgroundColor: lineAreaGradient,
                    fill: true,
                    borderWidth: 3, 
                    pointBackgroundColor: '#10B981', 
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 6, 
                    pointHoverRadius: 8,
                    tension: 0.3,
                    yAxisID: 'yCases',
                    order: 1 
                },
                { 
                    type: 'bar', 
                    label: '簽約金額 (萬元)', 
                    data: sponsoredData.map(item => item.amount), 
                    backgroundColor: barGradient, 
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    borderWidth: 1,
                    borderRadius: 8, 
                    barPercentage: 0.55,
                    categoryPercentage: 0.7,
                    yAxisID: 'yAmount',
                    order: 2 
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                if (elements.length > 0) openMonthlyDrawer(elements[0].index);
            },
            scales: {
                x: { grid: { display: false } },
                yAmount: { 
                    type: 'linear', position: 'left', beginAtZero: true, 
                    grid: { color: '#F1F5F9' }, 
                    title: { display: true, text: '金額 (萬元)', color: '#3B82F6', font: { weight: 'bold' } } 
                },
                yCases: { 
                    type: 'linear', position: 'right', beginAtZero: true, 
                    grid: { drawOnChartArea: false }, 
                    title: { display: true, text: '件數 (件)', color: '#10B981', font: { weight: 'bold' } } 
                }
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

    const barGrad = getTranslucentGradient(ctx, '#60A5FA', 0.8, 0.25);

    sponsoredMonthlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            datasets: [
                { 
                    type: 'line', 
                    label: '每月件數 (件)', 
                    data: yearObj.monthlyCases, 
                    borderColor: '#059669', 
                    backgroundColor: '#059669',
                    borderWidth: 2.5, 
                    pointBackgroundColor: '#059669',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 5, 
                    yAxisID: 'yMonthCases',
                    order: 1 
                },
                { 
                    type: 'bar', 
                    label: '每月金額 (萬元)', 
                    data: yearObj.monthlyAmount, 
                    backgroundColor: barGrad, 
                    borderRadius: 6, 
                    barPercentage: 0.6,
                    yAxisID: 'yMonthAmount',
                    order: 2 
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false } },
                yMonthAmount: { type: 'linear', position: 'left', beginAtZero: true, grid: { color: '#F1F5F9' } },
                yMonthCases: { type: 'linear', position: 'right', beginAtZero: true, grid: { drawOnChartArea: false } }
            }
        }
    });
}

function renderRevenueYearlyChart() {
    const ctx = document.getElementById('revenueYearlyChart').getContext('2d');
    const grad1 = getTranslucentGradient(ctx, '#38BDF8', 0.8, 0.2);
    const grad2 = getTranslucentGradient(ctx, '#818CF8', 0.8, 0.2);

    revenueYearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: revenueData.map(item => item.year),
            datasets: [
                { type: 'bar', label: '科技移轉收入 (萬元)', data: revenueData.map(item => item.techTransfer), backgroundColor: grad1, borderRadius: 6, barPercentage: 0.6 },
                { type: 'bar', label: '產學合作實收經費 (萬元)', data: revenueData.map(item => item.industryCoop), backgroundColor: grad2, borderRadius: 6, barPercentage: 0.6 },
                { type: 'line', label: '總金額 (科技移轉＋產學合作)', data: revenueData.map(item => item.techTransfer + item.industryCoop), borderColor: '#F59E0B', borderWidth: 3, pointRadius: 5, tension: 0.3 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, grid: { color: '#F1F5F9' }, title: { display: true, text: '金額 (萬元)' } }
            }
        }
    });
}

function setQuickDate(type) {
    const dateInput = document.getElementById('yoy-date-input');
    if (type === 'today') {
        dateInput.value = "2026-09-24";
        handleYoyDateChange("2026-09-24");
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

        dataObj = {
            currDateLabel: `${currYearRoc} 年 ${month} 月 ${day} 日`,
            prevDateLabel: `${prevYearRoc} 年 ${month} 月 ${prevDayStr} 日`,
            cases: { techLicense: 46, materialTransfer: 51, sponsoredProject: 19 },
            casesPrev: { techLicense: 39, materialTransfer: 44, sponsoredProject: 29 },
            amounts: { techRevenueTotal: 2708, royalty: 1320, contractValueTotal: 3300, techRevenueCashStock: 2708, sponsoredRealized: 5300 },
            amountsPrev: { techRevenueTotal: 39358, royalty: 1080, contractValueTotal: 2850, techRevenueCashStock: 39358, sponsoredRealized: 5000 }
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

    const gradCurr = getTranslucentGradient(ctxCases, '#3B82F6', 0.8, 0.25);
    const gradPrev = getTranslucentGradient(ctxCases, '#CBD5E1', 0.7, 0.2);

    const casesCurrArray = [dataObj.cases.techLicense, dataObj.cases.materialTransfer, dataObj.cases.sponsoredProject];
    const casesPrevArray = [dataObj.casesPrev.techLicense, dataObj.casesPrev.materialTransfer, dataObj.casesPrev.sponsoredProject];

    yoyCasesChartInstance = new Chart(ctxCases, {
        type: 'bar',
        data: {
            labels: ['技術授權件數', '材料移轉件數', '資助研究計畫件數'],
            datasets: [
                { label: '本期件數', data: casesCurrArray, backgroundColor: gradCurr, borderRadius: 6, barPercentage: 0.6 },
                { label: '去年同期件數', data: casesPrevArray, backgroundColor: gradPrev, borderRadius: 6, barPercentage: 0.6 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, grid: { color: '#F1F5F9' }, title: { display: true, text: '件數 (件)' } }
            }
        }
    });

    const ctxAmount = document.getElementById('yoyAmountChart').getContext('2d');
    if (yoyAmountChartInstance) yoyAmountChartInstance.destroy();

    const gradAmtCurr = getTranslucentGradient(ctxAmount, '#10B981', 0.8, 0.25);
    const gradAmtPrev = getTranslucentGradient(ctxAmount, '#94A3B8', 0.7, 0.2);

    const amtCurrArray = Object.values(dataObj.amounts);
    const amtPrevArray = Object.values(dataObj.amountsPrev);

    yoyAmountChartInstance = new Chart(ctxAmount, {
        type: 'bar',
        data: {
            labels: ['科技移轉總收入', '權利金', '合約總價值(現+股)', '科移收入(現+股)', '資助計畫實收'],
            datasets: [
                { label: '本期金額 (萬元)', data: amtCurrArray, backgroundColor: gradAmtCurr, borderRadius: 6, barPercentage: 0.6 },
                { label: '去年同期金額 (萬元)', data: amtPrevArray, backgroundColor: gradAmtPrev, borderRadius: 6, barPercentage: 0.6 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true, grid: { color: '#F1F5F9' }, title: { display: true, text: '金額 (萬元)' } }
            }
        }
    });
}
