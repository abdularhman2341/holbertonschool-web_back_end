#!/usr/bin/env python3
"""Module that creates a floating-point multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by multiplier."""
    def multiply(value: float) -> float:
        """Return value multiplied by the configured multiplier."""
        return value * multiplier

    return multiply
