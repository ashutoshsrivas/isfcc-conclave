#!/usr/bin/env bash
# Safe redeploy of the ISFCC static site to isfcc.geu.ac.in.
# Builds locally, then syncs the export to Apache's docroot.
# Requires: isfcc.pem in the repo root (never committed — gitignored).
set -euo pipefail

HOST="ubuntu@ec2-65-2-127-184.ap-south-1.compute.amazonaws.com"
KEY="isfcc.pem"
DOCROOT="/var/www/isfcc"

cd "$(dirname "$0")"
[ -f "$KEY" ] || { echo "ERROR: $KEY not found next to deploy.sh"; exit 1; }

echo "==> Building static export…"
rm -rf .next out
npm run build

echo "==> Syncing to $HOST:$DOCROOT…"
rsync -az --delete -e "ssh -i $KEY" out/ "$HOST:$DOCROOT/"

echo "==> Fixing ownership & permissions…"
ssh -i "$KEY" "$HOST" "sudo chown -R ubuntu:www-data $DOCROOT \
  && sudo find $DOCROOT -type d -exec chmod 750 {} \; \
  && sudo find $DOCROOT -type f -exec chmod 640 {} \;"

echo "==> Verifying…"
code=$(curl -s -o /dev/null -w "%{http_code}" https://isfcc.geu.ac.in/)
[ "$code" = "200" ] || { echo "ERROR: site returned $code"; exit 1; }
echo "Deployed OK — https://isfcc.geu.ac.in (HTTP $code)"
