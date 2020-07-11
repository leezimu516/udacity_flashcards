

function formatCard(question, answer) {
    return {
        question,
        answer
    }
}

function formatDeck(title) {
    return {
        title,
        questions:[]
    }
}

export {
    formatCard,
    formatDeck
}