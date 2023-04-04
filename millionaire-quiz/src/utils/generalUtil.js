const getWithPercentChance = (percentage) => {
    const threshold = percentage / 100;
    return Math.random() < threshold;
}

export const generalUtil = {
    getWithPercentChance
}