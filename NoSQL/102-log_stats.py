#!/usr/bin/env python3
"""Display Nginx log statistics and the ten most frequent IPs."""

from pymongo import MongoClient


def log_stats():
    """Print log counts, status checks, and the top ten IPs."""
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    print("{} logs".format(collection.count_documents({})))
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))

    status_count = collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print("{} status check".format(status_count))

    print("IPs:")
    pipeline = [
        {"$group": {"_id": "$ip", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 10}
    ]
    for ip in collection.aggregate(pipeline):
        print("\t{}: {}".format(ip["_id"], ip["count"]))

    client.close()


if __name__ == "__main__":
    log_stats()