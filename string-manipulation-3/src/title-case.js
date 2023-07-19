/* exported titleCase */

function titleCase(title) {
  let newTitle = '';
  const titleArray = title.split(' ');

  for (let i = 0; i < titleArray.length; i++) {
    const firstLetter = titleArray[i].slice(0, 1);
    const restOfWord = titleArray[i].slice(1);
    if (titleArray[i].includes('-')) {
      const hyphenWordArray = titleArray[i].split('-');
      const firstWordFirstLetter = hyphenWordArray[0].slice(0, 1);
      const firstWordRemainder = hyphenWordArray[0].slice(1);
      const secondWordFirstLetter = hyphenWordArray[1].slice(0, 1);
      const secondWordRemainder = hyphenWordArray[1].slice(1);
      newTitle +=
        firstWordFirstLetter.toUpperCase() +
        firstWordRemainder.toLowerCase() +
        '-' +
        secondWordFirstLetter.toUpperCase() +
        secondWordRemainder.toLowerCase() +
        ' ';
    } else if (titleArray[i].length > 4) {
      switch (titleArray[i].toLowerCase()) {
        case 'javascript':
          newTitle += 'JavaScript ';
          break;
        case 'javascript:':
          newTitle += 'JavaScript: ';
          break;
        default:
          newTitle +=
            firstLetter.toUpperCase() + restOfWord.toLowerCase() + ' ';
      }
    } else if (i === 0) {
      newTitle += firstLetter.toUpperCase() + restOfWord.toLowerCase() + ' ';
    } else if (titleArray[i - 1].includes(':')) {
      newTitle += firstLetter.toUpperCase() + restOfWord.toLowerCase() + ' ';
    } else if (titleArray[i].length < 4) {
      switch (titleArray[i].toLowerCase()) {
        case 'and':
        case 'or':
        case 'nor':
        case 'per':
        case 'to':
        case 'a':
        case 'an':
        case 'the':
        case 'as':
        case 'at':
        case 'by':
        case 'for':
        case 'in':
        case 'of':
        case 'on':
          newTitle += titleArray[i].toLowerCase() + ' ';
          break;
        case 'api':
          newTitle += 'API';
          break;
        default:
          newTitle +=
            firstLetter.toUpperCase() + restOfWord.toLowerCase() + ' ';
      }
    } else {
      const firstLetter = titleArray[i].slice(0, 1);
      const restOfWord = titleArray[i].slice(1);
      newTitle += firstLetter.toUpperCase() + restOfWord.toLowerCase() + ' ';
    }
  }
  return newTitle.trim();
}
