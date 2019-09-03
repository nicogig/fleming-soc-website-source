#!/bin/bash

echo "Hello, $USER!"
echo "Cleaning up and rebuilding website..."
gatsby clean
gatsby build

echo "Deploying website..."
echo "Deploying updates to GitHub"
git add .
git commit
git push

echo "Deploying website to Surge"
surge public/