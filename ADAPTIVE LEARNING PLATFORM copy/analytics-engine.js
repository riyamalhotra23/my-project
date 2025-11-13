// Analytics Engine for LearnFlow Platform
// Handles data visualization, charts, and analytics processing

class AnalyticsEngine {
    constructor() {
        this.charts = {};
        this.data = this.generateMockData();
        this.initializeCharts();
        this.initializeInteractions();
    }
    
    generateMockData() {
        return {
            cohortPerformance: this.generateCohortHeatmapData(),
            velocityTrends: this.generateVelocityData(),
            subjectPerformance: this.generateSubjectData(),
            studentProgress: this.generateStudentProgressData()
        };
    }
    
    generateCohortHeatmapData() {
        const subjects = ['Mathematics', 'Science', 'Language Arts', 'History', 'Art', 'PE'];
        const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
        const data = [];
        
        subjects.forEach((subject, subjectIndex) => {
            weeks.forEach((week, weekIndex) => {
                const performance = Math.floor(Math.random() * 100);
                data.push([weekIndex, subjectIndex, performance]);
            });
        });
        
        return { subjects, weeks, data };
    }
    
    generateVelocityData() {
        const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
        const cohorts = ['Class A', 'Class B', 'Class C'];
        const data = {};
        
        cohorts.forEach(cohort => {
            data[cohort] = weeks.map(() => Math.floor(Math.random() * 50) + 20);
        });
        
        return { weeks, data };
    }
    
    generateSubjectData() {
        const subjects = ['Mathematics', 'Science', 'Language Arts', 'History'];
        const mastery = subjects.map(() => Math.floor(Math.random() * 40) + 60);
        const engagement = subjects.map(() => Math.floor(Math.random() * 30) + 70);
        
        return { subjects, mastery, engagement };
    }
    
    generateStudentProgressData() {
        const students = [
            { name: 'John Smith', progress: 45, status: 'at-risk' },
            { name: 'Maria Johnson', progress: 52, status: 'warning' },
            { name: 'Robert Lee', progress: 58, status: 'warning' },
            { name: 'Emily Wilson', progress: 96, status: 'excellent' },
            { name: 'Michael Chen', progress: 94, status: 'excellent' },
            { name: 'Sarah Brown', progress: 92, status: 'excellent' }
        ];
        
        return students;
    }
    
    initializeCharts() {
        this.initializeCohortHeatmap();
        this.initializeVelocityChart();
        this.initializeSubjectChart();
    }
    
    initializeCohortHeatmap() {
        const chartDom = document.getElementById('cohort-heatmap');
        if (!chartDom) return;
        
        const myChart = echarts.init(chartDom);
        this.charts.cohortHeatmap = myChart;
        
        const { subjects, weeks, data } = this.data.cohortPerformance;
        
        const option = {
            tooltip: {
                position: 'top',
                formatter: function(params) {
                    return `${subjects[params.data[1]]}<br/>${weeks[params.data[0]]}<br/>Performance: ${params.data[2]}%`;
                }
            },
            grid: {
                height: '60%',
                top: '10%'
            },
            xAxis: {
                type: 'category',
                data: weeks,
                splitArea: {
                    show: true
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#3A3A3A'
                }
            },
            yAxis: {
                type: 'category',
                data: subjects,
                splitArea: {
                    show: true
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#3A3A3A'
                }
            },
            visualMap: {
                min: 0,
                max: 100,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '5%',
                inRange: {
                    color: ['#C67B73', '#D4A574', '#7A9B9B', '#2D5A3D']
                },
                textStyle: {
                    color: '#3A3A3A',
                    fontSize: 12
                }
            },
            series: [{
                name: 'Performance',
                type: 'heatmap',
                data: data,
                label: {
                    show: true,
                    formatter: '{c}%',
                    fontSize: 11,
                    color: '#ffffff'
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        
        myChart.setOption(option);
        
        // Animate chart appearance
        setTimeout(() => {
            myChart.setOption({
                series: [{
                    animationDuration: 1000,
                    animationEasing: 'cubicOut'
                }]
            });
        }, 100);
    }
    
    initializeVelocityChart() {
        const chartDom = document.getElementById('velocity-chart');
        if (!chartDom) return;
        
        const myChart = echarts.init(chartDom);
        this.charts.velocityChart = myChart;
        
        const { weeks, data } = this.data.velocityTrends;
        const series = Object.keys(data).map(cohort => ({
            name: cohort,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                width: 3
            },
            data: data[cohort]
        }));
        
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#2D5A3D'
                    }
                }
            },
            legend: {
                data: Object.keys(data),
                textStyle: {
                    color: '#3A3A3A',
                    fontSize: 12
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: weeks,
                axisLabel: {
                    fontSize: 12,
                    color: '#3A3A3A'
                }
            },
            yAxis: {
                type: 'value',
                name: 'Questions/Hour',
                axisLabel: {
                    fontSize: 12,
                    color: '#3A3A3A'
                }
            },
            series: series,
            color: ['#2D5A3D', '#5B7C99', '#7A9B9B']
        };
        
        myChart.setOption(option);
        
        // Add animation
        setTimeout(() => {
            myChart.setOption({
                series: series.map(() => ({
                    animationDuration: 1500,
                    animationEasing: 'cubicOut'
                }))
            });
        }, 200);
    }
    
    initializeSubjectChart() {
        const chartDom = document.getElementById('subject-chart');
        if (!chartDom) return;
        
        const myChart = echarts.init(chartDom);
        this.charts.subjectChart = myChart;
        
        const { subjects, mastery, engagement } = this.data.subjectPerformance;
        
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Mastery Level', 'Engagement Rate'],
                textStyle: {
                    color: '#3A3A3A',
                    fontSize: 12
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: subjects,
                axisLabel: {
                    fontSize: 12,
                    color: '#3A3A3A'
                }
            },
            yAxis: {
                type: 'value',
                name: 'Percentage',
                axisLabel: {
                    fontSize: 12,
                    color: '#3A3A3A',
                    formatter: '{value}%'
                }
            },
            series: [
                {
                    name: 'Mastery Level',
                    type: 'bar',
                    data: mastery,
                    itemStyle: {
                        color: '#2D5A3D',
                        borderRadius: [4, 4, 0, 0]
                    },
                    animationDelay: function (idx) {
                        return idx * 100;
                    }
                },
                {
                    name: 'Engagement Rate',
                    type: 'bar',
                    data: engagement,
                    itemStyle: {
                        color: '#5B7C99',
                        borderRadius: [4, 4, 0, 0]
                    },
                    animationDelay: function (idx) {
                        return idx * 100 + 50;
                    }
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        
        myChart.setOption(option);
    }
    
    initializeInteractions() {
        // Filter tab interactions
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Update tab appearance
                filterTabs.forEach(t => {
                    if (t.classList.contains('active')) {
                        t.style.background = 'var(--sage)';
                        t.style.color = 'white';
                    } else {
                        t.style.background = 'white';
                        t.style.color = 'var(--charcoal)';
                    }
                });
                
                // Animate tab change
                anime({
                    targets: tab,
                    scale: [0.95, 1],
                    duration: 200,
                    easing: 'easeOutCubic'
                });
            });
        });
        
        // Student row interactions
        const studentRows = document.querySelectorAll('.student-row');
        studentRows.forEach(row => {
            row.addEventListener('click', () => {
                this.showStudentDetails(row);
            });
        });
        
        // Resize charts on window resize
        window.addEventListener('resize', () => {
            Object.values(this.charts).forEach(chart => {
                if (chart && chart.resize) {
                    chart.resize();
                }
            });
        });
    }
    
    showStudentDetails(row) {
        const studentName = row.querySelector('.font-semibold').textContent;
        const progress = row.querySelector('.font-bold').textContent;
        const status = row.querySelector('.text-xs').textContent;
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-lg mx-4 w-full">
                <div class="text-center mb-6">
                    <div class="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-white font-bold text-lg">${studentName.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-charcoal mb-2">${studentName}</h3>
                    <div class="text-4xl font-bold text-sage mb-2">${progress}</div>
                    <div class="text-charcoal/60">Overall Progress</div>
                </div>
                
                <div class="space-y-4 mb-6">
                    <div class="flex justify-between items-center p-3 bg-sage/5 rounded-lg">
                        <span class="text-charcoal/70">Current Status:</span>
                        <span class="font-semibold text-charcoal">${status}</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-blue/5 rounded-lg">
                        <span class="text-charcoal/70">Questions Attempted:</span>
                        <span class="font-semibold text-charcoal">${Math.floor(Math.random() * 200) + 100}</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-gold/5 rounded-lg">
                        <span class="text-charcoal/70">Accuracy Rate:</span>
                        <span class="font-semibold text-charcoal">${progress}</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-teal/5 rounded-lg">
                        <span class="text-charcoal/70">Time Spent:</span>
                        <span class="font-semibold text-charcoal">${(Math.random() * 20 + 10).toFixed(1)} hours</span>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <button class="btn-primary px-4 py-2 rounded-lg font-medium text-sm">
                        📧 Send Message
                    </button>
                    <button class="btn-secondary px-4 py-2 rounded-lg font-medium text-sm">
                        📊 View Details
                    </button>
                </div>
                
                <div class="text-center">
                    <button class="text-charcoal/60 hover:text-charcoal font-medium text-sm" onclick="this.parentElement.parentElement.parentElement.remove()">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animate modal appearance
        anime({
            targets: modal.querySelector('div'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    updateChartData(chartType, newData) {
        const chart = this.charts[chartType];
        if (!chart) return;
        
        switch (chartType) {
            case 'cohortHeatmap':
                chart.setOption({
                    series: [{
                        data: newData
                    }]
                });
                break;
            case 'velocityChart':
                chart.setOption({
                    series: [{
                        data: newData
                    }]
                });
                break;
            case 'subjectChart':
                chart.setOption({
                    series: [{
                        data: newData
                    }]
                });
                break;
        }
    }
    
    // Real-time data update simulation
    startRealTimeUpdates() {
        setInterval(() => {
            // Simulate real-time data updates
            this.updateMetrics();
        }, 30000); // Update every 30 seconds
    }
    
    updateMetrics() {
        // Update key metrics with small random changes
        const metrics = document.querySelectorAll('.text-3xl');
        metrics.forEach(metric => {
            const currentValue = parseFloat(metric.textContent);
            const change = (Math.random() - 0.5) * 2; // ±1 change
            const newValue = Math.max(0, currentValue + change);
            
            anime({
                targets: metric,
                innerHTML: [currentValue, newValue.toFixed(1)],
                duration: 1000,
                round: metric.textContent.includes('.') ? 10 : 1,
                easing: 'easeOutCubic'
            });
        });
    }
    
    // Export functionality
    exportReport() {
        const reportData = {
            timestamp: new Date().toISOString(),
            metrics: this.data,
            summary: {
                totalStudents: 1247,
                avgMastery: 78.5,
                engagementRate: 89.2
            }
        };
        
        const dataStr = JSON.stringify(reportData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `learnflow-analytics-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
}

// Initialize the analytics engine when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.analyticsEngine = new AnalyticsEngine();
    
    // Add export functionality to button
    const exportBtn = document.querySelector('button:contains("Export Report")');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            window.analyticsEngine.exportReport();
        });
    }
});

// Export for use in other modules
window.AnalyticsEngine = AnalyticsEngine;