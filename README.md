# Which javascript action

This action runs the "which" command for a given application and produces the path as an output.

## Inputs

### `command`

**Required** The name of the command to search for.

## Outputs

### `path`

The path to the command specified.

## Example usage

```yaml
uses: tuneharmonic/which
with:
  command: grep
```