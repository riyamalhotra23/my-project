// Adaptive Learning Engine for LearnFlow Platform
// Handles quiz generation, progress tracking, and adaptive algorithms

class AdaptiveLearningEngine {
    constructor() {
        this.currentQuestion = 1;
        this.totalQuestions = 10;
        this.selectedAnswer = null;
        this.userProgress = {
            overallMastery: 75,
            subjects: {
                'Mathematics': { mastery: 85, questions: 89, correct: 76 },
                'Science': { mastery: 72, questions: 67, correct: 48 },
                'Language Arts': { mastery: 91, questions: 78, correct: 71 },
                'History': { mastery: 68, questions: 45, correct: 31 }
            },
            streak: 7,
            level: 12,
            totalTime: 18.5
        };
        
        this.questionBank = [
            {
                id: 1,
                subject: 'Mathematics',
                topic: 'Algebra',
                bloomLevel: 'Apply',
                difficulty: 0.7,
                question: 'Solve for x: 2x + 5 = 13',
                options: [
                    { text: 'x = 3', correct: false },
                    { text: 'x = 4', correct: true },
                    { text: 'x = 5', correct: false },
                    { text: 'x = 6', correct: false }
                ],
                explanation: 'Subtract 5 from both sides: 2x = 8. Then divide by 2: x = 4.',
                hint: 'Try isolating x by first subtracting 5 from both sides.'
            },
            {
                id: 2,
                subject: 'Mathematics',
                topic: 'Geometry',
                bloomLevel: 'Understand',
                difficulty: 0.6,
                question: 'What is the area of a rectangle with length 8 and width 5?',
                options: [
                    { text: '13 square units', correct: false },
                    { text: '40 square units', correct: true },
                    { text: '26 square units', correct: false },
                    { text: '30 square units', correct: false }
                ],
                explanation: 'Area of rectangle = length × width = 8 × 5 = 40 square units.',
                hint: 'Remember: Area of rectangle = length × width'
            },
            {
                id: 3,
                subject: 'Science',
                topic: 'Physics',
                bloomLevel: 'Apply',
                difficulty: 0.8,
                question: 'If a car travels 120 km in 2 hours, what is its average speed?',
                options: [
                    { text: '60 km/h', correct: true },
                    { text: '120 km/h', correct: false },
                    { text: '240 km/h', correct: false },
                    { text: '30 km/h', correct: false }
                ],
                explanation: 'Average speed = total distance ÷ total time = 120 km ÷ 2 hours = 60 km/h.',
                hint: 'Speed = distance ÷ time'
            },
            {
                id: 4,
                subject: 'Language Arts',
                topic: 'Grammar',
                bloomLevel: 'Analyze',
                difficulty: 0.5,
                question: 'Which sentence is grammatically correct?',
                options: [
                    { text: 'Their going to the store.', correct: false },
                    { text: 'There going to the store.', correct: false },
                    { text: 'They\'re going to the store.', correct: true },
                    { text: 'Theyre going to the store.', correct: false }
                ],
                explanation: '\'They\'re\' is the contraction of \'they are\', which fits correctly in the sentence.',
                hint: 'Think about what "they are" would sound like shortened'
            },
            {
                id: 5,
                subject: 'History',
                topic: 'World History',
                bloomLevel: 'Remember',
                difficulty: 0.4,
                question: 'In which year did World War II end?',
                options: [
                    { text: '1943', correct: false },
                    { text: '1944', correct: false },
                    { text: '1945', correct: true },
                    { text: '1946', correct: false }
                ],
                explanation: 'World War II ended in 1945 with the surrender of Japan.',
                hint: 'It was in the mid-1940s'
            }
        ];
        
        this.currentQuestionData = null;
        this.initializeEventListeners();
        this.loadQuestion();
        this.generateMasteryHeatmap();
        this.updateProgressDisplay();
    }
    
    initializeEventListeners() {
        // Quiz option selection
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quiz-option') || e.target.closest('.quiz-option')) {
                const option = e.target.closest('.quiz-option');
                this.selectOption(option);
            }
        });
        
        // Submit button
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitAnswer());
        }
        
        // Hint button
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.showHint());
        }
        
        // Skip button
        const skipBtn = document.getElementById('skip-btn');
        if (skipBtn) {
            skipBtn.addEventListener('click', () => this.skipQuestion());
        }
    }
    
    selectOption(optionElement) {
        // Remove previous selections
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Select current option
        optionElement.classList.add('selected');
        this.selectedAnswer = optionElement.getAttribute('data-option');
        
        // Enable submit button
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50');
        }
        
        // Animate selection
        anime({
            targets: optionElement,
            scale: [1, 1.02, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    }
    
    submitAnswer() {
        if (!this.selectedAnswer || !this.currentQuestionData) return;
        
        const selectedIndex = this.selectedAnswer.charCodeAt(0) - 65; // A=0, B=1, etc.
        const isCorrect = this.currentQuestionData.options[selectedIndex].correct;
        
        // Show feedback
        this.showFeedback(isCorrect, selectedIndex);
        
        // Update progress
        this.updateProgress(isCorrect);
        
        // Disable further interaction
        this.disableQuizOptions();
        
        // Move to next question after delay
        setTimeout(() => {
            this.nextQuestion();
        }, 3000);
    }
    
    showFeedback(isCorrect, selectedIndex) {
        const feedbackSection = document.getElementById('feedback-section');
        const feedbackContent = document.getElementById('feedback-content');
        
        if (!feedbackSection || !feedbackContent) return;
        
        // Style the options
        document.querySelectorAll('.quiz-option').forEach((option, index) => {
            if (index === selectedIndex) {
                option.classList.add(isCorrect ? 'correct' : 'incorrect');
            } else if (this.currentQuestionData.options[index].correct) {
                option.classList.add('correct');
            }
        });
        
        // Show feedback content
        feedbackContent.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="text-2xl">${isCorrect ? '✅' : '❌'}</div>
                <div>
                    <div class="font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'} mb-2">
                        ${isCorrect ? 'Correct!' : 'Incorrect'}
                    </div>
                    <div class="text-charcoal/80 text-sm mb-3">
                        ${this.currentQuestionData.explanation}
                    </div>
                    ${!isCorrect ? `
                        <div class="bg-sage/10 rounded-lg p-3 text-sm">
                            <strong>💡 Learning Tip:</strong> ${this.currentQuestionData.hint}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        feedbackSection.classList.remove('hidden');
        
        // Animate feedback appearance
        anime({
            targets: feedbackSection,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 500,
            easing: 'easeOutCubic'
        });
    }
    
    showHint() {
        if (!this.currentQuestionData) return;
        
        // Create hint modal or tooltip
        const hintModal = document.createElement('div');
        hintModal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        hintModal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-md mx-4">
                <div class="text-center mb-6">
                    <div class="text-4xl mb-2">💡</div>
                    <h3 class="text-xl font-bold text-charcoal">Hint</h3>
                </div>
                <p class="text-charcoal/80 text-center mb-6">${this.currentQuestionData.hint}</p>
                <div class="text-center">
                    <button class="btn-primary px-6 py-2 rounded-lg font-medium" onclick="this.parentElement.parentElement.parentElement.remove()">
                        Got it!
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(hintModal);
        
        // Animate modal appearance
        anime({
            targets: hintModal.querySelector('div'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    }
    
    skipQuestion() {
        this.nextQuestion();
    }
    
    nextQuestion() {
        this.currentQuestion++;
        this.selectedAnswer = null;
        
        // Update progress
        const progress = (this.currentQuestion / this.totalQuestions) * 100;
        const progressBar = document.getElementById('quiz-progress');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        const currentQuestionSpan = document.getElementById('current-question');
        if (currentQuestionSpan) {
            currentQuestionSpan.textContent = this.currentQuestion;
        }
        
        // Load next question
        this.loadQuestion();
        
        // Reset UI
        this.resetQuizUI();
    }
    
    loadQuestion() {
        // Select question based on adaptive algorithm
        this.currentQuestionData = this.selectAdaptiveQuestion();
        
        if (!this.currentQuestionData) return;
        
        // Update question display
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.textContent = this.currentQuestionData.question;
        }
        
        // Update options
        const optionsContainer = document.getElementById('quiz-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            this.currentQuestionData.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'quiz-option border-2 border-sage/20 rounded-lg p-4';
                optionElement.setAttribute('data-option', String.fromCharCode(65 + index));
                optionElement.innerHTML = `
                    <span class="font-semibold mr-3">${String.fromCharCode(65 + index)})</span>
                    ${option.text}
                `;
                optionsContainer.appendChild(optionElement);
            });
        }
        
        // Update subject tags
        this.updateQuestionTags();
    }
    
    selectAdaptiveQuestion() {
        // Simple adaptive algorithm - select based on lowest mastery
        const subjects = Object.keys(this.userProgress.subjects);
        const lowestMasterySubject = subjects.reduce((lowest, subject) => {
            return this.userProgress.subjects[subject].mastery < this.userProgress.subjects[lowest].mastery ? subject : lowest;
        });
        
        // Filter questions by subject and select one
        const subjectQuestions = this.questionBank.filter(q => q.subject === lowestMasterySubject);
        return subjectQuestions[Math.floor(Math.random() * subjectQuestions.length)] || this.questionBank[0];
    }
    
    updateQuestionTags() {
        // This would update the subject, topic, and Bloom level tags
        // Implementation would depend on the specific HTML structure
    }
    
    resetQuizUI() {
        // Reset option styles
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Hide feedback
        const feedbackSection = document.getElementById('feedback-section');
        if (feedbackSection) {
            feedbackSection.classList.add('hidden');
        }
        
        // Disable submit button
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50');
        }
    }
    
    disableQuizOptions() {
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.style.pointerEvents = 'none';
        });
    }
    
    updateProgress(isCorrect) {
        if (isCorrect) {
            this.userProgress.streak++;
            // Update subject mastery
            const subject = this.currentQuestionData.subject;
            if (this.userProgress.subjects[subject]) {
                this.userProgress.subjects[subject].correct++;
                // Simple mastery calculation
                const accuracy = this.userProgress.subjects[subject].correct / this.userProgress.subjects[subject].questions;
                this.userProgress.subjects[subject].mastery = Math.min(100, Math.round(accuracy * 100));
            }
        }
        
        this.userProgress.subjects[this.currentQuestionData.subject].questions++;
        this.updateProgressDisplay();
    }
    
    updateProgressDisplay() {
        // Update progress circle
        const progressCircle = document.getElementById('progress-circle');
        if (progressCircle) {
            const circumference = 2 * Math.PI * 40; // radius = 40
            const offset = circumference - (this.userProgress.overallMastery / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
        
        // Update subject progress bars
        Object.keys(this.userProgress.subjects).forEach(subject => {
            const subjectData = this.userProgress.subjects[subject];
            // Update subject mastery displays if they exist
        });
    }
    
    generateMasteryHeatmap() {
        const heatmapContainer = document.getElementById('mastery-heatmap');
        if (!heatmapContainer) return;
        
        const topics = [
            'Algebra', 'Geometry', 'Calculus', 'Statistics',
            'Physics', 'Chemistry', 'Biology', 'Earth Science',
            'Grammar', 'Literature', 'Writing', 'Vocabulary',
            'World History', 'US History', 'Government', 'Economics'
        ];
        
        heatmapContainer.innerHTML = '';
        
        topics.forEach((topic, index) => {
            const cell = document.createElement('div');
            const mastery = Math.random() * 100; // Random mastery for demo
            const intensity = Math.floor(mastery / 20); // 0-4 scale
            
            const colors = [
                'bg-red-200',
                'bg-yellow-200',
                'bg-green-200',
                'bg-green-400',
                'bg-green-600'
            ];
            
            cell.className = `heatmap-cell w-8 h-8 ${colors[intensity]} rounded cursor-pointer`;
            cell.setAttribute('title', `${topic}: ${Math.round(mastery)}% mastery`);
            
            cell.addEventListener('click', () => {
                this.showTopicDetails(topic, mastery);
            });
            
            heatmapContainer.appendChild(cell);
        });
    }
    
    showTopicDetails(topic, mastery) {
        // Create modal showing topic details
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-md mx-4">
                <div class="text-center mb-6">
                    <h3 class="text-xl font-bold text-charcoal mb-2">${topic}</h3>
                    <div class="text-4xl font-bold text-sage">${Math.round(mastery)}%</div>
                    <div class="text-charcoal/60">Mastery Level</div>
                </div>
                <div class="space-y-4 mb-6">
                    <div class="flex justify-between">
                        <span class="text-charcoal/70">Questions Attempted:</span>
                        <span class="font-semibold">${Math.floor(Math.random() * 50) + 20}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-charcoal/70">Accuracy Rate:</span>
                        <span class="font-semibold">${Math.round(mastery)}%</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-charcoal/70">Last Practiced:</span>
                        <span class="font-semibold">2 days ago</span>
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn-primary px-6 py-2 rounded-lg font-medium" onclick="this.parentElement.parentElement.parentElement.remove()">
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
    }
}

// Initialize the adaptive learning engine when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.adaptiveEngine = new AdaptiveLearningEngine();
});

// Export for use in other modules
window.AdaptiveLearningEngine = AdaptiveLearningEngine;