document.addEventListener('DOMContentLoaded', () => {
  const GITHUB_API_HOST = 'https://api.github.com/repos/';

  const header = document.getElementsByTagName('header')[0];

  const href = header.lastChild.getAttribute('href');

  const index = href.indexOf('github.com');
  if (index !== -1) {
    const issuesElement = document.createElement('a');
    issuesElement.innerText = 'Issues';
    issuesElement.style['margin-left'] = 'auto';
    issuesElement.style['margin-right'] = '0px';
    issuesElement.setAttribute('href', `${href}/issues`);
    const issuesNum = document.createElement('span');
    issuesNum.setAttribute('class', 'github-badge');
    issuesNum.style['visibility'] = 'hidden';
    issuesElement.appendChild(issuesNum);

    header.insertBefore(issuesElement, header.lastChild);

    const pullsElement = document.createElement('a');
    pullsElement.innerText = 'Pulls';
    pullsElement.style['margin-right'] = '0px';
    pullsElement.setAttribute('href', `${href}/pulls`);
    const pullsNum = document.createElement('span');
    pullsNum.setAttribute('class', 'github-badge');
    pullsNum.style['visibility'] = 'hidden';
    pullsElement.appendChild(pullsNum);

    header.insertBefore(pullsElement, header.lastChild);

    // Fetch Number of Pulls and Issues to Display
    const repo = href.substring(index + 11);
    const issuesHref = `${GITHUB_API_HOST + repo  }/issues`;
    const pullsHref = `${GITHUB_API_HOST + repo  }/pulls`;

    fetch(issuesHref).then((response) => {
      return response.json();
    }).then((issues) => {
      issues = issues.filter((issue) => {
        return issue.pull_request === undefined;
      });
      issuesNum.textContent = issues.length;
      issuesNum.style['visibility'] = 'inherit';
    });

    fetch(pullsHref).then((response) => {
      return response.json();
    }).then((pulls) => {
      pullsNum.textContent = pulls.length;
      pullsNum.style['visibility'] = 'inherit';
    });
  }
});
