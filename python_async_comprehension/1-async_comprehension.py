#!/usr/bin/env python3
"""Module that uses an asynchronous comprehension."""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect values from async_generator using a comprehension."""
    return [value async for value in async_generator()]
