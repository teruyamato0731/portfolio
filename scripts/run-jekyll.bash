#!/bin/bash
set -euxo pipefail
cd "${BASH_SOURCE[0]%/*}"/..
bundle exec jekyll serve
