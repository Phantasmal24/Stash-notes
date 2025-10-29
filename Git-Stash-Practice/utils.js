/** Type of stashes and their uses.
 * 1. git stash -> Hides tracked files.
 * 2. git stash -u -> Hides tracked + untracked files.
 * 3. git stash -a -> Hides tracked + untracked + ignored files.
 * 4. git stash pop -> Applies the latest stash and deletes it.
 * 5 git stash list -> Lists all stashes.
 * 6. git stash apply 'stash@{n}' -> Applies a specific stash and keeps it.
 * 7. git stash drop 'stash@{n}; -> Deletes a specific stash.
 * 8. git stash -p -> Lets you partially stash changes inside a file.
 * 9. git stash branch 'branch_name' -> Creates a new branch from a stash.
 * 10. git stash clear -> Deletes all stashes.
 */