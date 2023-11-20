function firstChar(text) {
  // your code here
  // Trim the input string to remove leading and trailing spaces
  const trimmedString = inputString.trim();

  // Check if the trimmed string is empty
  if (trimmedString === '') {
    return '';
  }

  // Return the first character of the trimmed string
  return trimmedString[0];
}



// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
