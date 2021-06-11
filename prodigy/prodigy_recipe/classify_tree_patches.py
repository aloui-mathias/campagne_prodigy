import prodigy
from prodigy.components.loaders import JSONL
from prodigy.components.db import connect

import random
from datetime import datetime

with open('prodigy_recipe/template.html', 'r') as template:
    html_template = template.read()

with open('prodigy_recipe/template.css', 'r') as template:
    css_template = template.read()

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
            "global_css": css_template,
            "javascript": javascript_template,
            "force_stream_order": True,
            "feed_overlap": True,
            "batch_size": "2",
            "answer_batch_size": "2",
            "label": "Tree",
            "labels": ["Tree"],
            "image_manual_modes": ["rect"],
            "image_manual_show_labels": False,
        }
    }
