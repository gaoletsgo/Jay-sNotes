Undo Things
===

`$ git commit --amend`  
redo that commit, make the additional changes you forgot, stage them, and commit again. 

修改上次的提交。不产生新的纪录。


## Unstaging a staged file

`$ git reset HEAD <file>`  
unstage this file.

## Unmodifiying a Modified file

`$ git checkout --<file>`  
discard changed in working directory.

&starf; It’s important to understand that `git checkout -- <file>` is a dangerous command. Any local changes you made to that file are gone — Git just replaced that file with the most recently-committed version. Don’t ever use this command unless you absolutely know that you don’t want those unsaved local changes.