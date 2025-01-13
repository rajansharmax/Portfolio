export const calculateExperienceDuration = (startDate: Date, endDate = new Date()) => {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    if (days < 0) {
        months -= 1;
        days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    return `${years ? `${years} years, ` : ''}${months ? `${months} months, ` : ''}${days ? `${days} days` : ''}`;
};