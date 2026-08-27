#!/usr/bin/env python3
"""Module that returns a key and the square of a numeric value."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple containing a key and the square of a value."""
    return (k, v * v)
