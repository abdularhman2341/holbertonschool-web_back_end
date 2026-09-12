#!/usr/bin/env python3
"""Insert a school document into MongoDB."""


def insert_school(mongo_collection, **kwargs):
    """Insert a document and return its new ID."""
    return mongo_collection.insert_one(kwargs).inserted_id