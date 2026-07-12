// 1. Appreciations
const appreciations = [
  "Excellent progress! Keep up the amazing work.",
  "You have a great learning attitude.",
  "Your dedication is clearly paying off.",
  "You show strong potential for success.",
  "Fantastic effort! You're improving consistently.",
  "Your confidence is inspiring.",
  "You communicate your ideas effectively.",
  "You have a positive mindset toward learning.",
  "Great job! Your consistency stands out.",
  "Your commitment to self-improvement is impressive.",
  "You have developed a solid communication foundation.",
  "Your hard work is reflected in your performance.",
  "You're becoming a confident communicator.",
  "Excellent balance of confidence and fluency.",
  "You demonstrate strong interpersonal skills.",
  "Your willingness to practice is commendable.",
  "Keep believing in yourself—you are improving every day.",
  "Your vocabulary growth is impressive.",
  "You have the mindset of a lifelong learner.",
  "Outstanding effort! You're on the right path."
];

// 2. Weak Areas
const weakAreas = [
  "Your daily practice time needs improvement.",
  "Try to improve your speaking fluency.",
  "Your vocabulary can be expanded further.",
  "Work on building more confidence while speaking.",
  "Practice reducing pauses during conversations.",
  "Focus on pronunciation and clarity.",
  "Improve your sentence formation skills.",
  "Avoid hesitation while expressing ideas.",
  "Try to communicate more frequently in English.",
  "Your consistency in practice could be better.",
  "Work on active listening skills.",
  "Develop better eye contact during conversations.",
  "Improve your public speaking confidence.",
  "Expand your knowledge of professional vocabulary.",
  "Focus on organizing your thoughts before speaking.",
  "Practice expressing opinions with confidence.",
  "Improve your grammar in spoken communication.",
  "Try to engage in more group discussions.",
  "Reduce dependence on filler words like 'um' and 'uh'.",
  "Increase your confidence in unfamiliar situations."
];

// 3. Strong Areas
const strongAreas = [
  "Excellent communication confidence.",
  "Strong speaking fluency.",
  "Rich and diverse vocabulary.",
  "Consistent daily practice habits.",
  "High level of self-confidence.",
  "Good clarity while expressing ideas.",
  "Strong interpersonal communication.",
  "Effective listening skills.",
  "Excellent public speaking potential.",
  "Quick learner with a positive attitude.",
  "Strong presentation abilities.",
  "Good command of conversational English.",
  "Confident body language.",
  "Well-structured communication style.",
  "Positive mindset and motivation.",
  "Excellent consistency in skill development.",
  "Ability to explain ideas clearly.",
  "Strong adaptability during conversations.",
  "Good leadership communication skills.",
  "High potential for professional success."
];

// 4. Suggestions
const suggestions = [
  "Practice speaking for at least 30 minutes every day.",
  "Read books and newspapers to improve vocabulary.",
  "Watch English interviews and podcasts regularly.",
  "Speak in English with friends whenever possible.",
  "Record yourself speaking and analyze your performance.",
  "Learn five new words every day.",
  "Participate in group discussions.",
  "Practice public speaking in front of a mirror.",
  "Focus on pronunciation using online resources.",
  "Join communication or debate clubs.",
  "Maintain a daily speaking journal.",
  "Listen to native English speakers carefully.",
  "Don't be afraid of making mistakes.",
  "Improve your body language while speaking.",
  "Set weekly communication improvement goals.",
  "Practice answering interview questions.",
  "Read aloud to improve fluency.",
  "Think in English instead of translating.",
  "Stay consistent with your learning routine.",
  "Celebrate small improvements to stay motivated."
];

// 5. Predictions
const predictions = [
  "You are likely to become a confident communicator within a few months.",
  "With consistent practice, your fluency will improve significantly.",
  "You have the potential to perform well in interviews.",
  "Your communication skills are expected to grow steadily.",
  "You are on track to becoming an effective public speaker.",
  "Employers will appreciate your improving soft skills.",
  "Your confidence is likely to increase with regular practice.",
  "You can become a strong team communicator.",
  "Your vocabulary growth will enhance your professional image.",
  "You have the potential to become a future leader.",
  "Your dedication will lead to noticeable improvements.",
  "You are building the skills needed for career success.",
  "Your communication abilities will continue to strengthen.",
  "You can confidently participate in professional discussions.",
  "You are developing skills that will benefit your future career.",
  "Your consistent effort will produce excellent results.",
  "You have the potential to excel in presentations and interviews.",
  "Your soft skills are moving in a positive direction.",
  "You are likely to become a more persuasive communicator.",
  "If you stay consistent, you'll achieve excellent communication skills."
];

const form= document.getElementById('skillsForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name= document.getElementById('name').value;
    const stdHours= parseInt(document.getElementById('stdHours').value);
    const fluency=parseInt(document.getElementById('fluency').value);
    const vocabulary=parseInt(document.getElementById('vocabulary').value);
    const confidence= parseInt(document.getElementById('confidence').value);

    const text=`Hlo ${name}, ${appreciations[(Math.floor(Math.random()*20)+confidence)%20]} ${weakAreas[(Math.floor(Math.random()*20)+vocabulary)%20]} ${strongAreas[(Math.floor(Math.random()*20)+fluency)%20]} ${suggestions[(Math.floor(Math.random()*20)+stdHours)%20]} ${predictions[(Math.floor(Math.random()*20)+name.length)%20]}`

    document.getElementById('result').textContent=text;
    form.reset()
})
