// Fungsi untuk mengecek readmore expand atau tidak 
export const showReadmore = (expanded) => {
    return !expanded ? 'more' : 'hide';
}

export const formatCurrency = (value) => {
    // Extract numeric value and remove any spaces or non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
  
    // Format the numeric part with thousand separators and append "Rp"
    return `${Number(numericValue).toLocaleString("id-ID")}`;
};