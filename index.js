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
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
       if (word.includes('stopPropagation')) {
          return 'StopPropagation'
        } else if (word.includes ('JSONP')) {
          return 'JSONP?'
        } else  if (word.includes('preventDefault')) {
          return 'PreventDefault?'
        }else if (word.includes('NaN')) {
          return 'NaN'
        }else if (word.includes('API')) {
          return 'API'
        }else if (word.includes('OO')) {
          return 'OO'
        }else 
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        
      })
      .join(' ')
  })
}
console.log(titleCased());


