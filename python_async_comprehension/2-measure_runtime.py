#!/usr/bin/env python3
"""Measure the runtime of parallel async comprehensions."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the runtime of four parallel async comprehensions."""
    start_time = time.time()
    await asyncio.gather(
        *[async_comprehension() for i in range(4)]
    )
    end_time = time.time()
    return end_time - start_time
