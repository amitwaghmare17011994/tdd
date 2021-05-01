export const findAge = (date) => {
    const today = new Date();
    const birthDate = date;

    const yearsDifference = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        return yearsDifference - 1;
    }

    return yearsDifference;
}