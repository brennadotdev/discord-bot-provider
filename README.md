# Discord Bot Pulumi Provider

This repo is generated from the Pulumi Provider template and provides management for Discord Bot Application Commands.

A code generator is available which generates SDKs in TypeScript, Python, Go and .NET which are also checked in to the `sdk` folder.  The SDKs are generated from a schema in `provider/cmd/pulumi-resource-discordbot/schema.json`.  This file should be kept aligned with the resources, functions and types supported by the provider implementation.

Note that the generated provider plugin (`pulumi-resource-discordbot`) must be on your `PATH` to be used by Pulumi deployments.  If creating a provider for distribution to other users, you should ensure they install this plugin to their `PATH`.

## Pre-requisites

Install the `pulumictl` cli from the [releases](https://github.com/pulumi/pulumictl/releases) page or follow the [install instructions](https://github.com/pulumi/pulumictl#installation)

> NB: Usage of `pulumictl` is optional. If not using it, hard code the version in the [Makefile](Makefile) of when building explicitly pass version as `VERSION=0.0.1 make build`

## Build and Test

```bash
# build and install the resource provider plugin
$ make build install

# test
$ cd examples/simple
$ yarn link @pulumi/discordbot
$ yarn install
$ pulumi stack init test
$ pulumi up
```

## References

Other resources for learning about the Pulumi resource model:
* [Pulumi Kubernetes provider](https://github.com/pulumi/pulumi-kubernetes/blob/master/provider/pkg/provider/provider.go)
* [Pulumi Terraform Remote State provider](https://github.com/pulumi/pulumi-terraform/blob/master/provider/cmd/pulumi-resource-terraform/provider.go)
* [Dynamic Providers](https://www.pulumi.com/docs/intro/concepts/programming-model/#dynamicproviders)
