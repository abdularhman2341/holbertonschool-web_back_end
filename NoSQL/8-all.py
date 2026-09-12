#!/usr/bin/env python3
"""Provide a function to list all documents in a MongoDB collection."""


def list_all(mongo_collection):
    """Return all documents in the collection as a list."""
    return list(mongo_collection.find())