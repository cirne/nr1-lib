# Lew's Shared NR1 Library

Code I reuse across multiple projects, and I don't want to deal
with NPM packaging because the files themselves are under a high rate of change

## How to use
use hard linking to the file(s) you want to include in your NerdPack, and
then as changes are made to a library file, other nerdpacks in local
development will automatically get those changes (after a git commit).

