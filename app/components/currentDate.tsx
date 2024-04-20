export default function currentDate(date = new Date()) {

    const year: string = date.toLocaleString('default', {year: 'numeric'});
    const month: string = date.toLocaleString('default', {month: '2-digit'});
    const day: string = date.toLocaleString('default', {day: '2-digit'});
    let formatDate: string = [year, month, day].join('-');

    return (

        formatDate

    );
}