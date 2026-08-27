#!/usr/bin/env python3
"""Module that calculates lengths of iterable sequence elements."""

from typing import Iterable, List, Sequence, Tuple


def element_length(
        lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return each sequence together with its length."""
    return [(i, len(i)) for i in lst]
