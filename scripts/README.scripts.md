# Actions and Githooks
This project uses github actions to enforce actions/checks and workflow processes on github.

### On Merge to Master
Whenever a PR is merged master, we want to update the documentation based on the changes the user made in
the commits. We run a git action to handle this:
 - Collect README files and update wiki
 - Fix/remove links in Wiki
 - Build documentation and generate commit

## Githooks
TODO...
