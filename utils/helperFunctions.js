const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const formatAddress = (address) => {
  const formattedAddress = address.split(",");
  return `${capitalize(formattedAddress[0])}, ${capitalize(
    formattedAddress[1].trim()
  )}`;
};

module.exports = { capitalize, formatAddress };
