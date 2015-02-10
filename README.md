# demo-roulette
Randomly clones a Meteor Repository, starts it, and opens the source code in your editor

## Setup

Create a json file with an object containing your names/repos:

```
{
	"Some Person": "https://github.com/aothsoaue/microscope",
	"Another Person": "https://github.com/aoeuo/microscope"
}
```

## Usage

* `npm install -g git+https://git@github.com/schickm/demo-roulette.git`
* `demoroulette name_and_repos.json`

## Why node?

This tool was written for a class learning Node.js.  Otherwise I would have just used a shell script.