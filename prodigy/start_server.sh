#!/bin/sh

service cron start
python -m prodigy classify-trees dataset /app/data/import/data.jsonl -F prodigy_recipe/classify_tree_patches.py