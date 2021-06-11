import prodigy
from prodigy.components.loaders import JSONL
from prodigy.components.db import connect

import random
from datetime import datetime

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
            "force_stream_order": True,
            "feed_overlap": True,
            "batch_size": "1",
            "answer_batch_size": "1",
            "label": "Tree",
            "labels": ["Tree"],
            "image_manual_modes": ["rect"],
            "image_manual_show_labels": False,
            "global_css":
                ".prodigy-buttons button:nth-child(2) {display: none}"
        }
    }
