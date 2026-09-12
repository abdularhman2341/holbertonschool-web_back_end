#!/usr/bin/env python3
"""Return students sorted by their average scores."""


def top_students(mongo_collection):
    """Return all students with averageScore, highest average first."""
    pipeline = [
        {"$addFields": {"averageScore": {"$avg": "$topics.score"}}},
        {"$sort": {"averageScore": -1}}
    ]
    return list(mongo_collection.aggregate(pipeline))