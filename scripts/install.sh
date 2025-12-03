#!/usr/bin/env bash

##
## Simple installer/runner for vps-benchmark-hophamlam
## - Downloads the latest vps-benchmark.sh from GitHub
## - Makes it executable
## - Runs it
## - Removes the temporary file
##

set -euo pipefail

REPO_RAW_BASE="https://raw.githubusercontent.com/hophamlam/vps-benchmark/refs/heads/main"
SCRIPT_PATH="scripts/vps-benchmark.sh"
TMP_FILE="/tmp/vps-benchmark-hophamlam.sh"

cleanup() {
  rm -f "${TMP_FILE}"
}

trap cleanup EXIT

echo ">>> vps-benchmark-hophamlam installer"
echo "Downloading latest benchmark script..."

if ! command -v curl >/dev/null 2>&1; then
  echo "[!] curl is required to download the script. Please install curl and try again."
  exit 1
fi

curl -fsSL "${REPO_RAW_BASE}/${SCRIPT_PATH}" -o "${TMP_FILE}"
chmod +x "${TMP_FILE}"

echo
echo "Running benchmark..."
echo

bash "${TMP_FILE}" || true

echo
echo "Done. Temporary files have been removed."


