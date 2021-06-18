import prodigy
from prodigy.components.loaders import JSONL
from prodigy.components.db import connect

import random
from datetime import datetime

with open('prodigy_recipe/template.js', 'r') as template:
    javascript_template = template.read()

@prodigy.recipe("classify-trees")
def classify_trees(dataset, source):

    def get_stream():
        stream = prodigy.get_stream(source)
        for image in stream:
            yield image

    stream = list(get_stream())

    return {
        "dataset": dataset,
        "stream": stream,
        "view_id": "image_manual",
        "exclude": [],
        "config": {
            "javascript": javascript_template,
            "force_stream_order": True,
            "feed_overlap": True,
            "batch_size": "10",
            "answer_batch_size": "1",
            "label": "Tree",
            "labels": ["Tree"],
            "image_manual_modes": ["rect"],
            "image_manual_show_labels": False,
        }
    }
