#!/usr/bin/env bash
esbuild src/resolvers/*.ts \
  --bundle \
  --outdir=build \
  --external:"@aws-appsync/utils" \
  --format=esm \
  --platform=node \
  --target=esnext \
  --sourcemap=inline \
  --sources-content=false

# @aws-appsync/utils is provided by AppSync at runtime.