function formatDateToISO(dateObject: Date): string {
  const year: number = dateObject.getFullYear();
  const month: string = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day: string = String(dateObject.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default formatDateToISO;
