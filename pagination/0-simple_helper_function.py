#!/usr/bin/env python3
"""Module that provides a helper function for pagination index ranges."""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Calculate the start and end indexes for a pagination range."""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
