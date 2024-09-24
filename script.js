document.addEventListener('DOMContentLoaded', function() {
    // Update performance metrics
    updatePerformanceMetrics();

    // Update goal progress
    updateGoalProgress();

    // Fetch and display personalized insights
    fetchInsights();

    // Update leaderboard
    updateLeaderboard();

    // Add event listener for "Log New Activity" button
    document.querySelector('.log-activity-btn').addEventListener('click', logNewActivity);
});

function updatePerformanceMetrics() {
    const metrics = [
        { id: 'focus-score', value: 80, trend: 10 },
        { id: 'effort-score', value: 50, trend: 5 },
        { id: 'readiness-score', value: 50, trend: 5 },
        { id: 'motivation-score', value: 33, trend: -3 }
    ];

    metrics.forEach(metric => {
        const card = document.getElementById(metric.id);
        if (card) {
            card.querySelector('.completion-percentage').textContent = `${metric.value}% Completed`;
            card.querySelector('.trend').textContent = `7-day trend: ${metric.trend > 0 ? '+' : ''}${metric.trend}%`;
            // Update progress bar
            card.querySelector('.progress-bar-fill').style.width = `${metric.value}%`;
        }
    });
}

function updateGoalProgress() {
    const goals = [
        { id: 'academic-goal', progress: 100 },
        { id: 'athletic-goal', progress: 40 },
        { id: 'wellness-goal', progress: 30 }
    ];

    goals.forEach(goal => {
        const goalElement = document.getElementById(goal.id);
        if (goalElement) {
            goalElement.querySelector('.progress-bar-fill').style.width = `${goal.progress}%`;
        }
    });
}

function fetchInsights() {
    // Simulating an API call to fetch insights
    const insights = [
        {
            title: "Study Efficiency",
            content: "Based on your recent data, we've identified opportunities to enhance your study efficiency. Your Focus Score indicates that you might benefit from shorter, more frequent study sessions."
        },
        {
            title: "Workout Variety",
            content: "Your Effort Score suggests that incorporating more varied workouts could enhance your athletic performance. Diversifying your routine can help prevent burnout and improve overall fitness."
        }
    ];

    const insightsContainer = document.querySelector('.insights');
    insights.forEach((insight, index) => {
        const insightElement = document.createElement('div');
        insightElement.classList.add('insight-card');
        insightElement.innerHTML = `
            <h3>Insight ${index + 1}</h3>
            <p>${insight.content}</p>
            <a href="#">Learn More</a>
        `;
        insightsContainer.appendChild(insightElement);
    });
}

function updateLeaderboard() {
    const leaderboardData = [
        { name: "David Anderson", points: 5000 },
        { name: "Sarah Patel", points: 4120 },
        { name: "Michael Thompson", points: 3200 },
        { name: "Emma Collins", points: 2700 },
        { name: "Joshua Lee", points: 2290 }
    ];

    const leaderboardList = document.querySelector('.leaderboard ol');
    leaderboardList.innerHTML = '';
    leaderboardData.forEach(entry
