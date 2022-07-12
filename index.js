const body = document.getElementsByTagName('body')[0];
const form = document.getElementById('form');
const formContainer = document.getElementById('formContainer');
const input = document.getElementById('inputField');
const submitBtn = document.getElementById('submitBtn');
const comments = document.getElementById('comments');

const header = document.createElement('h1')
header.id = 'header' 
header.textContent = 'Comments'
formContainer.prepend(header)

const badWords = ['zoom', 'channel', 'galvanize', 'mcsp', 'garrett', 'ross', 'incompetent', 'unfunny']

submitBtn.addEventListener('click', function(e) {
     e.preventDefault()
     createComment()
     input.value = ''
})

function createComment() {
     const commentsSection = document.createElement('div')
     body.append(commentsSection)
     commentsSection.id = 'commentsSection'
     commentsSection.classList.add('individualComment')
     for (let x = 0; x < badWords.length; x++){
          let current = badWords[x];
          if (current === input.value.toLowerCase()) {
               commentsSection.textContent = current[0] + '----'
               commentsSection.appendChild(comment)
               return
          } else {
               commentsSection.textContent = input.value
               comments.appendChild(commentsSection)
          }
     }
}