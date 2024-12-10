export const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str; // Return the original string if it's within the limit
    }
    
    return str.slice(0, maxLength - 3) + '...'; // Truncate and add ellipsis
  };