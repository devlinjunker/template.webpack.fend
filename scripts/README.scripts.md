# Actions and Githooks
This project uses github actions([github](https://github.com/devlinjunker/template.webpack.fend/blob/master/.github/workflows/master-merge.yml))
to enforce actions/checks and workflow processes on github.

### On Merge to Master
Whenever a PR is merged master, the documentation is updated based on the changes the user made in
the commits. A git action([github]()) is set up to do the following:
 - Collect README files and update wiki
 - Fix/remove links in Wiki
 - Build documentation and generate commit

This Action requires the Git repo to have a secret configured in the Settings page named `GH_PAT` that
contains a Github Personal Access Token from your user account: https://github.com/settings/tokens.
There is also a reference to the repo name in the script, so you will need to ensure that this is updated if
the repo name is different.

### Master Build Status
This action checks the build status of the project and verifies that all of the tests and style linters are
not failing. This occurs for every commit in a Github PR against the `master` branch, and for every commit (push)
to the `master` branch on Github.


### Label Manager
This project defines the Github Labels in a [YAML file](https://github.com/devlinjunker/template.webpack.fend/blob/master/.github/labels.yaml) that is managed by the [Github Labeler Action](https://github.com/marketplace/actions/github-labeler). 
Any labels that are not defined in this file will be removed every time this action is run. **This does not affect PRs**


Runs:
 - linter
 - build (with webpack)
 - tests (karma)

## Githooks
TODO...

## Github Specific
Whenever a PR is made on Github, the body/description will be pre-populated with the contents in
`.github/PULL_REQUEST_TEMPLATE.md`
