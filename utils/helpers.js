module.exports = {
    format_date: date => {
        return `${new Date(date).toLocaleDateString('en-US', { timeZone: 'America/New_York'})}`;
    }, 
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    }
};