# Actions and Githooks
We setup github actions on this project so we can enforce actions/checks and workflow processes on github.

### On Merge to Master
Whenever we merge a PR to master, we want to update the documentation based on the changes the user made in
the commits. We run a git action to handle this as well:
 - Collect README files and update wiki
 - Fix/remove links in Wiki
 - Build documentation and generate commit

## Githooks
TODO...
