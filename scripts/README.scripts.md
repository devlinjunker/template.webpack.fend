# Actions and Githooks
This project uses github actions([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/.github/workflows))
to enforce actions/checks and workflow processes on github.

### On Merge to Master
Whenever a PR is merged master, the documentation is updated based on the changes the user made in
the commits. We run a git action to handle this:
 - Collect README files and update wiki
 - Fix/remove links in Wiki
 - Build documentation and generate commit

## Githooks
TODO...

## Github Specific
Whenever a PR is made on Github, the body/description will be pre-populated with the contents in
`.github/PULL_REQUEST_TEMPLATE.md`
