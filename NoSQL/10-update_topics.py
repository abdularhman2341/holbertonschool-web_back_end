#!/usr/bin/env python3
"""Update school topics in MongoDB."""


def update_topics(mongo_collection, name, topics):
    """Replace the topics of all schools matching the given name."""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )