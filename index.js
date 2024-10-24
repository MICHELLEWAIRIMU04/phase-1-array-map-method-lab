const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    return tutorial
      .split(' ')
      .map((word) => {
        if (word === 'OO') return 'OO'
        if (word === 'API') return 'API'
        if (word === 'NaN') return 'NaN'
        if (word === 'JSONP') return 'JSONP'
        if (word === 'stopPropagation') return 'StopPropagation'
        if (word === 'preventDefault') return 'PreventDefault'
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  })
}


console.log(titleCased())
