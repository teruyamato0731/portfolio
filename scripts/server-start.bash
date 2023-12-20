#!/bin/bash
set -euxo pipefail
cd "${BASH_SOURCE[0]%/*}"/..
cd "html"
python3 -m http.server 8000
