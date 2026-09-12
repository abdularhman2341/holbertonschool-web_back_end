#!/usr/bin/env python3
"""Find schools that teach a specified topic."""


def schools_by_topic(mongo_collection, topic):
    """Return a list of schools that have the specified topic."""
    return list(mongo_collection.find({"topics": topic}))