/* ==============================================
   1. 110 - 115 年度暨每月明細資料庫
   ============================================== */
const yearlyData = [
    {
        year: "110年度",
        amount: 3200, // 單位：萬元
        cases: 42,    // 單位：件
        // 12 個月的件數與金額
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
        year: "115年度", // 當前進行中/預估
        amount: 6300,
        cases: 78,
        monthlyCases:  [6, 6, 8, 7, 8, 7, 7, 8, 7, 6, 5, 3],
        monthlyAmount: [460, 410, 680, 590, 720, 610, 510, 640, 530, 480, 420, 250]
    }
];

// 全域圖表變數
let yearlyChartInstance = null;
let monthlyChartInstance = null;
let currentSelectedYearIndex = 3; // 預設載入 113年度 (索引 3)

/* ==============================================
   2. 初始化
   ============================================== */
window.addEventListener('DOMContentLoaded', () => {
    calculateKpis();
    renderYearlyChart();
    updateMonthlyChart(currentSelectedYearIndex);
});

// 計算總累計 KPI
function calculateKpis() {
    const totalAmount = yearlyData.reduce((sum, item) => sum + item.amount, 0);
    const totalCases = yearlyData.reduce((sum, item) => sum + item.cases, 0);

    document.getElementById('total-amount').textContent = `${totalAmount.toLocaleString()} 萬元`;
    document.getElementById('total-cases').textContent = `${totalCases.toLocaleString()} 件`;
}

/* ==============================================
   3. 繪製 110 - 115 歷年比較圖 (主圖表)
   ============================================== */
function renderYearlyChart() {
    const ctx = document.getElementById('yearlyChart').getContext('2d');

    const labels = yearlyData.map(item => item.year);
    const amounts = yearlyData.map(item => item.amount);
    const cases = yearlyData.map(item => item.cases);

    yearlyChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    type: 'bar',
                    label: '簽約金額 (萬元)',
                    data: amounts,
                    backgroundColor: 'rgba(13, 110, 99, 0.85)',
                    hoverBackgroundColor: '#084841',
                    borderRadius: 8,
                    yAxisID: 'yAmount'
                },
                {
                    type: 'line',
                    label: '簽約件數 (件)',
                    data: cases,
                    borderColor: '#d97706',
                    backgroundColor: '#d97706',
                    borderWidth: 3,
                    pointRadius: 6,
                    pointHoverRadius: 9,
                    tension: 0.3,
                    yAxisID: 'yCases'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            onClick: (event, elements) => {
                // 點擊柱狀圖鑽取該年份
                if (elements.length > 0) {
                    const index = elements[0].index;
                    updateMonthlyChart(index);
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        footer: () => '💡 點擊此柱可查看該年度每月細節'
                    }
                }
            },
            scales: {
                yAmount: {
                    type: 'linear',
                    position: 'left',
                    title: { display: true, text: '簽約金額 (萬元)' },
                    beginAtZero: true
                },
                yCases: {
                    type: 'linear',
                    position: 'right',
                    title: { display: true, text: '簽約件數 (件)' },
                    beginAtZero: true,
                    grid: { drawOnChartArea: false } // 避免雙軸網格線重疊
                }
            }
        }
    });
}

/* ==============================================
   4. 更新 1-12 月份明細圖表 (子圖表)
   ============================================== */
function updateMonthlyChart(yearIndex) {
    currentSelectedYearIndex = yearIndex;
    const yearObj = yearlyData[yearIndex];

    // 更新介面卡片文字
    document.getElementById('selected-year-label').textContent = `${yearObj.year} 簽約金額`;
    document.getElementById('selected-year-badge').textContent = yearObj.year;
    document.getElementById('selected-year-amount').textContent = `${yearObj.amount.toLocaleString()} 萬元 (${yearObj.cases} 件)`;
    document.getElementById('monthly-chart-title').textContent = yearObj.year;

    // 計算成長率
    const growthEl = document.getElementById('selected-year-growth');
    if (yearIndex > 0) {
        const prevAmount = yearlyData[yearIndex - 1].amount;
        const diff = yearObj.amount - prevAmount;
        const percent = ((diff / prevAmount) * 100).toFixed(1);
        growthEl.textContent = `較前一年度: ${diff >= 0 ? '+' : ''}${diff} 萬元 (${percent}%)`;
    } else {
        growthEl.textContent = `基期年度`;
    }

    // 繪製或更新月份圖表
    const ctx = document.getElementById('monthlyChart').getContext('2d');
    const monthLabels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

    if (monthlyChartInstance) {
        monthlyChartInstance.destroy();
    }

    monthlyChartInstance = new Chart(ctx, {
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
                yMonthAmount: {
                    type: 'linear',
                    position: 'left',
                    title: { display: true, text: '金額 (萬元)' },
                    beginAtZero: true
                },
                yMonthCases: {
                    type: 'linear',
                    position: 'right',
                    title: { display: true, text: '件數 (件)' },
                    beginAtZero: true,
                    grid: { drawOnChartArea: false }
                }
            }
        }
    });
}

function resetYearSelection() {
    updateMonthlyChart(yearlyData.length - 1); // 重置為最新年度 (115年度)
}
