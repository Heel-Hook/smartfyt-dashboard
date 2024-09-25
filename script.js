document.addEventListener('DOMContentLoaded', function() {
    updatePerformanceMetrics();
    updateDailySnapshot();
    updateGoalProgress();
    updateLeaderboard();
    updateAchievements();
    updateActivityLog();
    initializeTeamBattle();
    
    document.querySelector('.log-activity-btn').addEventListener('click', logNewActivity);
});

function updatePerformanceMetrics() {
    const metrics = [
        { id: 'focus-score', completed: 80, remaining: 20, status: 'Excellent', trend: '+10%' },
        { id: 'effort-score', completed: 50, remaining: 50, status: 'Average', trend: '+5%' },
        { id: 'readiness-score', completed: 50, remaining: 50, status: 'Average', trend: '+5%' },
        { id: 'motivation-score', completed: 33, remaining: 67, status: 'Deficient', trend: '-3%' }
    ];

    metrics.forEach(metric => {
        const card = document.getElementById(metric.id);
        if (card) {
            card.querySelector('p:nth-child(2)').textContent = `${metric.completed}% Completed`;
            card.querySelector('p:nth-child(3)').textContent = `${metric.remaining}% Remaining`;
            card.querySelector('p:nth-child(4)').textContent = `Status: ${metric.status}`;
            card.querySelector('p:nth-child(5)').textContent = `7-day trend: ${metric.trend}`;
        }
    });
}

function updateDailySnapshot() {
    const snapshots = {
        'Total Study Time': '2 Hours',
        'Total Workout Time': '1 Hour',
        'Hours of Sleep': '8 Hours',
        'Current Stress Level': 'High',
        'Resting HR Today': '60 bpm',
        'Daily Steps': '7,343 / 10,000',
        'Goals Completed': '4/6',
        'Class Attendance': '3/3'
    };

    const container = document.querySelector('.daily-snapshot .snapshot-grid');
    for (const [title, value] of Object.entries(snapshots)) {
        const item = container.querySelector(`div:has(h4:contains("${title}"))`);
        if (item) {
            item.querySelector('p').textContent = value;
        }
    }
}

function updateGoalProgress() {
    const goals = [
        { name: 'Academic Goal', progress: 100 },
        { name: 'Athletic Goal', progress: 40 },
        { name: 'Wellness Goal', progress: 30 }
    ];

    goals.forEach(goal => {
        const goalElement = document.querySelector(`.goals .goal-item:has(h4:contains("${goal.name}"))`);
        if (goalElement) {
            goalElement.querySelector('.progress-bar-fill').style.width = `${goal.progress}%`;
        }
    });
}

function updateLeaderboard() {
    const leaderboardData = [
        { name: 'David Anderson', points: 5000 },
        { name: 'Sarah Patel', points: 4120 },
        { name: 'Michael Thompson', points: 3200 },
        { name: 'Emma Collins', points: 2700 },
        { name: 'Joshua Lee', points: 2290 }
    ];

    const leaderboardList = document.querySelector('.leaderboard ol');
    leaderboardList.innerHTML = '';
    leaderboardData.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${entry.name} - ${entry.points} pts`;
        leaderboardList.appendChild(li);
    });
}

function updateAchievements() {
    const achievements = [
        { title: 'Step Champion', xp: 250 },
        { title: 'Iron Warrior', xp: 180 },
        { title: 'Cardio King', xp: 250 }
    ];

    const achievementsList = document.querySelector('.achievements ul');
    achievementsList.innerHTML = '';
    achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.textContent = `${achievement.title} - +${achievement.xp} XP`;
        achievementsList.appendChild(li);
    });
}

function updateActivityLog() {
    const activities = [
        { type: 'Workout', points: 50, time: '2 hours ago' },
        { type: 'Study', points: 10, time: '7 hours ago' },
        { type: 'Workout', points: 30, time: '11 hours ago' }
    ];

    const activityList = document.querySelector('.activity-log ul');
    activityList.innerHTML = '';
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = `${activity.type} - +${activity.points} points - ${activity.time}`;
        activityList.appendChild(li);
    });
}

function initializeTeamBattle() {
    const teamBattleElement = document.querySelector('.team-battle');
    if (teamBattleElement) {
        const contributeButton = teamBattleElement.querySelector('button');
        contributeButton.addEventListener('click', contributeToTeamBattle);
    }
}

function contributeToTeamBattle() {
    console.log('Contributing to team battle...');
    // Implement logic for contributing to team battle
    alert('Thank you for contributing to the team battle!');
}

function logNewActivity() {
    console.log('Logging new activity...');
    // Implement logic for logging a new activity
    const activityType = prompt('Enter activity type (e.g., Workout, Study):');
    const activityDuration = prompt('Enter activity duration (in minutes):');
    if (activityType && activityDuration) {
        alert(`New activity logged: ${activityType} for ${activityDuration} minutes`);
        // Here you would typically send this data to a server and update the UI
    }
}
