################################################################################
## header start                                                               ##
################################################################################
# allow importing og service local packages
import os
import sys

where_am_i = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, where_am_i+"/../__packages__")
sys.path.append(where_am_i)
# end of local package imports
################################################################################
## header end                                                                 ##
################################################################################
