Pagination

This project covers different pagination techniques in Python, from simple page-based pagination to deletion-resilient hypermedia pagination.

Learning Objectives

By the end of this project, you should be able to explain:

How to paginate a dataset using page and page_size parameters

How to paginate a dataset with hypermedia metadata

How to paginate a dataset in a deletion-resilient manner

Requirements

Ubuntu 20.04 LTS

Python 3.9

All files must end with a new line

The first line of Python files must be #!/usr/bin/env python3

Code must follow pycodestyle 2.5.*

All modules and functions must have documentation

All functions and coroutines must be type-annotated

Dataset

The project uses:

Popular_Baby_Names.csv

Files

0-simple_helper_function.py - Calculates the start and end indexes for a page

1-simple_pagination.py - Returns a page from the dataset

2-hypermedia_pagination.py - Adds hypermedia pagination metadata

3-hypermedia_del_pagination.py - Implements deletion-resilient pagination