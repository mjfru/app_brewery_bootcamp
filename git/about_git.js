/*
! Git & Github Review

* Initialize
  - In the folder you want to make a Git repo, type:
    git init
  
* Add to the staging area
  - To view where in the process your items are
    git status
  - To add something to the staging area:
    git add "file_name" (or dot . to add everything in that file )
  - To make your 'checkpoint' and include everything in the staging area:
    git commit -m "brief message about what was changed"

* To see your Git history:
  git log

* To revert back to an older 'version'
  git diff file_name will show you the differences
  git checkout file_name reverts it back to its previous saved version.

! Remote Repositories w/ Github
  For an existing repo on your own PC:
  Create a new remote rep on Github
  git remote add origin url_goes_here_to_github_repo
  git push -u origin main

! Git Clone
* git clone url - 'pulls' down a repo from a remote repository to your local one.
This is so you can have your own copy of code someone else wrote; bug fixing, updating, handing-off, etc.

! Branching & Merging
? When you want to try something different without making changes on the main branch...we can make a new branch!
*  - git branch new-branch-name
*  - git branch will show you what branch you're currently on and what others you have.
*  - git checkout name-of-branch will switch the current branch you're on.
? The feature we're experimenting with can be re-implemented with a merge request.
*  - git merge name-of-new-branch (while on your MAIN branch)
    This 'absords' the other branch, it still exists in isolation but is not also incorporated into your main branch.

! Forking & Pull Requests
* Forking is the act of going to a remote repository and essentially making a copy of it for your own use; it does not have any effect on the original.
From there, you can then clone it to your own local repository and push it to her own remote repository.
* If someone wants to incorporate these changes, they have to make a pull request to the original repository.
? The owner of the original can review the changes in the pull request and decide whether to incorporate them into the project.
*/
