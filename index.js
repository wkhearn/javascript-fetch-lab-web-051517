function getIssues() {
  let title = $('#title').val()
  let body = $('#body').val()
  let userName = "wkhearn"
  let repo = "javascript-fetch-lab"

  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  $('#issues').empty
  json.forEach((issue) => {
    $('#issues').append(`<a href="${issue.html_url}">Title: ${issue.title} Body: ${issue.body}</a><br>`)
  })
}

function createIssue() {
  let title = $('#title').val()
  let body = $('#body').val()
  let userName = "wkhearn"
  let repo = "javascript-fetch-lab"


  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify({title: `${title}`, body: `${body}`}),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json()).then(json => getIssues()).catch(error => console.log(error))
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo(json))
}

function showForkedRepo(data){
  $('#results').append(`<h2>Forked Successfully!</h2><a href=${data.html_url} id="forked">${data.html_url}</a>`)
}

function getToken() {
  return ''
}
