# Which

This action runs the "which" command for a given application and produces the path as an output.

## Inputs

### `command`

**Required** The name of the command to search for.

### `fail-on-not-found`

Whether or not to fail the action if the command cannot be found. If set to false and the command is not found, `path` will be set as an empty string. Defaults to `false`.

## Outputs

### `path`

The path to the command specified.

## Example usage

```yaml
uses: tuneharmonic/which@v2
with:
  command: grep
  fail-on-not-found: true
```