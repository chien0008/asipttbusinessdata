/* ==============================================
   1. 數據庫：110-115 資助計畫與實收收入
   ============================================== */

// 資助計畫資料 (含每月明細)
const sponsoredData = [
    {
        year: "110年度",
        amount: 3200, // 萬元
        cases: 42,    // 件
        monthlyCases:  [3, 2, 4, 3, 5, 4, 3, 4, 3, 4, 4, 3],
        monthlyAmount: [220, 180, 310, 240, 380, 290, 210, 320, 250, 300, 310, 190]
    },
    {
        year: "111年度",
        amount: 3850,
        cases: 50,
        monthlyCases:  [4, 3, 5, 4, 5, 4, 4, 5, 4, 4, 5, 3],
        monthlyAmount: [280, 210, 390, 310, 410, 320, 290, 380, 300, 330, 400, 230]
    },
    {
        year: "112年度",
        amount: 4500,
        cases: 58,
        monthlyCases:  [4, 4, 6, 5, 6, 5, 4, 6, 5, 5, 5, 3],
        monthlyAmount: [310, 290, 480, 390, 490, 410, 320, 450, 380, 390, 370, 220]
    },
    {
        year: "113年度",
        amount: 5200,
        cases: 65,
        monthlyCases:  [5, 4, 7, 6, 7, 6, 5, 6, 5, 6, 5, 3],
        monthlyAmount: [380, 310, 560, 480, 590, 490, 390, 510, 420, 460, 410, 200]
    },
    {
        year: "114年度",
        amount: 5800,
        cases: 72,
        monthlyCases:  [6, 5, 7, 6, 8, 6, 6, 7, 6, 7, 5, 3],
        monthlyAmount: [420, 360, 610, 520, 650, 540, 450, 580, 480, 510, 430, 250]
    },
    {
        year: "115年度",
        amount: 6300,
        cases: 78,
        monthlyCases:  [6, 6, 8, 7, 8, 7, 7, 8, 7, 6, 5, 3],
        monthlyAmount: [460, 410, 680, 590, 720, 610, 510, 640, 530, 480, 420, 250]
    }
];

// 科技移轉收入及產學合作實收經費資料
const revenueData = [
    { year: "110年度", techTransfer: 1200, industryCoop: 2800 },
    { year: "111年度", techTransfer: 1450, industryCoop: 3100 },
    { year: "112年度", techTransfer: 1680, industryCoop: 3500 },
    { year: "113年度", techTransfer: 1950, industryCoop: 4100 },
    { year: "114年度", techTransfer: 2200, industryCoop: 4600 },
    { year: "115年度", techTransfer: 2500, industryCoop: 5100 }
];

// 全域圖表變數
let sponsoredYearlyChartInstance = null;
let sponsoredMonthlyChartInstance = null;
let revenueYearlyChartInstance = null;

/* ==============================================
   2. 初始化與年度聚焦切換
   ============================================== */
window.addEventListener('DOMContentLoaded', () => {
    initYearSelectOptions();
    focusYearData("113年度"); // 預設聚焦觀看 113年度
    renderSponsoredYearlyChart();
    renderRevenueYearlyChart();
});

function initYearSelectOptions() {
    const selectEl = document.getElementById('year-select');
    selectEl.innerHTML = '';
    sponsoredData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.year;
        option.textContent = item.year;
        if(item.year === "113年度") option.selected = true;
        selectEl.appendChild(option);
    });
}

function focusYearData(targetYear) {
    document.getElementById('current-focused-year').textContent = targetYear;
    const yearIndex = sponsoredData.findIndex(item => item.year === targetYear);
    if (yearIndex === -1) return;

    // 計算相較於上年度的攀升/下滑幅度
    updateTrendMetrics(yearIndex);

    // 同步更新子圖表
    updateSponsoredMonthlyChart(yearIndex);
}

/* ==============================================
   3. 計算攀升/下滑幅度 % 與差額
   ============================================== */
function updateTrendMetrics(index) {
    const currSponsored = sponsoredData[index];
    const currRevenue = revenueData[index];
    const currGrandTotal = currRevenue.techTransfer + currRevenue.industryCoop;

    // 填入本期數據
    document.getElementById('sponsored-amount-val').textContent = `${currSponsored.amount.toLocaleString()} 萬元`;
    document.getElementById('sponsored-cases-val').textContent = `${currSponsored.cases} 件`;
    document.getElementById('tech-revenue-val').textContent = `${currRevenue.techTransfer.toLocaleString()} 萬元`;
    document.getElementById('grand-total-val').textContent = `${currGrandTotal.toLocaleString()} 萬元`;

    // 上期比對 (若為基期 110年度 則無比對)
    if (index > 0) {
        const prevSponsored = sponsoredData[index - 1];
        const prevRevenue = revenueData[index - 1];
        const prevGrandTotal = prevRevenue.techTransfer + prevRevenue.industryCoop;

        renderBadge('sponsored-amount-badge', currSponsored.amount, prevSponsored.amount, '萬元');
        renderBadge('sponsored-cases-badge', currSponsored.cases, prevSponsored.cases, '件');
        renderBadge('tech-revenue-badge', currRevenue.techTransfer, prevRevenue.techTransfer, '萬元');
        renderBadge('grand-total-badge', currGrandTotal, prevGrandTotal, '萬元');
    } else {
        const baseBadge = `<i class="fa-solid fa-minus"></i> 基期年度`;
        document.getElementById('sponsored-amount-badge').className = 'trend-badge badge-flat';
        document.getElementById('sponsored-amount-badge').innerHTML = baseBadge;

        document.getElementById('sponsored-cases-badge').className = 'trend-badge badge-flat';
        document.getElementById('sponsored-cases-badge').innerHTML = baseBadge;

        document.getElementById('tech-revenue-badge').className = 'trend-badge badge-flat';
        document.getElementById('tech-revenue-badge').innerHTML = baseBadge;

        document.getElementById('grand-total-badge').className = 'trend-badge badge-flat';
        document.getElementById('grand-total-badge').innerHTML = baseBadge;
    }
}

// 通用渲染 Badge 工具
function renderBadge(elementId, currVal, prevVal, unit) {
    const badgeEl = document.getElementById(elementId);
    const diff = currVal - prevVal;
    const isUp = diff >= 0;
    const percent = ((Math.abs(diff) / prevVal) * 100).toFixed(1);

    if (diff === 0) {
        badgeEl.className = 'trend-badge badge-flat';
        badgeEl.innerHTML = `<i class="fa-solid fa-minus"></i> 持平 (0%)`;
    } else if (isUp) {
        badgeEl.className = 'trend-badge badge-up';
        badgeEl.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> 攀升 +${diff.toLocaleString()} ${unit} (+${percent}%)`;
    } else {
        badgeEl.className = 'trend-badge badge-down';
        badgeEl.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> 下滑 ${diff.toLocaleString()} ${unit} (-${percent}%)`;
    }
}

/* ==============================================
   4. 圖表一：資助研究計畫攀升圖與 Tooltip 成長率
   ============================================== */
function renderSponsoredYearlyChart() {
    const ctx = document.getElementById('sponsoredYearlyChart').getContext('2d');
    const labels = sponsoredData.map(item => item.year);

    sponsoredYearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    label: '簽約金額 (萬元)',
                    data: sponsoredData.map(item => item.amount),
                    backgroundColor: 'rgba(13, 110, 99, 0.85)',
                    borderRadius: 8,
                    yAxisID: 'yAmount'
                },
                {
                    type: 'line',
                    label: '簽約件數 (件)',
                    data: sponsoredData.map(item => item.cases),
                    borderColor: '#0284c7',
                    backgroundColor: '#0284c7',
                    borderWidth: 3,
                    pointRadius: 6,
                    yAxisID: 'yCases'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const targetYear = sponsoredData[index].year;
                    document.getElementById('year-select').value = targetYear;
                    focusYearData(targetYear);
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        afterLabel: (context) => {
                            const dataIndex = context.dataIndex;
                            if (dataIndex > 0) {
                                const dataset = context.dataset.data;
                                const curr = dataset[dataIndex];
                                const prev = dataset[dataIndex - 1];
                                const diff = curr - prev;
                                const percent = ((Math.abs(diff) / prev) * 100).toFixed(1);
                                const isUp = diff >= 0;
                                return `較上年: ${isUp ? '↑ 攀升' : '↓ 下滑'} ${Math.abs(diff)} (${isUp ? '+' : '-'}${percent}%)`;
                            }
                            return '基期年度';
                        }
                    }
                }
            },
            scales: {
                yAmount: { type: 'linear', position: 'left', beginAtZero: true, title: { display: true, text: '金額 (萬元)' } },
                yCases: { type: 'linear', position: 'right', beginAtZero: true, grid: { drawOnChartArea: false }, title: { display: true, text: '件數 (件)' } }
            }
        }
    });
}

function updateSponsoredMonthlyChart(yearIndex) {
    const yearObj = sponsoredData[yearIndex];
    document.getElementById('drilldown-year-title').textContent = yearObj.year;

    const ctx = document.getElementById('sponsoredMonthlyChart').getContext('2d');
    const monthLabels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

    if (sponsoredMonthlyChartInstance) sponsoredMonthlyChartInstance.destroy();

    sponsoredMonthlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthLabels,
            datasets: [
                {
                    type: 'bar',
                    label: '每月金額 (萬元)',
                    data: yearObj.monthlyAmount,
                    backgroundColor: 'rgba(2, 132, 199, 0.75)',
                    borderRadius: 6,
                    yAxisID: 'yMonthAmount'
                },
                {
                    type: 'line',
                    label: '每月件數 (件)',
                    data: yearObj.monthlyCases,
                    borderColor: '#0d6e63',
                    backgroundColor: '#0d6e63',
                    borderWidth: 2,
                    pointRadius: 4,
                    yAxisID: 'yMonthCases'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yMonthAmount: { type: 'linear', position: 'left', beginAtZero: true, title: { display: true, text: '金額 (萬元)' } },
                yMonthCases: { type: 'linear', position: 'right', beginAtZero: true, grid: { drawOnChartArea: false }, title: { display: true, text: '件數 (件)' } }
            }
        }
    });
}

function resetYearSelection() {
    const latestYear = sponsoredData[sponsoredData.length - 1].year;
    document.getElementById('year-select').value = latestYear;
    focusYearData(latestYear);
}

/* ==============================================
   5. 圖表二：科技移轉與產學實收攀升/下滑對比圖
   ============================================== */
function renderRevenueYearlyChart() {
    const ctx = document.getElementById('revenueYearlyChart').getContext('2d');
    const labels = revenueData.map(item => item.year);
    const techTransfers = revenueData.map(item => item.techTransfer);
    const industryCoops = revenueData.map(item => item.industryCoop);
    const grandTotals = revenueData.map(item => item.techTransfer + item.industryCoop);

    revenueYearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    label: '科技移轉收入 (萬元)',
                    data: techTransfers,
                    backgroundColor: 'rgba(13, 110, 99, 0.85)',
                    borderRadius: 6
                },
                {
                    type: 'bar',
                    label: '產學合作實收經費 (萬元)',
                    data: industryCoops,
                    backgroundColor: 'rgba(2, 132, 199, 0.85)',
                    borderRadius: 6
                },
                {
                    type: 'line',
                    label: '總金額 (科技移轉＋產學合作)',
                    data: grandTotals,
                    borderColor: '#d97706',
                    backgroundColor: '#d97706',
                    borderWidth: 3,
                    pointRadius: 6,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        afterLabel: (context) => {
                            const dataIndex = context.dataIndex;
                            if (dataIndex > 0) {
                                const dataset = context.dataset.data;
                                const curr = dataset[dataIndex];
                                const prev = dataset[dataIndex - 1];
                                const diff = curr - prev;
                                const percent = ((Math.abs(diff) / prev) * 100).toFixed(1);
                                const isUp = diff >= 0;
                                return `較上年: ${isUp ? '↑ 攀升' : '↓ 下滑'} ${Math.abs(diff)} 萬元 (${isUp ? '+' : '-'}${percent}%)`;
                            }
                            return '基期年度';
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, title: { display: true, text: '金額 (萬元)' } }
            }
        }
    });
}
