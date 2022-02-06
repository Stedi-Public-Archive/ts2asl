oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cloud-script
$ cloud-script COMMAND
running command...
$ cloud-script (--version)
cloud-script/0.0.0 darwin-arm64 node-v14.18.1
$ cloud-script --help [COMMAND]
USAGE
  $ cloud-script COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cloud-script hello PERSON`](#cloud-script-hello-person)
* [`cloud-script hello world`](#cloud-script-hello-world)
* [`cloud-script help [COMMAND]`](#cloud-script-help-command)
* [`cloud-script plugins`](#cloud-script-plugins)
* [`cloud-script plugins:inspect PLUGIN...`](#cloud-script-pluginsinspect-plugin)
* [`cloud-script plugins:install PLUGIN...`](#cloud-script-pluginsinstall-plugin)
* [`cloud-script plugins:link PLUGIN`](#cloud-script-pluginslink-plugin)
* [`cloud-script plugins:uninstall PLUGIN...`](#cloud-script-pluginsuninstall-plugin)
* [`cloud-script plugins update`](#cloud-script-plugins-update)

## `cloud-script hello PERSON`

Say hello

```
USAGE
  $ cloud-script hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/OlafConijn/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cloud-script hello world`

Say hello world

```
USAGE
  $ cloud-script hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `cloud-script help [COMMAND]`

Display help for cloud-script.

```
USAGE
  $ cloud-script help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cloud-script.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `cloud-script plugins`

List installed plugins.

```
USAGE
  $ cloud-script plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cloud-script plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `cloud-script plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cloud-script plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cloud-script plugins:inspect myplugin
```

## `cloud-script plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cloud-script plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ cloud-script plugins add

EXAMPLES
  $ cloud-script plugins:install myplugin 

  $ cloud-script plugins:install https://github.com/someuser/someplugin

  $ cloud-script plugins:install someuser/someplugin
```

## `cloud-script plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cloud-script plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ cloud-script plugins:link myplugin
```

## `cloud-script plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cloud-script plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cloud-script plugins unlink
  $ cloud-script plugins remove
```

## `cloud-script plugins update`

Update installed plugins.

```
USAGE
  $ cloud-script plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
